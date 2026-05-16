import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Sriram Advisory",
  description: "Refund policy for Sriram Advisory Full Report and Deep Dive engagements.",
};

const LAST_UPDATED = "14 May 2026";

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <section className="px-5 md:px-10" style={{ paddingTop: 120, paddingBottom: 80, background: "#0a1628" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#4fc3f7", marginBottom: 20,
          }}>Legal</div>
          <h1 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1,
            letterSpacing: "0.02em", color: "#f8faff", margin: "0 0 20px",
          }}>Refund Policy</h1>
          <p style={{ fontSize: 14, color: "#8898b8", fontFamily: "var(--font-dm-mono), monospace" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10" style={{ background: "#ffffff", paddingTop: 64, paddingBottom: 80 }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>

          {/* Summary box */}
          <div style={{
            padding: "24px 28px", marginBottom: 48,
            background: "rgba(26,79,214,0.05)",
            border: "1px solid rgba(26,79,214,0.15)",
            borderRadius: 12,
          }}>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 13, color: "#1a4fd6", letterSpacing: "0.1em", marginBottom: 10,
            }}>THE SHORT VERSION</div>
            <p style={{ fontSize: 15, color: "#0a1628", lineHeight: 1.75, margin: 0 }}>
              If your Full Report or Deep Dive is delivered and you genuinely feel it did not meet the standard described, email us within 7 days.
              We will either re-do the assessment or issue a full refund — no questions asked.
              We have issued ₹0 in refunds to date because we stand behind the work.
            </p>
          </div>

          {[
            {
              heading: "1. AI Survival Guide (₹299)",
              body: `Because the guide is a digital product delivered immediately upon payment, refunds are not available once the guide has been delivered. If you did not receive the guide within 24 hours of payment, email sriram@sriramadvisory.com and we will resend it.`,
            },
            {
              heading: "2. AI Career Risk Score (₹999)",
              body: `If your AI Career Risk Score was delivered within the promised timeframe and contains a complete SA-AIRS™ score, dimension breakdown, and Top 3 Moves, the report is considered delivered in full.

If you believe the report was not delivered, was materially incomplete, or did not reflect the information you provided, email sriram@sriramadvisory.com within 7 days of delivery. We will either re-do the assessment at no charge or issue a full refund.

Refund requests submitted more than 7 days after delivery will not be processed.`,
            },
            {
              heading: "3. Pro Edition (₹1,999)",
              body: `If your Pro Edition report was delivered and is complete, it is considered delivered in full. If you believe the report was materially incomplete or did not reflect your submission, email us within 7 days of delivery for a re-do or full refund.`,
            },
            {
              heading: "4. Clarity Call (₹3,999 – ₹7,499)",
              body: `If the call does not occur within 5 business days of your confirmed availability and this is our fault, you are entitled to a full refund. If you cancel after scheduling but before the call, a partial refund may be issued at our discretion. Session notes are delivered within 24 hours of the call and are considered part of the deliverable.`,
            },
            {
              heading: "5. Domain Deep Dive Program (₹9,999 – ₹24,999+)",
              body: `If the onboarding plan is not delivered within 48 hours of confirmed payment and this is our fault, you are entitled to a full refund. Once the program is underway, partial refunds may be issued on a pro-rata basis at our discretion, based on what has been delivered.`,
            },
            {
              heading: "6. How to Request a Refund",
              body: `Email sriram@sriramadvisory.com with:
• Subject line: "Refund Request — [your name]"
• Brief description of the issue
• Your order confirmation or payment reference

We will respond within 2 business days. Approved refunds are processed back to the original payment method within 5–7 business days via Razorpay.`,
            },
            {
              heading: "7. Our Commitment",
              body: `We do not hide behind fine print. If the work was not what was described, we fix it or refund it. This is not marketing — it is how we operate.`,
            },
          ].map((section) => (
            <div key={section.heading} style={{ marginBottom: 40 }}>
              <h2 style={{
                fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                fontSize: 22, letterSpacing: "0.04em", color: "#0a1628",
                margin: "0 0 12px",
              }}>{section.heading}</h2>
              <p style={{
                fontSize: 15, color: "#3a4a6a", lineHeight: 1.8,
                margin: 0, whiteSpace: "pre-line",
              }}>{section.body}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
