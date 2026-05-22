import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Career Intelligence Report — Pro Edition | Sriram Advisory",
  description:
    "Research-backed AI career intelligence for Indian professionals. 47+ roles, 7 sectors, salary scenarios, AI tools by profession, and a 90-day roadmap. ₹499.",
};

const INCLUDES = [
  "47+ Indian professions analysed across 7 major sectors",
  "SA-AIRS™ 5-dimension risk framework explained in full",
  "Visual data — charts, heat maps, risk tiers",
  "7 industry deep dives: IT, BPO, BFSI, Healthcare, Manufacturing, Retail, Education",
  "Salary outlook scenarios — 3 forward paths",
  "AI tools curated by profession (not generic lists)",
  "Top 10% Ladder™ placement guide (L1–L5)",
  "90-day repositioning roadmap — detailed and actionable",
  "Resume & LinkedIn positioning guidance",
  "Real-world case studies from Indian professionals",
  "Two quarterly update editions included (through Dec 2026)",
];

const FOR_YOU = [
  "You are a working professional in India wondering exactly where you stand",
  "You want role-specific data — not broad AI hype",
  "You are considering a career pivot and need clarity on where AI is creating opportunity",
  "You want a concrete 90-day plan, not just commentary",
  "You want India-specific analysis — not adapted from US labour reports",
];

const NOT_FOR_YOU = [
  "You want a technical AI course or certification",
  "You are already at a senior advisory level with strong AI fluency",
  "You want guaranteed career outcomes (see disclaimer)",
];

export default function ProEditionPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a2d50 60%, #1a4fd6 100%)",
        paddingTop: 100, paddingBottom: 80, textAlign: "center",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(26,79,214,0.25)", border: "1px solid rgba(26,79,214,0.5)",
            borderRadius: 20, padding: "6px 16px", marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0d9268", display: "inline-block" }} />
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a8c4ff" }}>
              Pro Edition · India 2026 · <s style={{ opacity: 0.55, fontWeight: 400 }}>₹999</s>&nbsp;₹499 Launch Price
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em",
          }}>
            AI Career Intelligence Report
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#a8c4ff", lineHeight: 1.7, marginBottom: 36, maxWidth: 600, margin: "0 auto 36px" }}>
            A research-backed intelligence report for Indian professionals — industry-specific analysis,
            salary scenarios, AI tools by profession, and a 90-day roadmap. Built for India from the ground up.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <CashfreeCheckout
              productName="AI Career Intelligence Report — Pro Edition"
              amount={499}
              accentColor="#1a4fd6"
              buttonLabel="Buy Now — ₹499 →"
              buttonStyle={{
                background: "#1a4fd6", color: "#ffffff", fontWeight: 700,
                fontSize: 16, padding: "14px 32px", borderRadius: 10,
                border: "1px solid #3b6ef0", letterSpacing: "0.01em",
              }}
            />
            <Link
              href="/get-started"
              style={{
                display: "inline-flex", alignItems: "center",
                background: "transparent", color: "#a8c4ff", fontWeight: 600,
                fontSize: 15, padding: "14px 28px", borderRadius: 10,
                textDecoration: "none", border: "1px solid rgba(168,196,255,0.3)",
              }}
            >
              Have a question? Talk to Sriram
            </Link>
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: "rgba(168,196,255,0.85)" }}>
            Launch Price — was ₹999 · One-time purchase · Instant digital delivery · Quarterly updates included
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "#f0f5ff", padding: "32px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          {[
            { num: "47+", label: "Indian roles analysed" },
            { num: "7", label: "Major industry sectors" },
            { num: "5", label: "SA-AIRS™ risk dimensions" },
            { num: "90-day", label: "Actionable roadmap" },
            { num: "2×", label: "Quarterly updates included" },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center", minWidth: 120 }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#1a4fd6", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* KEY FINDING */}
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6" }}>Key Finding</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#0a1628", marginTop: 12, marginBottom: 20, lineHeight: 1.2 }}>
            Agentic AI has crossed from experiment to production in India
          </h2>
          <p style={{ fontSize: 17, color: "#5a6a8a", lineHeight: 1.7, marginBottom: 40 }}>
            24% of Indian enterprise leaders are deploying AI agents now. Gartner projects 40% of enterprise
            applications will embed agentic AI by end-2026. ServiceNow estimates 10.35 million Indian jobs
            will be redefined by 2030. The professionals who act in the next 12 months define the outcome for the next decade.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            {[
              { label: "🔴 Highest Risk", examples: "Data Entry, BPO Back-office, Junior QA" },
              { label: "🟡 Medium Risk", examples: "Mid-level Software Devs, HR Executives" },
              { label: "🟢 More Resilient", examples: "Sales & Relationships, Leadership, Doctors" },
            ].map(({ label, examples }) => (
              <div key={label} style={{
                background: "#f8faff", border: "1px solid #e2e8f4", borderRadius: 12,
                padding: "20px 24px", textAlign: "left", minWidth: 200, flex: 1,
              }}>
                <div style={{ fontWeight: 700, color: "#0a1628", marginBottom: 8 }}>{label}</div>
                <div style={{ fontSize: 13, color: "#5a6a8a" }}>{examples}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section style={{ padding: "80px 20px", background: "#f8faff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6" }}>What&apos;s Inside</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#0a1628", marginTop: 12, lineHeight: 1.2 }}>
              Everything in one report
            </h2>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {INCLUDES.map((item) => (
              <div key={item} style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                background: "#ffffff", borderRadius: 10, padding: "16px 20px",
                border: "1px solid #e2e8f4",
              }}>
                <span style={{ color: "#0d9268", fontWeight: 700, flexShrink: 0, fontSize: 16, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 15, color: "#2a3a5a", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IS THIS FOR YOU */}
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="grid-cols-1 md:grid-cols-2">
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0a1628", marginBottom: 20 }}>✅ This report is for you if…</h3>
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

      {/* FOUNDER QUOTE */}
      <section style={{ padding: "80px 20px", background: "#0a1628" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 48, color: "#1a4fd6", marginBottom: 16, lineHeight: 1 }}>"</div>
          <p style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: "#e8eef8", lineHeight: 1.7, fontStyle: "italic", marginBottom: 28 }}>
            I built this report after a pattern I kept seeing. Quiet anxiety about AI — with nowhere specific to go for answers.
            This is India-specific. Every dimension, every weighting, every role assessment is filtered through
            what is actually happening in Indian companies.
          </p>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#a8c4ff" }}>
            — Sriram · Founder, Sriram Advisory
          </div>
          <div style={{ fontSize: 13, color: "rgba(168,196,255,0.8)", marginTop: 6 }}>sriram@sriramadvisory.com</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 20px", background: "#f0f5ff", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#0a1628", marginBottom: 16, lineHeight: 1.2 }}>
            Know exactly where you stand
          </h2>
          <p style={{ fontSize: 17, color: "#5a6a8a", lineHeight: 1.6, marginBottom: 36 }}>
            Launch price ₹499 (was ₹999). One-time purchase. Instant digital delivery. Includes two quarterly update editions through December 2026.
          </p>
          <CashfreeCheckout
            productName="AI Career Intelligence Report — Pro Edition"
            amount={499}
            accentColor="#1a4fd6"
            buttonLabel="Buy Pro Edition — ₹499 →"
            buttonStyle={{
              background: "#1a4fd6", color: "#ffffff", fontWeight: 700,
              fontSize: 17, padding: "16px 40px", borderRadius: 10,
              border: "1px solid #3b6ef0", letterSpacing: "0.01em",
            }}
          />
          <div style={{ marginTop: 20 }}>
            <Link href="/products" style={{ fontSize: 13, color: "#5a6a8a", textDecoration: "none" }}>
              ← See all products
            </Link>
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: "#5a6a8a", lineHeight: 1.6 }}>
            Educational and analytical commentary only. Not legal, financial, employment or investment advice.
            Risk scores are SA-AIRS™ model estimates — directional, not guaranteed. © 2026 Sriram Advisory.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
