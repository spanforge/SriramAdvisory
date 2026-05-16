import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QA Engineer Survival Guide 2026 | Sriram Advisory",
  description:
    "SA-AIRS™ score: 9.5/10. The Manual QA Engineer's complete guide to surviving AI — tool stack, 90-day plan, GCC interview prep, and the path to ₹48 LPA. India 2026. ₹199.",
};

const WHAT_INSIDE = [
  { icon: "📊", label: "SA-AIRS™ Score 9.5 — Decoded", desc: "Exactly what this score means, what is being automated today, and what the data from Wipro and TCS actually shows about QA headcount." },
  { icon: "🛡️", label: "Your Survival Zone", desc: "The 4 zones of human-critical QA work that AI cannot touch — non-deterministic testing, risk architecture, quality governance, and edge case imagination." },
  { icon: "🧰", label: "AI Testing Tool Stack", desc: "Tier-by-tier breakdown: testRigor, Applitools, RAGAS, DeepEval, Playwright — what to learn first, what's free, and a weekend learning path to get started." },
  { icon: "📅", label: "90-Day Transition Plan", desc: "Week-by-week deliverables across 3 phases. Not vague advice — specific GitHub projects, LinkedIn rewrites, and GCC applications with exact timelines." },
  { icon: "💰", label: "Salary Reality 2026", desc: "From ₹3.5 LPA (manual QA L1) to ₹42–60 LPA (AI Quality Architect). The actual numbers from GCCs — with the companies actively hiring and what they test." },
  { icon: "🏢", label: "GCC Hiring Map", desc: "10 GCCs actively hiring AI Quality professionals in 2026 — Salesforce, JPMorgan, Goldman Sachs, Amazon, Microsoft — with what they're testing and why they need you." },
  { icon: "🎯", label: "GCC Interview Playbook", desc: "The 5 interview round types, a template answer for the most common QA architecture question, 8 STAR stories to prepare, and Python coding round prep." },
  { icon: "🔗", label: "LinkedIn Repositioning", desc: "Before/after headline rewrites, an About section template, experience section reframes — built specifically for GCC recruiter eyes scanning for AI Quality." },
  { icon: "📖", label: "Priya's Case Study", desc: "A granular reconstruction of a QA Lead who went from ₹14 LPA at Wipro to ₹42 LPA at Goldman Sachs GCC in 4.5 months — with every step documented." },
];

const FOR_YOU = [
  "You are a Manual QA Engineer or QA Lead in Indian IT services",
  "Your team has started automation or AI tooling and you feel behind",
  "You have tried applying to new QA roles and the market feels flat",
  "You want a concrete 90-day plan — not generic upskilling advice",
  "You are targeting a GCC role and need to understand what they actually interview for",
];

const NOT_FOR_YOU = [
  "You are already an SDET or Quality Engineer actively using AI testing tools",
  "You want a technical course on Selenium or test automation fundamentals",
  "You are outside India looking for a global QA market analysis",
];

const PIVOT_PATHS = [
  { from: "Manual QA", to: "AI Quality Architect", feasibility: "9.2 / 10", timeline: "12–18 months", salary: "₹42–60 LPA", color: "#0d9268" },
  { from: "Manual QA", to: "Application Security Engineer", feasibility: "7.8 / 10", timeline: "6–9 months", salary: "₹42–68 LPA", color: "#1a4fd6" },
  { from: "Manual QA", to: "Data Quality Analyst", feasibility: "7.4 / 10", timeline: "6–9 months", salary: "₹28–45 LPA", color: "#7c3aed" },
  { from: "Manual QA", to: "DevOps / Platform Engineer", feasibility: "6.8 / 10", timeline: "9–12 months", salary: "₹32–55 LPA", color: "#d97706" },
];

export default function QAEngineerSurvivalGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #071a14 0%, #0d3322 50%, #0f5c3a 100%)",
        paddingTop: 100, paddingBottom: 90, textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 20px", position: "relative" }}>
          {/* badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(220,38,38,0.2)", border: "1px solid rgba(220,38,38,0.45)",
              borderRadius: 20, padding: "6px 16px",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fca5a5",
            }}>
              SA-AIRS™ Score: 9.5 / 10 — High Exposure
            </span>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(13,146,104,0.18)", border: "1px solid rgba(13,146,104,0.45)",
              borderRadius: 20, padding: "6px 16px",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6ee7b7",
            }}>
              India 2026 Edition
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 5.5vw, 66px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.08, marginBottom: 22, letterSpacing: "-0.03em",
          }}>
            QA Engineer<br />
            <span style={{ color: "#6ee7b7" }}>Survival Guide 2026</span>
          </h1>

          <p style={{
            fontSize: "clamp(17px, 2.2vw, 21px)", color: "rgba(180,240,220,0.85)",
            lineHeight: 1.65, maxWidth: 620, margin: "0 auto 16px",
          }}>
            Manual QA is the highest-exposure role in Indian IT. This guide tells you exactly what&apos;s
            being automated, what isn&apos;t, and the precise steps to go from ₹14 LPA to ₹42+ LPA as
            an AI Quality Architect at a GCC.
          </p>

          <p style={{
            fontSize: 15, color: "rgba(110,231,183,0.65)", fontStyle: "italic", marginBottom: 44,
          }}>
            The window is 12–18 months. Not 5 years.
          </p>

          {/* PRICE + BUY */}
          <div style={{
            display: "inline-flex", flexDirection: "column", alignItems: "center",
            background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 20, padding: "32px 48px", gap: 6,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 22, color: "rgba(180,230,210,0.4)", textDecoration: "line-through", fontWeight: 500 }}>₹299</span>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>₹199</span>
            </div>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#6ee7b7", marginBottom: 20,
            }}>Launch Price · Instant Digital Delivery</span>

            <CashfreeCheckout
              productName="QA Engineer Survival Guide 2026"
              amount={199}
              accentColor="#0d9268"
              buttonLabel="Get the Guide Now — ₹199 →"
              buttonStyle={{
                fontSize: 17, fontWeight: 700, padding: "16px 36px", borderRadius: 10,
                background: "#0d9268", color: "#ffffff",
                border: "none", cursor: "pointer", letterSpacing: "0.01em",
                width: "100%", minWidth: 280,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(180,230,210,0.5)", marginTop: 12 }}>
              Secure payment via Cashfree · Instant PDF delivery
            </p>
          </div>
        </div>
      </section>

      {/* ── THE 9.5 SCORE EXPLAINED ── */}
      <section style={{ background: "#ffffff", padding: "88px 20px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>

          {/* Score visualisation */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#dc2626", display: "block", marginBottom: 16,
            }}>SA-AIRS™ Exposure Score</span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 24 }}>
              <span style={{ fontSize: "clamp(64px, 10vw, 96px)", fontWeight: 900, color: "#dc2626", lineHeight: 1, letterSpacing: "-0.04em" }}>9.5</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.08em" }}>High Exposure</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>Highest of any role in Indian IT</div>
              </div>
            </div>
            {/* score bar */}
            <div style={{ maxWidth: 480, margin: "0 auto", background: "#f0f4f8", borderRadius: 8, height: 12, overflow: "hidden" }}>
              <div style={{ width: "95%", height: "100%", background: "linear-gradient(90deg, #fbbf24, #dc2626)", borderRadius: 8 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 480, margin: "6px auto 0", fontSize: 11, color: "#9aa8c0" }}>
              <span>Low Risk</span><span>High Exposure</span>
            </div>
          </div>

          {/* Dark statement card */}
          <div style={{
            background: "linear-gradient(135deg, #071a14 0%, #0d3322 100%)",
            borderRadius: 20, padding: "48px 44px", textAlign: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0, opacity: 0.06,
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "24px 24px", pointerEvents: "none",
            }} />
            <p style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#6ee7b7", marginBottom: 20, position: "relative",
            }}>What this score actually means</p>
            <h2 style={{
              fontSize: "clamp(22px, 3.5vw, 40px)", fontWeight: 900, color: "#ffffff",
              lineHeight: 1.2, letterSpacing: "-0.02em", position: "relative", marginBottom: 0,
            }}>
              95% of manual regression testing<br />
              is{" "}
              <span style={{
                background: "linear-gradient(90deg, #34d399, #6ee7b7)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>automatable today.</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(180,240,220,0.7)", marginTop: 20, lineHeight: 1.7, position: "relative" }}>
              Wipro&apos;s QA vertical reduced manual testing headcount by 35% in FY26.<br />
              TCS bench policies now flag manual-only QA professionals first for strategic review.
            </p>
          </div>

          {/* 3 stats */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1, background: "#e8eef8",
            borderRadius: 14, overflow: "hidden", marginTop: 28,
          }}>
            {[
              { stat: "95%", label: "of manual regression automatable today" },
              { stat: "18 mo", label: "window to transition to AI Quality Architect" },
              { stat: "₹48 LPA", label: "GCC AI Quality Architect average salary" },
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
            This does not mean your career is over.<br />
            It means the role as currently defined is being redesigned — and{" "}
            <strong style={{ color: "#0a1628" }}>the professionals who move now will own the new version of it.</strong>
          </p>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section style={{ background: "#f0fdf8", padding: "72px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#0d9268", display: "block", marginBottom: 12,
            }}>Inside the Guide</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              Everything You Need to Make the Move
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {WHAT_INSIDE.map((item) => (
              <div key={item.label} style={{
                background: "#ffffff", border: "1px solid #bbf7d0",
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

      {/* ── PIVOT PATHS ── */}
      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#0d9268", display: "block", marginBottom: 12,
            }}>Where You Can Go</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              Four Viable Paths From Manual QA
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 12 }}>
              The guide covers all four in detail — with timelines, skill bridges, and the exact first step.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PIVOT_PATHS.map((p) => (
              <div key={p.to} style={{
                display: "flex", alignItems: "center", gap: 20,
                background: "#f8faff", border: "1px solid #e8eef8",
                borderRadius: 12, padding: "20px 24px", flexWrap: "wrap",
              }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#0a1628" }}>{p.to}</div>
                  <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>Transition: {p.timeline}</div>
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
      <section style={{ padding: "72px 20px", background: "#f8faff" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", marginBottom: 22 }}>This guide is for you if…</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {FOR_YOU.map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#0d9268", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
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
      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, #f0fdf8 0%, #dcfce7 100%)",
            border: "1.5px solid #bbf7d0", borderRadius: 20, padding: "44px 48px",
          }}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#0d9268", display: "block", marginBottom: 16,
            }}>Real Case Study — Included in the Guide</span>
            <h3 style={{ fontSize: "clamp(20px, 2.8vw, 30px)", fontWeight: 800, color: "#0a1628", marginBottom: 16, letterSpacing: "-0.02em" }}>
              From ₹14 LPA at Wipro to ₹42 LPA at Goldman Sachs GCC in 4.5 months
            </h3>
            <p style={{ fontSize: 16, color: "#2d4a2d", lineHeight: 1.75, marginBottom: 24 }}>
              The guide includes a granular, step-by-step reconstruction of how a QA Lead with 8 years of manual
              testing experience — who had never written a Python test — transitioned to an AI Quality Engineer role
              at a top-tier BFSI GCC. Every week of the 4.5-month journey is documented.
            </p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {[
                { label: "Starting salary", val: "₹14 LPA" },
                { label: "Final offer", val: "₹42 LPA" },
                { label: "Time taken", val: "4.5 months" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#0d9268" }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "#5a6a8a", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{
        background: "linear-gradient(135deg, #071a14 0%, #0d3322 100%)",
        padding: "80px 20px", textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            The window is open.<br />
            <span style={{ color: "#6ee7b7" }}>It is narrowing.</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(180,240,220,0.7)", lineHeight: 1.7, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
            Every AI Quality Architect at a GCC today was a QA engineer with the same tools
            you have. The difference is they started this weekend, not next month.
          </p>

          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 18, color: "rgba(180,230,210,0.4)", textDecoration: "line-through", fontWeight: 500 }}>₹299</span>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>₹199</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6ee7b7", marginBottom: 20 }}>
              Launch Price · Instant Delivery
            </span>
            <CashfreeCheckout
              productName="QA Engineer Survival Guide 2026"
              amount={199}
              accentColor="#0d9268"
              buttonLabel="Get the Guide — ₹199 →"
              buttonStyle={{
                fontSize: 16, fontWeight: 700, padding: "16px 40px", borderRadius: 10,
                background: "#0d9268", color: "#ffffff",
                border: "none", cursor: "pointer", letterSpacing: "0.01em",
                minWidth: 260,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(180,230,210,0.4)", marginTop: 14 }}>
              Secure payment via Cashfree · PDF delivered instantly
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
