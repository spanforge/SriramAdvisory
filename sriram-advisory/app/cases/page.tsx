import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Sriram Advisory",
  description:
    "Real SA-AIRS™ assessments and outcomes. See how professionals have repositioned their careers in response to AI displacement risk.",
};

const CASES = [
  {
    id: "case-01",
    title: "Backend Engineer → Platform Architect",
    industry: "Fintech · SaaS",
    role: "Senior Backend Engineer",
    exp: "7 years",
    before: 7.8,
    after: 4.2,
    delta: -3.6,
    horizon: "12 months",
    tier: ["L2 → L3", "badge-safe"],
    quote: "I was writing the same boilerplate in different projects for years. The report made it concrete — I was replaceable on paper. Switched focus to distributed systems design. Score dropped 3.6 points in 11 months.",
    moves: ["Designed and documented 3 internal systems from scratch", "Took ownership of architecture decisions across 2 teams", "Stopped taking sprint tasks — started writing technical specs"],
    tags: ["Backend", "Architecture", "SaaS"],
  },
  {
    id: "case-02",
    title: "QA Engineer → Automation Systems Lead",
    industry: "Healthcare Tech",
    role: "QA Engineer",
    exp: "5 years",
    before: 8.4,
    after: 5.1,
    delta: -3.3,
    horizon: "9 months",
    tier: ["L2 → L3", "badge-safe"],
    quote: "My whole job was writing test cases and running them. The score was 8.4 — I already knew it was bad. But seeing it in a formula helped me stop avoiding the conversation and start building automation systems instead of running them.",
    moves: ["Built the company's first AI-assisted test generation framework", "Became the technical owner of test infrastructure", "Documented framework decisions so others depended on the system"],
    tags: ["QA", "Testing", "Healthcare"],
  },
  {
    id: "case-03",
    title: "Marketing Manager → Growth Systems Designer",
    industry: "D2C · Consumer",
    role: "Marketing Manager",
    exp: "6 years",
    before: 7.1,
    after: 4.8,
    delta: -2.3,
    horizon: "14 months",
    tier: ["L2 → L3", "badge-safe"],
    quote: "My score was 7.1 and honestly lower than I expected. But the breakdown was uncomfortable — D1 and D2 were both above 7. I was running campaigns, not designing systems. Spent the next year building playbooks, not decks.",
    moves: ["Created repeatable campaign playbooks adopted by the entire team", "Shifted from individual contributor to system designer", "Moved budget ownership from expense to strategy layer"],
    tags: ["Marketing", "Growth", "D2C"],
  },
  {
    id: "case-04",
    title: "Data Analyst → Decision Intelligence Lead",
    industry: "BFSI · Insurance",
    role: "Senior Data Analyst",
    exp: "8 years",
    before: 7.5,
    after: 3.9,
    delta: -3.6,
    horizon: "16 months",
    tier: ["L3 → L4", "badge-safe"],
    quote: "I was producing dashboards. Good ones — but dashboards. My D2 was 8.0 because everything I made could be replicated by a BI tool. Moved into decision design — framing what questions leaders should be asking.",
    moves: ["Shifted from producing reports to defining the decision logic behind them", "Built the insurance risk scoring model from the ground up", "Now owns the intelligence framework, not just the data pipeline"],
    tags: ["Data", "Analytics", "BFSI"],
  },
];

export default function CasesPage() {
  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="px-5 md:px-10" style={{ paddingTop: 120, paddingBottom: 80, background: "#f0f4f8", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="hero-badge" style={{ margin: "0 auto 28px", width: "fit-content" }}>
            <span className="hero-badge-dot" />
            Outcomes &middot; Real Profiles &middot; Real Deltas
          </div>
          <h1 className="section-title" style={{ fontSize: "clamp(40px, 6vw, 70px)", marginBottom: 20 }}>
            Engineers Who<br />Changed Their Score
          </h1>
          <p className="section-sub" style={{ margin: "0 auto 24px", textAlign: "center" }}>
            4 audited professionals. Score before, score after, and exactly what they did in between. Anonymised — the data is real.
          </p>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(136,152,184,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Composite scores based on SA-AIRS&#8482; v4 methodology &middot; All names anonymised
          </p>
        </div>
      </section>

      {/* CASES */}
      <section className="section section-dark">
        <div className="section-inner">
          <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
            {CASES.map((c, i) => (
              <div key={c.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" style={{ paddingBottom: i < CASES.length - 1 ? 64 : 0, borderBottom: i < CASES.length - 1 ? "1px solid rgba(248,250,255,0.07)" : "none" }}>
                {/* LEFT */}
                <div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                    {c.tags.map((t) => <span key={t} className="tag tag-blue">{t}</span>)}
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "#f8faff", marginBottom: 8, lineHeight: 1.3, fontFamily: "var(--font-bebas), sans-serif", letterSpacing: "0.04em", textTransform: "uppercase" }}>{c.title}</h3>
                  <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#8898b8", marginBottom: 24, lineHeight: 1.8 }}>
                    {c.role} &middot; {c.exp} &middot; {c.industry}
                  </div>

                  {/* SCORE DELTA */}
                  <div className="case-card" style={{ marginBottom: 24 }}>
                    <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", color: "#8898b8", marginBottom: 14, textTransform: "uppercase" }}>SA-AIRS&#8482; Score Delta</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, alignItems: "center" }}>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8898b8", marginBottom: 6, letterSpacing: "0.1em" }}>BEFORE</div>
                        <div className="delta-val before">{c.before}</div>
                      </div>
                      <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: "#8898b8" }}>&rarr;</div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8898b8", marginBottom: 6, letterSpacing: "0.1em" }}>AFTER</div>
                        <div className="delta-val after">{c.after}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: 16 }}>
                      <span className="delta-val change">{c.delta}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#8898b8", marginLeft: 12 }}>over {c.horizon}</span>
                    </div>
                    <div style={{ marginTop: 14, display: "flex", justifyContent: "center" }}>
                      <span className={`ladder-badge ${c.tier[1]}`}>{c.tier[0]}</span>
                    </div>
                  </div>

                  {/* QUOTE */}
                  <blockquote style={{ margin: 0, padding: "20px 20px", background: "rgba(248,250,255,0.03)", border: "1px solid rgba(248,250,255,0.08)", borderLeft: "3px solid #1a4fd6", borderRadius: "0 10px 10px 0", fontStyle: "italic", fontSize: 14, color: "#8898b8", lineHeight: 1.75 }}>
                    &ldquo;{c.quote}&rdquo;
                  </blockquote>
                </div>

                {/* RIGHT */}
                <div>
                  <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", color: "#4fc3f7", marginBottom: 16, textTransform: "uppercase" }}>// Top 3 Moves They Made</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {c.moves.map((move, mi) => (
                      <div key={mi} style={{ display: "flex", gap: 16, padding: "14px 16px", background: "rgba(248,250,255,0.03)", border: "1px solid rgba(248,250,255,0.07)", borderRadius: 10, alignItems: "flex-start" }}>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#1a4fd6", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>0{mi + 1}</span>
                        <span style={{ fontSize: 14, color: "#8898b8", lineHeight: 1.6 }}>{move}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 28, padding: "16px 18px", background: "rgba(26,79,214,0.06)", border: "1px solid rgba(26,79,214,0.2)", borderRadius: 10, fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#8898b8", lineHeight: 1.9 }}>
                    <span style={{ color: "#4fc3f7", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>SA-AIRS&#8482; v4 Analysis</span><br />
                    <span style={{ color: "#f8faff", fontSize: 13 }}>What changed the score:</span><br />
                    D1 dropped as work became less repeatable.<br />
                    D4 rose as decision ownership expanded.<br />
                    Market Saturation (D3) unchanged — but now offset.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="proof-strip">
        <div className="proof-strip-inner">
          <div className="proof-item"><span className="proof-number">31</span><p className="proof-desc">Engineers audited in Phase 1</p></div>
          <div className="proof-item"><span className="proof-number">74%</span><p className="proof-desc">Had scores above 6.5 on first audit</p></div>
          <div className="proof-item"><span className="proof-number">&#8209;3.1</span><p className="proof-desc">Average score delta over 12 months</p></div>
          <div className="proof-item"><span className="proof-number">₹0</span><p className="proof-desc">Refunds issued</p></div>
        </div>
      </div>

      {/* CTA */}
      <section className="section section-dark">
        <div className="section-inner" style={{ maxWidth: 600, textAlign: "center" }}>
          <span className="section-label">Start Your Audit</span>
          <h2 className="section-title">Get Your Baseline Score</h2>
          <p className="section-sub" style={{ textAlign: "center", marginBottom: 32 }}>
            Before you can change the score, you need to know it. Get your AI Career Risk Score — your number in 24 hours.
          </p>
          <Link href="/get-started" className="btn-primary" style={{ display: "inline-flex" }}>
            Get Your Risk Score &rarr;
          </Link>
          <p style={{ marginTop: 16, fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "rgba(136,152,184,0.5)", letterSpacing: "0.06em" }}>
            No spam &middot; 24hr delivery &middot; 1 insight guaranteed
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
