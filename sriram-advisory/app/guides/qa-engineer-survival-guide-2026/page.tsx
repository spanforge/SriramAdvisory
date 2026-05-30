import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QA Engineer Survival Guide 2026 | Sriram Advisory",
  description:
    "SA-AIRS score: 9.5/10. A practical career repositioning guide for manual QA professionals navigating AI disruption in India. Includes role-risk clarity, transition strategy, and a buyer-ready action plan. Rs 499.",
};

const PERSONAL_DELIVERY_NOTE =
  "After your payment, Sriram personally emails the guide to you. This is a manual send by design so the delivery stays transparent and human.";
const BONUS_GUIDE_TITLE =
  "With every purchase, get Sriram Advisory's Agentic AI Field Guide for free.";
const BONUS_GUIDE_NOTE =
  "A concise companion guide covering what AI agents are, how they reason, tool-use patterns, memory, guardrails, observability, and where the frontier is headed.";

const WHAT_INSIDE = [
  {
    icon: "QA",
    label: "SA-AIRS Score 9.5 Decoded",
    desc: "A clear explanation of what this score means for manual QA work in India and why the pressure is rising so quickly.",
  },
  {
    icon: "HZ",
    label: "Your Human-Value Zone",
    desc: "A practical lens for understanding which kinds of quality work become more valuable as repetitive execution gets automated.",
  },
  {
    icon: "RS",
    label: "Repositioning Strategy",
    desc: "How to move from manual-only identity toward stronger quality ownership without pretending to be something you are not.",
  },
  {
    icon: "AP",
    label: "Action Plan",
    desc: "A structured plan to help you make steady progress instead of collecting random courses, tools, and advice.",
  },
  {
    icon: "HS",
    label: "Hiring Signal Guidance",
    desc: "What stronger QA profiles communicate in the current market and how to make your experience feel more relevant.",
  },
  {
    icon: "EX",
    label: "Examples and Support",
    desc: "Frameworks, examples, and messaging support designed to make your next move clearer and easier to execute.",
  },
];

const FOR_YOU = [
  "You are a Manual QA Engineer or QA Lead in Indian IT services",
  "Your team has started automation or AI tooling and you feel behind",
  "You have tried applying to new QA roles and the market feels flat",
  "You want a concrete plan instead of generic upskilling advice",
  "You want to become harder to replace, not just more anxious",
];

const NOT_FOR_YOU = [
  "You are already an SDET or Quality Engineer actively using advanced AI testing workflows",
  "You want a technical course on Selenium or automation fundamentals",
  "You are outside India and want a global QA market analysis",
];

const SHIFT_STAGES = [
  {
    stage: "Stage 1",
    title: "Manual-Only Execution",
    desc: "Your value is tied too tightly to repetitive testing work that can increasingly be automated.",
    color: "#64748b",
  },
  {
    stage: "Stage 2",
    title: "Stronger Quality Ownership",
    desc: "You begin to signal judgment, risk awareness, and the ability to think beyond checklist execution.",
    color: "#16a34a",
  },
  {
    stage: "Stage 3",
    title: "Higher-Leverage QA Positioning",
    desc: "You are presented as someone who protects quality outcomes, not just someone who runs test cases.",
    color: "#0d9268",
  },
];

export default function QAEngineerSurvivalGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background:
            "linear-gradient(135deg, #071a14 0%, #0d3322 50%, #0f5c3a 100%)",
          paddingTop: 100,
          paddingBottom: 90,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 840,
            margin: "0 auto",
            padding: "0 20px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginBottom: 28,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(220,38,38,0.2)",
                border: "1px solid rgba(220,38,38,0.45)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fca5a5",
              }}
            >
              SA-AIRS Score: 9.5 / 10 - High Exposure
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(13,146,104,0.18)",
                border: "1px solid rgba(13,146,104,0.45)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6ee7b7",
              }}
            >
              India 2026 Edition
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 5.5vw, 66px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              marginBottom: 22,
              letterSpacing: "-0.03em",
            }}
          >
            QA Engineer
            <br />
            <span style={{ color: "#6ee7b7" }}>Survival Guide 2026</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 2.2vw, 21px)",
              color: "rgba(180,240,220,0.85)",
              lineHeight: 1.65,
              maxWidth: 680,
              margin: "0 auto 16px",
            }}
          >
            Manual QA is under the sharpest AI pressure in Indian IT. This guide
            helps you understand the threat clearly, reposition your experience,
            and move toward higher-value quality work before the role narrows
            further.
          </p>

          <p
            style={{
              fontSize: 15,
              color: "rgba(110,231,183,0.65)",
              fontStyle: "italic",
              marginBottom: 44,
            }}
          >
            The window is still open, but it is not staying open forever.
          </p>

          <div
            className="hero-price-box"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                }}
              >
                Rs 499
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6ee7b7",
                marginBottom: 20,
              }}
            >
              Personal Email Delivery
            </span>
            <p
              style={{
                fontSize: 13,
                color: "rgba(180,240,220,0.82)",
                lineHeight: 1.6,
                margin: "0 0 18px",
              }}
            >
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>

            <CashfreeCheckout
              productName="QA Engineer Survival Guide 2026"
              amount={499}
              accentColor="#0d9268"
              buttonLabel="Get the Guide Now - Rs 499 ->"
              buttonStyle={{
                fontSize: 17,
                fontWeight: 700,
                padding: "16px 36px",
                borderRadius: 10,
                background: "#0d9268",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                width: "100%",
                minWidth: 280,
              }}
            />
            <p
              style={{
                fontSize: 13,
                color: "rgba(180,230,210,0.5)",
                marginTop: 12,
              }}
            >
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "88px 20px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#dc2626",
                display: "block",
                marginBottom: 16,
              }}
            >
              SA-AIRS Exposure Score
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  fontSize: "clamp(64px, 10vw, 96px)",
                  fontWeight: 900,
                  color: "#dc2626",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                9.5
              </span>
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#dc2626",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  High Exposure
                </div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>
                  Among the most disrupted roles in Indian IT
                </div>
              </div>
            </div>
            <div
              style={{
                maxWidth: 480,
                margin: "0 auto",
                background: "#f0f4f8",
                borderRadius: 8,
                height: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "95%",
                  height: "100%",
                  background: "linear-gradient(90deg, #fbbf24, #dc2626)",
                  borderRadius: 8,
                }}
              />
            </div>
          </div>

          <div
            className="qa-score-card-pad"
            style={{
              background: "linear-gradient(135deg, #071a14 0%, #0d3322 100%)",
              borderRadius: 20,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#6ee7b7",
                marginBottom: 20,
              }}
            >
              What this score actually means
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 40px)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: 0,
              }}
            >
              Manual-only QA is narrowing fast.
              <br />
              The safer move is upward, not sideways.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(180,240,220,0.72)",
                marginTop: 20,
                lineHeight: 1.7,
              }}
            >
              This guide is about moving from execution-heavy QA identity toward
              stronger quality judgment, ownership, and market relevance.
            </p>
          </div>

          <div
            className="stats-grid-3"
            style={{
              background: "#e8eef8",
              borderRadius: 14,
              overflow: "hidden",
              marginTop: 28,
            }}
          >
            {[
              { stat: "95%", label: "of repetitive regression work increasingly under pressure" },
              { stat: "12-18 mo", label: "a realistic window to reposition before the market hardens further" },
              { stat: "Rs 499", label: "for a practical India-first guide instead of generic career advice" },
            ].map((s) => (
              <div
                key={s.stat}
                style={{ background: "#f8faff", padding: "28px 20px", textAlign: "center" }}
              >
                <div style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, color: "#0a1628", letterSpacing: "-0.03em" }}>
                  {s.stat}
                </div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 6, lineHeight: 1.5 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#f0fdf8", padding: "72px 20px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0d9268", display: "block", marginBottom: 12 }}>
              Inside the Guide
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What You Actually Get
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {WHAT_INSIDE.map((item) => (
              <div key={item.label} style={{ background: "#ffffff", border: "1px solid #bbf7d0", borderRadius: 14, padding: "24px 26px" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#0d9268", marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 8 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0d9268", display: "block", marginBottom: 12 }}>
              The Shift
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What Better QA Positioning Looks Like
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {SHIFT_STAGES.map((item) => (
              <div key={item.title} style={{ background: "#f8fafc", border: "1px solid #d9e2ec", borderRadius: 16, padding: "22px 22px" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: item.color, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                  {item.stage}
                </div>
                <div style={{ fontSize: 19, fontWeight: 800, color: "#0a1628", marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#f8faff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-cols-1 md:grid-cols-2">
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9268", display: "block", marginBottom: 24 }}>
                This Is For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {FOR_YOU.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#0d9268", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>+</span>
                    <span style={{ fontSize: 15, color: "#4a5a7a", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#dc2626", display: "block", marginBottom: 24 }}>
                Not For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {NOT_FOR_YOU.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#dc2626", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>x</span>
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
          background: "linear-gradient(160deg, #071a14 0%, #0d3322 60%, #0f5c3a 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#f8faff", marginBottom: 16, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Move before the role narrows further.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(240,250,255,0.76)", lineHeight: 1.7, marginBottom: 48 }}>
            Use this guide to replace vague fear with a clearer plan, stronger positioning,
            and a more future-proof version of your QA career.
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>Rs 499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6ee7b7", marginBottom: 20 }}>
              Personal Email Delivery
            </span>
            <p style={{ fontSize: 13, color: "rgba(190,235,240,0.82)", lineHeight: 1.6, margin: "0 0 18px", maxWidth: 560 }}>
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>
            <CashfreeCheckout
              productName="QA Engineer Survival Guide 2026"
              amount={499}
              accentColor="#0d9268"
              buttonLabel="Get the Guide - Rs 499 ->"
              buttonStyle={{
                fontSize: 16,
                fontWeight: 700,
                padding: "16px 40px",
                borderRadius: 10,
                background: "#0d9268",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                minWidth: 260,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(190,235,240,0.5)", marginTop: 14 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
