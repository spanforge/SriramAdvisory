import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Sriram Advisory",
  description: "Frequently asked questions about the Career Intelligence Report, SA-AIRS™ scoring, methodology, privacy, and refunds.",
};

const FAQ_SECTIONS = [
  {
    section: "The Report",
    color: "#1a4fd6",
    items: [
      {
        q: "Is this a course or a certification?",
        a: "No. This is a diagnostic and thinking framework system. You don't get a certificate — you get a personalised report that shows your thinking patterns, risk score, and a 90-day practice plan. The value is in clarity, not credentials.",
      },
      {
        q: "How long does it take to complete the assessment?",
        a: "About 15 minutes. It's designed to be thorough enough to be meaningful, and short enough to be completed honestly without fatigue.",
      },
      {
        q: "When do I receive my report?",
        a: "Within 24 hours of completing your assessment. You'll receive it by email.",
      },
      {
        q: "What does the 30-day re-assessment involve?",
        a: "At 30 days, you complete a shorter version of the thinking frame assessment. We compare your responses with your baseline, show you what shifted, and generate your next challenge set. No extra cost — included with every report.",
      },
      {
        q: "What's the difference between Standard (₹999) and Pro (₹1,999)?",
        a: "Standard includes the full 6-part report + 30-day re-assessment. Pro adds a quarterly update assessment for 12 months.",
      },
    ],
  },
  {
    section: "Methodology",
    color: "#0d9268",
    items: [
      {
        q: "How is the SA-AIRS™ score calculated?",
        a: "Rule-based, not AI-generated. Each of the 5 dimensions (Task Repetition, Automation Feasibility, Market Saturation, Decision Complexity, Human Dependency) is scored from your inputs using defined logic. Every score includes a confidence level — we are transparent about uncertainty.",
      },
      {
        q: "What if I disagree with my score?",
        a: "Good. Disagreement means you're thinking. Your score is data-derived from your inputs — not a verdict handed down by someone. If your inputs change, your score changes. That's exactly what the 90-day re-score is for.",
      },
      {
        q: "What is the 10% Ladder?",
        a: "Five levels of thinking sophistication: L1 (Surface), L2 (Functional), L3 (Applied), L4 (Strategic), L5 (Expert). Most professionals are at L1–L2 and believe they're at L3. The report shows you exactly where you are and what L3 thinking looks like in your specific role. L3 is the minimum strategic threshold — the 90-day goal.",
      },
      {
        q: "Is the methodology peer-reviewed?",
        a: "Not externally. We're transparent about this. The framework is built on domain knowledge and pattern observation — it is directional guidance, not clinical psychology. See the full methodology and limitations page for details.",
      },
    ],
  },
  {
    section: "Privacy & Data",
    color: "#a78bfa",
    items: [
      {
        q: "What data do you collect?",
        a: "Your assessment answers, current role context, and contact details (name + email). We don't collect financial data — all payments are processed securely by Cashfree. We never sell or share personal data with third parties.",
      },
      {
        q: "How long is my data kept?",
        a: "Full data is retained for 12 months or until you request deletion. Anonymised patterns may be retained for research. Personal identifiers are removed after 30 days from the anonymised dataset.",
      },
      {
        q: "Can I request my data be deleted?",
        a: "Yes. Email sriram@sriramadvisory.com with the subject 'Data Deletion Request'. We'll confirm deletion within 72 hours.",
      },
    ],
  },
  {
    section: "Refunds & Guarantees",
    color: "#0d9268",
    items: [
      {
        q: "What is the refund guarantee?",
        a: "If you don't get at least one actionable insight from your report — full refund, no questions asked. Email sriram@sriramadvisory.com within 14 days of receiving your report.",
      },
      {
        q: "What counts as 'no actionable insight'?",
        a: "Your call. We don't define it narrowly. If you read the report and genuinely feel you got nothing useful from it — we'll refund you. We'd rather refund than have someone feel they got bad value.",
      },
      {
        q: "Can I get a refund if I disagree with my score?",
        a: "Disagreeing with your score alone isn't a basis for a refund — the guarantee is about whether you got value, not whether you liked the results. But if you email us your disagreement, we'll engage with it seriously.",
      },
    ],
  },
  {
    section: "Disclaimers",
    color: "#dc2626",
    items: [
      {
        q: "Is this career counselling?",
        a: "No. This is educational and analytical commentary. We do not provide career counselling, psychological diagnosis, or employment guarantees. See the full disclaimer.",
      },
      {
        q: "Does this guarantee any outcome?",
        a: "No. Career outcomes depend on many factors beyond thinking patterns — market conditions, skill set, timing, organisational context. The report gives you clarity and direction; outcomes depend on you.",
      },
      {
        q: "What does 'directional guidance' mean?",
        a: "It means the scores indicate patterns and tendencies — they are not precise measurements or clinical assessments. A score of 6/10 doesn't mean you're exactly at the 60th percentile. It means your thinking pattern sits in this range with this confidence level. Use it for reflection, not as definitive data.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 60%, #e6efff 100%)", paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,79,214,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,214,0.04) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a4fd6", display: "block", marginBottom: 20 }}>Help &amp; Answers</span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, color: "#0a1628", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: 18, color: "#5a6a8a", lineHeight: 1.7 }}>
            Everything you need to know about the report, methodology, data, and refunds.
            If your question isn&apos;t here — <Link href="/contact" style={{ color: "#1a4fd6", textDecoration: "underline" }}>ask us directly</Link>.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 24px 120px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {FAQ_SECTIONS.map((section) => (
            <div key={section.section} style={{ marginBottom: 64 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                <div style={{ width: 4, height: 24, background: section.color, borderRadius: 2 }} />
                <h2 style={{ fontSize: 20, fontWeight: 800, color: "#0a1628", letterSpacing: "-0.01em" }}>{section.section}</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {section.items.map(({ q, a }) => (
                  <div key={q} style={{ background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.15)", borderRadius: 12, padding: "24px 28px" }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 12 }}>{q}</div>
                    <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.75 }}>{a}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ padding: "32px", background: "rgba(26,79,214,0.06)", border: "1px solid rgba(26,79,214,0.25)", borderRadius: 14, textAlign: "center" }}>
            <p style={{ fontSize: 16, color: "#4a5a7a", marginBottom: 16 }}>Still have a question?</p>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#1a4fd6", color: "#fff", fontWeight: 700,
              fontSize: 15, padding: "12px 28px", borderRadius: 9,
              textDecoration: "none",
            }}>Contact Us →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
