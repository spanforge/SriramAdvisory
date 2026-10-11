import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Hero, Section } from "@/components/AdvisoryUI";
import { copy, services, healthCheckEnabled } from "@/lib/positioning";
import EngagementComparison from "@/components/EngagementComparison";
export const metadata: Metadata = { title: "Business Problem-Solving | Sriram Advisory", description: copy.business.summary, alternates: { canonical: "/business" } };
export default function Business() {
  const c = copy.business;
  return <PageShell><Hero title={c.title} body={c.summary} primary={{ label: "Discuss your challenge", href: "/contact?interest=general" }} />
    <Section title="Start with the problem" intro={c.body}><ul className="sa-service-links">
      {services.filter(s => s.enabled && s.slug !== "team-workshops").map(s => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title} →</Link></li>)}
      {healthCheckEnabled && <li><Link href="/services/business-delivery-health-check">Business and Delivery Health Check →</Link></li>}
    </ul></Section><Section title="Two ways to start" muted><EngagementComparison /></Section><Section title="Put the question into a working document" intro="Use the free problem-framing worksheet to separate symptoms, evidence and assumptions before choosing an intervention."><Link href="/resources/problem-framing-worksheet">Use the worksheet →</Link></Section></PageShell>;
}
