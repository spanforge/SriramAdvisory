"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { pillars } from "@/lib/advisoryContent";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const pathname = usePathname();
  const helpButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") { if (helpOpen) helpButton.current?.focus(); setHelpOpen(false); setMobileOpen(false); }
    }
    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  }, [helpOpen]);
  const current = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  return <>
    <a className="sa-skip" href="#main-content">Skip to main content</a>
    <header className="sa-header"><div className="sa-nav-wrap">
      <Link className="sa-brand" href="/" aria-label="Sriram Advisory home"><span className="sa-brand-mark">SA</span><span>Sriram Advisory<small>IT services performance &amp; careers</small></span></Link>
      <button className="sa-menu-button" type="button" aria-expanded={mobileOpen} aria-controls="primary-navigation" onClick={() => setMobileOpen(v => !v)}><span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span><span>{mobileOpen ? "Close" : "Menu"}</span></button>
      <nav id="primary-navigation" className={`sa-navigation${mobileOpen ? " is-open" : ""}`} aria-label="Primary navigation">
        <div className="sa-dropdown"><button ref={helpButton} type="button" className="sa-nav-link" aria-expanded={helpOpen} onClick={() => setHelpOpen(v => !v)}>Practices <span aria-hidden="true">⌄</span></button>
          <div className={`sa-dropdown-panel${helpOpen ? " is-open" : ""}`}>{pillars.map(p => <Link key={p.id} href={p.href} aria-current={current(p.href) ? "page" : undefined}><strong>{p.label}</strong><span>{p.summary}</span></Link>)}</div>
        </div>
        <Link className="sa-nav-link" href="/resources" aria-current={current("/resources") ? "page" : undefined}>Resources</Link><Link className="sa-nav-link" href="/insights" aria-current={current("/insights") ? "page" : undefined}>Insights</Link><Link className="sa-nav-link" href="/about" aria-current={current("/about") ? "page" : undefined}>About</Link><Link className="sa-nav-link" href="/contact" aria-current={current("/contact") ? "page" : undefined}>Contact</Link><Link className="sa-nav-cta" href="/contact">Discuss Your Challenge</Link>
      </nav>
    </div></header>
  </>;
}
