import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.entries(guideSalesContent).filter(([, content]) => content.category !== "ai-literacy").map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = guideSalesContent[slug]?.category === "ai-literacy" ? undefined : guideSalesContent[slug];
  if (!content) return { title: "Guide not found" };

  return {
    title: `${content.productName} | Sriram Advisory`,
    description: content.heroSummary,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: {
      title: `${content.productName} | Sriram Advisory`,
      description: content.heroSummary,
      type: "website",
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const content = guideSalesContent[slug]?.category === "ai-literacy" ? undefined : guideSalesContent[slug];
  if (!content) notFound();
  return <GuideSalesPage content={content} />;
}
