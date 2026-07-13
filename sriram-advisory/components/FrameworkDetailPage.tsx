import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { FrameworkItem } from "@/lib/frameworkCatalog";

type FrameworkDetailPageProps = {
  framework: FrameworkItem | undefined;
};

export default function FrameworkDetailPage({ framework }: FrameworkDetailPageProps) {
  if (!framework) {
    return null;
  }

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
          <Link href="/frameworks" style={{ color: "#1a4fd6", fontSize: 14, fontWeight: 900, textDecoration: "none", display: "inline-flex", marginBottom: 26 }}>
            {"<-"} All Frameworks
          </Link>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268", display: "block", marginBottom: 20 }}>
            {framework.eyebrow}
          </span>
          <h1 style={{ fontSize: "clamp(38px, 5.4vw, 68px)", fontWeight: 900, color: "#0a1628", lineHeight: 1.08, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
            {framework.title}
          </h1>
          <p style={{ fontSize: "clamp(17px, 2.1vw, 21px)", color: "#4a5a7a", lineHeight: 1.75, maxWidth: 800, margin: 0 }}>
            {framework.summary}
          </p>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)", gap: 34 }} className="home-two-col">
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Problem
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0 18px" }}>
              The question this framework was built to answer.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#4a5a7a", margin: 0 }}>
              {framework.problem}
            </p>
          </div>
          <div style={{ border: "1px solid #dbe5f5", borderRadius: 8, padding: 24, background: "#f8fbff" }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              Concept
            </span>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#4a5a7a", margin: "16px 0 24px" }}>
              {framework.concept}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
              {["Signal", "Interpretation", "Decision"].map((step, index) => (
                <div key={step} style={{ minHeight: 92, border: "1px solid rgba(26,79,214,0.18)", borderRadius: 8, padding: "14px 12px", background: "#ffffff" }}>
                  <div style={{ width: 26, height: 26, borderRadius: 8, background: index === 1 ? "#0d9268" : "#1a4fd6", color: "#ffffff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, marginBottom: 10 }}>
                    {index + 1}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: "#0a1628" }}>{step}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.55, color: "#52627e", marginTop: 5 }}>
                    {index === 0 ? "Observe workforce change" : index === 1 ? "Apply the framework lens" : "Choose a practical next move"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
              What It Explains
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0" }}>
              The public purpose of the framework.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {framework.whatItExplains.map((item) => (
              <div key={item} style={{ background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "18px", color: "#304159", fontSize: 15, lineHeight: 1.7, fontWeight: 750 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)", gap: 34 }} className="home-two-col">
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              Applications
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0" }}>
              Where the framework is used.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              The public concept supports a range of research and advisory outputs without exposing the underlying proprietary rubrics.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
            {framework.applications.map((item) => (
              <div key={item} style={{ border: "1px solid #dbe5f5", borderRadius: 8, padding: "16px", background: "#f8fbff", fontSize: 15, lineHeight: 1.6, color: "#304159", fontWeight: 850 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 24 }} className="home-two-col">
          <div style={{ background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "28px 26px" }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              Case Study
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1.18, color: "#0a1628", margin: "14px 0 18px" }}>
              A practical reading of the framework.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "#4a5a7a", margin: "0 0 18px" }}>{framework.caseStudy}</p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: 0 }}>{framework.exampleUse}</p>
          </div>
          <div style={{ background: "#0a1628", borderRadius: 8, padding: "28px 26px", color: "#ffffff" }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#93b4ff" }}>
              Limitations
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1.18, color: "#ffffff", margin: "14px 0 20px" }}>
              What the framework should not be used for.
            </h2>
            <div style={{ display: "grid", gap: 12 }}>
              {framework.limitations.map((item) => (
                <div key={item} style={{ fontSize: 15, lineHeight: 1.75, color: "#dbe7ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 12 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#0a1628", color: "#ffffff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#93b4ff" }}>
            FAQ
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#ffffff", margin: "16px 0 28px" }}>
            Clear boundaries make the work more useful.
          </h2>
          <div style={{ display: "grid", gap: 14 }}>
            {framework.faq.map((item) => (
              <article key={item.question} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "22px 20px", background: "rgba(255,255,255,0.05)" }}>
                <h3 style={{ fontSize: 20, color: "#ffffff", margin: "0 0 10px" }}>{item.question}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#dbe7ff", margin: 0 }}>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
            Evolution
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "16px 0 18px" }}>
            How this model is treated inside the research practice.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "#4a5a7a", margin: "0 0 26px" }}>
            {framework.evolution}
          </p>
          <div style={{ border: "1px solid #dbe5f5", borderRadius: 8, padding: "22px 20px", background: "#ffffff" }}>
            <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0d9268", marginBottom: 10 }}>
              Download
            </div>
            <h3 style={{ fontSize: 22, color: "#0a1628", margin: "0 0 10px" }}>{framework.downloadTitle}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: "0 0 16px" }}>
              A public note can summarize the framework, applications, and limitations. Full proprietary rubrics remain inside Sriram Advisory research products and advisory work.
            </p>
            <Link href="/contact" style={{ color: "#1a4fd6", fontSize: 14, fontWeight: 900, textDecoration: "none" }}>
              Request framework note {"->"}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "92px 24px", background: "#ffffff", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "0 0 18px" }}>
            Apply the framework through research, reports, and advisory work.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: "0 0 32px" }}>
            The public page explains the lens. The deeper application happens inside published research and specific decision contexts.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link href={framework.relatedHref} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "15px 28px", borderRadius: 8, background: "#1a4fd6", color: "#ffffff", textDecoration: "none", fontWeight: 900 }}>
              {framework.relatedLabel}
            </Link>
            <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "15px 28px", borderRadius: 8, background: "#ffffff", color: "#1a4fd6", textDecoration: "none", fontWeight: 900, border: "1px solid rgba(26,79,214,0.22)" }}>
              Read Methodology
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
