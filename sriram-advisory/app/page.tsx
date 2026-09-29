import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCTA, Hero, LinkCard, PageShell, ResourceCard, Section } from "@/components/AdvisoryUI";
import { relatedInsights, resources } from "@/lib/advisoryContent";

export const metadata: Metadata = {
  title: "Sriram Advisory | IT Services Performance and Career Intelligence",
  description: "Founder-led, AI-enabled advisory for better IT services delivery and stronger career decisions, informed by 30 years of experience.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sriram Advisory | IT Services Performance and Career Intelligence",
    description: "One industry. Two perspectives: better business delivery and stronger career decisions.",
    images: [{ url: "/sriram.png", alt: "Sriram Advisory" }],
  },
};

const businessChallenges = [
  ["Delivery performance", "Make risks, ownership and commitments easier to see and act on."],
  ["Quality and rework", "Find recurring causes of avoidable effort and strengthen quality ownership."],
  ["Sales to delivery", "Connect discovery and commercial commitments to executable delivery plans."],
  ["Operating clarity", "Improve measures, reporting and decisions without adding unnecessary process."],
];

export default function Home() {
  const professionalResources = resources.filter(resource => resource.topic === "career").slice(0, 3);
  const featuredInsights = [
    ...relatedInsights.filter(article => article.topic === "business").slice(0, 2),
    ...relatedInsights.filter(article => article.topic === "career").slice(0, 1),
  ];

  return <PageShell>
    <Hero
      eyebrow="Founder-led · AI-enabled · Independent"
      title="Better IT services delivery. Stronger career decisions."
      body="Advisory for the changing IT services industry, combining 30 years of experience with responsible AI-assisted analysis. Every finding and recommendation is reviewed, interpreted and shaped by human judgment."
      primary={{ label: "Explore Business Advisory", href: "/business" }}
      secondary={{ label: "Explore Career Intelligence", href: "/careers" }}
    />

    <div className="sa-credibility-strip"><div className="sa-wrap">
      <div><strong>30 years</strong><span>across the IT services journey</span></div>
      <div><strong>One industry</strong><span>business and professional perspectives</span></div>
      <div><strong>AI-enabled</strong><span>analysis reviewed by a human</span></div>
      <div><strong>Independent view</strong><span>practical advice without platform bias</span></div>
    </div></div>

    <Section id="choose-your-path" eyebrow="Two focused practices" title="Choose the perspective that matches your decision" intro="The two practices share the same industry foundation while serving different buyers, questions and outcomes.">
      <div className="sa-grid sa-grid-2">
        <LinkCard
          meta="For IT services businesses and teams"
          title="Business Performance Advisory"
          body="Improve delivery, quality, operations, capability and the connection between commercial promises and execution."
          href="/business"
          cta="Explore Business Performance"
        />
        <LinkCard
          meta="For individual professionals"
          title="Career Intelligence"
          body="Understand how technology and market change affect your role, positioning and next career decision."
          href="/careers"
          cta="Explore Career Intelligence"
        />
      </div>
    </Section>

    <Section muted eyebrow="How AI is used" title="AI supports the analysis. Experience shapes the advice." intro="AI helps examine information, organise evidence and test possible interpretations. It does not replace professional judgment, decide the answer or predict an outcome.">
      <div className="sa-grid sa-grid-2">
        <div className="sa-card">
          <h3>For business performance</h3>
          <p>AI can help structure agreed, non-sensitive or redacted evidence, identify patterns and explore scenarios. Recommendations are based on your operating context, constraints and leadership priorities.</p>
        </div>
        <div className="sa-card">
          <h3>For career intelligence</h3>
          <p>AI can help analyse role, task and market signals. The resulting guidance is human-reviewed decision support, not a prediction of an individual career outcome.</p>
        </div>
      </div>
      <p className="sa-section-intro">You remain responsible for the decision. <Link className="sa-arrow" href="/methodology">Read the research method →</Link></p>
    </Section>

    <Section id="business-performance" eyebrow="Practice 01 · Business Performance Advisory" title="Start with the operating problem" intro="For growing IT services businesses and corporate teams that need clearer delivery priorities and practical action.">
      <div className="sa-grid sa-grid-2">
        {businessChallenges.map(([title, body]) => <LinkCard key={title} title={title} body={body} href="/business" cta="Explore business support" />)}
      </div>
    </Section>

    <Section eyebrow="Defined business engagement" title="Business and Delivery Health Check" intro="A focused review of one agreed area, followed by findings and a prioritised 90-day action plan.">
      <div className="sa-editorial-split">
        <div>
          <p className="sa-section-intro">The Health Check is the clearest starting engagement when delivery or operating problems are visible but their causes and priorities are not.</p>
          <Link className="sa-btn sa-btn-primary" href="/services/business-delivery-health-check">Review the Health Check</Link>
        </div>
        <ol className="sa-principles">
          <li><span>01</span><div><strong>Understand the context</strong><p>Clarify the challenge, intended outcome and operating constraints.</p></div></li>
          <li><span>02</span><div><strong>Review agreed evidence</strong><p>Examine a defined set of non-sensitive or redacted material.</p></div></li>
          <li><span>03</span><div><strong>Prioritise action</strong><p>Provide findings, ownership questions and a practical 90-day view.</p></div></li>
        </ol>
      </div>
    </Section>

    <Section muted id="career-intelligence" eyebrow="Practice 02 · Career Intelligence" title="Make your next career decision with better context" intro="For professionals across IT services, GCCs and adjacent digital roles who want to understand change without relying on hype or generic advice.">
      <div className="sa-editorial-split">
        <div>
          <p className="sa-section-intro">Assessments organise the decision. Role-specific guides and reports provide market context. Together, they help you decide what to strengthen, how to position your value and what to do next.</p>
          <div className="sa-actions"><Link className="sa-btn sa-btn-primary" href="/careers">Explore Career Intelligence</Link><Link className="sa-btn sa-btn-secondary" href="/tools/free-ai-exposure-check">Take the Free Check</Link></div>
        </div>
        <ol className="sa-principles">
          <li><span>01</span><div><strong>Understand role change</strong><p>Separate durable signals from broad predictions and short-lived technology noise.</p></div></li>
          <li><span>02</span><div><strong>Assess your position</strong><p>Examine exposure, defensibility, capability and how clearly your value is communicated.</p></div></li>
          <li><span>03</span><div><strong>Choose the next move</strong><p>Turn the evidence into a practical learning, positioning or transition decision.</p></div></li>
        </ol>
      </div>
      <div className="sa-grid">{professionalResources.map(resource => <ResourceCard key={resource.id} resource={resource} />)}</div>
    </Section>

    <Section eyebrow="Why Sriram Advisory" title="Experience across how IT services work is won, delivered and changed">
      <div className="sa-editorial-split">
        <div>
          <p className="sa-section-intro">The perspective connects projects and programmes, operations, software delivery and quality, sales and pre-sales, talent and capability, communication and technology adoption.</p>
          <Link className="sa-arrow" href="/about">Review Sriram’s experience and approach →</Link>
        </div>
        <div className="sa-card">
          <h3>Advice designed for use</h3>
          <p>Recommendations are tied to the situation, available evidence and capacity to act. Business scope, outputs, schedule and fees are agreed before an engagement begins.</p>
          <Link className="sa-arrow" href="/contact">Discuss the decision in front of you →</Link>
        </div>
      </div>
    </Section>

    {featuredInsights.length > 0 && <Section muted eyebrow="IT services insights" title="Thinking across delivery and careers" intro="Technology, digital safety and education appear here when they help explain how IT services work and careers are changing.">
      <div className="sa-grid">{featuredInsights.map(article => <LinkCard key={article.slug} meta={article.topic === "business" ? "Business Performance" : "Career Intelligence"} title={article.title} body={article.summary} href={`/insights/${article.slug}`} cta="Read insight" />)}</div>
      <div className="sa-actions"><Link className="sa-btn sa-btn-secondary" href="/insights">Browse All Insights</Link></div>
    </Section>}

    <ClosingCTA title="Which IT services decision are you working through?" body="Share the delivery, operating or career question. We will identify the relevant practice and a useful next step." href="/contact" label="Discuss Your Situation" />
  </PageShell>;
}
