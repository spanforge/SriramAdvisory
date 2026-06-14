import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";

export const metadata: Metadata = {
  title: "Career Intelligence Report - SA-AIRS Pro | Sriram Advisory",
  description:
    "India's first analytical scoring system for AI career risk. 5 dimensions. One composite score. All inputs traceable. SA-AIRS Pro Report - Rs 999.",
};

const SIX_PARTS = [
  {
    num: "Part 1",
    title: "Career Thinking Assessment",
    label: "Why you're stuck",
    desc: "All 5 thinking frames scored. Where you actually operate - not where you assume you do. Each frame rated 1-10 with the cost of staying in your current pattern.",
  },
  {
    num: "Part 2",
    title: "SA-AIRS Risk Score",
    label: "Proof that thinking matters",
    desc: "Your AI risk across 5 dimensions with confidence level. Task Repetition, Automation Feasibility, Market Saturation, Decision Complexity, and Human Dependency - each explained by your thinking pattern.",
  },
  {
    num: "Part 3",
    title: "The Bridge",
    label: "The connection",
    desc: "Why your risk exists. The causal chain from your thinking patterns to your SA-AIRS score to your career exposure. Not abstract - specific to your role and frame profile.",
  },
  {
    num: "Part 4",
    title: "Your Top 10% Ladder Placement",
    label: "Where you sit",
    desc: "L1-L5 placement derived from your scores. Not a target - a data position on the distribution. What the data says about where you currently operate.",
  },
  {
    num: "Part 5",
    title: "Dimension Benchmarks",
    label: "Context for your number",
    desc: "How each of your 5 SA-AIRS dimension scores compares to role and industry averages. Your number in context - not isolated.",
  },
  {
    num: "Part 6",
    title: "90-Day Re-Assessment",
    label: "Track your evolution",
    desc: "Included with every report. Re-score your thinking frames at 90 days. See what shifted. Get an updated SA-AIRS position.",
  },
];

const FOR_YOU = [
  "You are a working professional wondering exactly where you stand in the AI era",
  "You want to understand your actual thinking pattern - not just be told to learn AI",
  "You are mid-career and sense something is shifting but cannot name what",
  "You want a score you can verify and re-measure over time",
  "Your work context is primarily in India",
  "You want transparent scoring with confidence levels - not a black box",
  "You want your number benchmarked against others in your role",
];

const NOT_FOR_YOU = [
  "You want someone to tell you what to do next",
  "You want a certificate or completion credential",
  "You want guaranteed career outcomes (see disclaimer)",
  "You are looking for a technical AI course or tool training",
  "You are already at a senior advisory or L4-L5 level with strong AI fluency",
];

const DISCLAIMER =
  "Analytical scoring based on self-reported inputs. SA-AIRS scores are data-derived positions - not predictions, guarantees, or professional advice. Career outcomes depend on many variables beyond what any scoring system captures. By purchasing you acknowledge this is a data product for your own interpretation, not career counselling or professional guidance.";

export default function SaAirsProPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ background: "#f7f9fc", borderBottom: "1px solid rgba(26,79,214,0.1)", padding: "12px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Link
            href="/career-intelligence-report"
            style={{ fontSize: 13, color: "#1a4fd6", textDecoration: "none", fontWeight: 500 }}
          >
            {"<-"} All Reports
          </Link>
        </div>
      </div>

      <section
        style={{
          background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 60%, #e6efff 100%)",
          paddingTop: 80,
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
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#0d9268",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#1a4fd6",
              }}
            >
              SA-AIRS Pro
            </span>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(13,146,104,0.08)",
              border: "1px solid rgba(13,146,104,0.22)",
              borderRadius: 999,
              padding: "6px 14px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#0d9268",
              marginBottom: 24,
            }}
          >
            India 2026 Edition
          </div>

          <h1
            style={{
              fontSize: "clamp(38px, 5.5vw, 68px)",
              fontWeight: 800,
              color: "#0a1628",
              lineHeight: 1.1,
              marginBottom: 18,
              letterSpacing: "-0.02em",
            }}
          >
            Career Intelligence Report
          </h1>
          <p
            style={{
              fontSize: "clamp(17px, 2.2vw, 22px)",
              color: "#4a5a7a",
              lineHeight: 1.7,
              marginBottom: 16,
              maxWidth: 620,
            }}
          >
            A structured intelligence report built on live market data, role-level automation
            trends, hiring patterns, and industry benchmarks.
          </p>
          <p
            style={{
              fontSize: 15,
              color: "#5a6a8a",
              lineHeight: 1.8,
              fontStyle: "italic",
              marginBottom: 24,
              maxWidth: 620,
            }}
          >
            A score-led diagnostic for professionals who want a sharper read on where they stand
            and how exposed they really are.
          </p>
          <div style={{ maxWidth: 360, marginBottom: 28 }}>
            <CashfreeCheckout
              productName="Career Intelligence Report - Pro"
              amount={999}
              accentColor="#0d9268"
              buttonLabel="Get My Score — ₹999"
              buttonStyle={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                background: "#1a4fd6",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                padding: "15px 20px",
                borderRadius: 10,
                border: "1px solid #3b6ef0",
                letterSpacing: "0.02em",
                boxShadow: "0 14px 32px rgba(26,79,214,0.18)",
              }}
            />
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
            <div
              style={{
                background: "rgba(26,79,214,0.06)",
                border: "1px solid rgba(26,79,214,0.45)",
                borderRadius: 10,
                padding: "20px 28px",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#1a4fd6",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                Pro Report
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#0d9268" }}>Rs 999</div>
              </div>
              <div style={{ fontSize: 14, color: "#5a6a8a", marginTop: 4 }}>
                Includes quarterly update assessment
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <CashfreeCheckout
              productName="Career Intelligence Report - Pro"
              amount={999}
              accentColor="#0d9268"
              buttonLabel="Get My Score — ₹999"
              buttonStyle={{
                background: "#1a4fd6",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                padding: "15px 36px",
                borderRadius: 10,
                border: "1px solid #3b6ef0",
                letterSpacing: "0.02em",
              }}
            />
          </div>
          <p style={{ marginTop: 16, fontSize: 14, color: "#5a6a8a" }}>
            Guarantee: If you do not get at least one actionable insight, full refund with no
            questions.
          </p>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#0d9268",
            }}
          >
            The Problem
          </span>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 44px)",
              fontWeight: 800,
              color: "#0a1628",
              marginTop: 16,
              marginBottom: 28,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Most professionals are managing the wrong risk.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              "They are asking if AI will replace their job when the better question is whether they are thinking about their job in a way that makes them easy to replace.",
              "They are learning tools when the moat is built on judgment - deciding which problems to solve, not just executing solutions.",
              "They are treating their five years of experience as a moat when adaptability compounds and experience can expire.",
              "They are waiting to master AI before acting while others build real things and move to higher leverage.",
            ].map((text) => (
              <div key={text} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "rgba(255,80,80,0.15)",
                    border: "1px solid rgba(255,80,80,0.3)",
                    flexShrink: 0,
                    marginTop: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: 13, color: "#dc2626" }}>x</span>
                </div>
                <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 40,
              padding: "28px 32px",
              background: "rgba(26,79,214,0.06)",
              border: "1px solid rgba(26,79,214,0.25)",
              borderRadius: 12,
            }}
          >
            <p style={{ fontSize: 18, fontWeight: 700, color: "#0a1628", lineHeight: 1.6, margin: 0 }}>
              This report gives you a diagnostic, not a prescription. It shows you precisely where
              you score and the causal chain that produced that score.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#0d9268",
              }}
            >
              The Report
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 46px)",
                fontWeight: 800,
                color: "#0a1628",
                marginTop: 16,
                letterSpacing: "-0.02em",
              }}
            >
              6 Parts. One Diagnostic System.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {SIX_PARTS.map((part, index) => (
              <div
                key={part.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 32,
                  padding: "36px 0",
                  borderBottom:
                    index < SIX_PARTS.length - 1 ? "1px solid rgba(26,79,214,0.12)" : "none",
                  alignItems: "start",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#1a4fd6",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {part.num}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#5a6a8a",
                      marginTop: 4,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {part.label}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0a1628", marginBottom: 10 }}>
                    {part.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.7 }}>{part.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}
            className="grid-cols-1 md:grid-cols-2"
          >
            <div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#0d9268",
                  display: "block",
                  marginBottom: 24,
                }}
              >
                This Is For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {FOR_YOU.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#0d9268", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>
                      +
                    </span>
                    <span style={{ fontSize: 15, color: "#4a5a7a", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#dc2626",
                  display: "block",
                  marginBottom: 24,
                }}
              >
                Not For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {NOT_FOR_YOU.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#dc2626", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>
                      x
                    </span>
                    <span style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              color: "#f8faff",
              marginBottom: 16,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Know exactly where you stand.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(248,250,255,0.75)", lineHeight: 1.7, marginBottom: 48 }}>
            Delivered within 24 hours. 90-day re-assessment included. Full refund if you do not get
            at least one actionable insight.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <CashfreeCheckout
              productName="Career Intelligence Report - Pro"
              amount={999}
              accentColor="#0d9268"
              buttonLabel="Get My Score — ₹999"
              buttonStyle={{
                background: "#1a4fd6",
                color: "#fff",
                fontWeight: 700,
                fontSize: 17,
                padding: "16px 40px",
                borderRadius: 10,
                border: "1px solid #3b6ef0",
                letterSpacing: "0.02em",
              }}
            />
          </div>
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
              <Link
                href="/disclaimer"
                style={{ color: "rgba(200,218,255,0.8)", textDecoration: "underline" }}
              >
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
