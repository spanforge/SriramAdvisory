import Link from "next/link";

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        background: "#132033",
        color: "#d4dde4",
        padding: "68px 40px 34px",
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
            marginBottom: 34,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src="/sriram.png"
                alt="Sriram Advisory"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #12846c",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.01em" }}>
                  Sriram Advisory
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#8be3d1",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginTop: 2,
                  }}
                >
                  Career Intelligence for India
                </div>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: "#b9c6cf" }}>
              Workforce research, assessments, reports, and guides for understanding how
              work is changing across India.
            </p>
          </div>

          <div style={{ display: "flex", gap: 42, flexWrap: "wrap" }}>
            <nav aria-label="Main footer navigation">
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#8be3d1",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  margin: "0 0 14px",
                }}
              >
                Explore
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {[
                  { label: "Research", href: "/research" },
                  { label: "Assessments", href: "/assessments" },
                  { label: "Reports", href: "/reports" },
                  { label: "Guides", href: "/guides" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} style={{ fontSize: 14, color: "#d4dde4", textDecoration: "none" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company footer navigation">
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#8be3d1",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  margin: "0 0 14px",
                }}
              >
                Company
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {[
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Insights", href: "/insights" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} style={{ fontSize: 14, color: "#d4dde4", textDecoration: "none" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Legal footer navigation">
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#8be3d1",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  margin: "0 0 14px",
                }}
              >
                Legal
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Refund Policy", href: "/refund" },
                  { label: "Disclaimer", href: "/disclaimer" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} style={{ fontSize: 14, color: "#d4dde4", textDecoration: "none" }}>
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
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <p style={{ fontSize: 13, color: "#9fb0bc", margin: 0 }}>
            © {new Date().getFullYear()} Sriram Advisory. Educational and analytical commentary only.
          </p>
          <a
            href="https://www.linkedin.com/newsletters/sriram-advisory-7461301611261284352/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              color: "#8be3d1",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            LinkedIn Newsletter
          </a>
        </div>
      </div>
    </footer>
  );
}
