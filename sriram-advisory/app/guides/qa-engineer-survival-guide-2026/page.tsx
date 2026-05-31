import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "QA Engineer Survival Guide 2026 | Sriram Advisory",
  description:
    "India-first guide for QA professionals navigating AI disruption. Includes role-risk clarity, a 90-day upgrade direction, stronger positioning guidance, and practical next steps. Rs 499.",
};

export default function QAEngineerSurvivalGuidePage() {
  return (
    <GuideSalesPage content={guideSalesContent["qa-engineer-survival-guide-2026"]} />
  );
}
