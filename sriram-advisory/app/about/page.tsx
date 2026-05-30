import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sriram Advisory",
  description:
    "Sriram Advisory studies how work is changing in India through workforce research, market intelligence, automation analysis, and structured assessment frameworks.",
};

const PILLARS = [
  {
    title: "Workforce Research",
    body: "We study how professions, sectors, and labor-market signals are changing in India rather than treating careers as isolated personal decisions.",
  },
  {
    title: "Market Intelligence",
    body: "We translate role-level and industry-level change into structured observations professionals can actually use.",
  },
  {
    title: "Automation Analysis",
    body: "We focus on how technology changes work design, demand, and leverage instead of reducing the conversation to hype or panic.",
  },
  {
    title: "Structured Frameworks",
    body: "Our assessments and reports are designed to make career change legible through visible dimensions, categories, and tradeoffs.",
  },
];

const DIFFERENTIATORS = [
  "Not coaching. We are building a research and intelligence company.",
  "Not generic motivational advice. We work with labor, role, and market change.",
  "Not only IT. We track professions and industries across the Indian economy.",
  "Not only products. Reports and guides are outputs of a broader research direction.",
];

export default function AboutPage() {
  return (
    <div style={{ background: "#fbfcf8", color: "#132033", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          padding: "120px 24px 88px",
          background:
            "radial-gradient(circle at top left, rgba(18,132,108,0.12), transparent 26%), linear-gradient(180deg, #f7f8ee 0%, #fbfcf8 62%, #ffffff 100%)",
        }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#12846c",
            }}
          >
            About Sriram Advisory
          </span>
          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 88px)",
              lineHeight: 0.98,
              color: "#132033",
              marginTop: 18,
              marginBottom: 22,
            }}
          >
            Studying how work is
            <span style={{ display: "block", color: "#12846c" }}>changing in India.</span>
          </h1>
          <p
            style={{
              maxWidth: 760,
              fontSize: "clamp(18px, 2.2vw, 23px)",
              lineHeight: 1.7,
              color: "#465366",
            }}
          >
            Sriram Advisory combines workforce research, market intelligence,
            automation analysis, and structured assessment frameworks to help
            professionals make better career decisions.
          </p>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(260px, 320px) minmax(0, 1fr)",
            gap: 34,
          }}
          className="about-grid"
        >
          <div
            style={{
              background: "#132033",
              color: "#eff4ef",
              borderRadius: 24,
              padding: 26,
              alignSelf: "start",
            }}
          >
            <img
              src="/sriram.png"
              alt="Sriram Srinivasan"
              style={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid rgba(255,255,255,0.14)",
                marginBottom: 18,
              }}
            />
            <div style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>
              Sriram Srinivasan
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#8be3d1",
                marginBottom: 18,
              }}
            >
              Founder
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: "#c3ced7" }}>
              Building a workforce intelligence company for India, starting from the
              real questions professionals ask when work begins to change faster than
              institutions do.
            </p>
          </div>

          <div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#12846c",
              }}
            >
              The Story
            </span>
            <div style={{ display: "grid", gap: 18, marginTop: 18 }}>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.9, color: "#566274" }}>
                Sriram Advisory was built around a simple observation: most public
                conversation about AI and careers is too narrow for the scale of change
                underway in India. It tends to focus on tools, panic, or one profession
                at a time.
              </p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.9, color: "#566274" }}>
                But professionals are responding to something larger. They are trying to
                understand how automation, market shifts, employer expectations, and
                changing work design affect their future over years, not just weeks.
              </p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.9, color: "#566274" }}>
                That is why the company is being positioned as a workforce intelligence
                business. The guides and reports matter, and they will stay, but they are
                outputs of a broader research direction rather than the whole identity.
              </p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.9, color: "#566274" }}>
                The long-term goal is to help make work change in India more legible
                through structured frameworks, visible research, and better analytical
                language for professionals, teams, and industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#f7f8ee" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#12846c",
            }}
          >
            What We Combine
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 52px)",
              color: "#132033",
              marginTop: 16,
              marginBottom: 18,
            }}
          >
            A broader category than career advice.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: 18,
              marginTop: 28,
            }}
          >
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  border: "1px solid rgba(19,32,51,0.08)",
                  padding: 24,
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 800, color: "#132033", marginBottom: 12 }}>
                  {pillar.title}
                </div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: "#566274" }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            background: "#132033",
            borderRadius: 28,
            padding: "34px 30px",
            color: "#eff4ef",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#8be3d1",
            }}
          >
            Positioning
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 50px)",
              color: "#ffffff",
              marginTop: 16,
              marginBottom: 20,
            }}
          >
            What makes Sriram Advisory different
          </h2>
          <div style={{ display: "grid", gap: 14 }}>
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item}
                style={{
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#d5dde4",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px", background: "#fbfcf8", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              color: "#132033",
              marginBottom: 18,
            }}
          >
            Explore the public-facing work.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#566274", marginBottom: 32 }}>
            Start with research and assessments, then move into the existing guides and
            reports that are already live.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link
              href="/research"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 28px",
                borderRadius: 12,
                background: "#12846c",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Research
            </Link>
            <Link
              href="/reports"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 28px",
                borderRadius: 12,
                background: "transparent",
                color: "#132033",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid rgba(19,32,51,0.18)",
              }}
            >
              Reports
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
