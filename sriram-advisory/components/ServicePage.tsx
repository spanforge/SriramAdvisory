import { PageShell, Breadcrumbs, Hero, Section, ClosingCTA } from "@/components/AdvisoryUI";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/advisoryContent";

type SampleSection = { heading: string; detail: string };
type Props = {
  title: string; outcome: string; audience: string; problems: string[]; deliverables: string[];
  steps: string[]; included: string[]; excluded: string[]; cta: string; href: string;
  input: string; boundary: string; sampleTitle: string; sampleSections: SampleSection[];
  path: string;
};

export default function ServicePage(props: Props) {
  const faqs = [
    ["Who is this for?", props.audience],
    ["What do I receive?", props.deliverables.join(" ")],
    ["How is the fee determined?", "We agree the scope, fee, schedule and deliverables with you before work begins."],
    ["What information is needed?", props.input],
    ["Can the engagement be tailored?", `Yes. We agree the final scope within this boundary: ${props.boundary}`],
    ["Do you guarantee results?", "No. Outcomes depend on context and implementation; no career, business or security result is guaranteed."],
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.title,
    description: props.outcome,
    url: `${siteConfig.canonicalOrigin}${props.path}`,
    provider: { "@id": `${siteConfig.canonicalOrigin}/#organization` },
    audience: { "@type": "Audience", audienceType: props.audience },
  };

  return <PageShell>
    <StructuredData data={schema} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/business" }, { label: props.title }]} />
    <Hero eyebrow="Defined advisory engagement" title={props.title} body={props.outcome} primary={{ label: props.cta, href: props.href }} />
    <Section title="Who this is suitable for" intro={props.audience}><h3>Problems addressed</h3><ul className="sa-list sa-checklist">{props.problems.map(item => <li key={item}>{item}</li>)}</ul></Section>
    <Section muted title="What you receive"><ul className="sa-list">{props.deliverables.map(item => <li key={item}>{item}</li>)}</ul></Section>
    <Section eyebrow="Illustrative preview" title={props.sampleTitle} intro="This example shows the structure and level of clarity an output is designed to provide. It is illustrative, contains no client information and is adapted to the agreed scope.">
      <div className="sa-sample-document"><div className="sa-sample-head"><span>Sriram Advisory</span><strong>Illustrative output</strong></div>{props.sampleSections.map((section, index) => <div className="sa-sample-section" key={section.heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{section.heading}</h3><p>{section.detail}</p></div></div>)}</div>
    </Section>
    <Section title="How the engagement works"><ol className="sa-process">{props.steps.map((step, index) => <li key={step}><strong>{step}</strong><span>Step {index + 1} of {props.steps.length}</span></li>)}</ol></Section>
    <Section muted title="Scope and boundaries"><div className="sa-grid sa-grid-2"><div className="sa-card"><h3>Included</h3><ul>{props.included.map(item => <li key={item}>{item}</li>)}</ul></div><div className="sa-card"><h3>Not included</h3><ul>{props.excluded.map(item => <li key={item}>{item}</li>)}</ul></div></div><p className="sa-section-intro" style={{ marginTop: 28 }}>{props.boundary}</p></Section>
    <Section title="Before you enquire" intro="A short first message is enough. Please do not send confidential project material at this stage.">
      <div className="sa-grid sa-grid-2"><div className="sa-card"><h3>A useful fit when</h3><ul><li>The delivery or operating problem can be scoped to an agreed area</li><li>A responsible leader can provide context and review the findings</li><li>The organisation wants priorities and a practical action plan</li></ul></div><div className="sa-card"><h3>Probably not the right fit when</h3><ul><li>The requirement is an emergency response or technical security service</li><li>The immediate need is outsourced implementation or formal certification</li><li>A guaranteed commercial or delivery outcome is required</li></ul></div></div>
    </Section>
    <Section title="Commercial approach" intro="Scope agreed after an initial discussion. We agree the scope, fee, schedule and deliverables with you before work begins."><div className="sa-card"><h3>Your written proposal confirms</h3><ul><li>The agreed review area and evidence list</li><li>The people involved and discussion format</li><li>The review period and delivery schedule</li><li>The final outputs and leadership readout format</li><li>The fee, payment terms and any follow-up support</li></ul></div><div className="sa-actions"><a className="sa-btn sa-btn-primary" href={props.href}>{props.cta}</a></div></Section>
    <Section muted title="Frequently asked questions"><div className="sa-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></Section>
    <ClosingCTA title="Start with a focused discussion" body="Tell us about the situation without sharing confidential evidence at this stage." href={props.href} label={props.cta} />
  </PageShell>;
}
