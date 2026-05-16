import type { MetadataRoute } from "next";
import { ARTICLES } from "./insights/[slug]/page";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sriramadvisory.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/career-intelligence-report`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sa-airs-score-report`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/get-started`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/cases`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/system`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/refund`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${base}/insights/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}
