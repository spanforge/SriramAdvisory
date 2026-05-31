import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Guides | Sriram Advisory",
  description:
    "India-first career intelligence guides for professionals navigating AI risk, market shifts, and role repositioning.",
};

const GUIDE_DELIVERY_NOTE = "Manual email delivery, usually within 30 minutes of payment.";
const BONUS_GUIDE_NOTE =
  "Every guide includes the Agentic AI Field Guide bonus at no extra cost.";

const GUIDES = [
  {
    badge: "New",
    title: "DevOps Survival Guide 2026",
    subtitle: "6.8/10 risk score. 60-day direction. Platform and reliability path.",
    blurb:
      "For DevOps engineers who want to move beyond pipeline-heavy execution and build stronger platform, reliability, and AI infrastructure positioning.",
    price: "Rs 499",
    href: "/guides/devops-survival-guide-2026",
    accentColor: "#1d4ed8",
    bgGradient: "linear-gradient(135deg, #f8fbff 0%, #e6efff 100%)",
    borderColor: "#bfdbfe",
  },
  {
    badge: "New",
    title: "Business Analyst Survival Guide 2026",
    subtitle: "7.1/10 risk score. 60-day direction. GCC and product-side path.",
    blurb:
      "For Business Analysts who need to move beyond documentation-heavy work and reposition around problem framing, business value, and stronger analyst signal.",
    price: "Rs 499",
    href: "/guides/business-analyst-survival-guide-2026",
    accentColor: "#0f766e",
    bgGradient: "linear-gradient(135deg, #f4fffd 0%, #dffaf3 100%)",
    borderColor: "#99f6e4",
  },
  {
    badge: "New",
    title: "QA Engineer Survival Guide 2026",
    subtitle: "9.5/10 risk score. 90-day direction. Higher-value QA path.",
    blurb:
      "For QA professionals under the sharpest AI pressure who want a clearer path toward stronger quality ownership and future-proof relevance.",
    price: "Rs 499",
    href: "/guides/qa-engineer-survival-guide-2026",
    accentColor: "#0d9268",
    bgGradient: "linear-gradient(135deg, #f5fff9 0%, #e3faec 100%)",
    borderColor: "#bbf7d0",
  },
  {
    badge: "New",
    title: "BPO & Customer Support Career Survival Guide 2026",
    subtitle: "9.2/10 risk score. 30-day direction. AI-era support paths.",
    blurb:
      "For support professionals who want to understand what AI compresses first and how to reposition toward more durable human-value work.",
    price: "Rs 499",
    href: "/guides/bpo-career-survival-guide-2026",
    accentColor: "#d97706",
    bgGradient: "linear-gradient(135deg, #fffdf4 0%, #fef1c8 100%)",
    borderColor: "#fde68a",
  },
  {
    badge: "New",
    title: "Java Developer AI Leverage Guide 2026",
    subtitle: "7.5/10 risk score. 60-day direction. Higher-leverage Java path.",
    blurb:
      "For Java developers who want to move up the value chain using AI without abandoning the Java ecosystem or drifting into vague upskilling.",
    price: "Rs 499",
    href: "/guides/java-developer-ai-leverage-guide-2026",
    accentColor: "#b45309",
    bgGradient: "linear-gradient(135deg, #fff8f0 0%, #ffe0b8 100%)",
    borderColor: "#fdba74",
  },
  {
    badge: "New",
    title: "Selenium Engineer Upgrade Guide 2026",
    subtitle: "7.2/10 risk score. 60-day direction. Modern automation path.",
    blurb:
      "For Selenium engineers who want to bridge into more modern automation relevance and avoid getting stuck in legacy comfort.",
    price: "Rs 499",
    href: "/guides/selenium-engineer-upgrade-guide-2026",
    accentColor: "#4f46e5",
    bgGradient: "linear-gradient(135deg, #f8f6ff 0%, #ede9fe 100%)",
    borderColor: "#c7d2fe",
  },
  {
    badge: "New",
    title: "Data Analyst Career Guide 2026",
    subtitle: "7.8/10 risk score. 90-day direction. Higher-value analyst path.",
    blurb:
      "For analysts who want to move beyond dashboard dependence and build stronger positioning around insight, context, and business value.",
    price: "Rs 499",
    href: "/guides/data-analyst-career-guide-2026",
    accentColor: "#2563eb",
    bgGradient: "linear-gradient(135deg, #f7faff 0%, #e2eeff 100%)",
    borderColor: "#bfdbfe",
  },
];

export default function GuidesPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #102346 60%, #1a4fd6 100%)",
          paddingTop: 96,
          paddingBottom: 72,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59,110,240,0.18)",
              border: "1px solid rgba(59,110,240,0.45)",
              borderRadius: 20,
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#3b6ef0",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#93b4ff",
              }}
            >
              India-First Career Intelligence
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Guides for Indian Professionals
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(200,220,255,0.84)",
              lineHeight: 1.75,
              maxWidth: 620,
              margin: "0 auto 24px",
            }}
          >
            Role-specific guides on AI risk, repositioning, and salary upside. Each guide is built to help you understand what is changing, what to do next, and how to present yourself more strongly.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {[
              "Role-specific, not generic",
              "Built for India-first market realities",
              "Manual delivery usually within 30 minutes",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 999,
                  color: "#f8fbff",
                  padding: "10px 14px",
                  fontSize: 13,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 980, margin: "0 auto", padding: "64px 20px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {GUIDES.map((guide) => (
            <Link key={guide.href} href={guide.href} style={{ textDecoration: "none" }}>
              <div
                className="guide-card guide-card-body"
                style={{
                  background: guide.bgGradient,
                  border: `1.5px solid ${guide.borderColor}`,
                  borderRadius: 18,
                  cursor: "pointer",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: guide.accentColor,
                        color: "#ffffff",
                        padding: "3px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {guide.badge}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      fontWeight: 800,
                      color: "#0a1628",
                      marginBottom: 6,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {guide.title}
                  </h2>
                  <p style={{ fontSize: 14, fontWeight: 700, color: guide.accentColor, marginBottom: 12 }}>
                    {guide.subtitle}
                  </p>
                  <p style={{ fontSize: 15, color: "#3d4f6e", lineHeight: 1.7, marginBottom: 14 }}>
                    {guide.blurb}
                  </p>
                  <p style={{ fontSize: 13, color: "#5a6a8a", lineHeight: 1.6, margin: 0 }}>
                    {GUIDE_DELIVERY_NOTE}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: guide.accentColor,
                      lineHeight: 1.6,
                      marginTop: 8,
                      marginBottom: 0,
                      fontWeight: 600,
                    }}
                  >
                    {BONUS_GUIDE_NOTE}
                  </p>
                </div>
                <div className="guide-card-price-col">
                  <div style={{ fontSize: 28, fontWeight: 800, color: guide.accentColor }}>{guide.price}</div>
                  <div
                    style={{
                      marginTop: 16,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: guide.accentColor,
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "10px 20px",
                      borderRadius: 8,
                      letterSpacing: "0.01em",
                    }}
                  >
                    View details {"->"}
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
