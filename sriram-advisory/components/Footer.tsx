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
    </footer>
  );
}
