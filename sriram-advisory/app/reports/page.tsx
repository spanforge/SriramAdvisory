import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { REPORTS } from "@/lib/siteCatalog";

export const metadata: Metadata = {
  title: "Reports | Sriram Advisory",
  description:
    "India-first intelligence reports on AI career risk, market shifts, and role diagnostics for working professionals.",
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
              Research Products
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
            Reports for buyers who want evidence, not AI noise
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
            Structured research products built for professionals who need a sharper market read before making role, learning, or positioning decisions.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 980, margin: "0 auto", padding: "64px 20px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {REPORTS.map((report) => (
            <Link key={report.href} href={report.href} style={{ textDecoration: "none" }}>
              <div
                className="guide-card guide-card-body report-card-body"
                style={{
                  background: report.bgGradient,
                  border: `1.5px solid ${report.borderColor}`,
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
                        background: report.accentColor,
                        color: "#ffffff",
                        padding: "3px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {report.badge}
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
                    {report.title}
                  </h2>
                  <p style={{ fontSize: 14, fontWeight: 700, color: report.accentColor, marginBottom: 12 }}>
                    {report.subtitle}
                  </p>
                  <div className="mobile-card-action">
                    <div style={{ fontSize: 24, fontWeight: 800, color: report.accentColor }}>{report.price}</div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        background: report.accentColor,
                        color: "#fff",
                        fontSize: 13,
                        fontWeight: 800,
                        padding: "11px 18px",
                        borderRadius: 8,
                        letterSpacing: "0.01em",
                        minWidth: 140,
                      }}
                    >
                      View report {"->"}
                    </div>
                  </div>
                  <p style={{ fontSize: 15, color: "#3d4f6e", lineHeight: 1.7, marginBottom: 14 }}>
                    {report.blurb}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {report.bullets.map((bullet) => (
                      <div key={bullet} style={{ fontSize: 13, color: "#4b5d7b", lineHeight: 1.6 }}>
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="guide-card-price-col desktop-card-action">
                  <div style={{ fontSize: 28, fontWeight: 800, color: report.accentColor }}>{report.price}</div>
                  <div
                    style={{
                      marginTop: 16,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: report.accentColor,
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "10px 20px",
                      borderRadius: 8,
                      letterSpacing: "0.01em",
                    }}
                  >
                    View report {"->"}
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
