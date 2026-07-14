import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Thinking | Sriram Advisory",
  description:
    "How Sriram Advisory develops, validates, and refines evidence-based career decision frameworks such as SA-AIRS.",
};

const DEVELOPMENT_STEPS = [
  {
    title: "Observation",
    body: "We begin with repeated career and workforce signals: roles changing, hiring filters shifting, or professionals misreading where risk sits.",
  },
  {
    title: "Repeated Pattern",
    body: "A pattern has to appear across more than one anecdote before it deserves a framework. One sharp story is not enough.",
  },
  {
    title: "Validation",
    body: "The idea is tested against real professionals, role examples, reports, and market behavior until its limits become clearer.",
  },
  {
    title: "Named Framework",
    body: "Only then does it become a public framework or decision system that can support products, audits, guides, and advisory work.",
  },
];

const REQUIRED_STANDARDS = [
  "Every framework we publish must predict or explain something better than common career advice. If it does not, we do not publish it.",
  "A framework should help a professional make a clearer decision, not merely rename an obvious idea.",
  "The public explanation should be understandable without exposing every proprietary scoring rule.",
  "Frameworks are living decision systems. They are refined when new evidence, user feedback, or market behavior changes the interpretation.",
];

const STANCE = [
  {
    title: "AI is a force, not the whole story",
    body: "AI matters, but career pressure also comes from automation, GCC operating models, cost pressure, hiring filters, management expectations, and weak professional signal.",
  },
  {
    title: "Human judgment still needs evidence",
    body: "The goal is not to comfort professionals with vague human-value language. The goal is to identify where judgment is actually defensible and where proof must improve.",
  },
  {
    title: "Products follow frameworks",
    body: "Reports, audits, guides, and tools are outputs of the decision systems. They should not multiply faster than the evidence supports.",
  },
];

export default function OurThinkingPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 58%, #edf7f2 100%)",
          padding: "112px 24px 88px",
          borderBottom: "1px solid rgba(26,79,214,0.12)",
        }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6", display: "block", marginBottom: 26 }}>
            Our Thinking
          </span>
          <h1 style={{ fontSize: "clamp(40px, 5.4vw, 68px)", fontWeight: 900, color: "#0a1628", lineHeight: 1.08, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
            Frameworks should earn trust before they earn names.
          </h1>
          <p style={{ fontSize: "clamp(17px, 2.1vw, 21px)", color: "#4a5a7a", lineHeight: 1.75, maxWidth: 780, margin: 0 }}>
            Sriram Advisory builds decision systems for professionals facing AI-driven career uncertainty. The work starts with repeated observations, not branding exercises.
          </p>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
            Why SA-AIRS Was Created
          </span>
          <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0 20px", color: "#0a1628" }}>
            Job titles were too blunt for the questions professionals were asking.
          </h2>
          <div style={{ display: "grid", gap: 18 }}>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#4a5a7a", margin: 0 }}>
              Professionals were asking whether their roles were safe, but most public commentary answered with broad lists of jobs at risk. That missed the real issue: exposure sits inside tasks, context, judgment, market pressure, and professional proof.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#4a5a7a", margin: 0 }}>
              SA-AIRS was created to make that diagnosis more practical. It helps separate the parts of a role that are exposed from the parts that remain defensible, then turns the interpretation into better next decisions.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Framework Development
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              Observation to named framework.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 16 }}>
            {DEVELOPMENT_STEPS.map((step, index) => (
              <article key={step.title} style={{ border: "1px solid #dbe5f5", borderRadius: 8, padding: "24px 22px", background: "#ffffff" }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: "#1a4fd6", color: "#ffffff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, marginBottom: 18 }}>
                  {index + 1}
                </div>
                <h3 style={{ fontSize: 22, color: "#0a1628", margin: "0 0 10px" }}>{step.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: 0 }}>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#0a1628", color: "#ffffff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#93b4ff" }}>
            The Standard
          </span>
          <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0 28px", color: "#ffffff" }}>
            A high bar for public frameworks.
          </h2>
          <div style={{ display: "grid", gap: 12 }}>
            {REQUIRED_STANDARDS.map((standard) => (
              <div key={standard} style={{ border: "1px solid rgba(255,255,255,0.14)", borderRadius: 8, padding: "18px 20px", background: "rgba(255,255,255,0.06)", color: "#f8faff", fontSize: 16, lineHeight: 1.7, fontWeight: 750 }}>
                {standard}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0d9268" }}>
              AI And Human Judgment
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "16px 0", color: "#0a1628" }}>
              We do not treat AI risk as a one-variable story.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {STANCE.map((item) => (
              <article key={item.title} style={{ border: "1px solid #dbe5f5", borderRadius: 8, padding: "26px 24px", background: "#f8fbff" }}>
                <h3 style={{ fontSize: 22, color: "#0a1628", margin: "0 0 10px" }}>{item.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#52627e", margin: 0 }}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(30px, 4.2vw, 50px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#0a1628", margin: "0 0 18px" }}>
            Start with the flagship framework.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5a6a8a", margin: "0 0 32px" }}>
            SA-AIRS is the clearest starting point for professionals who want a structured read on role exposure and next moves.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link href="/frameworks/sa-airs" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "15px 28px", borderRadius: 8, background: "#1a4fd6", color: "#ffffff", textDecoration: "none", fontWeight: 900, border: "1px solid #3b6ef0" }}>
              Read SA-AIRS
            </Link>
            <Link href="/am-i-future-proof" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "15px 28px", borderRadius: 8, background: "#ffffff", color: "#1a4fd6", textDecoration: "none", fontWeight: 900, border: "1px solid rgba(26,79,214,0.22)" }}>
              Start the audit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
