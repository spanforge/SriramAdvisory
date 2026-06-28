import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Sriram Advisory",
  description:
    "AI career intelligence products for Indian professionals including AI Futures 2026, AI Risk Rankings India 2026, bundles, and the SA-AIRS personal risk assessment.",
};

const PRODUCTS = [
  {
    badge: "New - May 2026",
    badgeColor: "#ffffff",
    badgeBg: "#dc2626",
    badgeBorder: "#ef4444",
    accentColor: "#dc2626",
    tag: "v7.0 - India Labour Market Intelligence",
    title: "AI Risk Rankings India 2026",
    price: "Rs 999",
    strikePrice: null,
    priceNote: "Top 25 High-Risk Careers Report",
    tagline: "25 ranked careers. 4 risk bands. 100+ pages.",
    blurb:
      "The definitive ranking of India's 25 highest-risk careers under AI displacement. Research-backed analysis with task-composition data, headcount figures, salary data, a full individual adaptation framework, and case studies. Sourced from NASSCOM 2026, NITI Aayog, WEF, EY India, and McKinsey.",
    bullets: [
      "Top 25 careers ranked with risk bands, headcounts, and salary data",
      "4-tier risk band framework from Extreme to Moderate",
      "Deep-dive vulnerability profiles for 5 occupational clusters",
      "Individual adaptation framework with 90-day direction by role",
      "Career transition paths mapped for each high-risk occupation",
      "4 Indian case studies with illustrative transition profiles",
    ],
    cta: "Get the Report - Rs 999 ->",
    href: "/products/ai-risk-rankings-india-2026",
    external: false,
    featured: false,
    bgGradient: "linear-gradient(135deg, #fff5f5 0%, #fee2e2 100%)",
    borderColor: "#fecaca",
  },
  {
    badge: "New Premium Report",
    badgeColor: "#ffffff",
    badgeBg: "#0d9268",
    badgeBorder: "#34d399",
    accentColor: "#0d9268",
    tag: "Launch Price",
    title: "AI Futures 2026",
    price: "Rs 799",
    strikePrice: "Rs 999",
    priceNote: "Premium Report",
    tagline: "Signals. Scenarios. Strategic adaptation lens.",
    blurb:
      "A premium India-first intelligence report for professionals who want a clearer view of where AI may shift leverage, pressure, and career advantage in India over the next phase.",
    bullets: [
      "Scenario framing instead of hype-heavy predictions",
      "India-first reading of leverage, pressure, and role shifts",
      "Limited preview on-page so the insight stays inside the paid report",
      "Built for professionals making strategic career decisions",
      "Launch pricing before the full-price release",
      "Cashfree checkout with email delivery",
    ],
    cta: "Get AI Futures 2026 ->",
    href: "/products/ai-futures-2026",
    external: false,
    featured: true,
    bgGradient: "linear-gradient(135deg, #f2fbf8 0%, #dcfce7 100%)",
    borderColor: "#bbf7d0",
  },
  {
    badge: "New Premium Report",
    badgeColor: "#ffffff",
    badgeBg: "#0f6cbd",
    badgeBorder: "#60a5fa",
    accentColor: "#0f6cbd",
    tag: "Launch Price",
    title: "State of QA Careers India 2026",
    price: "Rs 799",
    strikePrice: "Rs 999",
    priceNote: "Premium Report",
    tagline: "Testing careers. AI pressure. Strategic repositioning.",
    blurb:
      "A focused India-first intelligence report for QA professionals who want a clearer read on how testing careers are changing, where the pressure is rising, and what stronger positioning looks like next.",
    bullets: [
      "Built specifically for QA and test professionals",
      "Maps role shifts, pressure points, and adaptation direction",
      "Premium report for strategic career decision-making",
      "India-first context instead of generic global commentary",
      "Launch pricing before the full-price release",
      "Cashfree checkout with email delivery",
    ],
    cta: "Get State of QA Careers 2026 ->",
    href: "/products/state-of-qa-careers-india-2026",
    external: false,
    featured: false,
    bgGradient: "linear-gradient(135deg, #f2f8ff 0%, #dbeafe 100%)",
    borderColor: "#bfdbfe",
  },
  {
    badge: "Personalised",
    badgeColor: "#a78bfa",
    badgeBg: "rgba(167,139,250,0.12)",
    badgeBorder: "rgba(167,139,250,0.3)",
    accentColor: "#7c3aed",
    tag: "Delivered Within 24 Hours",
    title: "SA-AIRS Personal Risk Assessment",
    price: "Rs 999",
    strikePrice: "Rs 1,999",
    priceNote: "Launch Price - Personalised",
    tagline: "Your score. Your tier. Your benchmark.",
    blurb:
      "Not a quiz - a structured analytical framework applied to your specific role. Scored across all 5 SA-AIRS dimensions with a composite risk score, ladder position, and dimension benchmarks.",
    bullets: [
      "All 5 SA-AIRS dimensions scored for your exact role",
      "Composite risk score from 0-10 plus tier placement",
      "12-month and 36-month forward risk horizon",
      "Top 10 percent Ladder placement",
      "Dimension benchmarks against role averages",
    ],
    cta: "Order My Assessment - Rs 999 ->",
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

      <section
        style={{
          background: "linear-gradient(135deg, #f0f5ff 0%, #e8eef8 55%, #f4f7fe 100%)",
          paddingTop: 100,
          paddingBottom: 72,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(26,79,214,0.08)",
              border: "1px solid rgba(26,79,214,0.2)",
              borderRadius: 20,
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1a4fd6", display: "inline-block" }} />
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a4fd6" }}>
              AI Career Intelligence - India 2026
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800,
              color: "#0a1628",
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Know exactly where you stand
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "#5a6a8a", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 12px" }}>
            Four products. One purpose: to give Indian professionals the clarity,
            data, bundles, and frameworks they need to read the AI era and decide for themselves.
          </p>
          <p style={{ fontSize: 15, color: "#8898b8", fontStyle: "italic" }}>
            &quot;We don&apos;t guess your future. We model it.&quot; - Sriram
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              style={{
                background: product.bgGradient,
                border: `1.5px solid ${product.featured ? product.accentColor : product.borderColor}`,
                borderRadius: 20,
                padding: "40px 40px",
                position: "relative",
                overflow: "hidden",
                boxShadow: product.featured ? "0 8px 40px rgba(13,146,104,0.12)" : "none",
              }}
            >
              {product.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 24,
                    background: product.accentColor,
                    color: "#ffffff",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: 12,
                  }}
                >
                  Premium Launch
                </div>
              )}

              <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>
                <div style={{ flex: "1 1 340px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: product.badgeBg,
                        color: product.badgeColor,
                        border: `1px solid ${product.badgeBorder}`,
                        padding: "3px 10px",
                        borderRadius: 10,
                      }}
                    >
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
                      <span style={{ fontSize: 22, fontWeight: 600, color: "#8898b8", textDecoration: "line-through" }}>
                        {product.strikePrice}
                      </span>
                    )}
                    <span style={{ fontSize: 36, fontWeight: 800, color: product.accentColor }}>{product.price}</span>
                    <span style={{ fontSize: 13, color: "#8898b8" }}>{product.priceNote}</span>
                  </div>
                  <Link
                    href={product.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: product.accentColor,
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: 15,
                      padding: "13px 28px",
                      borderRadius: 10,
                      textDecoration: "none",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {product.cta}
                  </Link>
                </div>

                <div style={{ flex: "1 1 260px" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5a6a8a", marginBottom: 14 }}>
                    What&apos;s included
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {product.bullets.map((bullet) => (
                      <div key={bullet} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: product.accentColor, fontWeight: 700, flexShrink: 0, fontSize: 14, marginTop: 2 }}>+</span>
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

      <section style={{ padding: "0 20px 80px", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            background: "linear-gradient(135deg, #0a1628 0%, #102346 58%, #1a4fd6 100%)",
            borderRadius: 20,
            padding: "32px 28px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            gap: 20,
            alignItems: "center",
          }}
          className="home-two-col"
        >
          <div>
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#93b4ff" }}>
              Bundles
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3.4vw, 36px)", color: "#ffffff", margin: "10px 0", letterSpacing: "-0.02em" }}>
              Need more than one product?
            </h2>
            <p style={{ fontSize: 15, color: "rgba(219,234,254,0.86)", lineHeight: 1.75, margin: 0, maxWidth: 680 }}>
              Bundles combine related guides and reports into role-specific intelligence stacks, starting at Rs 799.
            </p>
          </div>
          <Link
            href="/bundles"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ffffff",
              color: "#102346",
              fontWeight: 800,
              fontSize: 14,
              padding: "13px 22px",
              borderRadius: 10,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            View Bundles {"->"}
          </Link>
        </div>
      </section>

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
                  <th style={{ padding: "14px 18px", textAlign: "center", fontWeight: 600, background: "#0d9268" }}>
                    AI Futures 2026
                    <br />
                    <s style={{ fontWeight: 400, fontSize: 13, opacity: 0.7 }}>Rs 999</s> Rs 799
                  </th>
                  <th style={{ padding: "14px 18px", textAlign: "center", fontWeight: 600 }}>AI Risk Rankings<br />Rs 999</th>
                  <th style={{ padding: "14px 18px", textAlign: "center", borderRadius: "0 10px 0 0", fontWeight: 600 }}>
                    AIRS Score
                    <br />
                    <s style={{ fontWeight: 400, fontSize: 13, opacity: 0.6 }}>Rs 1,999</s> Rs 999
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["India-specific content", "Yes", "Yes", "Yes"],
                  ["Forward-looking scenarios", "Yes", "Light", "No"],
                  ["Career risk ranking", "No", "Yes", "No"],
                  ["Personalised to your role", "No", "No", "Yes"],
                  ["Strategic adaptation lens", "Yes", "Yes", "Yes"],
                  ["Detailed market signals", "Yes", "Yes", "No"],
                  ["Best for", "Thinking ahead", "Understanding risk", "Getting your score"],
                  ["Delivery", "Email", "Email", "Within 24h"],
                ].map(([feature, futures, rankings, airs], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? "#ffffff" : "#f8faff" }}>
                    <td style={{ padding: "12px 18px", color: "#2a3a5a", fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: "12px 18px", textAlign: "center", color: "#0d9268", fontWeight: 600, background: "rgba(13,146,104,0.04)" }}>{futures}</td>
                    <td style={{ padding: "12px 18px", textAlign: "center", color: "#dc2626", fontWeight: 600 }}>{rankings}</td>
                    <td style={{ padding: "12px 18px", textAlign: "center", color: "#7c3aed", fontWeight: 600 }}>{airs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 20px", background: "#0a1628", textAlign: "center" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#ffffff", marginBottom: 16 }}>
            Not sure where to start?
          </h2>
          <p style={{ fontSize: 16, color: "#8898b8", lineHeight: 1.7, marginBottom: 32 }}>
            Start with AI Futures 2026 if you want a sharper map of what may change next. Choose AI Risk Rankings if you want occupational risk context, or the AIRS Assessment if you want your own role scored directly.
            Choose bundles when you want role guidance and market context together.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link
              href="/products/ai-futures-2026"
              style={{
                background: "#0d9268",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 14,
                padding: "12px 22px",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              Get AI Futures 2026 {"->"}
            </Link>
            <Link
              href="/bundles"
              style={{
                background: "transparent",
                color: "#8898b8",
                fontWeight: 600,
                fontSize: 14,
                padding: "12px 22px",
                borderRadius: 8,
                textDecoration: "none",
                border: "1px solid rgba(136,152,184,0.3)",
              }}
            >
              Browse Bundles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
