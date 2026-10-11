import Link from "next/link";
import type { Metadata } from "next";
import { PageShell, Section } from "@/components/AdvisoryUI";
import { FounderHero, Button } from "@/components/EditorialUI";
import { copy, siteIdentity } from "@/lib/positioning";
import { founderProfile } from "@/content/founder-profile";
export const metadata: Metadata = { title: "About Sriram Srinivasan | Sriram Advisory", description: "Meet Sriram Srinivasan and explore his approach to delivery, capability, technology decisions and practical problem-solving.", alternates: { canonical: "/about" } };
export default function About() {
  const c = copy.about;
  return <PageShell><FounderHero title={c.title} summary={c.summary}><Button href="/contact">Discuss your challenge</Button></FounderHero>
    <section className="sa-section"><div className="sa-wrap sa-prose"><p>{c.connections}</p><p>{c.approach}</p></div></section>
    <Section title="Experience grounded in how work gets done"><div className="sa-prose">{founderProfile.narrative.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<p className="sa-help">Sriram Advisory is my independent practice. My advice reflects my own judgement and does not represent my employers or clients.</p><a href={siteIdentity.linkedin}>More about my professional background on LinkedIn →</a></div></Section>
    <Section title={c.processTitle} intro={c.process} muted><p>You work directly with me. I lead the agreed advisory work and make any need for a different specialist explicit.</p><Link href="/resources/sprint-deliverables-example">See a fictional example of the deliverables →</Link></Section>
    <Section title={c.spanforgeTitle} intro={c.spanforge}><p>Building tools keeps me close to practical questions about evaluation, reliability and the work needed to make a technology useful. I bring that perspective to advisory discussions; Sriram Advisory and Spanforge are separate businesses.</p><a href="https://www.getspanforge.com">Explore Spanforge →</a></Section>
  </PageShell>;
}
