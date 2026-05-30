import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selenium Engineer Upgrade Guide 2026 | Sriram Advisory",
  description:
    "SA-AIRS score: 7.2/10. A practical India-first upgrade guide for Selenium engineers navigating the Playwright and AI-era shift. Includes role-risk clarity, repositioning strategy, and a structured action plan. Rs 499.",
};

const PERSONAL_DELIVERY_NOTE =
  "After your payment, Sriram personally emails the guide to you. This is a manual send by design so the delivery stays transparent and human.";
const BONUS_GUIDE_TITLE =
  "With every purchase, get Sriram Advisory's Agentic AI Field Guide for free.";
const BONUS_GUIDE_NOTE =
  "A concise companion guide covering what AI agents are, how they reason, tool-use patterns, memory, guardrails, observability, and where the frontier is headed.";

const WHAT_INSIDE = [
  { icon: "SE", label: "SA-AIRS Score 7.2 Decoded", desc: "A clear explanation of what the market shift means for Selenium-heavy careers in India." },
  { icon: "MS", label: "The Market Split", desc: "A practical view of why some automation roles are flattening while stronger upgrade paths are pulling away." },
  { icon: "UP", label: "Upgrade Positioning", desc: "How to present your Selenium background as a foundation for higher-value automation work instead of a legacy dead end." },
  { icon: "AP", label: "Structured Action Plan", desc: "A practical plan to help you move deliberately instead of collecting disconnected tools and tutorials." },
  { icon: "HS", label: "Hiring Signal Guidance", desc: "What stronger automation profiles communicate today and how to make your experience feel more current." },
  { icon: "MD", label: "Market Direction", desc: "A clearer picture of where premium automation demand is moving in India without giving away the full paid playbook." },
];

const FOR_YOU = [
  "You are a Selenium Automation Engineer with experience and want to stay ahead of the shift",
  "You have started seeing new automation expectations in job postings and need a clearer upgrade path",
  "You want stronger GCC or product positioning without discarding your base experience",
  "You want a practical roadmap instead of just another testing tutorial",
  "You want to move toward more durable automation relevance",
];

const NOT_FOR_YOU = [
  "You are already operating at an advanced Playwright and AI evaluation level",
  "You want a beginner automation course or hands-on Selenium tutorial",
  "You are outside India and looking for a global QA market analysis",
];

const SHIFT_STAGES = [
  { stage: "Stage 1", title: "Legacy Automation Comfort", desc: "Your profile is still too tightly tied to older automation expectations and familiar tooling.", color: "#64748b" },
  { stage: "Stage 2", title: "Modern Automation Relevance", desc: "You begin to signal stronger architecture awareness, better tooling currency, and more future-ready thinking.", color: "#4f46e5" },
  { stage: "Stage 3", title: "Higher-Leverage Quality Positioning", desc: "You are seen as someone who can own stronger automation outcomes in a more AI-shaped environment.", color: "#0d9268" },
];

export default function SeleniumEngineerUpgradeGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section style={{ background: "linear-gradient(135deg, #0a0a2e 0%, #1e1b4b 50%, #312e81 100%)", paddingTop: 100, paddingBottom: 90, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 20px", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(234,179,8,0.2)", border: "1px solid rgba(234,179,8,0.45)", borderRadius: 20, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fde68a" }}>
              SA-AIRS Score: 7.2 / 10 - Active Upgrade Risk
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(99,102,241,0.22)", border: "1px solid rgba(99,102,241,0.45)", borderRadius: 20, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c7d2fe" }}>
              India 2026 Edition
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(34px, 5.5vw, 64px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.08, marginBottom: 22, letterSpacing: "-0.03em" }}>
            Selenium Engineer
            <br />
            <span style={{ color: "#a5b4fc" }}>Upgrade Guide 2026</span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 2.2vw, 20px)", color: "rgba(199,210,254,0.85)", lineHeight: 1.65, maxWidth: 680, margin: "0 auto 16px" }}>
            Selenium experience is still valuable, but the market is moving. This guide helps you understand the shift,
            reposition your automation background, and move toward stronger modern relevance without guessing.
          </p>

          <p style={{ fontSize: 15, color: "rgba(165,180,252,0.65)", fontStyle: "italic", marginBottom: 44 }}>
            Your base is not the problem. Standing still is.
          </p>

          <div className="hero-price-box" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>Rs 499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a5b4fc", marginBottom: 20, display: "block" }}>
              Personal Email Delivery
            </span>
            <p style={{ fontSize: 13, color: "rgba(220,210,255,0.82)", lineHeight: 1.6, margin: "0 0 18px" }}>
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>

            <CashfreeCheckout
              productName="Selenium Engineer Upgrade Guide 2026"
              amount={499}
              accentColor="#4f46e5"
              buttonLabel="Get the Guide Now - Rs 499 ->"
              buttonStyle={{ fontSize: 17, fontWeight: 700, padding: "16px 36px", borderRadius: 10, background: "#4f46e5", color: "#ffffff", border: "none", cursor: "pointer", letterSpacing: "0.01em", width: "100%", minWidth: 280 }}
            />
            <p style={{ fontSize: 13, color: "rgba(165,180,252,0.5)", marginTop: 12 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "88px 20px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#d97706", display: "block", marginBottom: 16 }}>
              SA-AIRS Exposure Score
            </span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 24 }}>
              <span style={{ fontSize: "clamp(64px, 10vw, 96px)", fontWeight: 900, color: "#d97706", lineHeight: 1, letterSpacing: "-0.04em" }}>7.2</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#d97706", textTransform: "uppercase", letterSpacing: "0.08em" }}>Active Upgrade Risk</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>The market is splitting between legacy comfort and modern demand</div>
              </div>
            </div>
            <div style={{ maxWidth: 480, margin: "0 auto", background: "#f0f4f8", borderRadius: 8, height: 12, overflow: "hidden" }}>
              <div style={{ width: "72%", height: "100%", background: "linear-gradient(90deg, #fbbf24, #d97706)", borderRadius: 8 }} />
            </div>
          </div>

          <div className="qa-score-card-pad" style={{ background: "linear-gradient(135deg, #0a0a2e 0%, #1e1b4b 100%)", borderRadius: 20, textAlign: "center" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a5b4fc", marginBottom: 20 }}>
              What this score actually means
            </p>
            <h2 style={{ fontSize: "clamp(20px, 3.2vw, 38px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 0 }}>
              Legacy automation still has demand.
              <br />
              Premium automation is moving elsewhere.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(199,210,254,0.7)", marginTop: 20, lineHeight: 1.7 }}>
              This guide is about upgrading your market story and automation identity before the gap widens further.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f3ff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4f46e5", display: "block", marginBottom: 12 }}>
              Inside the Guide
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What You Actually Get
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {WHAT_INSIDE.map((item) => (
              <div key={item.label} style={{ background: "#ffffff", border: "1px solid #c7d2fe", borderRadius: 14, padding: "24px 26px" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#4f46e5", marginBottom: 12 }}>{item.icon}</div>
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
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4f46e5", display: "block", marginBottom: 12 }}>
              The Shift
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What Better Automation Positioning Looks Like
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {SHIFT_STAGES.map((item) => (
              <div key={item.title} style={{ background: "#f8faff", border: "1px solid #e8eef8", borderRadius: 16, padding: "22px 22px" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: item.color, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{item.stage}</div>
                <div style={{ fontSize: 19, fontWeight: 800, color: "#0a1628", marginBottom: 10 }}>{item.title}</div>
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
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#4f46e5", display: "block", marginBottom: 24 }}>
                This Is For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {FOR_YOU.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#4f46e5", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>+</span>
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

      <section style={{ background: "linear-gradient(135deg, #0a0a2e 0%, #1e1b4b 100%)", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Upgrade before the market gap widens.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(199,210,254,0.7)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto 40px" }}>
            Use this guide to turn Selenium experience into stronger modern relevance, better positioning, and a clearer upgrade path.
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>Rs 499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a5b4fc", marginBottom: 20 }}>
              Personal Email Delivery
            </span>
            <p style={{ fontSize: 13, color: "rgba(220,210,255,0.82)", lineHeight: 1.6, margin: "0 0 18px", maxWidth: 560 }}>
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>
            <CashfreeCheckout
              productName="Selenium Engineer Upgrade Guide 2026"
              amount={499}
              accentColor="#4f46e5"
              buttonLabel="Get the Guide - Rs 499 ->"
              buttonStyle={{ fontSize: 16, fontWeight: 700, padding: "16px 40px", borderRadius: 10, background: "#4f46e5", color: "#ffffff", border: "none", cursor: "pointer", letterSpacing: "0.01em", minWidth: 260 }}
            />
            <p style={{ fontSize: 13, color: "rgba(220,210,255,0.5)", marginTop: 14 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
