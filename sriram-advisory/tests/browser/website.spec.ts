import { test, expect } from "@playwright/test";

const routes = ["/", "/work-with-sriram", "/thinking", "/thinking/how-products-found-their-customers-01-dropbox", "/services/problem-solving-sprint", "/services/implementation-support", "/services/team-workshops", "/about", "/business", "/resources", "/careers", "/contact", "/insights", "/insights/before-buying-an-ai-tool", "/services/business-delivery-health-check", "/products/airs-assessment", "/tools/free-ai-exposure-check"];

test("every redesigned and retained primary journey has one shared shell", async ({ page }) => {
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("header.sa-header"), route).toHaveCount(1);
    await expect(page.locator("footer.sa-footer"), route).toHaveCount(1);
    await expect(page.locator("main#main-content"), route).toHaveCount(1);
    await expect(page.locator("h1"), route).toHaveCount(1);
    await expect(page.locator(".sa-header")).not.toContainText("IT services performance & careers");
    await expect(page.locator(".sa-footer")).not.toContainText("IT services performance & careers");
  }
});

test("responsive layouts and 200% zoom do not overflow", async ({ page }) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ["/", "/work-with-sriram", "/about", "/thinking", "/thinking/how-products-found-their-customers-01-dropbox", "/resources", "/insights", "/insights/before-buying-an-ai-tool", "/contact"]) {
      await page.goto(route);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), `${route} at ${width}px`).toBe(true);
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.evaluate(() => { document.body.style.zoom = "2"; });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), "200% zoom").toBe(true);
});

test("mobile hero keeps the review action on the first screen", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const action = page.locator(".review-home-hero").getByRole("link", { name: "Request a Review", exact: true });
  const bounds = await action.boundingBox();
  expect(bounds).not.toBeNull();
  expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(844);
  await page.screenshot({ path: testInfo.outputPath("homepage-mobile.png"), fullPage: true });
});

test("all sitemap routes, sharing image and retained download resolve", async ({ request }, testInfo) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gu)].map(match => new URL(match[1]).pathname);
  const results: { path: string; status: number }[] = [];
  for (const path of [...new Set([...paths, "/opengraph-image", "/SA_Conversion_Sprint_v2.docx"])]) {
    const response = await request.get(path);
    results.push({ path, status: response.status() });
    expect(response.status(), path).toBe(200);
  }
  const redirect = await request.get("/services/problem-solving-sprint", { maxRedirects: 0 });
  expect(redirect.status()).toBe(301);
  expect(redirect.headers().location).toBe("/work-with-sriram");
  await testInfo.attach("route-verification", { body: JSON.stringify(results, null, 2), contentType: "application/json" });
});

test("mobile menu traps focus, closes on Escape and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Menu", exact: true });
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("button", { name: "Close menu" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", { name: "Request a Review" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "Close menu" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await trigger.click();
  await page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", { name: "Research & Insights", exact: true }).click();
  await expect(page).toHaveURL(/\/thinking$/);
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
});

test("search, pagination and browser back preserve directory state", async ({ page }) => {
  await page.goto("/resources");
  await expect(page.getByRole("navigation", { name: "Pagination" })).toBeVisible();
  await page.getByRole("link", { name: "Next", exact: false }).click();
  await expect(page).toHaveURL(/page=2/);
  await page.goBack();
  await expect(page).toHaveURL(/\/resources$/);
  await page.goto("/insights");
  await page.getByRole("searchbox", { name: "Search", exact: true }).fill("AI task");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page).toHaveURL(/q=AI(?:\+|%20)task/);
  await expect(page.locator(".sa-article-card h3")).toContainText(["Before buying an AI tool, examine why the task exists"]);
  await page.getByRole("searchbox", { name: "Search", exact: true }).fill("unmatchable-search");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page).toHaveURL(/q=unmatchable-search/);
  await expect(page.getByText("No articles match this search. Try a different term or view all thinking.")).toBeVisible();
  await page.goBack();
  await expect(page.getByRole("searchbox", { name: "Search", exact: true })).toHaveValue("AI task");
});

test("initial HTML includes directory results and SEO excludes private states", async ({ request }) => {
  const html = await (await request.get("/insights?q=task")).text();
  expect(html).toContain("Before buying an AI tool, examine why the task exists");
  expect(html).toContain('rel="canonical" href="https://www.sriramadvisory.com/insights"');
  const resources = await (await request.get("/resources?page=2")).text();
  expect(resources).toContain("Page ");
  expect(resources).not.toContain("Loading resources");
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("/insights/training-needs-practice");
  expect(sitemap).not.toContain("/payment-status");
  expect(sitemap).not.toContain("/api/");
  const missing = await request.get("/insights/not-a-published-article");
  expect(missing.status()).toBe(404);
  const redirect = await request.get("/services?interest=general", { maxRedirects: 0 });
  expect(redirect.status()).toBe(301);
  expect(redirect.headers().location).toBe("/work-with-sriram?interest=general");
});

test("homepage explains the product review and preserves the approved broader audience", async ({ page }, testInfo) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Decide what to build. Understand how it can find customers.");
  await expect(page.locator(".review-decision")).toHaveCount(4);
  await expect(page.getByRole("heading", { name: "Start with a Product and Market Review" })).toBeVisible();
  await expect(page.locator("main")).toContainText("This is a paid advisory engagement.");
  await expect(page.locator("main")).not.toContainText(/solopreneur/i);
  await expect(page.locator("footer").getByRole("link", { name: "Resources", exact: true })).toHaveCount(0);
  await expect(page.getByRole("img", { name: "Sriram Srinivasan, founder of Sriram Advisory" })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("homepage-desktop.png"), fullPage: true });
});
