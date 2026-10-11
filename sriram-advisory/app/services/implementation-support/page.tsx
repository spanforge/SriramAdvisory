import type { Metadata } from "next";
import { PageShell, Hero, Section, Breadcrumbs } from "@/components/AdvisoryUI";
import { Button, UnavailableService } from "@/components/EditorialUI";
import { copy, services } from "@/lib/positioning";
const c = copy.implementation;
export const metadata: Metadata = { title: "Implementation Support | Sriram Advisory", description: c.summary, alternates: { canonical: "/services/implementation-support" } };
export default function Service() {
  if (!services.find(service => service.slug === "implementation-support")?.enabled) return <UnavailableService />;
  return <PageShell><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Work with Sriram", href: "/work-with-sriram" }, { label: "Implementation Support" }]} />
    <Hero eyebrow="Implementation Support" title={c.title} body={c.summary} primary={{ label: "Discuss implementation support", href: "/contact?interest=implementation" }} />
    <Section title={c.examplesTitle} intro={c.examples}><span /></Section>
    <Section title={c.agreementTitle} intro={c.agreement}><span /></Section>
    <Section title={c.deliverablesTitle} intro={c.deliverables}><span /></Section>
    <section className="sa-section sa-muted"><div className="sa-wrap sa-prose"><p>{c.boundary}</p><Button href="/contact?interest=implementation">Discuss implementation support</Button></div></section>
  </PageShell>;
}
