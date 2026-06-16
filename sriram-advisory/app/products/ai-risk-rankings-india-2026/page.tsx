import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import MobileStickyCheckoutBar from "@/components/MobileStickyCheckoutBar";

export const metadata: Metadata = {
  title: "AI Risk Rankings India 2026 | Sriram Advisory",
  description:
    "India-first AI career risk rankings report covering the top 25 high-risk careers, 4 exposure bands, adaptation paths, and 100+ pages of research-backed market intelligence. Rs 999.",
};

const TOP5_PREVIEW = [
  { rank: 1, title: "Customer Service / L1 Support Agent", band: "Extreme", headcount: "2M-2.5M" },
  { rank: 2, title: "Data Entry Specialist / Clerk", band: "Extreme", headcount: "1.5M+" },
  { rank: 3, title: "Software QA Tester", band: "Extreme", headcount: "800K+" },
  { rank: 4, title: "Medical Transcriptionist", band: "Extreme", headcount: "240K" },
  { rank: 5, title: "General Content / Copywriter", band: "Extreme", headcount: "500K+" },
];

const WHAT_YOU_GET = [
  {
    title: "Top 25 careers ranked",
    desc: "A structured ranking of India high-risk careers with exposure banding, indicative headcount, and market context.",
  },
  {
    title: "4 risk exposure bands",
    desc: "A clearer framework for reading task-level vulnerability without pretending to predict exact job-loss percentages.",
  },
  {
    title: "100+ pages of India-first analysis",
    desc: "Built from current labour-market, automation, and AI-adoption research instead of generic global summaries.",
  },
  {
    title: "Role-specific adaptation direction",
    desc: "A practical next-step framework for professionals who need to know what to do after understanding the risk.",
  },
  {
    title: "Occupational cluster profiles",
    desc: "Deeper analysis of where pressure is rising across service firms, GCCs, startups, and role families.",
  },
  {
    title: "Methodology and sources",
    desc: "Transparent source attribution across NASSCOM, NITI Aayog, WEF, EY India, McKinsey, and related 2025-26 research.",
  },
];

const PREVIEW_BLOCKS = [
  {
    title: "You will get clarity on",
    bullets: [
      "Which careers appear most exposed right now",
      "Why some roles are structurally vulnerable and others evolve instead",
      "How to interpret AI pressure in an India-specific labour market context",
    ],
  },
  {
    title: "You will leave with",
    bullets: [
      "A clearer market picture instead of scattered AI headlines",
      "A stronger sense of where your own role may fit in the risk landscape",
      "A practical adaptation lens, not just a ranking list",
    ],
  },
  {
    title: "You will not get",
    bullets: [
      "A shallow clickbait ranking with no framework behind it",
      "US-market assumptions awkwardly mapped onto India",
      "Fear content with no explanation of what professionals can do next",
    ],
  },
];

const RISK_BANDS = [
  {
    band: "Extreme",
    range: "70-80% of core tasks",
    desc: "Routine task structure is highly vulnerable and structural decline is plausible without role evolution.",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.12)",
  },
  {
    band: "High",
    range: "55-69% of core tasks",
    desc: "Substantial automation pressure. Survival depends on moving into adjacent, higher-value work.",
    color: "#ea580c",
    bg: "rgba(234,88,12,0.12)",
  },
  {
    band: "Elevated",
    range: "40-54% of core tasks",
    desc: "Significant sub-task automation, but the role is more likely to evolve than disappear outright.",
    color: "#ca8a04",
    bg: "rgba(202,138,4,0.12)",
  },
  {
    band: "Moderate",
    range: "25-39% of core tasks",
    desc: "Partial automation pressure with stronger protection from judgment, context, and relational work.",
    color: "#16a34a",
    bg: "rgba(22,163,74,0.12)",
  },
];

const SOURCES = [
  "NASSCOM Strategic Review 2026",
  "NITI Aayog / NASSCOM / BCG AI Roadmap",
  "WEF Future of Jobs Report 2025",
  "India Economic Survey 2025-26",
  "EY India AIdea of India Outlook 2026",
  "McKinsey State of AI 2025",
  "MeitY India AI Governance Guidelines",
];

const TESTIMONIAL =
  "The AI Career Risk report provided by Sriram Advisory is really good and comprehensive. Sriram Srinivasan has put in efforts to study the risks faced by professionals role-wise across the spectrum of the industry from service companies, GCCs, botique IT firms, startups. This gives an idea to the professionals at different stages of their career to assess themselves and how to stay relevant in the industry. I had a look at the report, it looked impressive with the kind of detailing. I urge people to try it.";

export default function AIRiskRankingsPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, #1a0505 0%, #3b0a0a 55%, #7f1d1d 100%)",
          paddingTop: 100,
          paddingBottom: 82,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px", position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginBottom: 28,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(220,38,38,0.2)",
                border: "1px solid rgba(220,38,38,0.45)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fca5a5",
              }}
            >
              India Labour Market Intelligence
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fca5a5",
              }}
            >
              May 2026 Edition
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 60px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              marginBottom: 22,
              letterSpacing: "-0.02em",
            }}
          >
            AI Risk Rankings India 2026
            <br />
            <span style={{ color: "#f87171" }}>Top 25 high-risk careers, mapped clearly</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "rgba(252,165,165,0.9)",
              lineHeight: 1.7,
              maxWidth: 760,
              margin: "0 auto 16px",
            }}
          >
            Understand which careers are under the most AI pressure in India, why they are vulnerable, and what professionals can do next. Built from current research, not recycled AI headlines.
          </p>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.65)",
              fontStyle: "italic",
              marginBottom: 28,
            }}
          >
            This is not just a ranking. It is a market-intelligence report with an adaptation lens.
          </p>

          <div style={{ maxWidth: 360, margin: "0 auto 28px" }}>
            <CashfreeCheckout
              productName="AI Risk Rankings India 2026 - Top 25 High-Risk Careers Report"
              amount={999}
              accentColor="#dc2626"
              deliveryNote="Manual email delivery usually lands within 30 minutes of payment."
              emailNote="Your report will be delivered to this email."
              buttonLabel="Get the Report — ₹999"
              buttonStyle={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                background: "#dc2626",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 17,
                padding: "16px 20px",
                borderRadius: 10,
                border: "1px solid #ef4444",
                letterSpacing: "0.01em",
                boxShadow: "0 14px 32px rgba(26, 5, 5, 0.22)",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              marginBottom: 36,
            }}
          >
            {[
              "25 ranked careers",
              "4 exposure bands",
              "100+ pages",
              "Manual email delivery within 30 minutes",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 999,
                  padding: "10px 16px",
                  fontSize: 13,
                  color: "#fff2f2",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            className="hero-price-box"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 20,
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>
                Rs 999
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fca5a5",
                marginBottom: 16,
                display: "block",
              }}
            >
              Manual email delivery within 30 minutes
            </span>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", lineHeight: 1.6, margin: "0 0 18px" }}>
              Built from NASSCOM, NITI Aayog, WEF, EY India, McKinsey, and related 2025-26 research.
            </p>
            <CashfreeCheckout
              productName="AI Risk Rankings India 2026 - Top 25 High-Risk Careers Report"
              amount={999}
              accentColor="#dc2626"
              deliveryNote="Manual email delivery usually lands within 30 minutes of payment."
              emailNote="Your report will be delivered to this email."
              buttonLabel="Get the Report — ₹999"
              buttonStyle={{
                background: "#dc2626",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 17,
                padding: "16px 36px",
                borderRadius: 10,
                border: "1px solid #ef4444",
                letterSpacing: "0.01em",
                width: "100%",
                minWidth: 280,
              }}
            />
            <p style={{ marginTop: 14, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
              One-time purchase. Designed for professionals who want clarity, not generic AI commentary.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "28px 20px 24px" }}>
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {[
            "See where your role or adjacent roles may sit in the risk landscape",
            "Understand the logic behind the ranking instead of just consuming a list",
            "Use an adaptation lens to think about what comes after the diagnosis",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#fff5f5",
                border: "1px solid #fecaca",
                borderRadius: 14,
                padding: "18px 18px",
                fontSize: 14,
                color: "#304159",
                lineHeight: 1.6,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff5f5", padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#dc2626",
                display: "block",
                marginBottom: 12,
              }}
            >
              What You Get
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              A usable market-intelligence product, not just a report title
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {WHAT_YOU_GET.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid #fecaca",
                  borderRadius: 16,
                  padding: "24px 24px",
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 800, color: "#dc2626", marginBottom: 10 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#dc2626",
                display: "block",
                marginBottom: 12,
              }}
            >
              Preview
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              What this report helps you understand
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {PREVIEW_BLOCKS.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fffaf9",
                  border: "1px solid #f3d1d1",
                  borderRadius: 16,
                  padding: "22px 22px",
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 800, color: "#0a1628", marginBottom: 12 }}>
                  {item.title}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {item.bullets.map((bullet) => (
                    <div key={bullet} style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.6 }}>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#dc2626" }}>
              Risk Framework
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#0a1628", marginTop: 12 }}>
              4 risk exposure bands
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", maxWidth: 620, margin: "14px auto 0", lineHeight: 1.7 }}>
              This framework focuses on task-composition exposure, not false-precision job-loss predictions.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {RISK_BANDS.map((rb) => (
              <div
                key={rb.band}
                style={{
                  background: rb.bg,
                  border: `1.5px solid ${rb.color}30`,
                  borderRadius: 14,
                  padding: "24px 20px",
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 800, color: rb.color, marginBottom: 6 }}>{rb.band}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#0a1628", marginBottom: 8 }}>{rb.range}</div>
                <div style={{ fontSize: 13, color: "#3a4a6a", lineHeight: 1.55 }}>{rb.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#dc2626" }}>
              Ranking Preview
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#0a1628", marginTop: 12 }}>
              Top 5 extreme-risk careers
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 12 }}>
              Careers #6-#25, full profiles, and adaptation direction are inside the full report.
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#1a0505", color: "#fff" }}>
                  <th style={{ padding: "14px 16px", textAlign: "center", borderRadius: "10px 0 0 0", fontWeight: 600, width: 60 }}>#</th>
                  <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600 }}>Career / Occupation</th>
                  <th style={{ padding: "14px 16px", textAlign: "center", fontWeight: 600 }}>Risk Band</th>
                  <th style={{ padding: "14px 16px", textAlign: "center", borderRadius: "0 10px 0 0", fontWeight: 600 }}>Indicative Headcount</th>
                </tr>
              </thead>
              <tbody>
                {TOP5_PREVIEW.map((row, i) => (
                  <tr key={row.rank} style={{ background: i % 2 === 0 ? "#ffffff" : "#fef2f2" }}>
                    <td style={{ padding: "13px 16px", textAlign: "center", fontWeight: 800, color: "#dc2626", fontSize: 16 }}>{row.rank}</td>
                    <td style={{ padding: "13px 16px", fontWeight: 600, color: "#0a1628" }}>{row.title}</td>
                    <td style={{ padding: "13px 16px", textAlign: "center" }}>
                      <span
                        style={{
                          background: "rgba(220,38,38,0.12)",
                          color: "#dc2626",
                          fontWeight: 700,
                          fontSize: 12,
                          padding: "3px 10px",
                          borderRadius: 8,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                        }}
                      >
                        {row.band}
                      </span>
                    </td>
                    <td style={{ padding: "13px 16px", textAlign: "center", color: "#5a6a8a", fontWeight: 500 }}>{row.headcount}</td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan={4}
                    style={{
                      padding: "16px",
                      textAlign: "center",
                      background: "#1a0505",
                      color: "#fca5a5",
                      fontSize: 14,
                      fontWeight: 600,
                      borderRadius: "0 0 10px 10px",
                    }}
                  >
                    + 20 more careers ranked #6-#25, deeper profiles, and adaptation framework inside the report
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#fff5f5" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#dc2626",
                display: "block",
                marginBottom: 12,
              }}
            >
              Customer Feedback
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              What one reader said after reviewing it
            </h2>
          </div>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #fecaca",
              borderRadius: 18,
              padding: "28px 28px",
            }}
          >
            <p style={{ fontSize: 18, lineHeight: 1.8, color: "#24364d", margin: 0 }}>&quot;{TESTIMONIAL}&quot;</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#dc2626" }}>
            Research Sources
          </span>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#0a1628", marginTop: 12, marginBottom: 24 }}>
            Built on current primary research
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {SOURCES.map((src) => (
              <span
                key={src}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f4",
                  borderRadius: 20,
                  padding: "6px 16px",
                  fontSize: 13,
                  color: "#3a4a6a",
                  fontWeight: 500,
                }}
              >
                {src}
              </span>
            ))}
          </div>
          <p style={{ marginTop: 18, fontSize: 13, color: "#8898b8" }}>
            May 2026 edition with India-focused labour market, automation, and workforce transition context.
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "120px 24px",
          background: "linear-gradient(160deg, #1a0505 0%, #3b0a0a 60%, #7f1d1d 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              color: "#f8faff",
              marginBottom: 16,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Buy the report if you want a clearer map of the shift
          </h2>
          <p style={{ fontSize: 17, color: "rgba(252,165,165,0.86)", lineHeight: 1.7, marginBottom: 40 }}>
            Use it to understand the ranking, the structure behind the ranking, and the adaptation logic that matters after the diagnosis.
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>
                Rs 999
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fca5a5",
                marginBottom: 20,
              }}
            >
              Manual email delivery within 30 minutes
            </span>
            <CashfreeCheckout
              productName="AI Risk Rankings India 2026 - Top 25 High-Risk Careers Report"
              amount={999}
              accentColor="#dc2626"
              deliveryNote="Manual email delivery usually lands within 30 minutes of payment."
              emailNote="Your report will be delivered to this email."
              buttonLabel="Get the Report — ₹999"
              buttonStyle={{
                background: "#dc2626",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 40px",
                borderRadius: 10,
                border: "1px solid #ef4444",
                letterSpacing: "0.01em",
                minWidth: 260,
              }}
            />
            <p style={{ marginTop: 14, fontSize: 13, color: "rgba(255,255,255,0.56)" }}>
              One-time purchase. Built for professionals who want evidence-backed clarity.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 20px", background: "#1a0505" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ fontSize: 12, color: "rgba(252,165,165,0.55)", lineHeight: 1.7, textAlign: "center" }}>
            <strong style={{ color: "rgba(252,165,165,0.78)" }}>Disclaimer:</strong> These exposure bands are analytical estimates based on task-composition and labour-market interpretation, not official government job-loss projections. Headcount figures are indicative industry estimates. This report is designed as a decision-support product for professionals, not as policy advice.
          </p>
        </div>
      </section>

      <MobileStickyCheckoutBar
        productName="AI Risk Rankings India 2026 - Top 25 High-Risk Careers Report"
        amount={999}
        accentColor="#dc2626"
        deliveryNote="Manual email delivery usually lands within 30 minutes of payment."
        emailNote="Your report will be delivered to this email."
        buttonLabel="Get the Report — ₹999"
      />

      <Footer />
    </div>
  );
}
