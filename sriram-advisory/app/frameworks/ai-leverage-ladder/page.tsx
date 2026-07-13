import FrameworkDetailPage from "@/components/FrameworkDetailPage";
import { getFrameworkBySlug } from "@/lib/frameworkCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Leverage Ladder | Sriram Advisory",
  description:
    "Public overview of the AI Leverage Ladder, Sriram Advisory's framework for moving from tool use to stronger professional leverage.",
};

export default function AiLeverageLadderPage() {
  return <FrameworkDetailPage framework={getFrameworkBySlug("ai-leverage-ladder")} />;
}
