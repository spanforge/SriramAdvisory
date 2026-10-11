import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Section } from "@/components/AdvisoryUI";
import { Button, FounderHero } from "@/components/EditorialUI";
import ArticleCard from "@/components/ArticleCard";
import { copy, services, siteIdentity } from "@/lib/positioning";
import { getFeaturedArticles } from "@/lib/thinking";

export const metadata: Metadata = {
  title: "Sriram Advisory | Look Beyond the Obvious",
  description: siteIdentity.description,
  alternates: { canonical: "/" },
};
export default function Home() {
  const articles = getFeaturedArticles();
  const c = copy.continuation;
  return <PageShell>
    <FounderHero eyebrow={copy.home.eyebrow} title={copy.home.title} summary={copy.home.summary} experience={copy.home.experience}>
      <Button href="/contact?interest=general">Discuss your challenge</Button><Button href="/#worked-example" secondary>See how I think</Button>
    </FounderHero>
    {articles.length > 0 && <Section title="How I see things" intro="Technology progress is not the same as human progress. My writing examines familiar explanations, overlooked connections and the choices people can make." muted>
      <div className="sa-grid">{articles.map(article => <ArticleCard key={article.slug} article={article} />)}</div>
      <p className="sa-section-intro">The same curiosity shapes my advisory work. I question the first explanation, look at the wider context and help people decide what to do next.</p>
      <div className="sa-actions"><Button href="/insights" secondary>Explore my thinking</Button><Link href={siteIdentity.linkedin}>Read my writing on LinkedIn</Link></div>
    </Section>}
    <Section title={copy.home.situationsTitle} intro={copy.home.situationsIntro}>
      <ul className="sa-situations">{copy.situations.map(([title, body]) => <li key={title}><strong>{title}</strong><span>{body}</span></li>)}</ul>
    </Section>
    <Section id="worked-example" title={copy.home.exampleIntroTitle} intro={copy.home.exampleIntro} muted>
      <div className="sa-worked-example">
        <p className="sa-illustrative">{copy.example.label}</p><h3>{copy.example.title}</h3>
        <ol className="sa-example-steps">{copy.exampleStages.map(([stage, text]) => <li key={stage}><strong>{stage}</strong><p>{text}</p></li>)}</ol>
        <p>{copy.example.qualification}</p>
      </div>
      <div className="sa-actions"><Button href="/thinking-in-practice">Explore three practical examples</Button></div>
    </Section>
    {services.find(service => service.slug === "problem-solving-sprint")?.enabled && <Section id="start-here" eyebrow="Start here: Problem-Solving Sprint" title={c.sprintTitle} intro={c.sprintSummary}>
      <div className="sa-grid sa-sprint-outputs">
        <article className="sa-card"><h3>A clearer problem</h3><p>A problem brief describing the situation, the outcome that matters and the constraints.</p></article>
        <article className="sa-card"><h3>A reasoned decision</h3><p>A decision note setting out evidence, assumptions, options and a recommended direction.</p></article>
        <article className="sa-card"><h3>A practical next step</h3><p>A 30-day action plan with agreed owners, first steps and measures to review.</p></article>
      </div>
      <div className="sa-actions"><Button href="/services/problem-solving-sprint">Explore the Sprint</Button><Link href="/resources/sprint-deliverables-example">See sample deliverables</Link></div>
      <p className="sa-help">One challenge, with scope, timetable, your team&apos;s involvement and fee agreed before work begins. <Link href="/work-with-sriram">Explore other ways to work together.</Link></p>
    </Section>}
    <Section title={c.experienceTitle} intro={c.experienceBody}><p className="sa-section-intro">{c.experienceClosing}</p><Link href="/about">Meet Sriram →</Link></Section>
    <Section title={c.contactTitle} intro={c.contactBody}><Button href="/contact?interest=general">Discuss your challenge</Button><p className="sa-email-fallback">Prefer email? <a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a>.</p></Section>
  </PageShell>;
}

