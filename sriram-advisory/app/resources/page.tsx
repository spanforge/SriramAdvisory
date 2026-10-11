import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Hero, Section } from "@/components/AdvisoryUI";
import ResourceDirectory from "@/components/ResourceDirectory";
import { copy } from "@/lib/positioning";
import type { SearchParameters } from "@/lib/directory";
export const metadata: Metadata = { title: "Consulting Tools, Examples and Career Resources | Sriram Advisory", description: copy.resources.summary, alternates: { canonical: "/resources" } };
export default async function DirectoryPage({ searchParams }: { searchParams: Promise<SearchParameters> }) {
  const params = await searchParams;
  return <PageShell><Hero title={copy.resources.title} body={copy.resources.summary} primary={{ label: "Browse resources", href: "#directory" }} />
    <Section id="directory" title="The current collection"><ResourceDirectory params={params} /></Section><Section title="Working through a career decision?" intro="Visit Career Intelligence for assessments and resources focused on role change, positioning and practical next steps."><Link href="/careers">Explore Career Intelligence →</Link></Section></PageShell>;
}
