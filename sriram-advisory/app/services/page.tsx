import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Sriram Advisory",
  description:
    "Structured career positioning services for Indian tech professionals who want sharper market-facing profiles and clearer signal.",
};

const SERVICES = [
  {
    badge: "Core Service",
    title: "Career Intelligence Report - SA-AIRS Pro",
    subtitle: "5-dimension AI risk score. Role benchmarks. 90-day reassessment.",
    blurb:
      "A structured diagnostic for professionals who want their own role scored across the SA-AIRS framework, with a transparent composite score, placement, and benchmarks.",
    price: "Rs 999",
    href: "/career-intelligence-report/sa-airs-pro",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f0f4ff 0%, #dbeafe 100%)",
    borderColor: "#bfdbfe",
    bullets: [
      "Personal role score, not just market commentary",
      "5-dimension SA-AIRS framework applied to your case",
      "Built for professionals who want diagnostic clarity",
    ],
  },
  {
    badge: "New",
    title: "Career Positioning Audit",
    subtitle: "Resume clarity. LinkedIn framing. Positioning gaps. Delivered as a concise PDF.",
    blurb:
      "A structured audit of how your career reads to the market today, including weak signals, positioning gaps, and the highest-leverage fixes for your resume and LinkedIn.",
    price: "Rs 999",
    href: "/services/career-positioning-audit",
    accentColor: "#b45309",
    bgGradient: "linear-gradient(135deg, #fff9f2 0%, #ffedd5 100%)",
    borderColor: "#fed7aa",
    bullets: [
      "Positioning score with your top 3 gaps identified",
      "Suggested headline and professional summary rewrites",
      "1-page PDF findings report delivered in 48 to 72 hours",
    ],
  },
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
              Structured Career Services
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
            Practical, structured reviews for how your profile reads in today&apos;s market. Not generic coaching. Not vanity edits. Clear signal, honest gaps, and usable fixes.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {[
              "Built for working professionals",
              "Resume and LinkedIn focused",
              "Delivered as concise findings, not fluff",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 999,
                  color: "#fff7ed",
                  padding: "10px 14px",
                  fontSize: 13,
                }}
              >
                {item}
              </div>
            ))}
          </div>
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

      <Footer />
    </div>
  );
}
