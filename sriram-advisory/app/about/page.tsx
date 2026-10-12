import {PageShell, Section, ClosingCTA} from "@/components/AdvisoryUI";
import {FounderHero, Button} from "@/components/EditorialUI";
import {reviewMetadata} from "@/lib/reviewContent";
export const metadata = reviewMetadata("About Sriram Srinivasan | Sriram Advisory","Meet the founder of Sriram Advisory: 30 years across technology, delivery, commercial responsibilities and capability building.","/about");
export default function About() {
 return <PageShell><FounderHero title="I help you examine the decisions behind a product." summary="I am Sriram Srinivasan, founder of Sriram Advisory. My experience spans 30 years across technology, delivery, commercial responsibilities and capability building, alongside experience running a business."><Button href="/contact">Request a Review</Button></FounderHero>
 <Section title="Evidence, assumptions and a practical next step"><div className="sa-prose"><p>My focus at Sriram Advisory is product ideas, market demand, distribution and adoption. I examine the evidence, question assumptions and help clients choose a practical next step. Where a question needs specialist expertise beyond my experience, I make that clear.</p><p>I am building this practice through research, published analysis and focused advisory engagements. My recommendations reflect the evidence available and the limits of what it can establish.</p></div></Section>
 <Section title="An independent initiative" muted><p>I am employed full-time at Wipro. Sriram Advisory is my independent initiative. The views and services presented here are my own and do not represent or imply endorsement by Wipro. Engagements are considered subject to my professional obligations and availability.</p></Section>
 <ClosingCTA title="Work directly with me" body="Share the product decision you are facing. I will assess whether it fits my experience and availability." label="Request a Review"/></PageShell>;
}

