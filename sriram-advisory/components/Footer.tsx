import Link from "next/link";

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        background: "#f7f9fc",
        borderTop: "1px solid rgba(26,79,214,0.18)",
        padding: "64px 40px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 40,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src="/sriram.png"
                alt="Sriram Advisory"
                style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", border: "2px solid #1a4fd6", flexShrink: 0 }}
              />
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", letterSpacing: "-0.01em" }}>
                  Sriram Advisory
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#0d9268",
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginTop: 2,
                  }}
                >
                  Workforce Intelligence for the AI Era
                </div>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: "#5a6a8a" }}>
              Workforce intelligence, career advisory, and AI delivery resources for the AI era.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="mailto:sriram@sriramadvisory.com" style={{ fontSize: 14, color: "#1a4fd6", textDecoration: "none", fontWeight: 700 }}>
                sriram@sriramadvisory.com
              </a>
              <a href="https://wa.me/919342229420" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: "#1a4fd6", textDecoration: "none", fontWeight: 700 }}>
                WhatsApp: +91 93422 29420
              </a>
            </div>
          </div>

          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <nav aria-label="Explore navigation">
              <p style={{ fontSize: 13, fontWeight: 700, color: "#5a6a8a", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 16px" }}>
                Explore
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Career Intelligence", href: "/career-intelligence" },
                  { label: "AI Champion", href: "/ai-champion" },
                  { label: "Free Resources", href: "/free" },
                  { label: "Services", href: "/services" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} style={{ fontSize: 14, color: "#4a5a7a", textDecoration: "none" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company navigation">
              <p style={{ fontSize: 13, fontWeight: 700, color: "#5a6a8a", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 16px" }}>
                Company
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Insights", href: "/insights" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} style={{ fontSize: 14, color: "#4a5a7a", textDecoration: "none" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Legal navigation">
              <p style={{ fontSize: 13, fontWeight: 700, color: "#5a6a8a", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 16px" }}>
                Legal
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Refund Policy", href: "/refund" },
                  { label: "Disclaimer", href: "/disclaimer" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} style={{ fontSize: 14, color: "#4a5a7a", textDecoration: "none" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(26,79,214,0.15)",
            paddingTop: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(10,22,40,0.6)", margin: 0 }}>
            © {new Date().getFullYear()} Sriram Advisory. Educational and analytical commentary only.
          </p>
          <a
            href="https://www.linkedin.com/newsletters/sriram-advisory-7461301611261284352/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "#0a66c2",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            LinkedIn Newsletter
          </a>
        </div>
      </div>
    </footer>
  );
}
