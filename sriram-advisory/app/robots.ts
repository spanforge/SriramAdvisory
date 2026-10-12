import type { MetadataRoute } from "next";
import { siteIdentity } from "@/lib/positioning";
export default function robots(): MetadataRoute.Robots {
  if (process.env.NODE_ENV !== "production" || process.env.SRIRAM_STAGING === "1") return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/admin/", "/data/", "/payment-status", "/preview/"] }], sitemap: `${siteIdentity.origin}/sitemap.xml` };
}

