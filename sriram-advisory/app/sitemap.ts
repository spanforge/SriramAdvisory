import type { MetadataRoute } from "next";
import { relatedInsights, resources, siteConfig } from "@/lib/advisoryContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/careers",
    "/business",
    "/services/business-delivery-health-check",
    "/resources",
    "/insights",
    "/about",
    "/contact",
    "/guides",
    "/bundles",
    "/reports",
    "/assessments",
    "/tools/free-ai-exposure-check",
    "/privacy",
    "/terms",
    "/refund",
    "/disclaimer",
  ];
  const productPaths = resources.filter(resource => resource.access === "paid").map(resource => resource.href);
  const articlePaths = relatedInsights.map(article => `/insights/${article.slug}`);

  return [...new Set([...paths, ...productPaths, ...articlePaths])].map((path, index) => ({
    url: `${siteConfig.canonicalOrigin}${path}`,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
