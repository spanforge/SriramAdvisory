import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell, Hero, Section, Breadcrumbs, ClosingCTA } from "@/components/AdvisoryUI";
import { consultingResources } from "@/content/consulting-resources";

export function generateStaticParams() { return consultingResources.map(resource => ({ slug: resource.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = consultingResources.find(item => item.slug === slug);
  return resource ? { title: `${resource.title} | Sriram Advisory`, description: resource.summary, alternates: { canonical: `/resources/${slug}` } } : {};
}
export default async function Resource({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = consultingResources.find(item => item.slug === slug);
  if (!resource) notFound();
  return <PageShell><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: resource.title }]} />
    <Hero eyebrow="Free consulting resource" title={resource.title} body={resource.summary} primary={{ label: "Use the resource", href: "#resource-content" }} secondary={{ label: "Discuss your challenge", href: "/contact?interest=general" }} />
    <section className="sa-section" id="resource-content"><div className="sa-wrap sa-prose"><p className="sa-illustrative">{resource.kind === "sample" ? "Fictional worked example — not a client case study or a promise of results." : "A practical starting point. Adapt these prompts to your context; use non-sensitive or redacted information."}</p><p>You can copy these prompts into your own working document. No registration is required.</p></div></section>
    {resource.sections.map((section, index) => <Section key={section.title} title={section.title} intro={section.body} muted={index % 2 === 0}><ul className="sa-resource-prompts">{section.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ul></Section>)}
    <ClosingCTA title="Would an outside perspective help?" body="If these questions expose an issue that is difficult to resolve internally, tell me what is happening. We can establish whether a focused engagement would be useful." label="Discuss your challenge" />
  </PageShell>;
}
