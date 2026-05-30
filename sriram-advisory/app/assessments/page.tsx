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
    title: "SA-AIRS(TM) Score Report",
    subtitle: "Structured individual assessment available now.",
    body: "A current paid assessment for professionals who want a role-level reading through the SA-AIRS framework.",
    href: "/sa-airs-score-report",
    cta: "View Score Report",
    status: "Available Now",
  },
  {
    title: "Am I Future-Proof? Audit",
    subtitle: "48-hour audit for near-term decision clarity.",
    body: "For professionals who want a sharper interpretation layer on top of the underlying assessment logic.",
    href: "/am-i-future-proof",
    cta: "View Audit",
    status: "Available Now",
  },
  {
    title: "Workforce Intelligence Benchmarks",
    subtitle: "Comparative benchmarking across professions and sectors.",
    body: "A future assessment direction that expands from single-role scoring into broader workforce intelligence.",
    href: "/contact",
    cta: "Enquire",
    status: "Coming Soon",
  },
];

export default function AssessmentsPage() {
  return (
    <div style={{ background: "#fbfcf8", color: "#132033", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ padding: "120px 24px 84px", background: "linear-gradient(180deg, #f7f8ee 0%, #ffffff 100%)" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#12846c" }}>
            Assessments
          </span>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 82px)", lineHeight: 1, color: "#132033", marginTop: 18, marginBottom: 18 }}>
            Frameworks for reading change, not just reacting to it.
          </h1>
          <p style={{ maxWidth: 760, fontSize: "clamp(18px, 2.1vw, 22px)", lineHeight: 1.75, color: "#566274" }}>
            Assessments are one part of the larger workforce intelligence system. They
            help professionals translate broad market change into structured personal insight.
          </p>
        </div>
      </section>

      <section style={{ padding: "84px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gap: 18 }}>
          {ASSESSMENTS.map((item) => (
            <div key={item.title} style={{ padding: 26, borderRadius: 22, background: "#f7f8ee", border: "1px solid rgba(19,32,51,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap", marginBottom: 12 }}>
                <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: item.status === "Available Now" ? "#12846c" : "#7b8697" }}>
                  {item.status}
                </span>
                <span style={{ fontSize: 13, color: "#566274", fontWeight: 600 }}>{item.subtitle}</span>
              </div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", color: "#132033", marginBottom: 12 }}>
                {item.title}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#566274", marginBottom: 18 }}>
                {item.body}
              </p>
              <Link href={item.href} style={{ color: "#132033", fontWeight: 700, textDecoration: "none", borderBottom: "1px solid rgba(19,32,51,0.24)", paddingBottom: 2 }}>
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
