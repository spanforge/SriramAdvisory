"use client";

import { useMemo, useState } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import { track } from "@vercel/analytics";

const ROLES = [
  ["QA / Manual Testing", "QA Engineer Guide"],
  ["Selenium / Automation Testing", "Selenium Engineer Upgrade Guide"],
  ["Cloud Engineer", "Cloud Engineer AI Survival Guide"],
  ["Java Developer", "Java Developer AI Leverage Guide"],
  ["Business Analyst", "Business Analyst Survival Guide"],
  ["BA to AI PM Transition", "Business Analyst to AI Product Manager Guide"],
  ["DevOps Engineer", "DevOps Survival Guide"],
  ["Data Engineer", "Data Engineer AI Survival Guide"],
  ["Data Analyst", "Data Analyst Career Guide"],
  ["BPO / Customer Support", "BPO & Customer Support Career Survival Guide"],
  ["HR / Recruiter", "HR Recruiter Survival Guide"],
  ["Project / Delivery Manager", "Project / Delivery Manager Survival Guide"],
  ["FDE (Forward Deployed Engineer)", "FDE Career Transition Guide"],
  ["Fresher / Student", "Fresher AI Survival Guide"],
  ["Other / Not listed", "Matched Career Guide"],
] as const;

type Question = {
  key: string;
  title: string;
  options: readonly { label: string; points: number }[];
  dimension?: string;
  insight?: string;
};

const QUESTIONS: readonly Question[] = [
  { key: "experience", title: "How many years of experience do you have?", options: [
    { label: "Less than 2 years", points: 10 }, { label: "2–5 years", points: 5 },
    { label: "5–10 years", points: 0 }, { label: "10+ years", points: -5 },
  ]},
  { key: "repeatability", title: "How much of your day-to-day work is repeatable and rule-based?", options: [
    { label: "1 — Mostly judgment calls", points: 0 }, { label: "2", points: 15 },
    { label: "3 — A balanced mix", points: 30 }, { label: "4", points: 45 },
    { label: "5 — Mostly repeatable tasks", points: 60 },
  ], dimension: "Task Repeatability", insight: "A large share of your day-to-day work is repeatable — that is the single biggest factor behind your score."},
  { key: "aiAdoption", title: "Are you currently using AI tools in your daily work?", options: [
    { label: "Not at all", points: 20 }, { label: "A little, occasionally", points: 12 },
    { label: "Regularly", points: 6 }, { label: "Heavily embedded in my workflow", points: 0 },
  ], dimension: "AI Tool Adoption", insight: "You are not yet using AI tools regularly — closing that gap alone would move your score."},
  { key: "automationHistory", title: "Has your organization automated or reduced any part of your role using AI in the last 12 months?", options: [
    { label: "Yes", points: 20 }, { label: "No", points: 0 }, { label: "Not sure", points: 10 },
  ], dimension: "Automation History", insight: "Your organization has already started automating parts of this role — a forward signal, not a hypothetical."},
  { key: "confidence", title: "If AI tools got twice as capable in the next 12 months, how confident are you that your role stays essential?", options: [
    { label: "1 — Not confident at all", points: 20 }, { label: "2", points: 15 },
    { label: "3 — Somewhat confident", points: 10 }, { label: "4", points: 5 },
    { label: "5 — Very confident", points: 0 },
  ], dimension: "Role Confidence", insight: "You are not fully confident your role stays essential as AI improves — worth addressing directly."},
];

const PRODUCTS = {
  guide: { code: "exposure_guide", title: "Role-matched guide", price: 499, detail: "A practical guide selected for your current role." },
  call: { code: "exposure_call", title: "1-hour clarity session", price: 1000, detail: "A focused one-to-one session with Sriram." },
  bundle: { code: "exposure_bundle", title: "Guide + clarity session", price: 1499, detail: "Get the role-matched guide and the full clarity session." },
} as const;

type ProductKey = keyof typeof PRODUCTS;
type Stage = "intro" | "role" | "questions" | "result" | "offer";

export default function FreeAiExposureCheck() {
  const [stage, setStage] = useState<Stage>("intro");
  const [roleIndex, setRoleIndex] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [lead, setLead] = useState({ name: "", email: "" });
  const [selected, setSelected] = useState<ProductKey | null>(null);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState("");

  const score = useMemo(() => {
    const total = QUESTIONS.reduce((sum, question) => {
      const answer = answers[question.key];
      return sum + (answer === undefined ? 0 : question.options[answer].points);
    }, 0);
    return Math.round(((total + 5) / 135) * 100);
  }, [answers]);

  const weakest = useMemo(() => QUESTIONS.slice(1).reduce<Question | null>((current, question) => {
    const answer = answers[question.key];
    if (answer === undefined) return current;
    const ratio = question.options[answer].points / Math.max(...question.options.map((option) => option.points));
    if (!current) return question;
    const currentAnswer = answers[current.key];
    const currentRatio = current.options[currentAnswer].points / Math.max(...current.options.map((option) => option.points));
    return ratio > currentRatio ? question : current;
  }, null), [answers]);

  const band = score <= 35
    ? { label: "Low Exposure", color: "#1a4fd6", bg: "#eef3ff", copy: "You are ahead of the curve. Your work leans on judgment AI cannot easily replace yet — staying ahead remains an active choice." }
    : score <= 65
      ? { label: "Moderate Exposure", color: "#b45309", bg: "#fdf3e9", copy: "Parts of your role overlap with what AI tools do well. The gap is closable, but it takes a deliberate plan." }
      : { label: "High Exposure", color: "#b45309", bg: "#fdf3e9", copy: "A meaningful share of your work overlaps with what AI already does well. It is worth acting while you have the most options." };

  const question = QUESTIONS[questionIndex];
  const guideName = roleIndex === null ? "Matched Career Guide" : ROLES[roleIndex][1];

  function begin() {
    track("Free Assessment Start");
    setStage("role");
  }

  function nextQuestion() {
    if (questionIndex < QUESTIONS.length - 1) setQuestionIndex((value) => value + 1);
    else {
      track("Free Assessment Complete", { score, band: band.label });
      setStage("result");
    }
  }

  async function buy() {
    if (!selected) return;
    setPaying(true);
    setError("");
    const product = PRODUCTS[selected];
    const productName = selected === "guide" ? `${guideName} - AI Exposure Check` : selected === "bundle" ? `${guideName} + 1-Hour Clarity Session` : "1-Hour Clarity Session";
    track("Free Assessment Checkout", { product: selected, amount: product.price });
    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productCode: product.code, productName, amount: product.price, name: lead.name.trim(), email: lead.email.trim() }),
      });
      const data = await response.json();
      if (!response.ok || !data.payment_session_id) throw new Error(data.error || "Could not create the payment order.");
      const mode = (process.env.NEXT_PUBLIC_CASHFREE_ENV ?? "sandbox") as "sandbox" | "production";
      const cashfree = await load({ mode });
      await cashfree.checkout({ paymentSessionId: data.payment_session_id, redirectTarget: "_self" });
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Something went wrong. Please try again.");
      setPaying(false);
    }
  }

  return (
    <section className="assessment-shell">
      <div className="assessment-card">
        <p className="assessment-eyebrow">Sriram Advisory · Free Tool</p>

        {stage === "intro" && <div className="assessment-center">
          <div className="assessment-icon" aria-hidden="true">✦</div>
          <h1>Free AI Exposure Check</h1>
          <p>Six quick questions. Get a directional view of how exposed your role is to AI and what to do next.</p>
          <button className="assessment-primary" onClick={begin}>Start the free check <span>→</span></button>
          <small>No signup required to see your result · About 2 minutes</small>
        </div>}

        {stage === "role" && <div>
          <Progress current={1} />
          <p className="assessment-step">Question 1 of 6</p>
          <h2>What best describes your current role?</h2>
          <select value={roleIndex ?? ""} onChange={(event) => setRoleIndex(Number(event.target.value))}>
            <option value="" disabled>Select your role</option>
            {ROLES.map(([role], index) => <option value={index} key={role}>{role}</option>)}
          </select>
          <div className="assessment-actions"><button className="assessment-secondary" onClick={() => setStage("intro")}>← Back</button><button className="assessment-primary" disabled={roleIndex === null} onClick={() => setStage("questions")}>Next →</button></div>
        </div>}

        {stage === "questions" && <div>
          <Progress current={questionIndex + 2} />
          <p className="assessment-step">Question {questionIndex + 2} of 6</p>
          <h2>{question.title}</h2>
          <div className="assessment-options">{question.options.map((option, index) => <button key={option.label} className={answers[question.key] === index ? "selected" : ""} onClick={() => setAnswers((current) => ({ ...current, [question.key]: index }))}>{option.label}</button>)}</div>
          <div className="assessment-actions"><button className="assessment-secondary" onClick={() => questionIndex ? setQuestionIndex((value) => value - 1) : setStage("role")}>← Back</button><button className="assessment-primary" disabled={answers[question.key] === undefined} onClick={nextQuestion}>{questionIndex === QUESTIONS.length - 1 ? "See my result" : "Next →"}</button></div>
        </div>}

        {stage === "result" && <div>
          <div className="assessment-center assessment-result"><p className="assessment-step">Your result</p><div className="assessment-score">{score}<span>/100</span></div><strong style={{ color: band.color, background: band.bg }}>{band.label}</strong><p>{band.copy}</p></div>
          {weakest && <div className="assessment-insight"><b>Your biggest factor: {weakest.dimension}</b><span>{weakest.insight}</span></div>}
          <form className="assessment-lead" onSubmit={(event) => { event.preventDefault(); track("Free Assessment Lead", { role: ROLES[roleIndex ?? 14][0], score }); setStage("offer"); }}>
            <h3>See your personalized options</h3><p>Your score is free. Enter your details to view the guide matched to your role, a clarity session, or both.</p>
            <input required maxLength={100} value={lead.name} onChange={(event) => setLead({ ...lead, name: event.target.value })} placeholder="Full name" aria-label="Full name" />
            <input required maxLength={200} type="email" value={lead.email} onChange={(event) => setLead({ ...lead, email: event.target.value })} placeholder="Email address" aria-label="Email address" />
            <button className="assessment-primary" type="submit">See my options →</button>
          </form>
        </div>}

        {stage === "offer" && <div>
          <div className="assessment-center"><p className="assessment-step">Your options, {lead.name.split(" ")[0]}</p><h2>Choose what is useful to you</h2><p>Select one option. The exact total shown here will open in Cashfree.</p></div>
          <div className="assessment-products">{(Object.keys(PRODUCTS) as ProductKey[]).map((key) => {
            const product = PRODUCTS[key]; const checked = selected === key;
            return <label key={key} className={`${checked ? "selected" : ""} ${key === "bundle" ? "featured" : ""}`}>
              {key === "bundle" && <em>COMPLETE OPTION</em>}
              <input type="checkbox" checked={checked} onChange={() => setSelected(checked ? null : key)} />
              <span><b>{key === "guide" ? guideName : product.title}</b><small>{product.detail}</small></span><strong>₹{product.price.toLocaleString("en-IN")}</strong>
            </label>;
          })}</div>
          {error && <p className="assessment-error" role="alert">{error}</p>}
          <button className="assessment-primary assessment-buy" disabled={!selected || paying} onClick={buy}>{paying ? "Opening Cashfree…" : selected ? `Buy now · ₹${PRODUCTS[selected].price.toLocaleString("en-IN")}` : "Select an option to buy"}</button>
          <p className="assessment-trust">Secure Cashfree checkout · One-time payment · Call not useful? Full refund, no questions asked.</p>
        </div>}
      </div>
      <p className="assessment-footnote">A directional lite assessment built on the SA-AIRS™ framework.</p>
    </section>
  );
}

function Progress({ current }: { current: number }) {
  return <div className="assessment-progress" aria-label={`Question ${current} of 6`}><span style={{ width: `${(current / 6) * 100}%` }} /></div>;
}
