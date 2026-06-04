import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "Data Engineer AI Survival Guide 2026 | Sriram Advisory",
  description:
    "India-first guide for Data Engineers moving into AI-native data engineering. Includes model-ready data reliability, GenAI data systems, portfolio direction, and a 90-day transition playbook. Rs 499.",
};

export default function DataEngineerAISurvivalGuidePage() {
  return <GuideSalesPage content={guideSalesContent["data-engineer-ai-survival-guide-2026"]} />;
}
