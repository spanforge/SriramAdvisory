import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports | Sriram Advisory",
  description:
    "India-first intelligence reports on AI career risk, market shifts, and role diagnostics for working professionals.",
};

const REPORTS = [
  {
    badge: "Core Report",
    title: "Career Intelligence Report — SA-AIRS Pro",
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
    badge: "New — May 2026",
    title: "AI Risk Rankings India 2026",
    subtitle: "Top 25 high-risk careers. 4 risk bands. 100+ pages.",
    blurb:
      "A market-intelligence report for professionals who want to understand which careers are under the most AI pressure in India, why, and what adaptation paths look like.",
    price: "Rs 499",
    href: "/products/ai-risk-rankings-india-2026",
    accentColor: "#dc2626",
    bgGradient: "linear-gradient(135deg, #fff5f5 0%, #fee2e2 100%)",
    borderColor: "#fecaca",
    bullets: [
      "Top 25 careers ranked with role-level context",
      "Task exposure bands instead of hand-wavy predictions",
      "Adaptation direction for professionals who need next steps",
    ],
  },
];

export default function ReportsPage() {
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
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
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
              Data-Driven Career Reports
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
            Reports for professionals who want evidence, not noise
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(200,220,255,0.84)",
              lineHeight: 1.75,
              maxWidth: 620,
              margin: "0 auto 24px",
            }}
          >
            Structured market-intelligence and scoring products built for India-first career decisions. Use them when you want to understand the shift, measure your position, and decide what to do next.
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
              "India-specific, not global copy-paste",
              "Built for decision-making, not doomscrolling",
              "Choose market intelligence or personal scoring",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 999,
                  color: "#f8fbff",
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
          {REPORTS.map((report) => (
            <Link key={report.href} href={report.href} style={{ textDecoration: "none" }}>
              <div
                className="guide-card guide-card-body"
                style={{
                  background: report.bgGradient,
                  border: `1.5px solid ${report.borderColor}`,
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
                        background: report.accentColor,
                        color: "#ffffff",
                        padding: "3px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {report.badge}
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
                    {report.title}
                  </h2>
                  <p style={{ fontSize: 14, fontWeight: 700, color: report.accentColor, marginBottom: 12 }}>
                    {report.subtitle}
                  </p>
                  <p style={{ fontSize: 15, color: "#3d4f6e", lineHeight: 1.7, marginBottom: 14 }}>
                    {report.blurb}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {report.bullets.map((bullet) => (
                      <div key={bullet} style={{ fontSize: 13, color: "#4b5d7b", lineHeight: 1.6 }}>
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="guide-card-price-col">
                  <div style={{ fontSize: 28, fontWeight: 800, color: report.accentColor }}>{report.price}</div>
                  <div
                    style={{
                      marginTop: 16,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: report.accentColor,
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "10px 20px",
                      borderRadius: 8,
                      letterSpacing: "0.01em",
                    }}
                  >
                    View report {"->"}
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
