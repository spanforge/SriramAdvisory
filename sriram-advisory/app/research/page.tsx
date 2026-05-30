import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Sriram Advisory",
  description:
    "Research direction for Sriram Advisory covering workforce change across industries, professions, and the future of work in India.",
};

const RESEARCH_TRACKS = [
  "State of QA Careers 2026",
  "State of Business Analysis 2026",
  "State of BPO Careers 2026",
  "State of Indian Careers 2026",
];

const COVERAGE = [
  "Role change across functions",
  "Industry-level AI adoption",
  "Automation exposure patterns",
  "Labor-market saturation",
  "Demand shifts by profession",
  "Career pathway redesign",
];

export default function ResearchPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 60%, #e6efff 100%)",
          paddingTop: 100,
          paddingBottom: 72,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 20px" }}>
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
              Workforce Research
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
            Research
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "#5a6a8a",
              lineHeight: 1.75,
              maxWidth: 620,
              margin: "0 auto",
            }}
          >
            Visible research is how Sriram Advisory signals the bigger category: studying
            how work is changing across India, not just publishing role-specific products.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1040, margin: "0 auto", padding: "72px 20px 80px" }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6", marginBottom: 32 }}>
          Coming Soon
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {RESEARCH_TRACKS.map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(10,22,40,0.025)",
                border: "1px solid rgba(26,79,214,0.15)",
                borderRadius: 16,
                padding: "24px 22px",
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5a6a8a", marginBottom: 10 }}>
                Research Track
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#0a1628", lineHeight: 1.3 }}>
                {item}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f7f9fc", borderTop: "1px solid #e8edf5", borderBottom: "1px solid #e8edf5", padding: "56px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", marginBottom: 20, letterSpacing: "-0.02em" }}>
            What this research will cover
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {COVERAGE.map((item) => (
              <div
                key={item}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,79,214,0.12)",
                  borderRadius: 14,
                  padding: "18px 18px",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#0a1628",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
