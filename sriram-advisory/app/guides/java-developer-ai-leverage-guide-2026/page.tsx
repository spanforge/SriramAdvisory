import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Java Developer AI Leverage Guide 2026 | Sriram Advisory",
  description:
    "SA-AIRS score: 7.5/10. A practical India-first guide for Java developers using AI to move into higher-leverage work. Includes role-risk clarity, positioning strategy, and a structured action plan. Rs 499.",
};

const PERSONAL_DELIVERY_NOTE =
  "After your payment, Sriram personally emails the guide to you. This is a manual send by design so the delivery stays transparent and human.";
const BONUS_GUIDE_TITLE =
  "With every purchase, get Sriram Advisory's Agentic AI Field Guide for free.";
const BONUS_GUIDE_NOTE =
  "A concise companion guide covering what AI agents are, how they reason, tool-use patterns, memory, guardrails, observability, and where the frontier is headed.";

const WHAT_INSIDE = [
  { icon: "JV", label: "SA-AIRS Score 7.5 Decoded", desc: "A clear breakdown of what is actually at risk in Java careers and what still compounds." },
  { icon: "LZ", label: "Your Leverage Zones", desc: "A practical way to think about architecture, diagnosis, ownership, and domain judgment as your moat." },
  { icon: "PS", label: "Positioning Strategy", desc: "How to stop sounding like a boilerplate implementation resource and start sounding like a higher-value engineer." },
  { icon: "AP", label: "Structured Action Plan", desc: "A practical plan for building visible proof instead of vaguely trying to learn everything around AI." },
  { icon: "MD", label: "Market Direction", desc: "A clearer view of where Java plus AI is creating stronger buyer interest in India." },
  { icon: "HS", label: "Hiring Signal Guidance", desc: "What makes a Java profile feel more future-ready in GCC and product settings without revealing the full paid playbook here." },
];

const FOR_YOU = [
  "You are a Java or Spring Boot developer who feels repetitive implementation work is becoming easier to automate",
  "You want to use AI to increase leverage without abandoning the Java ecosystem",
  "You are targeting stronger GCC or product roles and want better positioning",
  "You want a practical roadmap instead of generic advice to just learn AI",
  "You want to move up the value chain, not sideways into panic",
];

const NOT_FOR_YOU = [
  "You are already building advanced production AI features in Java and mainly need deep technical implementation help",
  "You want a beginner Java course or a full Spring Boot tutorial",
  "You are outside India and looking for a global Java market analysis",
];

const SHIFT_STAGES = [
  { stage: "Stage 1", title: "Boilerplate Dependence", desc: "Your profile is too tightly tied to implementation speed and repeatable backend work.", color: "#78716c" },
  { stage: "Stage 2", title: "AI-Augmented Delivery", desc: "You start signaling stronger output, better judgment, and improved technical leverage.", color: "#b45309" },
  { stage: "Stage 3", title: "Higher-Leverage Java Positioning", desc: "You are seen as someone who owns design, trade-offs, and business-aware engineering decisions.", color: "#ea580c" },
];

export default function JavaDeveloperAILeverageGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section style={{ background: "linear-gradient(135deg, #1c0d05 0%, #5b2410 55%, #b45309 100%)", paddingTop: 100, paddingBottom: 90, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 20px", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(239,68,68,0.18)", border: "1px solid rgba(239,68,68,0.4)", borderRadius: 20, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fecaca" }}>
              SA-AIRS Score: 7.5 / 10 - Active Risk
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(251,191,36,0.18)", border: "1px solid rgba(251,191,36,0.38)", borderRadius: 20, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fde68a" }}>
              India 2026 Edition
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(34px, 5.5vw, 64px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.08, marginBottom: 22, letterSpacing: "-0.03em" }}>
            Java Developer
            <br />
            <span style={{ color: "#fdba74" }}>AI Leverage Guide 2026</span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 2.2vw, 20px)", color: "rgba(255,230,200,0.86)", lineHeight: 1.65, maxWidth: 680, margin: "0 auto 16px" }}>
            Java is not disappearing. But commodity Java work is getting squeezed. This guide helps you move toward
            higher-leverage engineering identity built around judgment, architecture, and better AI-era positioning.
          </p>

          <p style={{ fontSize: 15, color: "rgba(253,186,116,0.7)", fontStyle: "italic", marginBottom: 44 }}>
            Let AI handle the repeatable work. Keep your time for what compounds.
          </p>

          <div className="hero-price-box" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>Rs 499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fdba74", marginBottom: 20, display: "block" }}>
              Personal Email Delivery
            </span>
            <p style={{ fontSize: 13, color: "rgba(255,235,210,0.82)", lineHeight: 1.6, margin: "0 0 18px" }}>
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>

            <CashfreeCheckout
              productName="Java Developer AI Leverage Guide 2026"
              amount={499}
              accentColor="#b45309"
              buttonLabel="Get the Guide Now - Rs 499 ->"
              buttonStyle={{ fontSize: 17, fontWeight: 700, padding: "16px 36px", borderRadius: 10, background: "#b45309", color: "#ffffff", border: "none", cursor: "pointer", letterSpacing: "0.01em", width: "100%", minWidth: 280 }}
            />
            <p style={{ fontSize: 13, color: "rgba(255,220,190,0.6)", marginTop: 12 }}>
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
              <span style={{ fontSize: "clamp(64px, 10vw, 96px)", fontWeight: 900, color: "#dc2626", lineHeight: 1, letterSpacing: "-0.04em" }}>7.5</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.08em" }}>Active Risk</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>Comfortable today, more compressed tomorrow</div>
              </div>
            </div>
            <div style={{ maxWidth: 480, margin: "0 auto", background: "#f0f4f8", borderRadius: 8, height: 12, overflow: "hidden" }}>
              <div style={{ width: "75%", height: "100%", background: "linear-gradient(90deg, #f59e0b, #dc2626)", borderRadius: 8 }} />
            </div>
          </div>

          <div className="qa-score-card-pad" style={{ background: "linear-gradient(135deg, #1c0d05 0%, #5b2410 100%)", borderRadius: 20, textAlign: "center" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fdba74", marginBottom: 20 }}>
              What this score actually means
            </p>
            <h2 style={{ fontSize: "clamp(20px, 3.2vw, 38px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 0 }}>
              Repetitive Java work is becoming cheaper.
              <br />
              Design judgment is becoming more valuable.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,230,200,0.72)", marginTop: 20, lineHeight: 1.7 }}>
              This guide is about using AI to become more valuable inside the Java ecosystem, not abandoning the stack in panic.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff7ed", padding: "72px 20px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309", display: "block", marginBottom: 12 }}>
              Inside the Guide
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What You Actually Get
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {WHAT_INSIDE.map((item) => (
              <div key={item.label} style={{ background: "#ffffff", border: "1px solid #fdba74", borderRadius: 14, padding: "24px 26px" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#b45309", marginBottom: 12 }}>{item.icon}</div>
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
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309", display: "block", marginBottom: 12 }}>
              The Shift
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What Better Java Positioning Looks Like
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {SHIFT_STAGES.map((item) => (
              <div key={item.title} style={{ background: "#fffaf5", border: "1px solid #fde0c2", borderRadius: 16, padding: "22px 22px" }}>
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
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b45309", display: "block", marginBottom: 24 }}>
                This Is For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {FOR_YOU.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#b45309", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>+</span>
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

      <section style={{ background: "linear-gradient(135deg, #1c0d05 0%, #5b2410 100%)", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Move up the Java value chain.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,230,200,0.75)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto 40px" }}>
            Use this guide to become more visible, more trusted, and more durable as a Java developer in an AI-shaped market.
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>Rs 499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fdba74", marginBottom: 20 }}>
              Personal Email Delivery
            </span>
            <p style={{ fontSize: 13, color: "rgba(255,235,210,0.82)", lineHeight: 1.6, margin: "0 0 18px", maxWidth: 560 }}>
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>
            <CashfreeCheckout
              productName="Java Developer AI Leverage Guide 2026"
              amount={499}
              accentColor="#b45309"
              buttonLabel="Get the Guide - Rs 499 ->"
              buttonStyle={{ fontSize: 16, fontWeight: 700, padding: "16px 40px", borderRadius: 10, background: "#b45309", color: "#ffffff", border: "none", cursor: "pointer", letterSpacing: "0.01em", minWidth: 260 }}
            />
            <p style={{ fontSize: 13, color: "rgba(255,235,210,0.5)", marginTop: 14 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
