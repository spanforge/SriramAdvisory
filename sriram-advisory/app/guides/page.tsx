import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides | Sriram Advisory",
  description:
    "Practical career intelligence guides for Indian professionals — India-first research on AI risk, job market shifts, and what to do about it.",
};

// Hover is handled via CSS class .guide-card — see globals.css

const GUIDES = [
  {
    badge: "New",
    badgeBg: "#0d9268",
    badgeColor: "#ffffff",
    title: "QA Engineer Survival Guide 2026",
    subtitle: "SA-AIRS™ 9.5/10. 90-day plan. GCC interview playbook. ₹48 LPA target.",
    blurb:
      "Manual QA is the highest-exposure role in Indian IT. This guide tells you exactly what's being automated, the 4 survival zones AI can't touch, the full AI testing tool stack, a week-by-week 90-day plan, and how to land an AI Quality Architect role at a GCC for ₹42–60 LPA.",
    price: "₹299",
    strikePrice: "",
    tag: "",
    href: "/guides/qa-engineer-survival-guide-2026",
    accentColor: "#0d9268",
    bgGradient: "linear-gradient(135deg, #f0fdf8 0%, #dcfce7 100%)",
    borderColor: "#bbf7d0",
    available: true,
  },
  {
    badge: "New",
    badgeBg: "#d97706",
    badgeColor: "#ffffff",
    title: "BPO & Customer Support Career Survival Guide",
    subtitle: "SA-AIRS™ 9.2/10. 5 new AI-era roles. 30-day repositioning plan. India 2026.",
    blurb:
      "Tier 1 and Tier 2 BPO queries are being handled by AI agents today. This guide tells you exactly which roles are safe, the 5 new positions being created by AI adoption, and a 30-day plan to move from voice agent to AI Overseer — built specifically for India's 6M+ BPO and customer support workforce.",
    price: "₹299",
    strikePrice: "₹499",
    tag: "Launch Price",
    href: "/guides/bpo-career-survival-guide-2026",
    accentColor: "#d97706",
    bgGradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
    borderColor: "#fde68a",
    available: true,
  },
  {
    badge: "New",
    badgeBg: "#2563eb",
    badgeColor: "#ffffff",
    title: "Data Analyst Career Guide 2026",
    subtitle: "SA-AIRS™ 7.8/10. 90-day blueprint. 3 sector paths. SQL mastery. ₹50L target.",
    blurb:
      "Reporting roles are being automated. This guide gives you the 90-day blueprint to move from routine dashboards to a product or strategy analyst role — with sector-specific SQL paths for SaaS, FinTech, and E-Commerce, salary data from India's job market, and a portfolio framework built for GCC and SaaS hiring managers.",
    price: "₹299",
    strikePrice: "₹499",
    tag: "Launch Price",
    href: "/guides/data-analyst-career-guide-2026",
    accentColor: "#2563eb",
    bgGradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
    borderColor: "#bfdbfe",
    available: true,
  },
];

const COMING_SOON: {
  title: string;
  subtitle: string;
  blurb: string;
  tag: string;
  accentColor: string;
  bgGradient: string;
  borderColor: string;
}[] = [];

export default function GuidesPage() {
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
              India-First Career Intelligence
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em",
          }}>
            Guides for Indian Professionals
          </h1>
          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(200,220,255,0.8)",
            lineHeight: 1.75, maxWidth: 560, margin: "0 auto",
          }}>
            Practical, research-backed guides on AI risk, career transitions, and GCC opportunities —
            built specifically for India. No fluff. No US-adapted data. Direct answers.
          </p>
        </div>
      </section>

      {/* AVAILABLE GUIDES */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "72px 20px 48px" }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6", marginBottom: 32 }}>
          Available Now
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {GUIDES.map((g) => (
            <Link key={g.href} href={g.href} style={{ textDecoration: "none" }}>
              <div className="guide-card guide-card-body" style={{
                background: g.bgGradient,
                border: `1.5px solid ${g.borderColor}`,
                borderRadius: 16,
                cursor: "pointer",
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                      background: g.badgeBg, color: g.badgeColor,
                      padding: "3px 10px", borderRadius: 20,
                    }}>{g.badge}</span>
                    <span style={{ fontSize: 12, color: "#5a6a8a", fontWeight: 500 }}>{g.tag}</span>
                  </div>
                  <h3 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 800, color: "#0a1628", marginBottom: 6, letterSpacing: "-0.01em" }}>
                    {g.title}
                  </h3>
                  <p style={{ fontSize: 14, fontWeight: 600, color: g.accentColor, marginBottom: 12 }}>{g.subtitle}</p>
                  <p style={{ fontSize: 15, color: "#3d4f6e", lineHeight: 1.7, marginBottom: 0 }}>{g.blurb}</p>
                </div>
                <div className="guide-card-price-col">
                  <div style={{ fontSize: 13, color: "#9aa8c0", textDecoration: "line-through", marginBottom: 2 }}>{g.strikePrice}</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: g.accentColor }}>{g.price}</div>
                  <div style={{
                    marginTop: 16,
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: g.accentColor, color: "#fff",
                    fontSize: 13, fontWeight: 700,
                    padding: "10px 20px", borderRadius: 8,
                    letterSpacing: "0.01em",
                  }}>
                    Buy the Guide →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* COMING SOON — only rendered when there are items */}
      {COMING_SOON.length > 0 && (
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9aa8c0", marginBottom: 32 }}>
            Coming Soon
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {COMING_SOON.map((g) => (
              <div key={g.title} style={{
                background: g.bgGradient,
                border: `1.5px solid ${g.borderColor}`,
                borderRadius: 16, padding: "28px 30px",
                opacity: 0.78,
              }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                  background: "rgba(0,0,0,0.08)", color: "#5a6a8a",
                  padding: "3px 10px", borderRadius: 20, display: "inline-block", marginBottom: 14,
                }}>{g.tag}</span>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", marginBottom: 6, letterSpacing: "-0.01em" }}>
                  {g.title}
                </h3>
                <p style={{ fontSize: 13, fontWeight: 600, color: g.accentColor, marginBottom: 12 }}>{g.subtitle}</p>
                <p style={{ fontSize: 14, color: "#3d4f6e", lineHeight: 1.7 }}>{g.blurb}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
