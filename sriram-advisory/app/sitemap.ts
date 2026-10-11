import type { MetadataRoute } from "next";
import { resources } from "@/lib/advisoryContent";
import { siteIdentity, services, healthCheckEnabled } from "@/lib/positioning";
import { getPublishedArticles } from "@/lib/thinking";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/thinking-in-practice", "/work-with-sriram", "/careers", "/business", "/resources", "/insights", "/about", "/contact", "/guides", "/guides/it", "/guides/hr", "/bundles", "/reports", "/assessments", "/tools/free-ai-exposure-check", "/privacy", "/terms", "/refund", "/disclaimer", "/methodology", "/about/our-thinking", "/ai-literacy", "/ai-delivery-intelligence", "/career-intelligence-report", "/career-intelligence-report/sa-airs-pro", "/products/pro-edition", "/free", "/frameworks", "/frameworks/sa-airs", "/frameworks/replaceability-curve", "/frameworks/ai-leverage-ladder", "/frameworks/career-positioning-audit"];
  paths.push("/products/airs-assessment", "/services/career-positioning-audit");
  if (healthCheckEnabled) paths.push("/services/business-delivery-health-check");
  paths.push(...services.filter(service => service.enabled).map(service => `/services/${service.slug}`));
  paths.push(...resources.map(resource => resource.href));
  const articles = getPublishedArticles();
  paths.push(...articles.map(article => `/insights/${article.slug}`));
  return [...new Set(paths)].map(path => ({ url: `${siteIdentity.origin}${path === "/" ? "" : path}`, ...(articles.find(article => path === `/insights/${article.slug}`)?.updatedAt ? { lastModified: articles.find(article => path === `/insights/${article.slug}`)!.updatedAt! } : {}) }));
}
