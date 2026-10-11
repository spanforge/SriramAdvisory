import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import DirectoryFilters from "@/components/DirectoryFilters";
import DirectoryPagination from "@/components/DirectoryPagination";
import { categories, getPublishedArticles } from "@/lib/thinking";
import { first, normaliseSearch, matchesSearch, paginate, type SearchParameters } from "@/lib/directory";
export default function InsightsDirectory({ params }: { params: SearchParameters }) {
  const articles = getPublishedArticles();
  const options = [...new Set([...categories, ...articles.map(a => a.category)])];
  const oldTopics: Record<string, string> = { business: "Work and organisations", career: "Career decisions", "technology-digital-safety": "Technology in practice", education: "Learning and capability" };
  const requested = first(params.category) || oldTopics[first(params.topic)];
  const category = options.includes(requested) ? requested : "all";
  const q = normaliseSearch(first(params.q));
  const found = articles.filter(a => (category === "all" || a.category === category) && matchesSearch(`${a.title} ${a.summary} ${a.body}`, q)).sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
  const results = paginate(found, first(params.page));
  return <><DirectoryFilters key={`${q}:${category}`} path="/insights" q={q} filterKey="category" filter={category} options={options} label="Category" />
    <p className="sa-help" role="status">{results.count} article{results.count === 1 ? "" : "s"} found</p>
    {results.count ? <div className="sa-grid">{results.items.map(article => <ArticleCard key={article.slug} article={article} />)}</div> : <div className="sa-empty"><p>No articles match this search. Try a different term or view all thinking.</p><Link href="/insights">Clear search</Link></div>}
    <DirectoryPagination path="/insights" q={q} filterKey="category" filter={category} page={results.page} pages={results.pages} /></>;
}
