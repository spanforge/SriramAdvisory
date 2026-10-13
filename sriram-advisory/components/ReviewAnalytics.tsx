"use client";
import { Analytics } from "@vercel/analytics/react";
import { sanitiseAnalyticsUrl } from "@/lib/analytics";

export default function ReviewAnalytics({ enabled }: { enabled: boolean }) {
  if (!enabled) return null;
  return <Analytics debug={false} beforeSend={event => {
    const url = sanitiseAnalyticsUrl(event.url);
    return url ? { ...event, url } : null;
  }} />;
}
