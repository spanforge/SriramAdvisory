import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sriram Advisory",
  description: "Privacy policy for Sriram Advisory. How we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "12 October 2026";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="sa-legacy">
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
          }}>Privacy Policy</h1>
          <p style={{ fontSize: 14, color: "#8898b8", fontFamily: "var(--font-dm-mono), monospace" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10" style={{ background: "#ffffff", paddingTop: 64, paddingBottom: 80 }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {[
            {
              heading: "1. Who We Are",
              body: `Sriram Advisory ("we", "our", "us") is a solo advisory practice operated by Sriram, based in India. We provide product and market advisory and retain existing career products. Our contact email is sriram@sriramadvisory.com.`,
            },
            {
              heading: "2. What Information We Collect",
              body: `We collect information you provide directly when you:
- Purchase or enquire about a product or service (name, professional role, industry, years of experience, concern, email address)
- Request a Product and Market Review (name, email, optional organisation, product stage, situation and any optional context you provide)
- Make a payment (name, email, mobile number - payment is processed by the provider shown at checkout and we do not store card details)
- Contact us via email or WhatsApp

We do not collect sensitive personal data (health, financial account details, biometric data).`,
            },
            {
              heading: "3. How We Use Your Information",
              body: `We use your information to:
- Assess your review enquiry, reply to you, and discuss scope, timing and fees
- Deliver the Product and Market Review, assessment or other service you requested
- Send your report or snapshot results
- Follow up on your enquiry or agreed engagement
- Improve our assessment methodology (using aggregated, anonymised data)

We do not sell, rent, or share your personal data with third parties for marketing purposes.`,
            },
            {
              heading: "4. Legal Basis for Processing",
              body: `Our legal bases for processing your personal data are:
- Contract performance - processing necessary to deliver the service you purchased or requested
- Legitimate interests - improving our services using anonymised aggregate data
- Consent - where you have explicitly opted in (e.g., requesting launch updates)`,
            },
            {
              heading: "5. Data Retention",
              body: `Enquiry information is used to assess your request and manage related correspondence. Retention depends on whether the enquiry leads to an engagement, whether correspondence is ongoing, and any applicable record-keeping obligations. Contact sriram@sriramadvisory.com to request deletion of your enquiry information; any information that must be retained for an applicable obligation is handled separately. Active client records follow the agreed engagement policy. Existing purchases remain subject to their applicable service and record-keeping requirements.`,
            },
            {
              heading: "6. Third-Party Services",
              body: `We use the following third-party services that may process your data:
- The payment provider shown at checkout - payment processing (governed by that provider's privacy policy)
- Formspree - contact-enquiry and existing free-resource form submission handling (governed by Formspree's privacy policy)
- Vercel - website hosting (governed by Vercel's privacy policy)

Each of these services operates under their own privacy policies and data processing agreements.`,
            },
            {
              heading: "7. Your Rights",
              body: `You have the right to:
- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your data (subject to legal retention requirements)
- Withdraw consent where consent is the legal basis for processing

To exercise any of these rights, email sriram@sriramadvisory.com with the subject line "Privacy Request".`,
            },
            {
              heading: "8. Data Security",
              body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. Review enquiries are submitted to Formspree over an encrypted connection. Formspree processes form submissions under its own privacy and security practices.`,
            },
            {
              heading: "9. Cookies",
              body: `Optional usage analytics is currently disabled. We do not use advertising cookies or third-party tracking cookies.`,
            },
            {
              heading: "10. Changes to This Policy",
              body: `We may update this policy from time to time. Material changes will be reflected in the "Last updated" date at the top of this page.`,
            },
            {
              heading: "11. Contact",
              body: `For any privacy-related questions, email sriram@sriramadvisory.com.`,
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
      </main>
      <Footer />
    </>
  );
}




