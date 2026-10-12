import Link from "next/link";
import {PageShell, Hero, Section} from "@/components/AdvisoryUI";
import FormspreeEnquiryForm from "@/components/FormspreeEnquiryForm";
import {reviewMetadata} from "@/lib/reviewContent";
export const metadata=reviewMetadata("Request a Product and Market Review | Sriram Advisory","Share a short description of your product decision and discuss whether a Product and Market Review is a suitable next step.","/contact");
export default async function Contact({searchParams}:{searchParams:Promise<{stage?:string;interest?:string}>}) {
 const {stage,interest}=await searchParams;
 const reviewStages=["idea","market","distribution","adoption","unsure"];
 const initialInterest=stage&&reviewStages.includes(stage)?stage:interest??"unsure";
 return <PageShell><Hero title="Tell me about your product decision." body="Share a short description of your situation. I will review it and contact you to discuss whether a Product and Market Review is a suitable next step." primary={{label:"Send an enquiry",href:"#enquiry-form"}}/>
 <Section id="enquiry-form" title="Start with a short description"><FormspreeEnquiryForm initialInterest={initialInterest}/><p className="sa-help">Please avoid sharing confidential documents or sensitive personal information at this stage. This enquiry is not a paid booking. Scope and fee are agreed separately.</p><p className="sa-help">Read the <Link href="/privacy">Privacy Notice</Link> for information about how your enquiry is used.</p></Section>
 <Section title="What happens next" intro="I assess whether your question fits my experience and availability. If a review is suitable, we agree a written scope, timetable, evidence requirements and fee before work begins." muted><p>A review begins only after we agree the scope and fee.</p></Section></PageShell>;
}
