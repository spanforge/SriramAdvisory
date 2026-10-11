import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Hero, Section } from "@/components/AdvisoryUI";
import { problemSolvingExamples } from "@/content/problem-solving-examples";
export const metadata: Metadata = { title: "Thinking in Practice | Sriram Advisory", description: "Three illustrative scenarios showing how to examine assumptions, explore overlooked causes and test a practical response.", alternates: { canonical: "/thinking-in-practice" } };
export default function Examples() {
  return <PageShell><Hero title="A different explanation. A better next question." body="See how I would approach three familiar business situations: slow progress, missed promises and learning that does not transfer into work." primary={{label:"Discuss your situation",href:"/contact"}} />
    <Section title="How to read these examples" intro="These are fictional scenarios demonstrating my approach, rather than reports of client engagements or achieved results."><p>The alternative explanation in each example is a hypothesis. Evidence might support it, point elsewhere or show that the first explanation was right.</p><nav aria-label="Example topics"><ul>{problemSolvingExamples.map(item=><li key={item.slug}><a href={`#${item.slug}`}>{item.title}</a></li>)}</ul></nav></Section>
    {problemSolvingExamples.map((item,index)=><Section key={item.slug} id={item.slug} title={item.title} intro={item.context} muted={index%2===0} eyebrow="Illustrative scenario"><dl className="sa-scenario-detail">{[["The first explanation",item.assumption],["What I would examine",item.examine],["An alternative to test",item.alternative],["A small practical experiment",item.experiment],["What would count as progress",item.review]].map(([label,text])=><div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl></Section>)}
    <Section title="Bring the situation. We can examine the explanation." intro="A Problem-Solving Sprint applies this kind of reasoning to one agreed challenge, using your context and evidence."><div className="sa-actions"><Link className="sa-btn sa-btn-primary" href="/services/problem-solving-sprint">Explore the Sprint</Link><Link href="/resources/sprint-deliverables-example">Inspect sample deliverables</Link></div></Section>
  </PageShell>;
}
