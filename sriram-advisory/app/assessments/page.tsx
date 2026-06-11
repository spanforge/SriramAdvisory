import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessments | Sriram Advisory",
  description:
    "Structured assessment frameworks from Sriram Advisory for understanding workforce change, role exposure, and career intelligence in India.",
};

const ASSESSMENTS = [
  {
    title: "Am I Future-Proof? Audit",
    subtitle: "48-hour audit for near-term decision clarity.",
    body: "For professionals who want a sharper interpretation layer on top of the underlying assessment logic.",
    href: "/am-i-future-proof",
    cta: "View Audit",
    status: "Available Now",
    accentColor: "#dc2626",
    bgGradient: "linear-gradient(135deg, #fff5f5 0%, #fee2e2 100%)",
    borderColor: "#fecaca",
  },
];

export default function AssessmentsPage() {
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
              Structured Frameworks
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
            Assessments
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
            Structured assessment products sit inside the larger workforce intelligence
            system and help professionals translate market change into personal clarity.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 980, margin: "0 auto", padding: "72px 20px 80px" }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6", marginBottom: 32 }}>
          Assessment Paths
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {ASSESSMENTS.map((item) => (
            <div
              key={item.title}
              style={{
                background: item.bgGradient,
                border: `1.5px solid ${item.borderColor}`,
                borderRadius: 16,
                padding: "28px 28px",
                display: "flex",
                gap: 28,
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: 260 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      background: item.accentColor,
                      color: "#ffffff",
                      padding: "3px 10px",
                      borderRadius: 20,
                    }}
                  >
                    {item.status}
                  </span>
                  <span style={{ fontSize: 12, color: "#5a6a8a", fontWeight: 500 }}>
                    {item.subtitle}
                  </span>
                </div>
                <h3 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "#0a1628", marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 15, color: "#3d4f6e", lineHeight: 1.75, marginBottom: 0 }}>
                  {item.body}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                <Link
                  href={item.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: item.accentColor,
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    padding: "11px 22px",
                    borderRadius: 8,
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
