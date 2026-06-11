import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | SA-AIRS™ Assessment | Sriram Advisory",
  description:
    "SA-AIRS™ is a structured, multi-dimension audit methodology that produces a 0–10 displacement risk score for professionals navigating the AI transition.",
};

const PRINCIPLES = [
  {
    num: "01",
    title: "Structured, Not Opinionated",
    body: "Every score is produced by a documented methodology — not a gut feeling or a trend article. The same role, assessed twice with the same inputs, produces the same score.",
  },
  {
    num: "02",
    title: "Weighted by Real Displacement Evidence",
    body: "The dimensions we measure are chosen because they directly correlate with observed job displacement patterns across mid-market and enterprise roles. We do not measure proxies — we measure drivers.",
  },
  {
    num: "03",
    title: "Calibrated Against Real Cohorts",
    body: "The scoring rubric has been calibrated across cohorts of working professionals across engineering, finance, marketing, and operations. The score bands map to observed outcomes — not theoretical risk models.",
  },
  {
    num: "04",
    title: "Explainable at Every Step",
    body: "You receive a score, a tier, and a breakdown by dimension. Nothing is a black box. If you want to understand why you scored where you did, the reasoning is always provided.",
  },
  {
    num: "05",
    title: "Time-Horizoned",
    body: "Displacement risk is not a binary event. The Full Report gives you both a 12-month and 36-month horizon — because the right action differs depending on how much runway you have.",
  },
];

const WHAT_WE_MEASURE = [
  {
    label: "Task Structure",
    desc: "How predictable and rule-based your core daily work is. Highly patterned work — even complex-looking work — is the primary target for automation.",
  },
  {
    label: "Automation Feasibility",
    desc: "Not theoretical AI capability — whether tools available today can replicate your actual deliverables. Scored by auditing real role outputs.",
  },
  {
    label: "Market Conditions",
    desc: "The supply side of displacement. When AI enables consolidation, which roles and markets feel it first is determined partly by supply-demand dynamics.",
  },
  {
    label: "Decision Complexity",
    desc: "Work requiring multi-variable judgment, ethical trade-offs, or real-time contextual decisions is substantially harder to replicate at scale. We measure actual decision latitude.",
  },
  {
    label: "Human Context Dependency",
    desc: "Work embedded in personal trust, political context, or relationship capital resists automation by design. We measure how deeply your role depends on being human.",
  },
];

const TIERS = [
  { label: "Low Risk", color: "#0d9268", desc: "Complex, trust-dependent work. The moat is real — the task is to maintain and document it." },
  { label: "Moderate Risk", color: "#4fc3f7", desc: "Partially automatable. Proactive strategy now prevents reactive scrambling later." },
  { label: "High Risk", color: "#f7a44f", desc: "Significant automation pressure. The 12-month window is the action period." },
  { label: "Very High Risk", color: "#ff7a4d", desc: "Core deliverables already AI-replicable. Urgent repositioning required." },
  { label: "Critical Risk", color: "#ff4d4d", desc: "Near-term displacement without structural role change." },
];

export default function SystemPage() {
  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="px-5 md:px-10" style={{ paddingTop: 120, paddingBottom: 80, background: "#f0f4f8", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="hero-badge" style={{ margin: "0 auto 28px", width: "fit-content" }}>
            <span className="hero-badge-dot" />
            SA-AIRS&#8482; Methodology
          </div>
          <h1 className="section-title" style={{ fontSize: "clamp(42px, 6vw, 72px)", marginBottom: 20 }}>
            The System Behind<br />Every Score
          </h1>
          <p className="section-sub" style={{ margin: "0 auto 40px", textAlign: "center" }}>
            SA-AIRS&#8482; is a weighted, multi-dimension audit methodology designed to model AI career displacement risk with full explainability.
            Not a quiz. Not an opinion. A structured audit calibrated against real cohort data.
          </p>
        </div>
      </section>

      {/* WHAT WE MEASURE */}
      <section className="section section-mid">
        <div className="section-inner" style={{ maxWidth: 860 }}>
          <span className="section-label">What We Measure</span>
          <h2 className="section-title">Five Dimensions of Risk</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            The assessment evaluates five independent dimensions of your role. Each dimension targets a distinct driver of AI displacement.
            The composite score is a weighted combination of these five dimensions, where higher scores indicate greater displacement risk.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {WHAT_WE_MEASURE.map((dim, i) => (
              <div key={dim.label} className="dim-row" style={{
                padding: "28px 0",
                borderTop: i === 0 ? "1px solid rgba(10,22,40,0.08)" : undefined,
                borderBottom: "1px solid rgba(10,22,40,0.08)",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <span style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 13, color: "#1a4fd6", fontWeight: 700,
                    letterSpacing: "0.1em", paddingTop: 3,
                  }}>D{i + 1}</span>
                  <span style={{ fontWeight: 700, fontSize: 15, color: "#0a1628", lineHeight: 1.3 }}>{dim.label}</span>
                </div>
                <p style={{ color: "#5a6a8a", fontSize: 15, lineHeight: 1.75, margin: 0 }}>{dim.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 32, fontSize: 14, color: "#8898b8", fontFamily: "var(--font-dm-mono), monospace", lineHeight: 1.8 }}>
            {"// Exact dimension weights, scoring rubrics, and calibration data are proprietary."}
            Full methodology is shared with clients who complete a Full Report or Deep Dive engagement.
          </p>
        </div>
      </section>

      {/* RISK TIERS */}
      <section className="section section-dark">
        <div className="section-inner" style={{ maxWidth: 800 }}>
          <span className="section-label">Risk Tiers</span>
          <h2 className="section-title">Five Tiers, Specific Guidance</h2>
          <p className="section-sub" style={{ marginBottom: 40 }}>
            The composite score (0–10) maps to one of five risk tiers. Each tier comes with specific action guidance — not generic advice.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {TIERS.map((t) => (
              <div key={t.label} style={{
                display: "flex", alignItems: "flex-start", gap: 20,
                padding: "20px 24px",
                background: "#ffffff",
                border: "1px solid rgba(10,22,40,0.08)",
                borderRadius: 10,
              }}>
                <span style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: t.color, flexShrink: 0, marginTop: 5,
                }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#0a1628", fontSize: 15, marginBottom: 6 }}>{t.label}</div>
                  <div style={{ color: "#5a6a8a", fontSize: 15, lineHeight: 1.7 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PRINCIPLES */}
      <section className="section section-mid">
        <div className="section-inner" style={{ maxWidth: 860 }}>
          <span className="section-label">Design Principles</span>
          <h2 className="section-title">Why This Approach</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Most AI risk frameworks are either too simplistic (a 5-question quiz) or too theoretical (white-paper models detached from real roles).
            SA-AIRS&#8482; was designed to close that gap.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 28 }}>
            {PRINCIPLES.map((p) => (
              <div key={p.num} style={{
                padding: "28px 24px",
                background: "#ffffff",
                border: "1px solid rgba(10,22,40,0.08)",
                borderRadius: 12,
              }}>
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 13, color: "#1a4fd6", letterSpacing: "0.1em", marginBottom: 12,
                }}>{p.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0a1628", margin: "0 0 10px", lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ color: "#5a6a8a", fontSize: 15, lineHeight: 1.75, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIDENCE LEVELS */}
      <section className="section section-dark">
        <div className="section-inner" style={{ maxWidth: 720 }}>
          <span className="section-label">Confidence &amp; Coverage</span>
          <h2 className="section-title">Risk Score vs. Full Audit</h2>
          <p className="section-sub" style={{ marginBottom: 32 }}>
            More data means higher scoring confidence. The Risk Score is a directional read.
            The Full Report is a high-confidence audit with all five dimensions fully scored.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              {
                tier: "AI Risk Score",
                conf: "Directional Read",
                color: "#1a4fd6",
                items: ["Directional score", "2-dimension quick read", "Risk tier placement", "1 key insight"],
              },
              {
                tier: "Full Report",
                conf: "High Confidence",
                color: "#0d9268",
                items: ["All 5 dimensions scored", "Composite SA-AIRS™ score", "12 & 36-month horizons", "Top 3 Moves roadmap"],
              },
            ].map((card) => (
              <div key={card.tier} style={{
                padding: "24px 20px",
                background: "#ffffff",
                border: "1px solid rgba(10,22,40,0.08)",
                borderRadius: 10,
              }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#0a1628", marginBottom: 6 }}>{card.tier}</div>
                <div style={{ fontSize: 13, color: card.color, letterSpacing: "0.08em", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 16 }}>{card.conf}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {card.items.map((it) => (
                    <li key={it} style={{ fontSize: 15, color: "#5a6a8a", display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: card.color, flexShrink: 0 }}>✓</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm section-mid">
        <div className="section-inner" style={{ maxWidth: 600, textAlign: "center" }}>
          <h2 className="section-title">Get Scored Against This System</h2>
          <p className="section-sub" style={{ textAlign: "center", marginBottom: 32 }}>
            Choose the assessment depth that fits you, then get your score, risk tier, and next steps.
          </p>
          <Link href="/get-started" className="btn-primary" style={{ display: "inline-flex" }}>
            Get Your Score &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
