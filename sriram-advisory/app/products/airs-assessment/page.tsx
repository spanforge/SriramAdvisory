"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashfreeCheckout from "@/components/CashfreeCheckout";

const WHAT_YOU_GET = [
  "A concise interpretation of your current role context",
  "A clear read on exposure, market pressure, and confidence level",
  "Short-term and medium-term watch areas",
  "Practical next moves for learning, positioning, and career narrative",
  "Email delivery after your intake is reviewed",
];

const PROCESS = [
  { step: "01", title: "Order the assessment", body: "Complete secure payment and receive the intake instructions." },
  { step: "02", title: "Share your context", body: "Provide role, industry, experience, current responsibilities, and the questions you want answered." },
  { step: "03", title: "Receive the report", body: "Get a structured career intelligence note with interpretation and next-step direction." },
];

export default function AIRSPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #2d1a50 60%, #4a1fa8 100%)", paddingTop: 104, paddingBottom: 84, textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <span style={{ display: "inline-flex", color: "#c4b5fd", fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24 }}>
            SA-AIRS Career Risk Audit
          </span>
          <h1 style={{ fontSize: "clamp(38px, 5.4vw, 62px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.08, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
            Get an independent read on your role.
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#ddd6fe", lineHeight: 1.75, maxWidth: 640, margin: "0 auto 34px" }}>
            A structured assessment for professionals who want to understand how their role is changing and what to do next.
          </p>
          <a href="#order-form" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#7c3aed", color: "#ffffff", fontWeight: 800, fontSize: 16, padding: "15px 30px", borderRadius: 8, textDecoration: "none", border: "1px solid #a78bfa" }}>
            Order Assessment - Rs 1,999
          </a>
          <p style={{ marginTop: 18, fontSize: 13, color: "rgba(221,214,254,0.82)" }}>
            Secure payment. Structured intake. Email delivery.
          </p>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)", gap: 34 }} className="home-two-col">
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#7c3aed" }}>
              What You Receive
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.12, color: "#0a1628", margin: "16px 0" }}>
              A practical interpretation, not a black-box prediction.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              The assessment is designed to help you think more clearly about work change, role durability, and positioning choices.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {WHAT_YOU_GET.map((item) => (
              <div key={item} style={{ background: "#f8fbff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "16px 18px", color: "#304159", fontSize: 15, fontWeight: 800 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0a1628", margin: "0 0 28px", textAlign: "center" }}>
            How it works
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {PROCESS.map((item) => (
              <article key={item.step} style={{ background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "22px 20px" }}>
                <div style={{ color: "#7c3aed", fontSize: 14, fontWeight: 900, marginBottom: 10 }}>{item.step}</div>
                <h3 style={{ fontSize: 20, color: "#0a1628", margin: "0 0 8px" }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: "#52627e", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="order-form" style={{ padding: "88px 24px", background: "#ffffff", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0a1628", margin: "0 0 16px" }}>
            Order the assessment
          </h2>
          <p style={{ fontSize: 16, color: "#5a6a8a", lineHeight: 1.8, margin: "0 0 30px" }}>
            After payment, you will receive intake instructions at the email address you provide.
          </p>
          <CashfreeCheckout
            productName="SA-AIRS Career Risk Audit"
            amount={1999}
            accentColor="#7c3aed"
            deliveryNote="Intake instructions and delivery details will be sent to your email."
            emailNote="Use the email where you want to receive the assessment instructions."
            buttonLabel="Pay Rs 1,999"
            buttonStyle={{ background: "#7c3aed", color: "#ffffff", fontWeight: 800, fontSize: 16, padding: "15px 30px", borderRadius: 8, border: "1px solid #a78bfa" }}
          />
          <div style={{ marginTop: 26 }}>
            <Link href="/assessments" style={{ color: "#7c3aed", textDecoration: "none", fontWeight: 800 }}>
              {"<-"} See all assessments
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
