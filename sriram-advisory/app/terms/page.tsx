import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Sriram Advisory",
  description: "Terms of service for Sriram Advisory assessments and strategic advisory engagements.",
};

const LAST_UPDATED = "14 May 2026";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <section className="px-5 md:px-10" style={{ paddingTop: 120, paddingBottom: 80, background: "#0a1628" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#4fc3f7", marginBottom: 20,
          }}>Legal</div>
          <h1 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1,
            letterSpacing: "0.02em", color: "#f8faff", margin: "0 0 20px",
          }}>Terms of Service</h1>
          <p style={{ fontSize: 13, color: "#8898b8", fontFamily: "var(--font-dm-mono), monospace" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10" style={{ background: "#ffffff", paddingTop: 64, paddingBottom: 80 }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {[
            {
              heading: "1. Acceptance of Terms",
              body: `By accessing this website or purchasing any service from Sriram Advisory, you agree to these Terms of Service. If you do not agree, do not use this website or purchase any service.`,
            },
            {
              heading: "2. Services Offered",
              body: `Sriram Advisory offers the following products and services:
• AI Survival Guide (₹299) — a structured India-specific AI risk guide with a self-scoring framework and 30-day action plan
• AI Career Risk Score (₹999) — a personalised 1-page SA-AIRS™ assessment of your specific role, scored by Sriram and delivered within 24 hours
• Pro Edition (₹1,999) — a comprehensive intelligence report including full SA-AIRS™ methodology, industry deep dives, salary outlook, and two quarterly updates
• Clarity Call (₹3,999 – ₹7,499) — a 30-minute 1:1 strategy session with Sriram, including a full SA-AIRS™ audit and session notes
• Domain Deep Dive Program (₹9,999 – ₹24,999+) — a custom 90-day transition program from your current role to its AI-era equivalent`,
            },
            {
              heading: "3. Nature of the Service",
              body: `SA-AIRS™ assessments are structured analytical opinions based on the information you provide and Sriram Advisory's proprietary methodology. They are not financial advice, legal advice, or a guarantee of any employment outcome.

The accuracy of the assessment depends on the accuracy and completeness of the information you provide. Providing false or incomplete information will affect the quality of your results.`,
            },
            {
              heading: "4. Delivery",
              body: `• AI Survival Guide: Digital delivery within 24 hours of confirmed payment
• AI Career Risk Score: Delivered by email within 24 hours of confirmed payment (Indian business days)
• Pro Edition: Delivered by email within 48 hours of confirmed payment
• Clarity Call: Session scheduled within 5 business days of payment; session notes delivered within 24 hours after the call
• Domain Deep Dive Program: Onboarding plan delivered within 48 hours; weekly check-ins conducted as agreed

Delivery timelines may be extended during high-volume periods. You will be notified if this applies to your order.`,
            },
            {
              heading: "5. Payment",
              body: `All paid products and services are processed via Razorpay. Sriram Advisory does not store payment card details. All prices are in Indian Rupees (INR) and inclusive of applicable taxes where required.`,
            },
            {
              heading: "6. Intellectual Property",
              body: `The SA-AIRS™ methodology, scoring rubrics, dimension weights, and all content on this website are the intellectual property of Sriram Advisory. You may not reproduce, redistribute, or create derivative works from any assessment output without explicit written permission.

You may share your own personal assessment results for your personal career purposes.`,
            },
            {
              heading: "7. Limitation of Liability",
              body: `Sriram Advisory's liability in connection with any service is limited to the amount paid for that specific service. We are not liable for indirect, consequential, or incidental damages arising from use of our services or reliance on assessment results.

Career decisions are yours to make. The assessment is a tool — not a directive.`,
            },
            {
              heading: "8. Governing Law",
              body: `These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.`,
            },
            {
              heading: "9. Changes to Terms",
              body: `We may update these terms at any time. The current version is always published at sriramadvisory.com/terms. Continued use of the service after a material change constitutes acceptance of the updated terms.`,
            },
            {
              heading: "10. Contact",
              body: `For any questions about these terms, email sriram@sriramadvisory.com.`,
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
