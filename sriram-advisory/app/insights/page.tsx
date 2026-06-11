import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { ARTICLES } from "./[slug]/page";

export const metadata: Metadata = {
  title: "Blog | Sriram Advisory",
  description:
    "Frameworks, data, and honest analysis on AI career displacement. What is actually true about AI and your career.",
};

const TYPE_COLOURS: Record<string, { bg: string; text: string }> = {
  Analysis: { bg: "rgba(26,79,214,0.08)", text: "#1a4fd6" },
  Framework: { bg: "rgba(79,195,247,0.1)", text: "#0991c5" },
  Data: { bg: "rgba(16,180,140,0.08)", text: "#0d9e7e" },
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="px-5 md:px-10" style={{ background: "#0a1628", paddingTop: 100, paddingBottom: 80 }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#4fc3f7", marginBottom: 24,
          }}>Blog</div>
          <h1 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(42px, 6vw, 80px)",
            lineHeight: 1, letterSpacing: "0.02em",
            color: "#f8faff", margin: "0 0 28px",
          }}>
            Frameworks, Data,<br />
            <span style={{ color: "#1a4fd6" }}>and Honest Analysis.</span>
          </h1>
          <p style={{
            fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(248,250,255,0.7)",
            lineHeight: 1.75, margin: "0 0 36px", maxWidth: 620,
          }}>
            Not content for its own sake. Every piece here connects back to a question we hear from clients:
            &ldquo;What is actually true about AI and my career?&rdquo;
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Analysis", "Framework", "Data"].map((type) => {
              const c = TYPE_COLOURS[type];
              return (
                <div key={type} style={{
                  display: "flex", alignItems: "center", gap: 8,
                fontSize: 13, fontWeight: 600, letterSpacing: "0.05em",
                  color: "rgba(248,250,255,0.5)",
                }}>
                  <span style={{
                    display: "inline-block",
                    background: c.bg, color: c.text,
                    fontSize: 13, fontWeight: 700, letterSpacing: "0.08em",
                    padding: "3px 10px", borderRadius: 20,
                  }}>{type}</span>                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PUBLISHED ARTICLES */}
      {ARTICLES.length > 0 && (
        <section className="px-5 md:px-10" style={{ background: "#ffffff", paddingTop: 72, paddingBottom: 64 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{
              fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#0d9268", marginBottom: 16,
            }}>Published</div>
            <h2 style={{
              fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.02em",
              color: "#0a1628", margin: "0 0 40px", lineHeight: 1,
            }}>Latest from Sriram</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, border: "1px solid rgba(10,22,40,0.08)", borderRadius: 14, overflow: "hidden" }}>
              {ARTICLES.map((article) => {
                const c = TYPE_COLOURS[article.type] ?? TYPE_COLOURS["Analysis"];
                return (
                  <Link key={article.slug} href={`/insights/${article.slug}`} style={{
                    display: "grid", gridTemplateColumns: "1fr auto",
                    gap: 24, alignItems: "center",
                    padding: "28px 32px",
                    background: "#fafbfc",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(10,22,40,0.06)",
                  }}>
                    <div>
                      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
                        <span style={{
                          background: c.bg, color: c.text,
                          fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                          padding: "3px 10px", borderRadius: 20,
                        }}>{article.type}</span>
                        <span style={{ fontSize: 13, color: "#5a6a8a" }}>{article.tag}</span>
                        <span style={{ fontSize: 13, color: "#5a6a8a" }}>· {article.readTime}</span>
                      </div>
                      <h3 style={{
                        fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                        fontSize: 22, letterSpacing: "0.03em", color: "#0a1628",
                        margin: "0 0 8px", lineHeight: 1.15,
                      }}>{article.title}</h3>
                      <p style={{ fontSize: 13, color: "#5a6a8a", lineHeight: 1.7, margin: 0 }}>{article.teaser}</p>
                    </div>
                    <span style={{ fontSize: 20, color: "#1a4fd6", flexShrink: 0 }}>→</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
