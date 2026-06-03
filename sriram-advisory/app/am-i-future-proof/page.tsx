import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";

const WHAT_YOU_GET = [
  "Full SA-AIRS™ score across all 5 dimensions with confidence ratings",
  "Risk horizon at 12 months and 36 months",
  "Top 10% Ladder placement — your exact level and the next one",
  "Top 3 Moves for the next 90 days, specific to your role",
  "Dimension benchmarks against role and industry averages",
  "90-day re-score included — track what shifts",
];

const STEPS = [
  {
    n: "01",
    title: "Book and pay",
    desc: "₹499. You receive the structured intake form immediately after payment.",
  },
  {
    n: "02",
    title: "Complete the intake form",
    desc: "10–15 minutes. Your current role, day-to-day tasks, market context, and 2-year goals. Email it back.",
  },
  {
    n: "03",
    title: "SA-AIRS™ scoring",
    desc: "Your role scored across all 5 dimensions using rule-based, transparent logic. Ladder placed. Risk horizon calculated. Top 3 Moves identified.",
  },
  {
    n: "04",
    title: "Report delivered",
    desc: "Written report to your inbox within 48 hours. Score, ladder position, time horizon, 90-day moves. 90-day re-score scheduled automatically.",
  },
];

const FAQS = [
  {
    q: "Who is this audit for?",
    a: "Anyone in a knowledge or technology-adjacent role who senses their career trajectory is uncertain — but can’t diagnose it precisely. Works best for software engineers, business analysts, QA engineers, finance professionals, and project managers with 2–10 years of experience.",
  },
  {
    q: "How is the SA-AIRS™ score calculated?",
    a: "Rule-based, not AI-generated. Every dimension (Task Repetition, Automation Feasibility, Market Saturation, Decision Complexity, Human Dependency) is scored from your inputs using defined, transparent logic. All scores include a confidence level. Full methodology at sriramadvisory.com/methodology.",
  },
  {
    q: "What if I disagree with my score?",
    a: "Reply to the report with the specific dimension you think is incorrect and it will be worked through directly. The confidence rating already flags where the model has lower certainty.",
  },
  {
    q: "How is this different from the base SA-AIRS™ assessment?",
    a: "This audit adds a specific 12/36-month risk horizon, explicit Top 10% Ladder placement, and role-specific 90-day moves — for people who want the diagnosis and an immediate action plan in one report.",
  },
  {
    q: "What is the refund policy?",
    a: "Full refund if your report doesn’t contain at least one actionable insight you hadn’t considered. No forms. No questions asked. Reply within 48 hours of receiving the report.",
  },
];

export default function AmIFutureProofPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)", background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      {/* BLURB STRIP */}
      <div style={{ background: "#0a1628", borderBottom: "1px solid #1e3a5f", padding: "14px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#dc2626" }}>
            What is this?
          </span>
          <span style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>
            SA-AIRS™ is a rule-based career risk scoring system. This page lets you book a personal 48-hour audit — your role scored across 5 dimensions, placed on the Top 10% Ladder, with a 12 and 36-month risk horizon.
          </span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "80px 24px 72px", borderBottom: "1px solid #e8edf5", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", display: "block", marginBottom: 20 }}>
            SA-AIRS™ Career Risk Audit · India 2026
          </span>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 800, color: "#0a1628", lineHeight: 1.05, marginBottom: 8, letterSpacing: "-0.03em" }}>
            Am I{" "}
            <em style={{ fontStyle: "italic", color: "#dc2626" }}>Future-Proof?</em>
          </h1>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b", marginBottom: 28 }}>
            48-Hour Career Risk Audit
          </p>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.85, marginBottom: 40, maxWidth: 560 }}>
            The SA-AIRS™ audit scores your current role across five weighted dimensions, places you on the Top 10% Ladder, and tells you your risk horizon at{" "}
            <strong style={{ color: "#0a1628" }}>12 months and 36 months.</strong>{" "}
            Rule-based. Transparent. No black boxes.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 48 }}>
            <CashfreeCheckout
              productName="SA-AIRS™ Career Risk Audit"
              amount={499}
              buttonLabel="Book the Audit — ₹499 →"
              accentColor="#0a1628"
              buttonStyle={{ background: "#0a1628", color: "#ffffff", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 8, border: "1px solid #1e3a5f" }}
            />
            <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#374151", border: "1px solid #cbd5e1", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 8, textDecoration: "none" }}>
              Read the methodology
            </Link>
          </div>

          <div className="aifp-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid #e2e8f0", paddingTop: 28 }}>
            {[
              { val: "5", label: "Dimensions Scored" },
              { val: "48hr", label: "Turnaround" },
              { val: "₹499", label: "Full Audit" },
              { val: "100%", label: "Refund Guarantee" },
            ].map((s, i) => (
              <div key={i} style={{ paddingLeft: i > 0 ? 20 : 0, borderLeft: i > 0 ? "1px solid #e2e8f0" : "none" }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#0a1628", lineHeight: 1, marginBottom: 4 }}>{s.val}</div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748b" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section style={{ padding: "72px 24px", borderBottom: "1px solid #e8edf5" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#0a1628", marginBottom: 32, letterSpacing: "-0.02em" }}>
            What you receive
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {WHAT_YOU_GET.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ color: "#dc2626", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>—</span>
                <span style={{ fontSize: 15, color: "#374151", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "72px 24px", background: "#f7f9fc", borderBottom: "1px solid #e8edf5" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#0a1628", marginBottom: 36, letterSpacing: "-0.02em" }}>
            How it works
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {STEPS.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#dc2626", flexShrink: 0, paddingTop: 2, width: 28 }}>{s.n}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "72px 24px", borderBottom: "1px solid #e8edf5" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#0a1628", marginBottom: 32, letterSpacing: "-0.02em" }}>
            Pricing
          </h2>
          <div style={{ border: "1px solid #e8edf5", padding: "40px 36px", background: "#ffffff" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b", marginBottom: 20 }}>
              Full SA-AIRS™ Career Risk Audit
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 16 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#0a1628" }}>₹</span>
              <span style={{ fontSize: 72, fontWeight: 800, color: "#0a1628", lineHeight: 1, letterSpacing: "-0.03em" }}>499</span>
            </div>
            <p style={{ fontSize: 14, color: "#64748b", marginBottom: 32, lineHeight: 1.7 }}>
              Written report delivered within 48 hours of receiving your completed intake form. One option. No tiers. No upsells at checkout.
            </p>
            <CashfreeCheckout
              productName="SA-AIRS™ Career Risk Audit"
              amount={499}
              buttonLabel="Book the Audit — ₹499 →"
              accentColor="#0a1628"
              buttonStyle={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", background: "#0a1628", color: "#ffffff", fontWeight: 700, fontSize: 15, padding: "16px 28px", border: "1px solid #1e3a5f", letterSpacing: "0.01em", borderRadius: 8 }}
            />
            <p style={{ marginTop: 20, fontSize: 12, color: "#94a3b8", lineHeight: 1.6, textAlign: "center" }}>
              Full refund if you don&apos;t receive at least one actionable insight you hadn&apos;t considered. No forms. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#0a1628", marginBottom: 36, letterSpacing: "-0.02em" }}>
            Common questions
          </h2>
          <div style={{ borderTop: "1px solid #e2e8f0" }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ padding: "24px 0", borderBottom: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#0a1628", marginBottom: 8 }}>{faq.q}</div>
                <div style={{ fontSize: 14, color: "#64748b", lineHeight: 1.85 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 560px) {
          .aifp-stats { grid-template-columns: 1fr 1fr !important; row-gap: 20px; }
        }
      `}</style>

      <Footer />
    </div>
  );
}
