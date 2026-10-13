"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/positioning";
import { track } from "@/lib/analytics";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  const pathname = usePathname();
  function close() { setOpen(false); trigger.current?.focus(); }
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu.current?.querySelector<HTMLButtonElement>("button")?.focus();
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") { event.preventDefault(); setOpen(false); trigger.current?.focus(); }
      if (event.key !== "Tab") return;
      const controls = menu.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!controls?.length) return;
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    const media = window.matchMedia("(min-width: 1100px)");
    const resize = () => { if (media.matches) setOpen(false); };
    media.addEventListener("change", resize);
    document.addEventListener("keydown", keydown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", keydown); media.removeEventListener("change", resize); };
  }, [open]);
  return <>
    <a className="sa-skip" href="#main-content">Skip to main content</a>
    <header className="sa-header"><div className="sa-nav-wrap">
      <Link className="sa-brand" href="/" aria-label="Sriram Advisory home"><span className="sa-brand-mark" aria-hidden="true">SA</span><span>Sriram Advisory</span></Link>
      <button ref={trigger} className="sa-menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(true)}>Menu</button>
      <nav ref={menu} id="primary-navigation" className={`sa-navigation${open ? " is-open" : ""}`} aria-label="Primary navigation">
        <button className="sa-menu-close" type="button" onClick={close}>Close menu</button>
        {navigation.map((item, index) => <Link key={item.href} href={item.href} className={index === navigation.length - 1 ? "sa-nav-cta" : "sa-nav-link"} aria-current={pathname === item.href ? "page" : undefined} onClick={() => { if (item.href === "/contact") track("review_cta_click", { placement: "navigation" }); if (open) close(); }}>{item.label}</Link>)}
      </nav>
    </div></header>
  </>;
}
