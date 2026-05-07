import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FEATURES = [
  { tier: "Snapshot", price: "Free", desc: "Quick risk read — delivered in 24 hours.", items: ["2-dimension quick score", "Risk tier placement", "1 key insight", "Upgrade path shown"] },
  { tier: "Full Report", price: "₹999", featured: true, desc: "Complete SA-AIRS™ audit with your action roadmap.", items: ["All 5 dimensions scored", "SA-AIRS™ composite score", "Top 10% Ladder placement", "Top 3 Moves for 90 days", "12 & 36-month risk horizon", "1 actionable insight guarantee"] },
  { tier: "Deep Dive", price: "₹1499", desc: "Full report + 45-min strategy call and 30-day re-evaluation.", items: ["Everything in Full Report", "45-minute 1:1 strategy call", "30-day re-evaluation (free)", "Score delta tracking", "Domain-specific action plan"] },
];

export default function ReportPage() {
  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="px-5 md:px-10" style={{ paddingTop: 120, paddingBottom: 80, background: "#0a1628", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="hero-badge" style={{ margin: "0 auto 28px", width: "fit-content" }}>
            <span className="hero-badge-dot" />
            SA-AIRS&#8482; Full Report
          </div>
          <h1 className="section-title" style={{ fontSize: "clamp(42px, 6vw, 72px)", marginBottom: 20 }}>
            Your Score. Your Tier.<br />Your Top 3 Moves.
          </h1>
          <p className="section-sub" style={{ margin: "0 auto 40px", textAlign: "center" }}>
            The Full Report gives you everything the Snapshot shows — plus all 5 dimensions, a 36-month risk horizon, and an exact roadmap for the next 90 days.
          </p>
          <Link href="/snapshot" className="btn-primary" style={{ display: "inline-flex", margin: "0 auto" }}>
            Get Full Report &rarr;
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
                  <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14, color: "#8898b8" }}>
                    <span style={{ color: "#22d3a0", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SAMPLE SCORE CARD */}
            <div>
              <div style={{ marginBottom: 10, fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8898b8", textAlign: "center" }}>
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
                    <div className="score-card-sub">High Confidence<br />36-month horizon<br /><span style={{ color: "#22d3a0" }}>L2 &rarr; L3 path available</span></div>
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
              <div style={{ marginTop: 16, padding: "14px 18px", background: "rgba(248,250,255,0.03)", border: "1px solid rgba(248,250,255,0.08)", borderRadius: 10, fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#8898b8", lineHeight: 1.8 }}>
                <span style={{ color: "#4fc3f7" }}>// Top 3 Moves</span><br />
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
            <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>Start free. Upgrade when you see the value.</p>
          </div>
          <div className="pricing-grid">
            {FEATURES.map((f) => (
              <div key={f.tier} className={`price-card${f.featured ? " featured" : ""}`}>
                {f.featured && <div className="price-featured-badge">Most Popular</div>}
                <span className="price-tier">{f.tier}</span>
                <div className="price-amount"><span className="price-currency">{f.price.startsWith("₹") ? "" : ""}</span>{f.price}</div>
                <p className="price-desc">{f.desc}</p>
                <ul className="price-features">
                  {f.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link href="/snapshot" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "12px 24px" }}>
                  {f.price === "Free" ? "Get Free Snapshot" : "Get Started"} &rarr;
                </Link>
              </div>
            ))}
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
            <Link href="/snapshot" className="btn-primary" style={{ display: "inline-flex" }}>
              Get Full Report &rarr;
            </Link>
            <p style={{ marginTop: 14, fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "rgba(136,152,184,0.6)", letterSpacing: "0.06em" }}>
              10 reports open this week &middot; 24-hour delivery guaranteed
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
