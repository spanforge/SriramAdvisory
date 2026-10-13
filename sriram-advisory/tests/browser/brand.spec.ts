import { test, expect } from "@playwright/test";

test("product review outputs are clear and retained resources remain accessible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".sa-lede")).toContainText("product ideas");
  await page.goto("/work-with-sriram");
  for (const name of ["Decision brief", "Evidence review", "Recommended direction", "Next experiment", "Review conversation"]) await expect(page.getByRole("heading", { name, exact: true })).toBeVisible();
  await page.goto("/resources?collection=consulting");
  await expect(page.locator(".sa-card")).toHaveCount(4);
  await page.getByRole("searchbox").fill("decision");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page).toHaveURL(/collection=consulting/);
  await expect(page).toHaveURL(/q=decision/);
  await expect(page.locator(".sa-card")).toHaveCount(2);
  await page.goto("/resources?collection=career");
  await expect(page.getByRole("link", { name: "Next" })).toHaveAttribute("href", /collection=career/);
});

test("frameworks have distinct pages and the Pro offer matches the policy", async ({ page }) => {
  for (const [slug, title] of [["sa-airs", "SA-AIRS"], ["replaceability-curve", "Replaceability Curve"], ["ai-leverage-ladder", "AI Leverage Ladder"], ["career-positioning-audit", "Career Positioning Audit"]]) {
    await page.goto(`/frameworks/${slug}`);
    await expect(page).toHaveURL(new RegExp(`/frameworks/${slug}$`));
    await expect(page.locator("h1")).toHaveText(title);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.sriramadvisory.com/frameworks/${slug}`);
  }
  await page.goto("/career-intelligence-report/sa-airs-pro");
  await expect(page.locator("main")).toContainText("full refund with no questions asked");
  await expect(page.locator("main")).not.toContainText("Top 10%");
  await page.getByRole("button", { name: "Order the Pro report – ₹999", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.goto("/refund");
  await expect(page.locator("main")).toContainText("full refund with no questions asked");
  await page.goto("/products/ai-risk-rankings-india-2026");
  await expect(page.locator("main")).not.toContainText("70-80%");
  await expect(page.locator("main")).not.toContainText("2M-2.5M");
});

test("new and retained pages remain readable across mobile and desktop", async ({ page }) => {
  const routes = ["/", "/about", "/work-with-sriram", "/contact", "/resources", "/resources/sprint-deliverables-example", "/resources/decision-note-template", "/methodology", "/about/our-thinking", "/frameworks/sa-airs", "/career-intelligence-report/sa-airs-pro", "/products/ai-risk-rankings-india-2026", "/guides/cloud-engineer-ai-survival-guide-2026", "/services/career-positioning-audit", "/refund"];
  for (const width of [320, 390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of routes) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
      await expect(page.locator("h1"), path).toHaveCount(1);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), `${path} at ${width}`).toBe(true);
    }
  }
});
