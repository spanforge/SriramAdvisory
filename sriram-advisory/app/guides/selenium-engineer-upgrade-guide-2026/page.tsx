import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selenium Engineer Upgrade Guide 2026 | Sriram Advisory",
  description:
    "SA-AIRS™ score: 7.2/10. The complete Selenium-to-Playwright upgrade roadmap — 60-day plan, AI tool stack, GCC interview prep, and the path to ₹28–42 LPA. India 2026. ₹499.",
};

const PERSONAL_DELIVERY_NOTE =
  "After your payment, Sriram personally emails the guide to you. This is a manual send by design so the delivery stays transparent and human.";

const WHAT_INSIDE = [
  { icon: "📊", label: "SA-AIRS™ Score 7.2 — The Market Split Decoded", desc: "What 8,500 Selenium job postings vs 2,500 Playwright postings actually means — and why the 55% candidate gap is your window right now." },
  { icon: "⚙️", label: "Playwright vs Selenium: 5 Architectural Advantages", desc: "Auto-wait, multi-browser from one API, native mobile emulation, MCP/AI integration, and built-in tracing — explained for interview answers." },
  { icon: "🔄", label: "Complete Selenium → Playwright Translation Table", desc: "Every Selenium concept mapped to its Playwright equivalent. WebDriver, waits, locators, assertions, fixtures — none of your skills are wasted." },
  { icon: "🤖", label: "AI Tool Stack for ₹28+ LPA", desc: "GitHub Copilot, Playwright MCP, DeepEval, RAGAS, Applitools, LangSmith — what each does, what it costs, and the order to learn them." },
  { icon: "📅", label: "60-Day Upgrade Plan — Week by Week", desc: "Phase 1 (Days 1–30): migrate your Selenium suite. Phase 2 (Days 31–60): add the AI evaluation layer. Specific GitHub deliverables per week." },
  { icon: "💰", label: "Salary Reality 2026", desc: "₹18–28 LPA Playwright SDET. ₹26–42 LPA AI Quality Engineer. ₹42–60 LPA AI Quality Architect. Sourced from Naukri, Glassdoor, TestDino Q1 2026." },
  { icon: "🏢", label: "GCC Hiring Map + LinkedIn Search Strings", desc: "8 top GCCs actively hiring Playwright and AI Quality engineers in 2026 — what they're testing, why they need you, and the exact LinkedIn search strings to reach their recruiters." },
  { icon: "🎯", label: "GCC Interview Playbook", desc: "The 5-round structure, the AI system design answer framework, salary negotiation scripts — including the word-for-word answer to 'design a test framework for an AI application.'" },
  { icon: "📖", label: "Karthik's Case Study", desc: "Illustrative composite case study of a Selenium engineer who went from ₹16 LPA to ₹32 LPA at a Tier-1 GCC in 9 weeks — every decision, LinkedIn post, and portfolio deliverable documented." },
];

const FOR_YOU = [
  "You are a Selenium Automation Engineer with 2+ years of experience",
  "You have started seeing Playwright requirements in job postings and don't know where to start",
  "You are hitting a salary ceiling of ₹18–22 LPA and want to break through to GCC-level compensation",
  "You want a concrete 60-day plan — not a Playwright tutorial or generic upskilling advice",
  "You are targeting GCC roles and need to understand what AI Quality interviews actually test",
];

const NOT_FOR_YOU = [
  "You are already an SDET actively using Playwright and AI evaluation tools at a GCC",
  "You want a hands-on Playwright tutorial or beginner automation course",
  "You are a fresher looking for your first automation role",
  "You are outside India looking for a global QA market analysis",
];

const UPGRADE_PATHS = [
  { from: "Selenium Engineer", to: "Playwright SDET", feasibility: "9.5 / 10", timeline: "30–45 days", salary: "₹18–28 LPA", color: "#4f46e5" },
  { from: "Selenium Engineer", to: "AI Quality Engineer", feasibility: "8.2 / 10", timeline: "60–90 days", salary: "₹26–42 LPA", color: "#0891b2" },
  { from: "Selenium Engineer", to: "AI Quality Architect", feasibility: "7.0 / 10", timeline: "6–12 months", salary: "₹42–60 LPA", color: "#0d9268" },
  { from: "Selenium Engineer", to: "SDET (Full Stack Quality)", feasibility: "8.8 / 10", timeline: "45–60 days", salary: "₹24–36 LPA", color: "#d97706" },
];

const SALARY_BANDS = [
  { role: "Selenium Automation Engineer", it: "₹10–16 LPA", gcc: "₹16–22 LPA", note: "Stable but salary ceiling approaching", color: "#9aa8c0" },
  { role: "Playwright Automation Engineer", it: "₹12–18 LPA", gcc: "₹18–28 LPA", note: "15–25% premium over Selenium at GCCs", color: "#4f46e5" },
  { role: "SDET (Full Stack Quality)", it: "₹16–24 LPA", gcc: "₹24–36 LPA", note: "Strong demand, owns quality end to end", color: "#0891b2" },
  { role: "AI Quality Engineering", it: "₹18–26 LPA", gcc: "₹26–42 LPA", note: "Playwright + DeepEval + RAGAS required", color: "#0d9268" },
  { role: "AI Quality Architect", it: "₹28–40 LPA", gcc: "₹42–60 LPA", note: "Rare profile; top GCC bands verified", color: "#7c3aed" },
];

export default function SeleniumEngineerUpgradeGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #0a0a2e 0%, #1e1b4b 50%, #312e81 100%)",
        paddingTop: 100, paddingBottom: 90, textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 20px", position: "relative" }}>
          {/* badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(234,179,8,0.2)", border: "1px solid rgba(234,179,8,0.45)",
              borderRadius: 20, padding: "6px 16px",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fde68a",
            }}>
              SA-AIRS™ Score: 7.2 / 10 — Moderate-High Exposure
            </span>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(99,102,241,0.22)", border: "1px solid rgba(99,102,241,0.45)",
              borderRadius: 20, padding: "6px 16px",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c7d2fe",
            }}>
              India 2026 Edition
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(34px, 5.5vw, 64px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.08, marginBottom: 22, letterSpacing: "-0.03em",
          }}>
            Selenium Engineer<br />
            <span style={{ color: "#a5b4fc" }}>Upgrade Guide 2026</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2.2vw, 20px)", color: "rgba(199,210,254,0.85)",
            lineHeight: 1.65, maxWidth: 640, margin: "0 auto 16px",
          }}>
            Selenium still has 8,500+ jobs. Playwright has 2,500 — and 180% growth. The engineers who upgrade
            now will command ₹28–42 LPA at GCCs. This is the complete 60-day roadmap.
          </p>

          <p style={{
            fontSize: 15, color: "rgba(165,180,252,0.65)", fontStyle: "italic", marginBottom: 44,
          }}>
            Your Selenium skills are a foundation, not a liability.
          </p>

          {/* PRICE + BUY */}
          <div className="hero-price-box" style={{
            background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 20,
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>₹499</span>
            </div>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#a5b4fc", marginBottom: 20, display: "block",
            }}>Personal Email Delivery</span>

            <CashfreeCheckout
              productName="Selenium Engineer Upgrade Guide 2026"
              amount={499}
              accentColor="#4f46e5"
              buttonLabel="Get the Guide Now — ₹499 →"
              buttonStyle={{
                fontSize: 17, fontWeight: 700, padding: "16px 36px", borderRadius: 10,
                background: "#4f46e5", color: "#ffffff",
                border: "none", cursor: "pointer", letterSpacing: "0.01em",
                width: "100%", minWidth: 280,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(165,180,252,0.5)", marginTop: 12 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      {/* ── THE 7.2 SCORE EXPLAINED ── */}
      <section style={{ background: "#ffffff", padding: "88px 20px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>

          {/* Score visualisation */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#d97706", display: "block", marginBottom: 16,
            }}>SA-AIRS™ Exposure Score</span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 24 }}>
              <span style={{ fontSize: "clamp(64px, 10vw, 96px)", fontWeight: 900, color: "#d97706", lineHeight: 1, letterSpacing: "-0.04em" }}>7.2</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#d97706", textTransform: "uppercase", letterSpacing: "0.08em" }}>Moderate-High Exposure</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>The most deceptively comfortable high-risk role in Indian IT</div>
              </div>
            </div>
            {/* score bar */}
            <div style={{ maxWidth: 480, margin: "0 auto", background: "#f0f4f8", borderRadius: 8, height: 12, overflow: "hidden" }}>
              <div style={{ width: "72%", height: "100%", background: "linear-gradient(90deg, #fbbf24, #d97706)", borderRadius: 8 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 480, margin: "6px auto 0", fontSize: 11, color: "#9aa8c0" }}>
              <span>Low Risk</span><span>High Exposure</span>
            </div>
          </div>

          {/* Dark statement card */}
          <div className="qa-score-card-pad" style={{
            background: "linear-gradient(135deg, #0a0a2e 0%, #1e1b4b 100%)",
            borderRadius: 20, textAlign: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0, opacity: 0.06,
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "24px 24px", pointerEvents: "none",
            }} />
            <p style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#a5b4fc", marginBottom: 20, position: "relative",
            }}>What this score actually means</p>
            <h2 style={{
              fontSize: "clamp(20px, 3.2vw, 38px)", fontWeight: 900, color: "#ffffff",
              lineHeight: 1.2, letterSpacing: "-0.02em", position: "relative", marginBottom: 0,
            }}>
              You have a job today. The question is whether<br />
              <span style={{
                background: "linear-gradient(90deg, #a5b4fc, #c7d2fe)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>that same job exists in 18 months.</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(199,210,254,0.7)", marginTop: 20, lineHeight: 1.7, position: "relative" }}>
              Companies running legacy enterprise systems still need Selenium engineers — paying ₹12–18 LPA.<br />
              GCCs, product companies, and fintechs deploying AI features need Playwright engineers — paying ₹22–42 LPA.<br />
              Both groups are hiring today. Only one group is growing.
            </p>
          </div>

          {/* 3 stats */}
          <div className="stats-grid-3" style={{
            background: "#e8eef8",
            borderRadius: 14, overflow: "hidden", marginTop: 28,
          }}>
            {[
              { stat: "8,500+", label: "Selenium jobs on Naukri (Q1 2026)" },
              { stat: "~180%", label: "Playwright job growth YoY (estimated)" },
              { stat: "₹28 LPA+", label: "AI Quality Engineering roles at top GCCs" },
            ].map((s) => (
              <div key={s.stat} style={{ background: "#f8faff", padding: "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, color: "#0a1628", letterSpacing: "-0.03em" }}>{s.stat}</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 6, lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: 16, color: "#5a6a8a", lineHeight: 1.8, textAlign: "center", marginTop: 32,
          }}>
            Selenium is not dying tomorrow.<br />
            But the salary ceiling is real — and{" "}
            <strong style={{ color: "#0a1628" }}>the engineers who upgrade now will own the premium side of the market.</strong>
          </p>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section style={{ background: "#f5f3ff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#4f46e5", display: "block", marginBottom: 12,
            }}>Inside the Guide</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              Everything You Need to Make the Move
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {WHAT_INSIDE.map((item) => (
              <div key={item.label} style={{
                background: "#ffffff", border: "1px solid #c7d2fe",
                borderRadius: 14, padding: "24px 26px",
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 8 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SALARY REALITY ── */}
      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#4f46e5", display: "block", marginBottom: 12,
            }}>Salary Reality 2026</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              Where Each Upgrade Level Takes You
            </h2>
            <p style={{ fontSize: 14, color: "#9aa8c0", marginTop: 10 }}>
              Source: Naukri, Glassdoor India, AmbitionBox, TestDino Q1–Q2 2026
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {SALARY_BANDS.map((s) => (
              <div key={s.role} style={{
                display: "flex", alignItems: "center", gap: 20,
                background: "#f8faff", border: "1px solid #e8eef8",
                borderRadius: 12, padding: "18px 24px", flexWrap: "wrap",
              }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#0a1628" }}>{s.role}</div>
                  <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>{s.note}</div>
                </div>
                <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#5a6a8a" }}>{s.it}</div>
                    <div style={{ fontSize: 11, color: "#9aa8c0", textTransform: "uppercase", letterSpacing: "0.06em" }}>IT Services</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: s.color }}>{s.gcc}</div>
                    <div style={{ fontSize: 11, color: "#9aa8c0", textTransform: "uppercase", letterSpacing: "0.06em" }}>GCC / Product</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPGRADE PATHS ── */}
      <section style={{ padding: "72px 20px", background: "#f5f3ff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#4f46e5", display: "block", marginBottom: 12,
            }}>Where You Can Go</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              Four Upgrade Paths From Selenium
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 12 }}>
              The guide covers all four in detail — with timelines, skill bridges, and the exact first step.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {UPGRADE_PATHS.map((p) => (
              <div key={p.to} style={{
                display: "flex", alignItems: "center", gap: 20,
                background: "#ffffff", border: "1px solid #c7d2fe",
                borderRadius: 12, padding: "20px 24px", flexWrap: "wrap",
              }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#0a1628" }}>{p.to}</div>
                  <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>Timeline: {p.timeline}</div>
                </div>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: p.color }}>{p.feasibility}</div>
                    <div style={{ fontSize: 11, color: "#9aa8c0", textTransform: "uppercase", letterSpacing: "0.06em" }}>Feasibility</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: p.color }}>{p.salary}</div>
                    <div style={{ fontSize: 11, color: "#9aa8c0", textTransform: "uppercase", letterSpacing: "0.06em" }}>GCC Salary</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", marginBottom: 22 }}>This guide is for you if…</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {FOR_YOU.map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#4f46e5", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 15, color: "#2d3f5e", lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", marginBottom: 22 }}>This guide is NOT for you if…</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {NOT_FOR_YOU.map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#dc2626", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✕</span>
                  <span style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY TEASER ── */}
      <section style={{ padding: "72px 20px", background: "#f5f3ff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div className="case-study-card-pad" style={{
            background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
            border: "1.5px solid #c7d2fe", borderRadius: 20,
          }}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#4f46e5", display: "block", marginBottom: 16,
            }}>Illustrative Case Study — Included in the Guide</span>
            <h3 style={{ fontSize: "clamp(20px, 2.8vw, 30px)", fontWeight: 800, color: "#0a1628", marginBottom: 16, letterSpacing: "-0.02em" }}>
              From ₹16 LPA to ₹32 LPA at a Tier-1 GCC in 9 weeks
            </h3>
            <p style={{ fontSize: 16, color: "#2d3a5e", lineHeight: 1.75, marginBottom: 24 }}>
              The guide includes a granular, week-by-week composite case study — based on common market transition
              patterns — of a Senior Automation Engineer with 7 years of Selenium Java experience who transitioned
              to an SDET AI Quality role at a top-tier GCC. Every decision, every LinkedIn post, every portfolio
              deliverable is documented. This is an illustrative composite, not a description of an identifiable individual.
            </p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {[
                { label: "Starting salary", val: "₹16 LPA" },
                { label: "Final offer", val: "₹32 LPA" },
                { label: "Time taken", val: "9 weeks" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#4f46e5" }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "#5a6a8a", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 60-DAY PLAN TEASER ── */}
      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#4f46e5", display: "block", marginBottom: 12,
            }}>The Plan</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              60 Days. Two Phases. Specific Deliverables.
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 12, maxWidth: 560, margin: "12px auto 0" }}>
              Not a vague &apos;learn Playwright&apos; suggestion. Week-by-week deliverables that become your portfolio —
              and your portfolio is your credential.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                phase: "Phase 1 · Days 1–30",
                title: "Migrate Your Selenium Skills",
                color: "#4f46e5",
                bg: "#eef2ff",
                border: "#c7d2fe",
                deliverable: "Public GitHub repo with 20+ Playwright tests migrated from Selenium, running in CI/CD via GitHub Actions, with a README explaining the architectural differences.",
                items: [
                  "Week 1: Install Playwright, write first 5 tests",
                  "Week 2: Role-based locators vs XPath",
                  "Week 3: GitHub Actions CI pipeline + pytest fixtures",
                  "Week 4: Trace viewer, push to GitHub, LinkedIn post",
                ],
              },
              {
                phase: "Phase 2 · Days 31–60",
                title: "Add the AI Layer",
                color: "#0d9268",
                bg: "#f0fdf8",
                border: "#bbf7d0",
                deliverable: "AI-augmented test suite combining Playwright UI tests + DeepEval LLM quality evaluation + a 4-page AI Testing Framework design document.",
                items: [
                  "Week 5: GitHub Copilot — generate tests from comments",
                  "Week 6: DeepEval — LLM answer relevancy + hallucination",
                  "Week 7: RAGAS — RAG pipeline faithfulness evaluation",
                  "Week 8: Framework design document + targeted applications",
                ],
              },
            ].map((phase) => (
              <div key={phase.phase} style={{
                background: phase.bg, border: `1.5px solid ${phase.border}`,
                borderRadius: 16, padding: "28px 28px",
              }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: phase.color, display: "block", marginBottom: 10,
                }}>{phase.phase}</span>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", marginBottom: 16 }}>{phase.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {phase.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: phase.color, fontWeight: 700, flexShrink: 0 }}>→</span>
                      <span style={{ fontSize: 14, color: "#2d3f5e", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{
                  background: "rgba(255,255,255,0.6)", border: `1px solid ${phase.border}`,
                  borderRadius: 10, padding: "14px 16px",
                }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: phase.color, textTransform: "uppercase", letterSpacing: "0.08em" }}>Phase Deliverable</span>
                  <p style={{ fontSize: 13, color: "#2d3f5e", lineHeight: 1.6, marginTop: 8, marginBottom: 0 }}>{phase.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{
        background: "linear-gradient(135deg, #0a0a2e 0%, #1e1b4b 100%)",
        padding: "80px 20px", textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            The market is splitting.<br />
            <span style={{ color: "#a5b4fc" }}>Which side are you on?</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(199,210,254,0.7)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 40px" }}>
            Every Playwright engineer at a GCC today was a Selenium engineer who decided
            to upgrade — not next year, not after a certification, but this weekend.
          </p>

          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>₹499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a5b4fc", marginBottom: 20 }}>
              Personal Email Delivery
            </span>
            <CashfreeCheckout
              productName="Selenium Engineer Upgrade Guide 2026"
              amount={499}
              accentColor="#4f46e5"
              buttonLabel="Get the Guide — ₹499 →"
              buttonStyle={{
                fontSize: 16, fontWeight: 700, padding: "16px 40px", borderRadius: 10,
                background: "#4f46e5", color: "#ffffff",
                border: "none", cursor: "pointer", letterSpacing: "0.01em",
                minWidth: 260,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(165,180,252,0.4)", marginTop: 14 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
