import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sriram Advisory | Future of Work Research and Advisory",
  description:
    "Sriram Advisory is a Future of Work research and advisory practice studying careers, skills, organizations, and industries.",
};

const RESEARCH_PILLARS = [
  {
    title: "Careers & Skills",
    body: "How roles change, which skills retain value, and how professionals can build more durable market positioning.",
  },
  {
    title: "AI & Automation",
    body: "How AI and automation reshape tasks, teams, hiring, management expectations, and the value of human judgment.",
  },
  {
    title: "GCCs & Indian IT",
    body: "How global delivery models, Indian technology work, and enterprise operating models are changing career pathways.",
  },
  {
    title: "Organizations & Leadership",
    body: "How teams, structures, decision rights, and management work evolve as technology and economic pressure shift.",
  },
];

const DIFFERENTIATORS = [
  "Future of Work research with a practical India lens, not generic global trend commentary.",
  "AI is one research area, alongside automation, demographics, GCCs, careers, skills, leadership, and organizational design.",
  "Structured analysis built to make workforce shifts easier to understand and act on.",
  "Practical outputs for professionals, managers, and teams who need clearer next decisions.",
];

const FOUNDER_FACTS = [
  "Three decades observing technology shifts and enterprise work",
  "Enterprise technology and AI delivery experience",
  "Creator of structured career and workforce intelligence products",
];

const MISSION_BELIEFS = [
  "Most professionals are not short of effort. They are short of updated maps.",
  "Career advice often lags the market because job titles change slower than the work inside them.",
  "The future of work is not only an AI story. It is also a story about organizations, economics, delivery models, and judgment.",
  "Useful research should help people make clearer decisions before the pressure becomes obvious.",
];

export default function AboutPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 58%, #edf7f2 100%)",
          paddingTop: 120,
          paddingBottom: 96,
          borderBottom: "1px solid rgba(26,79,214,0.12)",
        }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 24px" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6", display: "block", marginBottom: 28 }}>
            About Sriram Advisory
          </span>
          <h1 style={{ fontSize: "clamp(40px, 5.5vw, 70px)", fontWeight: 900, color: "#0a1628", lineHeight: 1.08, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
            Most professionals are preparing for the future with outdated assumptions.
          </h1>
          <p style={{ fontSize: "clamp(17px, 2.2vw, 21px)", color: "#4a5a7a", lineHeight: 1.75, maxWidth: 760, margin: 0 }}>
            Sriram Advisory exists to change that. We study how work is being rewritten and turn the research into practical intelligence for professionals, managers, and teams.
          </p>
        </div>
      </section>

      <section style={{ padding: "96px 24px", background: "#ffffff" }}>
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
              background: "#f8fbff",
              border: "1px solid rgba(26,79,214,0.15)",
              borderRadius: 12,
              padding: 24,
            }}
          >
            <Image src="/sriram.png" alt="Sriram Srinivasan" width={220} height={220} style={{ width: "100%", maxWidth: 220, borderRadius: 12, objectFit: "cover", border: "2px solid #1a4fd6" }} />
            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#0a1628", marginBottom: 4 }}>Sriram Srinivasan</div>
              <div style={{ fontSize: 13, color: "#5a6a8a", lineHeight: 1.6, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>
                Founder
              </div>
              <p style={{ marginTop: 16, marginBottom: 0, fontSize: 15, color: "#5a6a8a", lineHeight: 1.8 }}>
                Sriram Advisory is built on three decades of observing how technology reshapes careers, organizations, and professional value.
              </p>
            </div>
          </div>

          <div>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#0d9268", letterSpacing: "0.16em", textTransform: "uppercase", display: "block", marginBottom: 24 }}>
              Why This Exists
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                Sriram Advisory began from a simple frustration: the market was changing faster than the language professionals were using to understand it.
              </p>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                People could sense that AI, automation, global delivery models, GCCs, and organizational pressure were reshaping work. But most guidance still reduced the answer to tools, courses, or generic upskilling.
              </p>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                The purpose of Sriram Advisory is to build a clearer map: one that helps professionals understand what companies may value next, what parts of work are changing, and how to prepare with better judgment.
              </p>
            </div>
          </div>

          <div
            style={{
              gridColumn: "1 / -1",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: 14,
              marginTop: 28,
            }}
          >
            {FOUNDER_FACTS.map((fact) => (
              <div key={fact} style={{ background: "#f8fbff", border: "1px solid rgba(26,79,214,0.15)", borderRadius: 8, padding: "18px", color: "#304159", fontSize: 14, fontWeight: 800, lineHeight: 1.6 }}>
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px", background: "#0a1628", color: "#ffffff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#93b4ff" }}>
            What We Believe
          </span>
          <h2 style={{ fontSize: "clamp(28px, 3.8vw, 46px)", fontWeight: 900, color: "#ffffff", margin: "16px 0 28px", letterSpacing: "-0.02em", lineHeight: 1.12 }}>
            The point of view behind the research.
          </h2>
          <div style={{ display: "grid", gap: 14 }}>
            {MISSION_BELIEFS.map((belief) => (
              <div key={belief} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "0 0 14px", fontSize: 16, lineHeight: 1.8, color: "#dbe3ea" }}>
                {belief}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
            What We Study
          </span>
          <h2 style={{ fontSize: "clamp(28px, 3.8vw, 46px)", fontWeight: 900, color: "#0a1628", margin: "16px 0 36px", letterSpacing: "-0.02em", lineHeight: 1.12 }}>
            The research sits where careers, technology, and organizations meet.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {RESEARCH_PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                style={{ background: "#ffffff", border: "1px solid rgba(26,79,214,0.15)", borderRadius: 8, padding: "26px 24px" }}
              >
                <div style={{ fontSize: 19, fontWeight: 900, color: "#0a1628", marginBottom: 12 }}>{pillar.title}</div>
                <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.75, margin: 0 }}>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            background: "#0a1628",
            borderRadius: 12,
            padding: "34px 30px",
            color: "#f8faff",
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#93b4ff" }}>
            Positioning
          </span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 900, color: "#ffffff", margin: "16px 0 20px", letterSpacing: "-0.02em" }}>
            Future of Work intelligence for professionals and organizations.
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

      <section style={{ padding: "96px 24px", background: "#f7f9fc", textAlign: "center" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 3.8vw, 46px)", fontWeight: 900, color: "#0a1628", margin: "0 0 18px", letterSpacing: "-0.02em" }}>
            Read the research or start with a career guide.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: "0 0 32px" }}>
            Use the research library for broader workforce signals, or choose a guide when you need a practical next step for your own role.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link
              href="/reports"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 28px",
                borderRadius: 8,
                background: "#1a4fd6",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 800,
                border: "1px solid #3b6ef0",
              }}
            >
              Read Research
            </Link>
            <Link
              href="/guides"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 28px",
                borderRadius: 8,
                background: "#ffffff",
                color: "#1a4fd6",
                textDecoration: "none",
                fontWeight: 800,
                border: "1px solid rgba(26,79,214,0.22)",
              }}
            >
              Career Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
