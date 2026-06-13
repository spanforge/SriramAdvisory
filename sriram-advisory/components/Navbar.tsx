"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/siteCatalog";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(10,22,40,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
            padding: "0 20px",
            gap: 12,
            minWidth: 0,
          }}
        >
          <Link
            href="/"
            className="site-nav-brand"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              flexShrink: 1,
              minWidth: 0,
            }}
          >
            <img
              src="/sriram.png"
              alt="Sriram Advisory"
              style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: "2px solid #1a4fd6", flexShrink: 0 }}
            />
            <div style={{ minWidth: 0 }}>
              <div
                className="site-nav-title"
                style={{
                  fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                  fontSize: 22,
                  letterSpacing: "0.08em",
                  color: "#0a1628",
                  lineHeight: 1,
                }}
              >
                Sriram Advisory
              </div>
              <div
                className="site-nav-tagline"
                style={{
                  fontSize: 13,
                  letterSpacing: "0.10em",
                  color: "#1a4fd6",
                  textTransform: "uppercase",
                  lineHeight: 1.5,
                  fontWeight: 600,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Workforce Intelligence for the AI Era
              </div>
            </div>
          </Link>

          <div style={{ alignItems: "center", gap: 4 }} className="hidden md:flex">
            {NAV_ITEMS.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: "none",
                    padding: "6px 14px",
                    borderRadius: 6,
                    color: active ? "#0a1628" : "#5a6a8a",
                    background: active ? "rgba(10,22,40,0.06)" : "transparent",
                    transition: "color 0.15s, background 0.15s",
                    letterSpacing: "0.01em",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            className="flex md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              flexDirection: "column",
              gap: 5,
              padding: 6,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#0a1628",
                borderRadius: 2,
                transform: open ? "rotate(45deg) translate(5px,5px)" : "none",
                transition: "transform 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#0a1628",
                borderRadius: 2,
                opacity: open ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#0a1628",
                borderRadius: 2,
                transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none",
                transition: "transform 0.2s",
              }}
            />
          </button>
        </div>

        {open && (
          <div
            id="mobile-nav"
            role="menu"
            aria-label="Mobile navigation"
            style={{
              borderTop: "1px solid rgba(10,22,40,0.08)",
              background: "rgba(255,255,255,0.99)",
              padding: "12px 20px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
            className="md:hidden"
          >
            {NAV_ITEMS.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    textDecoration: "none",
                    padding: "10px 14px",
                    borderRadius: 8,
                    color: active ? "#0a1628" : "#5a6a8a",
                    background: active ? "rgba(10,22,40,0.06)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      <div id="main-content" tabIndex={-1} style={{ outline: "none" }} />
    </>
  );
}
