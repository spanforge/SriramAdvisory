"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Research", href: "/research" },
  { label: "Assessments", href: "/assessments" },
  { label: "Reports", href: "/reports" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
];

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
          background: "rgba(251,252,248,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(19,32,51,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 74,
            padding: "0 20px",
            gap: 18,
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}
          >
            <img
              src="/sriram.png"
              alt="Sriram Advisory"
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #12846c",
                flexShrink: 0,
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                  fontSize: 23,
                  letterSpacing: "0.08em",
                  color: "#132033",
                  lineHeight: 1,
                }}
              >
                Sriram Advisory
              </div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  color: "#12846c",
                  textTransform: "uppercase",
                  lineHeight: 1.5,
                  fontWeight: 700,
                }}
              >
                Career Intelligence for India
              </div>
            </div>
          </Link>

          <div style={{ alignItems: "center", gap: 4 }} className="hidden md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "8px 14px",
                    borderRadius: 999,
                    color: active ? "#132033" : "#566274",
                    background: active ? "rgba(19,32,51,0.08)" : "transparent",
                    transition: "color 0.15s, background 0.15s",
                    letterSpacing: "0.01em",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              style={{
                marginLeft: 10,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#132033",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 13,
                padding: "10px 18px",
                borderRadius: 999,
                textDecoration: "none",
                border: "1px solid #132033",
              }}
            >
              Contact
            </Link>
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
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#132033",
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
                background: "#132033",
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
                background: "#132033",
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
              borderTop: "1px solid rgba(19,32,51,0.08)",
              background: "rgba(251,252,248,0.98)",
              padding: "12px 20px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
            className="md:hidden"
          >
            <Link
              href="/"
              role="menuitem"
              onClick={() => setOpen(false)}
              aria-current={pathname === "/" ? "page" : undefined}
              style={{
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                padding: "10px 14px",
                borderRadius: 10,
                color: pathname === "/" ? "#132033" : "#566274",
                background: pathname === "/" ? "rgba(19,32,51,0.06)" : "transparent",
              }}
            >
              Home
            </Link>
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "10px 14px",
                    borderRadius: 10,
                    color: active ? "#132033" : "#566274",
                    background: active ? "rgba(19,32,51,0.06)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              role="menuitem"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 8,
                display: "block",
                textAlign: "center",
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: 10,
                background: "#132033",
                color: "#ffffff",
                border: "1px solid #132033",
              }}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      <div id="main-content" tabIndex={-1} style={{ outline: "none" }} />
    </>
  );
}
