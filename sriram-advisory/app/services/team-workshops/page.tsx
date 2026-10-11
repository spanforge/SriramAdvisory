import type { Metadata } from "next";
import { PageShell, Hero, Section, Breadcrumbs } from "@/components/AdvisoryUI";
import { Button, UnavailableService } from "@/components/EditorialUI";
import { copy, services } from "@/lib/positioning";
const c = copy.workshop;
export const metadata: Metadata = { title: "Team Workshops | Sriram Advisory", description: c.summary, alternates: { canonical: "/services/team-workshops" } };
export default function Service() {
  if (!services.find(service => service.slug === "team-workshops")?.enabled) return <UnavailableService />;
  return <PageShell><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Work with Sriram", href: "/work-with-sriram" }, { label: "Team Workshops" }]} />
    <Hero eyebrow="Team Workshops" title={c.title} body={c.summary} primary={{ label: "Discuss a workshop", href: "/contact?interest=workshop" }} />
    <Section title={c.themesTitle} intro={c.themes}><span /></Section>
    <Section title={c.deliverablesTitle} intro={c.deliverables}><span /></Section>
    <section className="sa-section sa-muted"><div className="sa-wrap sa-prose"><p>{c.boundary}</p><Button href="/contact?interest=workshop">Discuss a workshop</Button></div></section>
  </PageShell>;
}
