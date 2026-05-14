import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SA-AIRS™ Assessment | Sriram Advisory",
  description:
    "Get your personalised AI Career Risk Score. Scored against the SA-AIRS™ methodology by Sriram.",
};

export default function SnapshotLayout({ children }: { children: ReactNode }) {
  return children;
}
