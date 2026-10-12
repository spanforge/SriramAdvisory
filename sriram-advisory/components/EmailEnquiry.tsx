"use client";
import {useState} from "react";
const email="sriram@sriramadvisory.com";
const stages:Record<string,string>={idea:"Idea",market:"Market",distribution:"Distribution",adoption:"Adoption",unsure:"Unsure"};
export default function EmailEnquiry({initialStage}:{initialStage?:string}) {
 const [status,setStatus]=useState("");
 const stage=initialStage && Object.hasOwn(stages,initialStage)?stages[initialStage]:undefined;
 const body=(stage?"Stage: "+stage+"\n\n":"")+"What I am building or selling:\n\nWho it is for:\n\nWhere I am stuck:\n\nWhat I have already tried:\n\nProduct or website link (optional):\n";
 async function copy(){try{await navigator.clipboard.writeText(email);setStatus("Email address copied.");}catch{setStatus("Please select and copy the email address above.");}}
 return <div className="review-email-panel"><p className="sa-eyebrow">Email-only enquiries</p><h3>Email your enquiry</h3>{stage&&<p>You are enquiring about: <strong>{stage}</strong>.</p>}<p>Tell me what you are building or selling, who it is for, where you are stuck and what you have already tried. Include a product or website link if useful.</p><a className="review-email-address" href={"mailto:"+email}>{email}</a><div className="sa-actions"><a className="sa-btn sa-btn-primary" href={"mailto:"+email+"?subject="+encodeURIComponent("Product and Market Review"+(stage?" — "+stage:""))+"&body="+encodeURIComponent(body)}>Email your enquiry</a><button className="sa-btn sa-btn-secondary" type="button" onClick={copy}>Copy email address</button></div><p className="sa-help" role="status">{status}</p><p className="sa-help">This opens your email application. Send the message there to make your enquiry.</p></div>;
}
