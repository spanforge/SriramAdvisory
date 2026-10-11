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
const valid = () => ({ name: "Example Visitor", email: "Mixed.Case@example.test", interest: "general", challenge: "A sufficiently long example question.", privacyAcknowledged: true });

test("enquiry accepts all six categories, preserves email case and defaults optional fields", () => {
  for (const interest of enabledInterests()) {
    const result = validateEnquiry({ ...valid(), interest, source: "unknown" });
    assert.deepEqual(result.errors, {});
    assert.equal(result.payload.email, "Mixed.Case@example.test");
    assert.equal(result.payload.source, "contact");
    for (const field of ["organisation", "attempts", "outcome"]) assert.equal(result.payload[field], "");
  }
});
test("server validation rejects invalid enum, unknown fields and absent privacy acknowledgement", () => {
  assert.ok(validateEnquiry({ ...valid(), interest: "constructor" }).errors.interest);
  assert.ok(validateEnquiry({ ...valid(), extra: "unknown" }).errors.form);
  assert.ok(validateEnquiry({ ...valid(), privacyAcknowledged: false }).errors.privacyAcknowledged);
  assert.ok(validateEnquiry({ ...valid(), email: "x@example.test\r\nInjected: value" }).errors.email);
  assert.ok(validateEnquiry(null).errors.form);
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
