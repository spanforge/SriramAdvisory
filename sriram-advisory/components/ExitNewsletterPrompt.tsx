"use client";

import { useEffect, useState } from "react";

export default function ExitNewsletterPrompt() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function showPrompt(event: MouseEvent) {
      if (event.clientY > 0 || sessionStorage.getItem("sa-exit-prompt")) return;
      sessionStorage.setItem("sa-exit-prompt", "shown");
      setOpen(true);
    }

    document.addEventListener("mouseout", showPrompt);
    return () => document.removeEventListener("mouseout", showPrompt);
  }, []);

  if (!open) return null;

  return (
    <aside style={{ position: "fixed", right: 20, bottom: 88, zIndex: 200, width: "min(360px, calc(100vw - 40px))", background: "#0a1628", color: "#ffffff", border: "1px solid rgba(147,180,255,0.32)", borderRadius: 8, padding: 20, boxShadow: "0 22px 60px rgba(10,22,40,0.28)" }}>
      <button onClick={() => setOpen(false)} aria-label="Dismiss newsletter prompt" style={{ position: "absolute", top: 10, right: 12, border: 0, background: "transparent", color: "#c7d2fe", fontSize: 20, cursor: "pointer" }}>x</button>
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#93b4ff", marginBottom: 8 }}>Weekly Intelligence</div>
      <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.25, marginBottom: 8 }}>Not ready to buy?</div>
      <p style={{ margin: "0 0 16px", color: "#dbeafe", fontSize: 14, lineHeight: 1.6 }}>Get practical workforce intelligence insights in your inbox.</p>
      <a href="#newsletter" onClick={() => setOpen(false)} style={{ display: "inline-flex", padding: "10px 14px", background: "#ffffff", borderRadius: 6, color: "#0a1628", textDecoration: "none", fontSize: 14, fontWeight: 800 }}>Subscribe</a>
    </aside>
  );
}
