import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { REPORTS } from "@/lib/siteCatalog";

export const metadata: Metadata = {
  title: "Reports | Sriram Advisory",
  description:
    "Future of Work research reports on careers, skills, AI, automation, GCCs, Indian IT, and workforce change.",
};

export default function ReportsPage() {
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
              Research Library
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
            Research for people making workforce decisions
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
            Reports and briefings on how work is changing across technology, skills, careers, organizations, and the Indian talent market.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 980, margin: "0 auto", padding: "64px 20px 80px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto 34px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.6vw, 40px)", color: "#0a1628", marginBottom: 12 }}>
            Start with the question you need answered.
          </h2>
          <p style={{ fontSize: 16, color: "#52627e", lineHeight: 1.8, margin: 0 }}>
            Each report is designed to help professionals, managers, and teams understand a specific workforce shift before it becomes obvious in the market.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {REPORTS.map((report) => (
            <Link key={report.href} href={report.href} style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #dbe5f5",
                  borderLeft: `5px solid ${report.accentColor}`,
                  borderRadius: 8,
                  cursor: "pointer",
                  padding: "28px 26px",
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 180px", gap: 26, alignItems: "start" }} className="home-two-col">
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          background: "#f1f5f9",
                          color: "#304159",
                          padding: "4px 10px",
                          borderRadius: 999,
                        }}
                      >
                        {report.publicationDate}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          background: report.accentColor,
                          color: "#ffffff",
                          padding: "4px 10px",
                          borderRadius: 999,
                        }}
                      >
                        {report.format}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: report.accentColor,
                        }}
                      >
                        {report.badge}
                      </span>
                    </div>
                    <h2
                      style={{
                        fontSize: "clamp(22px, 2.8vw, 31px)",
                        fontWeight: 900,
                        color: "#0a1628",
                        margin: "0 0 8px",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.18,
                      }}
                    >
                      {report.title}
                    </h2>
                    <p style={{ fontSize: 14, fontWeight: 800, color: report.accentColor, margin: "0 0 14px" }}>
                      {report.subtitle}
                    </p>
                    <p style={{ fontSize: 15, color: "#3d4f6e", lineHeight: 1.75, margin: "0 0 18px" }}>
                      {report.blurb}
                    </p>
                    <div style={{ background: "#f8fbff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "16px 18px", marginBottom: 16 }}>
                      <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6", marginBottom: 8 }}>
                        Methodology
                      </div>
                      <p style={{ fontSize: 14, color: "#52627e", lineHeight: 1.7, margin: 0 }}>{report.methodologyNote}</p>
                    </div>
                    <div style={{ display: "grid", gap: 8 }}>
                      <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0d9268" }}>
                        Key Findings
                      </div>
                      {report.keyFindings.map((finding) => (
                        <div key={finding} style={{ fontSize: 14, color: "#4b5d7b", lineHeight: 1.65 }}>
                          {finding}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ border: `1px solid ${report.borderColor}`, borderRadius: 8, padding: "18px 16px", background: report.bgGradient }}>
                    <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: report.accentColor, marginBottom: 12 }}>
                      Extended Edition
                    </div>
                    <div style={{ fontSize: 28, fontWeight: 900, color: report.accentColor, marginBottom: 12 }}>{report.price}</div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        background: report.accentColor,
                        color: "#fff",
                        fontSize: 13,
                        fontWeight: 800,
                        padding: "11px 18px",
                        borderRadius: 8,
                        letterSpacing: "0.01em",
                      }}
                    >
                      Read overview {"->"}
                    </div>
                    <p style={{ fontSize: 12, color: "#52627e", lineHeight: 1.65, margin: "14px 0 0" }}>
                      Public overview with paid extended edition where available.
                    </p>
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
