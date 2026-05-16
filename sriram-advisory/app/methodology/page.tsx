import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology | Sriram Advisory",
  description:
    "How the Career Intelligence System works. Rule-based scoring, transparent logic, and honest confidence ratings.",
};

const FRAMES_OVERVIEW = [
  { num: "Frame 1", label: "Source of Value", teaser: "Where does your relevance actually come from?" },
  { num: "Frame 2", label: "Learning Path", teaser: "How do you move from where you are to where you need to be?" },
  { num: "Frame 3", label: "AI Relationship", teaser: "Are you positioning defensively or offensively?" },
  { num: "Frame 4", label: "Security Source", teaser: "What is your actual moat in a fast-changing market?" },
  { num: "Frame 5", label: "Knowledge vs Thinking", teaser: "Are you accumulating data or generating insight?" },
];

const AIRS_DIMENSIONS = [
  { name: "Task Repetition", weight: "High" },
  { name: "Automation Feasibility", weight: "High" },
  { name: "Market Saturation", weight: "Medium" },
  { name: "Decision Complexity", weight: "High" },
  { name: "Human Dependency", weight: "Medium" },
];

const LADDER = [
  { level: "L5", label: "Expert", thinking: "I define what problems matter", risk: "Highly differentiated" },
  { level: "L4", label: "Strategic", thinking: "I see patterns others miss", risk: "Low exposure" },
  { level: "L3", label: "Applied", thinking: "I solve real problems", risk: "Minimum strategic threshold", highlight: true },
  { level: "L2", label: "Functional", thinking: "I execute what's specified", risk: "Growing exposure" },
  { level: "L1", label: "Surface", thinking: "I know tools. I follow instructions.", risk: "High — AI has largely replaced this" },
];

export default function MethodologyPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 60%, #e6efff 100%)", paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,79,214,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,214,0.04) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a4fd6", display: "block", marginBottom: 28 }}>How We Score</span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, color: "#0a1628", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Methodology
          </h1>
          <p style={{ fontSize: "clamp(17px, 2.2vw, 20px)", color: "#4a5a7a", lineHeight: 1.75, maxWidth: 620 }}>
            Rule-based. Transparent. Confidence-rated.<br />
            The full scoring logic is revealed inside your report — not before.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ padding: "80px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { label: "Rule-Based", desc: "Not AI-generated. Every score is calculated from defined, documented logic." },
              { label: "Transparent", desc: "The scoring method is built on 5 dimensions. Each score includes a confidence level." },
              { label: "Confidence Rated", desc: "Every assessment comes with a confidence level. Honest uncertainty = trust." },
              { label: "Re-assessable", desc: "90-day re-assessment included. Your thinking is not static — we track evolution." },
            ].map((m) => (
              <div key={m.label} style={{ background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.15)", borderRadius: 12, padding: "24px" }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#1a4fd6", marginBottom: 8 }}>{m.label}</div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.65 }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 THINKING FRAMES */}
      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0d9268" }}>Section 1</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 16, letterSpacing: "-0.02em" }}>
            The 5 Thinking Frames
          </h2>
          <p style={{ fontSize: 16, color: "#5a6a8a", marginBottom: 48, lineHeight: 1.7, maxWidth: 680 }}>
            Each frame measures a mental model that determines whether you become easier to commoditize
            or more highly differentiated. The exact questions, scoring logic, and frame-to-risk causal chain
            are inside your report — not published here.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FRAMES_OVERVIEW.map((f) => (
              <div key={f.num} style={{
                display: "grid", gridTemplateColumns: "120px 1fr",
                gap: 24, padding: "22px 28px",
                background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.15)",
                borderRadius: 12, alignItems: "center",
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1a4fd6", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{f.num}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628" }}>{f.label}</div>
                </div>
                <div style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.6, fontStyle: "italic" }}>{f.teaser}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: "20px 24px", background: "rgba(26,79,214,0.05)", border: "1px solid rgba(26,79,214,0.2)", borderRadius: 10 }}>
            <p style={{ fontSize: 14, color: "#5a6a8a", margin: 0, lineHeight: 1.7 }}>
              The full frame scoring rubric — what each answer signals and why — is part of the Career Intelligence Report.
              It is not published publicly. Order the assessment to see exactly how you score and why.
            </p>
          </div>
        </div>
      </section>

      {/* SA-AIRS SCORING */}
      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0d9268" }}>Section 2</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 16, letterSpacing: "-0.02em" }}>
            SA-AIRS™ Scoring
          </h2>
          <p style={{ fontSize: 16, color: "#5a6a8a", marginBottom: 48, lineHeight: 1.7, maxWidth: 680 }}>
            SA-AIRS™ (Sriram Advisory AI Risk Score) measures your AI displacement risk across 5 weighted dimensions.
            Your frame profile is one input. Role context, market conditions, and decision complexity also factor in.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {AIRS_DIMENSIONS.map((d, i) => (
              <div key={d.name} style={{
                display: "grid", gridTemplateColumns: "36px 1fr auto",
                gap: 20, padding: "20px 24px",
                background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.15)",
                borderRadius: 12, alignItems: "center",
              }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "rgba(26,79,214,0.3)", lineHeight: 1 }}>{i + 1}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628" }}>{d.name}</div>
                <div style={{
                  background: d.weight === "High" ? "rgba(255,80,80,0.12)" : "rgba(255,180,0,0.1)",
                  border: `1px solid ${d.weight === "High" ? "rgba(255,80,80,0.25)" : "rgba(255,180,0,0.2)"}`,
                  borderRadius: 6, padding: "4px 10px",
                  fontSize: 13, fontWeight: 700,
                  color: d.weight === "High" ? "#dc2626" : "#fbbf24",
                  letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap",
                }}>{d.weight} Weight</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: "20px 24px", background: "rgba(26,79,214,0.05)", border: "1px solid rgba(26,79,214,0.2)", borderRadius: 10 }}>
            <p style={{ fontSize: 14, color: "#5a6a8a", margin: 0, lineHeight: 1.7 }}>
              How these dimensions are scored, weighted, and combined — and why your specific thinking patterns
              drive your score in each — is explained in your personalised report. Not here.
            </p>
          </div>
        </div>
      </section>

      {/* 10% LADDER */}
      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0d9268" }}>Section 3</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 48, letterSpacing: "-0.02em" }}>
            The 10% Ladder
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {LADDER.map((l, i) => (
              <div key={l.level} style={{
                display: "grid", gridTemplateColumns: "80px 1fr auto",
                gap: 24, padding: "24px 28px",
                background: l.highlight ? "rgba(26,79,214,0.07)" : "rgba(10,22,40,0.025)",
                border: l.highlight ? "1px solid rgba(26,79,214,0.4)" : "1px solid rgba(26,79,214,0.1)",
                borderRadius: i === 0 ? "14px 14px 0 0" : i === LADDER.length - 1 ? "0 0 14px 14px" : "0",
                borderTop: i > 0 ? "none" : undefined,
                alignItems: "center",
              }}>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: l.highlight ? "#1a4fd6" : "#8a9ab8" }}>{l.level}</div>
                  <div style={{ fontSize: 13, color: l.highlight ? "#0d9268" : "#5a6a8a", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{l.label}</div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0a1628", fontStyle: "italic" }}>&quot;{l.thinking}&quot;</div>
                <div style={{
                  fontSize: 13, fontWeight: 600, color: "#5a6a8a",
                  textAlign: "right", maxWidth: 160, lineHeight: 1.4,
                }}>{l.risk}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 16, height: 16, background: "rgba(26,79,214,0.3)", border: "1px solid rgba(26,79,214,0.5)", borderRadius: 3 }} />
            <span style={{ fontSize: 13, color: "#7a8aaa" }}>Level 3 is the minimum strategic threshold — goal of the first 90-day challenge sequence</span>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section style={{ padding: "80px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0d9268" }}>Honest Limitations</span>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 32, letterSpacing: "-0.02em" }}>
            What This Is Not
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "SA-AIRS™ scores are based on your self-reported inputs only — they reflect your perception, not an objective audit of your role.",
              "Thinking frame scores are directional, not clinical. They suggest patterns, not diagnoses.",
              "This assessment is not a substitute for professional career counselling, legal advice, financial advice, or mental health support.",
              "Career outcomes depend on many factors beyond thinking patterns: market conditions, organisational context, actual skill set, timing, and external circumstances.",
            ].map((lim, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "18px 22px", background: "rgba(255,80,80,0.05)", border: "1px solid rgba(255,80,80,0.12)", borderRadius: 10 }}>
                <span style={{ color: "#dc2626", fontWeight: 700, flexShrink: 0 }}>!</span>
                <span style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.7 }}>{lim}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link href="/disclaimer" style={{ color: "#1a4fd6", fontWeight: 600, fontSize: 14, textDecoration: "none", borderBottom: "1px solid rgba(126,179,255,0.3)", paddingBottom: 2 }}>
              Read the full legal disclaimer →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", background: "#ffffff", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#0a1628", marginBottom: 20, letterSpacing: "-0.02em" }}>
            The rest is inside your report.
          </h2>
          <p style={{ fontSize: 17, color: "#5a6a8a", marginBottom: 40, lineHeight: 1.7 }}>
            The full scoring logic, your frame-to-risk causal chain, and your 90-day challenge set
            are revealed only after your assessment. That&apos;s by design.
          </p>
          <Link href="/career-intelligence-report" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#1a4fd6", color: "#fff", fontWeight: 700,
            fontSize: 16, padding: "15px 36px", borderRadius: 10,
            textDecoration: "none", border: "1px solid #3b6ef0",
          }}>
            Get Your Assessment →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
