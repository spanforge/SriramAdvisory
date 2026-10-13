import { track as vercelTrack } from "@vercel/analytics";

export const reviewPlacements = ["navigation", "hero", "closing", "decision-idea", "decision-market", "decision-distribution", "decision-adoption", "article"] as const;
const eventNames = new Set(["review_cta_click", "enquiry_start", "enquiry_success"]);
const publicPaths = new Set(["/", "/work-with-sriram", "/about", "/thinking", "/contact"]);

// Do not collect search terms, arbitrary slugs, checkout state or URL fragments.
export function sanitiseAnalyticsUrl(value: string): string | null {
  try {
    const url = new URL(value);
    if (publicPaths.has(url.pathname)) return `${url.origin}${url.pathname}`;
    if (/^\/thinking\/[^/]+$/u.test(url.pathname)) return `${url.origin}/thinking/article`;
    return null;
  } catch { return null; }
}

export function reviewEvent(name: unknown, properties?: Record<string, unknown>) {
  if (typeof name !== "string" || !eventNames.has(name)) return null;
  if (name !== "review_cta_click") return { name, properties: {} };
  const placement = properties?.placement;
  if (typeof placement !== "string" || !reviewPlacements.includes(placement as typeof reviewPlacements[number])) return null;
  return { name, properties: { placement } };
}

// Existing unrelated payment/assessment call sites are deliberately ignored.
export function track(name: unknown, properties?: Record<string, unknown>): void {
  const event = reviewEvent(name, properties);
  if (!event || typeof window === "undefined") return;
  const url = sanitiseAnalyticsUrl(window.location.href);
  if (!url) return;
  window.dispatchEvent(new CustomEvent("sriram:review-event", { detail: event }));
  if (process.env.NEXT_PUBLIC_REVIEW_ANALYTICS !== "1" || !window.va) return;
  try { vercelTrack(event.name, event.properties); } catch { /* Measurement must not interrupt an enquiry. */ }
}
