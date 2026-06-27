import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "Fresher AI Survival Guide | Sriram Advisory",
  description:
    "India-first guide for freshers navigating AI-era entry-level hiring. Includes first-job positioning, AI tool-use direction, proof-building guidance, and practical next steps. Rs 499.",
};

export default function FresherAISurvivalGuidePage() {
  return <GuideSalesPage content={guideSalesContent["fresher-ai-survival-guide"]} />;
}
