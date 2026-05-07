"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "The Report", href: "/report" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(10,22,40,0.08)",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 68, padding: "0 20px",
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
            <img
              src="/sriram.png"
              alt="Sriram"
              style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: "2px solid #1a4fd6", flexShrink: 0 }}
            />
            <div>
              <div style={{
                fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                fontSize: 22, letterSpacing: "0.08em", color: "#0a1628", lineHeight: 1,
              }}>Sriram Advisory</div>
              <div style={{ fontSize: 10, letterSpacing: "0.12em", color: "#1a4fd6", textTransform: "uppercase", lineHeight: 1.5, fontWeight: 500 }}>
                Clarity. Strategy. Growth.
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div style={{ alignItems: "center", gap: 4 }} className="hidden md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} style={{
                  fontSize: 13, fontWeight: 500, textDecoration: "none",
                  padding: "6px 14px", borderRadius: 6,
                  color: active ? "#0a1628" : "#5a6a8a",
                  background: active ? "rgba(10,22,40,0.06)" : "transparent",
                  transition: "color 0.15s, background 0.15s",
                  letterSpacing: "0.01em",
                }}>
                  {link.label}
                </Link>
              );
            })}
            <Link href="/get-started" style={{
              marginLeft: 8,
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 13, fontWeight: 700, textDecoration: "none",
              padding: "8px 18px", borderRadius: 8,
              background: "#1a4fd6", color: "#ffffff",
              border: "1px solid #3b6ef0",
              letterSpacing: "0.02em",
              transition: "background 0.15s",
            }}>
              Free Risk Snapshot →
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              flexDirection: "column", gap: 5, padding: 6,
            }}
          >
            <span style={{
              display: "block", width: 22, height: 2, background: "#0a1628", borderRadius: 2,
              transform: open ? "rotate(45deg) translate(5px,5px)" : "none", transition: "transform 0.2s",
            }} />
            <span style={{
              display: "block", width: 22, height: 2, background: "#0a1628", borderRadius: 2,
              opacity: open ? 0 : 1, transition: "opacity 0.2s",
            }} />
            <span style={{
              display: "block", width: 22, height: 2, background: "#0a1628", borderRadius: 2,
              transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none", transition: "transform 0.2s",
            }} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            borderTop: "1px solid rgba(10,22,40,0.08)",
            background: "rgba(255,255,255,0.99)",
            padding: "12px 20px 20px",
            display: "flex", flexDirection: "column", gap: 4,
          }} className="md:hidden">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: 15, fontWeight: 500, textDecoration: "none",
                    padding: "10px 14px", borderRadius: 8,
                    color: active ? "#0a1628" : "#5a6a8a",
                    background: active ? "rgba(10,22,40,0.06)" : "transparent",
                  }}>
                  {link.label}
                </Link>
              );
            })}
            <Link href="/get-started"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 8,
                display: "block", textAlign: "center",
                fontSize: 15, fontWeight: 700, textDecoration: "none",
                padding: "12px 18px", borderRadius: 8,
                background: "#1a4fd6", color: "#ffffff",
                border: "1px solid #3b6ef0",
              }}>
              Free Risk Snapshot →
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
