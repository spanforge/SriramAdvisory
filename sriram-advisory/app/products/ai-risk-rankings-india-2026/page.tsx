import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Risk Rankings India 2026 — Top 25 High-Risk Careers | Sriram Advisory",
  description:
    "The definitive ranking of India's 25 highest-risk careers under AI displacement. Research-backed analysis with risk bands, headcount data, and an individual adaptation framework. ₹499.",
};

const TOP5_PREVIEW = [
  { rank: 1, title: "Customer Service / L1 Support Agent", band: "Extreme", headcount: "2M–2.5M", color: "#dc2626" },
  { rank: 2, title: "Data Entry Specialist / Clerk", band: "Extreme", headcount: "1.5M+", color: "#dc2626" },
  { rank: 3, title: "Software QA Tester", band: "Extreme", headcount: "800K+", color: "#dc2626" },
  { rank: 4, title: "Medical Transcriptionist", band: "Extreme", headcount: "240K", color: "#dc2626" },
  { rank: 5, title: "General Content / Copywriter", band: "Extreme", headcount: "500K+", color: "#dc2626" },
];

const RISK_BANDS = [
  { band: "Extreme", range: "70–80% of core tasks", desc: "Majority of routine tasks automatable; structural role decline highly probable", color: "#dc2626", bg: "rgba(220,38,38,0.12)" },
  { band: "High", range: "55–69% of core tasks", desc: "Substantial automation likely; role survival depends on upskilling to adjacent functions", color: "#ea580c", bg: "rgba(234,88,12,0.12)" },
  { band: "Elevated", range: "40–54% of core tasks", desc: "Significant sub-task automation; role evolves rather than disappears", color: "#ca8a04", bg: "rgba(202,138,4,0.12)" },
  { band: "Moderate", range: "25–39% of core tasks", desc: "Partial automation; human judgment and relational elements provide durable protection", color: "#16a34a", bg: "rgba(22,163,74,0.12)" },
];

const WHAT_INSIDE = [
  "Top 25 ranked careers — risk bands, headcounts, salary data & confidence ratings",
  "4-tier risk band framework (Extreme → High → Elevated → Moderate)",
  "Deep-dive vulnerability profiles for 5 occupational clusters",
  "Enterprise automation economics: why companies are accelerating adoption now",
  "Individual adaptation framework — 90-day plan by at-risk role",
  "Career transition paths mapped for each high-risk occupation",
  "The Universal AI Skill Ladder — 5 levels with concrete actions",
  "Case studies: 4 Indian professionals navigating real transitions",
  "Policy architecture analysis: India's skilling infrastructure gaps",
  "Regional displacement risk mapping (Bengaluru, Hyderabad, Tier-2 cities)",
  "Appendix: Full methodology, evidence quality framework, and source attribution",
  "12-page bibliography — NASSCOM, NITI Aayog, WEF, McKinsey, EY 2025–26 sources",
];

const SOURCES = [
  "NASSCOM Strategic Review 2026",
  "NITI Aayog / NASSCOM / BCG AI Roadmap (Oct 2025)",
  "WEF Future of Jobs Report 2025",
  "India Economic Survey 2025–26",
  "EY India AIdea of India Outlook 2026",
  "McKinsey State of AI 2025",
  "India AI Governance Guidelines (MeitY, Nov 2025)",
];

export default function AIRiskRankingsPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #1a0505 0%, #3b0a0a 55%, #7f1d1d 100%)",
        paddingTop: 100, paddingBottom: 80, textAlign: "center",
      }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 20px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(220,38,38,0.2)", border: "1px solid rgba(220,38,38,0.45)",
            borderRadius: 20, padding: "6px 16px", marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#f87171", display: "inline-block" }} />
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fca5a5" }}>
              India Labour Market Intelligence · May 2026 · v7.0
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.1, marginBottom: 22, letterSpacing: "-0.02em",
          }}>
            The Top 25 High-Risk Careers<br />
            <span style={{ color: "#f87171" }}>in India — 2026</span>
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 19px)", color: "#fca5a5", lineHeight: 1.7, marginBottom: 12, maxWidth: 620, margin: "0 auto 16px" }}>
            AI Displacement Risk Assessment, Structural Transition Framework &amp; Individual
            Adaptation Guide. Research-backed. India-specific. 100+ pages.
          </p>
          <p style={{ fontSize: 16, color: "rgba(252,165,165,0.85)", fontStyle: "italic", marginBottom: 36 }}>
            Sources: NASSCOM 2026 · NITI Aayog · WEF Future of Jobs 2025 · EY India · McKinsey
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <CashfreeCheckout
              productName="AI Risk Rankings India 2026 — Top 25 High-Risk Careers Report"
              amount={499}
              accentColor="#dc2626"
              buttonLabel="Get the Report — ₹499 →"
              buttonStyle={{
                background: "#dc2626", color: "#ffffff", fontWeight: 700,
                fontSize: 16, padding: "14px 32px", borderRadius: 10,
                border: "1px solid #ef4444", letterSpacing: "0.01em",
              }}
            />
            <Link
              href="/get-started"
              style={{
                display: "inline-flex", alignItems: "center",
                background: "transparent", color: "#fca5a5", fontWeight: 600,
                fontSize: 15, padding: "14px 28px", borderRadius: 10,
                textDecoration: "none", border: "1px solid rgba(252,165,165,0.3)",
              }}
            >
              Have a question? Talk to Sriram
            </Link>
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: "rgba(252,165,165,0.75)" }}>
            ₹499 · One-time purchase · Instant digital delivery · v7.0 May 2026
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "#fff5f5", padding: "32px 20px", borderBottom: "1px solid #fecaca" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          {[
            { num: "25", label: "Ranked high-risk careers" },
            { num: "4", label: "Risk exposure bands" },
            { num: "60%+", label: "Formal jobs at risk by 2030" },
            { num: "38M", label: "Indian jobs being transformed" },
            { num: "v7.0", label: "May 2026 edition" },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center", minWidth: 120 }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#dc2626", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RISK BAND FRAMEWORK */}
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#dc2626" }}>Risk Framework</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0a1628", marginTop: 12, marginBottom: 16 }}>
              4 Risk Exposure Bands
            </h2>
            <p style={{ fontSize: 16, color: "#5a6a8a", maxWidth: 580, margin: "0 auto" }}>
              This report replaces point-estimate scores with qualitative exposure bands to avoid false precision.
              Based on task-composition analysis, not predicted job loss percentages.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {RISK_BANDS.map((rb) => (
              <div key={rb.band} style={{
                background: rb.bg, border: `1.5px solid ${rb.color}30`,
                borderRadius: 14, padding: "24px 20px",
              }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: rb.color, marginBottom: 6 }}>{rb.band}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#0a1628", marginBottom: 8 }}>{rb.range}</div>
                <div style={{ fontSize: 13, color: "#3a4a6a", lineHeight: 1.55 }}>{rb.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP 5 PREVIEW TABLE */}
      <section style={{ padding: "80px 20px", background: "#f8faff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#dc2626" }}>Preview</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0a1628", marginTop: 12, marginBottom: 12 }}>
              Top 5 — Extreme Risk Careers
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a" }}>
              Careers #6–25 and all deep-dive profiles are inside the full report.
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
                      <span style={{
                        background: "rgba(220,38,38,0.12)", color: "#dc2626",
                        fontWeight: 700, fontSize: 12, padding: "3px 10px",
                        borderRadius: 8, letterSpacing: "0.05em", textTransform: "uppercase",
                      }}>
                        {row.band}
                      </span>
                    </td>
                    <td style={{ padding: "13px 16px", textAlign: "center", color: "#5a6a8a", fontWeight: 500 }}>{row.headcount}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4} style={{
                    padding: "16px", textAlign: "center",
                    background: "#1a0505", color: "#fca5a5",
                    fontSize: 14, fontWeight: 600, borderRadius: "0 0 10px 10px",
                  }}>
                    + 20 more careers ranked #6–#25 · Deep-dive profiles · Adaptation framework — inside the report
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#dc2626" }}>Contents</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0a1628", marginTop: 12, marginBottom: 16 }}>
              What&apos;s Inside the Report
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 12 }}>
            {WHAT_INSIDE.map((item) => (
              <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid #f0f4f8" }}>
                <span style={{ color: "#dc2626", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                <span style={{ fontSize: 14, color: "#2a3a5a", lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FINDING */}
      <section style={{ padding: "80px 20px", background: "#fff5f5" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#dc2626" }}>Key Finding</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 800, color: "#0a1628", marginTop: 12, marginBottom: 20, lineHeight: 1.2 }}>
            The hourglass workforce effect is already underway
          </h2>
          <p style={{ fontSize: 17, color: "#5a6a8a", lineHeight: 1.75, marginBottom: 36, maxWidth: 680, margin: "0 auto 36px" }}>
            Tech sector headcount growth has moderated to just 2.3% in FY26 despite revenue growing at 6.1%.
            Hiring for professionals aged 22–25 in high-exposure roles has declined ~14% since 2022.
            Over 60% of formal sector jobs are susceptible to automation by 2030 in a business-as-usual scenario —
            yet only 32% of employers expect near-term workforce decreases. The window to adapt is now.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 48 }}>
            {[
              { stat: "2.3%", label: "Tech headcount growth FY26 (vs 6.1% revenue growth)" },
              { stat: "14%", label: "Decline in 22–25 age hiring in high-risk roles since 2022" },
              { stat: "68%", label: "Professionals who expect AI to partially automate their role" },
            ].map(({ stat, label }) => (
              <div key={stat} style={{
                background: "#ffffff", border: "1.5px solid #fecaca", borderRadius: 14,
                padding: "20px 28px", textAlign: "center", minWidth: 200, flex: 1,
              }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#dc2626", lineHeight: 1, marginBottom: 6 }}>{stat}</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", lineHeight: 1.5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section style={{ padding: "60px 20px", background: "#f8faff" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5a6a8a" }}>Research Sources</span>
          <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, color: "#0a1628", marginTop: 10, marginBottom: 24 }}>
            Built on 2025–2026 primary research
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {SOURCES.map((src) => (
              <span key={src} style={{
                background: "#ffffff", border: "1px solid #e2e8f4",
                borderRadius: 20, padding: "6px 16px",
                fontSize: 13, color: "#3a4a6a", fontWeight: 500,
              }}>
                {src}
              </span>
            ))}
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: "#8898b8" }}>
            v7.0 (May 2026) — fully updated with the latest published data from India&apos;s leading research institutions.
          </p>
        </div>
      </section>

      {/* BUY CTA */}
      <section style={{
        padding: "80px 20px", textAlign: "center",
        background: "linear-gradient(135deg, #1a0505 0%, #3b0a0a 60%, #7f1d1d 100%)",
      }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", marginBottom: 16, lineHeight: 1.2 }}>
            Know where your career stands
          </h2>
          <p style={{ fontSize: 17, color: "#fca5a5", lineHeight: 1.7, marginBottom: 12 }}>
            25 ranked careers. 4 risk bands. A full individual adaptation framework.
            Built from India&apos;s most current labour market research.
          </p>
          <p style={{ fontSize: 15, color: "rgba(252,165,165,0.75)", marginBottom: 36 }}>
            One-time purchase · Instant digital delivery · ₹499
          </p>
          <CashfreeCheckout
            productName="AI Risk Rankings India 2026 — Top 25 High-Risk Careers Report"
            amount={499}
            accentColor="#dc2626"
            buttonLabel="Get the Report Now — ₹499 →"
            buttonStyle={{
              background: "#dc2626", color: "#ffffff", fontWeight: 700,
              fontSize: 17, padding: "16px 40px", borderRadius: 10,
              border: "1px solid #ef4444", letterSpacing: "0.01em",
            }}
          />
          <p style={{ marginTop: 20, fontSize: 13, color: "rgba(252,165,165,0.6)" }}>
            Covered by our 1-actionable-insight-or-full-refund guarantee.
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ padding: "32px 20px", background: "#1a0505" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ fontSize: 12, color: "rgba(252,165,165,0.5)", lineHeight: 1.7, textAlign: "center" }}>
            <strong style={{ color: "rgba(252,165,165,0.75)" }}>Disclaimer:</strong> Risk Exposure Bands are analytical estimates based on task-composition data, not official government
            projections. Headcount figures are indicative industry estimates. This report focuses primarily on formal-sector, urban,
            white-collar occupations. Agricultural, informal-economy, and rural labour dynamics differ materially and are not covered.
            Readers are encouraged to consult primary sources before making workforce or policy decisions.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
