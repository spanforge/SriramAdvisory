import type { Metadata, Viewport } from "next";
import StructuredData from "@/components/StructuredData";
import { siteIdentity } from "@/lib/positioning";
import "./globals.css";
import "./editorial.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteIdentity.origin),
  title: { default: "Sriram Advisory | Look Beyond the Obvious", template: "%s" },
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
  return <html lang="en"><body><StructuredData data={graph} />{children}</body></html>;
}
