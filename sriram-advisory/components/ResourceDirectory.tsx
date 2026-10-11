import Link from "next/link";
import { ResourceCard } from "@/components/AdvisoryUI";
import DirectoryFilters from "@/components/DirectoryFilters";
import DirectoryPagination from "@/components/DirectoryPagination";
import { resources } from "@/lib/advisoryContent";
import { first, normaliseSearch, matchesSearch, paginate, directoryHref, type SearchParameters } from "@/lib/directory";
export default function ResourceDirectory({ params }: { params: SearchParameters }) {
  const options = [...new Set(resources.map(resource => resource.format))];
  const requested = first(params.type) || first(params.format);
  const type = options.includes(requested as typeof options[number]) ? requested : "all";
  const q = normaliseSearch(first(params.q));
  const requestedCollection = first(params.collection);
  const collection = ["consulting", "career"].includes(requestedCollection) ? requestedCollection : "all";
  const extraParams: Record<string, string> = collection === "all" ? {} : { collection };
  const found = resources.filter(resource => (collection === "all" || resource.topic === (collection === "consulting" ? "business" : "career")) && (type === "all" || resource.format === type) && matchesSearch(`${resource.title} ${resource.summary}`, q)).sort((a, b) => a.featuredRank - b.featuredRank);
  const results = paginate(found, first(params.page));
  return <><nav className="sa-collection-links" aria-label="Resource collections">{[["all", "All resources"], ["consulting", "Consulting tools and examples"], ["career", "Career resources"]].map(([value, label]) => <Link key={value} aria-current={collection === value ? "page" : undefined} href={directoryHref("/resources", q, "type", "all", 1, value === "all" ? {} : { collection: value })}>{label}</Link>)}</nav><DirectoryFilters key={`${q}:${type}:${collection}`} path="/resources" q={q} filterKey="type" filter={type} options={options} label="Resource type" extraParams={extraParams} />
    <p className="sa-help" role="status">{results.count} resource{results.count === 1 ? "" : "s"} found</p>
    {results.count ? <div className="sa-grid">{results.items.map(resource => <ResourceCard key={resource.id} resource={resource} />)}</div> : <div className="sa-empty"><p>No resources match these filters. Clear filters to see the full collection.</p><Link href="/resources">Clear filters</Link></div>}
    <DirectoryPagination path="/resources" q={q} filterKey="type" filter={type} page={results.page} pages={results.pages} extraParams={extraParams} /></>;
}
