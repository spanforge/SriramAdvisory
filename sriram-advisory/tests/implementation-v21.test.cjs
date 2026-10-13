/* eslint-disable @typescript-eslint/no-require-imports -- The Node test harness loads TypeScript through a CommonJS transpile hook. */
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...rest) {
  return resolve.call(this, request.startsWith("@/") ? path.join(root, request.slice(2)) : request, parent, ...rest);
};
require.extensions[".ts"] = function (module, filename) {
  const output = ts.transpileModule(fs.readFileSync(filename, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } });
  module._compile(output.outputText, filename);
};
const { validateEnquiry, canonicalEnquiry, codePointLength } = require("../lib/enquiryValidation.ts");
const { matchesSearch, normaliseSearch, paginate, directoryHref } = require("../lib/directory.ts");
const { services, enabledInterests } = require("../lib/positioning.ts");
const { sanitiseAnalyticsUrl, reviewEvent } = require("../lib/analytics.ts");
const { proxy } = require("../proxy.ts");
const { NextRequest } = require("next/server");
const valid = () => ({ name: "Example Visitor", email: "Mixed.Case@example.test", interest: "general", challenge: "A sufficiently long example question.", privacyAcknowledged: true });

test("enquiry validator accepts enabled interests, preserves email case and defaults optional fields", () => {
  for (const interest of enabledInterests()) {
    const result = validateEnquiry({ ...valid(), interest, source: "unknown" });
    assert.deepEqual(result.errors, {});
    assert.equal(result.payload.email, "Mixed.Case@example.test");
    assert.equal(result.payload.source, "contact");
    for (const field of ["organisation", "attempts", "outcome"]) assert.equal(result.payload[field], "");
  }
});
test("enquiry validator rejects invalid enum, unknown fields and absent privacy acknowledgement", () => {
  assert.ok(validateEnquiry({ ...valid(), interest: "constructor" }).errors.interest);
  assert.ok(validateEnquiry({ ...valid(), extra: "unknown" }).errors.form);
  assert.ok(validateEnquiry({ ...valid(), privacyAcknowledged: false }).errors.privacyAcknowledged);
  assert.ok(validateEnquiry({ ...valid(), email: "x@example.test\r\nInjected: value" }).errors.email);
  assert.ok(validateEnquiry(null).errors.form);
});

test("optional product links accept HTTP(S) only and enforce the 2048-character boundary", () => {
  for (const productUrl of ["", "https://example.com/product", "http://example.com", " https://example.com "]) {
    assert.deepEqual(validateEnquiry({ ...valid(), productUrl }).errors, {});
  }
  for (const productUrl of ["javascript:alert(1)", "ftp://example.com", "example.com", "https://", "https://example.com/ bad", "https://example.com/" + "x".repeat(2048)]) {
    assert.ok(validateEnquiry({ ...valid(), productUrl }).errors.productUrl, productUrl);
  }
});

test("analytics strips private URL state and ignores legacy events and arbitrary properties", () => {
  assert.equal(sanitiseAnalyticsUrl("https://www.sriramadvisory.com/contact?email=private@example.com#private"), "https://www.sriramadvisory.com/contact");
  assert.equal(sanitiseAnalyticsUrl("https://www.sriramadvisory.com/thinking/private-person"), "https://www.sriramadvisory.com/thinking/article");
  assert.equal(sanitiseAnalyticsUrl("https://www.sriramadvisory.com/payment-status?order=private"), null);
  assert.equal(sanitiseAnalyticsUrl("https://www.sriramadvisory.com/insights?q=private"), null);
  assert.equal(reviewEvent("purchase", { email: "private" }), null);
  assert.equal(reviewEvent("review_cta_click", { placement: "private" }), null);
  assert.deepEqual(reviewEvent("review_cta_click", { placement: "hero", email: "private", href: "private" }), { name: "review_cta_click", properties: { placement: "hero" } });
  assert.deepEqual(reviewEvent("enquiry_success", { email: "private" }), { name: "enquiry_success", properties: {} });
});

test("staging fails closed, challenges unauthorised access and leaves production open", () => {
  const keys = ["SRIRAM_STAGING", "STAGING_USERNAME", "STAGING_PASSWORD"];
  const previous = Object.fromEntries(keys.map(key => [key, process.env[key]]));
  try {
    process.env.SRIRAM_STAGING = "1";
    delete process.env.STAGING_USERNAME; delete process.env.STAGING_PASSWORD;
    assert.equal(proxy(new NextRequest("https://example.com/")).status, 503);
    process.env.STAGING_USERNAME = "reviewer"; process.env.STAGING_PASSWORD = "local-test-only";
    const denied = proxy(new NextRequest("https://example.com/"));
    assert.equal(denied.status, 401);
    assert.equal(denied.headers.get("x-robots-tag"), "noindex, nofollow");
    const auth = "Basic " + Buffer.from("reviewer:local-test-only").toString("base64");
    const accepted = proxy(new NextRequest("https://example.com/", { headers: { authorization: auth } }));
    assert.equal(accepted.status, 200);
    assert.equal(accepted.headers.get("cache-control"), "private, no-store");
    process.env.SRIRAM_STAGING = "0";
    assert.equal(proxy(new NextRequest("https://example.com/")).headers.get("x-robots-tag"), null);
  } finally { for (const key of keys) { if (previous[key] === undefined) delete process.env[key]; else process.env[key] = previous[key]; } }
});
test("Unicode limits count code points and trim boundary whitespace", () => {
  assert.equal(codePointLength("😀😀"), 2);
  assert.deepEqual(validateEnquiry({ ...valid(), name: " 😀😀 ", challenge: "😀".repeat(2000) }).errors, {});
  assert.ok(validateEnquiry({ ...valid(), challenge: "😀".repeat(2001) }).errors.challenge);
  assert.ok(validateEnquiry({ ...valid(), name: "x" }).errors.name);
  assert.ok(validateEnquiry({ ...valid(), organisation: "x".repeat(121) }).errors.organisation);
  assert.ok(validateEnquiry({ ...valid(), attempts: "x".repeat(1001) }).errors.attempts);
});
test("HTML-like text remains plain text; honeypot is excluded from content and hash", () => {
  const result = validateEnquiry({ ...valid(), challenge: "<script>alert('plain text only')</script>", website: "bot" });
  assert.equal(result.honeypot, true);
  assert.equal(result.payload.challenge, "<script>alert('plain text only')</script>");
  assert.equal(Object.hasOwn(result.payload, "website"), false);
  assert.equal(canonicalEnquiry(validateEnquiry(valid()).payload), canonicalEnquiry(validateEnquiry({ ...valid(), website: "" }).payload));
});
test("disabled service is absent from allowed interests and server acceptance", () => {
  const service = services.find(s => s.interest === "implementation");
  service.enabled = false;
  try { assert.equal(enabledInterests().includes("implementation"), false); assert.ok(validateEnquiry({ ...valid(), interest: "implementation" }).errors.interest); }
  finally { service.enabled = true; }
});
test("directory search matches every word case-insensitively and normalises whitespace", () => {
  assert.equal(matchesSearch("Task purpose and a practical decision", "  DECISION   task "), true);
  assert.equal(matchesSearch("Task purpose", "task decision"), false);
  assert.equal(normaliseSearch("x".repeat(101)).length, 100);
});
test("pagination clamps invalid/out-of-range values and retains URL filters", () => {
  const records = Array.from({ length: 25 }, (_, i) => i);
  assert.equal(paginate(records, "-1").page, 1);
  assert.equal(paginate(records, "abc").page, 1);
  assert.equal(paginate(records, "1.5").page, 1);
  assert.equal(paginate(records, "999").page, 3);
  assert.deepEqual(paginate(records, "3").items, [24]);
  assert.equal(paginate([], "4").page, 1);
  const href = new URL(directoryHref("/insights", "work decision", "category", "Work and organisations", 2), "https://example.test");
  assert.equal(href.searchParams.get("page"), "2");
  assert.equal(href.searchParams.get("category"), "Work and organisations");
});
test("approved essays have real dates, complete MDX bodies and explicit ordered feature selection", () => {
  const essays = JSON.parse(fs.readFileSync(path.join(root, "content/launch-essays.json"), "utf8"));
  assert.equal(essays.length, 3);
  for (const essay of essays) {
    assert.equal(essay.status, "published");
    assert.equal(essay.publishedAt, "2026-10-11");
    assert.equal(essay.author, "Sriram Srinivasan");
    const body = fs.readFileSync(path.join(root, "content/articles", essay.slug + ".mdx"), "utf8");
    assert.equal(body.trim().split(/\r?\n\r?\n/).length, 5);
    assert.ok(body.length > 1000);
  }
});
test("commercial records and payment provider APIs remain byte-identical", () => {
  const baseline = JSON.parse(fs.readFileSync(path.join(root, "docs/implementation-baseline.json"), "utf8"));
  const crypto = require("node:crypto");
  for (const name of ["lib/siteCatalog.ts", "lib/paymentCatalog.ts", "lib/guideSalesContent.ts", "lib/bundlesCatalog.ts", "app/api/create-order/route.ts", "app/api/verify-order/route.ts"]) {
    assert.equal(crypto.createHash("sha256").update(fs.readFileSync(path.join(root, name))).digest("hex"), baseline[name], name);
  }
});
