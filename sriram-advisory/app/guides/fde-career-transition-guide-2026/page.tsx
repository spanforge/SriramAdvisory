import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "FDE Career Transition Guide 2026 | Sriram Advisory",
  description:
    "India-first transition guide for FDE professionals navigating AI-era career shifts. Includes role-risk clarity, a 90-day transition direction, stronger positioning guidance, and practical next steps. Rs 499.",
};

export default function FDECareerTransitionGuidePage() {
  return <GuideSalesPage content={guideSalesContent["fde-career-transition-guide-2026"]} />;
}
