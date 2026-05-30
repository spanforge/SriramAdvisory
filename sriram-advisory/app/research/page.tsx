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
    <div style={{ background: "#fbfcf8", color: "#132033", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ padding: "120px 24px 84px", background: "linear-gradient(180deg, #f7f8ee 0%, #ffffff 100%)" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#12846c" }}>
            Research
          </span>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 82px)", lineHeight: 1, color: "#132033", marginTop: 18, marginBottom: 18 }}>
            Tracking how work is changing in India.
          </h1>
          <p style={{ maxWidth: 760, fontSize: "clamp(18px, 2.1vw, 22px)", lineHeight: 1.75, color: "#566274" }}>
            Research is the center of the repositioning. These upcoming studies signal the
            long-term direction of Sriram Advisory as a workforce intelligence company.
          </p>
        </div>
      </section>

      <section style={{ padding: "84px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {RESEARCH_TRACKS.map((item) => (
              <div key={item} style={{ padding: 24, borderRadius: 20, background: "#f7f8ee", border: "1px solid rgba(19,32,51,0.08)" }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7b8697", marginBottom: 12 }}>
                  Coming Soon
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#132033", lineHeight: 1.3 }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "84px 24px", background: "#f7f8ee" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#12846c" }}>
            Focus Areas
          </span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 24 }}>
            {COVERAGE.map((item) => (
              <div key={item} style={{ padding: "18px 18px", borderRadius: 16, background: "#ffffff", border: "1px solid rgba(19,32,51,0.08)", fontSize: 15, fontWeight: 700 }}>
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
