import { test, expect } from "@playwright/test";

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
  await page.goto("/contact?interest=problem-solving-sprint");
  const submit = page.getByRole("button", { name: "Send enquiry", exact: true });
  await submit.click();
  await expect(page.locator("#enquiry-errors")).toBeFocused();
  expect(requests).toBe(0);
  await page.locator("#enquiry-name").fill("Local Test");
  await page.locator("#enquiry-email").fill("local-test@example.com");
  await page.locator("#enquiry-challenge").fill("A local mocked enquiry to check submission behaviour.");
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
  accepted = true;
  await submit.click();
  await expect(page.getByRole("heading", { name: "Thank you. Your enquiry has been received." })).toBeFocused();
  expect(requests).toBe(2);
});
