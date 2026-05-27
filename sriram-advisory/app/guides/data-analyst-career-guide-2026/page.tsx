import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analyst Career Guide 2026 | Sriram Advisory",
  description:
    "SA-AIRS™ score: 7.8/10. Reporting roles are being automated. Get the 90-day transformation blueprint, 3 sector paths (SaaS/FinTech/E-Commerce), SQL mastery progression, salary data, and a portfolio framework built for India's data analyst job market. ₹299.",
};

const PERSONAL_DELIVERY_NOTE =
  "After your payment, Sriram personally emails the guide to you. This is a manual send by design so the delivery stays transparent and human.";

const WHAT_INSIDE = [
  {
    icon: "📊",
    label: "SA-AIRS™ Score 7.8 — Decoded",
    desc: "Exactly what this score means for reporting analysts, which tasks are being automated (routine dashboards, first-pass EDA, standard data cleaning), and what the multi-platform job posting review reveals about analyst hiring in India.",
  },
  {
    icon: "🗺️",
    label: "The AI Risk Map — Analyst Edition",
    desc: "Reporting Analyst: HIGH automation risk. Product Analyst: MODERATE. Analytics Engineer: LOW. Strategy Analyst: VERY LOW. Know where your current role sits — and exactly where you need to move.",
  },
  {
    icon: "🏗️",
    label: "90-Day Transformation Blueprint",
    desc: "Phase-by-phase plan: Foundation (Days 1–30), Technical Depth (Days 31–60), Strategy & Applications (Days 61–90). Daily 50-minute habits and 10-hour weekly investment breakdown. Milestones for 90-day and 180-day timelines.",
  },
  {
    icon: "🛤️",
    label: "3 Sector-Specific Paths",
    desc: "SaaS (~48% of reviewed postings), FinTech (~22%), and E-Commerce (~18%) — each with core metrics, required skills, salary ranges, entry strategy, and the exact portfolio projects that get you noticed in that sector.",
  },
  {
    icon: "💻",
    label: "SQL Mastery: Foundation → Advanced",
    desc: "8-week Foundation track (SELECT, JOIN, GROUP BY) and 12-week Advanced track (CTEs, window functions, query optimisation). Progression path across LeetCode, DataLemur, Mode Analytics. Includes a real production-quality cohort retention query.",
  },
  {
    icon: "💰",
    label: "Salary Reality 2026",
    desc: "From ₹24–32L (entry SaaS) to ₹70–100L (senior growth-stage). Company-tier breakdowns: mid-market, growth-stage startup, top-tier/FAANG. What portfolio levels look like at each salary band — with MEDIUM-confidence sourcing notes.",
  },
  {
    icon: "🤖",
    label: "AI and the Future of Your Role",
    desc: "Three planning scenarios (Rapid / Gradual / Regulation-Limited adoption) with timelines and your move for each. Six actions that protect your career regardless of which scenario unfolds — including how to use Claude and ChatGPT as a daily productivity multiplier.",
  },
  {
    icon: "🎯",
    label: "Portfolio & Personal Brand Framework",
    desc: "4 annotated project brief templates (SaaS CAC, SaaS Cohort, FinTech Fraud, E-Commerce Attribution). GitHub README template. LinkedIn headline and posting strategy. What strong vs weak analyst profiles look like — side by side.",
  },
];

const FOR_YOU = [
  "You are a Reporting Analyst or BI Analyst who feels your dashboards are being automated",
  "You want to break into data analytics from finance, operations, or a non-technical background",
  "You are in a tier-2 city and want to target remote SaaS or FinTech analyst roles",
  "You want a concrete 90-day plan — not generic advice to 'learn Python and statistics'",
  "You have 8–15 hours per week and want to know exactly where to invest them",
];

const NOT_FOR_YOU = [
  "You are already a Product Analyst or Analytics Engineer actively building with Python and dbt",
  "You want a technical ML or data science course — this is a career strategy guide, not a coding course",
  "You are outside India and want a global analyst market analysis",
];

const SECTOR_PATHS = [
  {
    sector: "SaaS Analytics",
    desc: "Most jobs, clearest entry path, high remote work prevalence. Core metrics: CAC, LTV, churn, cohort retention.",
    feasibility: "9.1 / 10",
    timeline: "4–6 months",
    salary: "₹24–50L",
    color: "#2563eb",
  },
  {
    sector: "E-Commerce Analytics",
    desc: "Most accessible entry point. Metrics are intuitive (conversion, AOV, attribution). Prevalent in tier-2 cities.",
    feasibility: "8.5 / 10",
    timeline: "3–5 months",
    salary: "₹22–42L",
    color: "#1d4ed8",
  },
  {
    sector: "FinTech Analytics",
    desc: "Highest salary ceiling, steepest path. Python often required. Risk, fraud, and credit metrics are core.",
    feasibility: "7.2 / 10",
    timeline: "6–9 months",
    salary: "₹26–60L",
    color: "#1e3a8a",
  },
];

export default function DataAnalystCareerGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #050d2e 0%, #0a1854 50%, #1338a8 100%)",
          paddingTop: 100,
          paddingBottom: 90,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
            padding: "0 20px",
            position: "relative",
          }}
        >
          {/* badges */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginBottom: 28,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(220,38,38,0.2)",
                border: "1px solid rgba(220,38,38,0.45)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fca5a5",
              }}
            >
              SA-AIRS™ Score: 7.8 / 10 — Moderate-High Exposure
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(37,99,235,0.18)",
                border: "1px solid rgba(37,99,235,0.45)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#93c5fd",
              }}
            >
              India 2026 Edition · v1.0
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(34px, 5.5vw, 62px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              marginBottom: 22,
              letterSpacing: "-0.03em",
            }}
          >
            Data Analyst
            <br />
            <span style={{ color: "#93c5fd" }}>Career Guide 2026</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 2.2vw, 21px)",
              color: "rgba(180,210,255,0.85)",
              lineHeight: 1.65,
              maxWidth: 640,
              margin: "0 auto 16px",
            }}
          >
            Reporting roles are being automated. This guide gives you the
            90-day blueprint to move from routine dashboards to a product or
            strategy analyst role — with sector paths, SQL mastery, salary data,
            and a portfolio framework built for India&apos;s market.
          </p>

          <p
            style={{
              fontSize: 15,
              color: "rgba(147,197,253,0.6)",
              fontStyle: "italic",
              marginBottom: 44,
            }}
          >
            Not adapted from US career content. Every insight is calibrated for
            the Indian data analytics job market.
          </p>

          {/* PRICE + BUY */}
          <div
            className="hero-price-box"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontSize: 22,
                  color: "rgba(147,197,253,0.4)",
                  textDecoration: "line-through",
                  fontWeight: 500,
                }}
              >
                ₹499
              </span>
              <span
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                }}
              >
                ₹299
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#93c5fd",
                marginBottom: 20,
              }}
            >
              Launch Price · Personal Email Delivery
            </span>

            <CashfreeCheckout
              productName="Data Analyst Career Guide 2026"
              amount={299}
              accentColor="#2563eb"
              buttonLabel="Get the Guide Now — ₹299 →"
              buttonStyle={{
                fontSize: 17,
                fontWeight: 700,
                padding: "16px 36px",
                borderRadius: 10,
                background: "#2563eb",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                width: "100%",
                minWidth: 280,
              }}
            />
            <p
              style={{
                fontSize: 13,
                color: "rgba(147,197,253,0.45)",
                marginTop: 12,
              }}
            >
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      {/* ── THE 7.8 SCORE EXPLAINED ── */}
      <section style={{ background: "#ffffff", padding: "88px 20px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          {/* Score visualisation */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#dc2626",
                display: "block",
                marginBottom: 16,
              }}
            >
              SA-AIRS™ Exposure Score
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  fontSize: "clamp(64px, 10vw, 96px)",
                  fontWeight: 900,
                  color: "#dc2626",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                7.8
              </span>
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#dc2626",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Moderate-High Exposure
                </div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>
                  Reporting roles at highest risk — product and strategy roles are safe
                </div>
              </div>
            </div>
            <div
              style={{
                maxWidth: 480,
                margin: "0 auto",
                background: "#f0f4f8",
                borderRadius: 8,
                height: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "78%",
                  height: "100%",
                  background: "linear-gradient(90deg, #fbbf24, #dc2626)",
                  borderRadius: 8,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: 480,
                margin: "6px auto 0",
                fontSize: 11,
                color: "#9aa8c0",
              }}
            >
              <span>Low Risk</span>
              <span>High Exposure</span>
            </div>
          </div>

          {/* Dark statement card */}
          <div
            className="qa-score-card-pad"
            style={{
              background:
                "linear-gradient(135deg, #050d2e 0%, #0a1854 100%)",
              borderRadius: 20,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.06,
                backgroundImage:
                  "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                pointerEvents: "none",
              }}
            />
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#93c5fd",
                marginBottom: 20,
                position: "relative",
              }}
            >
              What this score actually means
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 40px)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                position: "relative",
                marginBottom: 0,
              }}
            >
              Routine reporting is being automated.
              <br />
              The demand is shifting to{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #60a5fa, #93c5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                insight and judgment.
              </span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(147,197,253,0.75)",
                marginTop: 20,
                lineHeight: 1.7,
                position: "relative",
              }}
            >
              ~89% of reviewed job postings require SQL. ~72% require Tableau or
              Power BI. ~84% mention communication skills — and it&apos;s growing.
              <br />
              The gap between a dashboard builder and a decision-enabler is widening fast.
            </p>
          </div>

          {/* 3 stats */}
          <div
            className="stats-grid-3"
            style={{
              background: "#e8eef8",
              borderRadius: 14,
              overflow: "hidden",
              marginTop: 28,
            }}
          >
            {[
              {
                stat: "89%",
                label:
                  "of reviewed analyst postings explicitly required SQL — the single highest-confidence signal",
              },
              {
                stat: "90 Days",
                label:
                  "to complete the full transformation blueprint with 10–15 hours per week",
              },
              {
                stat: "₹50L+",
                label:
                  "mid-level salary at growth-stage SaaS — achievable in 3–4 years with the right specialisation",
              },
            ].map((s) => (
              <div
                key={s.stat}
                style={{
                  background: "#eff6ff",
                  padding: "28px 20px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(22px, 3vw, 34px)",
                    fontWeight: 900,
                    color: "#0a1628",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.stat}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#5a6a8a",
                    marginTop: 6,
                    lineHeight: 1.5,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: 16,
              color: "#5a6a8a",
              lineHeight: 1.8,
              textAlign: "center",
              marginTop: 32,
            }}
          >
            The role isn&apos;t disappearing — it&apos;s being redefined.
            <br />
            <strong style={{ color: "#0a1628" }}>
              Analysts who move toward product thinking and business judgment
              will own the next tier. Those who stay in reporting won&apos;t.
            </strong>
          </p>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section style={{ background: "#eff6ff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#2563eb",
                display: "block",
                marginBottom: 12,
              }}
            >
              Inside the Guide
            </span>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 34px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              Everything You Need to Make the Move
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {WHAT_INSIDE.map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#ffffff",
                  border: "1px solid #bfdbfe",
                  borderRadius: 14,
                  padding: "24px 26px",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>
                  {item.icon}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#0a1628",
                    marginBottom: 8,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#5a6a8a",
                    lineHeight: 1.65,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 SECTOR PATHS ── */}
      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#2563eb",
                display: "block",
                marginBottom: 12,
              }}
            >
              Where You Can Go
            </span>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 34px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              The 3 Sector Paths — Covered in Full Detail
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 12 }}>
              Each path includes core metrics, required skills, portfolio
              projects, hiring companies, and salary ranges specific to India.
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            {SECTOR_PATHS.map((p) => (
              <div
                key={p.sector}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: "#eff6ff",
                  border: "1px solid #bfdbfe",
                  borderRadius: 12,
                  padding: "20px 24px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#0a1628",
                    }}
                  >
                    {p.sector}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#5a6a8a",
                      marginTop: 4,
                    }}
                  >
                    {p.desc}
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: 20, flexWrap: "wrap" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: p.color,
                      }}
                    >
                      {p.feasibility}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#9aa8c0",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Feasibility
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#9aa8c0",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: 2,
                      }}
                    >
                      Time to Qualify
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: p.color,
                      }}
                    >
                      {p.timeline}
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: p.color,
                      }}
                    >
                      {p.salary}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#9aa8c0",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      India Salary Range
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ padding: "72px 20px", background: "#fafbff" }}>
        <div
          style={{
            maxWidth: 840,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: "#0a1628",
                marginBottom: 22,
              }}
            >
              This guide is for you if…
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {FOR_YOU.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#2563eb",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      color: "#2d3f5e",
                      lineHeight: 1.55,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: "#0a1628",
                marginBottom: 22,
              }}
            >
              This guide is NOT for you if…
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {NOT_FOR_YOU.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#dc2626",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    ✕
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      color: "#5a6a8a",
                      lineHeight: 1.55,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 90-DAY PLAN TEASER ── */}
      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            className="case-study-card-pad"
            style={{
              background:
                "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
              border: "1.5px solid #bfdbfe",
              borderRadius: 20,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#2563eb",
                display: "block",
                marginBottom: 16,
              }}
            >
              Included in the Guide
            </span>
            <h3
              style={{
                fontSize: "clamp(20px, 2.8vw, 30px)",
                fontWeight: 800,
                color: "#0a1628",
                marginBottom: 16,
                letterSpacing: "-0.02em",
              }}
            >
              Your 90-Day Blueprint — Phase by Phase
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "#1e3a5c",
                lineHeight: 1.75,
                marginBottom: 24,
              }}
            >
              The guide includes a daily 50-minute habit framework and a
              10-hour weekly investment breakdown — calibrated for both
              full-time job seekers (90 days) and working professionals (180
              days). Specific courses, GitHub workflows, LinkedIn posting
              strategy, and application timing. No vague advice.
            </p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {[
                { label: "Phase 1 (Days 1–30)", val: "Foundation + Sector" },
                {
                  label: "Phase 2 (Days 31–60)",
                  val: "SQL Depth + Project #1",
                },
                {
                  label: "Phase 3 (Days 61–90)",
                  val: "Portfolio + Apply",
                },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 900,
                      color: "#2563eb",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#5a6a8a",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #050d2e 0%, #0a1854 100%)",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            The window is open.
            <br />
            <span style={{ color: "#93c5fd" }}>It is narrowing fast.</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(147,197,253,0.75)",
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 480,
              margin: "0 auto 40px",
            }}
          >
            Every Product Analyst working at a SaaS company today started
            exactly where you are. The difference is they chose a sector,
            shipped a portfolio project, and applied — this week, not next
            quarter.
          </p>

          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 4,
              }}
            >
              <span
                style={{
                  fontSize: 18,
                  color: "rgba(147,197,253,0.4)",
                  textDecoration: "line-through",
                  fontWeight: 500,
                }}
              >
                ₹499
              </span>
              <span
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                }}
              >
                ₹299
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#93c5fd",
                marginBottom: 20,
              }}
            >
              Launch Price · Personal Email Delivery
            </span>
            <CashfreeCheckout
              productName="Data Analyst Career Guide 2026"
              amount={299}
              accentColor="#2563eb"
              buttonLabel="Get the Guide — ₹299 →"
              buttonStyle={{
                fontSize: 16,
                fontWeight: 700,
                padding: "16px 40px",
                borderRadius: 10,
                background: "#2563eb",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                minWidth: 260,
              }}
            />
            <p
              style={{
                fontSize: 13,
                color: "rgba(147,197,253,0.4)",
                marginTop: 14,
              }}
            >
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
