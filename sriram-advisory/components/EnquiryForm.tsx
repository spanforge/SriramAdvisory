"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { interestLabels, isInterest, copy, siteIdentity, type Interest } from "@/lib/positioning";
import { validateEnquiry, formErrors, type Enquiry } from "@/lib/enquiryValidation";

export type SubmissionResult = { ok: true; enquiryId: string } | { ok: false; code: string; fieldErrors?: Record<string, string> };
type Fields = { name: string; email: string; organisation: string; interest: Interest; challenge: string; attempts: string; outcome: string; privacyAcknowledged: boolean; source: string; website: string };
type Props = { initialInterest?: string; source?: string; onSubmitEnquiry: (payload: Enquiry & { website: string }, key: string) => Promise<SubmissionResult> };

export default function EnquiryForm({ initialInterest, source = "contact", onSubmitEnquiry }: Props) {
  const options: Interest[] = ["idea", "market", "distribution", "adoption", "unsure"];
  const [form, setForm] = useState<Fields>({ name: "", email: "", organisation: "", interest: isInterest(initialInterest) && options.includes(initialInterest) ? initialInterest : "unsure", challenge: "", attempts: "", outcome: "", privacyAcknowledged: false, source, website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "failure">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [failure, setFailure] = useState("");
  const [optionalOpen, setOptionalOpen] = useState(false);
  const key = useRef<string | null>(null);
  const inFlight = useRef(false);
  const success = useRef<HTMLHeadingElement>(null);
  useEffect(() => { if (status === "success") success.current?.focus(); }, [status]);
  function change(field: keyof Fields, value: string | boolean) {
    key.current = null; // Edited payload is a new submission; uncertain retries keep the old UUID.
    setForm(previous => ({ ...previous, [field]: value }));
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const result = validateEnquiry(form);
    setErrors(result.errors);
    if (!result.payload) { requestAnimationFrame(() => document.getElementById("enquiry-errors")?.focus()); return; }
    if (!key.current) key.current = crypto.randomUUID();
    inFlight.current = true; setStatus("sending"); setFailure("");
    try {
      const response = await onSubmitEnquiry({ ...result.payload, website: form.website }, key.current);
      if (response.ok) { key.current = null; setStatus("success"); }
      else {
        setStatus("failure");
        if (response.fieldErrors) { setErrors(response.fieldErrors); requestAnimationFrame(() => document.getElementById("enquiry-errors")?.focus()); }
        setFailure(response.code === "rate_limited" ? formErrors.rate : response.code === "payload_too_large" ? formErrors.length : response.code === "unsupported_request" ? "This request could not be accepted. Your text is still here. Please email Sriram directly." : copy.contact.failure);
      }
    } catch { setStatus("failure"); setFailure(copy.contact.failure); }
    finally { inFlight.current = false; }
  }
  const labels: Record<string, string> = { name: "Your name", email: "Email address", organisation: "Organisation", interest: "What would you like to discuss?", challenge: "What is happening?", attempts: "What have you already tried?", outcome: "What would a useful outcome look like?", privacyAcknowledged: "Privacy Notice", form: "Enquiry" };
  const fields = [
    { name: "name", label: labels.name, max: 100, required: true, type: "text", autoComplete: "name" },
    { name: "email", label: labels.email, max: 254, required: true, type: "email", autoComplete: "email" },
    { name: "organisation", label: labels.organisation, max: 120, required: false, type: "text", autoComplete: "organization" },
    { name: "challenge", label: labels.challenge, max: 2000, required: true, type: "textarea", autoComplete: "off" },
    { name: "attempts", label: labels.attempts, max: 1000, required: false, type: "textarea", autoComplete: "off" },
    { name: "outcome", label: labels.outcome, max: 1000, required: false, type: "textarea", autoComplete: "off" },
  ];
  function renderField(field: typeof fields[number]) { return <div className="sa-field" key={field.name}>
        {field.name === "challenge" && <div className="sa-field"><label htmlFor="enquiry-interest">{labels.interest} *</label><select id="enquiry-interest" value={form.interest} onChange={event => change("interest", event.target.value)} aria-invalid={Boolean(errors.interest)} aria-describedby={errors.interest ? "error-interest" : undefined}>{options.map(interest => <option key={interest} value={interest}>{interestLabels[interest]}</option>)}</select>{errors.interest && <p className="sa-error" id="error-interest">{errors.interest}</p>}</div>}
        <label htmlFor={`enquiry-${field.name}`}>{field.label}{field.required ? " *" : " (optional)"}</label>
        {field.type === "textarea" ? <textarea id={`enquiry-${field.name}`} name={field.name} required={field.required} value={String(form[field.name as keyof Fields])} onChange={event => change(field.name as keyof Fields, event.target.value)} aria-invalid={Boolean(errors[field.name])} aria-describedby={`${field.name}-hint${errors[field.name] ? ` error-${field.name}` : ""}`} /> : <input id={`enquiry-${field.name}`} name={field.name} type={field.type} autoComplete={field.autoComplete} required={field.required} value={String(form[field.name as keyof Fields])} onChange={event => change(field.name as keyof Fields, event.target.value)} aria-invalid={Boolean(errors[field.name])} aria-describedby={`${field.name}-hint${errors[field.name] ? ` error-${field.name}` : ""}`} />}
        <p className="sa-help" id={`${field.name}-hint`}>{field.name === "outcome" ? "If you are not sure yet, you can leave this blank. " : ""}Maximum {field.max} characters.</p>
        {errors[field.name] && <p className="sa-error" id={`error-${field.name}`}>{errors[field.name]}</p>}
      </div>; }
  if (status === "success") return <div className="sa-status" aria-live="polite"><h2 ref={success} tabIndex={-1}>Thank you. Your enquiry has been received.</h2><p>Sriram will review it and reply by email about a suitable next step.</p></div>;
  return <form className="sa-form" onSubmit={submit} noValidate>
    {Object.keys(errors).length > 0 && <div id="enquiry-errors" className="sa-error-summary" role="alert" tabIndex={-1}><strong>{formErrors.summary}</strong><ul>{Object.entries(errors).map(([field, error]) => <li key={field}><a href={`#enquiry-${field === "form" ? "name" : field}`}>{labels[field] ?? field}: {error}</a></li>)}</ul></div>}
    <p className="sa-help">Fields marked * are required. Please do not send confidential material.</p>
    <fieldset className="sa-enquiry-fields" disabled={status === "sending"}>
      {fields.slice(0, 4).map(renderField)}
      <details className="sa-optional-fields" open={optionalOpen || Boolean(errors.attempts || errors.outcome)} onToggle={event => setOptionalOpen(event.currentTarget.open)}><summary>Add what you have tried and the outcome you want (optional)</summary><div>{fields.slice(4).map(renderField)}</div></details>
      <div className="sa-honeypot" aria-hidden="true"><label>Website<input name="website" value={form.website} onChange={event => change("website", event.target.value)} tabIndex={-1} autoComplete="off" /></label></div>
      <label className="sa-consent" htmlFor="enquiry-privacyAcknowledged"><input id="enquiry-privacyAcknowledged" type="checkbox" checked={form.privacyAcknowledged} onChange={event => change("privacyAcknowledged", event.target.checked)} aria-invalid={Boolean(errors.privacyAcknowledged)} aria-describedby={errors.privacyAcknowledged ? "error-privacyAcknowledged" : undefined} /><span>I have read the <Link href="/privacy">Privacy Notice</Link> and understand how this enquiry will be handled.</span></label>
      {errors.privacyAcknowledged && <p className="sa-error" id="error-privacyAcknowledged">{errors.privacyAcknowledged}</p>}
    </fieldset>
    <div aria-live="polite">{status === "sending" && <p>Sending…</p>}{status === "failure" && <p className="sa-error">{failure}</p>}</div>
    <button className="sa-btn sa-btn-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"}</button>
    <p className="sa-email-fallback">Prefer email? <a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a>.</p>
  </form>;
}

