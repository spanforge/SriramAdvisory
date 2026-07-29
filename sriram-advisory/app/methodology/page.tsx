import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Method | Sriram Advisory",
  description:
    "How Sriram Advisory studies workforce change and turns research into practical intelligence for professionals, teams, and organizations.",
};

const METHOD_PRINCIPLES = [
  {
    title: "Work is studied in context",
    body: "Roles are interpreted through the surrounding system: industry pressure, team structure, technology adoption, delivery model, incentives, and customer expectations.",
  },
  {
    title: "Signals matter more than hype",
    body: "We separate durable workforce signals from short-lived technology excitement, social media panic, and broad claims that are not useful for decisions.",
  },
  {
    title: "Judgment is part of the analysis",
    body: "Career and workforce risk cannot be reduced to a single trend. We look at where human judgment, accountability, trust, and context still matter.",
  },
  {
    title: "Outputs must be usable",
    body: "Research is translated into reports, briefings, guides, and advisory notes that help people decide what to learn, monitor, change, or question next.",
  },
];

const RESEARCH_INPUTS = [
  "Role and task patterns",
  "Hiring and skill-demand signals",
  "AI and automation capability shifts",
  "Indian IT, GCC, and global delivery trends",
  "Management and organizational design changes",
  "Professional positioning and employability patterns",
];

const QUESTION_SELECTION = [
  "A workforce shift is visible across multiple roles, not only one isolated anecdote.",
  "The question affects career durability, employability, management, or organizational capability.",
  "The topic is being discussed loudly, but professionals lack a useful decision frame.",
  "There is enough public evidence to explain the issue without relying on private or unverifiable data.",
];

const RESEARCH_CYCLE = [
  {
    title: "Observe signals",
    body: "Track shifts in role language, hiring demand, technology capability, delivery models, organization design, and professional anxiety.",
  },
  {
    title: "Form hypotheses",
    body: "Convert repeated patterns into testable questions about where work is being compressed, upgraded, redistributed, or revalued.",
  },
  {
    title: "Compare across roles",
    body: "Check whether the pattern appears only in one occupation or across adjacent roles, industries, seniority levels, and team structures.",
  },
  {
    title: "Publish practical intelligence",
    body: "Turn the analysis into reports, briefings, guides, and advisory notes written for decisions rather than academic completeness.",
  },
  {
    title: "Revise as evidence changes",
    body: "Update the point of view when new signals show that a role, market, or capability shift is moving differently than expected.",
  },
];

const DATA_USED = [
  "Public hiring signals and role descriptions",
  "Observable changes in tools, workflows, and delivery expectations",
  "Published industry commentary, market signals, and technology capability shifts",
  "Patterns from professional positioning, resumes, LinkedIn profiles, and career questions",
  "Comparative analysis across Indian IT, GCCs, business functions, and global work models",
];

const DATA_NOT_USED = [
  "Private employer data without permission",
  "Individual career data published as identifiable examples",
  "Black-box claims that cannot be explained in plain language",
  "One-factor predictions that reduce workforce change to AI alone",
];

const FRAMEWORK_EVOLUTION = [
  "Frameworks begin as working models used to organize repeated observations.",
  "They are refined when new reports reveal stronger or weaker explanatory power.",
  "Public pages describe the purpose, examples, and limits of each framework.",
  "Detailed rubrics remain proprietary so they can be applied responsibly in reports, assessments, and advisory work.",
];

const CONFIDENCE_LEVELS = [
  {
    level: "Observed Signal",
    body: "A pattern is visible in public language, tools, role expectations, or market behavior, but may still be early.",
  },
  {
    level: "Developing Pattern",
    body: "The signal appears across multiple sources, roles, or industries and is strong enough for practical interpretation.",
  },
  {
    level: "Established Shift",
    body: "The pattern is durable enough to shape reports, frameworks, guides, and advisory conversations.",
  },
];

const REVIEW_PRACTICE = [
  "Flagship reports are revisited when market signals, tool capability, or role language materially changes.",
  "Framework pages are updated when repeated research makes a concept clearer or reveals a limitation.",
  "Briefings and essays preserve a timestamped point of view rather than pretending every conclusion is permanent.",
  "Older conclusions may be revised publicly when the evidence changes.",
];

const EXPECTATIONS = [
  "Research is written to support better judgment, not to promise certainty.",
  "Reports and guides explain what is changing, why it matters, and what practical options are available.",
  "Assessments and rankings are analytical views based on available signals, not guarantees or professional advice.",
  "The research is updated as markets, technologies, and organizational behavior change.",
];

export default function MethodologyPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 58%, #edf7f2 100%)",
          paddingTop: 112,
          paddingBottom: 88,
          borderBottom: "1px solid rgba(26,79,214,0.12)",
        }}
      >
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6", display: "block", marginBottom: 26 }}>
            Research Method
          </span>
          <h1 style={{ fontSize: "clamp(38px, 5.4vw, 68px)", fontWeight: 900, color: "#0a1628", lineHeight: 1.08, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
            How we study work before turning it into advice.
          </h1>
          <p style={{ fontSize: "clamp(17px, 2.1vw, 21px)", color: "#4a5a7a", lineHeight: 1.75, maxWidth: 760, margin: 0 }}>
            Sriram Advisory uses structured research, professional judgment, and practical interpretation to understand how careers, skills, teams, and organizations are changing.
          </p>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              Principles
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0 0" }}>
              The method is designed to create clarity, not false certainty.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {METHOD_PRINCIPLES.map((principle) => (
              <article key={principle.title} style={{ background: "#f8fbff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "24px 22px" }}>
                <h3 style={{ fontSize: 20, color: "#0a1628", lineHeight: 1.25, margin: "0 0 10px" }}>{principle.title}</h3>
                <p style={{ fontSize: 15, color: "#52627e", lineHeight: 1.75, margin: 0 }}>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)", gap: 34 }} className="home-two-col">
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Research Inputs
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0" }}>
              We look across the work system, not only at tools.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              AI matters, but it is one part of a wider set of workforce shifts. Useful research has to connect technology change with roles, economics, organizations, and human judgment.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {RESEARCH_INPUTS.map((input) => (
              <div key={input} style={{ background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "16px 18px", color: "#304159", fontSize: 15, fontWeight: 800 }}>
                {input}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)", gap: 34 }} className="home-two-col">
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              Question Selection
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0" }}>
              How research questions are chosen.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              Not every trend deserves a report. We prioritize questions where professionals or organizations need a clearer map for decisions.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {QUESTION_SELECTION.map((item) => (
              <div key={item} style={{ background: "#f8fbff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "16px 18px", color: "#304159", fontSize: 15, lineHeight: 1.7, fontWeight: 750 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              Research Cycle
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0" }}>
              Ideas move from signals to hypotheses to useful public work.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              The method is iterative. Sriram Advisory does not treat a first conclusion as final when the market is still changing.
            </p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {RESEARCH_CYCLE.map((step, index) => (
              <article key={step.title} style={{ display: "grid", gridTemplateColumns: "72px minmax(0, 1fr)", gap: 18, alignItems: "start", border: "1px solid #dbe5f5", borderRadius: 8, padding: "20px", background: "#ffffff" }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: "#1a4fd6", color: "#ffffff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900 }}>
                  {index + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: 21, color: "#0a1628", margin: "0 0 8px" }}>{step.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: 0 }}>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 24 }} className="home-two-col">
          <div style={{ background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "28px 26px" }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              What We Use
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1.18, color: "#0a1628", margin: "14px 0 20px" }}>
              Evidence from the visible work system.
            </h2>
            <div style={{ display: "grid", gap: 12 }}>
              {DATA_USED.map((item) => (
                <div key={item} style={{ fontSize: 15, lineHeight: 1.7, color: "#52627e", borderBottom: "1px solid #edf2f7", paddingBottom: 12 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#0a1628", borderRadius: 8, padding: "28px 26px", color: "#ffffff" }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#93b4ff" }}>
              What We Avoid
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1.18, color: "#ffffff", margin: "14px 0 20px" }}>
              Boundaries protect trust.
            </h2>
            <div style={{ display: "grid", gap: 12 }}>
              {DATA_NOT_USED.map((item) => (
                <div key={item} style={{ fontSize: 15, lineHeight: 1.7, color: "#dbe7ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 12 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              Confidence Levels
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0" }}>
              We separate early signals from stronger conclusions.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              Workforce research should show how strongly a conclusion is held. A signal, a pattern, and an established shift should not be written with the same level of certainty.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {CONFIDENCE_LEVELS.map((item) => (
              <article key={item.level} style={{ border: "1px solid #dbe5f5", borderRadius: 8, padding: "24px 22px", background: "#f8fbff" }}>
                <h3 style={{ fontSize: 21, color: "#0a1628", margin: "0 0 10px" }}>{item.level}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: 0 }}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
            Interpretation
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0 18px" }}>
            How we interpret workforce signals.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "#4a5a7a", margin: "0 0 18px" }}>
            Sriram Advisory uses structured research to connect workforce signals with practical decisions. We look at role change, skill demand, technology adoption, organizational pressure, and the kinds of human judgment that remain valuable.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "#4a5a7a", margin: 0 }}>
            The goal is not to publish a formula. The goal is to help professionals and teams understand what is changing, why it matters, and what to do next.
          </p>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
            Framework Evolution
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0 18px" }}>
            Frameworks are public concepts, not open templates.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "#4a5a7a", margin: "0 0 24px" }}>
            SA-AIRS(TM), Replaceability Curve(TM), AI Leverage Ladder(TM), and the Career Positioning Audit are used to structure analysis and make findings easier to explain. The public site explains what each framework is for while protecting the deeper rubrics used in applied work.
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            {FRAMEWORK_EVOLUTION.map((item) => (
              <div key={item} style={{ background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "16px 18px", fontSize: 15, lineHeight: 1.75, color: "#52627e" }}>
                {item}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 26 }}>
            <Link href="/about/our-thinking" style={{ color: "#1a4fd6", fontSize: 15, fontWeight: 900, textDecoration: "none" }}>
              View public framework pages {"->"}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
            Review Cycle
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0 18px" }}>
            Research is updated when the work system changes.
          </h2>
          <div style={{ display: "grid", gap: 12 }}>
            {REVIEW_PRACTICE.map((item) => (
              <div key={item} style={{ background: "#f8fbff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "16px 18px", fontSize: 15, lineHeight: 1.75, color: "#52627e" }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#0a1628", color: "#ffffff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#93b4ff" }}>
            What To Expect
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#ffffff", margin: "16px 0 28px" }}>
            Clear research, practical guidance, and honest limits.
          </h2>
          <div style={{ display: "grid", gap: 14 }}>
            {EXPECTATIONS.map((item) => (
              <div key={item} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "0 0 14px", fontSize: 16, lineHeight: 1.75, color: "#dbe3ea" }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "0 0 18px" }}>
            The useful output is not the formula. It is the judgment.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: "0 0 32px" }}>
            Start with the research library for public intelligence, or use a career guide when you need a practical next step for your role.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link href="/reports" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "15px 28px", borderRadius: 8, background: "#1a4fd6", color: "#ffffff", textDecoration: "none", fontWeight: 800, border: "1px solid #3b6ef0" }}>
              Read Research
            </Link>
            <Link href="/guides" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "15px 28px", borderRadius: 8, background: "#ffffff", color: "#1a4fd6", textDecoration: "none", fontWeight: 800, border: "1px solid rgba(26,79,214,0.22)" }}>
              Career Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
