import type { Metadata } from "next";
import GuideSalesPage from "@/components/GuideSalesPage";
import { guideSalesContent } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "HR Recruiter Survival Guide 2026 | Sriram Advisory",
  description:
    "India-first guide for HR Recruiters navigating AI automation. Includes SA-AIRS risk clarity, an 18-month repositioning path, recruiting workflow upgrade direction, and practical next steps. Rs 499.",
};

export default function HRRecruiterSurvivalGuidePage() {
  return (
    <GuideSalesPage content={guideSalesContent["hr-recruiter-survival-guide-2026"]} />
  );
}
