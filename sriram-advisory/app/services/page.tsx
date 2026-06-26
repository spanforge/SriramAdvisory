import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/siteCatalog";

export const metadata: Metadata = {
  title: "Services | Sriram Advisory",
  description:
    "Structured advisory services for professionals who want diagnostic clarity, better market signal, and sharper positioning.",
};

const AUDIT_OUTCOMES = [
  "A positioning score that makes the strongest and weakest signals visible.",
  "The three highest-leverage changes for your resume and LinkedIn profile.",
  "Suggested headline and professional-summary rewrites you can act on immediately.",
];

export default function ServicesPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #40210d 58%, #b45309 100%)",
          paddingTop: 96,
          paddingBottom: 72,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(245,158,11,0.16)",
              border: "1px solid rgba(251,191,36,0.38)",
              borderRadius: 20,
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#f59e0b",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fde68a",
              }}
            >
              Advisory Services
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Services for professionals who need sharper market signal
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,239,213,0.86)",
              lineHeight: 1.75,
              maxWidth: 620,
              margin: "0 auto 24px",
            }}
          >
            Practical, structured reviews for buyers who want clarity on role risk, positioning gaps, and what to fix next.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 980, margin: "0 auto", padding: "64px 20px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {SERVICES.map((service) => (
            <Link key={service.href} href={service.href} style={{ textDecoration: "none" }}>
              <div
                className="guide-card guide-card-body"
                style={{
                  background: service.bgGradient,
                  border: `1.5px solid ${service.borderColor}`,
                  borderRadius: 18,
                  cursor: "pointer",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: service.accentColor,
                        color: "#ffffff",
                        padding: "3px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      fontWeight: 800,
                      color: "#0a1628",
                      marginBottom: 6,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {service.title} {"->"}
                  </h2>
                  <p style={{ fontSize: 14, fontWeight: 700, color: service.accentColor, marginBottom: 12 }}>
                    {service.subtitle}
                  </p>
                  <p style={{ fontSize: 15, color: "#3d4f6e", lineHeight: 1.7, marginBottom: 14 }}>
                    {service.blurb}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {service.bullets.map((bullet) => (
                      <div key={bullet} style={{ fontSize: 13, color: "#4b5d7b", lineHeight: 1.6 }}>
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="guide-card-price-col">
                  <div style={{ fontSize: 28, fontWeight: 800, color: service.accentColor }}>{service.price}</div>
                  <div
                    style={{
                      marginTop: 16,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: service.accentColor,
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "10px 20px",
                      borderRadius: 8,
                      letterSpacing: "0.01em",
                    }}
                  >
                    View service {"->"}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: "84px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, marginBottom: 30 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b45309" }}>
              Career Positioning Audit
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0a1628", margin: "14px 0" }}>
              Leave with a sharper market story, not a generic review.
            </h2>
            <p style={{ margin: 0, fontSize: 16, color: "#4a5a7a", lineHeight: 1.8 }}>
              The audit is built to show how your profile reads today, what it fails to signal, and what to change first.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, marginBottom: 22 }}>
            {AUDIT_OUTCOMES.map((outcome) => (
              <div key={outcome} style={{ background: "#ffffff", border: "1px solid #fed7aa", borderRadius: 8, padding: "20px", fontSize: 15, color: "#40526b", lineHeight: 1.7 }}>
                {outcome}
              </div>
            ))}
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #fed7aa", borderRadius: 8, padding: "24px" }}>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: 16 }}>
              Illustrative Before / After
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#b91c1c", marginBottom: 8 }}>Before</div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "#5a6a8a" }}>
                  &quot;Experienced QA professional seeking a challenging opportunity.&quot;
                </p>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#0d9268", marginBottom: 8 }}>After</div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "#40526b" }}>
                  &quot;QA professional focused on automation, risk-based testing, and quality ownership for AI-shaped delivery teams.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
