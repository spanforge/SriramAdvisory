import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sriram Advisory | Career Intelligence for India",
  description:
    "Sriram Advisory studies how work is changing in India through workforce research, assessments, reports, and structured intelligence frameworks.",
};

const MISSION_METRICS = [
  { value: "100 Crore", label: "Working-Age Indians" },
  { value: "100+", label: "Professions Tracked" },
  { value: "20+", label: "Industries Covered" },
  { value: "1,000s", label: "Career Pathways Modeled" },
];

const RESEARCH_ITEMS = [
  "State of QA Careers 2026",
  "State of Business Analysis 2026",
  "State of BPO Careers 2026",
  "State of Indian Careers 2026",
];

const INDUSTRIES = [
  "Technology",
  "Banking",
  "Insurance",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Education",
  "Customer Support",
  "Finance",
  "Human Resources",
];

const WORKFORCE_INTELLIGENCE = [
  "Banking Careers 2026",
  "HR Careers 2026",
  "Sales Careers 2026",
  "Finance Careers 2026",
  "Operations Careers 2026",
  "Education Careers 2026",
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
      "A role-level example of how Sriram Advisory turns research into practical guidance for working professionals.",
    href: "/guides/qa-engineer-survival-guide-2026",
    cta: "View QA Guide",
  },
  {
    title: "BA Guide",
    description:
      "A practical example of our approach to business analysis careers in an AI-driven market.",
    href: "/guides/business-analyst-survival-guide-2026",
    cta: "View BA Guide",
  },
  {
    title: "Java Guide",
    description:
      "A role-specific intelligence product showing how the broader research translates into action.",
    href: "/guides/java-developer-ai-leverage-guide-2026",
    cta: "View Java Guide",
  },
  {
    title: "AI Risk Rankings India 2026",
    description:
      "A flagship market-facing report already available today for professionals who want structured evidence.",
    href: "/products/ai-risk-rankings-india-2026",
    cta: "View Report",
  },
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
        <div
          style={{
            position: "absolute",
            top: -120,
            right: "5%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(26,79,214,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
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
              Workforce Intelligence · India 2026
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
                Career Intelligence{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #1a4fd6, #22d3a0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  for India
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
                We help working professionals understand how technology, AI, automation,
                and market shifts are changing work and what to do next.
              </p>

              <p style={{ fontSize: 18, fontWeight: 700, color: "#0a1628", marginBottom: 16 }}>
                We don&apos;t guess your future. We model it.
              </p>

              <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.8, marginBottom: 40, maxWidth: 720 }}>
                Researching how work is changing across industries, professions, and regions in the age of AI.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <Link
                  href="/research"
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
                  Explore Research
                </Link>
                <Link
                  href="/assessments"
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
                  View Assessments
                </Link>
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
                Our Mission
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                {MISSION_METRICS.map((item) => (
                  <div key={item.label} style={{ padding: "16px 14px", background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.12)", borderRadius: 12 }}>
                    <div style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, color: "#1a4fd6", lineHeight: 1, marginBottom: 8 }}>
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

      <section style={{ padding: "40px 24px 0", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            background: "#f7f9fc",
            border: "1px solid rgba(26,79,214,0.12)",
            borderRadius: 18,
            padding: "26px 28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 18,
          }}
        >
          {[
            {
              label: "Research",
              body: "Industry and profession-level intelligence on how work is changing in India.",
            },
            {
              label: "Assessments",
              body: "Structured frameworks that help professionals understand exposure, demand, and strategic options.",
            },
            {
              label: "Reports",
              body: "Revenue-generating intelligence products built from the same research backbone.",
            },
            {
              label: "Guides",
              body: "Role-specific applications of the broader category, kept as proof rather than the front door.",
            },
          ].map((item) => (
            <div key={item.label}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6", marginBottom: 8 }}>
                {item.label}
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: "#5a6a8a" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ marginBottom: 42 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>Research</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Research builds trust before products do.
            </h2>
            <p style={{ fontSize: 17, color: "#5a6a8a", maxWidth: 760, lineHeight: 1.8 }}>
              The category shift starts with visible research. Even before every report is launched,
              the site should show that Sriram Advisory studies workforce change across roles,
              sectors, and time horizons.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {RESEARCH_ITEMS.map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(10,22,40,0.025)",
                  border: "1px solid rgba(26,79,214,0.15)",
                  borderRadius: 16,
                  padding: "24px 22px",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5a6a8a", marginBottom: 12 }}>
                  Coming Soon
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#0a1628", lineHeight: 1.3 }}>{item}</div>
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
            gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
            gap: 30,
          }}
          className="home-two-col"
        >
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>
              Industries We Track
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 16, letterSpacing: "-0.02em" }}>
              The site should not read like an IT-only business.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", maxWidth: 560 }}>
              We analyze workforce trends across industries where automation, AI adoption,
              market saturation, and role redesign are reshaping professional careers.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
            {INDUSTRIES.map((industry) => (
              <div
                key={industry}
                style={{
                  padding: "18px 18px",
                  borderRadius: 14,
                  background: "#ffffff",
                  border: "1px solid rgba(26,79,214,0.12)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#0a1628",
                }}
              >
                {industry}
              </div>
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
                See current assessments
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 28,
          }}
          className="home-two-col"
        >
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>
              Workforce Intelligence
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Category first. Products next.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a" }}>
              The products can ship later. The market should still see the direction now:
              a company tracking how work changes across the Indian economy.
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: 16,
              border: "1px solid rgba(26,79,214,0.12)",
              padding: 28,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#5a6a8a", marginBottom: 18 }}>
              Coming Soon
            </div>
            <div style={{ display: "grid", gap: 12 }}>
              {WORKFORCE_INTELLIGENCE.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 14,
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(26,79,214,0.12)",
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#0a1628" }}>{item}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0d9268" }}>
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            background: "linear-gradient(135deg, #0a1628 0%, #0f2040 100%)",
            color: "#f8faff",
            borderRadius: 20,
            padding: "36px 30px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
            gap: 28,
          }}
          className="home-two-col"
        >
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#93b4ff" }}>
              Flagship Report
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", color: "#ffffff", marginTop: 14, marginBottom: 14, letterSpacing: "-0.02em" }}>
              State of Indian Careers 2026
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#dbe3ea" }}>
              India&apos;s annual workforce intelligence report. Visible now to establish category
              perception, even before launch.
            </p>
          </div>

          <div
            style={{
              alignSelf: "center",
              padding: 24,
              borderRadius: 16,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "6px 12px",
                borderRadius: 999,
                background: "rgba(59,110,240,0.18)",
                color: "#93b4ff",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Coming Soon
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: "#dbe3ea" }}>
              Annual report framing career change through automation exposure, labor demand,
              profession-level transitions, and sector-level shifts across India.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ marginBottom: 28 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>
              Existing Revenue Proof
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", color: "#0a1628", marginTop: 16, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Guides and reports stay. Their position changes.
            </h2>
            <p style={{ maxWidth: 760, fontSize: 17, lineHeight: 1.8, color: "#5a6a8a" }}>
              These products remain live and visible. The shift is strategic: they move from
              being the brand itself to being evidence that the research is already useful in the market.
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
            Understand work change with research first, products second.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: "#5a6a8a", marginBottom: 34 }}>
            Start with the research direction, then explore the current assessments, reports,
            and guides already available today.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/research"
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
              See Research
            </Link>
            <Link
              href="/reports"
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
              Browse Reports
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
