import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps Survival Guide 2026 | Sriram Advisory",
  description:
    "SA-AIRS score: 6.8/10. An India-first DevOps career guide for engineers navigating AI-driven compression of pipeline work and moving toward platform reliability, AI infrastructure, and GCC-ready roles. Rs 499.",
};

const PERSONAL_DELIVERY_NOTE =
  "After your payment, Sriram personally emails the guide to you. This is a manual send by design so the delivery stays transparent and human.";
const BONUS_GUIDE_TITLE =
  "With every purchase, get Sriram Advisory's Agentic AI Field Guide for free.";
const BONUS_GUIDE_NOTE =
  "A concise companion guide covering what AI agents are, how they reason, tool-use patterns, memory, guardrails, observability, and where the frontier is headed.";

const WHAT_INSIDE = [
  {
    icon: "DV",
    label: "Role-Risk Clarity",
    desc: "A sharper explanation of what active risk means for DevOps engineers and where the market is quietly moving underneath them.",
  },
  {
    icon: "PT",
    label: "Positioning Direction",
    desc: "A practical way to reposition beyond pipeline-heavy execution without pretending to be an architect overnight.",
  },
  {
    icon: "60",
    label: "60-Day Upgrade Plan",
    desc: "A focused plan to help you build visible proof and stronger market signal instead of endlessly collecting tools and courses.",
  },
  {
    icon: "IP",
    label: "Portfolio and Interview Signal",
    desc: "Guidance on how to frame your production experience so stronger teams see platform thinking, judgment, and reliability ownership.",
  },
];

const LEVERAGE_ZONES = [
  {
    title: "Reliability Thinking",
    desc: "The kind of production judgment that becomes more valuable as boilerplate infrastructure work gets cheaper.",
    color: "#1d4ed8",
  },
  {
    title: "Platform Ownership",
    desc: "The move from deployment support toward stronger platform, cost, and systems-level accountability.",
    color: "#0f766e",
  },
  {
    title: "AI-Era Infrastructure Relevance",
    desc: "A clearer sense of where DevOps experience can still compound in an AI-shaped engineering market.",
    color: "#b45309",
  },
];

const FOR_YOU = [
  "You are a DevOps, SRE, or platform-leaning engineer in India and more of your work is becoming boilerplate",
  "You are strong in CI/CD, Terraform, Docker, or Kubernetes, but you want a better path than competing on YAML speed",
  "You want to reposition toward GCC or product roles with stronger reliability, platform, or AI infrastructure ownership",
  "You need a practical 60-day direction, not another vague prompt to 'learn AI'",
  "You have real production experience and want to turn that scar tissue into a market advantage",
];

const NOT_FOR_YOU = [
  "You want a deep technical certification course on one DevOps tool rather than a career repositioning guide",
  "You are already operating as a staff-level platform architect with strong SLO, FinOps, and AI infrastructure ownership",
  "You are outside India and want a broad global market analysis instead of India-first positioning guidance",
];

const SHIFT_STAGES = [
  {
    stage: "Before",
    title: "Execution-Heavy DevOps",
    desc: "Your market story is dominated by setup, maintenance, and repetitive delivery mechanics.",
    color: "#64748b",
  },
  {
    stage: "After",
    title: "Higher-Leverage Platform Signal",
    desc: "You are seen as someone who can think about reliability, systems tradeoffs, and stronger production outcomes.",
    color: "#1d4ed8",
  },
];

export default function DevopsSurvivalGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background:
            "linear-gradient(135deg, #07111d 0%, #0d1b2a 50%, #1d4ed8 100%)",
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
              SA-AIRS Score: 6.8 / 10 - Active Risk
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(96,165,250,0.18)",
                border: "1px solid rgba(96,165,250,0.45)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#bfdbfe",
              }}
            >
              India 2026 Edition
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(34px, 5.5vw, 64px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              marginBottom: 22,
              letterSpacing: "-0.03em",
            }}
          >
            DevOps
            <br />
            <span style={{ color: "#bfdbfe" }}>Survival Guide 2026</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 2.2vw, 21px)",
              color: "rgba(210,225,255,0.86)",
              lineHeight: 1.65,
              maxWidth: 700,
              margin: "0 auto 16px",
            }}
          >
            DevOps is not disappearing. But repetitive pipeline, config, and IaC
            work is getting cheaper fast. This guide helps you move toward platform
            reliability, AI infrastructure, and higher-leverage engineering work in
            India.
          </p>

          <p
            style={{
              fontSize: 15,
              color: "rgba(191,219,254,0.68)",
              fontStyle: "italic",
              marginBottom: 44,
            }}
          >
            The moat is no longer writing more YAML. It is better production judgment.
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
                color: "#bfdbfe",
                marginBottom: 20,
              }}
            >
              Personal Email Delivery
            </span>
            <p
              style={{
                fontSize: 13,
                color: "rgba(210,225,255,0.82)",
                lineHeight: 1.6,
                margin: "0 0 18px",
              }}
            >
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>

            <CashfreeCheckout
              productName="DevOps Survival Guide 2026"
              amount={499}
              accentColor="#1d4ed8"
              buttonLabel="Get the Guide Now - Rs 499 ->"
              buttonStyle={{
                fontSize: 17,
                fontWeight: 700,
                padding: "16px 36px",
                borderRadius: 10,
                background: "#1d4ed8",
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
                color: "rgba(191,219,254,0.45)",
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
                6.8
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
                  Active Risk
                </div>
              <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>
                  Repetitive DevOps work is under real pressure
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
                  width: "68%",
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
              background: "linear-gradient(135deg, #07111d 0%, #0d1b2a 100%)",
              borderRadius: 20,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#bfdbfe",
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
              AI can accelerate configuration work.
              <br />
              It still cannot replace production judgment.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(191,219,254,0.75)",
                marginTop: 20,
                lineHeight: 1.7,
              }}
            >
              This guide is about moving away from pipeline-only identity and toward
              stronger production judgment, better positioning, and work that compounds
              more defensibly in the market.
            </p>
          </div>

          <div
            className="stats-grid-3"
            style={{ background: "#e8eef8", borderRadius: 14, overflow: "hidden", marginTop: 28 }}
          >
            {[
              { stat: "600,000+", label: "directional estimate for DevOps, SRE, and platform engineers in India" },
              { stat: "6.8 / 10", label: "SA-AIRS signal for a role under meaningful but not irreversible pressure" },
              { stat: "Rs 50+ LPA", label: "upper-end upside for stronger platform-oriented roles at top GCCs" },
            ].map((s) => (
              <div key={s.stat} style={{ background: "#f8fbff", padding: "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, color: "#0a1628", letterSpacing: "-0.03em" }}>{s.stat}</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 6, lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#eff6ff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1d4ed8", display: "block", marginBottom: 12 }}>
              Inside the Guide
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What You Actually Get
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {WHAT_INSIDE.map((item) => (
              <div key={item.label} style={{ background: "#ffffff", border: "1px solid #bfdbfe", borderRadius: 14, padding: "24px 26px" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#1d4ed8", marginBottom: 12 }}>{item.icon}</div>
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
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1d4ed8", display: "block", marginBottom: 12 }}>
              The Shift
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What Better DevOps Positioning Looks Like
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, maxWidth: 700, margin: "0 auto" }}>
            {SHIFT_STAGES.map((item) => (
              <div key={item.title} style={{ background: "#f8fbff", border: "1px solid #dbeafe", borderRadius: 16, padding: "22px 22px" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: item.color, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{item.stage}</div>
                <div style={{ fontSize: 19, fontWeight: 800, color: "#0a1628", marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "72px 20px" }}>
        <div style={{ maxWidth: 940, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0f766e", display: "block", marginBottom: 12 }}>
              Leverage Zones
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              Where Human-Critical DevOps Work Still Compounds
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.7, maxWidth: 620, margin: "14px auto 0" }}>
              The guide goes deeper into the specific leverage areas. This page only gives the broad shape of the opportunity.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {LEVERAGE_ZONES.map((item) => (
              <div key={item.title} style={{ background: "#ffffff", border: "1px solid #d9e2ec", borderRadius: 16, padding: "22px 22px" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-cols-1 md:grid-cols-2">
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1d4ed8", display: "block", marginBottom: 24 }}>
                This Is For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {FOR_YOU.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#1d4ed8", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>+</span>
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
          background: "linear-gradient(160deg, #07111d 0%, #0d1b2a 60%, #1d4ed8 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#f8faff", marginBottom: 16, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Move beyond pipeline maintenance.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(240,250,255,0.76)", lineHeight: 1.7, marginBottom: 48 }}>
            Use this guide to turn DevOps experience into a stronger platform story,
            a clearer transition plan, and a more defensible role in an AI-shaped market.
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>Rs 499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bfdbfe", marginBottom: 20 }}>
              Personal Email Delivery
            </span>
            <p style={{ fontSize: 13, color: "rgba(210,225,255,0.82)", lineHeight: 1.6, margin: "0 0 18px", maxWidth: 560 }}>
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>
            <CashfreeCheckout
              productName="DevOps Survival Guide 2026"
              amount={499}
              accentColor="#1d4ed8"
              buttonLabel="Get the Guide - Rs 499 ->"
              buttonStyle={{
                fontSize: 16,
                fontWeight: 700,
                padding: "16px 40px",
                borderRadius: 10,
                background: "#1d4ed8",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                minWidth: 260,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(210,225,255,0.5)", marginTop: 14 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
