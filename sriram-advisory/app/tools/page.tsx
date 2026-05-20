import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools | Sriram Advisory",
  description:
    "Career intelligence tools for Indian professionals — SA-AIRS™ Score Report and the Am I Future-Proof? Audit. Know your exact AI risk score and risk horizon.",
};

const TOOLS = [
  {
    badge: "Core Tool",
    badgeBg: "#1a4fd6",
    badgeColor: "#ffffff",
    title: "SA-AIRS™ Score Report",
    subtitle: "Your AI risk score across 5 dimensions. Ladder placed. Benchmarked.",
    blurb:
      "The foundational career risk assessment. Your role scored across 5 weighted dimensions — Task Repetition, Automation Feasibility, Market Saturation, Decision Complexity, Human Dependency — with confidence ratings, industry benchmarks, and a 90-day re-score. Rule-based logic. Every input traceable. No black boxes.",
    price: "₹499",
    strikePrice: "₹799",
    tag: "Standard",
    href: "/sa-airs-score-report",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f0f5ff 0%, #e6eeff 100%)",
    borderColor: "#c7d7ff",
    ctaLabel: "Get the Score Report →",
    details: ["SA-AIRS™ composite score (0–10)", "5-dimension breakdown with confidence ratings", "Top 10% Ladder placement (L1–L5)", "Industry & role benchmarks", "90-day re-score included"],
  },
  {
    badge: "Audit",
    badgeBg: "#dc2626",
    badgeColor: "#ffffff",
    title: "Am I Future-Proof? Audit",
    subtitle: "48-hour personal audit — risk horizon at 12 and 36 months. Top 3 Moves.",
    blurb:
      "Everything in the Score Report, plus a specific 12-month and 36-month risk horizon and a role-specific 90-day action plan (Top 3 Moves). A human-reviewed audit — not a generic output. For professionals who want the diagnosis and an immediate action plan delivered in one report within 48 hours.",
    price: "₹499",
    strikePrice: null,
    tag: "48-Hour Turnaround",
    href: "/am-i-future-proof",
    accentColor: "#dc2626",
    bgGradient: "linear-gradient(135deg, #fff5f5 0%, #fee2e2 100%)",
    borderColor: "#fecaca",
    ctaLabel: "Book the Audit →",
    details: ["Full SA-AIRS™ score (all 5 dimensions)", "12-month and 36-month risk horizon", "Top 10% Ladder placement", "Top 3 Moves (90-day action plan)", "90-day re-score included"],
  },
];

export default function ToolsPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0f2040 60%, #1a4fd6 100%)",
          paddingTop: 96,
          paddingBottom: 72,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
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
              SA-AIRS™ Career Intelligence
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
            Career Risk Tools
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(200,220,255,0.8)",
              lineHeight: 1.75,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Rule-based career risk scoring for Indian professionals. Know exactly where
            you stand — your SA-AIRS™ score, your ladder position, and your risk horizon.
            No AI-generated interpretations. Transparent, traceable logic.
          </p>
        </div>
      </section>

      {/* TOOLS */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "72px 20px 80px" }}>
        <h2
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#1a4fd6",
            marginBottom: 36,
          }}
        >
          Available Now
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {TOOLS.map((tool) => (
            <div
              key={tool.href}
              style={{
                background: tool.bgGradient,
                border: `1.5px solid ${tool.borderColor}`,
                borderRadius: 16,
                padding: "32px 32px",
                display: "flex",
                gap: 32,
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              {/* Left: content */}
              <div style={{ flex: 1, minWidth: 260 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      background: tool.badgeBg,
                      color: tool.badgeColor,
                      padding: "3px 10px",
                      borderRadius: 20,
                    }}
                  >
                    {tool.badge}
                  </span>
                  <span style={{ fontSize: 12, color: "#5a6a8a", fontWeight: 500 }}>
                    {tool.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 26px)",
                    fontWeight: 800,
                    color: "#0a1628",
                    marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {tool.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: tool.accentColor,
                    marginBottom: 14,
                  }}
                >
                  {tool.subtitle}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    color: "#3d4f6e",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {tool.blurb}
                </p>
                {/* Bullet details */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {tool.details.map((d) => (
                    <li
                      key={d}
                      style={{
                        fontSize: 13,
                        color: "#3d4f6e",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          color: tool.accentColor,
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        —
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: price + CTA */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 4,
                  flexShrink: 0,
                  minWidth: 140,
                }}
              >
                {tool.strikePrice && (
                  <div
                    style={{
                      fontSize: 13,
                      color: "#9aa8c0",
                      textDecoration: "line-through",
                      marginBottom: 2,
                    }}
                  >
                    {tool.strikePrice}
                  </div>
                )}
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: tool.accentColor,
                    lineHeight: 1,
                    marginBottom: 20,
                  }}
                >
                  {tool.price}
                </div>
                <Link
                  href={tool.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: tool.accentColor,
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    padding: "11px 22px",
                    borderRadius: 8,
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tool.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON NOTE */}
      <section
        style={{
          background: "#f7f9fc",
          borderTop: "1px solid #e8edf5",
          borderBottom: "1px solid #e8edf5",
          padding: "56px 20px",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 2.5vw, 28px)",
              fontWeight: 800,
              color: "#0a1628",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Which tool is right for you?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 28,
            }}
          >
            <div
              style={{
                background: "#fff",
                border: "1.5px solid #c7d7ff",
                borderRadius: 12,
                padding: "24px 24px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#1a4fd6",
                  marginBottom: 10,
                }}
              >
                SA-AIRS™ Score Report
              </div>
              <p style={{ fontSize: 14, color: "#3d4f6e", lineHeight: 1.7 }}>
                Best if you want to know your exact risk score and dimension breakdown — the data, your number, and where you sit on the ladder. Self-serve assessment.
              </p>
            </div>
            <div
              style={{
                background: "#fff",
                border: "1.5px solid #fecaca",
                borderRadius: 12,
                padding: "24px 24px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#dc2626",
                  marginBottom: 10,
                }}
              >
                Am I Future-Proof? Audit
              </div>
              <p style={{ fontSize: 14, color: "#3d4f6e", lineHeight: 1.7 }}>
                Best if you want the score <em>plus</em> a concrete 12/36-month risk horizon and a specific 90-day action plan for your role. Human-reviewed. Delivered in 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
