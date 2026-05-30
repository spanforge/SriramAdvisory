import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPO & Customer Support Career Survival Guide 2026 | Sriram Advisory",
  description:
    "SA-AIRS score: 9.2/10. A practical repositioning guide for BPO and customer support professionals navigating AI disruption in India. Includes role-risk clarity, transition thinking, and a focused action plan. Rs 499.",
};

const PERSONAL_DELIVERY_NOTE =
  "After your payment, Sriram personally emails the guide to you. This is a manual send by design so the delivery stays transparent and human.";
const BONUS_GUIDE_TITLE =
  "With every purchase, get Sriram Advisory's Agentic AI Field Guide for free.";
const BONUS_GUIDE_NOTE =
  "A concise companion guide covering what AI agents are, how they reason, tool-use patterns, memory, guardrails, observability, and where the frontier is headed.";

const WHAT_INSIDE = [
  {
    icon: "BP",
    label: "SA-AIRS Score 9.2 Decoded",
    desc: "A plain-English explanation of what this score means for support and BPO roles in India right now.",
  },
  {
    icon: "RM",
    label: "Where the Pressure Is Rising",
    desc: "A practical view of which parts of support work are shrinking fastest and where human value still matters.",
  },
  {
    icon: "TR",
    label: "Transition Thinking",
    desc: "How to reframe your experience so it feels relevant in an AI-shaped support market instead of trapped in legacy titles.",
  },
  {
    icon: "CP",
    label: "Career Repositioning Paths",
    desc: "A higher-level view of the kinds of work that become more attractive as AI absorbs repetitive support tasks.",
  },
  {
    icon: "AP",
    label: "Structured Action Plan",
    desc: "A practical roadmap built to help working professionals move with clarity rather than panic.",
  },
  {
    icon: "PS",
    label: "Profile and Messaging Support",
    desc: "Guidance for presenting your experience in a way that signals judgment, adaptability, and stronger long-term value.",
  },
];

const FOR_YOU = [
  "You work in a BPO, call centre, or customer support role in India",
  "Your floor has started using AI tools and you feel your role shrinking",
  "You want a concrete repositioning plan, not generic advice to just learn AI",
  "You have support experience and want to leverage it rather than discard it",
  "You want to understand how to stay relevant as service workflows change",
];

const NOT_FOR_YOU = [
  "You are already working in an advanced AI operations or bot quality role",
  "You want a technical AI engineering path involving coding or ML",
  "You are outside India and want a global BPO market analysis",
];

const SHIFT_STAGES = [
  {
    stage: "Stage 1",
    title: "Scripted Task Dependence",
    desc: "Your value is tied too closely to routine support execution that AI can increasingly absorb.",
    color: "#78716c",
  },
  {
    stage: "Stage 2",
    title: "Human Judgment and Escalation",
    desc: "You begin to signal exception handling, quality judgment, and better operational awareness.",
    color: "#d97706",
  },
  {
    stage: "Stage 3",
    title: "Higher-Leverage Support Positioning",
    desc: "You are presented as someone who improves the system, not just someone who works inside it.",
    color: "#b45309",
  },
];

export default function BPOCareerSurvivalGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background:
            "linear-gradient(135deg, #1c0a00 0%, #3b1a00 50%, #78350f 100%)",
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

        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 20px", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
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
              SA-AIRS Score: 9.2 / 10 - High Exposure
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(217,119,6,0.18)",
                border: "1px solid rgba(217,119,6,0.45)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fcd34d",
              }}
            >
              India 2026 Edition
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(34px, 5.5vw, 62px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.08, marginBottom: 22, letterSpacing: "-0.03em" }}>
            BPO &amp; Customer Support
            <br />
            <span style={{ color: "#fcd34d" }}>Career Survival Guide 2026</span>
          </h1>

          <p style={{ fontSize: "clamp(17px, 2.2vw, 21px)", color: "rgba(255,220,150,0.85)", lineHeight: 1.65, maxWidth: 680, margin: "0 auto 16px" }}>
            AI is reshaping support work quickly. This guide helps you understand where the risk really is,
            what parts of your experience still compound, and how to reposition into stronger work before the market settles.
          </p>

          <p style={{ fontSize: 15, color: "rgba(252,211,77,0.55)", fontStyle: "italic", marginBottom: 44 }}>
            The goal is not panic. The goal is better positioning.
          </p>

          <div className="hero-price-box" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>Rs 499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fcd34d", marginBottom: 20 }}>
              Personal Email Delivery
            </span>
            <p style={{ fontSize: 13, color: "rgba(255,220,150,0.82)", lineHeight: 1.6, margin: "0 0 18px" }}>
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>

            <CashfreeCheckout
              productName="BPO Career Survival Guide 2026"
              amount={499}
              accentColor="#d97706"
              buttonLabel="Get the Guide Now - Rs 499 ->"
              buttonStyle={{
                fontSize: 17,
                fontWeight: 700,
                padding: "16px 36px",
                borderRadius: 10,
                background: "#d97706",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                width: "100%",
                minWidth: 280,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(255,200,100,0.45)", marginTop: 12 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "88px 20px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#dc2626", display: "block", marginBottom: 16 }}>
              SA-AIRS Exposure Score
            </span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 24 }}>
              <span style={{ fontSize: "clamp(64px, 10vw, 96px)", fontWeight: 900, color: "#dc2626", lineHeight: 1, letterSpacing: "-0.04em" }}>9.2</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  High Exposure
                </div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>
                  One of the most disrupted large workforces in India
                </div>
              </div>
            </div>
            <div style={{ maxWidth: 480, margin: "0 auto", background: "#f0f4f8", borderRadius: 8, height: 12, overflow: "hidden" }}>
              <div style={{ width: "92%", height: "100%", background: "linear-gradient(90deg, #fbbf24, #dc2626)", borderRadius: 8 }} />
            </div>
          </div>

          <div className="qa-score-card-pad" style={{ background: "linear-gradient(135deg, #1c0a00 0%, #3b1a00 100%)", borderRadius: 20, textAlign: "center" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fcd34d", marginBottom: 20 }}>
              What this score actually means
            </p>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 40px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 0 }}>
              Scripted support work is compressing.
              <br />
              Human judgment is where the moat starts.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,220,150,0.72)", marginTop: 20, lineHeight: 1.7 }}>
              This guide is about moving from routine support dependence toward stronger exception handling,
              quality judgment, escalation value, and better market relevance.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#fffbeb", padding: "72px 20px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d97706", display: "block", marginBottom: 12 }}>
              Inside the Guide
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What You Actually Get
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {WHAT_INSIDE.map((item) => (
              <div key={item.label} style={{ background: "#ffffff", border: "1px solid #fde68a", borderRadius: 14, padding: "24px 26px" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#d97706", marginBottom: 12 }}>{item.icon}</div>
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
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d97706", display: "block", marginBottom: 12 }}>
              The Shift
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What Better Support Positioning Looks Like
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {SHIFT_STAGES.map((item) => (
              <div key={item.title} style={{ background: "#fffaf5", border: "1px solid #fde0c2", borderRadius: 16, padding: "22px 22px" }}>
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

      <section style={{ padding: "72px 20px", background: "#fafbff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-cols-1 md:grid-cols-2">
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d97706", display: "block", marginBottom: 24 }}>
                This Is For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {FOR_YOU.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#d97706", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>+</span>
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

      <section style={{ padding: "120px 24px", background: "linear-gradient(160deg, #1c0a00 0%, #3b1a00 60%, #78350f 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#f8faff", marginBottom: 16, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Reposition before the market settles without you.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(240,250,255,0.76)", lineHeight: 1.7, marginBottom: 48 }}>
            Use this guide to replace fear with a clearer strategy, stronger career signal,
            and a more durable version of your support experience.
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>Rs 499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fcd34d", marginBottom: 20 }}>
              Personal Email Delivery
            </span>
            <p style={{ fontSize: 13, color: "rgba(255,220,150,0.82)", lineHeight: 1.6, margin: "0 0 18px", maxWidth: 560 }}>
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>
            <CashfreeCheckout
              productName="BPO Career Survival Guide 2026"
              amount={499}
              accentColor="#d97706"
              buttonLabel="Get the Guide - Rs 499 ->"
              buttonStyle={{
                fontSize: 16,
                fontWeight: 700,
                padding: "16px 40px",
                borderRadius: 10,
                background: "#d97706",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                minWidth: 260,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(255,220,150,0.5)", marginTop: 14 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
