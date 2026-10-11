import Link from "next/link";
import { healthCheckEnabled, services } from "@/lib/positioning";

export default function EngagementComparison() {
  const sprint = services.find(service => service.slug === "problem-solving-sprint")?.enabled;
  return <div className="sa-grid sa-grid-2">
    {sprint && <article className="sa-card"><h3>One problem or decision: a Sprint</h3><p>Choose this when explanations compete, a proposed solution needs testing, or you need to decide what to do next.</p><dl className="sa-definition-list"><dt>Scope</dt><dd>One defined challenge and the evidence needed to examine it.</dd><dt>Output</dt><dd>A problem brief, decision note and 30-day action plan.</dd><dt>Your contribution</dt><dd>Context, agreed participants and materials, and a review of the recommendation.</dd></dl><Link href="/services/problem-solving-sprint">Explore the Sprint →</Link></article>}
    {healthCheckEnabled && <article className="sa-card"><h3>One delivery area: a Health Check</h3><p>Choose this when you need to understand patterns across commitments, quality, ownership and reporting in an agreed delivery area.</p><dl className="sa-definition-list"><dt>Scope</dt><dd>One business unit or delivery area, with agreed interviews and evidence.</dd><dt>Output</dt><dd>Findings, priorities, a 90-day action plan and a leadership readout.</dd><dt>Your contribution</dt><dd>A responsible leader, agreed non-sensitive or redacted evidence, and a discussion of priorities.</dd></dl><Link href="/services/business-delivery-health-check">Explore the Health Check →</Link></article>}
  </div>;
}
