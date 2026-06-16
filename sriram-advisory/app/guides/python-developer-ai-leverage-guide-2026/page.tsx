import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "Python Developer AI Leverage Guide 2026 | Sriram Advisory",
  description:
    "India-first guide for Python developers using AI to move into higher-leverage work. Includes role-risk clarity, automation positioning, proof direction, and practical next steps. Rs 499.",
};

export default function PythonDeveloperAILeverageGuidePage() {
  return (
    <GuideSalesPage content={guideSalesContent["python-developer-ai-leverage-guide-2026"]} />
  );
}
