import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPO & Customer Support Career Survival Guide 2026 | Sriram Advisory",
  description:
    "SA-AIRS™ score: 9.2/10. AI agents are handling Tier 1 & 2 BPO queries today. Get the 5 new AI-era roles, a 30-day repositioning plan, and resume strategy built for India's 6M+ BPO workforce. ₹299.",
};

const WHAT_INSIDE = [
  { icon: "📊", label: "SA-AIRS™ Score 9.2 — Decoded", desc: "Exactly what this score means for your role, which tasks are being automated today by Salesforce Einstein, IBM watsonx, and LimeChat, and what the data shows about BPO headcount in India." },
  { icon: "🗺️", label: "The AI Risk Map — BPO Edition", desc: "Tier 1 scripted queries: fully automated. Tier 2 transactional support: 70% automated. Tier 3 complex exceptions: the only safe zone. Know where you stand right now." },
  { icon: "🔄", label: "The Transition: Agent to AI Overseer", desc: "The exact mental model shift required — from following scripts to designing and supervising the AI agents that replaced those scripts. The skills you already have that transfer directly." },
  { icon: "💼", label: "5 New BPO Roles Created by AI", desc: "AI Conversation Designer, Bot Quality Analyst, AI Escalation Specialist, CX Data Analyst, and AI Training Data Specialist — salary ranges, hiring companies, and first steps for each." },
  { icon: "📅", label: "30-Day Repositioning Plan", desc: "Day-by-day plan across 4 weeks. Not vague upskilling advice — specific free courses, LinkedIn profile rewrites, and target job boards with exact search terms." },
  { icon: "📝", label: "Resume & LinkedIn for the AI Era", desc: "Before/after rewrites of a BPO resume and LinkedIn profile. Exact language that AI-era BPO hiring managers are scanning for. Recruiter-tested templates." },
  { icon: "🏢", label: "Who Is Hiring — India 2026", desc: "Domestic BPO giants (Concentrix, Teleperformance, iEnergizer), GCC CX teams, and new-age AI CX startups actively hiring the 5 new roles right now." },
  { icon: "💰", label: "Salary Reality 2026", desc: "From ₹2.8–4.5 LPA (voice agent) to ₹12–28 LPA (AI Conversation Designer or CX Data Analyst). The actual salary ranges, which cities, and who is paying what." },
];

const FOR_YOU = [
  "You work in a BPO, call centre, or customer support role in India",
  "Your floor has started using AI tools and you feel your role shrinking",
  "You have been told you are 'on bench' or your project is ending soon",
  "You want a concrete 30-day plan — not generic advice to 'learn AI'",
  "You have 1–5 years of BPO experience and want to leverage it, not abandon it",
];

const NOT_FOR_YOU = [
  "You are already working as a Bot QA or AI Conversation Designer",
  "You are looking for a technical AI engineering career (coding, ML, etc.)",
  "You are outside India and want a global BPO market analysis",
];

const NEW_ROLES = [
  { role: "AI Conversation Designer", desc: "Designs dialogue flows and scripts for AI chatbots and voice bots", feasibility: "9.1 / 10", timeline: "30–60 days", salary: "₹10–22 LPA", color: "#d97706" },
  { role: "Bot Quality Analyst", desc: "Tests, scores, and improves AI bot responses and failure modes", feasibility: "8.8 / 10", timeline: "2–4 weeks", salary: "₹8–18 LPA", color: "#b45309" },
  { role: "AI Escalation Specialist", desc: "Handles complex cases AI cannot resolve; trains the AI on those failures", feasibility: "9.4 / 10", timeline: "Immediate", salary: "₹10–20 LPA", color: "#d97706" },
  { role: "CX Data Analyst", desc: "Analyses customer interaction data to improve AI and human performance", feasibility: "7.2 / 10", timeline: "60–90 days", salary: "₹12–28 LPA", color: "#92400e" },
  { role: "AI Training Data Specialist", desc: "Labels, curates, and quality-checks data used to train CX AI models", feasibility: "9.6 / 10", timeline: "1–2 weeks", salary: "₹8–20 LPA", color: "#d97706" },
];

export default function BPOCareerSurvivalGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #1c0a00 0%, #3b1a00 50%, #78350f 100%)",
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
              SA-AIRS™ Score: 9.2 / 10 — High Exposure
            </span>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(217,119,6,0.18)", border: "1px solid rgba(217,119,6,0.45)",
              borderRadius: 20, padding: "6px 16px",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fcd34d",
            }}>
              India 2026 Edition · v1.0
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(34px, 5.5vw, 62px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.08, marginBottom: 22, letterSpacing: "-0.03em",
          }}>
            BPO &amp; Customer Support<br />
            <span style={{ color: "#fcd34d" }}>Career Survival Guide 2026</span>
          </h1>

          <p style={{
            fontSize: "clamp(17px, 2.2vw, 21px)", color: "rgba(255,220,150,0.85)",
            lineHeight: 1.65, maxWidth: 640, margin: "0 auto 16px",
          }}>
            AI agents are handling Tier 1 &amp; Tier 2 queries right now. This guide tells you exactly
            which BPO roles survive, the 5 new positions AI is creating, and your 30-day plan to reposition —
            built for India&apos;s 6M+ BPO workforce.
          </p>

          <p style={{
            fontSize: 15, color: "rgba(252,211,77,0.55)", fontStyle: "italic", marginBottom: 44,
          }}>
            Not adapted from Western career content. Every insight is calibrated for the Indian BPO market.
          </p>

          {/* PRICE + BUY */}
          <div className="hero-price-box" style={{
            background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 20,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 22, color: "rgba(255,200,100,0.4)", textDecoration: "line-through", fontWeight: 500 }}>₹499</span>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>₹299</span>
            </div>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#fcd34d", marginBottom: 20,
            }}>Launch Price · Instant Digital Delivery</span>

            <CashfreeCheckout
              productName="BPO Career Survival Guide 2026"
              amount={299}
              accentColor="#d97706"
              buttonLabel="Get the Guide Now — ₹299 →"
              buttonStyle={{
                fontSize: 17, fontWeight: 700, padding: "16px 36px", borderRadius: 10,
                background: "#d97706", color: "#ffffff",
                border: "none", cursor: "pointer", letterSpacing: "0.01em",
                width: "100%", minWidth: 280,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(255,200,100,0.45)", marginTop: 12 }}>
              Secure payment via Cashfree · Instant PDF delivery
            </p>
          </div>
        </div>
      </section>

      {/* ── THE 9.2 SCORE EXPLAINED ── */}
      <section style={{ background: "#ffffff", padding: "88px 20px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#dc2626", display: "block", marginBottom: 16,
            }}>SA-AIRS™ Exposure Score</span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 24 }}>
              <span style={{ fontSize: "clamp(64px, 10vw, 96px)", fontWeight: 900, color: "#dc2626", lineHeight: 1, letterSpacing: "-0.04em" }}>9.2</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.08em" }}>High Exposure</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>Among the highest of any sector in India</div>
              </div>
            </div>
            <div style={{ maxWidth: 480, margin: "0 auto", background: "#f0f4f8", borderRadius: 8, height: 12, overflow: "hidden" }}>
              <div style={{ width: "92%", height: "100%", background: "linear-gradient(90deg, #fbbf24, #dc2626)", borderRadius: 8 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 480, margin: "6px auto 0", fontSize: 11, color: "#9aa8c0" }}>
              <span>Low Risk</span><span>High Exposure</span>
            </div>
          </div>

          {/* Dark statement card */}
          <div className="qa-score-card-pad" style={{
            background: "linear-gradient(135deg, #1c0a00 0%, #3b1a00 100%)",
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
              color: "#fcd34d", marginBottom: 20, position: "relative",
            }}>What this score actually means</p>
            <h2 style={{
              fontSize: "clamp(22px, 3.5vw, 40px)", fontWeight: 900, color: "#ffffff",
              lineHeight: 1.2, letterSpacing: "-0.02em", position: "relative", marginBottom: 0,
            }}>
              50–95% of customer interactions<br />
              are handled by{" "}
              <span style={{
                background: "linear-gradient(90deg, #fbbf24, #fcd34d)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>AI agents today.</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,220,150,0.7)", marginTop: 20, lineHeight: 1.7, position: "relative" }}>
              Salesforce Einstein, IBM watsonx, and LimeChat are deployed across major BPOs right now.<br />
              Concentrix and Teleperformance have publicly disclosed AI-first customer service strategies for India operations.
            </p>
          </div>

          {/* 3 stats */}
          <div className="stats-grid-3" style={{
            background: "#e8eef8",
            borderRadius: 14, overflow: "hidden", marginTop: 28,
          }}>
            {[
              { stat: "6M+", label: "BPO professionals in India facing AI disruption" },
              { stat: "30 Days", label: "Time it takes to reposition with this plan" },
              { stat: "₹22 LPA", label: "AI Conversation Designer average salary in India" },
            ].map((s) => (
              <div key={s.stat} style={{ background: "#fffbeb", padding: "28px 20px", textAlign: "center" }}>
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
            <strong style={{ color: "#0a1628" }}>the BPO professionals who move now will own the new version of it.</strong>
          </p>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section style={{ background: "#fffbeb", padding: "72px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#d97706", display: "block", marginBottom: 12,
            }}>Inside the Guide</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              Everything You Need to Make the Move
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {WHAT_INSIDE.map((item) => (
              <div key={item.label} style={{
                background: "#ffffff", border: "1px solid #fde68a",
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

      {/* ── THE 5 NEW ROLES ── */}
      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#d97706", display: "block", marginBottom: 12,
            }}>Where You Can Go</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              The 5 New BPO Roles Being Created by AI
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 12 }}>
              The guide covers all five in detail — with hiring companies, skill bridges, and the exact first step for each.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {NEW_ROLES.map((p) => (
              <div key={p.role} style={{
                display: "flex", alignItems: "center", gap: 20,
                background: "#fffbeb", border: "1px solid #fde68a",
                borderRadius: 12, padding: "20px 24px", flexWrap: "wrap",
              }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#0a1628" }}>{p.role}</div>
                  <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>{p.desc}</div>
                </div>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: p.color }}>{p.feasibility}</div>
                    <div style={{ fontSize: 11, color: "#9aa8c0", textTransform: "uppercase", letterSpacing: "0.06em" }}>Feasibility</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 11, color: "#9aa8c0", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>Time to Qualify</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: p.color }}>{p.timeline}</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: p.color }}>{p.salary}</div>
                    <div style={{ fontSize: 11, color: "#9aa8c0", textTransform: "uppercase", letterSpacing: "0.06em" }}>India Salary</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ padding: "72px 20px", background: "#fafbff" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", marginBottom: 22 }}>This guide is for you if…</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {FOR_YOU.map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#d97706", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
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

      {/* ── 30-DAY PLAN TEASER ── */}
      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div className="case-study-card-pad" style={{
            background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
            border: "1.5px solid #fde68a", borderRadius: 20,
          }}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#d97706", display: "block", marginBottom: 16,
            }}>Included in the Guide</span>
            <h3 style={{ fontSize: "clamp(20px, 2.8vw, 30px)", fontWeight: 800, color: "#0a1628", marginBottom: 16, letterSpacing: "-0.02em" }}>
              Your 30-Day Repositioning Plan — Week by Week
            </h3>
            <p style={{ fontSize: 16, color: "#3d2a00", lineHeight: 1.75, marginBottom: 24 }}>
              The guide includes a day-by-day 30-day plan calibrated for working BPO professionals —
              people with evening hours and weekends. It covers free certifications, LinkedIn rewrites,
              internal pivot tactics, and which job boards to target on day 25. No generic advice.
              Specific actions, specific platforms, specific results.
            </p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {[
                { label: "Week 1", val: "Assess & Position" },
                { label: "Week 2", val: "Skill & Signal" },
                { label: "Week 3–4", val: "Apply & Land" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#d97706" }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "#5a6a8a", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{
        background: "linear-gradient(135deg, #1c0a00 0%, #3b1a00 100%)",
        padding: "80px 20px", textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            The window is open.<br />
            <span style={{ color: "#fcd34d" }}>It is narrowing fast.</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,220,150,0.7)", lineHeight: 1.7, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
            Every AI Conversation Designer working at a BPO today started exactly where you are.
            The difference is they acted this week, not next quarter.
          </p>

          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 18, color: "rgba(255,200,100,0.4)", textDecoration: "line-through", fontWeight: 500 }}>₹499</span>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>₹299</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fcd34d", marginBottom: 20 }}>
              Launch Price · Instant Delivery
            </span>
            <CashfreeCheckout
              productName="BPO Career Survival Guide 2026"
              amount={299}
              accentColor="#d97706"
              buttonLabel="Get the Guide — ₹299 →"
              buttonStyle={{
                fontSize: 16, fontWeight: 700, padding: "16px 40px", borderRadius: 10,
                background: "#d97706", color: "#ffffff",
                border: "none", cursor: "pointer", letterSpacing: "0.01em",
                minWidth: 260,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(255,200,100,0.4)", marginTop: 14 }}>
              Secure payment via Cashfree · PDF delivered instantly
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
