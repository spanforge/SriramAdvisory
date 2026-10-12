import type { Metadata } from "next";
export const decisions = [
 {stage:"idea", title:"Should I build this?", body:"Examine the customer problem, current alternatives and evidence before committing more time or money."},
 {stage:"market", title:"Who is likely to buy?", body:"Clarify the customer, the buyer and why someone would choose your offer."},
 {stage:"distribution", title:"How will customers find it?", body:"Assess possible channels and choose a practical distribution experiment."},
 {stage:"adoption", title:"Why are people not continuing?", body:"Examine where users struggle to experience value or make the product part of their routine."}
];
export const outputs = [
 ["Decision brief","The question, target customer, desired outcome and constraints."],
 ["Evidence review","Findings, sources, assumptions, contradictions and information still missing."],
 ["Recommended direction","Proceed, revise, pause or gather more evidence, with the reasoning explained."],
 ["Next experiment","What to test, with whom, the resources required and the result that would change the decision."],
 ["Review conversation","A discussion of the findings and your next steps."]
];
export const reviewFaq = [
 ["Can you guarantee my idea will succeed?","No. The review helps you assess evidence and reduce uncertainty. Customer behaviour and commercial results still need testing."],
 ["Will you build or market the product for me?","This offer covers the agreed review and next experiment. Development, advertising, creative production and sales execution are separate work."],
 ["Can I approach you before I have a product?","Yes. Bring a specific customer problem or idea you are considering."],
 ["What if the evidence is insufficient?","The recommendation may be to gather particular evidence before making the decision."]
];
export function reviewMetadata(title:string, description:string, path:string): Metadata {
 return {title, description, alternates:{canonical:path}, openGraph:{title,description,url:path,images:[{url:"/opengraph-image",width:1200,height:630}]}};
}
