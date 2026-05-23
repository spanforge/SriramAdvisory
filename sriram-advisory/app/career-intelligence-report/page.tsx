import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports | Sriram Advisory",
  description:
    "India-first intelligence reports on AI career risk — structured data products for working professionals. SA-AIRS™ Pro and AI Risk Rankings India 2026.",
};

// Hover handled via .guide-card CSS class — see globals.css

const REPORTS = [
  {
    badge: "Core Report",
    badgeBg: "#1a4fd6",
    badgeColor: "#ffffff",
    title: "Career Intelligence Report — SA-AIRS™ Pro",
    subtitle: "5-dimension AI risk score. 6-part diagnostic. 90-day re-assessment. India 2026.",
    blurb:
      "A structured diagnostic built on your self-reported inputs — scored across Task Repetition, Automation Feasibility, Market Saturation, Decision Complexity, and Human Dependency. Your SA-AIRS™ composite score, L1–L5 placement, role benchmarks, and a 90-day re-assessment included. All inputs transparent, all scores traceable.",
    price: "₹499",
    strikePrice: "₹999",
    tag: "Analytical Scoring System",
    href: "/career-intelligence-report/sa-airs-pro",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f0f4ff 0%, #dbeafe 100%)",
    borderColor: "#bfdbfe",
  },
  {
    badge: "New — May 2026",
    badgeBg: "#dc2626",
    badgeColor: "#ffffff",
    title: "AI Risk Rankings India 2026",
    subtitle: "Top 25 High-Risk Careers. 4 risk bands. 100+ pages. Instant delivery.",
    blurb:
      "The definitive ranking of India's 25 highest-risk careers under AI displacement. Extreme, High, Elevated, and Moderate risk bands with indicative headcount and salary data, 5 occupational cluster profiles, a role-specific 90-day adaptation framework, and 4 case studies. Sourced from NASSCOM, NITI Aayog, WEF, EY India, and McKinsey 2025–26.",
    price: "₹499",
    strikePrice: null,
    tag: "Market Intelligence · v1.0",
    href: "/products/ai-risk-rankings-india-2026",
    accentColor: "#dc2626",
    bgGradient: "linear-gradient(135deg, #fff5f5 0%, #fee2e2 100%)",
    borderColor: "#fecaca",
  },
];

export default function ReportsPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0a1628 0%, #0f2040 60%, #1a4fd6 100%)",
        paddingTop: 96, paddingBottom: 72, textAlign: "center",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(59,110,240,0.18)", border: "1px solid rgba(59,110,240,0.45)",
            borderRadius: 20, padding: "6px 16px", marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3b6ef0", display: "inline-block" }} />
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93b4ff" }}>
              Data-Driven Career Reports
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em",
          }}>
            Reports
          </h1>
          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(200,220,255,0.8)",
            lineHeight: 1.75, maxWidth: 560, margin: "0 auto",
          }}>
            Structured data products built on India-specific research — scoring systems,
            market rankings, and career diagnostics. No US-adapted data. No fluff.
          </p>
        </div>
      </section>

      {/* REPORT CARDS */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "72px 20px 80px" }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6", marginBottom: 32 }}>
          Available Now
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {REPORTS.map((r) => (
            <Link key={r.href} href={r.href} style={{ textDecoration: "none" }}>
              <div className="guide-card guide-card-body" style={{
                background: r.bgGradient,
                border: `1.5px solid ${r.borderColor}`,
                borderRadius: 16,
                cursor: "pointer",
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                      background: r.badgeBg, color: r.badgeColor,
                      padding: "3px 10px", borderRadius: 20,
                    }}>{r.badge}</span>
                    <span style={{ fontSize: 12, color: "#5a6a8a", fontWeight: 500 }}>{r.tag}</span>
                  </div>
                  <h3 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 800, color: "#0a1628", marginBottom: 6, letterSpacing: "-0.01em" }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: 14, fontWeight: 600, color: r.accentColor, marginBottom: 12 }}>{r.subtitle}</p>
                  <p style={{ fontSize: 15, color: "#3d4f6e", lineHeight: 1.7, marginBottom: 0 }}>{r.blurb}</p>
                </div>
                <div className="guide-card-price-col">
                  {r.strikePrice && (
                    <div style={{ fontSize: 13, color: "#9aa8c0", textDecoration: "line-through", marginBottom: 2 }}>{r.strikePrice}</div>
                  )}
                  <div style={{ fontSize: 28, fontWeight: 800, color: r.accentColor }}>{r.price}</div>
                  <div style={{
                    marginTop: 16,
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: r.accentColor, color: "#fff",
                    fontSize: 13, fontWeight: 700,
                    padding: "10px 20px", borderRadius: 8,
                    letterSpacing: "0.01em",
                  }}>
                    View Report →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
