"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";

const DIMENSIONS = [
  { label: "Task Repetition Level", weight: "25%", desc: "How much of your daily work is routine and predictable?" },
  { label: "Automation Feasibility", weight: "25%", desc: "How easily can your tasks be replicated by AI systems?" },
  { label: "Market Saturation", weight: "20%", desc: "How many others do exactly what you do, at your level?" },
  { label: "Decision Complexity", weight: "15%", desc: "How much unique judgment does your role require?" },
  { label: "Human Context Dependency", weight: "15%", desc: "How much does your work require real human relationships?" },
];

const WHAT_YOU_GET = [
  "SA-AIRS™ composite risk score (0–10 scale)",
  "All 5 dimensions scored individually for your role",
  "Risk tier placement — 🔴 High / 🟡 Medium / 🟢 Resilient",
  "12-month and 36-month forward risk horizon",
  "Top 3 priority moves for your next 90 days",
  "Ladder placement (L1–L5) on the Top 10% framework",
  "Personalised — scored by Sriram against your actual role",
  "Delivered as a structured 1-page report within 24 hours",
];

export default function AIRSPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #1a0a2e 0%, #2d1a50 60%, #4a1fa8 100%)",
        paddingTop: 100, paddingBottom: 80, textAlign: "center",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(138,91,246,0.2)", border: "1px solid rgba(138,91,246,0.4)",
            borderRadius: 20, padding: "6px 16px", marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#a78bfa", display: "inline-block" }} />
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c4b5fd" }}>
              SA-AIRS™ v6 · AI Career Risk Scoring · <s style={{ opacity: 0.55, fontWeight: 400 }}>₹1,999</s>&nbsp;₹999 Launch Price
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(34px, 5vw, 60px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em",
          }}>
            SA-AIRS™ Personal Risk Assessment
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#c4b5fd", lineHeight: 1.7, marginBottom: 16, maxWidth: 600, margin: "0 auto 16px" }}>
            Your personal AI career risk score — scored against your actual role, your industry,
            and your specific context. Not a quiz. A structured analytical framework.
          </p>
          <p style={{
            fontSize: 18, fontWeight: 700, color: "#a78bfa",
            fontStyle: "italic", marginBottom: 36,
          }}>
            &quot;We don&apos;t guess your future. We model it.&quot;
          </p>
          <a
            href="#order-form"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#7c3aed", color: "#ffffff", fontWeight: 700,
              fontSize: 16, padding: "14px 32px", borderRadius: 10,
              textDecoration: "none", border: "1px solid #a78bfa", letterSpacing: "0.01em",
            }}
          >
            Order My Assessment — ₹999 →
          </a>
          <p style={{ marginTop: 20, fontSize: 13, color: "rgba(196,181,253,0.78)" }}>
            Launch price — was ₹1,999 · Delivered within 24 hours · Personalised to your role
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "#f5f0ff", padding: "32px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          {[
            { num: "5", label: "Risk dimensions scored" },
            { num: "0–10", label: "Composite score scale" },
            { num: "24h", label: "Delivery time" },
            { num: "L1–L5", label: "Ladder placement" },
            { num: "₹999", label: "Launch price (was ₹1,999)" },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center", minWidth: 110 }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: "#7c3aed", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>How It Works</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0a1628", marginTop: 12, marginBottom: 40 }}>
            Three steps to your risk score
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-cols-1 md:grid-cols-3">
            {[
              { step: "01", title: "Fill Your Details", desc: "Share your role, industry, and context using the form below. Takes 3–5 minutes." },
              { step: "02", title: "Sriram Scores Your Profile", desc: "Your details are analysed against the SA-AIRS™ v6 framework across all 5 dimensions." },
              { step: "03", title: "Receive Your Report", desc: "A structured 1-page report with your score, tier, and top 3 moves — within 24 hours." },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{
                background: "#f5f0ff", borderRadius: 12, padding: "28px 24px", textAlign: "center",
                border: "1px solid #e0d4ff",
              }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#7c3aed", marginBottom: 12 }}>{step}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#0a1628", marginBottom: 10 }}>{title}</div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE 5 DIMENSIONS */}
      <section style={{ padding: "80px 20px", background: "#f8faff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>The Framework</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0a1628", marginTop: 12 }}>
              5 Dimensions · SA-AIRS™ v6
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 12 }}>Each dimension is weighted and scored against your specific role — not generic benchmarks.</p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {DIMENSIONS.map((dim) => (
              <div key={dim.label} style={{
                display: "flex", gap: 16, alignItems: "center",
                background: "#ffffff", borderRadius: 10, padding: "18px 20px",
                border: "1px solid #e2e8f4",
              }}>
                <div style={{
                  flexShrink: 0, background: "#f5f0ff", borderRadius: 8,
                  padding: "8px 12px", textAlign: "center", minWidth: 54,
                }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed" }}>{dim.weight}</div>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 4 }}>{dim.label}</div>
                  <div style={{ fontSize: 13, color: "#5a6a8a" }}>{dim.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>What You Receive</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0a1628", marginTop: 12 }}>
              Your complete risk report
            </h2>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {WHAT_YOU_GET.map((item) => (
              <div key={item} style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                background: "#f8faff", borderRadius: 10, padding: "14px 18px",
                border: "1px solid #e2e8f4",
              }}>
                <span style={{ color: "#7c3aed", fontWeight: 700, flexShrink: 0, fontSize: 16, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 14, color: "#2a3a5a", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS AFTER PAYMENT */}
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>What happens next</span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#0a1628", marginTop: 12 }}>
              Three steps. Max 48 hours.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { step: "01", label: "Within 24 hours of payment", title: "Sriram contacts you", desc: "After your payment is confirmed, Sriram will reach out via email to gather your role details — title, industry, company type, and context. Takes 5 minutes to respond." },
              { step: "02", label: "You share your role context", title: "Reply with your details", desc: "Reply to the email with your role, experience, industry, and any specific context. The more honest your inputs, the more precise your score." },
              { step: "03", label: "Within 24 hours of your reply", title: "Your report lands in your inbox", desc: "Your full SA-AIRS™ Personal Risk Assessment — composite score, dimension breakdown, ladder position, and forward risk horizons — delivered as a structured report to your email." },
            ].map((item, i, arr) => (
              <div key={item.step} style={{
                display: "grid", gridTemplateColumns: "80px 1fr", gap: 28,
                padding: "32px 0",
                borderBottom: i < arr.length - 1 ? "1px solid rgba(124,58,237,0.12)" : "none",
                alignItems: "start",
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.step}</div>
                  <div style={{ fontSize: 11, color: "#5a6a8a", marginTop: 4, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.4 }}>{item.label}</div>
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

      {/* ORDER / PAYMENT */}
      <section id="order-form" style={{ padding: "80px 20px", background: "#1a0a2e" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a78bfa" }}>Get Your Assessment</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#ffffff", marginTop: 12, marginBottom: 12 }}>
            Order SA-AIRS™ Personal Risk Assessment
          </h2>
          <p style={{ fontSize: 15, color: "#c4b5fd", marginBottom: 40, lineHeight: 1.7 }}>
            Pay securely via Cashfree. Sriram will contact you within 24 hours to collect your role details and deliver your personalised score report.
          </p>
          <CashfreeCheckout
            productName="SA-AIRS™ Personal Risk Assessment"
            amount={999}
            accentColor="#7c3aed"
            buttonLabel="Order My Assessment — ₹999 →"
            buttonStyle={{
              background: "#7c3aed", color: "#ffffff", fontWeight: 700,
              fontSize: 16, padding: "16px 36px", borderRadius: 10,
              border: "1px solid #a78bfa", letterSpacing: "0.01em",
            }}
          />
          <p style={{ marginTop: 20, fontSize: 13, color: "rgba(196,181,253,0.7)", lineHeight: 1.6 }}>
            Secure payment via Cashfree · Launch price (was ₹1,999) · Report delivered within 48 hours
          </p>
        </div>
      </section>

      {/* LINK TO PRODUCTS */}
      <section style={{ padding: "48px 20px", background: "#f5f0ff", textAlign: "center" }}>
        <Link href="/products" style={{ fontSize: 14, color: "#7c3aed", textDecoration: "none", fontWeight: 600 }}>
          ← See all products
        </Link>
      </section>

      <Footer />
    </div>
  );
}
