import Link from "next/link";
import { siteIdentity } from "@/lib/positioning";
const links = [["How I Help", "/work-with-sriram"], ["Products", "/products"], ["Research & Insights", "/thinking"], ["About", "/about"], ["Contact", "/contact"]];
export default function Footer() {
  return <footer className="sa-footer"><div className="sa-wrap">
    <div className="sa-footer-intro"><strong>{siteIdentity.name}</strong><p className="sa-footer-tagline">{siteIdentity.tagline}</p><p>{siteIdentity.description}</p></div>
    <nav className="sa-footer-links" aria-label="Footer">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a>
    <nav className="sa-legal-links" aria-label="Policies"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/refund">Refunds</Link><Link href="/disclaimer">Disclaimer</Link></nav>
    <p className="sa-copyright">&copy; {new Date().getFullYear()} Sriram Advisory</p>
  </div></footer>;
}



