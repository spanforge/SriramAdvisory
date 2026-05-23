import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Sriram Advisory",
  description:
    "AI career intelligence products for Indian professionals — the AI Career Insights Report Pro Edition and the SA-AIRS™ personal risk assessment.",
};

const PRODUCTS = [
  {
    badge: "New — May 2026",
    badgeColor: "#ffffff",
    badgeBg: "#dc2626",
    badgeBorder: "#ef4444",
    accentColor: "#dc2626",
    tag: "v7.0 · India Labour Market Intelligence",
    title: "AI Risk Rankings India 2026",
    price: "₹499",
    strikePrice: null,
    priceNote: "Top 25 High-Risk Careers Report",
    tagline: "25 ranked careers. 4 risk bands. 100+ pages.",
    blurb:
      "The definitive ranking of India's 25 highest-risk careers under AI displacement. Research-backed analysis with task-composition data, headcount figures, salary data, a full individual adaptation framework, and case studies. Sourced from NASSCOM 2026, NITI Aayog, WEF, EY India, and McKinsey.",
    bullets: [
      "Top 25 careers ranked — risk bands, headcounts & salary data",
      "4-tier risk band framework (Extreme → High → Elevated → Moderate)",
      "Deep-dive vulnerability profiles for 5 occupational clusters",
      "Individual adaptation framework — 90-day plan by at-risk role",
      "Career transition paths mapped for each high-risk occupation",
      "4 Indian case studies: real transitions, illustrative profiles",
    ],
    cta: "Get the Report — ₹499 →",
    href: "/products/ai-risk-rankings-india-2026",
    external: false,
    featured: false,
    bgGradient: "linear-gradient(135deg, #fff5f5 0%, #fee2e2 100%)",
    borderColor: "#fecaca",
  },
  {
    badge: "Most Comprehensive",
    badgeColor: "#ffffff",
    badgeBg: "#1a4fd6",
    badgeBorder: "#3b6ef0",
    accentColor: "#1a4fd6",
    tag: "Includes 2 Quarterly Updates",
    title: "AI Career Insights Report",
    price: "₹499",
    strikePrice: "₹999",
    priceNote: "Pro Edition · Launch Price",
    tagline: "Research-backed. India-first. 47+ roles.",
    blurb:
      "The most complete AI career intelligence report built for Indian professionals. 7 industry deep dives, salary outlook scenarios, AI tools curated by profession, a 90-day roadmap, and two quarterly updates through December 2026.",
    bullets: [
      "7 industry sectors analysed in depth (IT, BPO, BFSI, Healthcare & more)",
      "Salary outlook scenarios — 3 forward career paths",
      "AI tools curated by profession — not generic lists",
      "90-day re-score included",
      "Top 10% Ladder™ guide (L1–L5 placement)",
      "Two quarterly update editions included",
    ],
    cta: "Get Pro Edition — ₹499 →",
    href: "/products/pro-edition",
    external: false,
    featured: true,
    bgGradient: "linear-gradient(135deg, #f0f5ff 0%, #e6eeff 100%)",
    borderColor: "#c7d7ff",
  },
  {
    badge: "Personalised",
    badgeColor: "#a78bfa",
    badgeBg: "rgba(167,139,250,0.12)",
    badgeBorder: "rgba(167,139,250,0.3)",
    accentColor: "#7c3aed",
    tag: "Delivered Within 24 Hours",
    title: "SA-AIRS™ Personal Risk Assessment",
    price: "₹999",
    strikePrice: "₹1,999",
    priceNote: "Launch Price · Personalised",
    tagline: "Your score. Your tier. Your benchmark.",
    blurb:
      "Not a quiz — a structured analytical framework applied to your specific role. Scored across all 5 SA-AIRS™ dimensions with a composite risk score, ladder position, and dimension benchmarks. The data, clearly presented.",
    bullets: [
      "All 5 SA-AIRS™ dimensions scored for your exact role",
      "Composite risk score (0–10) + risk tier placement",
      "12-month and 36-month forward risk horizon",
      "Top 10% Ladder placement (L1–L5)",
      "Dimension benchmarks — how your scores compare to role averages",
    ],
    cta: "Order My Assessment — ₹999 →",
    href: "/products/airs-assessment",
    external: false,
    featured: false,
    bgGradient: "linear-gradient(135deg, #f5f0ff 0%, #ede9fe 100%)",
    borderColor: "#ddd6fe",
  },
];

export default function ProductsPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #f0f5ff 0%, #e8eef8 55%, #f4f7fe 100%)",
        paddingTop: 100, paddingBottom: 72, textAlign: "center",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(26,79,214,0.08)", border: "1px solid rgba(26,79,214,0.2)",
            borderRadius: 20, padding: "6px 16px", marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1a4fd6", display: "inline-block" }} />
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a4fd6" }}>
              AI Career Intelligence · India 2026
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, color: "#0a1628",
            lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em",
          }}>
            Know exactly where you stand
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "#5a6a8a", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 12px" }}>
            Three products. One purpose: to give Indian professionals the clarity,
            data, and frameworks they need to read the AI era — and decide for themselves.
          </p>
          <p style={{ fontSize: 15, color: "#8898b8", fontStyle: "italic" }}>
            &quot;We don&apos;t guess your future. We model it.&quot; — Sriram
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              style={{
                background: product.bgGradient,
                border: `1.5px solid ${product.featured ? product.accentColor : product.borderColor}`,
                borderRadius: 20, padding: "40px 40px",
                position: "relative", overflow: "hidden",
                boxShadow: product.featured ? "0 8px 40px rgba(26,79,214,0.12)" : "none",
              }}
            >
              {product.featured && (
                <div style={{
                  position: "absolute", top: 20, right: 24,
                  background: "#1a4fd6", color: "#ffffff",
                  fontSize: 13, fontWeight: 700, letterSpacing: "0.08em",
                  textTransform: "uppercase", padding: "4px 12px", borderRadius: 12,
                }}>
                  Full Intelligence
                </div>
              )}

              <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>
                {/* Left */}
                <div style={{ flex: "1 1 340px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <span style={{
                  fontSize: 13, fontWeight: 700, letterSpacing: "0.08em",
                  textTransform: "uppercase",
                      background: product.badgeBg, color: product.badgeColor,
                      border: `1px solid ${product.badgeBorder}`,
                      padding: "3px 10px", borderRadius: 10,
                    }}>
                      {product.badge}
                    </span>
                    <span style={{ fontSize: 13, color: "#5a6a8a" }}>{product.tag}</span>
                  </div>
                  <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#0a1628", marginBottom: 6, lineHeight: 1.2 }}>
                    {product.title}
                  </h2>
                  <p style={{ fontSize: 15, color: product.accentColor, fontWeight: 600, marginBottom: 16 }}>
                    {product.tagline}
                  </p>
                  <p style={{ fontSize: 15, color: "#3a4a6a", lineHeight: 1.7, marginBottom: 24 }}>
                    {product.blurb}
                  </p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
                    {product.strikePrice && (
                      <span style={{ fontSize: 22, fontWeight: 600, color: "#8898b8", textDecoration: "line-through" }}>{product.strikePrice}</span>
                    )}
                    <span style={{ fontSize: 36, fontWeight: 800, color: product.accentColor }}>{product.price}</span>
                    <span style={{ fontSize: 13, color: "#8898b8" }}>{product.priceNote}</span>
                  </div>
                  <Link
                    href={product.href}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      background: product.accentColor, color: "#ffffff",
                      fontWeight: 700, fontSize: 15, padding: "13px 28px",
                      borderRadius: 10, textDecoration: "none", letterSpacing: "0.01em",
                    }}
                  >
                    {product.cta}
                  </Link>
                </div>

                {/* Right — bullets */}
                <div style={{ flex: "1 1 260px" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5a6a8a", marginBottom: 14 }}>
                    What&apos;s included
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {product.bullets.map((bullet) => (
                      <div key={bullet} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: product.accentColor, fontWeight: 700, flexShrink: 0, fontSize: 14, marginTop: 2 }}>✓</span>
                        <span style={{ fontSize: 14, color: "#2a3a5a", lineHeight: 1.5 }}>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: "80px 20px", background: "#f8faff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6" }}>Compare</span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#0a1628", marginTop: 12 }}>
              Not sure which to start with?
            </h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#0a1628", color: "#ffffff" }}>
                  <th style={{ padding: "14px 18px", textAlign: "left", borderRadius: "10px 0 0 0", fontWeight: 600 }}>Feature</th>
                  <th style={{ padding: "14px 18px", textAlign: "center", fontWeight: 600, background: "#1a4fd6" }}>Pro Edition<br /><s style={{ fontWeight: 400, fontSize: 13, opacity: 0.7 }}>₹999</s> ₹499</th>
                  <th style={{ padding: "14px 18px", textAlign: "center", borderRadius: "0 10px 0 0", fontWeight: 600 }}>AIRS Score<br /><s style={{ fontWeight: 400, fontSize: 13, opacity: 0.6 }}>₹1,999</s> ₹999</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["India-specific content", "✓", "✓"],
                  ["AI Risk Map (47+ professions)", "✓", "—"],
                  ["SA-AIRS™ 5-dimension framework", "Full explained", "Scored for you"],
                  ["Personalised to your role", "—", "✓"],
                  ["7 Industry deep dives", "✓", "—"],
                  ["Salary outlook scenarios", "✓", "—"],
                  ["AI tools by profession", "✓", "—"],
                  ["90-day roadmap", "✓ (detailed)", "Benchmarks included"],
                  ["Quarterly updates", "2 included", "—"],
                  ["Delivery", "Instant", "Within 24h"],
                ].map(([feature, pro, airs], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? "#ffffff" : "#f8faff" }}>
                    <td style={{ padding: "12px 18px", color: "#2a3a5a", fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: "12px 18px", textAlign: "center", color: pro === "—" ? "#c0c8d8" : "#1a4fd6", fontWeight: pro === "—" ? 400 : 600, background: "rgba(26,79,214,0.04)" }}>{pro}</td>
                    <td style={{ padding: "12px 18px", textAlign: "center", color: airs === "—" ? "#c0c8d8" : "#7c3aed", fontWeight: airs === "—" ? 400 : 600 }}>{airs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NOT SURE CTA */}
      <section style={{ padding: "80px 20px", background: "#0a1628", textAlign: "center" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#ffffff", marginBottom: 16 }}>
            Not sure where to start?
          </h2>
          <p style={{ fontSize: 16, color: "#8898b8", lineHeight: 1.7, marginBottom: 32 }}>
            For a personalised score on your specific role, start with the AIRS Assessment at ₹999 (launch price). The Pro Edition is for professionals who
            want the full picture with industry deep dives, salary scenarios, and quarterly updates.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link href="/products/airs-assessment" style={{
              background: "#7c3aed", color: "#ffffff", fontWeight: 700, fontSize: 14,
              padding: "12px 22px", borderRadius: 8, textDecoration: "none",
            }}>
              Get AIRS Score — ₹999 →
            </Link>
            <Link href="/get-started" style={{
              background: "transparent", color: "#8898b8", fontWeight: 600, fontSize: 14,
              padding: "12px 22px", borderRadius: 8, textDecoration: "none",
              border: "1px solid rgba(136,152,184,0.3)",
            }}>
              Talk to Sriram
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
