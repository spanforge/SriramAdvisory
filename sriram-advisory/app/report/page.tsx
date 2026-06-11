import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Full Report | SA-AIRS™ | Sriram Advisory",
  description:
    "Get a complete SA-AIRS™ audit — all 5 dimensions scored, composite risk score, 12 & 36-month horizon, and your Top 3 Moves roadmap.",
};

const FEATURES = [
  { tier: "AI Career Risk Score", price: "\u20b9999", featured: true, desc: "Personalised 1-page assessment of your specific role.", items: ["Role-specific AI exposure analysis", "SA-AIRS\u2122 5-dimension score", "Risk tier placement", "Top 3 priority actions", "Delivered within 24 hours"] },
  { tier: "Pro Edition", price: "\u20b91,999", desc: "Complete intelligence report + quarterly updates.", items: ["Everything in Risk Score", "Full SA-AIRS\u2122 methodology explained", "Visual data & charts", "7 industry deep dives", "Salary outlook scenarios", "AI tools by profession", "90-day roadmap (detailed)", "2 quarterly updates included"] },
];

export default function ReportPage() {
  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="px-5 md:px-10" style={{ paddingTop: 120, paddingBottom: 80, background: "#f0f4f8", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="hero-badge" style={{ margin: "0 auto 28px", width: "fit-content" }}>
            <span className="hero-badge-dot" />
            SA-AIRS&#8482; Full Report
          </div>
          <h1 className="section-title" style={{ fontSize: "clamp(42px, 6vw, 72px)", marginBottom: 20 }}>
            Your Score. Your Tier.<br />Your Top 3 Moves.
          </h1>
          <p className="section-sub" style={{ margin: "0 auto 40px", textAlign: "center" }}>
            The report gives you everything you need — all 5 dimensions, a 36-month risk horizon, and an exact roadmap for the next 90 days.
          </p>
          <Link href="/get-started" className="btn-primary" style={{ display: "inline-flex", margin: "0 auto" }}>
            Get Started &rarr;
          </Link>
        </div>
      </section>

      {/* WHAT YOU GET — SAMPLE CARD */}
      <section className="section section-mid">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16" style={{ alignItems: "center" }}>
            <div>
              <span className="section-label">What You Receive</span>
              <h2 className="section-title">The Report Card</h2>
              <p className="section-sub" style={{ marginBottom: 32 }}>
                A structured, scored, explainable output. Not a generic PDF. Your exact SA-AIRS&#8482; score · Ladder placement · 5 dimension breakdown · Top 3 Moves.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {["SA-AIRS™ composite score (0–10)", "5 weighted dimension scores", "Top 10% Ladder placement (L1–L5)", "12-month and 36-month risk horizon", "Top 3 specific moves for next 90 days"].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, color: "#5a6a8a" }}>
                    <span style={{ color: "#0d9268", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SAMPLE SCORE CARD */}
            <div>
              <div style={{ marginBottom: 10, fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5a6a8a", textAlign: "center", fontWeight: 700 }}>
                &#9888; Sample output — illustrative data
              </div>
              <div className="score-card">
                <div className="score-card-header">
                  <div>
                    <div className="score-card-label">SA-AIRS v4 &middot; Full Report</div>
                    <div className="score-card-number">7.8</div>
                  </div>
                  <div className="score-card-meta">
                    <div className="score-card-risk">High Risk</div>
                    <div className="score-card-sub">High Confidence<br />36-month horizon<br /><span style={{ color: "#0d9268" }}>L2 &rarr; L3 path available</span></div>
                  </div>
                </div>
                <div className="score-card-body">
                  {[
                    { name: "Task Repetition Level", w: "25%", val: 8.8 },
                    { name: "Automation Feasibility", w: "25%", val: 8.2 },
                    { name: "Market Saturation", w: "20%", val: 7.5 },
                    { name: "Decision Complexity", w: "15%", val: 3.8 },
                    { name: "Human Context Dep.", w: "15%", val: 3.2 },
                  ].map((d) => (
                    <div className="score-row" key={d.name}>
                      <div className="score-row-top">
                        <span>{d.name}</span>
                        <span style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                          <span className="score-row-weight">({d.w})</span>
                          <span className="score-row-val">{d.val}</span>
                        </span>
                      </div>
                      <div className="score-bar-track">
                        <div className={`score-bar-fill${d.val <= 4.0 ? " low" : d.val <= 6.5 ? " mid" : ""}`} style={{ width: `${d.val * 10}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 16, padding: "14px 18px", background: "rgba(248,250,255,0.03)", border: "1px solid rgba(248,250,255,0.08)", borderRadius: 10, fontFamily: "var(--font-dm-mono), monospace", fontSize: 13, color: "#5a6a8a", lineHeight: 1.8 }}>
                <span style={{ color: "#4fc3f7" }}>{"// Top 3 Moves"}</span><br />
                1. Transition 30% of output to AI-augmented delivery<br />
                2. Build one visible system or framework in your domain<br />
                3. Create one repeatable process that others depend on
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="section-label">How It Works</span>
              <h2 className="section-title">3 Steps.<br />No Surprises.</h2>
              <p className="section-sub">Simple, fast, and delivered without complexity. Here&apos;s exactly what happens after you submit.</p>
            </div>
            <div className="steps">
              {[
                { n: "01", title: "Submit the Form", desc: "4 fields: Name, Role, Experience, Email. Takes 2 minutes. We ask the right questions on our end — you don't fill a long quiz." },
                { n: "02", title: "We Review in 24 Hours", desc: "Sriram personally scores your profile using the SA-AIRS™ formula. Not automated. Not a chatbot. A real scored analysis." },
                { n: "03", title: "Receive Your Report", desc: "Delivered to your email. Score, tier, top 3 moves, and a clear upgrade path. Actionable from the first read." },
              ].map((s, i, arr) => (
                <div className="step" key={s.n}>
                  <div className="step-num-col">
                    <div className="step-num">{s.n}</div>
                    {i < arr.length - 1 && <div className="step-line" />}
                  </div>
                  <div className="step-body">
                    <div className="step-title">{s.title}</div>
                    <div className="step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section section-mid">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Pricing</span>
            <h2 className="section-title">Pick Your Level</h2>
            <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>Choose the depth that matches your situation. All prices in INR (₹).</p>
          </div>
          <div className="pricing-grid">
            {FEATURES.map((f) => (
              <div key={f.tier} className={`price-card${f.featured ? " featured" : ""}`}>
                {f.featured && <div className="price-featured-badge">Most Popular</div>}
                <span className="price-tier">{f.tier}</span>
                <div className="price-amount">{f.price}</div>
                <p className="price-desc">{f.desc}</p>
                <ul className="price-features">
                  {f.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link href="/get-started" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "12px 24px" }}>
                  Get Started →
                </Link>
              </div>
            ))}
          </div>

          {/* Premium tiers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 20 }}>
            {[
              { tier: "Clarity Call", price: "₹3,999 – ₹7,499", sub: "30 min", desc: "1:1 with Sriram to map your exact next move. Includes full SA-AIRS™ audit.", items: ["Role-mapped AI exposure audit", "1:1 call with Sriram", "Exact next-move roadmap", "Session notes delivered"] },
              { tier: "Domain Deep Dive Program", price: "₹9,999 – ₹24,999+", sub: "Custom", desc: "90-day transition program: your role to its AI-era equivalent.", items: ["Custom 90-day transition plan", "Weekly accountability check-ins", "Role-to-AI-era equivalence mapping", "Personalised tool & upskill plan", "Access to founder directly"] },
            ].map((p) => (
              <div key={p.tier} className="price-card" style={{ borderColor: "rgba(26,79,214,0.06)", background: "#f0f4f8" }}>
                <span className="price-tier">{p.tier}</span>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                  <div className="price-amount" style={{ fontSize: 32 }}>{p.price}</div>
                  <span style={{ fontSize: 13, color: "#5a6a8a" }}>{p.sub}</span>
                </div>
                <p className="price-desc">{p.desc}</p>
                <ul className="price-features">
                  {p.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href="https://wa.me/919342229420" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "12px 24px", display: "flex" }}>
                  Enquire on WhatsApp →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI RISK RANKINGS REPORT */}
      <section className="section section-mid">
        <div className="section-inner">
          <div style={{
            background: "linear-gradient(135deg, #fff5f5 0%, #fee2e2 100%)",
            border: "1.5px solid #fecaca", borderRadius: 20,
            padding: "40px 40px", position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 20, right: 24,
              background: "#dc2626", color: "#ffffff",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", padding: "4px 12px", borderRadius: 12,
            }}>
              New — May 2026
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>
              {/* Left */}
              <div style={{ flex: "1 1 340px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{
                    fontSize: 13, fontWeight: 700, letterSpacing: "0.08em",
                    textTransform: "uppercase", background: "#dc2626", color: "#ffffff",
                    border: "1px solid #ef4444", padding: "3px 10px", borderRadius: 10,
                  }}>
                    Market Intelligence
                  </span>
                  <span style={{ fontSize: 13, color: "#5a6a8a" }}>v7.0 · India Labour Market</span>
                </div>
                <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#0a1628", marginBottom: 6, lineHeight: 1.2 }}>
                  AI Risk Rankings India 2026
                </h2>
                <p style={{ fontSize: 15, color: "#dc2626", fontWeight: 600, marginBottom: 16 }}>
                  The Top 25 High-Risk Careers · 100+ pages · Instant delivery
                </p>
                <p style={{ fontSize: 15, color: "#3a4a6a", lineHeight: 1.7, marginBottom: 24 }}>
                  The definitive ranking of India&apos;s 25 highest-risk careers under AI displacement.
                  4 risk bands, headcount data, salary figures, an individual adaptation framework,
                  and 4 case studies. Sourced from NASSCOM, NITI Aayog, WEF, EY India, and McKinsey 2025–26.
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 36, fontWeight: 800, color: "#dc2626" }}>₹499</span>
                  <span style={{ fontSize: 13, color: "#8898b8" }}>One-time · Instant digital delivery</span>
                </div>
                <Link
                  href="/products/ai-risk-rankings-india-2026"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "#dc2626", color: "#ffffff",
                    fontWeight: 700, fontSize: 15, padding: "13px 28px",
                    borderRadius: 10, textDecoration: "none", letterSpacing: "0.01em",
                  }}
                >
                  View Report — ₹499 →
                </Link>
              </div>
              {/* Right — bullets */}
              <div style={{ flex: "1 1 260px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5a6a8a", marginBottom: 14 }}>
                  What&apos;s included
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Top 25 careers ranked with risk bands (Extreme → Moderate)",
                    "Indicative headcounts and salary data for each role",
                    "Deep-dive vulnerability profiles for 5 occupational clusters",
                    "Individual adaptation framework — 90-day plan by role",
                    "Career transition paths mapped for each high-risk occupation",
                    "4 Indian case studies: real transitions, illustrative profiles",
                  ].map((bullet) => (
                    <div key={bullet} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#dc2626", fontWeight: 700, flexShrink: 0, fontSize: 14, marginTop: 2 }}>✓</span>
                      <span style={{ fontSize: 14, color: "#2a3a5a", lineHeight: 1.5 }}>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="section-sm section-dark">
        <div className="section-inner" style={{ maxWidth: 700 }}>
          <div className="guarantee-box">
            <span style={{ fontSize: 32 }}>🛡</span>
            <div>
              <div className="guarantee-title">1 Actionable Insight or Full Refund</div>
              <div className="guarantee-desc">
                If you read your report and cannot identify one specific action to take in the next 30 days, we&apos;ll refund you in full. No questions. No forms. Just a reply to the email.
              </div>
            </div>
          </div>
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <Link href="/get-started" className="btn-primary" style={{ display: "inline-flex" }}>
              Get Your Report &rarr;
            </Link>
            <p style={{ marginTop: 14, fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, color: "#5a6a8a", letterSpacing: "0.02em" }}>
              24-hour delivery guaranteed
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
