import type { Metadata } from "next";
import { Suspense } from "react";
import { PageShell, Hero, Section } from "@/components/AdvisoryUI";
import EnquiryForm from "@/components/EnquiryForm";
import { siteConfig } from "@/lib/advisoryContent";

export const metadata: Metadata = { title: "Contact Sriram Advisory", description: "Discuss an IT services delivery, operating, capability or individual career decision with Sriram Advisory.", alternates: { canonical: "/contact" } };

export default function Contact() {
  return <PageShell>
    <Hero eyebrow="Start a conversation" title="Tell us which IT services decision you are working through" body="Choose Business Performance Advisory or Career Intelligence, then share a brief description of the decision. Please do not include passwords, financial account details or confidential client information." primary={{ label: "Go to enquiry form", href: "#enquiry" }} />
    <Section id="enquiry" title="Choose the relevant practice" intro="Business enquiries cover delivery, operations and team capability. Career enquiries are for individual professionals."><Suspense fallback={<p>Loading enquiry form…</p>}><EnquiryForm /></Suspense></Section>
    <Section muted eyebrow="After you submit" title="What happens next">
      <ol className="sa-process"><li><strong>Sriram reviews the enquiry</strong><span>The first review considers the challenge, intended outcome and whether the advisory is an appropriate fit.</span></li><li><strong>You receive a direct response</strong><span>The reply may ask for a short clarification or suggest an initial discussion. No confidential documents are needed at this stage.</span></li><li><strong>Scope comes before commitment</strong><span>For advisory work, the scope, outputs, schedule and fee are agreed in writing before work begins.</span></li></ol>
    </Section>
    <Section title="Prefer to contact Sriram directly?"><div className="sa-contact-options"><div><h3>Email</h3><p>Useful when you want to explain the context in your own words.</p><a className="sa-arrow" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div><div><h3>WhatsApp</h3><p>Useful for a short initial query. Please do not share confidential material.</p><a className="sa-arrow" href={siteConfig.whatsapp} target="_blank" rel="noreferrer">Open WhatsApp</a></div></div></Section>
  </PageShell>;
}
