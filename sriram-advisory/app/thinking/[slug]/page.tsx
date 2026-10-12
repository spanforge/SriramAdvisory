import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, PageShell } from "@/components/AdvisoryUI";

import StructuredData from "@/components/StructuredData";
import CopyArticleLink from "@/components/CopyArticleLink";
import { getArticle, getPublishedArticles, getProductMarketArticles } from "@/lib/thinking";
import { siteIdentity } from "@/lib/positioning";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return { title: "Article not found", robots: { index: false } };
  return { title: `${article.title} | Sriram Advisory`, description: article.summary, alternates: { canonical: `/thinking/${article.slug}` }, authors: [{ name: article.author, url: "/about" }], openGraph: { type: "article", title: article.title, description: article.summary, publishedTime: article.publishedAt ?? undefined, modifiedTime: article.updatedAt ?? undefined, authors: [article.author] } };
}
export function generateStaticParams() { return getPublishedArticles().map(article => ({ slug: article.slug })); }
export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const related = getProductMarketArticles().filter(item => item.slug !== article.slug).slice(0, 2);
  const canonical = `${siteIdentity.origin}/thinking/${article.slug}`;
  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "long", timeZone: "Asia/Kolkata" }).format(new Date(`${article.publishedAt}T00:00:00+05:30`));
  const Body = article.Body;
  return <PageShell>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.summary, datePublished: article.publishedAt, dateModified: article.updatedAt, mainEntityOfPage: canonical, url: canonical, author: { "@id": `${siteIdentity.origin}/#founder` }, publisher: { "@id": `${siteIdentity.origin}/#organization` } }} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Thinking", href: "/thinking" }]} />
    <article className="sa-wrap sa-reading-column">
      <header className="sa-article-header"><p className="sa-eyebrow">{article.category}</p><h1>{article.title}</h1><p className="sa-lede">{article.summary}</p><p className="sa-article-byline">{article.author} · <time dateTime={article.publishedAt ?? undefined}>{date}</time> · {article.readTime}</p>{!article.illustrative && <p className="sa-illustrative">Analysis</p>}{article.illustrative && <p className="sa-illustrative">Illustrative scenario — not a client case study</p>}</header>
      {article.publicationNote && <p className="sa-help">{article.originalUrl ? <a href={article.originalUrl}>{article.publicationNote}</a> : article.publicationNote}</p>}
      <div className="sa-article-body"><Body /></div>
      {article.sources.length > 0 && <section className="sa-article-sources"><h2>Sources</h2><ul>{article.sources.map(source => <li key={source.url}><a href={source.url}>{source.title}</a></li>)}</ul></section>}
      <div className="sa-article-invitation"><Link href="/contact">Request a Review →</Link></div>
      {related.length > 0 && <section className="sa-related"><h2>Related thinking</h2><div className="sa-grid sa-grid-2">{related.map(item => <article className="sa-card" key={item.slug}><h3><Link href={"/thinking/" + item.slug}>{item.title}</Link></h3><p>{item.summary}</p><Link href={"/thinking/" + item.slug}>Read Post →</Link></article>)}</div></section>}
      <div className="sa-article-end"><Link href="/thinking">Back to Research &amp; Insights</Link><CopyArticleLink url={canonical} /></div>
    </article>
  </PageShell>;
}





