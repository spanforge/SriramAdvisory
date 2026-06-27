"use client";

import { useEffect, useState } from "react";

export default function ExitNewsletterPrompt() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function showPrompt() {
      if (sessionStorage.getItem("sa-newsletter-prompt")) return;
      sessionStorage.setItem("sa-newsletter-prompt", "shown");
      setOpen(true);
    }

    const timer = window.setTimeout(showPrompt, 20000);

    function showOnScroll() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      if (window.scrollY / scrollableHeight >= 0.5) showPrompt();
    }

    window.addEventListener("scroll", showOnScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", showOnScroll);
    };
  }, []);

  if (!open) return null;

  return (
    <aside style={{ position: "fixed", right: 18, bottom: 18, zIndex: 200, width: "min(320px, calc(100vw - 36px))", background: "#0a1628", color: "#ffffff", border: "1px solid rgba(147,180,255,0.32)", borderRadius: 999, padding: "12px 14px 12px 16px", boxShadow: "0 18px 42px rgba(10,22,40,0.22)" }}>
      <button onClick={() => setOpen(false)} aria-label="Dismiss newsletter prompt" style={{ position: "absolute", top: 10, right: 12, border: 0, background: "transparent", color: "#c7d2fe", fontSize: 20, cursor: "pointer" }}>x</button>
      <div style={{ paddingRight: 24 }}>
        <div style={{ fontSize: 13, fontWeight: 800, lineHeight: 1.25 }}>Get Weekly Workforce Intelligence</div>
        <p style={{ margin: "2px 0 10px", color: "#dbeafe", fontSize: 12, lineHeight: 1.45 }}>Practical AI career signal in your inbox.</p>
        <a href="#newsletter" onClick={() => setOpen(false)} style={{ display: "inline-flex", padding: "8px 12px", background: "#ffffff", borderRadius: 999, color: "#0a1628", textDecoration: "none", fontSize: 12, fontWeight: 800 }}>Get Free Insights</a>
      </div>
    </aside>
  );
}
