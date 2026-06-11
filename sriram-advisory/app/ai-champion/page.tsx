import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";

export const metadata: Metadata = {
  title: "AI Champion | Sriram Advisory",
  description:
    "Practitioner intelligence for the individual accountable for making AI reach production. Field notes, templates, frameworks, and assessments built from the inside.",
};

const audienceSignals = [
  "You raised your hand to lead an AI initiative inside your organisation - or got volunteered",
  "You won the pilot. You are now fighting to reach production",
  "You are managing governance, infosec, legal, and stakeholder resistance simultaneously",
  "You are accountable for AI outcomes without full authority over budget or headcount",
  "You have not found a resource that was actually built for your situation",
];

const fieldNotesIncludes = [
  "7 field notes covering the real failure patterns in enterprise AI",
  "Sample Model Card - the document that closes governance reviews",
  "AI Risk Register Template - 7 pre-populated risks with mitigations and owners",
  "Production Readiness Scorecard - score your initiative before governance does",
  "AI Incident Log Template - ready to populate before your next deployment",
  "Three war stories - the Governance Delay, the Infosec Surprise, the Business Case Failure",
  "AI Champion Maturity Model - Levels 1 to 5",
];

const maturityLevels = [
  {
    level: "1",
    title: "Tool User",
    body: "Uses AI tools in personal workflow. Understands outputs but not architecture. Limited internal influence.",
  },
  {
    level: "2",
    title: "Experimenter",
    body: "Builds small AI proofs of concept. Can demonstrate value. Struggles to navigate organisational barriers.",
  },
  {
    level: "3",
    title: "AI Champion",
    note: "This series is built for you",
    body: "Drives an AI initiative from concept through governance to production. Manages stakeholders. Owns outcomes.",
  },
  {
    level: "4",
    title: "AI Program Lead",
    body: "Runs multiple concurrent AI initiatives. Builds internal AI capability. Influences AI policy and standards.",
  },
  {
    level: "5",
    title: "AI Transformation Leader",
    body: "Shapes the organisation's AI strategy. Accountable for enterprise-wide AI outcomes. Operates at board or C-suite level.",
  },
];

const primaryButtonStyle = {
  background: "#1a4fd6",
  color: "#ffffff",
  fontWeight: 800,
  fontSize: 15,
  padding: "14px 22px",
  borderRadius: 8,
  textDecoration: "none",
  border: "1px solid #3b6ef0",
  boxShadow: "0 14px 34px rgba(26,79,214,0.25)",
} as const;

const secondaryButtonStyle = {
  background: "rgba(255,255,255,0.1)",
  color: "#ffffff",
  fontWeight: 800,
  fontSize: 15,
  padding: "14px 22px",
  borderRadius: 8,
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.2)",
} as const;

export default function AIChampionPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #102346 58%, #1a4fd6 100%)",
          color: "#ffffff",
          padding: "92px 20px 54px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 820 }}>
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
              {"Sriram Advisory \u00b7 AI Champion"}
            </p>
            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 1.02,
                fontWeight: 850,
                marginBottom: 24,
              }}
            >
              Built for the person carrying the AI initiative
            </h1>
            <p style={{ fontSize: "clamp(18px, 2.4vw, 24px)", lineHeight: 1.55, color: "#e7efff", maxWidth: 760, marginBottom: 18 }}>
              Not the builder. Not the buyer. The one in the middle - accountable for outcomes they don&apos;t fully control.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(231,239,255,0.82)", maxWidth: 760, marginBottom: 30 }}>
              The AI Champion vertical is the first practitioner intelligence series built specifically for the individual who is responsible for making AI actually reach production inside a real organisation.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <CashfreeCheckout
                productName="AI Champion Field Notes"
                amount={499}
                buttonLabel={"Get Field Notes - \u20b9499"}
                accentColor="#1a4fd6"
                buttonStyle={primaryButtonStyle}
                deliveryNote="Manual email delivery usually lands within 30 minutes after payment."
                emailNote="Your field notes and templates will be sent to this email."
                footerNote="Secured by Cashfree Payments. One-time purchase. Manual email delivery."
              />
              <Link href="#resources" style={secondaryButtonStyle}>
                See all resources {"\u2192"}
              </Link>
            </div>
          </div>

          <blockquote
            style={{
              margin: "54px 0 0",
              maxWidth: 880,
              borderLeft: "4px solid #7eb3ff",
              padding: "6px 0 6px 22px",
              color: "#f8fbff",
              fontSize: "clamp(20px, 3vw, 30px)",
              lineHeight: 1.45,
              fontWeight: 700,
            }}
          >
            &quot;The model is rarely what kills the project. Governance reviews. Stakeholder resistance. Trust gaps. Organisational friction. That&apos;s what usually does.&quot;
          </blockquote>
        </div>
      </section>

      <section style={{ maxWidth: 1060, margin: "0 auto", padding: "72px 20px" }}>
        <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6", marginBottom: 12 }}>
          Who This Is For
        </p>
        <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.12, marginBottom: 28 }}>
          You are an AI Champion if -
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14, marginBottom: 28 }}>
          {audienceSignals.map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid #dbe5f5",
                borderRadius: 8,
                padding: "18px 18px",
                background: "#f8fbff",
                color: "#31435f",
                lineHeight: 1.65,
                fontSize: 15,
              }}
            >
              <span style={{ color: "#0d9268", fontWeight: 900, marginRight: 8 }}>{"\u2713"}</span>
              {item}
            </div>
          ))}
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "#344766", maxWidth: 830 }}>
          This vertical is not for AI builders or AI buyers. It is for the practitioner in the middle - the one who owns delivery.
        </p>
      </section>

      <section id="resources" style={{ background: "#f4f7fc", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6", marginBottom: 12 }}>
            Current Resources
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 28, alignItems: "stretch" }}>
            <div>
              <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.12, marginBottom: 16 }}>
                AI Champion intelligence series
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: "#425472", maxWidth: 620 }}>
                Practitioner IP - templates, frameworks, war stories, and scored assessments built from the inside.
              </p>
            </div>
            <article
              style={{
                background: "#ffffff",
                border: "1px solid #dbe5f5",
                borderRadius: 8,
                padding: "28px",
                boxShadow: "0 20px 50px rgba(10,22,40,0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "flex-start", marginBottom: 14 }}>
                <h3 style={{ fontSize: 24, lineHeight: 1.18, margin: 0 }}>AI Champion Field Notes</h3>
                <strong style={{ fontSize: 24, color: "#1a4fd6", whiteSpace: "nowrap" }}>{"\u20b9499"}</strong>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#31435f", marginBottom: 14 }}>
                What nobody tells you about taking AI from pilot to production.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#5a6a8a", marginBottom: 22 }}>
                7 field notes. 4 working templates. 3 war stories. A production readiness scorecard. A maturity model. 22 pages.
              </p>
              <CashfreeCheckout
                productName="AI Champion Field Notes"
                amount={499}
                buttonLabel="Get Field Notes"
                accentColor="#1a4fd6"
                buttonStyle={primaryButtonStyle}
                deliveryNote="Manual email delivery usually lands within 30 minutes after payment."
                emailNote="Your field notes and templates will be sent to this email."
                footerNote="Secured by Cashfree Payments. One-time purchase. Manual email delivery."
              />
            </article>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1060, margin: "0 auto", padding: "72px 20px" }}>
        <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6", marginBottom: 12 }}>
          The AI Champion Maturity Model
        </p>
        <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.12, marginBottom: 16 }}>
          Where do you sit?
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: "#425472", maxWidth: 850, marginBottom: 28 }}>
          Understanding your current level is the first step to deliberate growth. The AI Champion series is designed to move you from Level 2 to confident Level 3 - and give you the language and frameworks to build toward Level 4.
        </p>
        <div style={{ display: "grid", gap: 12 }}>
          {maturityLevels.map((item) => {
            const active = item.level === "3";
            return (
              <article
                key={item.level}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: 18,
                  alignItems: "start",
                  border: active ? "1.5px solid #1a4fd6" : "1px solid #dbe5f5",
                  borderRadius: 8,
                  padding: "18px",
                  background: active ? "linear-gradient(135deg, #f8fbff 0%, #e8f1ff 100%)" : "#ffffff",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 8,
                    background: active ? "#1a4fd6" : "#eef3fb",
                    color: active ? "#ffffff" : "#1a4fd6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: 18,
                  }}
                >
                  {item.level}
                </div>
                <div>
                  <h3 style={{ fontSize: 20, marginBottom: 6 }}>
                    {item.title}
                    {item.note ? <span style={{ color: "#1a4fd6", fontSize: 14, marginLeft: 8 }}>{"\u2190"} {item.note}</span> : null}
                  </h3>
                  <p style={{ color: "#425472", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                </div>
              </article>
            );
          })}
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "#0a1628", fontWeight: 800, marginTop: 28, fontStyle: "italic" }}>
          The goal is not to become a better AI user. The goal is to become someone trusted to deliver AI outcomes.
        </p>
      </section>

      <section id="start-here" style={{ background: "#0a1628", color: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 34, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#93b4ff", marginBottom: 12 }}>
              Start Here
            </p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.08, marginBottom: 16 }}>
              AI Champion Field Notes - {"\u20b9499"}
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "rgba(231,239,255,0.86)" }}>
              The entry product. 22 pages. Written from the inside. No hype. No theory.
            </p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 8, padding: "26px" }}>
            <div style={{ display: "grid", gap: 12, marginBottom: 24 }}>
              {fieldNotesIncludes.map((item) => (
                <div key={item} style={{ color: "#e7efff", lineHeight: 1.6, fontSize: 15 }}>
                  <span style={{ color: "#7ee2b8", fontWeight: 900, marginRight: 8 }}>{"\u2713"}</span>
                  {item}
                </div>
              ))}
            </div>
            <CashfreeCheckout
              productName="AI Champion Field Notes"
              amount={499}
              buttonLabel={"Get it for \u20b9499"}
              accentColor="#1a4fd6"
              buttonStyle={primaryButtonStyle}
              deliveryNote="Manual email delivery usually lands within 30 minutes after payment."
              emailNote="Your field notes and templates will be sent to this email."
              footerNote="Secured by Cashfree Payments. One-time purchase. Manual email delivery."
            />
            <p style={{ fontSize: 13, color: "rgba(231,239,255,0.68)", lineHeight: 1.7, marginTop: 16 }}>
              {"Manual email delivery within 30 minutes \u00b7 Individual use \u00b7 Free updates included"}
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#f8fbff", padding: "34px 20px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", color: "#52627e", lineHeight: 1.7, fontSize: 14 }}>
          <p style={{ fontStyle: "italic", marginBottom: 12 }}>
            This vertical is part of Sriram Advisory&apos;s workforce intelligence platform. The AI Champion series covers delivery intelligence - what it takes to carry an AI initiative from pilot to production inside a real organisation.
          </p>
          <p style={{ fontStyle: "italic" }}>
            {"\u00a9 2026 Sriram Advisory. Educational and analytical commentary only."}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
