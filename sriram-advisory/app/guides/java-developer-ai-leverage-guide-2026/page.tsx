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
    desc: "What this score really means for Java in India: not the highest-risk role, but the most deceptively comfortable one as AI automates repetitive implementation work.",
  },
  {
    icon: "🧭",
    label: "The Java Career Transition Map",
    desc: "A stage-by-stage path from traditional Java developer to AI-augmented engineer, Spring AI builder, AI-era architect, and Java AI platform lead — with salary bands and timelines.",
  },
  {
    icon: "🛡️",
    label: "Your Leverage Zones",
    desc: "The five high-value areas AI cannot own for you: system design, production diagnosis, business-logic interpretation, AI-output evaluation, and stakeholder translation.",
  },
  {
    icon: "🤖",
    label: "The AI Tool Stack",
    desc: "Exactly what to learn first: GitHub Copilot, ChatGPT or Claude, Spring AI, LangChain4j, observability, vector databases, and AI-aware security patterns for enterprise Java.",
  },
  {
    icon: "🗓️",
    label: "60-Day Upgrade Plan",
    desc: "A concrete week-by-week transition plan with evening study focus, weekend deliverables, portfolio expectations, and the minimum viable path if you want momentum first.",
  },
  {
    icon: "💰",
    label: "Salary Reality 2026",
    desc: "How compensation changes across IT services, GCCs, and product teams once you move from Spring Boot-only execution into AI-integrated Java delivery and architecture.",
  },
  {
    icon: "🏗️",
    label: "AI-Integrated Java Architecture",
    desc: "A reference stack covering Spring AI, LangChain4j, testing, observability, governance, resilience, and how to explain these design decisions in senior interviews.",
  },
  {
    icon: "🎯",
    label: "Hiring Manager Filters",
    desc: "What recruiters and GCC interviewers actually inspect first: your GitHub, README, LinkedIn headline, outcomes, and whether your portfolio proves AI-era Java thinking.",
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

const LEVERAGE_ZONES = [
  {
    title: "System Architecture and Design Decisions",
    desc: "AI can generate code, but it cannot decide the right architecture for your constraints, teams, regulators, timelines, and trade-offs. That judgment is still the premium skill.",
  },
  {
    title: "Performance Diagnosis and Optimisation",
    desc: "When a Spring Boot system slows down in production, the engineer who can correlate logs, query plans, business context, and release changes is still rare — and more valuable than ever.",
  },
  {
    title: "Domain Logic Interpretation",
    desc: "Enterprise Java lives inside real business rules. A Java engineer who understands lending, compliance, payments, or operations is harder to replace than one who only understands syntax.",
  },
  {
    title: "AI Output Quality Evaluation",
    desc: "As AI writes more code, someone must judge whether the output is secure, maintainable, compliant, and correct. Review quality becomes a differentiator, not a side task.",
  },
  {
    title: "Stakeholder Translation and Leadership",
    desc: "Explaining trade-offs, pushing back on unsafe requirements, and aligning teams around architecture is still deeply human work. AI does not own trust, politics, or consensus.",
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

const PHASES = [
  {
    phase: "Phase 1 · Days 1–30",
    title: "From Parts Thinker to AI Director",
    color: "#b45309",
    bg: "#fff7ed",
    border: "#fdba74",
    deliverable:
      "A public GitHub repo with three Copilot-assisted Spring Boot projects. The README explains what Copilot generated, what you changed, and what architectural judgment you applied.",
    items: [
      "Week 1: Install Copilot and rebuild one repeated Spring Boot endpoint using AI for boilerplate",
      "Week 2: Learn Spring AI basics and ship a domain-specific Spring AI mini-project",
      "Week 3: Add retrieval or RAG to the project and document your design choices in the README",
      "Week 4: Add CI, read GCC role descriptions, and publish one thoughtful LinkedIn post about the build",
    ],
  },
  {
    phase: "Phase 2 · Days 31–60",
    title: "Architecture and Interview Readiness",
    color: "#ea580c",
    bg: "#fff4e6",
    border: "#fdba74",
    deliverable:
      "Three public projects plus a 4–6 page AI-integrated Java system design document covering architecture, security, testing, observability, and the business problem.",
    items: [
      "Week 5: Learn LangChain4j and build a second Java AI project to show range",
      "Week 6: Add AI-aware security and document the threat model",
      "Week 7: Build one industry-specific project using your domain depth",
      "Week 8: Complete the system design document and refresh LinkedIn around outcomes, not tasks",
    ],
  },
];

const HIRING_SIGNALS = [
  {
    item: "GitHub profile",
    time: "15–30 sec",
    desc: "Hiring managers first check whether your repos look like business-aware engineering work or tutorial leftovers.",
  },
  {
    item: "Best README",
    time: "60–90 sec",
    desc: "A README that starts with the business problem and your reasoning does more work than another certification line.",
  },
  {
    item: "LinkedIn headline",
    time: "10 sec",
    desc: "Your headline needs an AI-era Java signal, not just your title and years of experience.",
  },
  {
    item: "About and experience sections",
    time: "30–90 sec",
    desc: "Outcome-based writing and project specificity determine whether you get screened in before the interview starts.",
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
            Java is not the most exposed role in Indian IT. It is the most deceptively comfortable one.
            This guide shows you how to stop competing on boilerplate and start winning on architecture,
            AI integration, and domain leverage across GCC and product teams.
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
              The risk is not that Java disappears. The risk is that boilerplate-heavy Java work gets compressed,
              while the premium shifts to architecture, production judgment, domain depth, and AI-system ownership.
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

      <section style={{ padding: "72px 20px", background: "#fffaf5" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309", display: "block", marginBottom: 12 }}>
              Your Leverage
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              The Five Zones AI Cannot Own for You
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 12 }}>
              The guide reframes Java value around the work that becomes more important as AI takes the repetitive layer.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {LEVERAGE_ZONES.map((zone) => (
              <div
                key={zone.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid #fde0c2",
                  borderRadius: 14,
                  padding: "22px 24px",
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 800, color: "#0a1628", marginBottom: 10 }}>{zone.title}</div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.65 }}>{zone.desc}</div>
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

      <section style={{ padding: "72px 20px", background: "#fff7ed" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309", display: "block", marginBottom: 12 }}>
              The Plan
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              60 Days. Two Phases. Public Proof.
            </h2>
            <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 12, maxWidth: 580, margin: "12px auto 0" }}>
              The guide is built around public proof of work, not passive upskilling. The portfolio is the credential.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {PHASES.map((phase) => (
              <div
                key={phase.phase}
                style={{
                  background: phase.bg,
                  border: `1.5px solid ${phase.border}`,
                  borderRadius: 16,
                  padding: "28px 28px",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: phase.color,
                    display: "block",
                    marginBottom: 10,
                  }}
                >
                  {phase.phase}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", marginBottom: 16 }}>{phase.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {phase.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: phase.color, fontWeight: 700, flexShrink: 0 }}>→</span>
                      <span style={{ fontSize: 14, color: "#2d3f5e", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    background: "rgba(255,255,255,0.65)",
                    border: `1px solid ${phase.border}`,
                    borderRadius: 10,
                    padding: "14px 16px",
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 700, color: phase.color, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Phase Deliverable
                  </span>
                  <p style={{ fontSize: 13, color: "#2d3f5e", lineHeight: 1.6, marginTop: 8, marginBottom: 0 }}>{phase.deliverable}</p>
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

      <section style={{ padding: "72px 20px", background: "#fffaf5" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            className="case-study-card-pad"
            style={{
              background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
              border: "1.5px solid #fdba74",
              borderRadius: 20,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#b45309",
                display: "block",
                marginBottom: 16,
              }}
            >
              Hiring Reality — Included in the Guide
            </span>
            <h3 style={{ fontSize: "clamp(20px, 2.8vw, 30px)", fontWeight: 800, color: "#0a1628", marginBottom: 16, letterSpacing: "-0.02em" }}>
              What hiring managers check before the interview even starts
            </h3>
            <p style={{ fontSize: 16, color: "#422006", lineHeight: 1.75, marginBottom: 24 }}>
              The guide breaks down the exact screening sequence across GitHub, your README, LinkedIn headline,
              About section, and outcome-driven experience bullets — because most Java developers overprepare for
              interviews and underprepare for the filters that decide whether the interview happens.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {HIRING_SIGNALS.map((signal) => (
                <div
                  key={signal.item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 18,
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid #fde0c2",
                    borderRadius: 10,
                    padding: "14px 16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 220 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#0a1628" }}>{signal.item}</div>
                    <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4, lineHeight: 1.55 }}>{signal.desc}</div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#b45309" }}>{signal.time}</div>
                </div>
              ))}
            </div>
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
            The premium is no longer for the engineer who types the most code. It is for the one who uses AI,
            understands systems, and can explain why the design should exist in the first place.
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
