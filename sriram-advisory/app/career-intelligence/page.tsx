import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Career Intelligence | Sriram Advisory",
  description:
    "Career intelligence products for professionals navigating AI risk, role change, market pressure, and repositioning in India.",
};

const PATHS = [
  {
    label: "Start Here",
    title: "Am I Future-Proof? Audit",
    body: "A focused assessment for professionals who want near-term clarity on AI exposure, role durability, and next-step direction.",
    href: "/am-i-future-proof",
    cta: "View assessment",
    price: "Rs 499",
    accent: "#dc2626",
    background: "linear-gradient(135deg, #fff5f5 0%, #fee2e2 100%)",
    border: "#fecaca",
  },
  {
    label: "Market Intelligence",
    title: "Reports",
    body: "India-first intelligence reports on AI career risk, market shifts, role pressure, and professional reinvention.",
    href: "/reports",
    cta: "Browse reports",
    price: "From Rs 499",
    accent: "#7c3aed",
    background: "linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)",
    border: "#d8b4fe",
  },
  {
    label: "Role Playbooks",
    title: "Guides",
    body: "Role-specific guides for IT and HR professionals who want practical repositioning direction in the AI era.",
    href: "/guides",
    cta: "Browse guides",
    price: "Rs 499",
    accent: "#1d4ed8",
    background: "linear-gradient(135deg, #f8fbff 0%, #e8f1ff 100%)",
    border: "#bfdbfe",
  },
  {
    label: "Personal Review",
    title: "Career Positioning Audit",
    body: "A structured review of how your resume and LinkedIn profile read to the market, with concise fixes and positioning guidance.",
    href: "/services/career-positioning-audit",
    cta: "View service",
    price: "Rs 999",
    accent: "#b45309",
    background: "linear-gradient(135deg, #fff9f2 0%, #ffedd5 100%)",
    border: "#fed7aa",
  },
];

const USE_CASES = [
  "You want to understand whether your current role is exposed to AI-driven change.",
  "You need a clearer view of which roles, sectors, or skills are gaining pressure.",
  "You want to reposition your profile before the market forces the decision.",
];

export default function CareerIntelligencePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #102346 58%, #1a4fd6 100%)",
          padding: "96px 20px 78px",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#93b4ff",
              marginBottom: 22,
            }}
          >
            Sriram Advisory Â· Career Intelligence
          </p>
          <h1
            style={{
              fontSize: "clamp(38px, 5.5vw, 66px)",
              lineHeight: 1.06,
              fontWeight: 850,
              marginBottom: 20,
              letterSpacing: "-0.03em",
            }}
          >
            Make clearer career decisions in the AI era
          </h1>
          <p
            style={{
              fontSize: "clamp(17px, 2.2vw, 21px)",
              lineHeight: 1.7,
              color: "rgba(231,239,255,0.86)",
              maxWidth: 720,
              margin: "0 auto 28px",
            }}
          >
            Assess your risk, understand the market shift, and choose practical next moves for your role, profile, and positioning.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12 }}>
            <Link
              href="/am-i-future-proof"
              style={{
                background: "#1a4fd6",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: 15,
                padding: "14px 22px",
                borderRadius: 8,
                textDecoration: "none",
                border: "1px solid #3b6ef0",
                boxShadow: "0 14px 34px rgba(26,79,214,0.25)",
              }}
            >
              Start with assessment
            </Link>
            <Link
              href="#paths"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: 15,
                padding: "14px 22px",
                borderRadius: 8,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Explore products {"->"}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1060, margin: "0 auto", padding: "54px 20px 18px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          {USE_CASES.map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid #dbe5f5",
                borderRadius: 8,
                padding: "18px",
                background: "#f8fbff",
                color: "#344766",
                lineHeight: 1.65,
                fontSize: 15,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="paths" style={{ maxWidth: 1060, margin: "0 auto", padding: "48px 20px 80px" }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6", marginBottom: 10 }}>
            Choose Your Path
          </p>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.12, marginBottom: 12 }}>
            One advisory path, four ways to start
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#425472", maxWidth: 720 }}>
            Start with a personal assessment if you need clarity about yourself. Use reports for market context, guides for role-specific action, and services when you want direct profile review.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 22 }}>
          {PATHS.map((path) => (
            <Link key={path.href} href={path.href} style={{ textDecoration: "none" }}>
              <article
                style={{
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  background: path.background,
                  border: `1.5px solid ${path.border}`,
                  borderRadius: 12,
                  padding: "26px 24px",
                  boxShadow: "0 18px 42px rgba(10,22,40,0.07)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      width: "fit-content",
                      fontSize: 11,
                      fontWeight: 850,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      background: path.accent,
                      color: "#ffffff",
                      padding: "5px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {path.label}
                  </span>
                  <strong style={{ color: path.accent, fontSize: 14, whiteSpace: "nowrap" }}>{path.price}</strong>
                </div>
                <div>
                  <h3 style={{ fontSize: 24, lineHeight: 1.15, color: "#0a1628", marginBottom: 10 }}>
                    {path.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "#425472", lineHeight: 1.7, margin: 0 }}>{path.body}</p>
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    width: "fit-content",
                    background: path.accent,
                    color: "#ffffff",
                    borderRadius: 8,
                    padding: "11px 16px",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  {path.cta} {"->"}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#0a1628", color: "#ffffff", padding: "64px 20px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.12, marginBottom: 14 }}>
            Not sure where to begin?
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(231,239,255,0.82)", marginBottom: 24 }}>
            If you are making a personal career decision, begin with the assessment. If you are carrying an AI initiative inside your organisation, use the AI Delivery path instead.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link
              href="/am-i-future-proof"
              style={{
                background: "#1a4fd6",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: 15,
                padding: "13px 18px",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              Start career assessment
            </Link>
            <Link
              href="/ai-delivery-intelligence"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: 15,
                padding: "13px 18px",
                borderRadius: 8,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              Explore AI Delivery
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
