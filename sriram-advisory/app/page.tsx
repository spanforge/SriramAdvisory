import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeehiivSubscribeForm from "@/components/BeehiivSubscribeForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sriram Advisory | Future of Work Research and Advisory",
  description:
    "Sriram Advisory studies how work is changing across AI, automation, careers, GCCs, leadership, and organizational design.",
};

const STUDY_AREAS = [
  "Future of Work",
  "AI & Automation",
  "Career Longevity",
  "GCCs & Indian IT",
  "Skills & Employability",
  "Leadership & Management",
  "Organizational Change",
  "Human Judgment & Decision-Making",
];

const PROOF_POINTS = [
  { value: "4", label: "Research frameworks developed" },
  { value: "20+", label: "Industries and work functions monitored" },
  { value: "Weekly", label: "Future of Work research rhythm" },
  { value: "30 years", label: "Interpreting technology shifts and enterprise work" },
];

const FRAMEWORKS = [
  {
    title: "SA-AIRS(TM)",
    href: "/frameworks/sa-airs",
    body: "A structured lens for understanding role exposure, market pressure, and career durability.",
  },
  {
    title: "Replaceability Curve(TM)",
    href: "/frameworks/replaceability-curve",
    body: "A way to think about which parts of work become cheaper, compressed, or more valuable over time.",
  },
  {
    title: "AI Leverage Ladder(TM)",
    href: "/frameworks/ai-leverage-ladder",
    body: "A practical model for moving from tool use to higher-value judgment, ownership, and decision leverage.",
  },
  {
    title: "Career Positioning Audit",
    href: "/frameworks/career-positioning-audit",
    body: "A diagnostic view of how a professional profile reads to the market and where the signal needs strengthening.",
  },
];

const CHANGED_MIND = [
  {
    before: "AI risk is mostly about which tasks can be automated.",
    after:
      "Role value erodes when automation, management pressure, hiring filters, and weak professional signal move together.",
  },
  {
    before: "Upskilling is enough if professionals learn the right tools.",
    after:
      "Tools matter, but durable careers depend more on judgment, context, ownership, and visible proof of value.",
  },
  {
    before: "Experience is a natural career moat.",
    after:
      "Experience only protects a career when the market can clearly see how that experience applies to new work.",
  },
];

const WORKFLOW = [
  {
    step: "Research",
    body: "Study workforce shifts across roles, industries, technology adoption, and organizational change.",
    href: "/reports",
  },
  {
    step: "Frameworks",
    body: "Use named models to interpret pressure, durability, leverage, and professional positioning.",
    href: "/frameworks",
  },
  {
    step: "Reports",
    body: "Turn the research into focused intelligence on roles, sectors, and future-of-work themes.",
    href: "/reports",
  },
  {
    step: "Guides",
    body: "Translate findings into practical next steps for professionals who need career direction.",
    href: "/guides",
  },
  {
    step: "Advisory",
    body: "Apply the research lens to specific career, team, and workforce decisions.",
    href: "/contact",
  },
];

const FLAGSHIP_RESEARCH = [
  {
    title: "Future of Indian IT Careers 2026",
    label: "Flagship outlook",
    body: "A developing research track on how Indian technology careers are being reshaped by AI, GCCs, delivery models, and changing skill demand.",
    href: "/reports",
  },
  {
    title: "AI Risk Rankings India 2026",
    label: "Career risk index",
    body: "A role-level view of where automation pressure is rising, which careers feel it first, and what adaptation paths look like.",
    href: "/products/ai-risk-rankings-india-2026",
  },
  {
    title: "State of QA Careers India 2026",
    label: "Role outlook",
    body: "A focused report on how testing careers are changing and what stronger quality-work positioning looks like next.",
    href: "/products/state-of-qa-careers-india-2026",
  },
];

const RESEARCH_PRODUCTS = [
  {
    title: "Career Intelligence Reports",
    body: "Role-specific outlooks for professionals who need a clearer view of market pressure, skill shifts, and career durability.",
    href: "/reports",
  },
  {
    title: "Future of Work Briefings",
    body: "Short research notes on major workforce shifts across AI, automation, GCCs, management, skills, and organizational change.",
    href: "/insights",
  },
  {
    title: "Research Method",
    body: "A structured approach for interpreting workforce signals without turning complex career and organizational change into simple predictions.",
    href: "/methodology",
  },
  {
    title: "Learning & Career Guides",
    body: "Practical next-step guides for professionals who want to strengthen relevance, judgment, and market positioning.",
    href: "/guides",
  },
];

const FEATURED_RESEARCH = [
  { title: "AI Risk Rankings India 2026", href: "/products/ai-risk-rankings-india-2026" },
  { title: "State of QA Careers India 2026", href: "/products/state-of-qa-careers-india-2026" },
  { title: "Global Java Careers Outlook 2026", href: "/guides/java-developer-ai-leverage-guide-2026" },
  { title: "AI Literacy for Absolute Beginners", href: "/ai-literacy/absolute-beginners" },
  { title: "Future of Indian IT Careers 2026", href: "/reports" },
  { title: "Career Positioning Audit", href: "/services/career-positioning-audit" },
];

const AUDIENCES = [
  {
    title: "For Professionals",
    body: "Understand how your role is changing, what companies may value next, and what to learn before the shift becomes obvious.",
  },
  {
    title: "For Managers",
    body: "Understand how teams, skills, productivity expectations, and leadership judgment are shifting in AI-shaped work.",
  },
  {
    title: "For Organizations",
    body: "Understand workforce risk, capability gaps, future skill needs, and the management choices behind durable performance.",
  },
];

const TRUST_SIGNALS = [
  {
    title: "Three decades of technology perspective",
    body: "Sriram Advisory is built on three decades of observing how technology reshapes careers, organizations, and professional value.",
  },
  {
    title: "India lens, global context",
    body: "Research connects Indian IT, GCCs, global delivery models, AI capability shifts, and changing organizational expectations.",
  },
  {
    title: "Practical outputs",
    body: "The work is translated into reports, briefings, guides, and assessments that help people decide what to learn, monitor, or change.",
  },
  {
    title: "Clear boundaries",
    body: "Research products are analytical commentary, not guarantees. Methods, limitations, policies, and contact routes are visible.",
  },
];

const VISITOR_PATHS = [
  { label: "Professional", action: "Explore Career Guides", href: "/guides" },
  { label: "Manager", action: "Read Research", href: "/reports" },
  { label: "Organization", action: "Contact Sriram", href: "/contact" },
  { label: "Journalist or Recruiter", action: "About the Work", href: "/about" },
];

const LATEST_PUBLICATIONS = [
  {
    date: "July 2026",
    title: "The Seniority Trap: Why Mid-Career Professionals Are Vulnerable",
    body: "An essay on why experience can become fragile when work changes faster than assumptions.",
    href: "/insights/seniority-trap-mid-career-ai-risk",
  },
  {
    date: "June 2026",
    title: "Why Expertise Becomes a Trap",
    body: "A research report on competency traps, reinvention, and professional value during technology shifts.",
    href: "/products/why-expertise-becomes-a-trap",
  },
  {
    date: "June 2026",
    title: "AI Futures 2026",
    body: "Signals and scenarios for professionals who want a clearer map of what may change next.",
    href: "/products/ai-futures-2026",
  },
];

export default function HomePage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 54%, #edf7f2 100%)",
          paddingTop: 112,
          paddingBottom: 92,
          borderBottom: "1px solid rgba(26,79,214,0.12)",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 900 }}>
            <span
              style={{
                display: "inline-flex",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#0d9268",
                marginBottom: 28,
              }}
            >
              Careers do not disappear overnight. Their value erodes quietly.
            </span>
            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 78px)",
                lineHeight: 1.04,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#0a1628",
                margin: "0 0 24px",
                maxWidth: 860,
              }}
            >
              The biggest career risk is not AI.
              <br />
              It is preparing for tomorrow with yesterday&apos;s map.
            </h1>
            <p
              style={{
                fontSize: "clamp(18px, 2.2vw, 24px)",
                lineHeight: 1.65,
                color: "#4a5a7a",
                margin: "0 0 38px",
                maxWidth: 760,
              }}
            >
              Sriram Advisory studies how careers, organizations, and industries are changing - and turns that research into practical intelligence for professionals and teams.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link
                href="/reports"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px 28px",
                  borderRadius: 8,
                  background: "#1a4fd6",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 800,
                  border: "1px solid #3b6ef0",
                }}
              >
                Read Our Research
              </Link>
              <Link
                href="/guides"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px 28px",
                  borderRadius: 8,
                  color: "#1a4fd6",
                  textDecoration: "none",
                  fontWeight: 800,
                  border: "1px solid rgba(26,79,214,0.22)",
                  background: "#ffffff",
                }}
              >
                Explore Career Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "28px 24px", background: "#0a1628", color: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14 }}>
          {PROOF_POINTS.map((point) => (
            <div key={point.label} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "18px 16px", background: "rgba(255,255,255,0.05)" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#93b4ff", marginBottom: 6 }}>{point.value}</div>
              <div style={{ fontSize: 13, lineHeight: 1.55, color: "#dbe7ff", fontWeight: 700 }}>{point.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Flagship Research
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              Cornerstone publications for the work shift ahead.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              Research companies are remembered by their point of view. These tracks define how Sriram Advisory reads the future of work in India.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
            {FLAGSHIP_RESEARCH.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <article style={{ height: "100%", border: "1px solid rgba(26,79,214,0.14)", borderRadius: 8, padding: "26px 24px", background: "#f8fbff" }}>
                  <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0d9268", marginBottom: 12 }}>{item.label}</div>
                  <h3 style={{ fontSize: 24, lineHeight: 1.18, color: "#0a1628", margin: "0 0 12px" }}>{item.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: "0 0 18px" }}>{item.body}</p>
                  <span style={{ color: "#1a4fd6", fontSize: 14, fontWeight: 900 }}>Read overview {"->"}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 740, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              What We Study
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              The forces reshaping careers, teams, and organizations.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              Future of work is not one story. It is a combination of technology, economic pressure, demographics, management choices, and changing ideas of value.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {STUDY_AREAS.map((area) => (
              <div key={area} style={{ border: "1px solid #dbe5f5", borderRadius: 8, padding: "18px 18px", background: "#f8fbff", fontSize: 16, fontWeight: 800, color: "#0a1628" }}>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              Research Frameworks
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              Named models for making work change easier to understand.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              The frameworks are not public formulas. They are the research lenses used to explain role pressure, career durability, and human leverage.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {FRAMEWORKS.map((framework) => (
              <Link key={framework.title} href={framework.href} style={{ textDecoration: "none" }}>
                <article style={{ height: "100%", border: "1px solid #dbe5f5", borderRadius: 8, padding: "24px 22px", background: "#ffffff" }}>
                  <h3 style={{ fontSize: 22, color: "#0a1628", margin: "0 0 10px" }}>{framework.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: "0 0 16px" }}>{framework.body}</p>
                  <span style={{ color: "#1a4fd6", fontSize: 14, fontWeight: 900 }}>View framework {"->"}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Research Pathway
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              The work moves from questions to practical decisions.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              Sriram Advisory is organized as a connected research system: public thinking, named frameworks, paid reports, practical guides, and applied advisory conversations.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14 }}>
            {WORKFLOW.map((item, index) => (
              <Link key={item.step} href={item.href} style={{ textDecoration: "none" }}>
                <article style={{ minHeight: 210, border: "1px solid #dbe5f5", borderRadius: 8, padding: "22px 20px", background: "#f8fbff" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "#1a4fd6", color: "#ffffff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, marginBottom: 18 }}>
                    {index + 1}
                  </div>
                  <h3 style={{ fontSize: 21, color: "#0a1628", margin: "0 0 10px" }}>{item.step}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#52627e", margin: 0 }}>{item.body}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
            Why Sriram Advisory Exists
          </span>
          <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0 24px", color: "#0a1628" }}>
            Most professionals are trying to prepare for the future using outdated maps.
          </h2>
          <div style={{ display: "grid", gap: 18 }}>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#4a5a7a", margin: 0 }}>
              The future of work is not being shaped by one force alone. AI, automation, demographics, global delivery models, economic pressure, and changing organizational structures are all reshaping what companies value.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#4a5a7a", margin: 0 }}>
              We study these shifts and translate them into clear, practical intelligence for professionals and organizations.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              What We Have Changed Our Mind About
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              Good research should update when the evidence changes.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              The future of work is still moving. The public point of view is strongest when it shows what has become clearer over time.
            </p>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            {CHANGED_MIND.map((item) => (
              <article key={item.before} style={{ display: "grid", gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)", gap: 18, border: "1px solid #dbe5f5", borderRadius: 8, padding: "22px 20px", background: "#f8fbff" }} className="home-two-col">
                <div>
                  <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7a879c", marginBottom: 8 }}>Earlier view</div>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: 0 }}>{item.before}</p>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0d9268", marginBottom: 8 }}>Current view</div>
                  <p style={{ fontSize: 16, lineHeight: 1.75, color: "#0a1628", margin: 0, fontWeight: 750 }}>{item.after}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              Why Trust The Work
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              Research should make uncertainty easier to handle.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              Sriram Advisory is designed to give professionals and organizations a clearer read on work change without panic, generic motivation, or black-box predictions.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {TRUST_SIGNALS.map((signal) => (
              <article key={signal.title} style={{ border: "1px solid #dbe5f5", borderRadius: 8, padding: "24px 22px", background: "#f8fbff" }}>
                <h3 style={{ fontSize: 20, color: "#0a1628", margin: "0 0 10px" }}>{signal.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: 0 }}>{signal.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              Our Research Products
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              Research formats for different decisions.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18 }}>
            {RESEARCH_PRODUCTS.map((product) => (
              <Link key={product.title} href={product.href} style={{ textDecoration: "none" }}>
                <article style={{ height: "100%", border: "1px solid rgba(26,79,214,0.14)", borderRadius: 8, padding: "24px 22px", background: "#ffffff" }}>
                  <h3 style={{ fontSize: 21, lineHeight: 1.25, color: "#0a1628", margin: "0 0 10px" }}>{product.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: "0 0 16px" }}>{product.body}</p>
                  <span style={{ color: "#1a4fd6", fontSize: 14, fontWeight: 800 }}>Explore</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)", gap: 34, alignItems: "start" }} className="home-two-col">
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Start Here
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0" }}>
              Different visitors need different entry points.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              Choose the route that matches the decision you are trying to make today.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {VISITOR_PATHS.map((path) => (
              <Link key={path.label} href={path.href} style={{ textDecoration: "none" }}>
                <article style={{ display: "grid", gridTemplateColumns: "minmax(130px, 0.6fr) minmax(0, 1fr)", gap: 16, alignItems: "center", background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "18px 20px" }}>
                  <div style={{ fontSize: 14, color: "#52627e", fontWeight: 800 }}>{path.label}</div>
                  <div style={{ fontSize: 16, color: "#1a4fd6", fontWeight: 900 }}>{path.action} {"->"}</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#0a1628", color: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#93b4ff" }}>
              Featured Research
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#ffffff" }}>
              Current work from the research shelf.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
            {FEATURED_RESEARCH.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <article style={{ minHeight: 124, border: "1px solid rgba(255,255,255,0.14)", borderRadius: 8, padding: "22px 20px", background: "rgba(255,255,255,0.06)" }}>
                  <h3 style={{ fontSize: 20, lineHeight: 1.3, color: "#ffffff", margin: "0 0 18px" }}>{item.title}</h3>
                  <span style={{ color: "#93b4ff", fontSize: 14, fontWeight: 800 }}>Read more</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Latest Publications
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              The research heartbeat.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              Essays, reports, and briefings that make the changing world of work easier to interpret.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {LATEST_PUBLICATIONS.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <article style={{ height: "100%", border: "1px solid #dbe5f5", borderRadius: 8, padding: "24px 22px", background: "#f8fbff" }}>
                  <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0d9268", marginBottom: 10 }}>
                    {item.date}
                  </div>
                  <h3 style={{ fontSize: 21, color: "#0a1628", lineHeight: 1.25, margin: "0 0 10px" }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: "#52627e", lineHeight: 1.75, margin: "0 0 16px" }}>{item.body}</p>
                  <span style={{ color: "#1a4fd6", fontSize: 14, fontWeight: 900 }}>Open {"->"}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              Who It Is For
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              Intelligence for people making workforce decisions.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {AUDIENCES.map((audience) => (
              <article key={audience.title} style={{ border: "1px solid #dbe5f5", borderRadius: 8, padding: "26px 24px", background: "#f8fbff" }}>
                <h3 style={{ fontSize: 22, color: "#0a1628", margin: "0 0 10px" }}>{audience.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: 0 }}>{audience.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" style={{ padding: "88px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
            Newsletter
          </span>
          <h2 style={{ fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.14, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
            Get Future of Work intelligence in your inbox.
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
            Work is changing faster than most careers are prepared for.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "#5a6a8a", margin: "0 0 32px" }}>
            Sriram Advisory helps you understand the shift before it becomes obvious.
          </p>
          <Link
            href="/reports"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px 30px",
              borderRadius: 8,
              background: "#1a4fd6",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 800,
              border: "1px solid #3b6ef0",
            }}
          >
            Explore the Research
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
