import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, ClosingCTA, Hero, LinkCard, PageShell, Section } from "@/components/AdvisoryUI";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/advisoryContent";
import { INSIGHTS } from "@/lib/insights";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS.find(item => item.slug === slug);
  if (!article) return { title: "Insight not found" };
  return {
    title: `${article.title} | Sriram Advisory`,
    description: article.summary,
    alternates: { canonical: `/insights/${article.slug}` },
    authors: [{ name: "Sriram Srinivasan", url: "/about" }],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: ["Sriram Srinivasan"],
    },
  };
}

export function generateStaticParams() {
  return INSIGHTS.map(article => ({ slug: article.slug }));
}

function ArticleBody({ body }: { body: string }) {
  const blocks = body.split("\n\n");
  return <div className="sa-article-body">
    {blocks.map((block, index) => {
      if (block.startsWith("## ")) return <h2 key={index}>{block.slice(3)}</h2>;
      if (/^1\. /.test(block)) {
        return <ol key={index}>{block.split("\n").map(line => <li key={line}>{line.replace(/^\d+\. /, "")}</li>)}</ol>;
      }
      return <p key={index}>{block}</p>;
    })}
  </div>;
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = INSIGHTS.find(item => item.slug === slug);
  if (!article) notFound();

  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "long", timeZone: "Asia/Kolkata" }).format(new Date(article.date));
  const related = INSIGHTS.filter(item => item.slug !== article.slug && item.topic === article.topic).slice(0, 2);
  const articleUrl = `${siteConfig.canonicalOrigin}/insights/${article.slug}`;
  const nextSteps = {
    business: {
      title: "Apply the thinking to a delivery challenge",
      body: "See how a focused review can turn operating evidence into a prioritised 90-day action plan.",
      href: "/services/business-delivery-health-check",
      label: "Review the Health Check",
    },
    career: {
      title: "Use the insight in your own career decision",
      body: "Explore the assessments, reports and guides currently available for individual professionals.",
      href: "/careers",
      label: "Explore Career Guidance",
    },
    "technology-digital-safety": {
      title: "Read technology change in its work context",
      body: "Explore related insights on technology adoption, digital safety and their effect on IT services work.",
      href: "/insights?topic=technology-digital-safety",
      label: "Browse Technology Insights",
    },
    education: {
      title: "Connect learning to capability and work",
      body: "Explore related insights on practical learning and the transition from education into changing professional work.",
      href: "/insights?topic=education",
      label: "Browse Learning Insights",
    },
  } as const;
  const nextStep = nextSteps[article.topic];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    author: { "@id": `${siteConfig.canonicalOrigin}/#founder` },
    publisher: { "@id": `${siteConfig.canonicalOrigin}/#organization` },
    image: `${siteConfig.canonicalOrigin}/sriram.png`,
  };

  return <PageShell>
    <StructuredData data={schema} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: article.title }]} />
    <Hero
      eyebrow={article.type}
      title={article.title}
      body={article.summary}
      primary={{ label: "Browse all insights", href: "/insights" }}
    />
    <Section title="Article" intro={`By Sriram Srinivasan · Published and reviewed ${date} · ${article.readTime}`}>
      <ArticleBody body={article.body} />
    </Section>
    {related.length > 0 && <Section muted title="Related thinking"><div className="sa-grid sa-grid-2">{related.map(item => <LinkCard key={item.slug} meta={item.type} title={item.title} body={item.summary} href={`/insights/${item.slug}`} cta="Read insight" />)}</div></Section>}
    <ClosingCTA title={nextStep.title} body={nextStep.body} href={nextStep.href} label={nextStep.label} />
  </PageShell>;
}
