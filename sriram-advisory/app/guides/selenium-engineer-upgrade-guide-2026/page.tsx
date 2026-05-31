import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "Selenium Engineer Upgrade Guide 2026 | Sriram Advisory",
  description:
    "India-first guide for Selenium engineers navigating the Playwright and AI-era shift. Includes upgrade direction, stronger automation positioning, and practical next steps. Rs 499.",
};

export default function SeleniumEngineerUpgradeGuidePage() {
  return (
    <GuideSalesPage content={guideSalesContent["selenium-engineer-upgrade-guide-2026"]} />
  );
}
