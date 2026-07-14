import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FRAMEWORK_ITEMS } from "@/lib/frameworkCatalog";

export const metadata: Metadata = {
  title: "Frameworks | Sriram Advisory",
  description:
    "Public overview of Sriram Advisory decision systems, led by SA-AIRS for role exposure, career durability, AI leverage, and professional positioning.",
};

export default function FrameworksPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 58%, #edf7f2 100%)",
          paddingTop: 112,
          paddingBottom: 88,
          borderBottom: "1px solid rgba(26,79,214,0.12)",
        }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 24px" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6", display: "block", marginBottom: 26 }}>
            Decision Systems
          </span>
          <h1 style={{ fontSize: "clamp(38px, 5.4vw, 68px)", fontWeight: 900, color: "#0a1628", lineHeight: 1.08, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
            Start with SA-AIRS, then explore the supporting frameworks.
          </h1>
          <p style={{ fontSize: "clamp(17px, 2.1vw, 21px)", color: "#4a5a7a", lineHeight: 1.75, maxWidth: 780, margin: 0 }}>
            These public pages explain the purpose, examples, and limits of Sriram Advisory&apos;s frameworks. SA-AIRS is the flagship starting point for professionals trying to understand role exposure under AI-driven uncertainty.
          </p>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          {FRAMEWORK_ITEMS.map((framework) => (
            <Link key={framework.slug} href={`/frameworks/${framework.slug}`} style={{ textDecoration: "none" }}>
              <article style={{ height: "100%", border: framework.slug === "sa-airs" ? "2px solid #1a4fd6" : "1px solid #dbe5f5", borderRadius: 8, padding: "26px 24px", background: framework.slug === "sa-airs" ? "#eef4ff" : "#f8fbff" }}>
                <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0d9268", marginBottom: 12 }}>
                  {framework.slug === "sa-airs" ? "Flagship - Role Exposure Framework" : framework.eyebrow}
                </div>
                <h2 style={{ fontSize: 25, lineHeight: 1.18, color: "#0a1628", margin: "0 0 12px" }}>{framework.title}</h2>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: "0 0 18px" }}>{framework.summary}</p>
                <span style={{ color: "#1a4fd6", fontSize: 14, fontWeight: 900 }}>Open framework {"->"}</span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#0a1628", color: "#ffffff", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "0 0 18px", color: "#ffffff" }}>
            Frameworks are useful only when they improve judgment.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#dbe7ff", margin: "0 0 30px" }}>
            Read the standard for how these models are developed, tested, and updated.
          </p>
          <Link href="/our-thinking" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "15px 28px", borderRadius: 8, background: "#ffffff", color: "#1a4fd6", textDecoration: "none", fontWeight: 900 }}>
            Read Our Thinking
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
