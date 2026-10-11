import Link from "next/link";
import { directoryHref } from "@/lib/directory";
export default function DirectoryPagination({ path, q, filterKey, filter, page, pages, extraParams = {} }: { path: string; q: string; filterKey: string; filter: string; page: number; pages: number; extraParams?: Record<string, string> }) {
  if (pages <= 1) return null;
  return <nav className="sa-pagination" aria-label="Pagination">
    {page > 1 ? <Link rel="prev" href={directoryHref(path, q, filterKey, filter, page - 1, extraParams)}>← Previous</Link> : <span>Previous</span>}
    <span>Page {page} of {pages}</span>
    {page < pages ? <Link rel="next" href={directoryHref(path, q, filterKey, filter, page + 1, extraParams)}>Next →</Link> : <span>Next</span>}
  </nav>;
}
