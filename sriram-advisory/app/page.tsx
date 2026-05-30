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
    <div style={{ background: "#fbfcf8", color: "#132033", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          padding: "120px 24px 90px",
          background:
            "radial-gradient(circle at top right, rgba(18, 132, 108, 0.14), transparent 28%), linear-gradient(180deg, #f7f8ee 0%, #fbfcf8 58%, #ffffff 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(19,32,51,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(19,32,51,0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(180deg, rgba(0,0,0,0.65), transparent)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(19,32,51,0.06)",
              border: "1px solid rgba(19,32,51,0.1)",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#12846c",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#12846c",
              }}
            >
              Workforce Intelligence for India
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.1fr) minmax(320px, 0.9fr)",
              gap: 36,
              alignItems: "end",
            }}
            className="home-hero-grid"
          >
            <div>
              <h1
                style={{
                  fontSize: "clamp(44px, 7vw, 92px)",
                  lineHeight: 0.96,
                  marginBottom: 24,
                  color: "#132033",
                }}
              >
                Career Intelligence
                <span style={{ display: "block", color: "#12846c" }}>for India</span>
              </h1>
              <p
                style={{
                  fontSize: "clamp(18px, 2.3vw, 24px)",
                  lineHeight: 1.6,
                  color: "#415066",
                  maxWidth: 760,
                  marginBottom: 20,
                }}
              >
                We help working professionals understand how technology, AI, automation,
                and market shifts are changing work and what to do next.
              </p>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#132033",
                  marginBottom: 36,
                }}
              >
                We don&apos;t guess your future. We model it.
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: "#5b6778",
                  maxWidth: 700,
                  lineHeight: 1.8,
                  marginBottom: 34,
                }}
              >
                Researching how work is changing across industries, professions, and
                regions in the age of AI.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link
                  href="/research"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15px 28px",
                    borderRadius: 12,
                    background: "#132033",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: 700,
                    border: "1px solid #132033",
                  }}
                >
                  Explore Research
                </Link>
                <Link
                  href="/assessments"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15px 28px",
                    borderRadius: 12,
                    background: "transparent",
                    color: "#132033",
                    textDecoration: "none",
                    fontWeight: 700,
                    border: "1px solid rgba(19,32,51,0.18)",
                  }}
                >
                  View Assessments
                </Link>
              </div>
            </div>

            <div
              style={{
                background: "#132033",
                color: "#eff4ef",
                borderRadius: 24,
                padding: 28,
                boxShadow: "0 22px 70px rgba(19,32,51,0.16)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#8be3d1",
                  marginBottom: 18,
                }}
              >
                Our Mission
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 18,
                }}
              >
                {MISSION_METRICS.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "18px 16px",
                      borderRadius: 16,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "clamp(26px, 4vw, 38px)",
                        fontWeight: 800,
                        lineHeight: 1,
                        color: "#ffffff",
                        marginBottom: 8,
                      }}
                    >
                      {item.value}
                    </div>
                    <div style={{ fontSize: 13, color: "#b3bfcb", lineHeight: 1.55 }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 24px 0", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            background: "#f2f5ef",
            border: "1px solid rgba(19,32,51,0.08)",
            borderRadius: 24,
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
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#12846c",
                  marginBottom: 8,
                }}
              >
                {item.label}
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: "#566274" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ marginBottom: 30 }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#12846c",
              }}
            >
              Research
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 54px)",
                color: "#132033",
                marginTop: 14,
                marginBottom: 14,
              }}
            >
              Research builds trust before products do.
            </h2>
            <p style={{ maxWidth: 740, fontSize: 17, lineHeight: 1.8, color: "#566274" }}>
              The category shift starts with visible research. Even before every report is
              launched, the site should show that Sriram Advisory studies workforce change
              across roles, sectors, and time horizons.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {RESEARCH_ITEMS.map((item) => (
              <div
                key={item}
                style={{
                  padding: 24,
                  borderRadius: 20,
                  background: "#f7f8ee",
                  border: "1px solid rgba(19,32,51,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#7b8697",
                    marginBottom: 12,
                  }}
                >
                  Coming Soon
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#132033", lineHeight: 1.3 }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#f7f8ee" }}>
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
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#12846c",
              }}
            >
              Industries We Track
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 50px)",
                color: "#132033",
                marginTop: 14,
                marginBottom: 14,
              }}
            >
              The site should not read like an IT-only business.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#566274", maxWidth: 560 }}>
              We analyze workforce trends across industries where automation, AI adoption,
              market saturation, and role redesign are reshaping professional careers.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 14,
            }}
          >
            {INDUSTRIES.map((industry) => (
              <div
                key={industry}
                style={{
                  padding: "18px 18px",
                  borderRadius: 16,
                  background: "#ffffff",
                  border: "1px solid rgba(19,32,51,0.08)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#132033",
                }}
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
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
              background: "#132033",
              color: "#eff4ef",
              borderRadius: 24,
              padding: 32,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#8be3d1",
              }}
            >
              SA-AIRS Framework
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                marginTop: 14,
                marginBottom: 14,
                color: "#ffffff",
              }}
            >
              SA-AIRS(TM) Workforce Intelligence Framework
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#b7c4cf" }}>
              Reframed from a single score into a platform for interpreting how work is
              changing across professions, sectors, and career stages.
            </p>
          </div>

          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#7b8697",
                marginBottom: 16,
              }}
            >
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
                    borderRadius: 18,
                    border: "1px solid rgba(19,32,51,0.08)",
                    background: "#fbfcf8",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "#f2f5ef",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      color: "#12846c",
                    }}
                  >
                    0{index + 1}
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "#132033" }}>
                    {dimension}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 22 }}>
              <Link
                href="/assessments"
                style={{
                  color: "#132033",
                  fontWeight: 700,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(19,32,51,0.24)",
                  paddingBottom: 2,
                }}
              >
                See current assessments
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#f7f8ee" }}>
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
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#12846c",
              }}
            >
              Workforce Intelligence
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 50px)",
                color: "#132033",
                marginTop: 14,
                marginBottom: 14,
              }}
            >
              Category first. Products next.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#566274" }}>
              The products can ship later. The market should still see the direction now:
              a company tracking how work changes across the Indian economy.
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: 24,
              border: "1px solid rgba(19,32,51,0.08)",
              padding: 28,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#7b8697",
                marginBottom: 18,
              }}
            >
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
                    borderBottom: "1px solid rgba(19,32,51,0.08)",
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#132033" }}>{item}</span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#12846c",
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            background: "linear-gradient(135deg, #132033 0%, #1d3047 100%)",
            color: "#eff4ef",
            borderRadius: 28,
            padding: "34px 30px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
            gap: 28,
          }}
          className="home-two-col"
        >
          <div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#8be3d1",
              }}
            >
              Flagship Report
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 50px)",
                color: "#ffffff",
                marginTop: 14,
                marginBottom: 14,
              }}
            >
              State of Indian Careers 2026
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#c3ced7" }}>
              India&apos;s annual workforce intelligence report. Visible now to establish
              category perception, even before launch.
            </p>
          </div>
          <div
            style={{
              alignSelf: "center",
              padding: 24,
              borderRadius: 22,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "6px 12px",
                borderRadius: 999,
                background: "rgba(139,227,209,0.12)",
                color: "#8be3d1",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Coming Soon
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: "#dbe3ea" }}>
              Annual report framing career change through automation exposure, labor
              demand, profession-level transitions, and sector-level shifts across India.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#fbfcf8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ marginBottom: 28 }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#12846c",
              }}
            >
              Existing Revenue Proof
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 50px)",
                color: "#132033",
                marginTop: 14,
                marginBottom: 14,
              }}
            >
              Guides and reports stay. Their position changes.
            </h2>
            <p style={{ maxWidth: 760, fontSize: 17, lineHeight: 1.8, color: "#566274" }}>
              These products remain live and visible. The shift is strategic: they move
              from being the brand itself to being evidence that the research is already
              useful in the market.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {PROOF_LINKS.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  border: "1px solid rgba(19,32,51,0.08)",
                  padding: 24,
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 800, color: "#132033", marginBottom: 10 }}>
                  {item.title}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#566274", marginBottom: 18 }}>
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  style={{
                    color: "#132033",
                    fontWeight: 700,
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(19,32,51,0.24)",
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
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#12846c",
            }}
          >
            Next Step
          </span>
          <h2
            style={{
              fontSize: "clamp(34px, 4.8vw, 58px)",
              color: "#132033",
              marginTop: 16,
              marginBottom: 18,
            }}
          >
            Understand work change with research first, products second.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: "#566274", marginBottom: 34 }}>
            Start with the research direction, then explore the current assessments,
            reports, and guides already available today.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/research"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 28px",
                borderRadius: 12,
                background: "#12846c",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid #12846c",
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
                borderRadius: 12,
                background: "transparent",
                color: "#132033",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid rgba(19,32,51,0.18)",
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
