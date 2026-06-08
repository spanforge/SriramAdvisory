import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "Cloud Engineer AI Survival Guide 2026 | Sriram Advisory",
  description:
    "India-first guide for Cloud Engineers navigating AI-era infrastructure shifts. Includes role-risk clarity, a 90-day transition direction, stronger positioning guidance, and practical next steps. Rs 499.",
};

export default function CloudEngineerAISurvivalGuidePage() {
  return (
    <GuideSalesPage content={guideSalesContent["cloud-engineer-ai-survival-guide-2026"]} />
  );
}
