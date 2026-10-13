import { test, expect } from "@playwright/test";

async function fillEnquiry(page: import("@playwright/test").Page) {
  await page.locator("#enquiry-name").fill("Local Test");
  await page.locator("#enquiry-email").fill("local-test@example.com");
  await page.locator("#enquiry-challenge").fill("A local mocked enquiry to check submission behaviour.");
  await page.locator("#enquiry-privacyAcknowledged").check();
}

test("contact validates, retains failed enquiries and submits to the existing Formspree form", async ({ page }) => {
  let requests = 0;
  let accepted = false;
  let body = "";
  await page.route("https://formspree.io/f/mojzewly", async route => {
    requests++;
    body = route.request().postData() ?? "";
    expect(route.request().method()).toBe("POST");
    expect(route.request().headers().accept).toBe("application/json");
    await route.fulfill({ status: accepted ? 200 : 500, contentType: "application/json", body: accepted ? '{"ok":true}' : '{"errors":[{"message":"Unavailable"}]}' });
  });
  await page.goto("/contact?stage=market");
  await expect(page.locator("#enquiry-interest")).toHaveValue("market");
  await expect(page.locator("#enquiry-interest option")).toHaveText(["Idea", "Market", "Distribution", "Adoption", "Unsure"]);
  await expect(page.locator("#enquiry-privacyAcknowledged")).not.toBeChecked();
  const submit = page.getByRole("button", { name: "Send enquiry", exact: true });
  await submit.click();
  await expect(page.locator("#enquiry-errors")).toBeFocused();
  expect(requests).toBe(0);
  await page.locator("#enquiry-name").fill("Local Test");
  await page.locator("#enquiry-email").fill("local-test@example.com");
  await page.locator("#enquiry-challenge").fill("A local mocked enquiry to check submission behaviour.");
  await expect(page.locator("#challenge-hint")).toContainText("53 / 2000 characters");
  await page.locator("#enquiry-productUrl").fill("javascript:alert(1)");
  await submit.click();
  await expect(page.locator("#error-productUrl")).toContainText("HTTP or HTTPS");
  expect(requests).toBe(0);
  await page.locator("#enquiry-productUrl").fill("https://example.com/product");
  await expect(page.locator("#enquiry-attempts")).not.toBeVisible();
  await page.locator(".sa-optional-fields summary").click();
  await page.locator("#enquiry-attempts").fill("Tried a small local experiment.");
  await page.locator("#enquiry-privacyAcknowledged").check();
  await submit.click();
  await expect(submit).toBeEnabled();
  await expect(page.locator("#enquiry-challenge")).toHaveValue("A local mocked enquiry to check submission behaviour.");
  expect(requests).toBe(1);
  expect(body).toContain('name="email"');
  expect(body).toContain("local-test@example.com");
  expect(body).toContain('name="_gotcha"');
  expect(body).toContain('name="privacyAcknowledged"');
  expect(body).toContain("Tried a small local experiment.");
  expect(body).toContain("https://example.com/product");
  accepted = true;
  await submit.click();
  await expect(page.getByRole("heading", { name: "Thank you. Your enquiry has been received." })).toBeFocused();
  expect(requests).toBe(2);
});

test("pending submissions are locked and retries retain the same reference", async ({ page }) => {
  let requests = 0;
  const bodies: string[] = [];
  let release: () => void = () => {};
  const pending = new Promise<void>(resolve => { release = resolve; });
  await page.route("https://formspree.io/f/mojzewly", async route => {
    requests++;
    bodies.push(route.request().postData() ?? "");
    if (requests === 1) { await pending; await route.fulfill({ status: 500, json: { errors: [] } }); }
    else await route.fulfill({ status: 200, json: { ok: true } });
  });
  await page.goto("/contact?stage=idea");
  await fillEnquiry(page);
  const submit = page.getByRole("button", { name: "Send enquiry", exact: true });
  await submit.click();
  await expect(page.getByRole("button", { name: "Sending…", exact: true })).toBeDisabled();
  await page.locator("form.sa-form").evaluate(form => { (form as HTMLFormElement).requestSubmit(); });
  await expect.poll(() => requests).toBe(1);
  release();
  await expect(submit).toBeEnabled();
  await submit.click();
  await expect(page.getByRole("heading", { name: "Thank you. Your enquiry has been received." })).toBeVisible();
  const reference = (body: string) => body.match(/name="enquiryReference"\r?\n\r?\n([^\r\n]+)/u)?.[1];
  expect(reference(bodies[0])).toBeTruthy();
  expect(reference(bodies[1])).toBe(reference(bodies[0]));
  expect(requests).toBe(2);
});

test("timeouts preserve typed content and never show success", async ({ page }) => {
  await page.route("https://formspree.io/f/mojzewly", () => { /* Deliberately leave the provider request unanswered. */ });
  await page.goto("/contact");
  await fillEnquiry(page);
  await page.getByRole("button", { name: "Send enquiry", exact: true }).click();
  await expect(page.locator("form .sa-error")).toContainText("Your enquiry could not be sent", { timeout: 20000 });
  await expect(page.locator("#enquiry-challenge")).toHaveValue("A local mocked enquiry to check submission behaviour.");
  await expect(page.getByRole("heading", { name: "Thank you. Your enquiry has been received." })).toHaveCount(0);
});

test("invalid email, provider rejection and unexpected response retain the form", async ({ page }) => {
  let status = 422;
  let requests = 0;
  await page.route("https://formspree.io/f/mojzewly", async route => { requests++; await route.fulfill({ status, json: { errors: [{ message: "Rejected" }] } }); });
  await page.goto("/contact");
  await fillEnquiry(page);
  const submit = page.getByRole("button", { name: "Send enquiry", exact: true });
  await page.locator("#enquiry-email").fill("invalid");
  await submit.click();
  await expect(page.locator("#error-email")).toContainText("valid email");
  expect(requests).toBe(0);
  await page.locator("#enquiry-email").fill("local-test@example.com");
  for (status of [422, 429, 200]) {
    await submit.click();
    await expect(submit).toBeEnabled();
    await expect(page.locator("form .sa-error")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Thank you. Your enquiry has been received." })).toHaveCount(0);
  }
  expect(requests).toBe(3);
});

test("stage links select the form without submitting and emit no enquiry content", async ({ page }) => {
  let requests = 0;
  await page.route("https://formspree.io/f/mojzewly", async route => { requests++; await route.abort(); });
  await page.addInitScript(() => {
    const events: unknown[] = [];
    Object.assign(window, { reviewEvents: events });
    window.addEventListener("sriram:review-event", event => events.push((event as CustomEvent).detail));
  });
  for (const stage of ["idea", "market", "distribution", "adoption"]) {
    await page.goto("/");
    await page.locator(`a[href="/contact?stage=${stage}"]`).click();
    await expect(page.locator("#enquiry-interest")).toHaveValue(stage);
    expect(requests).toBe(0);
  }
  await fillEnquiry(page);
  const events = await page.evaluate(() => (window as unknown as { reviewEvents: unknown[] }).reviewEvents);
  expect(events).toContainEqual({ name: "enquiry_start", properties: {} });
  expect(JSON.stringify(events)).not.toContain("local-test@example.com");
  expect(JSON.stringify(events)).not.toContain("submission behaviour");
});
