"use client";

import EnquiryForm, { type SubmissionResult } from "./EnquiryForm";
import { type Enquiry } from "@/lib/enquiryValidation";

// Reuse the existing free-guide form's endpoint and submission protocol.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojzewly";

async function submitEnquiry(payload: Enquiry & { website: string }, key: string): Promise<SubmissionResult> {
  const formData = new FormData();
  for (const [name, value] of Object.entries(payload)) {
    if (name !== "website") formData.append(name, String(value));
  }
  formData.append("_gotcha", payload.website);
  formData.append("_subject", "Sriram Advisory enquiry");
  formData.append("enquiryReference", key);
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) return { ok: false, code: response.status === 429 ? "rate_limited" : "provider_error" };
  const result = await response.json();
  if (result?.ok !== true) return { ok: false, code: "provider_error" };
  return { ok: true, enquiryId: key };
}

export default function FormspreeEnquiryForm({ initialInterest }: { initialInterest?: string }) {
  return <EnquiryForm initialInterest={initialInterest} onSubmitEnquiry={submitEnquiry} />;
}
