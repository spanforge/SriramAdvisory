import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Guides | Sriram Advisory",
  description:
    "Choose between IT and HR sector guide collections built for India-first career intelligence and AI-era repositioning.",
};

const GUIDE_SECTORS = [
  {
    badge: "IT Sector",
    title: "IT Career Guides",
    blurb:
      "Role-specific guides on AI risk, repositioning, and salary upside. Each guide is built to help you understand what is changing, what to do next, and how to present yourself more strongly.",
    href: "/guides/it",
    cta: "Explore IT guides",
    accentColor: "#1d4ed8",
    borderColor: "#bfdbfe",
    background: "linear-gradient(135deg, #f8fbff 0%, #e8f1ff 100%)",
    highlights: [
      "Engineering, QA, data, product, and support roles",
      "India-first market realities and repositioning paths",
      "Role-specific, not generic",
    ],
  },
  {
    badge: "HR Sector",
    title: "HR Career Guides",
    blurb:
      "AI systems are already handling repeatable HR work across recruiting, coordination, documentation, and workforce operations. These guides help HR professionals move toward judgment, business context, stakeholder influence, and higher-leverage strategic value.",
    href: "/guides/hr",
    cta: "Explore HR guides",
    accentColor: "#be185d",
    borderColor: "#f9a8d4",
    background: "linear-gradient(135deg, #fff6fb 0%, #ffe6f1 100%)",
    highlights: [
      "Built for Indian HR market realities",
      "Focus on defensible human judgment",
      "Practical repositioning across the HR profession",
    ],
  },
];

export default function GuidesPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #102346 60%, #1a4fd6 100%)",
          paddingTop: 96,
          paddingBottom: 72,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59,110,240,0.18)",
              border: "1px solid rgba(59,110,240,0.45)",
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
                background: "#3b6ef0",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#93b4ff",
              }}
            >
              India-First Career Intelligence
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
            Choose Your Guide Collection
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(200,220,255,0.84)",
              lineHeight: 1.75,
              maxWidth: 660,
              margin: "0 auto 24px",
            }}
          >
            Browse by sector first. We now organize guides into dedicated IT and HR collections so the landing pages, positioning, and guide catalogs match the market reality of each audience.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 20px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {GUIDE_SECTORS.map((sector) => (
            <article
              key={sector.href}
              style={{
                background: sector.background,
                border: `1.5px solid ${sector.borderColor}`,
                borderRadius: 28,
                padding: "30px clamp(20px, 4vw, 32px)",
                boxShadow: "0 24px 60px rgba(10, 22, 40, 0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  width: "fit-content",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: sector.accentColor,
                  color: "#ffffff",
                  padding: "6px 10px",
                  borderRadius: 999,
                }}
              >
                {sector.badge}
              </span>

              <div>
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 38px)",
                    lineHeight: 1.12,
                    color: "#0a1628",
                    marginBottom: 12,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {sector.title}
                </h2>
                <p style={{ fontSize: 15, color: "#425472", lineHeight: 1.8, margin: 0 }}>{sector.blurb}</p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {sector.highlights.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#38506f",
                      background: "rgba(255,255,255,0.72)",
                      border: "1px solid rgba(10,22,40,0.08)",
                      borderRadius: 999,
                      padding: "8px 11px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href={sector.href}
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "fit-content",
                  textDecoration: "none",
                  background: sector.accentColor,
                  color: "#ffffff",
                  borderRadius: 10,
                  padding: "13px 18px",
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                {sector.cta} {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
