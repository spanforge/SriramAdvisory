import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeehiivSubscribeForm from "@/components/BeehiivSubscribeForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sriram Advisory | SA-AIRS Career Decision Systems",
  description:
    "Sriram Advisory helps Indian IT professionals make clearer career decisions under AI-driven uncertainty using evidence-based frameworks starting with SA-AIRS.",
};

const SA_AIRS_STEPS = [
  {
    title: "Understand",
    body: "Separate the role from the job title. Look at tasks, market pressure, judgment, and visible proof.",
  },
  {
    title: "Measure",
    body: "Use SA-AIRS to read where work is exposed, where it is defensible, and where the signal is weak.",
  },
  {
    title: "Improve",
    body: "Turn the diagnosis into role-specific moves: repositioning, proof-building, and better career bets.",
  },
  {
    title: "Master",
    body: "Keep updating as the market changes instead of relying on a static career plan.",
  },
];

const FEATURED_ASSETS = [
  {
    label: "Start Here",
    title: "SA-AIRS Career Risk Audit",
    body: "A 48-hour role diagnosis across five dimensions, with a risk horizon and practical next moves.",
    href: "/am-i-future-proof",
    cta: "Start with SA-AIRS",
  },
  {
    label: "Framework",
    title: "SA-AIRS Decision System",
    body: "The public overview of the role-exposure framework behind the audit, reports, and advisory work.",
    href: "/frameworks/sa-airs",
    cta: "See the framework",
  },
  {
    label: "Trust Builder",
    title: "Our Thinking",
    body: "How Sriram Advisory develops, validates, and refines frameworks before turning them into products.",
    href: "/our-thinking",
    cta: "Read the standard",
  },
];

const TRUST_SIGNALS = [
  "Rule-based interpretation, not black-box motivation.",
  "Built for Indian IT and knowledge-work careers, with global AI context.",
  "Frameworks must explain something better than common career advice.",
  "Advanced products are added only after real usage and feedback justify them.",
];

const LATEST_INSIGHTS = [
  {
    date: "July 2026",
    title: "The Seniority Trap: Why Mid-Career Professionals Are Vulnerable",
    href: "/insights/seniority-trap-mid-career-ai-risk",
  },
  {
    date: "June 2026",
    title: "Why Expertise Becomes a Trap",
    href: "/products/why-expertise-becomes-a-trap",
  },
  {
    date: "June 2026",
    title: "AI Risk Rankings India 2026",
    href: "/products/ai-risk-rankings-india-2026",
  },
];

export default function HomePage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 56%, #edf7f2 100%)",
          padding: "112px 24px 92px",
          borderBottom: "1px solid rgba(26,79,214,0.12)",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(280px, 0.75fr)", gap: 34, alignItems: "center" }} className="home-two-col">
          <div>
            <span style={{ display: "inline-flex", fontSize: 12, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268", marginBottom: 26 }}>
              Problem-first career intelligence
            </span>
            <h1 style={{ fontSize: "clamp(42px, 6vw, 78px)", lineHeight: 1.04, fontWeight: 900, letterSpacing: "-0.01em", color: "#0a1628", margin: "0 0 24px", maxWidth: 880 }}>
              Make clearer career decisions when AI is rewriting the rules.
            </h1>
            <p style={{ fontSize: "clamp(18px, 2.2vw, 23px)", lineHeight: 1.65, color: "#4a5a7a", margin: "0 0 36px", maxWidth: 760 }}>
              Start with SA-AIRS(TM), a practical Decision System that helps you see which parts of your role are exposed, which are defensible, and what to do next.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link href="/am-i-future-proof" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "15px 28px", borderRadius: 8, background: "#1a4fd6", color: "#ffffff", textDecoration: "none", fontWeight: 900, border: "1px solid #3b6ef0" }}>
                Start with SA-AIRS - Rs 499
              </Link>
              <Link href="/frameworks" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "15px 28px", borderRadius: 8, color: "#1a4fd6", textDecoration: "none", fontWeight: 900, border: "1px solid rgba(26,79,214,0.22)", background: "#ffffff" }}>
                Explore All Frameworks
              </Link>
            </div>
          </div>

          <div style={{ border: "1px solid rgba(26,79,214,0.16)", borderRadius: 8, background: "#ffffff", padding: 24, boxShadow: "0 18px 44px rgba(10,22,40,0.08)" }}>
            <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a4fd6", marginBottom: 18 }}>
              The question visitors arrive with
            </div>
            {["Is my role safe?", "Which parts of my work are exposed?", "What should I do next?"].map((question) => (
              <div key={question} style={{ borderTop: "1px solid #e4ebf5", padding: "16px 0", fontSize: 19, lineHeight: 1.35, color: "#0a1628", fontWeight: 850 }}>
                {question}
              </div>
            ))}
            <p style={{ margin: "12px 0 0", color: "#5a6a8a", fontSize: 15, lineHeight: 1.75 }}>
              The framework is the mechanism. The starting point is the career decision.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              How SA-AIRS Works
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              Understand, measure, improve, then keep updating.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              SA-AIRS is designed to move a professional from vague anxiety to a clearer decision about risk, defensibility, and next moves.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 16 }}>
            {SA_AIRS_STEPS.map((step, index) => (
              <article key={step.title} style={{ border: "1px solid #dbe5f5", borderRadius: 8, padding: "24px 22px", background: "#f8fbff" }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: "#1a4fd6", color: "#ffffff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, marginBottom: 18 }}>
                  {index + 1}
                </div>
                <h3 style={{ fontSize: 22, color: "#0a1628", margin: "0 0 10px" }}>{step.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: 0 }}>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Featured Assets
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              Start with the decision system, then choose the output you need.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 18 }}>
            {FEATURED_ASSETS.map((asset) => (
              <Link key={asset.title} href={asset.href} style={{ textDecoration: "none" }}>
                <article style={{ height: "100%", border: "1px solid rgba(26,79,214,0.14)", borderRadius: 8, padding: "26px 24px", background: "#ffffff" }}>
                  <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0d9268", marginBottom: 12 }}>
                    {asset.label}
                  </div>
                  <h3 style={{ fontSize: 24, lineHeight: 1.18, color: "#0a1628", margin: "0 0 12px" }}>{asset.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: "0 0 18px" }}>{asset.body}</p>
                  <span style={{ color: "#1a4fd6", fontSize: 14, fontWeight: 900 }}>{asset.cta} {"->"}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#0a1628", color: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1fr)", gap: 36, alignItems: "start" }} className="home-two-col">
          <div>
            <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#93b4ff" }}>
              What Professionals Should Expect
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#ffffff" }}>
              Clearer judgment, not certainty theater.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#dbe7ff", margin: 0 }}>
              Sriram Advisory treats frameworks as living decision systems. They should improve how a professional reads evidence and chooses next moves.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {TRUST_SIGNALS.map((signal) => (
              <div key={signal} style={{ border: "1px solid rgba(255,255,255,0.14)", borderRadius: 8, padding: "18px 20px", background: "rgba(255,255,255,0.06)", color: "#f8faff", fontSize: 16, lineHeight: 1.65, fontWeight: 750 }}>
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Latest Insights
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              Research mapped to career decisions.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {LATEST_INSIGHTS.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <article style={{ height: "100%", border: "1px solid #dbe5f5", borderRadius: 8, padding: "24px 22px", background: "#f8fbff" }}>
                  <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0d9268", marginBottom: 10 }}>{item.date}</div>
                  <h3 style={{ fontSize: 21, color: "#0a1628", lineHeight: 1.25, margin: "0 0 16px" }}>{item.title}</h3>
                  <span style={{ color: "#1a4fd6", fontSize: 14, fontWeight: 900 }}>Open {"->"}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" style={{ padding: "88px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
            Newsletter
          </span>
          <h2 style={{ fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.14, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
            Get future-of-work intelligence in your inbox.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5a6a8a", maxWidth: 680, margin: "0 auto 28px" }}>
            Clear, practical research on careers, skills, AI, automation, and the changing world of work.
          </p>
          <BeehiivSubscribeForm />
        </div>
      </section>

      <section style={{ padding: "96px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(32px, 4.8vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#0a1628", margin: "0 0 18px" }}>
            Start with the role question before the market answers it for you.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "#5a6a8a", margin: "0 0 32px" }}>
            SA-AIRS gives you a structured first read on exposure, defensibility, and practical next moves.
          </p>
          <Link href="/am-i-future-proof" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "15px 30px", borderRadius: 8, background: "#1a4fd6", color: "#ffffff", textDecoration: "none", fontWeight: 900, border: "1px solid #3b6ef0" }}>
            Start with SA-AIRS
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
