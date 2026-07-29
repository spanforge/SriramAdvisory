import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SA-AIRS Career Risk Audit | Sriram Advisory",
  description:
    "A structured Rs 1,999 career-risk assessment covering role exposure, market pressure, defensibility, and practical next moves.",
};

export default function AirsAssessmentLayout({ children }: { children: ReactNode }) {
  return children;
}
