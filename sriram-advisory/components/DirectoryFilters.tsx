"use client";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { directoryHref } from "@/lib/directory";
export default function DirectoryFilters({ path, q, filterKey, filter, options, label, extraParams = {} }: { path: string; q: string; filterKey: string; filter: string; options: string[]; label: string; extraParams?: Record<string, string> }) {
  const router = useRouter();
  const [draft, setDraft] = useState(q);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const query = String(values.get("q") ?? "");
    const nextFilter = String(values.get(filterKey) ?? "all");
    // Leave the cached prior route in its URL-backed state before navigation.
    setDraft(q);
    router.push(directoryHref(path, query, filterKey, nextFilter, 1, extraParams));
  }
  function change(event: FormEvent<HTMLSelectElement>) {
    const form = event.currentTarget.form;
    const search = form ? String(new FormData(form).get("q") ?? "") : q;
    setDraft(q);
    router.push(directoryHref(path, search, filterKey, event.currentTarget.value, 1, extraParams));
  }
  return <details className="sa-directory-controls" open><summary>Search and filters</summary>
    <form className="sa-filters" action={path} method="get" onSubmit={submit}>
      {Object.entries(extraParams).map(([name, value]) => <input key={name} type="hidden" name={name} value={value} />)}
      <label htmlFor={`${filterKey}-search`}>Search<input key={q} id={`${filterKey}-search`} name="q" type="search" value={draft} onChange={event => setDraft(event.target.value)} maxLength={100} /></label>
      <label htmlFor={`${filterKey}-select`}>{label}<select key={filter} id={`${filterKey}-select`} name={filterKey} defaultValue={filter} onChange={change}><option value="all">All</option>{options.map(value => <option key={value} value={value}>{value}</option>)}</select></label>
      <button type="submit" className="sa-btn sa-btn-secondary">Search</button>
    </form>
  </details>;
}
