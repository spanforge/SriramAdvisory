import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Java Developer AI Leverage Guide 2026 | Sriram Advisory",
  description:
    "SA-AIRS™ score: 7.5/10. The Java developer's AI leverage roadmap — Copilot, Spring AI, LangChain4j, salary reality, hiring signals, and a 60-day plan built for India's GCC and product market. ₹499.",
};

const PERSONAL_DELIVERY_NOTE =
  "After your payment, Sriram personally emails the guide to you. This is a manual send by design so the delivery stays transparent and human.";

const WHAT_INSIDE = [
  {
    icon: "📊",
    label: "SA-AIRS™ Score 7.5 — Decoded",
    desc: "What is actually at risk in Java, what is not, and where the salary premium is moving.",
  },
  {
    icon: "🧭",
    label: "The Java Career Transition Map",
    desc: "The shortest realistic path from Spring Boot implementation work to AI-era Java positioning.",
  },
  {
    icon: "🛡️",
    label: "Your Leverage Zones",
    desc: "The specific work AI cannot take from you: architecture, diagnosis, domain judgment, and technical leadership.",
  },
  {
    icon: "🤖",
    label: "The AI Tool Stack",
    desc: "Exactly what to learn first and what to ignore for now: Copilot, Spring AI, LangChain4j, and enterprise-ready Java AI patterns.",
  },
  {
    icon: "🗓️",
    label: "60-Day Upgrade Plan",
    desc: "A week-by-week plan built for working professionals, with portfolio milestones that actually matter in hiring.",
  },
  {
    icon: "💰",
    label: "Salary Reality 2026",
    desc: "What Java + AI skills are really worth in IT services, GCCs, and product teams — and where the premium starts.",
  },
];

const FOR_YOU = [
  "You are a Java or Spring Boot developer who feels your day is too dependent on repetitive implementation work",
  "You want to use AI to increase your leverage without abandoning the Java ecosystem",
  "You are targeting GCC or product roles where Java plus AI commands a meaningful salary premium",
  "You want a concrete 60-day roadmap, not generic advice to 'learn AI' or switch to Python immediately",
  "You have domain depth in BFSI, fintech, e-commerce, or enterprise systems and want to turn that into an advantage",
];

const NOT_FOR_YOU = [
  "You are already building production AI features with Spring AI or LangChain4j",
  "You want a beginner Java course or a full tutorial on Spring Boot fundamentals",
  "You are outside India and looking for a global Java market analysis",
];

const TRANSITION_PATHS = [
  {
    role: "AI-Augmented Java Developer",
    timeline: "Month 1–2",
    salary: "₹18–26 LPA",
    feasibility: "9.1 / 10",
    color: "#b45309",
    desc: "Use Copilot daily, redirect saved time into architecture, and prove the shift with a public repo.",
  },
  {
    role: "Java + Spring AI Developer",
    timeline: "Month 3–6",
    salary: "₹22–32 LPA",
    feasibility: "8.4 / 10",
    color: "#c2410c",
    desc: "Build domain-specific AI features in Spring Boot and show recruiters you can bridge classic Java with AI delivery.",
  },
  {
    role: "AI-Era Java Architect",
    timeline: "Month 6–12",
    salary: "₹28–42 LPA",
    feasibility: "7.4 / 10",
    color: "#ea580c",
    desc: "Own architecture, resilience, governance, and system design for AI-integrated Java applications.",
  },
  {
    role: "Java AI Platform Lead",
    timeline: "Month 12+",
    salary: "₹35–55 LPA",
    feasibility: "6.8 / 10",
    color: "#f97316",
    desc: "Lead teams and standards around AI governance, observability, architecture, and platform decisions.",
  },
];

const SALARY_BANDS = [
  {
    role: "Java Developer (Spring Boot only)",
    it: "₹8–16 LPA",
    gcc: "₹14–22 LPA",
    note: "Ceiling is approaching as junior implementation work gets compressed by AI tooling.",
    color: "#9aa8c0",
  },
  {
    role: "Java Developer (Copilot + AI tools)",
    it: "₹12–20 LPA",
    gcc: "₹18–26 LPA",
    note: "The first uplift comes from productivity plus stronger technical signaling.",
    color: "#b45309",
  },
  {
    role: "Java + Spring AI Developer",
    it: "₹16–24 LPA",
    gcc: "₹22–30 LPA",
    note: "Strong fit for engineers with 1–2 credible AI-integrated portfolio projects.",
    color: "#c2410c",
  },
  {
    role: "AI-Era Java Architect",
    it: "₹22–32 LPA",
    gcc: "₹26–38 LPA",
    note: "Architecture and system-design credibility matter more than just tool familiarity.",
    color: "#ea580c",
  },
  {
    role: "Java Technical Lead + AI",
    it: "₹28–38 LPA",
    gcc: "₹32–48 LPA",
    note: "Upper bands are real, but typically earned through execution, visibility, and company selection.",
    color: "#f97316",
  },
];

export default function JavaDeveloperAILeverageGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, #1c0d05 0%, #5b2410 55%, #b45309 100%)",
          paddingTop: 100,
          paddingBottom: 90,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 20px", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(239,68,68,0.18)",
                border: "1px solid rgba(239,68,68,0.4)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fecaca",
              }}
            >
              SA-AIRS™ Score: 7.5 / 10 — High Risk
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(251,191,36,0.18)",
                border: "1px solid rgba(251,191,36,0.38)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fde68a",
              }}
            >
              India 2026 Edition
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(34px, 5.5vw, 64px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              marginBottom: 22,
              letterSpacing: "-0.03em",
            }}
          >
            Java Developer
            <br />
            <span style={{ color: "#fdba74" }}>AI Leverage Guide 2026</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2.2vw, 20px)",
              color: "rgba(255,230,200,0.86)",
              lineHeight: 1.65,
              maxWidth: 660,
              margin: "0 auto 16px",
            }}
          >
            Java is not dying. But boilerplate-heavy Java careers are getting squeezed.
            This guide shows you how to move into the higher-value layer: AI leverage, architecture, and premium GCC positioning.
          </p>

          <p
            style={{
              fontSize: 15,
              color: "rgba(253,186,116,0.7)",
              fontStyle: "italic",
              marginBottom: 44,
            }}
          >
            Let AI write what AI can write. Keep your time for what it cannot.
          </p>

          <div
            className="hero-price-box"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>₹499</span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fdba74",
                marginBottom: 20,
                display: "block",
              }}
            >
              Personal Email Delivery
            </span>

            <CashfreeCheckout
              productName="Java Developer AI Leverage Guide 2026"
              amount={499}
              accentColor="#b45309"
              buttonLabel="Get the Guide Now — ₹499 →"
              buttonStyle={{
                fontSize: 17,
                fontWeight: 700,
                padding: "16px 36px",
                borderRadius: 10,
                background: "#b45309",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                width: "100%",
                minWidth: 280,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(255,220,190,0.6)", marginTop: 12 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "88px 20px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#dc2626",
                display: "block",
                marginBottom: 16,
              }}
            >
              SA-AIRS™ Exposure Score
            </span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 24 }}>
              <span style={{ fontSize: "clamp(64px, 10vw, 96px)", fontWeight: 900, color: "#dc2626", lineHeight: 1, letterSpacing: "-0.04em" }}>
                7.5
              </span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  High Risk
                </div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>
                  Comfortable today, vulnerable in 24 months
                </div>
              </div>
            </div>
            <div style={{ maxWidth: 480, margin: "0 auto", background: "#f0f4f8", borderRadius: 8, height: 12, overflow: "hidden" }}>
              <div style={{ width: "75%", height: "100%", background: "linear-gradient(90deg, #f59e0b, #dc2626)", borderRadius: 8 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 480, margin: "6px auto 0", fontSize: 11, color: "#9aa8c0" }}>
              <span>Low Risk</span>
              <span>High Exposure</span>
            </div>
          </div>

          <div
            className="qa-score-card-pad"
            style={{
              background: "linear-gradient(135deg, #1c0d05 0%, #5b2410 100%)",
              borderRadius: 20,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.06,
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                pointerEvents: "none",
              }}
            />
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#fdba74",
                marginBottom: 20,
                position: "relative",
              }}
            >
              What this score actually means
            </p>
            <h2
              style={{
                fontSize: "clamp(20px, 3.2vw, 38px)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                position: "relative",
                marginBottom: 0,
              }}
            >
              60–70% of repetitive Java implementation work
              <br />
              is{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #fdba74, #fde68a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI-automatable today.
              </span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,230,200,0.72)", marginTop: 20, lineHeight: 1.7, position: "relative" }}>
              The opportunity is not to switch stacks in panic.
              The opportunity is to use AI to become more valuable than the engineers still competing on implementation speed alone.
            </p>
          </div>

          <div className="stats-grid-3" style={{ background: "#e8eef8", borderRadius: 14, overflow: "hidden", marginTop: 28 }}>
            {[
              { stat: "3.4M+", label: "Java developers in India competing in an increasingly AI-shaped market" },
              { stat: "₹35 LPA+", label: "AI-era Java engineer path at strong GCC and product teams" },
              { stat: "60 Days", label: "enough to build the first credible Java + AI portfolio signal" },
            ].map((s) => (
              <div key={s.stat} style={{ background: "#fff7ed", padding: "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, color: "#0a1628", letterSpacing: "-0.03em" }}>{s.stat}</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 6, lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 16, color: "#5a6a8a", lineHeight: 1.8, textAlign: "center", marginTop: 32 }}>
            The winning move is not abandoning Java.
            <br />
            <strong style={{ color: "#0a1628" }}>
              It is using AI to multiply your Java experience while shifting your identity upward into design,
              diagnosis, and business-aware engineering.
            </strong>
          </p>
        </div>
      </section>

      <section style={{ background: "#fff7ed", padding: "72px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309", display: "block", marginBottom: 12 }}>
              Inside the Guide
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              Everything You Need to Make the Shift
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {WHAT_INSIDE.map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#ffffff",
                  border: "1px solid #fdba74",
                  borderRadius: 14,
                  padding: "24px 26px",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 8 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309", display: "block", marginBottom: 12 }}>
              Where You Can Go
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              The Java Transition Map
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 12 }}>
              The guide shows how to move up the value chain without abandoning your Java base.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {TRANSITION_PATHS.map((p) => (
              <div
                key={p.role}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: "#fff7ed",
                  border: "1px solid #fdba74",
                  borderRadius: 12,
                  padding: "20px 24px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: 220 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#0a1628" }}>{p.role}</div>
                  <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>{p.desc}</div>
                </div>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: p.color }}>{p.feasibility}</div>
                    <div style={{ fontSize: 11, color: "#9aa8c0", textTransform: "uppercase", letterSpacing: "0.06em" }}>Feasibility</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: p.color }}>{p.timeline}</div>
                    <div style={{ fontSize: 11, color: "#9aa8c0", textTransform: "uppercase", letterSpacing: "0.06em" }}>Timeline</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: p.color }}>{p.salary}</div>
                    <div style={{ fontSize: 11, color: "#9aa8c0", textTransform: "uppercase", letterSpacing: "0.06em" }}>GCC Salary</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309", display: "block", marginBottom: 12 }}>
              Salary Reality 2026
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              Where the Premium Actually Appears
            </h2>
            <p style={{ fontSize: 14, color: "#9aa8c0", marginTop: 10 }}>
              Source basis in the guide: Glassdoor India, AmbitionBox, Levels.fyi, and job-posting review notes.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {SALARY_BANDS.map((s) => (
              <div
                key={s.role}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: "#fffaf5",
                  border: "1px solid #fde0c2",
                  borderRadius: 12,
                  padding: "18px 24px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: 220 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#0a1628" }}>{s.role}</div>
                  <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>{s.note}</div>
                </div>
                <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#5a6a8a" }}>{s.it}</div>
                    <div style={{ fontSize: 11, color: "#9aa8c0", textTransform: "uppercase", letterSpacing: "0.06em" }}>IT Services</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: s.color }}>{s.gcc}</div>
                    <div style={{ fontSize: 11, color: "#9aa8c0", textTransform: "uppercase", letterSpacing: "0.06em" }}>GCC / Product</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", marginBottom: 22 }}>This guide is for you if…</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {FOR_YOU.map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#b45309", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 15, color: "#2d3f5e", lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", marginBottom: 22 }}>This guide is NOT for you if…</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {NOT_FOR_YOU.map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#dc2626", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✕</span>
                  <span style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, #1c0d05 0%, #5b2410 100%)",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            The Java moat still exists.
            <br />
            <span style={{ color: "#fdba74" }}>You just have to move up it.</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,230,200,0.75)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto 40px" }}>
            If you want the playbook for becoming more valuable, more visible, and harder to replace as a Java developer in 2026, this guide is built for that shift.
          </p>

          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>₹499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fdba74", marginBottom: 20 }}>
              Personal Email Delivery
            </span>
            <CashfreeCheckout
              productName="Java Developer AI Leverage Guide 2026"
              amount={499}
              accentColor="#b45309"
              buttonLabel="Get the Guide — ₹499 →"
              buttonStyle={{
                fontSize: 16,
                fontWeight: 700,
                padding: "16px 40px",
                borderRadius: 10,
                background: "#b45309",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                minWidth: 260,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(255,220,190,0.48)", marginTop: 14 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
