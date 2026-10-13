import Image from "next/image";
import Link from "next/link";
import {PageShell, Section, ClosingCTA} from "@/components/AdvisoryUI";
import {Button} from "@/components/EditorialUI";
import {decisions, reviewMetadata} from "@/lib/reviewContent";
import {getProductMarketArticles} from "@/lib/thinking";
import TrackedLink from "@/components/TrackedLink";
export const metadata = reviewMetadata("Product and Market Advisory | Sriram Advisory","Helping you assess product ideas, market demand, distribution and adoption. Work directly with Sriram on your next product decision.","/");
export default function Home() {
 return <PageShell>
 <section className="sa-hero review-home-hero"><div className="sa-wrap review-hero-grid"><div>
 <p className="sa-eyebrow">Product and market advisory</p>
 <h1>Decide what to build. Understand how it can find customers.</h1>
 <p className="sa-lede">I help you test product ideas, examine market demand, plan how to reach customers and understand what encourages people to start—and keep—using a product.</p>
 <div className="sa-actions"><Button href="/contact">Request a Review</Button><Button href="/work-with-sriram" secondary>See How I Help</Button></div>
 <p className="sa-experience-line">Work directly with Sriram Srinivasan. 30 years across technology, delivery and commercial responsibilities.</p>
 </div><aside className="review-portrait-block"><Image src="/sriram.png" alt="Sriram Srinivasan, founder of Sriram Advisory" width={360} height={450} loading="lazy" className="sa-portrait"/><p>Sriram Srinivasan<span>Founder, Sriram Advisory</span></p></aside></div></section>
 <Section eyebrow="One decision at a time" title="Which decision are you facing?"><div className="review-decisions">{decisions.map((d,i)=><article className="review-decision" key={d.stage}><span className="review-number" aria-hidden="true">0{i+1}</span><h3>{d.title}</h3><p>{d.body}</p><TrackedLink href={"/contact?stage="+d.stage} eventName="review_cta_click" eventProperties={{placement:"decision-"+d.stage}}>Discuss This Decision <span aria-hidden="true">→</span></TrackedLink></article>)}</div></Section>
 <Section title="Start with a Product and Market Review" intro="Bring one product decision or growth problem. We agree the question, examine the available evidence and work towards a reasoned next step." muted>
 <div className="sa-grid review-outputs">{[["A clear decision brief","Define the question and the outcome that matters."],["Evidence and assumptions made explicit","Understand what is known and what still needs testing."],["A recommended next test","Agree measures for reviewing the result."]].map(([title,body])=><article className="sa-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
 <p className="sa-section-intro">This is a paid advisory engagement. Scope, timetable and fee are agreed before work begins. Sending an enquiry does not commit you to a purchase.</p><Button href="/work-with-sriram">See What the Review Includes</Button></Section>
 <Section title="See how I examine products and markets" intro="Research on why products succeed or struggle to find customers, and what encourages people to adopt them."><div className="sa-grid sa-grid-2">{getProductMarketArticles().slice(0,3).map(article=><article className="sa-card" key={article.slug}><p className="review-article-meta">Analysis · {article.category} · <time dateTime={article.publishedAt??undefined}>{article.publishedAt}</time></p><h3><Link href={"/thinking/"+article.slug}>{article.title}</Link></h3><p>{article.summary}</p><Link href={"/thinking/"+article.slug}>Read Post →</Link></article>)}</div><div className="sa-actions"><Button href="/thinking" secondary>Read Research &amp; Insights</Button></div></Section>
 <Section title="Work directly with Sriram" intro="My background spans software engineering, delivery, commercial responsibilities, capability building and entrepreneurship. I bring those perspectives to product and market questions, make my reasoning visible and help you decide what to test next." muted><Link href="/about">About Sriram →</Link></Section>
 <ClosingCTA title="What decision is holding you back?" body="Tell me what you are building or selling, where you are stuck and what you have already tried." label="Request a Review"/>
 </PageShell>;
}

