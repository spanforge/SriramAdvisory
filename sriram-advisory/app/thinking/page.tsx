import Link from "next/link";
import {PageShell, Hero, Section} from "@/components/AdvisoryUI";
import {getProductMarketArticles} from "@/lib/thinking";
import {reviewMetadata} from "@/lib/reviewContent";
export const metadata=reviewMetadata("Product and Market Research | Sriram Advisory","Insights on product decisions, market demand, distribution and adoption.","/thinking");
export default function Thinking(){
 const articles=getProductMarketArticles().sort((a,b)=>(b.publishedAt??"").localeCompare(a.publishedAt??""));
 return <PageShell><Hero eyebrow="Research & Insights" title="Examine the evidence. Question the first explanation." body="My writing examines how products find customers, why people adopt them and what makes continued use worthwhile." primary={{label:"Explore the writing",href:"#writing"}}/>
 <Section id="writing" title="Published writing"><div className="sa-grid sa-grid-2">{articles.map(a=><article className="sa-card" key={a.slug}><p className="review-article-meta">{a.illustrative?"Illustrative scenario":"Analysis"} · {a.category} · <time dateTime={a.publishedAt??undefined}>{a.publishedAt}</time></p><h3><Link href={"/thinking/"+a.slug}>{a.title}</Link></h3><p>{a.summary}</p><Link href={"/thinking/"+a.slug}>Read Post →</Link></article>)}</div></Section></PageShell>;
}


