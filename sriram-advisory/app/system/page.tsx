import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIMS = [
  {
    id: "D1", weight: "25%", name: "Task Repetition Level", range: "0–10",
    desc: "Measures how predictable and rule-based your core daily work is. Work that follows patterns — even complex ones — is automatable. Work that requires real-time improvisation and novel judgment is not.",
    low: "Highly varied, context-dependent tasks",
    high: "Scripted, repeatable, process-driven",
    examples: ["High: Data entry, standard reporting, scheduled emails", "Mid: Monthly analysis with standard templates", "Low: Client advisory, product strategy, bespoke consulting"],
  },
  {
    id: "D2", weight: "25%", name: "Automation Feasibility", range: "0–10",
    desc: "Not theoretical — whether today's AI tools (2024–2025) can replicate your actual outputs. This is calibrated against real tools, not capability forecasts. Scored by direct audit of your role's deliverables.",
    low: "Outputs require physical presence, rare expertise, or high trust",
    high: "Outputs are digital, text-based, and already replicable by GPT-class tools",
    examples: ["High: Writing code boilerplate, generating SQL, drafting reports", "Mid: Code review, requirements gathering", "Low: Executive decision-making, complex negotiation, client relationship management"],
  },
  {
    id: "D3", weight: "20%", name: "Market Saturation", range: "0–10",
    desc: "The supply side of displacement risk. When AI automates part of a role, companies don't reduce the workforce uniformly — they concentrate work in fewer people. Saturated markets feel this first.",
    low: "Rare skills, specialized domain, limited supply",
    high: "Highly common role with large candidate pools",
    examples: ["High: Entry-level developers, generalist marketers, junior data analysts", "Mid: Mid-tier project managers, functional specialists", "Low: Domain architects, principal engineers, specialized researchers"],
  },
  {
    id: "D4", weight: "15%", name: "Decision Complexity (inv.)", range: "0–10 (inverted)",
    desc: "Inverse factor — higher score = lower risk. Work requiring multi-variable judgment, ethical trade-offs, or real-time contextual decisions is harder for AI to replicate at scale. Scored on actual decision latitude in your role.",
    low: "Your role executes decisions made by others",
    high: "Your role makes consequential, multi-factor decisions",
    examples: ["High (safe): Strategy, architecture, policy, advisory", "Mid: Technical lead, product management", "Low (at risk): Task execution, support, data processing"],
  },
  {
    id: "D5", weight: "15%", name: "Human Context Dependency (inv.)", range: "0–10 (inverted)",
    desc: "Inverse factor — higher score = lower risk. Work embedded in human trust, political context, or organizational relationship capital resists automation by design. AI can't build reputation or navigate org dynamics.",
    low: "Work delivered digitally to anonymous endpoints",
    high: "Work deeply embedded in personal relationships, trust, and institutional context",
    examples: ["High (safe): Therapist, C-suite advisor, key account manager", "Mid: Engineering manager, HR business partner", "Low (at risk): Remote data work, digital delivery, API outputs"],
  },
];

const FORMULA = `SA-AIRS™ = (D1 × 0.25) + (D2 × 0.25) + (D3 × 0.20)
           + ((10 − D4) × 0.15) + ((10 − D5) × 0.15)

Score range: 0 (No risk) → 10 (Maximum displacement risk)`;

const TIERS = [
  { range: "0.0 – 3.5", label: "Low Risk", desc: "Complex, trust-dependent, hard to replicate. Maintain and document the moat.", cls: "low", color: "#22d3a0" },
  { range: "3.5 – 5.5", label: "Moderate Risk", desc: "Partially automatable. Proactive strategy required.", cls: "mid", color: "#4fc3f7" },
  { range: "5.5 – 7.0", label: "High Risk", desc: "Significant automation pressure. 12-month action window.", cls: "", color: "#f7a44f" },
  { range: "7.0 – 8.5", label: "Very High Risk", desc: "Core deliverables already AI-replicable. Urgent repositioning needed.", cls: "", color: "#ff7a4d" },
  { range: "8.5 – 10.0", label: "Critical Risk", desc: "Near-term displacement without structural role change.", cls: "", color: "#ff4d4d" },
];

export default function SystemPage() {
  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="px-5 md:px-10" style={{ paddingTop: 120, paddingBottom: 80, background: "#0a1628", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="hero-badge" style={{ margin: "0 auto 28px", width: "fit-content" }}>
            <span className="hero-badge-dot" />
            SA-AIRS&#8482; Methodology
          </div>
          <h1 className="section-title" style={{ fontSize: "clamp(42px, 6vw, 72px)", marginBottom: 20 }}>
            The System Behind<br />Every Score
          </h1>
          <p className="section-sub" style={{ margin: "0 auto 40px", textAlign: "center" }}>
            SA-AIRS&#8482; is a weighted 5-dimension formula designed to model AI career displacement risk with explainability. Not a quiz. Not an opinion. A structured audit.
          </p>
        </div>
      </section>

      {/* FORMULA */}
      <section className="section section-mid">
        <div className="section-inner" style={{ maxWidth: 800 }}>
          <span className="section-label">The Formula</span>
          <h2 className="section-title">How The Score Is Built</h2>
          <p className="section-sub" style={{ marginBottom: 32 }}>
            The composite score is a weighted sum of 5 dimensions. Two are inverted — where higher natural scores mean lower risk. All dimensions are scored 0–10. The composite is always 0–10.
          </p>
          <div className="formula-block">
            <pre className="formula-eq">{FORMULA}</pre>
          </div>
          <div style={{ marginTop: 24, padding: "16px 20px", background: "rgba(248,250,255,0.03)", border: "1px solid rgba(248,250,255,0.06)", borderRadius: 10, fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#8898b8", lineHeight: 1.9 }}>
            <span style={{ color: "#4fc3f7" }}>// Notes on design</span><br />
            D4 and D5 are inverted because complexity and human context reduce risk.<br />
            D1 and D2 carry 50% of total weight — they are the most direct indicators of near-term automation.<br />
            Confidence level adjusts based on available data. Snapshot = Medium. Full Audit = High.
          </div>
        </div>
      </section>

      {/* RISK TIERS */}
      <section className="section section-dark">
        <div className="section-inner" style={{ maxWidth: 800 }}>
          <span className="section-label">Risk Tiers</span>
          <h2 className="section-title">Score to Tier Mapping</h2>
          <p className="section-sub" style={{ marginBottom: 40 }}>Five tiers. Clear boundaries. Specific actions per tier — not generic advice.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {TIERS.map((t) => (
              <div key={t.range} style={{ display: "grid", gridTemplateColumns: "130px 140px 1fr", gap: 20, alignItems: "center", padding: "20px 24px", background: "rgba(248,250,255,0.03)", border: "1px solid rgba(248,250,255,0.07)", borderRadius: 10 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: t.color, fontWeight: 700 }}>{t.range}</span>
                <span style={{ fontWeight: 700, color: "#f8faff", fontSize: 14 }}>{t.label}</span>
                <span style={{ color: "#8898b8", fontSize: 13, lineHeight: 1.5 }}>{t.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIMENSIONS */}
      <section className="section section-mid">
        <div className="section-inner">
          <div style={{ marginBottom: 48 }}>
            <span className="section-label">The 5 Dimensions</span>
            <h2 className="section-title">What We Actually Measure</h2>
            <p className="section-sub">Each dimension has a scoring rubric, rationale, and calibration against real-world roles. Not categories — weighted, explained variables.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {DIMS.map((d, i) => (
              <div key={d.id} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 48, paddingBottom: i < DIMS.length - 1 ? 48 : 0, borderBottom: i < DIMS.length - 1 ? "1px solid rgba(248,250,255,0.06)" : "none" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 28, fontWeight: 700, color: "#1a4fd6", lineHeight: 1 }}>{d.id}</div>
                  <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#4fc3f7", marginTop: 6, marginBottom: 12, letterSpacing: "0.08em" }}>Weight: {d.weight}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#f8faff", lineHeight: 1.3 }}>{d.name}</div>
                  <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#8898b8", marginTop: 8 }}>Score: {d.range}</div>
                </div>
                <div>
                  <p style={{ color: "#8898b8", fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>{d.desc}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                    <div style={{ padding: "12px 14px", background: "rgba(34,211,160,0.06)", border: "1px solid rgba(34,211,160,0.15)", borderRadius: 8 }}>
                      <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#22d3a0", marginBottom: 6, letterSpacing: "0.1em" }}>LOW SCORE (safer)</div>
                      <div style={{ fontSize: 12, color: "#8898b8", lineHeight: 1.5 }}>{d.low}</div>
                    </div>
                    <div style={{ padding: "12px 14px", background: "rgba(255,77,77,0.06)", border: "1px solid rgba(255,77,77,0.15)", borderRadius: 8 }}>
                      <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#ff4d4d", marginBottom: 6, letterSpacing: "0.1em" }}>HIGH SCORE (riskier)</div>
                      <div style={{ fontSize: 12, color: "#8898b8", lineHeight: 1.5 }}>{d.high}</div>
                    </div>
                  </div>
                  <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#8898b8", lineHeight: 1.9 }}>
                    <span style={{ color: "#4fc3f7" }}>// Examples</span><br />
                    {d.examples.map((ex) => <span key={ex} style={{ display: "block" }}>· {ex}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERSIONING */}
      <section className="section section-dark">
        <div className="section-inner" style={{ maxWidth: 720 }}>
          <span className="section-label">Versioning</span>
          <h2 className="section-title">SA-AIRS&#8482; v4</h2>
          <p className="section-sub" style={{ marginBottom: 32 }}>
            The formula has been updated 4 times since initial design. Each version recalibrates weights based on observed outcomes and real-world scoring data.
          </p>
          <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#8898b8", lineHeight: 2.2 }}>
            <span style={{ color: "#4fc3f7" }}>// Version history</span><br />
            v1 &mdash; Initial 3-dimension model<br />
            v2 &mdash; Added Decision Complexity (D4). Reweighted D1/D2.<br />
            v3 &mdash; Added Human Context Dependency (D5). First 10-person cohort calibration.<br />
            v4 &mdash; 31-person calibration. Confidence levels introduced. Horizon split (12/36-month).<br />
            <span style={{ color: "rgba(136,152,184,0.5)" }}>v5 &mdash; Sector-specific sub-dimensions (planned)</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm section-mid">
        <div className="section-inner" style={{ maxWidth: 600, textAlign: "center" }}>
          <h2 className="section-title">Get Scored Against This System</h2>
          <p className="section-sub" style={{ textAlign: "center", marginBottom: 32 }}>
            4 fields. 24-hour delivery. Your score, tier, and Top 3 Moves.
          </p>
          <Link href="/snapshot" className="btn-primary" style={{ display: "inline-flex" }}>
            Get My Free Snapshot &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
