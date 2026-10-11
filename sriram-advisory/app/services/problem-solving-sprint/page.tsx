import type { Metadata } from "next";
import { PageShell, Hero, Section, Breadcrumbs } from "@/components/AdvisoryUI";
import { Button, UnavailableService } from "@/components/EditorialUI";
import { copy, services } from "@/lib/positioning";
import Link from "next/link";
import EngagementComparison from "@/components/EngagementComparison";
import SprintOutline from "@/components/SprintOutline";
const c = copy.sprint;
export const metadata: Metadata = { title: "Problem-Solving Sprint | Sriram Advisory", description: c.summary, alternates: { canonical: "/services/problem-solving-sprint" } };
export default function Service() {
  if (!services.find(service => service.slug === "problem-solving-sprint")?.enabled) return <UnavailableService />;
  return <PageShell><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Work with Sriram", href: "/work-with-sriram" }, { label: "Problem-Solving Sprint" }]} />
    <Hero title={c.title} tagline={c.tagline} body={c.summary} primary={{ label: "Discuss a Sprint", href: "/contact?interest=sprint" }} />
    <Section title={c.fitTitle} intro={c.fit}><span /></Section>
    <Section title={c.deliverablesTitle} intro={c.deliverables}><Link href="/resources/sprint-deliverables-example">See a fictional problem brief, decision note and 30-day action plan →</Link></Section>
    <Section title="What working together can look like" intro={c.process} muted><SprintOutline /></Section>
    <Section title={c.scopeTitle} intro={c.scope}><p>You work directly with me. Your contribution is the initial context, access to agreed participants and non-sensitive or redacted materials, and a review of the recommendation. The proposal states the time required from each participant before work starts.</p></Section>
    <Section title="Sprint or Health Check?" muted><EngagementComparison /></Section>
    <Section title={c.exclusionsTitle} intro={c.exclusions}><span /></Section>
    <section className="sa-section sa-muted"><div className="sa-wrap sa-prose"><p>{c.closing}</p><Button href="/contact?interest=sprint">Discuss a Sprint</Button></div></section>
  </PageShell>;
}
