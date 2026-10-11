import Link from "next/link";
import type { Article } from "@/lib/thinking";
export default function ArticleCard({ article }: { article: Article }) {
  return <article className="sa-card sa-article-card"><p className="sa-card-meta">{article.category} · {article.readTime}</p><h3><Link href={`/insights/${article.slug}`}>{article.title}</Link></h3><p>{article.summary}</p><Link className="sa-arrow" href={`/insights/${article.slug}`}>Read post <span aria-hidden="true">→</span></Link></article>;
}
