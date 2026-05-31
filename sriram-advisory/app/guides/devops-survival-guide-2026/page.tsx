import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "DevOps Survival Guide 2026 | Sriram Advisory",
  description:
    "India-first guide for DevOps engineers navigating AI-driven compression of pipeline work. Includes role-risk clarity, a 60-day direction, and stronger platform positioning guidance. Rs 499.",
};

export default function DevopsSurvivalGuidePage() {
  return <GuideSalesPage content={guideSalesContent["devops-survival-guide-2026"]} />;
}
