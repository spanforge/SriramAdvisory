import type { Metadata } from "next";
import { ClosingCTA, Hero, LinkCard, PageShell, Section } from "@/components/AdvisoryUI";

export const metadata: Metadata = {
  title: "Business Performance Advisory | Sriram Advisory",
  description: "Founder-led, AI-enabled advisory for IT services businesses and teams improving delivery, quality and operations.",
  alternates: { canonical: "/business" },
};

const areas = [
  ["Delivery health", "Make risks, ownership and commitments easier to see and act on."],
  ["Quality and rework", "Identify recurring causes of defects and strengthen quality ownership."],
  ["Customer communication", "Make updates clearer, more useful and better connected to decisions."],
  ["Sales to delivery", "Improve discovery, commitments and the handover from winning work to delivering it."],
  ["Operations", "Simplify operating cadence, measures and ways of working."],
  ["Technology adoption", "Choose relevant use cases and support useful, responsible adoption."],
];

export default function Business() {
  return <PageShell>
    <Hero eyebrow="Business Performance Advisory" title="Improve how your IT services business wins work and delivers it." body="Focused support for growing IT services businesses and corporate delivery teams facing challenges in delivery, quality, operations and capability." primary={{ label: "Explore the Business Health Check", href: "/services/business-delivery-health-check" }} secondary={{ label: "Discuss Your Challenge", href: "/contact?interest=business" }} />

    <Section title="Where is work getting harder than it should?">
      <ul className="sa-list sa-checklist">{["Missed commitments", "Preventable rework", "Unclear customer updates", "Dependence on a few people", "Gaps between sales and delivery", "Reports that do not support decisions"].map(item => <li key={item}>{item}</li>)}</ul>
    </Section>

    <Section muted title="Where practical support can help">
      <div className="sa-grid">{areas.map(([title, body]) => <LinkCard key={title} title={title} body={body} href="/contact?interest=business" cta="Discuss this challenge" />)}</div>
    </Section>

    <Section eyebrow="AI-enabled · Expert-led" title="Use AI to strengthen the analysis, not replace judgment" intro="AI-assisted analysis can help organise agreed evidence, surface patterns and compare scenarios. Every finding and recommendation is reviewed against your operating context, constraints and priorities.">
      <div className="sa-grid sa-grid-2">
        <div className="sa-card"><h3>What AI can support</h3><p>Structuring information, identifying recurring themes and testing alternative interpretations across a defined evidence set.</p></div>
        <div className="sa-card"><h3>Where experience leads</h3><p>Determining what matters, challenging weak assumptions and turning the analysis into actions that fit the business.</p></div>
      </div>
      <p className="sa-section-intro">Only agreed, non-sensitive or redacted material is reviewed. Confidential information should not be shared at the initial enquiry stage.</p>
    </Section>

    <Section title="Business and Delivery Health Check" intro="We understand the situation, review agreed evidence, identify priorities and discuss a practical action plan.">
      <LinkCard title="A focused, evidence-led engagement" body="Receive findings, a prioritised 90-day action plan and a leadership readout for one agreed delivery area." href="/services/business-delivery-health-check" cta="View the health check" meta="Scope agreed after an initial discussion" />
    </Section>

    <Section muted title="Support for corporate teams" intro="Structured reviews and written guidance can help teams strengthen delivery practices, build capabilities and improve technology adoption. The scope is agreed around your team’s priorities.">
      <a className="sa-btn sa-btn-primary" href="/contact?interest=capability">Discuss a Team Engagement</a>
    </Section>

    <ClosingCTA title="Tell us what is getting in the way" body="Share the delivery or operating challenge without uploading confidential project artefacts." href="/contact?interest=business" label="Discuss Your Challenge" />
  </PageShell>;
}
