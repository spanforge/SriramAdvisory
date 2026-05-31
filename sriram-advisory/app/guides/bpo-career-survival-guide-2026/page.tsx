import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "BPO & Customer Support Career Survival Guide 2026 | Sriram Advisory",
  description:
    "India-first guide for BPO and customer support professionals navigating AI disruption. Includes role-risk clarity, a 30-day repositioning direction, and practical next steps. Rs 499.",
};

export default function BPOCareerSurvivalGuidePage() {
  return <GuideSalesPage content={guideSalesContent["bpo-career-survival-guide-2026"]} />;
}
