import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { siteIdentity, copy, services } from "@/lib/positioning";
import { PageShell } from "@/components/AdvisoryUI";

export function FounderHero({ title, summary, eyebrow, experience, children }: { title: string; summary: string; eyebrow?: string; experience?: string; children: ReactNode }) {
  return <section className="sa-hero"><div className={`sa-wrap sa-founder-hero${siteIdentity.portrait ? " has-portrait" : ""}`}>
    <div>{eyebrow && <p className="sa-eyebrow">{eyebrow}</p>}<h1>{title}</h1><p className="sa-lede">{summary}</p>{experience && <p className="sa-experience-line">{experience}</p>}<div className="sa-actions">{children}</div></div>
    {siteIdentity.portrait && <Image className="sa-portrait" src={siteIdentity.portrait} alt="Sriram Srinivasan, founder of Sriram Advisory" width={360} height={450} priority />}
  </div></section>;
}
export function Button({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link className={`sa-btn ${secondary ? "sa-btn-secondary" : "sa-btn-primary"}`} href={href}>{children}</Link>;
}
export function ServiceSummaries() {
  return <div className="sa-service-list">{services.filter(service => service.enabled).map(service => <article key={service.slug}><h2>{service.title}</h2><p>{service.summary}</p><Link href={`/services/${service.slug}`}>{service.label} <span aria-hidden="true">→</span></Link></article>)}</div>;
}
export function ServiceFAQ() {
  return <div className="sa-faq-list">{copy.faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>;
}
export function UnavailableService() {
  return <PageShell><FounderHero title="Discuss your challenge" summary="Describe the situation and we can consider a suitable next step."><Button href="/contact?interest=general">Discuss your challenge</Button></FounderHero></PageShell>;
}
