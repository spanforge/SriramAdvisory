import FrameworkDetailPage from "@/components/FrameworkDetailPage";
import { getFrameworkBySlug } from "@/lib/frameworkCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SA-AIRS | Sriram Advisory",
  description:
    "Public overview of SA-AIRS, Sriram Advisory's role exposure framework for understanding AI, automation, market pressure, and career durability.",
};

export default function SaAirsPage() {
  return <FrameworkDetailPage framework={getFrameworkBySlug("sa-airs")} />;
}
