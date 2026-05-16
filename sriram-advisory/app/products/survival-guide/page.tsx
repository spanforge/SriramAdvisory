import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Career Survival Guide | Sriram Advisory",
  description:
    "Will AI affect your job? Find out with India's only AI career risk guide built specifically for Indian professionals. 47+ professions, 30-day action plan. ₹299.",
};

const INCLUDES = [
  "India-specific AI risk guide — not adapted from US data",
  "AI Risk Map across 47+ Indian professions",
  "SA-AIRS™ 5-dimension self-score framework",
  "Understand your personal AI risk level",
  "30-day action plan to reposition yourself",
  "What actually keeps professionals safe in the AI era",
  "Two real-world case studies from Indian professionals",
  "India-specific context — Tier 2 & Tier 3 city dynamics covered",
  "The complete Sriram Advisory range for next steps",
];

const FOR_YOU = [
  "You are a working professional wanting to understand your personal AI risk",
  "You are a fresh graduate or final-year student entering a competitive job market",
  "You are mid-career and wondering whether your current role is safe",
  "Your work, salary, and career context are primarily in India",
  "You want a 30-day action plan, not just general AI commentary",
];

const NOT_FOR_YOU = [
  "You want a comprehensive technical course on AI tools",
  "You are already at a senior advisory or Level 4–5 role with strong AI fluency",
  "You are based outside India and want a global AI displacement analysis",
];

export default function SurvivalGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0f1f0f 0%, #1a3320 60%, #1e6b3a 100%)",
        paddingTop: 100, paddingBottom: 80, textAlign: "center",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(34,211,160,0.15)", border: "1px solid rgba(34,211,160,0.4)",
            borderRadius: 20, padding: "6px 16px", marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0d9268", display: "inline-block" }} />
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#86efac" }}>
              <s style={{ opacity: 0.55, fontWeight: 400 }}>₹499</s>&nbsp;&nbsp;₹299 Launch Price · India 2026
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.1, marginBottom: 16, letterSpacing: "-0.02em",
          }}>
            AI Career Survival Guide
          </h1>
          <p style={{ fontSize: "clamp(20px, 3vw, 28px)", color: "#86efac", fontWeight: 600, marginBottom: 20 }}>
            Will AI Affect MY Job?
          </p>
          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(200,240,220,0.8)", lineHeight: 1.7, marginBottom: 36, maxWidth: 580, margin: "0 auto 36px" }}>
            The question is no longer &quot;will AI replace humans?&quot; It is:
            <strong style={{ color: "#86efac" }}> &quot;Will someone using AI replace YOU?&quot;</strong><br />
            This guide helps you answer that — specifically for Indian professionals.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <CashfreeCheckout
              productName="AI Career Survival Guide"
              amount={299}
              accentColor="#0d9268"
              buttonLabel="Buy Now — ₹299 →"
              buttonStyle={{
                background: "#0d9268", color: "#0a1628", fontWeight: 700,
                fontSize: 16, padding: "14px 32px", borderRadius: 10,
                letterSpacing: "0.01em",
              }}
            />
            <Link
              href="/get-started"
              style={{
                display: "inline-flex", alignItems: "center",
                background: "transparent", color: "#86efac", fontWeight: 600,
                fontSize: 15, padding: "14px 28px", borderRadius: 10,
                textDecoration: "none", border: "1px solid rgba(134,239,172,0.3)",
              }}
            >
              Have a question? Talk to Sriram
            </Link>
          </div>
          <p style={{ marginTop: 20, fontSize: 14, color: "rgba(134,239,172,0.9)" }}>
            Instant digital delivery · For Indian professionals · 5-minute read to clarity
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "#f0faf5", padding: "32px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          {[
            { num: "₹299", label: "Launch price (was ₹499)" },
            { num: "47+", label: "Indian professions" },
            { num: "5", label: "SA-AIRS™ dimensions" },
            { num: "30-day", label: "Action plan" },
            { num: "100%", label: "India-specific" },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center", minWidth: 110 }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: "#1e6b3a", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE REALITY */}
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1e6b3a" }}>The Core Reality</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0a1628", marginTop: 12, marginBottom: 20, lineHeight: 1.2 }}>
            AI won&apos;t kill all jobs. But here&apos;s what IS happening right now.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center", marginBottom: 40 }}>
            {[
              { stat: "~15 Lakh", detail: "Approved B.Tech seats annually in India" },
              { stat: "60%+", detail: "Salary premium for AI-skilled tech professionals" },
              { stat: "10.35M", detail: "Indian jobs to be redefined by 2030 (ServiceNow)" },
            ].map(({ stat, detail }) => (
              <div key={stat} style={{
                background: "#f0faf5", border: "1px solid #bbf7d0",
                borderRadius: 12, padding: "20px 24px", flex: 1, minWidth: 180, textAlign: "center",
              }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#1e6b3a", marginBottom: 6 }}>{stat}</div>
                <div style={{ fontSize: 13, color: "#2a4a3a" }}>{detail}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 16, color: "#5a6a8a", lineHeight: 1.7 }}>
            Repetitive, predictable work is shrinking fast across every sector. People who use AI are
            outperforming people who ignore it — by a visible and growing margin.
            The salary premium for AI-fluent professionals is becoming increasingly visible in 2026.
          </p>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section style={{ padding: "80px 20px", background: "#f8faff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1e6b3a" }}>What&apos;s Inside</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0a1628", marginTop: 12 }}>
              After reading this guide you will know…
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 12 }}>
              Your personal AI risk score · Your most important next steps · A 30-day action plan
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {INCLUDES.map((item) => (
              <div key={item} style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                background: "#ffffff", borderRadius: 10, padding: "16px 20px",
                border: "1px solid #e2e8f4",
              }}>
                <span style={{ color: "#0d9268", fontWeight: 700, flexShrink: 0, fontSize: 16, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 14, color: "#2a3a5a", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IS THIS FOR YOU */}
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="grid-cols-1 md:grid-cols-2">
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0a1628", marginBottom: 20 }}>✅ This guide is for you if…</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FOR_YOU.map((item) => (
                <div key={item} style={{ fontSize: 14, color: "#2a3a5a", lineHeight: 1.6, paddingLeft: 12, borderLeft: "3px solid #22d3a0" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0a1628", marginBottom: 20 }}>❌ Less relevant if…</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {NOT_FOR_YOU.map((item) => (
                <div key={item} style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.6, paddingLeft: 12, borderLeft: "3px solid #e2e8f4" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WANT MORE? */}
      <section style={{ padding: "60px 20px", background: "#f0f5ff", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: "#0a1628", marginBottom: 12 }}>Want a deeper analysis?</h3>
          <p style={{ fontSize: 15, color: "#5a6a8a", marginBottom: 24, lineHeight: 1.6 }}>
            The Survival Guide is your starting point. For a full industry deep-dive, salary scenarios,
            AI tools by profession, and a 90-day roadmap — the Pro Edition goes much further.
          </p>
          <Link
            href="/products/pro-edition"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#1a4fd6", color: "#ffffff", fontWeight: 600,
              fontSize: 14, padding: "12px 24px", borderRadius: 8,
              textDecoration: "none",
            }}
          >
            See Pro Edition — ₹1,999 →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 20px", background: "#0f1f0f", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#ffffff", marginBottom: 16, lineHeight: 1.2 }}>
            Get your clarity for{" "}
            <s style={{ opacity: 0.5, fontWeight: 400, fontSize: "0.75em" }}>₹499</s>{" "}₹299
          </h2>
          <p style={{ fontSize: 16, color: "rgba(200,240,220,0.7)", lineHeight: 1.6, marginBottom: 32 }}>
            Instant digital delivery. Built specifically for Indian professionals.
            5 SA-AIRS™ dimensions · 30-day action plan · 100% India-specific.
          </p>
          <CashfreeCheckout
            productName="AI Career Survival Guide"
            amount={299}
            accentColor="#0d9268"
            buttonLabel="Buy AI Survival Guide — ₹299 →"
            buttonStyle={{
              background: "#0d9268", color: "#0a1628", fontWeight: 700,
              fontSize: 17, padding: "16px 40px", borderRadius: 10,
              letterSpacing: "0.01em",
            }}
          />
          <div style={{ marginTop: 20 }}>
            <Link href="/products" style={{ fontSize: 13, color: "rgba(134,239,172,0.6)", textDecoration: "none" }}>
              ← See all products
            </Link>
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: "rgba(134,239,172,0.85)", lineHeight: 1.65 }}>
            Educational and analytical commentary only. Not legal, financial, employment or investment advice.
            Risk scores are SA-AIRS™ model estimates — directional, not guaranteed. © 2026 Sriram Advisory.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
