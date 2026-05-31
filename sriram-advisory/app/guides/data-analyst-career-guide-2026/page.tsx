import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "Data Analyst Career Guide 2026 | Sriram Advisory",
  description:
    "India-first guide for analysts navigating AI-driven role change. Includes role-risk clarity, a 90-day action direction, stronger positioning guidance, and practical next steps. Rs 499.",
};

export default function DataAnalystCareerGuidePage() {
  return (
    <GuideSalesPage content={guideSalesContent["data-analyst-career-guide-2026"]} />
  );
}
