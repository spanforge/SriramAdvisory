import FrameworkDetailPage from "@/components/FrameworkDetailPage";
import { getFrameworkBySlug } from "@/lib/frameworkCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Positioning Audit Framework | Sriram Advisory",
  description:
    "Public overview of the Career Positioning Audit, Sriram Advisory's framework for evaluating professional signal, clarity, and market relevance.",
};

export default function CareerPositioningAuditFrameworkPage() {
  return <FrameworkDetailPage framework={getFrameworkBySlug("career-positioning-audit")} />;
}
