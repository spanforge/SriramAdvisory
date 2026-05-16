import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Career Risk Guide — India 2026 | Sriram Advisory",
  description:
    "40+ Indian roles scored for AI risk. Real GCC salary data. City-by-city career strategy. Role-specific transition playbooks. Built for Indian professionals — ₹299.",
};

const WHAT_INSIDE = [
  { icon: "📊", label: "SA-AIRS™ Scores for 40+ roles", desc: "Every major Indian IT and non-tech role rated on a 1–10 AI exposure scale with exposure tier." },
  { icon: "🏢", label: "The GCC Opportunity Map", desc: "Sector-by-sector directory of 100+ GCCs actively hiring in India — BFSI, Tech, Consulting, Healthcare, E-commerce." },
  { icon: "💰", label: "Real Salary Benchmarks", desc: "L1–L3 salary ranges for 40+ roles across IT services and GCCs. No guesswork — sourced from 6figr, GCC Journal, and Deccan Herald." },
  { icon: "🗺️", label: "City-by-City Career Strategy", desc: "Bangalore, Hyderabad, Pune, Chennai, Tier 2 — where to be based on your domain, career stage, and purchasing power goals." },
  { icon: "🔄", label: "Role Pivot Matrix", desc: "Direct transition paths from high-exposure roles (QA, ETL, DBA, RPA) to high-value ones — with timelines and the exact first step to take." },
  { icon: "🎯", label: "GCC Interview Playbook", desc: "The 5 interview types, system design framework, STAR behavioural method, and how to counter GCC salary offers." },
  { icon: "🔗", label: "LinkedIn Repositioning Guide", desc: "Before/after headline rewrites, About section template, experience reframing — built specifically for GCC recruiter eyes." },
  { icon: "🤖", label: "AI Tools Reference by Role", desc: "Role-specific AI toolkits for engineers, analysts, product managers, and security professionals." },
  { icon: "📅", label: "90-Day Action Plans", desc: "Week-by-week plans for Software Developers, QA Engineers, Project Managers, and non-technical roles." },
];

const FOR_YOU = [
  "You are in Indian IT services and wondering what's safe",
  "Your role scored above 6.0 on any AI risk framework and you want specifics",
  "You are targeting your first GCC role and need a credible roadmap",
  "You want India-specific salary data — not US figures",
  "You want to know exactly what to build, learn, or change in the next 90 days",
];

const NOT_FOR_YOU = [
  "You are already at a senior Principal/Director level with strong AI fluency",
  "You want a technical AI/ML course",
  "You are based outside India looking for a global analysis",
];

const ROLES_COVERED = [
  { role: "Manual QA Engineer", score: "9.5", tier: "High", color: "#dc2626" },
  { role: "Junior Developer", score: "9.2", tier: "High", color: "#dc2626" },
  { role: "Support Engineer", score: "9.0", tier: "High", color: "#dc2626" },
  { role: "ETL Developer", score: "8.5", tier: "High", color: "#dc2626" },
  { role: "Business Analyst", score: "8.2", tier: "High", color: "#dc2626" },
  { role: "DBA (Traditional)", score: "7.8", tier: "High", color: "#dc2626" },
  { role: "RPA Developer", score: "7.5", tier: "Mod-High", color: "#ea580c" },
  { role: "Data Analyst", score: "7.2", tier: "Moderate", color: "#d97706" },
  { role: "Technical Writer", score: "7.0", tier: "Moderate", color: "#d97706" },
  { role: "Product Manager", score: "5.8", tier: "Moderate", color: "#d97706" },
  { role: "ML Engineer", score: "4.8", tier: "Mod-Lower", color: "#16a34a" },
  { role: "Cloud Architect", score: "3.5", tier: "Low", color: "#0d9268" },
  { role: "DevOps/Platform Eng", score: "3.8", tier: "Low", color: "#0d9268" },
  { role: "GenAI App Engineer", score: "3.5", tier: "Low", color: "#0d9268" },
];

export default function AICareerRiskGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #08142a 0%, #0f2040 50%, #1a3565 100%)",
        paddingTop: 100, paddingBottom: 90, textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        {/* subtle grid overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px", position: "relative" }}>
          {/* badge */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(59,110,240,0.18)", border: "1px solid rgba(59,110,240,0.45)",
              borderRadius: 20, padding: "6px 16px",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93b4ff",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b6ef0", display: "inline-block" }} />
              India 2026 Edition
            </span>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(220,38,38,0.18)", border: "1px solid rgba(220,38,38,0.4)",
              borderRadius: 20, padding: "6px 16px",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fca5a5",
            }}>
              40+ Roles Scored
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(38px, 5.5vw, 68px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.08, marginBottom: 22, letterSpacing: "-0.03em",
          }}>
            AI Career Risk Guide<br />
            <span style={{ color: "#93b4ff" }}>India 2026</span>
          </h1>

          <p style={{
            fontSize: "clamp(17px, 2.2vw, 22px)", color: "rgba(180,210,255,0.85)",
            lineHeight: 1.65, maxWidth: 640, margin: "0 auto 16px",
          }}>
            The most complete AI career risk guide for Indian professionals.
            Know exactly where your role stands, which GCCs are hiring, what salary to expect,
            and the precise steps to protect — or upgrade — your career.
          </p>

          <p style={{
            fontSize: 15, color: "rgba(147,180,255,0.7)", fontStyle: "italic",
            marginBottom: 44,
          }}>
            Not adapted from US data. Built from the ground up for India.
          </p>

          {/* PRICE + BUY */}
          <div style={{
            display: "inline-flex", flexDirection: "column", alignItems: "center",
            background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 20, padding: "32px 48px", gap: 6,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 22, color: "rgba(200,220,255,0.45)", textDecoration: "line-through", fontWeight: 500 }}>₹499</span>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>₹299</span>
            </div>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#93b4ff", marginBottom: 20,
            }}>Launch Price · Instant Digital Delivery</span>

            <CashfreeCheckout
              productName="AI Career Risk Guide India 2026"
              amount={299}
              accentColor="#1a4fd6"
              buttonLabel="Get the Guide Now — ₹299 →"
              buttonStyle={{
                fontSize: 17, fontWeight: 700, padding: "16px 36px", borderRadius: 10,
                background: "#1a4fd6", color: "#ffffff",
                border: "none", cursor: "pointer", letterSpacing: "0.01em",
                width: "100%", minWidth: 280,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(180,210,255,0.55)", marginTop: 12 }}>
              Secure payment via Cashfree · Instant PDF delivery
            </p>
          </div>
        </div>
      </section>

      {/* ── THE BURNING QUESTION ── */}
      <section style={{ background: "#ffffff", padding: "88px 20px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>

          {/* Old question — struck out */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{
              display: "inline-block",
              fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700,
              color: "#6b7a99", textDecoration: "line-through",
              letterSpacing: "-0.01em",
            }}>
              &quot;Will AI take my job?&quot;
            </span>
            <div style={{
              margin: "14px auto 0",
              width: 2, height: 36,
              background: "linear-gradient(to bottom, #d0daf0, #1a4fd6)",
            }} />
          </div>

          {/* New question — the real one */}
          <div style={{
            background: "linear-gradient(135deg, #0a1628 0%, #1a3565 100%)",
            borderRadius: 20, padding: "52px 48px", textAlign: "center",
            position: "relative", overflow: "hidden",
          }}>
            {/* subtle dot grid */}
            <div style={{
              position: "absolute", inset: 0, opacity: 0.06,
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              pointerEvents: "none",
            }} />

            <p style={{
              fontSize: "clamp(11px, 1.2vw, 13px)", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#93b4ff", marginBottom: 20, position: "relative",
            }}>The real question in 2026</p>

            <h2 style={{
              fontSize: "clamp(26px, 4vw, 52px)", fontWeight: 900,
              color: "#ffffff", lineHeight: 1.15,
              letterSpacing: "-0.03em", marginBottom: 0,
              position: "relative",
            }}>
              Will someone{" "}
              <span style={{
                background: "linear-gradient(90deg, #3b6ef0, #93b4ff)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>using AI</span>
              <br />replace <em style={{ fontStyle: "italic", WebkitTextFillColor: "white" }}>you?</em>
            </h2>
          </div>

          {/* Context stats */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1, background: "#e8eef8",
            borderRadius: 14, overflow: "hidden", marginTop: 32,
          }}>
            {[
              { stat: "92,000+", label: "IT layoffs in India in 2026" },
              { stat: "25–40%", label: "GCC salary premium over IT services" },
              { stat: "40+", label: "Indian roles scored in this guide" },
            ].map((s) => (
              <div key={s.stat} style={{
                background: "#f8faff", padding: "28px 24px", textAlign: "center",
              }}>
                <div style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#0a1628", letterSpacing: "-0.03em" }}>{s.stat}</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 6, lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: "clamp(15px, 1.8vw, 17px)", color: "#5a6a8a",
            lineHeight: 1.8, textAlign: "center", marginTop: 32,
          }}>
            The professionals thriving right now are not the smartest in the room.
            They are the ones who knew exactly where they stood — and moved first.
            <br />
            <strong style={{ color: "#0a1628" }}>This guide gives you that clarity.</strong>
          </p>
        </div>
      </section>

      {/* ── SA-AIRS SCORE PREVIEW ── */}
      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#1a4fd6", display: "block", marginBottom: 12,
            }}>SA-AIRS™ Exposure Scores</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              Where Does Your Role Stand?
            </h2>
            <p style={{ fontSize: 16, color: "#5a6a8a", marginTop: 12, maxWidth: 520, margin: "12px auto 0" }}>
              A sample of the 40+ roles covered. Every role includes exposure tier, what survives automation, and the exact transition path.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 14,
          }}>
            {ROLES_COVERED.map((r) => (
              <div key={r.role} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "#f8faff", border: "1px solid #e8eef8",
                borderRadius: 10, padding: "14px 18px",
              }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#0a1628" }}>{r.role}</span>
                <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 10 }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: r.color }}>{r.score}</div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: r.color, letterSpacing: "0.06em", textTransform: "uppercase" }}>{r.tier}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", fontSize: 13, color: "#9aa8c0", marginTop: 24 }}>
            + 26 more roles covered across IT, non-tech, BFSI, and consulting
          </p>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section style={{ background: "#f0f5ff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#1a4fd6", display: "block", marginBottom: 12,
            }}>Inside the Guide</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              Everything You Need to Act
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {WHAT_INSIDE.map((item) => (
              <div key={item.label} style={{
                background: "#ffffff", border: "1px solid #dde6ff",
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

      {/* ── WHO THIS IS FOR ── */}
      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
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

      {/* ── BOTTOM CTA ── */}
      <section style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a3565 100%)",
        padding: "80px 20px", textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Know where you stand.<br />
            <span style={{ color: "#93b4ff" }}>Act before others do.</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(180,210,255,0.75)", lineHeight: 1.7, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
            The professionals who are thriving in 2026 are not the ones who waited.
            They are the ones who assessed their position early and moved with precision.
          </p>

          <div style={{
            display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 18, color: "rgba(200,220,255,0.45)", textDecoration: "line-through", fontWeight: 500 }}>₹499</span>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>₹299</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93b4ff", marginBottom: 20 }}>
              Launch Price · Instant Delivery
            </span>
            <CashfreeCheckout
              productName="AI Career Risk Guide India 2026"
              amount={299}
              accentColor="#1a4fd6"
              buttonLabel="Get the Guide — ₹299 →"
              buttonStyle={{
                fontSize: 16, fontWeight: 700, padding: "16px 40px", borderRadius: 10,
                background: "#1a4fd6", color: "#ffffff",
                border: "none", cursor: "pointer", letterSpacing: "0.01em",
                minWidth: 260,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(180,210,255,0.45)", marginTop: 14 }}>
              Secure payment via Cashfree · PDF delivered instantly
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
