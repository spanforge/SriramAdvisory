import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = { title: "Business and Delivery Health Check | Sriram Advisory", description: "A focused review that identifies delivery and operating priorities and supports a practical 90-day action plan.", alternates: { canonical: "/services/business-delivery-health-check" } };

export default function Page() {
  return <ServicePage
    title="Business and Delivery Health Check"
    path="/services/business-delivery-health-check"
    outcome="A prioritised view of delivery and operating problems, followed by a practical action plan."
    audience="Growing IT services businesses and scoped corporate teams."
    problems={["Missed commitments and unclear delivery risks", "Preventable rework and quality gaps", "Weak ownership, reporting or stakeholder alignment", "Gaps between sales promises and delivery"]}
    deliverables={["Discovery discussion", "Review of agreed areas and redacted evidence", "Clear findings and priorities", "Prioritised 90-day action plan", "Leadership readout"]}
    steps={["Understand the situation", "Review agreed evidence", "Identify priorities", "Discuss a practical action plan"]}
    included={["Discovery", "Review of agreed areas", "Findings", "Prioritised 90-day action plan", "Leadership readout"]}
    excluded={["Implementation", "Certification", "Security testing", "Unlimited follow-up"]}
    input="A discovery discussion and an agreed set of non-sensitive or redacted evidence."
    boundary="One agreed business unit or delivery area per statement of work. Turnaround, interviews, evidence volume and implementation support are confirmed in the written proposal."
    sampleTitle="What a health-check output can look like"
    sampleSections={[{ heading: "Current-state observation", detail: "A concise description of the delivery pattern and the evidence behind it." }, { heading: "Why it matters", detail: "The practical consequence for commitments, quality, customers or team capacity." }, { heading: "Priority action", detail: "A named action, accountable owner and an appropriate review point." }, { heading: "90-day view", detail: "A sequenced set of near-term priorities rather than an unbounded transformation programme." }]}
    cta="Request a Health Check Discussion"
    href="/contact?interest=business&offer=business-delivery-health-check"
  />;
}
