export type SearchParameters = Record<string, string | string[] | undefined>;
export function first(value: string | string[] | undefined) { return typeof value === "string" ? value : value?.[0] ?? ""; }
export function normaliseSearch(value: string) { return Array.from(value.trim().replace(/\s+/gu, " ")).slice(0, 100).join(""); }
export function matchesSearch(text: string, query: string) {
  const haystack = text.toLocaleLowerCase();
  return normaliseSearch(query).toLocaleLowerCase().split(" ").filter(Boolean).every(word => haystack.includes(word));
}
export function paginate<T>(records: T[], requested: string, size = 12) {
  const pages = Math.max(1, Math.ceil(records.length / size));
  const numeric = /^[1-9]\d*$/.test(requested) ? Number(requested) : 1;
  const page = Math.min(Number.isSafeInteger(numeric) ? numeric : 1, pages);
  return { items: records.slice((page - 1) * size, page * size), page, pages, count: records.length };
}
export function directoryHref(path: string, q: string, filterKey: string, filter: string, page = 1, extraParams: Record<string, string> = {}) {
  const params = new URLSearchParams(extraParams);
  if (q) params.set("q", q);
  if (filter !== "all") params.set(filterKey, filter);
  if (page > 1) params.set("page", String(page));
  return `${path}${params.size ? `?${params}` : ""}`;
}
