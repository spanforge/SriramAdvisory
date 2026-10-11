import type { Metadata } from "next";
import { PageShell, Hero, Section } from "@/components/AdvisoryUI";
import InsightsDirectory from "@/components/InsightsDirectory";
import { copy } from "@/lib/positioning";
import type { SearchParameters } from "@/lib/directory";
export const metadata: Metadata = { title: "Thinking on Work and Technology | Sriram Advisory", description: copy.thinking.summary, alternates: { canonical: "/insights" } };
export default async function DirectoryPage({ searchParams }: { searchParams: Promise<SearchParameters> }) {
  const params = await searchParams;
  return <PageShell><Hero title={copy.thinking.title} body={copy.thinking.summary} primary={{ label: "Browse the thinking", href: "#directory" }} />
    <Section id="directory" title="All thinking"><InsightsDirectory params={params} /></Section></PageShell>;
}
