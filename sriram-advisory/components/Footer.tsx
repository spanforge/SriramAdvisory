import Link from "next/link";

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        background: "#f7f9fc",
        borderTop: "1px solid rgba(26,79,214,0.18)",
        padding: "64px 40px 40px",
      }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div style={{
          display: "flex", alignItems: "flex-start", justifyContent: "space-between",
          flexWrap: "wrap", gap: 32, marginBottom: 40,
        }}>
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src="/sriram.png"
                alt="Sriram Advisory"
                style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", border: "2px solid #1a4fd6", flexShrink: 0 }}
              />
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", letterSpacing: "-0.01em" }}>Sriram Advisory</div>
                <div style={{ fontSize: 13, color: "#0d9268", letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 700, marginTop: 2 }}>
                  Career Intelligence System
                </div>
              </div>
            </div>
            {/* Social links */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <a
                href="https://www.linkedin.com/newsletters/sriram-advisory-7461301611261284352/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Sriram Advisory on LinkedIn Newsletter"
                title="LinkedIn Newsletter"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 36, height: 36, borderRadius: 8,
                  background: "#0a66c2", color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <span style={{ fontSize: 12, color: "#5a6a8a", fontWeight: 500 }}>Follow on LinkedIn</span>
            </div>
          </div>

          {/* Nav groups */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <nav aria-label="Intelligence navigation">
              <p style={{ fontSize: 13, fontWeight: 700, color: "#5a6a8a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, margin: "0 0 16px" }}>
                Intelligence
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Career Intelligence Report", href: "/career-intelligence-report" },
                  { label: "Methodology", href: "/methodology" },
                  { label: "Insights", href: "/insights" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ fontSize: 14, color: "#4a5a7a", textDecoration: "none" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company navigation">
              <p style={{ fontSize: 13, fontWeight: 700, color: "#5a6a8a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, margin: "0 0 16px" }}>
                Company
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "FAQ", href: "/faq" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ fontSize: 14, color: "#4a5a7a", textDecoration: "none" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Legal navigation">
              <p style={{ fontSize: 13, fontWeight: 700, color: "#5a6a8a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, margin: "0 0 16px" }}>
                Legal
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Refund Policy", href: "/refund" },
                  { label: "Disclaimer", href: "/disclaimer" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ fontSize: 14, color: "#4a5a7a", textDecoration: "none" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: "1px solid rgba(26,79,214,0.15)",
          paddingTop: 28,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16,
        }}>
          <p style={{ fontSize: 13, color: "rgba(10,22,40,0.6)", margin: 0 }}>
            © {new Date().getFullYear()} Sriram Advisory. Educational and analytical commentary only. Not career counselling or professional advice.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            {/* LinkedIn icon in bottom bar */}
            <a
              href="https://www.linkedin.com/newsletters/sriram-advisory-7461301611261284352/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sriram Advisory LinkedIn Newsletter"
              title="LinkedIn Newsletter"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 13, color: "#0a66c2", textDecoration: "none", fontWeight: 500,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Newsletter
            </a>
            <nav aria-label="Legal links">
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: 20, flexWrap: "wrap" }}>
                {[
                  { label: "Disclaimer", href: "/disclaimer" },
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ fontSize: 13, color: "rgba(10,22,40,0.6)", textDecoration: "none" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
