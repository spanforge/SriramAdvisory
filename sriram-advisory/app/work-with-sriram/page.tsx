import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Hero, Section, ClosingCTA } from "@/components/AdvisoryUI";
import { ServiceSummaries, ServiceFAQ } from "@/components/EditorialUI";
import { copy, healthCheckEnabled } from "@/lib/positioning";
import EngagementComparison from "@/components/EngagementComparison";
export const metadata: Metadata = { title: "Work with Sriram | Sriram Advisory", description: copy.work.summary, alternates: { canonical: "/work-with-sriram" } };
export default function WorkWithSriram() {
  const c = copy.work;
  return <PageShell><Hero title={c.title} body={c.summary} primary={{ label: "Discuss your challenge", href: "/contact?interest=general" }} />
    <Section eyebrow="The starting point" title="Begin with a Problem-Solving Sprint" intro={copy.continuation.sprintSummary}><Link className="sa-btn sa-btn-primary" href="/services/problem-solving-sprint">Explore the Sprint</Link></Section>
    <section className="sa-section sa-muted" aria-label="Ways to work together"><div className="sa-wrap"><ServiceSummaries /></div></section>
    <Section title={c.fitTitle} intro={c.fit}><p>{c.fitClosing}</p></Section>
    <Section title="Choose the starting point that fits the question" intro="A Sprint helps resolve one problem or decision. A Health Check examines patterns across a defined delivery area. Implementation support and workshops can follow when the next piece of work is clear." muted><EngagementComparison /></Section>
    <Section title="Work directly with me" intro="I lead the discovery, analysis and readout. We agree what I will do, what your team contributes and when we will review the work."><p>Before you commit, the proposal sets out the timetable, participant time, evidence requirements and fee. An initial enquiry helps establish fit and does not commit you to a paid engagement.</p><p><Link href="/thinking-in-practice">Explore three examples of my approach</Link></p><Link href="/resources/sprint-deliverables-example">Inspect fictional sample deliverables →</Link></Section>
    <Section title={c.agreementTitle} intro={c.agreement} muted><p>{c.boundary}</p></Section>
    {healthCheckEnabled && <Section title={c.healthTitle} intro={c.healthSummary}><Link href="/services/business-delivery-health-check">Explore the Health Check →</Link></Section>}
    <Section title="Questions before we begin"><ServiceFAQ /></Section>
    <ClosingCTA title={copy.continuation.contactTitle} body={copy.continuation.contactBody} href="/contact?interest=general" label="Discuss your challenge" />
  </PageShell>;
}
