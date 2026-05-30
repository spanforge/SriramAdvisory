import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Analyst Survival Guide 2026 | Sriram Advisory",
  description:
    "SA-AIRS™ score: 7.1/10. The Business Analyst's India-first AI survival guide — 60-day upgrade plan, AI tool stack, GCC interview prep, and the path to ₹42+ LPA. India 2026. ₹499.",
};

const PERSONAL_DELIVERY_NOTE =
  "After your payment, Sriram personally emails the guide to you. This is a manual send by design so the delivery stays transparent and human.";

const WHAT_INSIDE = [
  {
    icon: "📊",
    label: "SA-AIRS™ Score 7.1 — Decoded",
    desc: "A clear breakdown of what your risk score means, where your current role is exposed, and what kind of BA work still compounds in the AI era.",
  },
  {
    icon: "🧭",
    label: "A New Positioning Lens",
    desc: "A practical way to stop presenting yourself like a documentation resource and start sounding like a higher-leverage analyst with business-side value.",
  },
  {
    icon: "🤖",
    label: "AI-Era Workflow Guidance",
    desc: "Which parts of your work should be accelerated with AI, which parts should stay human-led, and how to think about the workflow shift without damaging your credibility.",
  },
  {
    icon: "🗓️",
    label: "60-Day Upgrade Plan",
    desc: "A structured transition plan that helps you build visible proof over the next 60 days instead of vaguely 'learning AI' and hoping the market notices.",
  },
  {
    icon: "🧾",
    label: "Templates and Examples",
    desc: "Reusable frameworks, examples, and positioning aids designed to help you communicate at a higher level in interviews, applications, and internal conversations.",
  },
  {
    icon: "🏦",
    label: "Market Direction",
    desc: "A clearer view of which kinds of roles, teams, and environments are moving toward higher-value BA work in India — and which ones are narrowing.",
  },
  {
    icon: "🎯",
    label: "Interview and Positioning Support",
    desc: "Guidance to help you show stronger ownership, sharper thinking, and better market awareness when you apply for higher-leverage roles.",
  },
  {
    icon: "💰",
    label: "Salary Reality 2026",
    desc: "A grounded salary view of what changes when you move from commodity BA work into stronger product, GCC, and AI-era analyst positioning.",
  },
];

const FOR_YOU = [
  "You are a Business Analyst or Senior BA in Indian IT services and your role is becoming documentation-heavy",
  "You can feel AI eating the low-leverage parts of your job but you are not yet clear on what to build next",
  "You want to reposition into GCC or product-side analyst work without pretending to be a PM overnight",
  "You need a 60-day plan that turns AI usage into visible proof, not vague upskilling",
  "You already have domain depth in BFSI, telecom, healthcare, or enterprise workflows and want to turn that into a moat",
];

const NOT_FOR_YOU = [
  "You want a certification or technical training course on business analysis tooling",
  "You are already operating like a product analyst with outcome ownership, portfolio evidence, and AI feature design experience",
  "You are outside India and want a global BA market analysis",
];

const EVOLUTION_STAGES = [
  {
    stage: "Stage 1",
    role: "Commodity BA Work",
    skill: "Documentation-heavy output with low strategic visibility",
    gccSalary: "",
    servicesSalary: "",
    deliverable: "You are valued for what you produce, not what you frame",
    color: "#64748b",
  },
  {
    stage: "Stage 2",
    role: "AI-Augmented BA",
    skill: "Faster execution plus visible signs of stronger thinking",
    gccSalary: "",
    servicesSalary: "",
    deliverable: "You stop spending most of your energy on repeatable work",
    color: "#2563eb",
  },
  {
    stage: "Stage 3",
    role: "Higher-Leverage Analyst",
    skill: "Problem framing, feature thinking, and stronger outcome ownership",
    gccSalary: "",
    servicesSalary: "",
    deliverable: "You are positioned closer to product and business outcomes",
    color: "#0d9268",
  },
];

export default function BusinessAnalystSurvivalGuidePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background:
            "linear-gradient(135deg, #08131f 0%, #0f2740 50%, #155e75 100%)",
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
            opacity: 0.04,
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 840,
            margin: "0 auto",
            padding: "0 20px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginBottom: 28,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(220,38,38,0.2)",
                border: "1px solid rgba(220,38,38,0.45)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fca5a5",
              }}
            >
              SA-AIRS™ Score: 7.1 / 10 — Active Risk
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(20,184,166,0.18)",
                border: "1px solid rgba(20,184,166,0.45)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#99f6e4",
              }}
            >
              India 2026 Edition
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 5.5vw, 66px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              marginBottom: 22,
              letterSpacing: "-0.03em",
            }}
          >
            Business Analyst
            <br />
            <span style={{ color: "#99f6e4" }}>Survival Guide 2026</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 2.2vw, 21px)",
              color: "rgba(190,235,240,0.88)",
              lineHeight: 1.65,
              maxWidth: 700,
              margin: "0 auto 16px",
            }}
          >
            The BA role is not disappearing overnight. But the lowest-leverage part
            of it already is. This guide shows you how to move from documentation
            work into AI-era product analysis, business problem framing, and GCC-ready
            outcome ownership.
          </p>

          <p
            style={{
              fontSize: 15,
              color: "rgba(153,246,228,0.68)",
              fontStyle: "italic",
              marginBottom: 44,
            }}
          >
            The moat is not more documentation. It is customer proximity plus judgment.
          </p>

          <div
            className="hero-price-box"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                }}
              >
                ₹499
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#99f6e4",
                marginBottom: 20,
              }}
            >
              Personal Email Delivery
            </span>

            <CashfreeCheckout
              productName="Business Analyst Survival Guide 2026"
              amount={499}
              accentColor="#0f766e"
              buttonLabel="Get the Guide Now — ₹499 →"
              buttonStyle={{
                fontSize: 17,
                fontWeight: 700,
                padding: "16px 36px",
                borderRadius: 10,
                background: "#0f766e",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                width: "100%",
                minWidth: 280,
              }}
            />
            <p
              style={{
                fontSize: 13,
                color: "rgba(190,235,240,0.55)",
                marginTop: 12,
              }}
            >
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  fontSize: "clamp(64px, 10vw, 96px)",
                  fontWeight: 900,
                  color: "#dc2626",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                7.1
              </span>
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#dc2626",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Active Risk
                </div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 4 }}>
                  High exposure in documentation-heavy BA work
                </div>
              </div>
            </div>
            <div
              style={{
                maxWidth: 480,
                margin: "0 auto",
                background: "#f0f4f8",
                borderRadius: 8,
                height: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "71%",
                  height: "100%",
                  background: "linear-gradient(90deg, #fbbf24, #dc2626)",
                  borderRadius: 8,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: 480,
                margin: "6px auto 0",
                fontSize: 11,
                color: "#9aa8c0",
              }}
            >
              <span>Low Risk</span>
              <span>High Exposure</span>
            </div>
          </div>

          <div
            className="qa-score-card-pad"
            style={{
              background: "linear-gradient(135deg, #08131f 0%, #0f2740 100%)",
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
                color: "#99f6e4",
                marginBottom: 20,
                position: "relative",
              }}
            >
              What this score actually means
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 40px)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                position: "relative",
                marginBottom: 0,
              }}
            >
              70–80% of BA documentation work
              <br />
              is{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #2dd4bf, #99f6e4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI-automatable today.
              </span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(190,235,240,0.72)",
                marginTop: 20,
                lineHeight: 1.7,
                position: "relative",
              }}
            >
              The threat is not domain knowledge by itself. The threat is becoming a
              translation layer that only turns meetings into documents. This guide is
              about escaping that layer before it becomes the ceiling.
            </p>
          </div>

          <div
            className="stats-grid-3"
            style={{ background: "#e8eef8", borderRadius: 14, overflow: "hidden", marginTop: 28 }}
          >
            {[
              { stat: "800,000+", label: "IT services BAs in India, directionally estimated" },
              { stat: "60 Days", label: "to build visible AI-era BA proof" },
              { stat: "₹42+ LPA", label: "upper band for GCC or product-side next-stage roles" },
            ].map((s) => (
              <div key={s.stat} style={{ background: "#f4fbfb", padding: "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, color: "#0a1628", letterSpacing: "-0.03em" }}>{s.stat}</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 6, lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#f0fdfa", padding: "72px 20px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0f766e", display: "block", marginBottom: 12 }}>
              Inside the Guide
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What You Actually Get
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {WHAT_INSIDE.map((item) => (
              <div key={item.label} style={{ background: "#ffffff", border: "1px solid #99f6e4", borderRadius: 14, padding: "24px 26px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 8 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563eb", display: "block", marginBottom: 12 }}>
              The Shift
            </span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0a1628", letterSpacing: "-0.02em" }}>
              What Buyers Are Really Paying For
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {EVOLUTION_STAGES.map((item) => (
              <div key={item.role} style={{ background: "#ffffff", border: "1px solid #d9e2ec", borderRadius: 16, padding: "22px 22px" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: item.color, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                  {item.stage}
                </div>
                <div style={{ fontSize: 19, fontWeight: 800, color: "#0a1628", marginBottom: 10 }}>{item.role}</div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.65, marginBottom: 14 }}>{item.skill}</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", marginTop: 10, lineHeight: 1.55 }}>{item.deliverable}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-cols-1 md:grid-cols-2">
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0f766e", display: "block", marginBottom: 24 }}>
                This Is For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {FOR_YOU.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#0f766e", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                    <span style={{ fontSize: 15, color: "#4a5a7a", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#dc2626", display: "block", marginBottom: 24 }}>
                Not For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {NOT_FOR_YOU.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#dc2626", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✕</span>
                    <span style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        style={{
          padding: "120px 24px",
          background: "linear-gradient(160deg, #07111d 0%, #0b1d31 60%, #0f3a4f 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 400,
            background: "radial-gradient(ellipse, rgba(45,212,191,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#f8faff", marginBottom: 16, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Move before the role narrows further.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(240,250,255,0.76)", lineHeight: 1.7, marginBottom: 48 }}>
            Use AI to eliminate commodity BA work. Use the freed time to build proof of
            problem framing, feature thinking, and outcome ownership.
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>₹499</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#99f6e4", marginBottom: 20 }}>
              Personal Email Delivery
            </span>
            <CashfreeCheckout
              productName="Business Analyst Survival Guide 2026"
              amount={499}
              accentColor="#0f766e"
              buttonLabel="Get the Guide — ₹499 →"
              buttonStyle={{
                fontSize: 16,
                fontWeight: 700,
                padding: "16px 40px",
                borderRadius: 10,
                background: "#0f766e",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                minWidth: 260,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(190,235,240,0.5)", marginTop: 14 }}>
              Secure payment via Cashfree · {PERSONAL_DELIVERY_NOTE}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
