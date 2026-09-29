"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LinkCard } from "@/components/AdvisoryUI";
import { relatedInsights } from "@/lib/advisoryContent";

const topicLabels: Record<string, string> = { career: "Careers", business: "Business", "technology-digital-safety": "Technology & safety", education: "Education" };
const availableTopics = [...new Set(relatedInsights.map(article => article.topic))];

export default function InsightsDirectory() {
  const params = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const requestedTopic = params.get("topic");
  const initialTopic = availableTopics.some(value => value === requestedTopic) ? requestedTopic! : "all";
  const [q, setQ] = useState(params.get("q") ?? "");
  const [topic, setTopic] = useState(initialTopic);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const next = new URLSearchParams();
      if (q.trim()) next.set("q", q.trim());
      if (topic !== "all") next.set("topic", topic);
      router.replace(`${path}${next.size ? `?${next}` : ""}`, { scroll: false });
    }, 200);
    return () => clearTimeout(timeout);
  }, [q, topic, path, router]);

  const found = useMemo(() => relatedInsights.filter(article =>
    (topic === "all" || article.topic === topic) &&
    (!q.trim() || `${article.title} ${article.summary}`.toLowerCase().includes(q.trim().toLowerCase()))
  ).sort((a, b) => b.date.localeCompare(a.date)), [q, topic]);

  return <>
    <div className="sa-filters" style={{ gridTemplateColumns: availableTopics.length > 1 ? "2fr 1fr" : "1fr" }}>
      <label>Search<input type="search" value={q} onChange={event => setQ(event.target.value)} placeholder="Search title or summary" /></label>
      {availableTopics.length > 1 && <label>Topic<select value={topic} onChange={event => setTopic(event.target.value)}><option value="all">All topics</option>{availableTopics.map(value => <option value={value} key={value}>{topicLabels[value]}</option>)}</select></label>}
    </div>
    <p className="sa-help" aria-live="polite">{found.length} insight{found.length === 1 ? "" : "s"} found</p>
    {found.length ? <div className="sa-grid">{found.map(article => <LinkCard key={article.slug} meta={`${topicLabels[article.topic]} · ${new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeZone: "Asia/Kolkata" }).format(new Date(article.date))}`} title={article.title} body={article.summary} href={`/insights/${article.slug}`} cta="Read insight" />)}</div> : <div className="sa-empty"><p>No insights match your selection.</p><button className="sa-btn sa-btn-secondary" onClick={() => { setQ(""); setTopic("all"); }}>Clear Filters</button></div>}
  </>;
}
