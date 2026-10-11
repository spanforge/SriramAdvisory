import type { Metadata } from "next";
import { PageShell, Section } from "@/components/AdvisoryUI";
import { FounderHero, Button } from "@/components/EditorialUI";
import { copy } from "@/lib/positioning";
import FormspreeEnquiryForm from "@/components/FormspreeEnquiryForm";
export const metadata: Metadata = { title: "Discuss Your Challenge | Sriram Advisory", description: copy.contact.summary, alternates: { canonical: "/contact" } };
export default async function Contact({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const { interest } = await searchParams;
  return <PageShell><FounderHero title={copy.contact.title} summary={copy.contact.summary}><Button href="#enquiry-form">Send an enquiry</Button></FounderHero>
    <Section id="enquiry-form" title="Start with a short description" intro={copy.contact.warning}><FormspreeEnquiryForm initialInterest={interest} /></Section>
    <Section title="What happens next" intro="I review your message and reply personally by email. If the question fits my experience, we agree a first discussion to clarify the situation and a useful next step." muted><p>The first discussion establishes what you want to change, what you have tried and whether my experience fits. You can ask about scope, fees and what working together would involve.</p><p>A short description is enough. Sending this form does not commit you to a paid service. Any proposal confirms the work, timing and fee before you decide.</p></Section>
  </PageShell>;
}
