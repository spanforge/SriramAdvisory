import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sriram Advisory",
  description:
    "Sriram Advisory is a workforce intelligence and advisory firm for the AI era, helping professionals and AI initiative owners make clearer decisions.",
};

const PILLARS = [
  {
    title: "Career Intelligence",
    body: "For professionals who need to understand AI exposure, market pressure, role durability, and practical repositioning options.",
  },
  {
    title: "AI Delivery Intelligence",
    body: "For practitioners responsible for moving AI initiatives through governance, stakeholder trust, operational readiness, and production.",
  },
  {
    title: "Structured Diagnostics",
    body: "Assessments, scorecards, audits, and frameworks that make career risk or delivery friction visible enough to act on.",
  },
  {
    title: "Practical Advisory Outputs",
    body: "Reports, guides, field notes, and services designed to turn uncertainty into a next decision, not just more information.",
  },
];

const DIFFERENTIATORS = [
  "Advisory-first, not motivation-first. The work is built around decisions, tradeoffs, and next moves.",
  "Two clear paths: Career Intelligence for professionals and AI Delivery Intelligence for initiative owners.",
  "Framework-led. Products and services are built around structured diagnostics, not generic advice.",
  "Practical enough to use. Reports, guides, templates, and audits are designed for real decisions.",
];

const FOUNDER_FACTS = [
  "Active in enterprise AI delivery at Wipro",
  "100+ guide orders in the first 28 days",
  "SA-AIRS built from direct observation of how AI changes Indian IT work",
];

export default function AboutPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 60%, #e6efff 100%)",
          paddingTop: 120,
          paddingBottom: 100,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 24px" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a4fd6", display: "block", marginBottom: 28 }}>
            About Sriram Advisory
          </span>
          <h1 style={{ fontSize: "clamp(38px, 5.5vw, 70px)", fontWeight: 800, color: "#0a1628", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Built for the career questions
            <br />
            <span style={{ background: "linear-gradient(90deg, #1a4fd6, #22d3a0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              AI makes impossible to ignore.
            </span>
          </h1>
          <p style={{ fontSize: "clamp(17px, 2.2vw, 21px)", color: "#4a5a7a", lineHeight: 1.75, maxWidth: 700 }}>
            Sriram Advisory helps Indian IT professionals read AI pressure clearly, strengthen their market story, and choose a practical next move.
          </p>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="about-grid"
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid rgba(26,79,214,0.15)",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <img
              src="/sriram.png"
              alt="Sriram Srinivasan"
              style={{ width: "100%", maxWidth: 220, borderRadius: 16, objectFit: "cover", border: "2px solid #1a4fd6" }}
            />
            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#0a1628", marginBottom: 4 }}>Sriram Srinivasan</div>
              <div style={{ fontSize: 13, color: "#5a6a8a", lineHeight: 1.6, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
                Founder
              </div>
              <p style={{ marginTop: 16, marginBottom: 0, fontSize: 15, color: "#5a6a8a", lineHeight: 1.8 }}>
                Active in enterprise AI delivery at Wipro. Building practical career intelligence from the signals professionals see before the market names them.
              </p>
            </div>
          </div>

          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#0d9268", letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: 24 }}>
              The Story
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                Sriram Advisory began with a simple observation from AI delivery work: the market changes before job titles, career advice, and company messaging catch up. Professionals can feel the pressure long before they have language for it.
              </p>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                SA-AIRS was built to make that pressure legible: how exposed a role is, where market demand is shifting, and what kind of work still compounds. The guides translate those signals into role-specific decisions for Indian IT professionals.
              </p>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                The response has been clear. More than 100 guide orders arrived in the first 28 days, from people who were not looking for generic motivation; they were looking for an honest read and a usable next step.
              </p>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                The long-term goal is to make AI-era work change more legible through structured frameworks, practical diagnostics, and advisory products that help people choose their next move with more confidence.
              </p>
            </div>
          </div>
          <div
            style={{
              gridColumn: "1 / -1",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: 14,
              marginTop: 32,
            }}
          >
            {FOUNDER_FACTS.map((fact) => (
              <div key={fact} style={{ background: "#ffffff", border: "1px solid rgba(26,79,214,0.15)", borderRadius: 8, padding: "18px", color: "#304159", fontSize: 14, fontWeight: 700, lineHeight: 1.6 }}>
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0d9268" }}>
            What We Combine
          </span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 40, letterSpacing: "-0.02em" }}>
            A broader advisory system than career advice.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                style={{ background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.15)", borderRadius: 14, padding: "28px 24px" }}
              >
                <div style={{ width: 32, height: 3, background: "#1a4fd6", borderRadius: 2, marginBottom: 20 }} />
                <div style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", marginBottom: 12 }}>{pillar.title}</div>
                <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.75, margin: 0 }}>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            background: "#0a1628",
            borderRadius: 20,
            padding: "34px 30px",
            color: "#f8faff",
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#93b4ff" }}>
            Positioning
          </span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#ffffff", marginTop: 16, marginBottom: 20, letterSpacing: "-0.02em" }}>
            What makes Sriram Advisory different
          </h2>
          <div style={{ display: "grid", gap: 14 }}>
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item}
                style={{
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#dbe3ea",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px", background: "#ffffff", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#0a1628", marginBottom: 20, letterSpacing: "-0.02em" }}>
            Start with the path that fits your situation.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", marginBottom: 32 }}>
            Use Career Intelligence if you are making a personal career decision. Use AI Delivery if you are responsible for moving an AI initiative toward production.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link
              href="/career-intelligence"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 28px",
                borderRadius: 10,
                background: "#1a4fd6",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid #3b6ef0",
              }}
            >
              Career Intelligence
            </Link>
            <Link
              href="/ai-delivery-intelligence"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 28px",
                borderRadius: 10,
                background: "transparent",
                color: "#1a4fd6",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid rgba(126,179,255,0.25)",
              }}
            >
              AI Delivery
            </Link>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#5a6a8a", marginTop: 26 }}>
            Prefer to ask directly? Email{" "}
            <a href="mailto:sriram@sriramadvisory.com" style={{ color: "#1a4fd6", fontWeight: 700, textDecoration: "none" }}>
              sriram@sriramadvisory.com
            </a>{" "}
            or WhatsApp{" "}
            <a href="https://wa.me/919342229420" target="_blank" rel="noopener noreferrer" style={{ color: "#1a4fd6", fontWeight: 700, textDecoration: "none" }}>
              +91 93422 29420
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
