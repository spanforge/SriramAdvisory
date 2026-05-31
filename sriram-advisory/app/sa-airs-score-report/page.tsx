"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";

const REPORT_PARTS = [
  {
    num: "01",
    title: "Career Thinking Score",
    label: "The input layer",
    desc: "5 thinking frames scored 1-10 with confidence levels. Where you actually operate and not where you assume. Each frame score feeds directly into your SA-AIRS dimensions.",
  },
  {
    num: "02",
    title: "SA-AIRS(TM) Composite Score",
    label: "Your number",
    desc: "A composite AI risk score across 5 dimensions: Task Repetition, Automation Feasibility, Market Saturation, Decision Complexity, Human Dependency. Each scored, weighted, and confidence-rated.",
  },
  {
    num: "03",
    title: "The Bridge",
    label: "The calculation",
    desc: "The causal data chain showing exactly how your thinking frame scores produce your SA-AIRS dimension scores. Not interpretation. A documented, traceable calculation.",
  },
  {
    num: "04",
    title: "Ladder Position",
    label: "Where you sit",
    desc: "L1-L5 placement derived from your scores. A data position on the distribution and not a target. What the numbers say about where you currently operate.",
  },
  {
    num: "05",
    title: "Dimension Benchmarks",
    label: "Context for your number",
    desc: "How each of your 5 SA-AIRS(TM) dimension scores compares to role and industry averages. Your number in context and not isolated.",
  },
  {
    num: "06",
    title: "90-Day Re-Score",
    label: "Track your position",
    desc: "Re-score your thinking frames at 90 days. See what moved in your SA-AIRS. Track your position over time.",
  },
];

const PRO_OFFER = {
  badge: "Pro",
  name: "SA-AIRS(TM) Score Report + Quarterly Re-Score",
  price: "Rs999",
  priceNote: "Includes two quarterly re-scores through 2026",
  desc: "Full score report with industry-level benchmarks, role-level market data, and two scheduled re-scores through December 2026.",
  includes: [
    "Career Thinking Score across all 5 frames",
    "SA-AIRS(TM) composite score (0-10)",
    "The Bridge - full causal chain",
    "Ladder position (L1-L5)",
    "Dimension benchmarks vs role averages",
    "Industry-level benchmark data",
    "Role-level market context",
    "Quarterly re-score - Q3 2026",
    "Quarterly re-score - Q4 2026",
    "Updated SA-AIRS position each quarter",
  ],
  accent: "#0d9268",
  bg: "linear-gradient(135deg, #f0faf5 0%, #e0f6ed 100%)",
  border: "#6ee7b7",
  amount: 999,
  productName: "SA-AIRS Score Report - Pro",
  cta: "Get Pro Report - Rs999 ->",
};

const DISCLAIMER =
  "Analytical scoring based on self-reported inputs. SA-AIRS(TM) scores are data-derived positions and not predictions, guarantees, or professional advice. Career outcomes depend on many variables beyond what any scoring system captures. By purchasing you acknowledge this is a data product for your own interpretation, not career counselling or professional guidance.";

export default function SAIRSScoreReportPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 60%, #e6efff 100%)",
          paddingTop: 120,
          paddingBottom: 100,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(26,79,214,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,214,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -80,
            right: "8%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(26,79,214,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(26,79,214,0.07)",
              border: "1px solid rgba(26,79,214,0.35)",
              borderRadius: 4,
              padding: "5px 14px",
              marginBottom: 36,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0d9268", display: "inline-block" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Data Product · India 2026
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(38px, 5.5vw, 68px)",
              fontWeight: 800,
              color: "#0a1628",
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            SA-AIRS(TM) Pro Score Report
          </h1>
          <p
            style={{
              fontSize: "clamp(17px, 2.2vw, 22px)",
              color: "#4a5a7a",
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 640,
            }}
          >
            India&apos;s first analytical scoring system for AI career risk.
            Five dimensions. One composite score. All inputs traceable. Quarterly re-scores included.
          </p>
          <p
            style={{
              fontSize: 16,
              color: "#5a6a8a",
              lineHeight: 1.7,
              marginBottom: 48,
              maxWidth: 580,
              padding: "20px 24px",
              background: "rgba(26,79,214,0.05)",
              border: "1px solid rgba(26,79,214,0.15)",
              borderRadius: 10,
            }}
          >
            Career counsellors tell you what to do. We show you where you stand with data you can verify, benchmark, and re-score.
          </p>

          <CashfreeCheckout
            productName={PRO_OFFER.productName}
            amount={PRO_OFFER.amount}
            accentColor={PRO_OFFER.accent}
            buttonLabel={PRO_OFFER.cta}
            buttonStyle={{
              background: "#0d9268",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              padding: "15px 36px",
              borderRadius: 10,
              border: "1px solid #22d3a0",
              letterSpacing: "0.02em",
            }}
          />
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1a4fd6" }}>
              What happens next
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 800, color: "#0a1628", marginTop: 14, letterSpacing: "-0.02em" }}>
              Three steps. Max 48 hours.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                step: "01",
                label: "Within 24 hours of payment",
                title: "You receive the questionnaire link",
                desc: "After your payment is confirmed, you will receive an email with a link to the SA-AIRS(TM) questionnaire. Answer every question to the best of your ability because your score is only as accurate as your inputs.",
              },
              {
                step: "02",
                label: "You complete the questionnaire",
                title: "Fill and submit",
                desc: "Work through the questionnaire at your own pace. There are no right or wrong answers, only honest ones. Submit when done. The clock starts from your submission.",
              },
              {
                step: "03",
                label: "Within 24 hours of submission",
                title: "Your PDF report lands in your inbox",
                desc: "Your full SA-AIRS(TM) Pro Score Report is sent as a PDF to the email address you provided at checkout. Scored, benchmarked, traceable, and scheduled for quarterly follow-up.",
              },
            ].map((item, i, arr) => (
              <div
                key={item.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 28,
                  padding: "32px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid rgba(26,79,214,0.1)" : "none",
                  alignItems: "start",
                }}
              >
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1a4fd6", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {item.step}
                  </div>
                  <div style={{ fontSize: 11, color: "#5a6a8a", marginTop: 4, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.4 }}>
                    {item.label}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0a1628", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>
              Every Pro Report
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#0a1628", marginTop: 16, letterSpacing: "-0.02em" }}>
              Six parts. One data picture.
            </h2>
            <p style={{ fontSize: 16, color: "#5a6a8a", lineHeight: 1.7, marginTop: 12, maxWidth: 520, margin: "12px auto 0" }}>
              Every SA-AIRS(TM) Pro Score Report includes all six parts below. The score is rule-based, not AI-generated. Every input is traceable.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {REPORT_PARTS.map((part, i) => (
              <div
                key={part.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  gap: 32,
                  padding: "32px 0",
                  borderBottom: i < REPORT_PARTS.length - 1 ? "1px solid rgba(26,79,214,0.1)" : "none",
                  alignItems: "start",
                }}
              >
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1a4fd6", letterSpacing: "0.1em", textTransform: "uppercase" }}>{part.num}</div>
                  <div style={{ fontSize: 12, color: "#5a6a8a", marginTop: 4, letterSpacing: "0.05em", textTransform: "uppercase" }}>{part.label}</div>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", marginBottom: 8 }}>{part.title}</h3>
                  <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.7 }}>{part.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>
              Pro Offering
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#0a1628", marginTop: 16, letterSpacing: "-0.02em" }}>
              One complete package
            </h2>
          </div>

          <div
            style={{
              background: PRO_OFFER.bg,
              border: `1.5px solid ${PRO_OFFER.border}`,
              borderRadius: 20,
              padding: "36px 32px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 8px 40px rgba(13,146,104,0.12)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: PRO_OFFER.accent,
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "3px 10px",
                borderRadius: 10,
              }}
            >
              Most Complete
            </div>

            <div
              style={{
                display: "inline-flex",
                marginBottom: 20,
                background: `${PRO_OFFER.accent}18`,
                border: `1px solid ${PRO_OFFER.accent}44`,
                borderRadius: 8,
                padding: "4px 12px",
                width: "fit-content",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PRO_OFFER.accent }}>
                {PRO_OFFER.badge}
              </span>
            </div>

            <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 800, color: "#0a1628", marginBottom: 12, lineHeight: 1.25 }}>
              {PRO_OFFER.name}
            </h3>

            <p style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.6, marginBottom: 24 }}>
              {PRO_OFFER.desc}
            </p>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 34, fontWeight: 800, color: PRO_OFFER.accent }}>{PRO_OFFER.price}</span>
              </div>
              <div style={{ fontSize: 13, color: "#7a8aaa" }}>{PRO_OFFER.priceNote}</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 28 }}>
              {PRO_OFFER.includes.map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: PRO_OFFER.accent, fontWeight: 700, flexShrink: 0, fontSize: 13, marginTop: 2 }}>+</span>
                  <span style={{ fontSize: 13, color: "#2a3a5a", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            <CashfreeCheckout
              productName={PRO_OFFER.productName}
              amount={PRO_OFFER.amount}
              accentColor={PRO_OFFER.accent}
              buttonLabel={PRO_OFFER.cta}
              buttonStyle={{
                background: PRO_OFFER.accent,
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                padding: "13px 24px",
                borderRadius: 10,
                border: `1px solid ${PRO_OFFER.accent}`,
                letterSpacing: "0.01em",
                width: "100%",
                textAlign: "center",
              }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268" }}>
            Why This is Different
          </span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 32, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            A score, not a plan.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                head: "Rule-based, not AI-generated",
                body: "Every SA-AIRS(TM) score is calculated using a documented, transparent rule set. You can trace every number back to your specific input. No black box.",
              },
              {
                head: "Benchmarked, not absolute",
                body: "Your score only means something in context. Every report includes how your dimensions compare to role and industry averages so you know where you sit, not just what your number is.",
              },
              {
                head: "Tracked, not one-shot",
                body: "The Pro report includes scheduled quarterly re-scores. Your SA-AIRS position is a moving data point, not a fixed verdict.",
              },
              {
                head: "No prescriptions",
                body: "The report shows you the data. What you do with it is entirely yours. We are not career counsellors and we do not tell you what to do next.",
              },
            ].map(({ head, body }) => (
              <div
                key={head}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "24px 28px",
                  background: "#ffffff",
                  border: "1px solid rgba(26,79,214,0.1)",
                  borderRadius: 12,
                  alignItems: "flex-start",
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a4fd6", flexShrink: 0, marginTop: 8 }} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 6 }}>{head}</div>
                  <div style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.7 }}>{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "120px 24px",
          background: "linear-gradient(160deg, #080f1e 0%, #0a1628 60%, #0d1f3c 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 400,
            background: "radial-gradient(ellipse, rgba(26,79,214,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#f8faff", marginBottom: 16, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Know exactly where you stand.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(248,250,255,0.75)", lineHeight: 1.7, marginBottom: 48 }}>
            Delivered within 24 hours. Quarterly re-scores included through 2026.
            Full refund if you don&apos;t get at least one clear insight.
          </p>

          <CashfreeCheckout
            productName={PRO_OFFER.productName}
            amount={PRO_OFFER.amount}
            accentColor={PRO_OFFER.accent}
            buttonLabel={PRO_OFFER.cta}
            buttonStyle={{
              background: "#0d9268",
              color: "#fff",
              fontWeight: 700,
              fontSize: 17,
              padding: "16px 40px",
              borderRadius: 10,
              border: "1px solid #22d3a0",
              letterSpacing: "0.02em",
            }}
          />

          <div
            style={{
              marginTop: 48,
              padding: "20px 28px",
              background: "rgba(255,80,80,0.06)",
              border: "1px solid rgba(255,80,80,0.15)",
              borderRadius: 10,
              textAlign: "left",
            }}
          >
            <p style={{ fontSize: 14, color: "rgba(248,250,255,0.8)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "rgba(248,250,255,0.9)" }}>Disclaimer:</strong> {DISCLAIMER}{" "}
              <Link href="/disclaimer" style={{ color: "rgba(200,218,255,0.8)", textDecoration: "underline" }}>
                Full disclaimer {"->"}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
