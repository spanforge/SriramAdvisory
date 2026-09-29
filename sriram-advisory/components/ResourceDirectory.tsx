"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ResourceCard } from "@/components/AdvisoryUI";
import { resources, type PillarId } from "@/lib/advisoryContent";

const topicLabels: Record<string, string> = { career: "Careers", business: "Business", "technology-digital-safety": "Technology & safety", education: "Education" };
const availableTopics = [...new Set(resources.map(resource => resource.topic))];
const availableFormats = [...new Set(resources.map(resource => resource.format))];
const availableAccess = [...new Set(resources.map(resource => resource.access))];

export default function ResourceDirectory() {
  const params = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const valid = (options: string[], value: string | null) => value && options.includes(value) ? value : "all";
  const [q, setQ] = useState(params.get("q") ?? "");
  const [topic, setTopic] = useState(valid(availableTopics, params.get("topic")));
  const [format, setFormat] = useState(valid(availableFormats, params.get("format")));
  const [access, setAccess] = useState(valid(availableAccess, params.get("access")));

  useEffect(() => {
    const timeout = setTimeout(() => {
      const next = new URLSearchParams();
      if (q.trim()) next.set("q", q.trim());
      if (topic !== "all") next.set("topic", topic);
      if (format !== "all") next.set("format", format);
      if (access !== "all") next.set("access", access);
      router.replace(`${path}${next.size ? `?${next}` : ""}`, { scroll: false });
    }, 200);
    return () => clearTimeout(timeout);
  }, [q, topic, format, access, path, router]);

  const found = useMemo(() => resources.filter(resource => {
    const text = `${resource.title} ${resource.summary} ${resource.role}`.toLowerCase();
    return (!q.trim() || text.includes(q.trim().toLowerCase())) &&
      (topic === "all" || resource.topic === topic as PillarId) &&
      (format === "all" || resource.format === format) &&
      (access === "all" || resource.access === access);
  }).sort((a, b) => a.featuredRank - b.featuredRank || b.publishedAt.localeCompare(a.publishedAt)), [q, topic, format, access]);

  const clear = () => { setQ(""); setTopic("all"); setFormat("all"); setAccess("all"); };
  return <>
    <div className="sa-filters" style={{ gridTemplateColumns: `2fr repeat(${Number(availableTopics.length > 1) + Number(availableFormats.length > 1) + Number(availableAccess.length > 1)}, 1fr)` }}>
      <label>Search<input type="search" value={q} onChange={event => setQ(event.target.value)} placeholder="Search title, summary or role" /></label>
      {availableTopics.length > 1 && <label>Topic<select value={topic} onChange={event => setTopic(event.target.value)}><option value="all">All topics</option>{availableTopics.map(value => <option value={value} key={value}>{topicLabels[value]}</option>)}</select></label>}
      {availableFormats.length > 1 && <label>Format<select value={format} onChange={event => setFormat(event.target.value)}><option value="all">All formats</option>{availableFormats.map(value => <option value={value} key={value}>{value}</option>)}</select></label>}
      {availableAccess.length > 1 && <label>Access<select value={access} onChange={event => setAccess(event.target.value)}><option value="all">All access</option>{availableAccess.map(value => <option value={value} key={value}>{value}</option>)}</select></label>}
    </div>
    <p className="sa-help" aria-live="polite">{found.length} resource{found.length === 1 ? "" : "s"} found</p>
    {found.length ? <div className="sa-grid">{found.map(resource => <ResourceCard key={resource.id} resource={resource} />)}</div> : <div className="sa-empty"><p>No resources match your selection.</p><button className="sa-btn sa-btn-secondary" onClick={clear}>Clear Filters</button></div>}
  </>;
}
