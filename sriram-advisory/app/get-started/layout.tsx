import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Get Started | Sriram Advisory",
  description:
    "Choose the level of Future of Work intelligence that suits your decision, from a role guide to a structured career assessment.",
};

export default function GetStartedLayout({ children }: { children: ReactNode }) {
  return children;
}
