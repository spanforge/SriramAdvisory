import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sriram Advisory — Career Intelligence System",
  description:
    "Your AI risk is not just about your job. It is about the way you think about your job. Career Intelligence System for Indian professionals.",
};

const FRAMES = [
  {
    num: "01",
    label: "Source of Value",
    current: "Tools → Relevance",
    shift: "Problems → Relevance",
    why: "Tools become obsolete in 6–18 months. Problems require judgment that compounds.",
    cost: "Your work becomes easier to commoditize.",
  },
  {
    num: "02",
    label: "Learning Path",
    current: "Master First, Then Move",
    shift: "Move First, Learn by Directing",
    why: "Waiting for mastery creates paralysis. Level 3→4 happens through practice, not courses.",
    cost: "You stay in tutorial hell. Others build real things.",
  },
  {
    num: "03",
    label: "AI Relationship",
    current: "AI is a Threat",
    shift: "AI is a Layer I Move Above",
    why: "Scarcity mindset = defensive. Layers mindset = offensive.",
    cost: "You're protecting yesterday. Others are building tomorrow.",
  },
  {
    num: "04",
    label: "Security Source",
    current: "Experience Secures Me",
    shift: "Adaptability Secures Me",
    why: "Static resume = expiring asset. Adaptive capacity = compounding asset.",
    cost: "Your past becomes irrelevant faster than you realise.",
  },
  {
    num: "05",
    label: "Knowledge vs Thinking",
    current: "More Knowledge",
    shift: "Different Thinking",
    why: "More knowledge + same mental model = same outputs. Different thinking = exponential outputs.",
    cost: "You accumulate data. You don't generate insight.",
  },
];

const WHAT_YOU_RECEIVE = [
  { label: "Career Thinking Score", desc: "5 thinking frames scored 1–10 with confidence levels. Where you actually operate — not where you assume." },
  { label: "SA-AIRS™ Composite Score", desc: "Your AI risk number across 5 dimensions: Task Repetition, Automation Feasibility, Market Saturation, Decision Complexity, Human Dependency." },
  { label: "The Bridge", desc: "The causal data chain — exactly how your thinking frame scores produce your SA-AIRS dimension scores. Traceable, not interpreted." },
  { label: "Ladder Position", desc: "Where your scores place you on L1–L5. A data position on the distribution — not a target." },
  { label: "Dimension Benchmarks", desc: "How each SA-AIRS™ dimension score compares to role and industry averages. Your number in context." },
  { label: "90-Day Re-Score", desc: "Track how your position shifts over time. Re-score your thinking frames at 90 days and get an updated SA-AIRS." },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Complete the Questionnaire", desc: "15-minute input form. Five thinking frames. Role-specific questions." },
  { step: "02", title: "Receive Your Score Report", desc: "Full SA-AIRS™ diagnostic delivered within 24 hours." },
  { step: "03", title: "Read the Data", desc: "Your scores, benchmarks, and the causal chain — clearly presented. No interpretation required." },
  { step: "04", title: "Re-Score at 90 Days", desc: "See what shifted in your SA-AIRS position. Track your evolution over time." },
];

const PROGRAMS = [
  {
    tier: "Individual",
    name: "SA-AIRS™ Score Report",
    price: "₹499",
    desc: "5-dimension score + confidence levels + The Bridge (causal chain) + Ladder position + Dimension benchmarks. Delivered within 24 hours.",
    href: "/sa-airs-score-report",
    accent: "#1a4fd6",
    cta: "Get Your Score →",
  },
  {
    tier: "Individual Pro",
    name: "SA-AIRS™ Score Report + Quarterly Re-Score",
    price: "₹999",
    desc: "Full score report + industry benchmarks + role-level market data + two quarterly re-scores through 2026.",
    href: "/sa-airs-score-report",
    accent: "#0d9268",
    cta: "Get Pro Report →",
  },
  {
    tier: "Enterprise — Coming 2026",
    name: "Workforce Analytics",
    price: "On request",
    desc: "SA-AIRS™ scoring at team and function level. Understand AI readiness across your organisation. India-first data.",
    href: "/contact",
    accent: "#a78bfa",
    cta: "Enquire →",
  },
];

export default function HomePage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 50%, #e6efff 100%)",
        paddingTop: 120, paddingBottom: 100, position: "relative", overflow: "hidden",
      }}>
        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(26,79,214,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,214,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }} />
        {/* Glow */}
        <div style={{
          position: "absolute", top: -120, right: "5%",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,79,214,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(26,79,214,0.07)", border: "1px solid rgba(26,79,214,0.35)",
            borderRadius: 4, padding: "5px 14px", marginBottom: 36,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0d9268", display: "inline-block" }} />
            <span style={{
            fontSize: 13, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#1a4fd6",
            }}>AI Career Intelligence System · India 2026</span>
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 5.5vw, 72px)", fontWeight: 800, color: "#0a1628",
            lineHeight: 1.1, marginBottom: 36, letterSpacing: "-0.02em", maxWidth: 820,
          }}>
            Your AI risk is not just about your job.{" "}
            <span style={{
              background: "linear-gradient(90deg, #1a4fd6, #22d3a0)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              display: "block",
            }}>
              It is about the way you think about your job.
            </span>
          </h1>

          <p style={{
            fontSize: "clamp(17px, 2.2vw, 22px)", color: "#4a5a7a",
            lineHeight: 1.7, marginBottom: 48, maxWidth: 640,
          }}>
            We don&apos;t guess your future. We model it.<br />
            The data is yours to interpret.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link href="/sa-airs-score-report" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#1a4fd6", color: "#fff", fontWeight: 700,
              fontSize: 16, padding: "15px 36px", borderRadius: 10,
              textDecoration: "none", border: "1px solid #3b6ef0",
              letterSpacing: "0.02em",
            }}>
              Get Your Assessment →
            </Link>
            <Link href="/methodology" style={{
              display: "inline-flex", alignItems: "center",
              background: "transparent", color: "#1a4fd6", fontWeight: 600,
              fontSize: 15, padding: "15px 28px", borderRadius: 10,
              textDecoration: "none", border: "1px solid rgba(126,179,255,0.25)",
            }}>
              How We Score It
            </Link>
          </div>

          {/* Stat strip */}
          <div style={{
            marginTop: 72, paddingTop: 40,
            borderTop: "1px solid rgba(26,79,214,0.2)",
            display: "flex", flexWrap: "wrap", gap: 40,
          }}>
            {[
              { num: "5", label: "Thinking Frames Assessed" },
              { num: "5", label: "SA-AIRS™ Risk Dimensions" },
              { num: "₹299", label: "Starting Price" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#1a4fd6", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 5, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE REFRAME */}
      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>The Reframe</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 20, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            It is not{" "}
            <span style={{ fontStyle: "italic", fontWeight: 700, color: "#dc2626", letterSpacing: "-0.01em" }}>AI vs Jobs</span>.
          </h2>
          <div className="reframe-grid">
            <div style={{
              background: "rgba(220,50,50,0.05)", border: "1px solid rgba(255,80,80,0.2)",
              borderRadius: 12, padding: "24px 28px",
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#dc2626", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>Old Frame</div>
              <p style={{ fontSize: 20, fontWeight: 700, color: "#dc2626", lineHeight: 1.3, fontStyle: "italic", textDecoration: "line-through" }}>AI vs Jobs</p>
              <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 8, lineHeight: 1.7 }}>Thinking about whether AI will replace roles</p>
            </div>
            <div style={{ fontSize: 28, color: "#1a4fd6", fontWeight: 800 }}>→</div>
            <div style={{
              background: "rgba(26,79,214,0.06)", border: "1px solid rgba(26,79,214,0.3)",
              borderRadius: 12, padding: "24px 28px",
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1a4fd6", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>New Frame</div>
              <p style={{ fontSize: 20, fontWeight: 700, color: "#0a1628", lineHeight: 1.3 }}>People who use AI vs People replaced by people who use AI</p>
              <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 8, lineHeight: 1.7 }}>The real question: are you becoming someone who uses AI well?</p>
            </div>
          </div>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#5a6a8a", lineHeight: 1.75 }}>
            Tech creates winners and losers faster than education systems can adapt.
            The difference isn&apos;t tools — it&apos;s thinking.
            <strong style={{ color: "#0a1628" }}> You need to think differently about how you work.</strong>
          </p>
        </div>
      </section>

      {/* 5 THINKING FRAMES */}
      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>The Foundation</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 16, letterSpacing: "-0.02em" }}>
              The 5 Thinking Frames
            </h2>
            <p style={{ fontSize: 17, color: "#5a6a8a", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              These are the mental models that determine whether you become easier to commoditize
              or more highly differentiated. Most people don&apos;t realise which frame they&apos;re in.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {FRAMES.map((f) => (
              <div key={f.num} style={{
                background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.18)",
                borderRadius: 14, padding: "28px 32px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#1a4fd6", fontVariantNumeric: "tabular-nums" }}>{f.num}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#dc2626", letterSpacing: "0.08em", textTransform: "uppercase" }}>{f.label}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 20, alignItems: "start" }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#6a7a9a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Current</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#5a6a8a", textDecoration: "line-through" }}>{f.current}</div>
                  </div>
                  <div style={{ fontSize: 18, color: "#1a4fd6", fontWeight: 800, paddingTop: 18 }}>→</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#0d9268", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Shift To</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628" }}>{f.shift}</div>
                  </div>
                </div>
                <div style={{ marginTop: 14, fontSize: 15, color: "#5a6a8a", lineHeight: 1.75 }}>{f.why}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/methodology" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "#1a4fd6", fontWeight: 600, fontSize: 14,
              textDecoration: "none", borderBottom: "1px solid rgba(126,179,255,0.3)",
              paddingBottom: 2,
            }}>
              Full methodology breakdown →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW THE SYSTEM WORKS */}
      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>The Process</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#0a1628", marginTop: 16, letterSpacing: "-0.02em" }}>
              How the System Works
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} style={{
                background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.15)",
                borderRadius: 14, padding: "32px 28px",
              }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: "rgba(26,79,214,0.4)", lineHeight: 1, marginBottom: 16 }}>{step.step}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0a1628", marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.75 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>The Deliverable</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#0a1628", marginTop: 16, letterSpacing: "-0.02em" }}>
              What You Receive
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {WHAT_YOU_RECEIVE.map((item, i) => (
              <div key={item.label} style={{
                display: "flex", gap: 16,
                background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.15)",
                borderRadius: 12, padding: "24px 24px",
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0, marginTop: 2,
                  background: "rgba(26,79,214,0.06)", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: "#1a4fd6",
                }}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.75 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY SNAPSHOT */}
      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>Methodology</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 40, letterSpacing: "-0.02em" }}>
            Transparent scoring. No black boxes.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 40 }}>
            {[
              { label: "Rule-Based Scoring", desc: "Not AI-generated. Every score calculated from defined, transparent logic." },
              { label: "Confidence Ratings", desc: "Every assessment includes a confidence level — we are honest about uncertainty." },
              { label: "5 SA-AIRS™ Dimensions", desc: "Task Repetition, Automation Feasibility, Market Saturation, Decision Complexity, Human Dependency." },
              { label: "90-Day Re-Assessment", desc: "Track evolution, not just a snapshot. Your thinking is not static." },
            ].map((m) => (
              <div key={m.label} style={{
                background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.15)",
                borderRadius: 12, padding: "24px",
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1a4fd6", marginBottom: 8 }}>{m.label}</div>
                <div style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.75 }}>{m.desc}</div>
              </div>
            ))}
          </div>
          <Link href="/methodology" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "#1a4fd6", fontWeight: 600, fontSize: 14,
            textDecoration: "none", borderBottom: "1px solid rgba(126,179,255,0.3)", paddingBottom: 2,
          }}>
            Read the full methodology →
          </Link>
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>The Analyst</span>
          <div style={{ marginTop: 36, display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>
            <img src="/sriram.png" alt="Sriram Srinivasan"
              style={{ width: 96, height: 96, borderRadius: "50%", objectFit: "cover", border: "2px solid #1a4fd6", flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 260 }}>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0a1628", marginBottom: 6 }}>Sriram Srinivasan</h2>
              <div style={{ fontSize: 14, color: "#5a6a8a", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>Founder, Sriram Advisory</div>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.8, marginBottom: 20 }}>
                Sriram Advisory exists because most career commentary in the AI era is either panic or platitude.
                Neither is grounded in data. What professionals need is a precise, honest read of what is actually
                changing — clearly enough to make their own call.
              </p>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.8 }}>
                <strong style={{ color: "#0a1628" }}>Depth beats tools. Direction beats degrees.</strong>
              </p>
              <Link href="/about" style={{
                display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24,
                color: "#1a4fd6", fontWeight: 600, fontSize: 14,
                textDecoration: "none", borderBottom: "1px solid rgba(126,179,255,0.3)", paddingBottom: 2,
              }}>
                About Sriram →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SNAPSHOT */}
      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>Common Questions</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 800, color: "#0a1628", marginTop: 16, letterSpacing: "-0.02em" }}>
              Frequently Asked
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "Is this a course or certification?", a: "No. This is a diagnostic and thinking framework system. You don't get a certificate. You get clarity about your actual thinking patterns and risk profile — with a 90-day re-assessment to track evolution." },
              { q: "How is the SA-AIRS™ score calculated?", a: "Rule-based, not AI-generated. Every dimension (Task Repetition, Automation Feasibility, Market Saturation, Decision Complexity, Human Dependency) is scored from your inputs with transparent logic. All scores include a confidence level." },
              { q: "What if I disagree with my score?", a: "Good. Disagreement means you're thinking. Your score is data-derived from your inputs — not a verdict handed down by someone. If your inputs change, your score changes. That's the point of the 90-day re-score." },
              { q: "What is the refund policy?", a: "If you don't get at least one actionable insight from your report, you get a full refund. No forms. No questions." },
            ].map(({ q, a }) => (
              <div key={q} style={{
                background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.15)",
                borderRadius: 12, padding: "24px 28px",
              }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 10 }}>{q}</div>
                <div style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.8 }}>{a}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/faq" style={{
              color: "#1a4fd6", fontWeight: 600, fontSize: 14,
              textDecoration: "none", borderBottom: "1px solid rgba(126,179,255,0.3)", paddingBottom: 2,
            }}>
              All questions answered →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{
        padding: "120px 24px",
        background: "linear-gradient(160deg, #eef3ff 0%, #e6efff 50%, #dce8ff 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", bottom: -100, left: "50%", transform: "translateX(-50%)",
          width: 700, height: 400,
          background: "radial-gradient(ellipse, rgba(26,79,214,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, color: "#0a1628",
            marginBottom: 32, lineHeight: 1.15, letterSpacing: "-0.02em",
          }}>
            Know exactly where you stand.{" "}
            <span style={{
              background: "linear-gradient(90deg, #1a4fd6, #22d3a0)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              display: "block",
            }}>
              The data makes it clear.
            </span>
          </h2>
          <p style={{ fontSize: 18, color: "#5a6a8a", lineHeight: 1.7, marginBottom: 48 }}>
            SA-AIRS™ Score Report. India&apos;s first analytical scoring system for AI career risk.
            Starting at ₹299.
          </p>
          <Link href="/career-intelligence-report" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "#1a4fd6", color: "#fff", fontWeight: 700,
            fontSize: 18, padding: "18px 48px", borderRadius: 12,
            textDecoration: "none", border: "1px solid #3b6ef0",
            letterSpacing: "0.02em",
          }}>
            Get Your Score →
          </Link>
          <p style={{ marginTop: 24, fontSize: 14, color: "#5a6a8a" }}>
            Educational and analytical commentary only · Not career counselling or employment advice ·{" "}
            <Link href="/disclaimer" style={{ color: "#7a8aaa", textDecoration: "underline" }}>Disclaimer</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
