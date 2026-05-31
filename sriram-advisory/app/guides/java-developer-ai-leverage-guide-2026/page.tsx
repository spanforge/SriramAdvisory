import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "Java Developer AI Leverage Guide 2026 | Sriram Advisory",
  description:
    "India-first guide for Java developers using AI to move into higher-leverage work. Includes role-risk clarity, leverage positioning, and practical next steps. Rs 499.",
};

export default function JavaDeveloperAILeverageGuidePage() {
  return (
    <GuideSalesPage content={guideSalesContent["java-developer-ai-leverage-guide-2026"]} />
  );
}
