import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sriram Advisory",
  description:
    "Sriram Advisory is India's analytical scoring system for AI career risk. Depth beats tools. Direction beats degrees.",
};

const PHILOSOPHY = [
  {
    label: "Depth Beats Tools",
    body: "The tools will keep changing. How you think about them determines whether they work for you — or against you. Depth compounds. Tool knowledge expires.",
  },
  {
    label: "Direction Beats Degrees",
    body: "You do not need a computer science degree to navigate the AI era well. You need clarity about where you are going and what mental model is blocking you.",
  },
  {
    label: "Honesty Over Optimism",
    body: "AI anxiety is a data problem. When you understand what is actually changing — specifically, for your role — fear turns into strategy.",
  },
  {
    label: "Thinking Before Doing",
    body: "More knowledge + same mental model = same outputs. Different thinking + existing knowledge = exponential outputs. The frame comes first.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 60%, #e6efff 100%)",
        paddingTop: 120, paddingBottom: 100, position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,79,214,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,214,0.04) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div style={{ position: "absolute", top: -80, right: "5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,79,214,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a4fd6", display: "block", marginBottom: 28 }}>The Analyst</span>
          <h1 style={{ fontSize: "clamp(38px, 5.5vw, 70px)", fontWeight: 800, color: "#0a1628", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
            The thinking is<br />
            <span style={{ background: "linear-gradient(90deg, #1a4fd6, #22d3a0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              the credential.
            </span>
          </h1>
          <p style={{ fontSize: "clamp(17px, 2.2vw, 21px)", color: "#4a5a7a", lineHeight: 1.75, maxWidth: 600 }}>
            Sriram Advisory exists because most career commentary in the AI era is either panic or platitude.
            Neither is grounded in data. What professionals need is a structured, honest read of what is actually
            changing — clearly enough to make their own call.
          </p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <img
              src="/sriram.png" alt="Sriram Srinivasan"
              style={{ width: "100%", maxWidth: 260, borderRadius: 16, objectFit: "cover", border: "2px solid #1a4fd6" }}
            />
            <div style={{ marginTop: 28 }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#0a1628", marginBottom: 4 }}>Sriram Srinivasan</div>
              <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Founder, Sriram Advisory<br />SA-AIRS™ Analyst
              </div>
              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="mailto:sriram@sriramadvisory.com" style={{ fontSize: 13, color: "#1a4fd6", textDecoration: "none", fontWeight: 500 }}>
                  sriram@sriramadvisory.com
                </a>
                <Link href="/contact" style={{ fontSize: 13, color: "#1a4fd6", textDecoration: "none", fontWeight: 500 }}>
                  Contact →
                </Link>
              </div>
            </div>
          </div>

          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#0d9268", letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: 24 }}>Why I Built This</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                The question I kept hearing — from managers, analysts, engineers, founders — was not
                &ldquo;what AI tool should I learn?&rdquo; It was &ldquo;am I going to be okay?&rdquo;
                And nobody was giving them a straight answer.
              </p>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                The career advice industry responded to AI with two flavours: doom (&ldquo;your job is disappearing&rdquo;)
                and optimism theatre (&ldquo;just learn prompting and you&rsquo;ll be fine&rdquo;). Neither was
                grounded in how roles actually work or how AI exposure actually distributes across thinking patterns.
              </p>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                I built SA-AIRS™ around one core insight: the variable is not your tools,
                your title, or your years of experience. It is how you think about your work.
                That is what determines whether AI makes you more valuable — or easy to replace.
              </p>
              <p style={{ fontSize: 16, color: "#4a5a7a", lineHeight: 1.85, margin: 0 }}>
                The SA-AIRS™ scoring system — five dimensions, one composite score, a traceable causal chain — exists to answer
                one question precisely: <strong style={{ color: "#0a1628" }}>where are you, and what does the data say?</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0d9268" }}>Philosophy</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 52, letterSpacing: "-0.02em" }}>
            How I think about AI and careers
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {PHILOSOPHY.map((p) => (
              <div key={p.label} style={{ background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.15)", borderRadius: 14, padding: "32px 28px" }}>
                <div style={{ width: 32, height: 3, background: "#1a4fd6", borderRadius: 2, marginBottom: 20 }} />
                <div style={{ fontSize: 16, fontWeight: 800, color: "#0a1628", marginBottom: 12 }}>{p.label}</div>
                <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.75, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section style={{ padding: "100px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0d9268" }}>Positioning</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#0a1628", marginTop: 16, marginBottom: 40, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            More than career advice.<br />More than coaching.<br />More than a course.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { label: "Not coaching", body: "Coaching works on behaviour. This works on thinking patterns. The question is not how you show up — it is whether the mental model you operate from creates or destroys career leverage in an AI era." },
              { label: "Not a course", body: "A course teaches a skill. This answers a question: given everything about your specific role, tasks, and frame profile — where are you actually exposed, and what thinking shift changes that?" },
              { label: "Not generic career advice", body: "Generic advice says 'learn AI tools' or 'build your personal brand.' This is specific — built on a rule-based methodology with transparent scoring. The output is a score report, dimension benchmarks, and the full causal chain — documented and traceable." },
            ].map((item) => (
              <div key={item.label} style={{ borderLeft: "2px solid #1a4fd6", paddingLeft: 24 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#1a4fd6", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</div>
                <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", background: "#ffffff", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#0a1628", marginBottom: 20, letterSpacing: "-0.02em" }}>
            Understand where you stand.
          </h2>
          <p style={{ fontSize: 17, color: "#5a6a8a", lineHeight: 1.7, marginBottom: 36 }}>
            SA-AIRS™ Score Report. Starting at ₹499.
          </p>
          <Link href="/sa-airs-score-report" style={{
            display: "inline-flex", alignItems: "center",
            background: "#1a4fd6", color: "#fff", fontWeight: 700,
            fontSize: 16, padding: "15px 36px", borderRadius: 10,
            textDecoration: "none", border: "1px solid #3b6ef0",
          }}>
            Get Your Score →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
