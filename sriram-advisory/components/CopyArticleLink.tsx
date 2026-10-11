"use client";
import { useState } from "react";
export default function CopyArticleLink({ url }: { url: string }) {
  const [status, setStatus] = useState("");
  const [failed, setFailed] = useState(false);
  async function copy() { try { await navigator.clipboard.writeText(url); setStatus("Link copied"); setFailed(false); } catch { setFailed(true); setStatus("Copy the link below."); } }
  return <div><button className="sa-btn sa-btn-secondary" onClick={copy} type="button">Copy link</button><span className="sa-help" aria-live="polite">{status}</span>{failed && <input aria-label="Canonical article link" readOnly value={url} onFocus={event => event.currentTarget.select()} />}</div>;
}
