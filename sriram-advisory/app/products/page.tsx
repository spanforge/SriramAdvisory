import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrackedLink from "@/components/TrackedLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Assets | Sriram Advisory",
  description:
    "Sriram Advisory products and assets organized by framework, with SA-AIRS learning paths for career decisions under AI-driven uncertainty.",
};

const LEARNING_PATH = [
  {
    step: "Start here",
    title: "SA-AIRS Career Risk Audit",
    body: "Get your current role interpreted across exposure, defensibility, market pressure, and practical next moves.",
    href: "/products/airs-assessment",
    price: "Rs 1,999",
    signal: "Best first step",
  },
  {
    step: "Role context",
    title: "Career Intelligence Guides",
    body: "Choose a role-specific guide when you need practical next steps for the work you do now.",
    href: "/guides",
    price: "From Rs 499",
    signal: "Learning path",
  },
  {
    step: "Market view",
    title: "AI Risk Rankings India 2026",
    body: "Use the wider market report when you need to understand role-level pressure across India.",
    href: "/products/ai-risk-rankings-india-2026",
    price: "Rs 999",
    signal: "Deeper report",
  },
];

const FRAMEWORK_GROUPS = [
  {
    framework: "SA-AIRS",
    label: "Flagship decision system",
    body: "Role exposure, defensibility, market pressure, and next moves under AI-driven uncertainty.",
    assets: [
      {
        title: "SA-AIRS Career Risk Audit",
        type: "Assessment",
        path: "Start here",
        href: "/products/airs-assessment",
        price: "Rs 1,999",
        body: "A structured role assessment covering exposure, market pressure, and practical next moves.",
      },
      {
        title: "Career Intelligence Report - SA-AIRS Pro",
        type: "Assessment",
        path: "Personal diagnosis",
        href: "/career-intelligence-report/sa-airs-pro",
        price: "Rs 999",
        body: "A structured diagnostic for professionals who want a deeper SA-AIRS role score and benchmarks.",
      },
      {
        title: "AI Risk Rankings India 2026",
        type: "Report",
        path: "Market context",
        href: "/products/ai-risk-rankings-india-2026",
        price: "Rs 999",
        body: "A role-level view of AI pressure across Indian careers and adaptation direction.",
      },
    ],
  },
  {
    framework: "AI Leverage Ladder",
    label: "Supporting framework",
    body: "Move from basic tool use to workflow ownership, better decisions, and stronger professional leverage.",
    assets: [
      {
        title: "AI Literacy for Absolute Beginners",
        type: "Guide",
        path: "Foundation",
        href: "/ai-literacy/absolute-beginners",
        price: "Rs 499",
        body: "A practical foundation for professionals who need to build AI fluency before role-specific moves.",
      },
      {
        title: "Python Developer AI Leverage Guide 2026",
        type: "Role guide",
        path: "Role application",
        href: "/guides/python-developer-ai-leverage-guide-2026",
        price: "Rs 499",
        body: "A role-specific guide for moving beyond script-heavy execution into stronger AI-assisted leverage.",
      },
      {
        title: "Java Developer AI Leverage Guide 2026",
        type: "Role guide",
        path: "Role application",
        href: "/guides/java-developer-ai-leverage-guide-2026",
        price: "Rs 499",
        body: "A guide for using AI to move up the value chain without abandoning the Java ecosystem.",
      },
    ],
  },
  {
    framework: "Replaceability Curve",
    label: "Supporting framework",
    body: "Understand quiet value erosion before it becomes visible as job loss, salary pressure, or weak demand.",
    assets: [
      {
        title: "Why Expertise Becomes a Trap",
        type: "Research report",
        path: "Concept depth",
        href: "/products/why-expertise-becomes-a-trap",
        price: "Report",
        body: "A research report on competency traps, professional reinvention, and value erosion during technology shifts.",
      },
      {
        title: "The Seniority Trap",
        type: "Insight",
        path: "Short read",
        href: "/insights/seniority-trap-mid-career-ai-risk",
        price: "Free",
        body: "An essay on why mid-career experience can become fragile when market signals change.",
      },
    ],
  },
  {
    framework: "Career Positioning Audit",
    label: "Supporting framework",
    body: "Strengthen the professional signal the market sees: resume clarity, LinkedIn framing, proof, and direction.",
    assets: [
      {
        title: "Career Positioning Audit",
        type: "Service",
        path: "Signal repair",
        href: "/services/career-positioning-audit",
        price: "Rs 999",
        body: "A structured audit of how your resume and LinkedIn profile read to the market today.",
      },
      {
        title: "Business Analyst to AI Product Manager Guide 2026",
        type: "Role guide",
        path: "Transition path",
        href: "/guides/ba-to-ai-pm-guide-2026",
        price: "Rs 499",
        body: "A transition guide for stronger problem framing, AI product ownership, and outcome-led positioning.",
      },
    ],
  },
];

const MEASUREMENT_POINTS = [
  "SA-AIRS audit page views and checkout starts",
  "Products & Assets path clicks by framework",
  "Guide and report overview clicks",
  "Checkout submit events and payment-status outcomes",
];

export default function ProductsPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 58%, #edf7f2 100%)",
          padding: "112px 24px 88px",
          borderBottom: "1px solid rgba(26,79,214,0.12)",
        }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6", display: "block", marginBottom: 26 }}>
            Products & Assets
          </span>
          <h1 style={{ fontSize: "clamp(40px, 5.4vw, 68px)", fontWeight: 900, color: "#0a1628", lineHeight: 1.08, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
            Choose the asset by the decision you need to make.
          </h1>
          <p style={{ fontSize: "clamp(17px, 2.1vw, 21px)", color: "#4a5a7a", lineHeight: 1.75, maxWidth: 780, margin: 0 }}>
            Phase 1 keeps the catalog simple: SA-AIRS first, then supporting assets organized by framework and learning path.
          </p>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              SA-AIRS Learning Path
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              Start narrow, then add role and market context.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {LEARNING_PATH.map((item, index) => (
              <TrackedLink
                key={item.title}
                href={item.href}
                eventName="Learning Path Click"
                eventProperties={{ path_step: item.step, asset: item.title, position: index + 1 }}
                style={{ textDecoration: "none" }}
              >
                <article style={{ height: "100%", border: index === 0 ? "2px solid #1a4fd6" : "1px solid #dbe5f5", borderRadius: 8, padding: "26px 24px", background: index === 0 ? "#eef4ff" : "#f8fbff" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", marginBottom: 14 }}>
                    <span style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0d9268" }}>{item.step}</span>
                    <span style={{ fontSize: 12, fontWeight: 900, color: "#1a4fd6" }}>{item.price}</span>
                  </div>
                  <h3 style={{ fontSize: 24, lineHeight: 1.18, color: "#0a1628", margin: "0 0 12px" }}>{item.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: "0 0 18px" }}>{item.body}</p>
                  <span style={{ display: "inline-flex", fontSize: 12, fontWeight: 900, letterSpacing: "0.10em", textTransform: "uppercase", color: "#304159", background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 999, padding: "5px 10px" }}>
                    {item.signal}
                  </span>
                </article>
              </TrackedLink>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Organized By Framework
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              SA-AIRS leads. Supporting frameworks stay secondary.
            </h2>
          </div>

          <div style={{ display: "grid", gap: 22 }}>
            {FRAMEWORK_GROUPS.map((group) => (
              <section key={group.framework} style={{ border: group.framework === "SA-AIRS" ? "2px solid #1a4fd6" : "1px solid #dbe5f5", borderRadius: 8, background: "#ffffff", padding: "26px 24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(220px, 0.55fr) minmax(0, 1.45fr)", gap: 22, alignItems: "start" }} className="home-two-col">
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0d9268", marginBottom: 12 }}>
                      {group.label}
                    </div>
                    <h3 style={{ fontSize: 28, lineHeight: 1.15, color: "#0a1628", margin: "0 0 12px" }}>
                      {group.framework}
                    </h3>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: 0 }}>{group.body}</p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
                    {group.assets.map((asset) => (
                      <TrackedLink
                        key={asset.href}
                        href={asset.href}
                        eventName="Product Asset Click"
                        eventProperties={{ framework: group.framework, asset: asset.title, asset_type: asset.type }}
                        style={{ textDecoration: "none" }}
                      >
                        <article style={{ height: "100%", border: "1px solid #dbe5f5", borderRadius: 8, padding: "20px 18px", background: "#f8fbff" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginBottom: 12 }}>
                            <span style={{ fontSize: 12, fontWeight: 900, color: "#1a4fd6" }}>{asset.type}</span>
                            <span style={{ fontSize: 12, fontWeight: 900, color: "#0d9268" }}>{asset.price}</span>
                          </div>
                          <h4 style={{ fontSize: 19, lineHeight: 1.25, color: "#0a1628", margin: "0 0 10px", fontWeight: 900 }}>{asset.title}</h4>
                          <p style={{ fontSize: 14, lineHeight: 1.65, color: "#52627e", margin: "0 0 14px" }}>{asset.body}</p>
                          <span style={{ color: "#1a4fd6", fontSize: 13, fontWeight: 900 }}>{asset.path} {"->"}</span>
                        </article>
                      </TrackedLink>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#0a1628", color: "#ffffff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#93b4ff" }}>
            Phase 1 Measurement
          </span>
          <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0 24px", color: "#ffffff" }}>
            The site is now set up to watch real behavior.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#dbe7ff", margin: "0 0 28px" }}>
            Page views are handled by Vercel Analytics. Custom events now capture the moments that matter for Phase 1 validation.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {MEASUREMENT_POINTS.map((point) => (
              <div key={point} style={{ border: "1px solid rgba(255,255,255,0.14)", borderRadius: 8, padding: "16px 18px", background: "rgba(255,255,255,0.06)", color: "#f8faff", fontSize: 15, lineHeight: 1.65, fontWeight: 750 }}>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
