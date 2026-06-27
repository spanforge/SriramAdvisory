import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sriram Advisory | Workforce Intelligence for the AI Era",
  description:
    "Sriram Advisory builds workforce intelligence for professionals navigating AI-driven career change.",
};

const ADVISORY_FOCUS = [
  { value: "Career Risk", label: "Role exposure, market pressure, and next-position decisions" },
  { value: "Role Durability", label: "Structured views of how work changes under automation pressure" },
  { value: "Market Signal", label: "Reports and role intelligence for clearer judgment" },
  { value: "Positioning", label: "Resume, LinkedIn, and market-facing narrative clarity" },
];

const DECISIONS = [
  {
    title: "What is changing around my role?",
    body: "For professionals who need a grounded read on automation exposure, market saturation, and role durability before making their next career move.",
  },
  {
    title: "How should I reposition?",
    body: "For people who need stronger language, profile signal, and practical next steps instead of generic career advice.",
  },
  {
    title: "Which skills increase leverage?",
    body: "For professionals who want to move toward work that compounds judgment, context, and ownership instead of repeatable execution.",
  },
  {
    title: "What should we do next?",
    body: "For people who need a sharper framework before spending time, energy, or money on the wrong career move.",
  },
];

const ADVISORY_SYSTEM = [
  {
    step: "01",
    title: "Diagnose the situation",
    body: "Use assessments, scorecards, and structured frameworks to make role exposure and career pressure visible.",
  },
  {
    step: "02",
    title: "Interpret the signal",
    body: "Turn market pressure, role exposure, and durability signals into a clear decision frame.",
  },
  {
    step: "03",
    title: "Choose the next move",
    body: "Move into the right product, guide, report, audit, or advisory path based on the decision the client is actually trying to make.",
  },
];

const ENGAGEMENT_PATHS = [
  {
    title: "Career Assessment",
    body: "Rs 499 - Am I Future-Proof?",
    href: "/am-i-future-proof",
    cta: "Start assessment",
  },
  {
    title: "Role Guides",
    body: "Rs 499 - QA, BA, Java, HR, and other role-specific career paths.",
    href: "/guides",
    cta: "Browse guides",
  },
  {
    title: "Personal Positioning Review",
    body: "Rs 999 - Resume, LinkedIn, and narrative review.",
    href: "/services/career-positioning-audit",
    cta: "View review",
  },
];

const TRUST_SIGNALS = [
  {
    title: "Founder-led advisory",
    body: "The frameworks, products, and advisory language are built directly by Sriram, so buyers know who is accountable for the point of view.",
    href: "/about",
    cta: "About Sriram",
  },
  {
    title: "Public thinking",
    body: "The advisory point of view is visible through published insights and the Sriram Advisory LinkedIn newsletter.",
    href: "/insights",
    cta: "Read insights",
  },
  {
    title: "Direct contact before you buy",
    body: "Professionals can reach Sriram directly by email or WhatsApp when they need fit clarification.",
    href: "/contact",
    cta: "Contact Sriram",
  },
];

const FRAMEWORK_DIMENSIONS = [
  "Automation Exposure",
  "Market Saturation",
  "Decision Complexity",
  "Human Dependency",
  "Future Demand",
];

const PROOF_LINKS = [
  {
    title: "QA Guide",
    description:
      "For QA professionals who want a clearer view of AI pressure, role risk, and practical upgrade direction.",
    href: "/guides/qa-engineer-survival-guide-2026",
    cta: "View QA Guide",
  },
  {
    title: "BA Guide",
    description:
      "For Business Analysts who need to reposition toward higher-leverage product, AI, and stakeholder work.",
    href: "/guides/business-analyst-survival-guide-2026",
    cta: "View BA Guide",
  },
  {
    title: "Java Guide",
    description:
      "For Java developers who want to use AI as leverage while protecting seniority, depth, and market signal.",
    href: "/guides/java-developer-ai-leverage-guide-2026",
    cta: "View Java Guide",
  },
  {
    title: "HR Guide",
    description:
      "For HR professionals who need to understand how recruiting and people work are changing under AI pressure.",
    href: "/guides/hr-recruiter-survival-guide-2026",
    cta: "View HR Guide",
  },
];

const TESTIMONIALS = [
  {
    role: "QA Engineer",
    quote: "The guide gave me a concrete 90-day direction.",
  },
  {
    role: "Business Analyst",
    quote: "The report helped me understand where my role is actually exposed.",
  },
  {
    role: "Java Developer",
    quote: "One of the few AI career resources that felt grounded.",
  },
];

const PRODUCT_MATCH = [
  { need: "Understand role exposure", product: "SA-AIRS" },
  { need: "Improve resume", product: "Career Positioning Audit" },
  { need: "QA engineer", product: "QA Guide" },
  { need: "BA professional", product: "BA Guide" },
  { need: "Unsure", product: "SA-AIRS Assessment" },
];

const START_HERE = [
  { role: "QA Engineer", recommendation: "QA Survival Guide", href: "/guides/qa-engineer-survival-guide-2026" },
  { role: "Business Analyst", recommendation: "BA Survival Guide", href: "/guides/business-analyst-survival-guide-2026" },
  { role: "Java Developer", recommendation: "Java Developer AI Leverage Guide", href: "/guides/java-developer-ai-leverage-guide-2026" },
  { role: "HR Professional", recommendation: "HR Recruiter Survival Guide", href: "/guides/hr-recruiter-survival-guide-2026" },
];

export default function HomePage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 50%, #e6efff 100%)",
          paddingTop: 120,
          paddingBottom: 100,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(26,79,214,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,214,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(26,79,214,0.07)",
              border: "1px solid rgba(26,79,214,0.35)",
              borderRadius: 4,
              padding: "5px 14px",
              marginBottom: 36,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0d9268", display: "inline-block" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Workforce Intelligence for the AI Era
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.05fr) minmax(300px, 0.95fr)",
              gap: 36,
              alignItems: "start",
            }}
            className="home-hero-grid"
          >
            <div>
              <h1
                style={{
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  fontWeight: 800,
                  color: "#0a1628",
                  lineHeight: 1.06,
                  marginBottom: 28,
                  letterSpacing: "-0.02em",
                  maxWidth: 820,
                }}
              >
                Workforce intelligence for professionals{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #1a4fd6, #22d3a0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  navigating the AI era.
                </span>
              </h1>

              <p
                style={{
                  fontSize: "clamp(17px, 2.2vw, 22px)",
                  color: "#4a5a7a",
                  lineHeight: 1.7,
                  marginBottom: 20,
                  maxWidth: 700,
                }}
              >
                We study work, measure AI exposure, and help professionals reposition before the market forces them to.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 12px",
                  maxWidth: 700,
                  marginBottom: 20,
                  color: "#0a1628",
                  fontSize: 14,
                  fontWeight: 800,
                  lineHeight: 1.5,
                }}
              >
                {[
                  "100+ Professionals Served",
                  "4,400+ Followers",
                  "20+ Industries Covered",
                  "100+ Roles Studied",
                ].map((item, index) => (
                  <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                    {index > 0 && <span style={{ color: "#93a4bf" }}>{"•"}</span>}
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href="/guides"
                style={{
                  display: "inline-block",
                  maxWidth: 700,
                  marginBottom: 20,
                  color: "#1a4fd6",
                  fontSize: 15,
                  fontWeight: 700,
                  lineHeight: 1.7,
                  textDecoration: "none",
                }}
              >
                SA-AIRS(TM) scores provide a structured view of automation exposure, market pressure, and role durability.
              </Link>

              <p style={{ fontSize: 18, fontWeight: 700, color: "#0a1628", marginBottom: 16 }}>
                Career intelligence for professionals making AI-era career decisions.
              </p>

              <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.8, marginBottom: 40, maxWidth: 720 }}>
                Use Sriram Advisory when you need to understand role exposure, choose stronger skills, and improve your market-facing positioning.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <Link
                  href="/career-intelligence-report/sa-airs-pro"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#1a4fd6",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 16,
                    padding: "15px 32px",
                    borderRadius: 10,
                    textDecoration: "none",
                    border: "1px solid #3b6ef0",
                  }}
                >
                  Get My SA-AIRS(TM) Score
                </Link>
                <Link
                  href="/guides"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "transparent",
                    color: "#1a4fd6",
                    fontWeight: 600,
                    fontSize: 15,
                    padding: "15px 28px",
                    borderRadius: 10,
                    textDecoration: "none",
                    border: "1px solid rgba(126,179,255,0.25)",
                  }}
                >
                  Browse Career Guides
                </Link>
              </div>

              <Link
                href="/guides"
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: 8,
                  marginTop: 22,
                  color: "#0a1628",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <span style={{ color: "#0d9268", fontSize: 20, fontWeight: 800 }}>Rs 499</span>
                role-specific AI career guides - early supporter pricing
              </Link>

              <div style={{ display: "grid", gap: 10, marginTop: 26, maxWidth: 660 }}>
                {TESTIMONIALS.map((item) => (
                  <blockquote
                    key={item.role}
                    style={{
                      margin: 0,
                      background: "#ffffff",
                      border: "1px solid rgba(13,146,104,0.28)",
                      borderLeft: "4px solid #0d9268",
                      borderRadius: 8,
                      padding: "14px 16px",
                      color: "#304159",
                      fontSize: 15,
                      lineHeight: 1.6,
                      boxShadow: "0 10px 24px rgba(10,22,40,0.06)",
                    }}
                  >
                    &quot;{item.quote}&quot;
                    <footer style={{ marginTop: 8, color: "#0d9268", fontSize: 12, fontWeight: 800, letterSpacing: "0.04em" }}>
                      {item.role}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid rgba(26,79,214,0.15)",
                borderRadius: 16,
                padding: "28px 28px",
                boxShadow: "0 10px 30px rgba(26,79,214,0.08)",
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0d9268", marginBottom: 18 }}>
                Advisory Focus
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                {ADVISORY_FOCUS.map((item) => (
                  <div key={item.label} style={{ padding: "16px 14px", background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.12)", borderRadius: 12 }}>
                    <div style={{ fontSize: "clamp(18px, 2.4vw, 24px)", fontWeight: 800, color: "#1a4fd6", lineHeight: 1.15, marginBottom: 8 }}>
                      {item.value}
                    </div>
                    <div style={{ fontSize: 13, color: "#5a6a8a", lineHeight: 1.55 }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "30px 24px", background: "#0a1628", color: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 22 }}>
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 6 }}>Trusted by professionals navigating the AI era</div>
            <div style={{ fontSize: 14, color: "#b9c8e7" }}>Independent workforce intelligence for clearer career decisions.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 12 }}>
            {[
              "100+ Professionals Served",
              "4,400+ LinkedIn Followers",
              "Professionals from IT Services, GCCs and Product Companies",
              "New reports and customer updates added continuously",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6, fontSize: 14, color: "#e7efff", lineHeight: 1.5 }}>
                <span style={{ color: "#6ee7b7", fontWeight: 900 }}>+</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px 0", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            background: "#f7f9fc",
            border: "1px solid rgba(26,79,214,0.12)",
            borderRadius: 12,
            padding: "34px 32px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
            gap: 30,
          }}
          className="home-two-col"
        >
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              Why professionals buy Sriram Advisory
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0a1628", marginTop: 16, marginBottom: 14 }}>
              Most professionals already know AI is changing work.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              Sriram Advisory exists to answer the practical career questions before the market answers them for you.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              "How exposed their role actually is",
              "Which skills increase leverage",
              "Whether staying in the same path is still rational",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "16px 18px", color: "#304159", fontSize: 16, fontWeight: 700 }}>
                <span style={{ color: "#0d9268", fontWeight: 900 }}>+</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 38 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0d9268" }}>
              Advisory Questions
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.5vw, 52px)", color: "#0a1628", marginTop: 16, marginBottom: 16, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              We help clients make decisions when AI changes the rules around work.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a" }}>
              Sriram Advisory sits at the point where career risk, workforce change, and market pressure become practical decisions. The work is not motivation or trend commentary. It is structured judgment for what to do next.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18 }}>
            {DECISIONS.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f8fbff",
                  border: "1px solid #dbe5f5",
                  borderRadius: 12,
                  padding: "24px 22px",
                }}
              >
                <h3 style={{ fontSize: 20, color: "#0a1628", lineHeight: 1.2, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: "#425472", lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#0a1628", color: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)", gap: 32 }} className="home-two-col">
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#93b4ff" }}>
              Advisory System
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.5vw, 50px)", lineHeight: 1.1, marginTop: 16, marginBottom: 16, color: "#ffffff" }}>
              A simple system for moving from uncertainty to action.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(231,239,255,0.78)" }}>
              Every product and service exists to support one of three advisory moves: diagnose the situation, interpret the signal, and choose the next move.
            </p>
          </div>

          <div style={{ display: "grid", gap: 14 }}>
            {ADVISORY_SYSTEM.map((item) => (
              <div
                key={item.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "58px 1fr",
                  gap: 16,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 12,
                  padding: "18px",
                }}
              >
                <div style={{ color: "#93b4ff", fontSize: 18, fontWeight: 900 }}>{item.step}</div>
                <div>
                  <h3 style={{ fontSize: 19, color: "#ffffff", marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: "rgba(231,239,255,0.74)", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)",
            gap: 30,
          }}
          className="home-two-col"
        >
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>
              Engagement Paths
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Choose the level of help that matches the decision.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", maxWidth: 560 }}>
              Some decisions need an assessment. Some need a role guide. Some need personal positioning feedback. Choose the product that fits the decision in front of you.
            </p>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {ENGAGEMENT_PATHS.map((path) => (
              <Link key={path.href} href={path.href} style={{ textDecoration: "none" }}>
                <article
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,79,214,0.12)",
                    borderRadius: 12,
                    padding: "20px",
                }}
              >
                  <h3 style={{ fontSize: 21, color: "#0a1628", marginBottom: 8 }}>{path.title}</h3>
                  <p style={{ fontSize: 15, color: "#425472", lineHeight: 1.7, margin: "0 0 12px" }}>{path.body}</p>
                  <span style={{ color: "#1a4fd6", fontSize: 14, fontWeight: 800 }}>{path.cta} {"->"}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
            gap: 30,
          }}
          className="home-two-col"
        >
          <div
            style={{
              background: "#0a1628",
              color: "#f8faff",
              borderRadius: 18,
              padding: 32,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#93b4ff" }}>
              SA-AIRS Framework
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", marginTop: 14, marginBottom: 14, color: "#ffffff", letterSpacing: "-0.02em" }}>
              SA-AIRS(TM) Workforce Intelligence Framework
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#8898b8" }}>
              Reframed from a single score into a platform for interpreting how work is
              changing across professions, sectors, and career stages.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5a6a8a", marginBottom: 16 }}>
              Dimensions Analyzed
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              {FRAMEWORK_DIMENSIONS.map((dimension, index) => (
                <div
                  key={dimension}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr",
                    gap: 16,
                    alignItems: "center",
                    padding: "16px 18px",
                    borderRadius: 16,
                    border: "1px solid rgba(26,79,214,0.15)",
                    background: "rgba(10,22,40,0.025)",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(26,79,214,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      color: "#1a4fd6",
                    }}
                  >
                    0{index + 1}
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "#0a1628" }}>{dimension}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 22 }}>
              <Link
                href="/assessments"
                style={{
                  color: "#1a4fd6",
                  fontWeight: 700,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(126,179,255,0.3)",
                  paddingBottom: 2,
                }}
              >
                Explore Assessments
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 30 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>
              Credibility Signals
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", color: "#0a1628", marginTop: 16, marginBottom: 14, letterSpacing: "-0.02em", lineHeight: 1.12 }}>
              A clear point of view, visible method, and direct accountability.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a" }}>
              Advisory firms earn trust through judgment, transparency, and delivery discipline. These are the signals available today while the testimonial layer is built out.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18 }}>
            {TRUST_SIGNALS.map((item) => (
              <article
                key={item.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,79,214,0.12)",
                  borderRadius: 12,
                  padding: "24px 22px",
                }}
              >
                <h3 style={{ fontSize: 21, color: "#0a1628", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: "#425472", lineHeight: 1.75, margin: "0 0 16px" }}>{item.body}</p>
                <Link
                  href={item.href}
                  style={{
                    color: "#1a4fd6",
                    fontWeight: 700,
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(126,179,255,0.3)",
                    paddingBottom: 2,
                  }}
                >
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, marginBottom: 28 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a4fd6" }}>
              What to buy
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0a1628", margin: "14px 0" }}>
              Match your need to the right product.
            </h2>
          </div>
          <div style={{ overflowX: "auto", border: "1px solid #dbe5f5", borderRadius: 8, background: "#ffffff" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
              <thead>
                <tr style={{ background: "#f7f9fc" }}>
                  <th style={{ textAlign: "left", padding: "16px 18px", color: "#0a1628", fontSize: 14 }}>Need</th>
                  <th style={{ textAlign: "left", padding: "16px 18px", color: "#0a1628", fontSize: 14 }}>Product</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCT_MATCH.map((item) => (
                  <tr key={item.need} style={{ borderTop: "1px solid #dbe5f5" }}>
                    <td style={{ padding: "16px 18px", color: "#52627e", fontSize: 15 }}>{item.need}</td>
                    <td style={{ padding: "16px 18px", color: "#0a1628", fontSize: 15, fontWeight: 800 }}>{item.product}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ marginBottom: 28 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>
              Current Offerings
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", color: "#0a1628", marginTop: 16, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Current products for clearer career decisions.
            </h2>
            <p style={{ maxWidth: 760, fontSize: 17, lineHeight: 1.8, color: "#5a6a8a" }}>
              These are the current products already available from Sriram Advisory, covering assessments, role guides, reports, and positioning support.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {PROOF_LINKS.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  border: "1px solid rgba(26,79,214,0.12)",
                  padding: 24,
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 800, color: "#0a1628", marginBottom: 10 }}>{item.title}</div>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#5a6a8a", marginBottom: 18 }}>{item.description}</p>
                <Link
                  href={item.href}
                  style={{
                    color: "#1a4fd6",
                    fontWeight: 700,
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(126,179,255,0.3)",
                    paddingBottom: 2,
                  }}
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>
            Next Step
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4.8vw, 56px)", color: "#0a1628", marginTop: 16, marginBottom: 18, letterSpacing: "-0.02em" }}>
            Choose the product that matches your situation.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: "#5a6a8a", marginBottom: 34 }}>
            Start with SA-AIRS if you are unsure. Choose a role guide if you already know which path you need to improve.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/career-intelligence-report/sa-airs-pro"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 28px",
                borderRadius: 10,
                background: "#1a4fd6",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid #3b6ef0",
              }}
            >
              Start with SA-AIRS
            </Link>
            <Link
              href="/guides"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 28px",
                borderRadius: 10,
                background: "transparent",
                color: "#1a4fd6",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid rgba(126,179,255,0.25)",
              }}
            >
              Browse Guides
            </Link>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#5a6a8a", marginTop: 24 }}>
            Prefer to ask directly? Email{" "}
            <a href="mailto:sriram@sriramadvisory.com" style={{ color: "#1a4fd6", fontWeight: 700, textDecoration: "none" }}>
              sriram@sriramadvisory.com
            </a>{" "}
            or WhatsApp{" "}
            <a href="https://wa.me/919342229420" target="_blank" rel="noopener noreferrer" style={{ color: "#1a4fd6", fontWeight: 700, textDecoration: "none" }}>
              +91 93422 29420
            </a>
            .
          </p>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto 56px", display: "grid", gridTemplateColumns: "minmax(220px, 0.7fr) minmax(0, 1.3fr)", gap: 34, alignItems: "center" }} className="home-two-col">
          <div style={{ background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: 20, textAlign: "center" }}>
            <img src="/sriram.png" alt="Sriram Srinivasan" style={{ width: 150, height: 150, objectFit: "cover", borderRadius: "50%", border: "3px solid #1a4fd6" }} />
          </div>
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a4fd6" }}>Founder-Led</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", margin: "14px 0", color: "#0a1628" }}>Why trust Sriram Advisory?</h2>
            <p style={{ margin: "0 0 18px", fontSize: 16, lineHeight: 1.75, color: "#52627e" }}>Sriram Srinivasan brings enterprise technology experience into practical workforce intelligence for professionals facing AI-shaped market change.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 10 }}>
              {[
                "Enterprise AI practitioner with 30 years in technology delivery",
                "Founder, Sriram Advisory",
                "Building workforce intelligence for professionals navigating AI-driven change",
              ].map((item) => <div key={item} style={{ padding: "13px 14px", background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 6, color: "#304159", fontSize: 14, fontWeight: 700, lineHeight: 1.5 }}>{item}</div>)}
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, marginBottom: 28 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0d9268" }}>Start Here</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", margin: "14px 0", color: "#0a1628" }}>Choose the first move that matches your role.</h2>
            <p style={{ margin: 0, color: "#52627e", fontSize: 16, lineHeight: 1.75 }}>Start with a focused guide or bundle. Not sure where you stand? Begin with a personal SA-AIRS score.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {START_HERE.map((item) => (
              <Link key={item.role} href={item.href} style={{ textDecoration: "none", background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "20px" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#1a4fd6", marginBottom: 8 }}>{item.role}</div>
                <div style={{ color: "#0a1628", fontWeight: 800, fontSize: 18, lineHeight: 1.35 }}>{item.recommendation}</div>
              </Link>
            ))}
            <Link href="/career-intelligence-report/sa-airs-pro" style={{ textDecoration: "none", background: "#0a1628", border: "1px solid #0a1628", borderRadius: 8, padding: "20px" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#93b4ff", marginBottom: 8 }}>Not sure?</div>
              <div style={{ color: "#ffffff", fontWeight: 800, fontSize: 18, lineHeight: 1.35 }}>Get a SA-AIRS(TM) Career Intelligence Report</div>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "84px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 32px" }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0d9268" }}>Simple Process</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0a1628", margin: "14px 0" }}>From question to next move.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
            {["Browse", "Purchase", "Receive PDF", "Start repositioning"].map((step, index) => (
              <div key={step} style={{ padding: "22px 18px", background: index % 2 === 0 ? "#f8fbff" : "#f0fdf8", border: "1px solid #dbe5f5", borderRadius: 8, textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#1a4fd6", fontWeight: 900, marginBottom: 10 }}>0{index + 1}</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#0a1628" }}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "84px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, marginBottom: 28 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a4fd6" }}>Purchase FAQ</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0a1628", margin: "14px 0" }}>Know what happens next.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {[
              ["How do I receive my guide?", "Delivered to your inbox, typically within 30 minutes of payment."],
              ["Are updates included?", "Yes. Existing guide customers receive future updates free."],
              ["What format is it?", "Guides and reports are delivered as PDFs."],
              ["How do I know which product fits me?", "Start with SA-AIRS. If you still have questions, message Sriram directly on WhatsApp."],
              ["What if I need help?", "Review the published refund policy or contact Sriram directly before buying."],
            ].map(([question, answer]) => <div key={question} style={{ background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "20px" }}><h3 style={{ margin: "0 0 8px", color: "#0a1628", fontSize: 17 }}>{question}</h3><p style={{ margin: 0, color: "#52627e", fontSize: 14, lineHeight: 1.7 }}>{answer}</p></div>)}
          </div>
        </div>
      </section>

      <section id="newsletter" style={{ padding: "84px 24px", background: "#0a1628", color: "#ffffff" }}>
        <Script
          id="beehiiv-attribution"
          src="https://subscribe-forms.beehiiv.com/attribution.js"
          strategy="afterInteractive"
        />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#93b4ff" }}>Download free book</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", margin: "14px 0", color: "#ffffff" }}>The Examined Machine</h2>
          <p style={{ maxWidth: 620, margin: "0 auto 22px", color: "#dbeafe", fontSize: 16, lineHeight: 1.75 }}>
            Join 4,000+ professionals receiving weekly workforce intelligence. The ebook will be sent to your email within 30 minutes.
          </p>
          <div style={{ maxWidth: 560, margin: "0 auto" }}><NewsletterSignup compact /></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
