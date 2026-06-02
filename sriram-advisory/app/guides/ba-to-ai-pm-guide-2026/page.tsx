import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "Business Analyst to AI Product Manager Guide 2026 | Sriram Advisory",
  description:
    "India-first transition guide for Business Analysts moving toward AI Product Manager roles. Includes role reframing, AI PM skill-gap clarity, a 90-day transition playbook, and positioning help. Rs 499.",
};

export default function BAToAIPMGuidePage() {
  return <GuideSalesPage content={guideSalesContent["ba-to-ai-pm-guide-2026"]} />;
}
