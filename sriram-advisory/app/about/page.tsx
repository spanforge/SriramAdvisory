import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sriram Advisory",
  description:
    "Sriram Advisory studies how work is changing in India through workforce research, market intelligence, automation analysis, and structured assessment frameworks.",
};

const PILLARS = [
  {
    title: "Workforce Research",
    body: "We study how professions, sectors, and labor-market signals are changing in India rather than treating careers as isolated personal decisions.",
  },
  {
    title: "Market Intelligence",
    body: "We translate role-level and industry-level change into structured observations professionals can actually use.",
  },
  {
    title: "Automation Analysis",
    body: "We focus on how technology changes work design, demand, and leverage instead of reducing the conversation to hype or panic.",
  },
  {
    title: "Structured Frameworks",
    body: "Our assessments and reports are designed to make career change legible through visible dimensions, categories, and tradeoffs.",
  },
];

const DIFFERENTIATORS = [
  "Not coaching. We are building a research and intelligence company.",
  "Not generic motivational advice. We work with labor, role, and market change.",
  "Not only IT. We track professions and industries across the Indian economy.",
  "Not only products. Reports and guides are outputs of a broader research direction.",
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
            Studying how work is
            <br />
            <span style={{ background: "linear-gradient(90deg, #1a4fd6, #22d3a0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              changing in India.
            </span>
          </h1>
          <p style={{ fontSize: "clamp(17px, 2.2vw, 21px)", color: "#4a5a7a", lineHeight: 1.75, maxWidth: 700 }}>
            Sriram Advisory combines workforce research, market intelligence,
            automation analysis, and structured assessment frameworks to help
            professionals make better career decisions.
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
                Building a workforce intelligence company for India, starting from the real
                questions professionals ask when work begins to change faster than institutions do.
              </p>
            </div>
          </div>

          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#0d9268", letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: 24 }}>
              The Story
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                Sriram Advisory was built around a simple observation: most public conversation about AI and careers is too narrow for the scale of change underway in India. It tends to focus on tools, panic, or one profession at a time.
              </p>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                But professionals are responding to something larger. They are trying to understand how automation, market shifts, employer expectations, and changing work design affect their future over years, not just weeks.
              </p>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                That is why the company is being positioned as a workforce intelligence business. The guides and reports matter, and they will stay, but they are outputs of a broader research direction rather than the whole identity.
              </p>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                The long-term goal is to help make work change in India more legible through structured frameworks, visible research, and better analytical language for professionals, teams, and industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0d9268" }}>
            What We Combine
          </span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 40, letterSpacing: "-0.02em" }}>
            A broader category than career advice.
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
            Explore the public-facing work.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", marginBottom: 32 }}>
            Start with research and assessments, then move into the existing guides and reports that are already live.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link
              href="/reports"
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
              Reports
            </Link>
            <Link
              href="/reports"
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
              Reports
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
