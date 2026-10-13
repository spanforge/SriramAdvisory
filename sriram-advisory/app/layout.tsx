import type { Metadata, Viewport } from "next";
import StructuredData from "@/components/StructuredData";
import ReviewAnalytics from "@/components/ReviewAnalytics";
import { siteIdentity } from "@/lib/positioning";
import "./globals.css";
import "./editorial.css";
import "./review.css";
export const metadata: Metadata = {
  robots: process.env.NODE_ENV !== "production" || process.env.SRIRAM_STAGING === "1" ? { index: false, follow: false } : undefined,
  metadataBase: new URL(siteIdentity.origin),
  title: { default: "Product and Market Advisory | Sriram Advisory", template: "%s" },
  description: siteIdentity.description,
  icons: { icon: "/sriram.png", apple: "/sriram.png" },
  openGraph: { siteName: siteIdentity.name, type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${siteIdentity.origin}/#organization`, name: siteIdentity.name, url: siteIdentity.origin, email: siteIdentity.email, founder: { "@id": `${siteIdentity.origin}/#founder` } },
    { "@type": "Person", "@id": `${siteIdentity.origin}/#founder`, name: siteIdentity.founder, url: `${siteIdentity.origin}/about`, sameAs: [siteIdentity.linkedin], ...(siteIdentity.portrait ? { image: `${siteIdentity.origin}${siteIdentity.portrait}` } : {}), jobTitle: "Independent consultant and founder" },
  ] };
  const analyticsEnabled = process.env.NODE_ENV === "production" && process.env.SRIRAM_STAGING !== "1" && process.env.NEXT_PUBLIC_REVIEW_ANALYTICS === "1";
  return <html lang="en"><body><StructuredData data={graph} />{children}<ReviewAnalytics enabled={analyticsEnabled} /></body></html>;
}


