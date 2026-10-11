import { enabledInterests, isInterest, type Interest } from "./positioning";

export const NOTICE_VERSION = "2026-10-11";
export const MAX_ENQUIRY_BYTES = 32 * 1024;
export const sourceIds = ["contact", "home", "work-with-sriram", "business", "careers", "problem-solving-sprint", "implementation-support", "team-workshops", "health-check", "thinking"] as const;
export type Enquiry = {
  name: string; email: string; organisation: string; interest: Interest;
  challenge: string; attempts: string; outcome: string;
  privacyAcknowledged: true; source: string;
};
export const formErrors = {
  name: "Please enter your name.", email: "Enter a valid email address.",
  challenge: "Please describe the situation in at least 20 characters.",
  length: "Please keep this answer within the stated limit.",
  privacyAcknowledged: "Please read and acknowledge the Privacy Notice.",
  rate: "Too many attempts. Please wait and try again, or email Sriram directly.",
  summary: "Please check the highlighted fields.",
};
const limits = { name: [2, 100], email: [1, 254], organisation: [0, 120], challenge: [20, 2000], attempts: [0, 1000], outcome: [0, 1000] } as const;
export function codePointLength(value: string) { return Array.from(value).length; }
export function validateEnquiry(input: unknown): { payload?: Enquiry; errors: Record<string, string>; honeypot: boolean } {
  const errors: Record<string, string> = {};
  if (!input || typeof input !== "object" || Array.isArray(input)) return { errors: { form: formErrors.summary }, honeypot: false };
  const raw = input as Record<string, unknown>;
  const allowed = new Set([...Object.keys(limits), "interest", "privacyAcknowledged", "source", "website"]);
  if (Object.keys(raw).some(key => !allowed.has(key))) errors.form = "Unsupported form fields.";
  const values: Record<string, string> = {};
  for (const [key, [min, max]] of Object.entries(limits)) {
    if (raw[key] !== undefined && typeof raw[key] !== "string") { errors[key] = formErrors.summary; continue; }
    const value = typeof raw[key] === "string" ? raw[key].trim() : "";
    values[key] = value;
    if (codePointLength(value) > max) errors[key] = formErrors.length;
    else if (codePointLength(value) < min) errors[key] = key === "name" ? formErrors.name : key === "email" ? formErrors.email : formErrors.challenge;
  }
  // Preserve local-part case for delivery. No HTML is interpreted.
  if (!errors.email && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(values.email) || /[\r\n\u0000]/u.test(values.email))) errors.email = formErrors.email;
  if (!isInterest(raw.interest) || !enabledInterests().includes(raw.interest)) errors.interest = "Please choose what you would like to discuss.";
  if (raw.privacyAcknowledged !== true) errors.privacyAcknowledged = formErrors.privacyAcknowledged;
  if (raw.website !== undefined && typeof raw.website !== "string") errors.form = formErrors.summary;
  if (raw.source !== undefined && typeof raw.source !== "string") errors.form = formErrors.summary;
  const source = sourceIds.includes(raw.source as typeof sourceIds[number]) ? String(raw.source) : "contact";
  return {
    errors, honeypot: typeof raw.website === "string" && raw.website.length > 0,
    ...(Object.keys(errors).length ? {} : { payload: { ...values, interest: raw.interest as Interest, privacyAcknowledged: true, source } as Enquiry }),
  };
}
export function canonicalEnquiry(payload: Enquiry) {
  return JSON.stringify([payload.name, payload.email, payload.organisation, payload.interest, payload.challenge, payload.attempts, payload.outcome, payload.privacyAcknowledged, payload.source]);
}
