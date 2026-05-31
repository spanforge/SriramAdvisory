import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "Business Analyst Survival Guide 2026 | Sriram Advisory",
  description:
    "India-first guide for Business Analysts navigating AI compression. Includes role-risk clarity, a 60-day upgrade direction, GCC and product-side positioning help, and practical next steps. Rs 499.",
};

export default function BusinessAnalystSurvivalGuidePage() {
  return (
    <GuideSalesPage content={guideSalesContent["business-analyst-survival-guide-2026"]} />
  );
}
