import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analyst Career Guide 2026 | Sriram Advisory",
  description:
    "SA-AIRS score: 7.8/10. A practical India-first guide for analysts navigating AI-driven role change. Includes role-risk clarity, repositioning strategy, and a structured action plan. Rs 499.",
};

const PERSONAL_DELIVERY_NOTE =
  "After your payment, Sriram personally emails the guide to you. This is a manual send by design so the delivery stays transparent and human.";
const BONUS_GUIDE_TITLE =
  "With every purchase, get Sriram Advisory's Agentic AI Field Guide for free.";
const BONUS_GUIDE_NOTE =
  "A concise companion guide covering what AI agents are, how they reason, tool-use patterns, memory, guardrails, observability, and where the frontier is headed.";

const WHAT_INSIDE = [
  { icon: "DA", label: "SA-AIRS Score 7.8 Decoded", desc: "A clear explanation of what this score means for reporting-heavy analyst roles in India." },
  { icon: "RM", label: "Risk Map for Analyst Work", desc: "A sharper lens on which kinds of analyst work are becoming more automated and which kinds are becoming more valuable." },
  { icon: "PS", label: "Positioning Strategy", desc: "How to move from dashboard dependence toward insight, decision support, and stronger business relevance." },
  { icon: "AP", label: "Structured Action Plan", desc: "A practical plan to help you make visible progress instead of endlessly collecting tools and courses." },
  { icon: "PF", label: "Portfolio Direction", desc: "Guidance on the kind of proof that makes an analyst profile feel stronger in the AI era without giving away the full playbook here." },
  { icon: "MD", label: "Market Direction", desc: "A grounded view of where analyst demand is deepening and where lower-leverage work is getting squeezed." },
];

const FOR_YOU = [
  "You are a Reporting Analyst or BI Analyst who feels your current work is becoming easier to automate",
  "You want to move toward more valuable analyst work without guessing your way through it",
  "You want an India-first plan instead of generic global analytics career advice",
  "You have limited weekly time and want to invest it more deliberately",
  "You want stronger positioning, not just more certificates",
];

const NOT_FOR_YOU = [
  "You are already a Product Analyst or Analytics Engineer operating at a higher-leverage level",
  "You want a technical ML or data science course rather than a career strategy guide",
  "You are outside India and want a global analyst market analysis",
];

const SHIFT_STAGES = [
  { stage: "Stage 1", title: "Reporting Dependence", desc: "Your value is tied too tightly to recurring dashboards and standard analysis work.", color: "#64748b" },
  { stage: "Stage 2", title: "Insight and Context", desc: "You begin to signal better problem framing, stronger communication, and more business awareness.", color: "#2563eb" },
  { stage: "Stage 3", title: "Higher-Leverage Analyst", desc: "You are positioned closer to decision support, product thinking, and strategic value creation.", color: "#1d4ed8" },
];

export default function DataAnalystCareerGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section style={{ background: "linear-gradient(135deg, #050d2e 0%, #0a1854 50%, #1338a8 100%)", paddingTop: 100, paddingBottom: 90, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 20px", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(220,38,38,0.2)", border: "1px solid rgba(220,38,38,0.45)", borderRadius: 20, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fca5a5" }}>
              SA-AIRS Score: 7.8 / 10 - Moderate-High Exposure
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(37,99,235,0.18)", border: "1px solid rgba(37,99,235,0.45)", borderRadius: 20, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93c5fd" }}>
              India 2026 Edition
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(34px, 5.5vw, 62px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.08, marginBottom: 22, letterSpacing: "-0.03em" }}>
            Data Analyst
            <br />
            <span style={{ color: "#93c5fd" }}>Career Guide 2026</span>
          </h1>

          <p style={{ fontSize: "clamp(17px, 2.2vw, 21px)", color: "rgba(180,210,255,0.85)", lineHeight: 1.65, maxWidth: 680, margin: "0 auto 16px" }}>
            Reporting work is getting easier to automate. This guide helps you understand the shift,
            reposition toward higher-value analyst work, and build a stronger market story in India.
          </p>

          <p style={{ fontSize: 15, color: "rgba(147,197,253,0.6)", fontStyle: "italic", marginBottom: 44 }}>
            The future is not fewer analysts. It is fewer low-leverage analysts.
          </p>

          <div className="hero-price-box" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>Rs 499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93c5fd", marginBottom: 20 }}>
              Personal Email Delivery
            </span>
            <p style={{ fontSize: 13, color: "rgba(180,210,255,0.82)", lineHeight: 1.6, margin: "0 0 18px" }}>
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>

            <CashfreeCheckout
              productName="Data Analyst Career Guide 2026"
              amount={499}
              accentColor="#2563eb"
              buttonLabel="Get the Guide Now - Rs 499 ->"
              buttonStyle={{ fontSize: 17, fontWeight: 700, padding: "16px 36px", borderRadius: 10, background: "#2563eb", color: "#ffffff", border: "none", cursor: "pointer", letterSpacing: "0.01em", width: "100%", minWidth: 280 }}
            />
            <p style={{ fontSize: 13, color: "rgba(147,197,253,0.45)", marginTop: 12 }}>
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
              <span style={{ fontSize: "clamp(64px, 10vw, 96px)", fontWeight: 900, color: "#dc2626", lineHeight: 1, letterSpacing: "-0.04em" }}>7.8</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.08em" }}>Moderate-High Exposure</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>Routine reporting is under pressure</div>
              </div>
            </div>
            <div style={{ maxWidth: 480, margin: "0 auto", background: "#f0f4f8", borderRadius: 8, height: 12, overflow: "hidden" }}>
              <div style={{ width: "78%", height: "100%", background: "linear-gradient(90deg, #fbbf24, #dc2626)", borderRadius: 8 }} />
            </div>
          </div>

          <div className="qa-score-card-pad" style={{ background: "linear-gradient(135deg, #050d2e 0%, #0a1854 100%)", borderRadius: 20, textAlign: "center" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#93c5fd", marginBottom: 20 }}>
              What this score actually means
            </p>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 40px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 0 }}>
              Reporting is becoming cheaper.
              <br />
              Insight and judgment are becoming more valuable.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(147,197,253,0.75)", marginTop: 20, lineHeight: 1.7 }}>
              This guide is about moving away from dashboard dependence and toward stronger analyst positioning built around context, communication, and business value.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#eff6ff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563eb", display: "block", marginBottom: 12 }}>
              Inside the Guide
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What You Actually Get
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {WHAT_INSIDE.map((item) => (
              <div key={item.label} style={{ background: "#ffffff", border: "1px solid #bfdbfe", borderRadius: 14, padding: "24px 26px" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#2563eb", marginBottom: 12 }}>{item.icon}</div>
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
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563eb", display: "block", marginBottom: 12 }}>
              The Shift
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What Better Analyst Positioning Looks Like
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
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

      <section style={{ padding: "72px 20px", background: "#fafbff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-cols-1 md:grid-cols-2">
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2563eb", display: "block", marginBottom: 24 }}>
                This Is For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {FOR_YOU.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>+</span>
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

      <section style={{ padding: "120px 24px", background: "linear-gradient(160deg, #050d2e 0%, #0a1854 60%, #1338a8 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#f8faff", marginBottom: 16, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Move from reporting dependence to analyst leverage.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(240,250,255,0.76)", lineHeight: 1.7, marginBottom: 48 }}>
            Use this guide to build a clearer story, a stronger action plan, and a more durable analyst profile in the AI era.
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>Rs 499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93c5fd", marginBottom: 20 }}>
              Personal Email Delivery
            </span>
            <p style={{ fontSize: 13, color: "rgba(180,210,255,0.82)", lineHeight: 1.6, margin: "0 0 18px", maxWidth: 560 }}>
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>
            <CashfreeCheckout
              productName="Data Analyst Career Guide 2026"
              amount={499}
              accentColor="#2563eb"
              buttonLabel="Get the Guide - Rs 499 ->"
              buttonStyle={{ fontSize: 16, fontWeight: 700, padding: "16px 40px", borderRadius: 10, background: "#2563eb", color: "#ffffff", border: "none", cursor: "pointer", letterSpacing: "0.01em", minWidth: 260 }}
            />
            <p style={{ fontSize: 13, color: "rgba(180,210,255,0.5)", marginTop: 14 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
