import type { MetadataRoute } from "next";
import { siteIdentity } from "@/lib/positioning";
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/admin/", "/data/", "/payment-status", "/preview/"] }], sitemap: `${siteIdentity.origin}/sitemap.xml` };
}
