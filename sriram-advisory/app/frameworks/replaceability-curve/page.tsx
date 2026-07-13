import FrameworkDetailPage from "@/components/FrameworkDetailPage";
import { getFrameworkBySlug } from "@/lib/frameworkCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Replaceability Curve | Sriram Advisory",
  description:
    "Public overview of the Replaceability Curve, Sriram Advisory's framework for explaining quiet value erosion in professional work.",
};

export default function ReplaceabilityCurvePage() {
  return <FrameworkDetailPage framework={getFrameworkBySlug("replaceability-curve")} />;
}
