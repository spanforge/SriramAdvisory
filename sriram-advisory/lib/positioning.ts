import copy from "@/content/site-v21.json";
export { copy };
export const siteIdentity = {
  name: "Sriram Advisory", founder: "Sriram Srinivasan", email: "sriram@sriramadvisory.com",
  origin: "https://www.sriramadvisory.com", tagline: "Look beyond the obvious. Move forward.",
  description: "Helping business owners and leaders see persistent problems differently, uncover overlooked causes and choose practical next steps.",
  // Existing portrait reuse approved by owner on 11 October 2026; null enables text-only fallback.
  portrait: "/sriram.png" as string | null,
  linkedin: "https://www.linkedin.com/in/sriramadvisory/",
};
export const interestLabels = {
  general: "A business or technology challenge", sprint: "Problem-Solving Sprint",
  implementation: "Implementation support", workshop: "Team workshop",
  "health-check": "Delivery Health Check", career: "Career question",
} as const;
export type Interest = keyof typeof interestLabels;
export const services = copy.services;
export const healthCheckEnabled = true;
export function isInterest(value: unknown): value is Interest {
  return typeof value === "string" && Object.hasOwn(interestLabels, value);
}
export function enabledInterests(): Interest[] {
  return (Object.keys(interestLabels) as Interest[]).filter(interest => {
    if (interest === "health-check") return healthCheckEnabled;
    const service = services.find(item => item.interest === interest);
    return !service || service.enabled;
  });
}
export const navigation = [
  { label: "Work with Sriram", href: "/work-with-sriram" },
  { label: "Thinking", href: "/insights" }, { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" }, { label: "Discuss your challenge", href: "/contact" },
];
export function enquiryHref(interest: Interest) { return `/contact?interest=${interest}`; }
