import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "#f7f9fc",
      borderTop: "1px solid rgba(10,22,40,0.08)",
      padding: "48px 40px 36px",
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
              alt="Sriram"
              style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", border: "2px solid #1a4fd6", flexShrink: 0 }}
            />
            <div>
              <div style={{
                fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                fontSize: 20, letterSpacing: "0.08em", color: "#0a1628",
              }}>Sriram Advisory</div>
              <div style={{ fontSize: 11, color: "#1a4fd6", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>
                Clarity. Strategy. Growth.
              </div>
            </div>
          </div>

          {/* Nav groups */}
          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#0a1628", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                Services
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "AI Risk Score", href: "/get-started" },
                  { label: "Full Intelligence Report", href: "/report" },
                  { label: "How It Works", href: "/system" },
                  { label: "Case Studies", href: "/cases" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} style={{ fontSize: 13, color: "#5a6a8a", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#0a1628", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                Company
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "About", href: "/about" },
                  { label: "Insights", href: "/insights" },
                  { label: "Get Started", href: "/get-started" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} style={{ fontSize: 13, color: "#5a6a8a", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#0a1628", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                Contact
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="mailto:sriram@sriramadvisory.com" style={{ fontSize: 13, color: "#5a6a8a", textDecoration: "none" }}>
                  sriram@sriramadvisory.com
                </a>
                <a href="https://wa.me/919342229420" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#5a6a8a", textDecoration: "none" }}>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: "1px solid rgba(10,22,40,0.07)",
          paddingTop: 24,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16,
        }}>
          <p style={{ fontSize: 12, color: "#aab4c8", margin: 0 }}>
            © {new Date().getFullYear()} Sriram Advisory. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Refund Policy", href: "/refund" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: 12, color: "#aab4c8", textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
