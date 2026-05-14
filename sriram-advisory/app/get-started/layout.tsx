import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Get Started | Sriram Advisory",
  description:
    "Get your personalised AI Career Risk Score. Choose the level of depth that suits you — from a quick guide to a full SA-AIRS™ audit delivered within 24 hours.",
};

export default function GetStartedLayout({ children }: { children: ReactNode }) {
  return children;
}
