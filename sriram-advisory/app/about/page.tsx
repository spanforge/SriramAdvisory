import type { Metadata } from "next";
import Image from "next/image";
import { PageShell, Hero, Section, ClosingCTA } from "@/components/AdvisoryUI";

export const metadata: Metadata = { title: "About Sriram Advisory", description: "Learn how Sriram Srinivasan combines 30 years of IT services experience with responsible AI-assisted analysis for business performance and career intelligence.", alternates: { canonical: "/about" } };

const experienceAreas = [
  ["Projects and programmes", "Delivery health, risks, ownership and stakeholder alignment."],
  ["Operations", "Operating cadence, measures and simpler ways of working."],
  ["SDLC and quality", "Quality ownership, defect prevention and rework reduction."],
  ["Sales and pre-sales", "Discovery, proposal clarity, commitments and delivery handover."],
  ["Talent and capability", "Professional development and management readiness."],
  ["Communication", "Useful customer, team and executive communication."],
  ["Technology adoption", "Relevant use cases, adoption barriers and useful outcomes."],
  ["Education and learning", "Knowledge application and support for educators as an emerging focus."],
];

export default function About() {
  return <PageShell>
    <Hero eyebrow="Founder-led · AI-enabled · Independent" title="Thirty years across how IT services work is won, delivered and changed" body="I am Sriram Srinivasan. I combine IT services experience with responsible AI-assisted analysis to help businesses improve delivery and professionals make stronger decisions as the work changes." primary={{ label: "Explore Business Advisory", href: "/business" }} secondary={{ label: "Explore Career Intelligence", href: "/careers" }} />
    <Section title="Experience across the IT services journey" intro="The perspective behind Sriram Advisory connects how work is won, delivered, improved and explained. It also considers how people develop the capability to carry that work forward.">
      <div className="sa-about-layout"><div className="sa-founder-portrait"><Image src="/sriram.png" alt="Sriram Srinivasan" width={480} height={480} priority /></div><div className="sa-experience-list">{experienceAreas.map(([title, body], index) => <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></div>)}</div></div>
    </Section>
    <Section muted eyebrow="One industry · Two perspectives" title="A focused practice on both sides of the work">
      <div className="sa-grid sa-grid-2"><div className="sa-card"><h3>Business Performance Advisory</h3><p>Apply operating experience to delivery, quality, operations, capability and sales-to-delivery problems inside IT services businesses and teams.</p></div><div className="sa-card"><h3>Career Intelligence</h3><p>Apply the same industry perspective to role change, capability, positioning and career decisions for individual professionals.</p></div></div>
    </Section>
    <Section eyebrow="Working approach" title="A clear path from context to action">
      <ol className="sa-process"><li><strong>Understand the context</strong><span>Clarify the decision, constraints, people and intended outcome.</span></li><li><strong>Examine evidence</strong><span>Use structured research and AI assistance to organise agreed information and separate useful signals from assumptions.</span></li><li><strong>Apply human judgment</strong><span>Review the analysis against experience, context and the limits of the available evidence.</span></li><li><strong>Recommend practical steps</strong><span>Prioritise actions that fit the situation and available capacity.</span></li></ol>
    </Section>
    <Section muted eyebrow="Responsible use of AI" title="AI supports the analysis. Experience shapes the advice." intro="Sriram Advisory is AI-enabled and expert-led. AI may help organise evidence, compare patterns and explore scenarios. It does not make autonomous recommendations, replace contextual judgment or guarantee an outcome.">
      <p className="sa-section-intro">Every client-facing finding and recommendation is human-reviewed. You remain responsible for the final business or career decision.</p>
    </Section>
    <Section eyebrow="What this perspective brings" title="Connections across functions, not an isolated method" intro="The advisory perspective covers the points where operating problems often cross team boundaries.">
      <div className="sa-grid sa-grid-2"><div className="sa-card"><h3>Commercial promise to delivery reality</h3><p>Examine whether discovery, proposals, assumptions and handovers give delivery teams a workable starting point.</p></div><div className="sa-card"><h3>Delivery evidence to leadership decisions</h3><p>Connect risks, quality, operating measures and communication to the decisions leaders and customers need to make.</p></div></div>
    </Section>
    <Section title="What an engagement can produce" intro="The exact output depends on the agreed scope. Current engagement formats include:"><div className="sa-output-row"><span>Structured findings</span><span>Prioritised action plan</span><span>Leadership readout</span><span>Decision brief</span><span>Practical checklist</span></div></Section>
    <Section muted title="Clear practice boundaries" intro="Business engagements begin with an agreed problem and defined scope. Career products and assessments have separate purposes and commercial terms. Technology, digital safety and education may inform published insights, but they are not presented as separate advisory practices."><p>Recommendations are based on the context and evidence available. Implementation, certification, security testing and guaranteed outcomes are not implied.</p></Section>
    <ClosingCTA title="Discuss the IT services decision in front of you" body="Share the business or career context and intended outcome without sending confidential material at the first step." href="/contact" label="Discuss Your Situation" />
  </PageShell>;
}
