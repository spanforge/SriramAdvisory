import Image from "next/image";
import Link from "next/link";
import { pillars, siteConfig } from "@/lib/advisoryContent";

const groups = [
  { title: "Practices", links: pillars.map(({ label, href }) => ({ label, href })) },
  { title: "Career Intelligence", links: [{ label: "Guides", href: "/guides" }, { label: "Assessments", href: "/assessments" }, { label: "Reports", href: "/reports" }, { label: "Bundles", href: "/bundles" }] },
  { title: "Insights", links: [{ label: "All Insights", href: "/insights" }, { label: "Technology & Digital Safety", href: "/insights?topic=technology-digital-safety" }, { label: "Education & Learning", href: "/insights?topic=education" }] },
  { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
];

export default function Footer() {
  return <footer className="sa-footer"><div className="sa-wrap">
    <div className="sa-footer-grid">
      <div className="sa-footer-about">
        <Image src="/sriram.png" alt="Sriram Srinivasan" width={64} height={64} />
        <strong>{siteConfig.brandName}</strong>
        <p>{siteConfig.descriptor}</p>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <div className="sa-footer-social"><a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
      </div>
      {groups.map(group => <div key={group.title}><h2>{group.title}</h2><ul>{group.links.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></div>)}
    </div>
    <div className="sa-legal-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/refund">Refunds</Link><Link href="/disclaimer">Disclaimer</Link></div>
    <p className="sa-copyright">© {new Date().getFullYear()} Sriram Advisory. IT services performance and career intelligence.</p>
  </div></footer>;
}
