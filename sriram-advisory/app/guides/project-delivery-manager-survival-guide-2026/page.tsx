import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "Project Manager / Delivery Manager Survival Guide 2026 | Sriram Advisory",
  description:
    "India-first career guide for Project Managers and Delivery Managers navigating AI-driven compression of coordination-heavy work. Includes role-risk clarity, a 60-day repositioning direction, and stronger project/delivery positioning guidance. Rs 499.",
};

export default function ProjectDeliveryManagerSurvivalGuidePage() {
  return <GuideSalesPage content={guideSalesContent["project-delivery-manager-survival-guide-2026"]} />;
}
