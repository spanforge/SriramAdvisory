export type GuideCard = {
  title: string;
  desc: string;
};

export type GuidePreview = {
  title: string;
  bullets: string[];
};

export type GuideStage = {
  stage: string;
  title: string;
  desc: string;
  color: string;
};

export type GuideTheme = {
  accent: string;
  accentSoft: string;
  accentStrong: string;
  heroGradient: string;
  heroText: string;
  sectionTint: string;
  sectionBorder: string;
  panelTint: string;
  finalGradient: string;
};

export type GuidePageContent = {
  productName: string;
  title: string;
  accentTitle: string;
  score: string;
  riskLabel: string;
  editionLabel: string;
  heroSummary: string;
  heroNote: string;
  outcomeBullets: string[];
  promiseBullets: string[];
  whatYouGet: GuideCard[];
  preview: GuidePreview[];
  stages: GuideStage[];
  forYou: string[];
  notForYou: string[];
  ctaTitle: string;
  ctaBody: string;
  faqDelivery: string;
  testimonials?: {
    quote: string;
    source: string;
    context?: string;
  }[];
  testimonial?: {
    quote: string;
    source: string;
    context?: string;
  };
  theme: GuideTheme;
};

const SHARED_FAQ_SCOPE =
  "This is a written career guide, not a course, bootcamp, or certification. It is meant to help you decide what to do next, what to stop doing, and how to present yourself more strongly in the market.";

const SHARED_FAQ_TRUST =
  "These guides are written for Indian professionals first. The emphasis is on role risk, salary context, GCC and product-market positioning, and practical next steps instead of generic global advice.";

export const FOUNDER_TRUST_NOTE =
  "Built for Indian professionals who need a sharper market read, a clearer next move, and practical positioning guidance instead of generic AI career content.";

export const BONUS_GUIDE_TITLE =
  "Bonus included: Agentic AI Field Guide.";

export const BONUS_GUIDE_NOTE =
  "A concise companion covering AI agents, tool use, memory, guardrails, observability, and where the frontier is headed.";

export const DELIVERY_NOTE =
  "Manual email delivery, usually within 30 minutes of payment.";

export const guideSalesContent: Record<string, GuidePageContent> = {
  "project-delivery-manager-survival-guide-2026": {
    productName: "Project Manager / Delivery Manager Survival Guide 2026",
    title: "Project Manager /",
    accentTitle: "Delivery Manager Survival Guide 2026",
    score: "5.9 / 10",
    riskLabel: "Moderate Exposure",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand what AI compresses in coordination-heavy project and delivery work, what higher-leverage judgment still compounds, and how to reposition around execution systems, cross-functional control, and business ownership instead of status reporting.",
    heroNote:
      "The market still needs orchestration. It pays more for judgment than for coordination theater.",
    outcomeBullets: [
      "A 60-day direction for stronger project and delivery positioning",
      "Clearer movement beyond tracker-heavy coordination work",
      "India-first guidance for GCC, SaaS, and transformation environments",
    ],
    promiseBullets: [
      "Decode which project and delivery tasks AI makes cheaper first",
      "Reframe your value around judgment, prioritization, and execution systems",
      "Build stronger market signal without pretending to be more technical than you are",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for project and delivery work",
        desc: "A direct explanation of what is getting compressed in meeting-heavy, reporting-heavy coordination roles and what still compounds when you own trade-offs and outcomes.",
      },
      {
        title: "60-day repositioning direction",
        desc: "A practical next-step path to move from tracker ownership toward clearer roadmap, execution, and business-value signal.",
      },
      {
        title: "AI-era project and delivery lens",
        desc: "A grounded view of how AI changes planning, stakeholder updates, execution tracking, and delivery rhythm without removing the need for human judgment.",
      },
      {
        title: "Hiring signal and narrative guidance",
        desc: "Examples for sounding stronger in interviews, resumes, and LinkedIn when the market is filtering for sharper execution judgment and delivery control.",
      },
      {
        title: "GCC and product-side market context",
        desc: "India-first framing for how stronger project and delivery profiles are separating from generic coordination roles in the current hiring market.",
      },
      {
        title: "Compensation and ceiling framing",
        desc: "A more useful view of why your salary ceiling changes when you are seen as someone who drives decisions, not just someone who runs follow-ups.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Which project and delivery tasks are becoming more automatable",
          "Why status-chasing work is turning into a ceiling",
          "What stronger execution and delivery signal looks like now",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 60-day repositioning direction",
          "A sharper story for interviews and internal moves",
          "A clearer sense of what proof to build next",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A generic project management certification substitute",
          "A promise that every delivery manager should change titles overnight",
          "US-market advice awkwardly copied into India realities",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Coordination-Heavy Operator",
        desc: "Your profile is anchored to follow-ups, trackers, and execution administration with limited visible decision ownership.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Execution Systems Owner",
        desc: "You start signaling better prioritization, cross-functional judgment, and clearer control over how work actually moves.",
        color: "#7c3aed",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Project / Delivery Leader",
        desc: "You are positioned around trade-offs, execution quality, delivery control, and business outcomes instead of coordination volume.",
        color: "#be123c",
      },
    ],
    forYou: [
      "You are a Project Manager, Program Manager, Scrum Master, or Delivery Manager in India and more of your work feels coordination-heavy.",
      "You can see AI shrinking the value of status reporting, documentation cleanup, and routine stakeholder updates.",
      "You want a stronger market story around prioritization, execution systems, and business judgment.",
      "You need a practical 60-day direction instead of vague advice to just become more strategic.",
      "You want better GCC, SaaS, or transformation-role positioning without inventing experience you do not have.",
    ],
    notForYou: [
      "You want a beginner project management course, Agile certification prep, or delivery framework tutorial.",
      "You already operate at a senior transformation or portfolio-delivery level with strong decision ownership.",
      "You want a broad global project-management market overview instead of India-first career positioning guidance.",
    ],
    ctaTitle: "Move beyond coordination-heavy project and delivery work.",
    ctaBody:
      "Use this guide to sharpen your market story, build stronger proof of judgment, and reposition toward roles that reward better execution and delivery leadership.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#7c3aed",
      accentSoft: "#d8b4fe",
      accentStrong: "#be123c",
      heroGradient: "linear-gradient(135deg, #13071d 0%, #2e1065 52%, #7c3aed 100%)",
      heroText: "rgba(233,213,255,0.85)",
      sectionTint: "#faf5ff",
      sectionBorder: "#d8b4fe",
      panelTint: "#fcfaff",
      finalGradient: "linear-gradient(160deg, #13071d 0%, #2e1065 60%, #7c3aed 100%)",
    },
  },
  "ba-to-ai-pm-guide-2026": {
    productName: "Business Analyst to AI Product Manager Career Transition Guide 2026",
    title: "Business Analyst to",
    accentTitle: "AI Product Manager Guide 2026",
    score: "3.5 / 10",
    riskLabel: "Low Replaceability When Repositioned Correctly",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "See how your BA strengths translate into AI product ownership, what skill gaps actually matter, and how to move toward AI PM roles with stronger market credibility instead of vague upskilling.",
    heroNote:
      "Your BA skills did not expire. They moved up the value chain.",
    outcomeBullets: [
      "A 90-day BA-to-AI PM transition direction",
      "Clearer positioning around problem ownership and AI product judgment",
      "India-first context for GCC, product, and AI transformation roles",
    ],
    promiseBullets: [
      "Decode why BA problem-framing skills are becoming more valuable in AI teams",
      "Understand the exact gap between BA execution and AI PM ownership",
      "Build stronger proof, language, and career signal for AI PM-style roles",
    ],
    whatYouGet: [
      {
        title: "The BA-to-AI PM transition map",
        desc: "A practical view of where traditional BA work gets squeezed, where AI PM value begins, and how to move across that gap credibly.",
      },
      {
        title: "90-day transition playbook",
        desc: "A staged plan to build evidence, reposition your profile, and move from requirements-heavy identity toward product ownership signal.",
      },
      {
        title: "AI PM skill-gap clarity",
        desc: "A focused breakdown of what you already have as a BA, what you need to add, and what you do not need to overlearn.",
      },
      {
        title: "AI feasibility and product judgment lens",
        desc: "A more useful way to evaluate AI product ideas, trade-offs, error costs, and human-in-the-loop decisions without needing to become an ML engineer.",
      },
      {
        title: "Portfolio, resume, and LinkedIn direction",
        desc: "Examples and frameworks to help you present yourself closer to outcomes, prioritization, and product thinking.",
      },
      {
        title: "India-first market and compensation context",
        desc: "Grounded context on GCC, product, and AI role demand so your transition decisions are tied to real market movement.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Why BA work is being renamed rather than disappearing",
          "What AI Product Managers actually own beyond documentation",
          "Where the real transition gap sits for experienced BAs",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 90-day transition direction",
          "A stronger market story for AI PM-style roles",
          "A clearer sense of what proof to build next",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A generic PM certification substitute",
          "A promise that every BA should switch titles immediately",
          "A full public dump of the guide's frameworks and templates",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Requirements Documenter",
        desc: "Your profile is anchored to documentation, structured delivery, and lower-leverage execution work.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Business Problem Owner",
        desc: "You start defining the problem, shaping the options, and influencing what gets built before it reaches a backlog.",
        color: "#2563eb",
      },
      {
        stage: "Stage 3",
        title: "AI Product Manager",
        desc: "You are positioned around roadmap judgment, AI feasibility thinking, and measurable business outcomes.",
        color: "#0f4c81",
      },
    ],
    forYou: [
      "You are a Business Analyst or Senior BA who wants to move closer to product ownership in the AI era.",
      "You can already sense that documentation-heavy BA work is getting compressed and renamed.",
      "You want an India-first bridge into AI PM, AI Product Owner, or adjacent product roles.",
      "You need a concrete 90-day path, not generic advice to just learn product management.",
      "You want to turn existing BA judgment into stronger market leverage and salary upside.",
    ],
    notForYou: [
      "You want a full technical AI engineering curriculum or model-building course.",
      "You already operate as an experienced AI PM and mainly need advanced execution tactics.",
      "You want a broad global PM career overview instead of India-first transition guidance.",
    ],
    ctaTitle: "Move from BA execution to AI product ownership.",
    ctaBody:
      "Use this guide to build a sharper transition story, stronger proof of judgment, and a more credible path into AI PM-style roles.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#0f4c81",
      accentSoft: "#93c5fd",
      accentStrong: "#1d4ed8",
      heroGradient: "linear-gradient(135deg, #08111f 0%, #0d2746 52%, #0f4c81 100%)",
      heroText: "rgba(196,225,255,0.85)",
      sectionTint: "#f4f9ff",
      sectionBorder: "#bfdbfe",
      panelTint: "#f8fbff",
      finalGradient: "linear-gradient(160deg, #08111f 0%, #0d2746 60%, #0f4c81 100%)",
    },
  },
  "fde-career-transition-guide-2026": {
    productName: "FDE Career Transition Guide 2026",
    title: "FDE Career",
    accentTitle: "Transition Guide 2026",
    score: "4.4 / 10",
    riskLabel: "Lower Risk When Repositioned Deliberately",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand how FDE work is changing in an AI-shaped market, which execution-heavy patterns are becoming cheaper, and how to transition toward stronger engineering, product, and business-value signal without discarding your existing base.",
    heroNote:
      "The goal is not to abandon your background. The goal is to move it up the value chain.",
    outcomeBullets: [
      "A 90-day FDE transition direction built for working professionals",
      "Clearer movement beyond execution-only delivery",
      "India-first guidance for stronger GCC, product, and AI-era engineering positioning",
    ],
    promiseBullets: [
      "Decode which parts of FDE work are getting commoditized fastest",
      "Reframe your experience around systems judgment, ownership, and product value",
      "Build stronger market signal without forcing a random stack or role pivot",
    ],
    whatYouGet: [
      {
        title: "A clearer FDE transition map",
        desc: "A practical breakdown of where execution-heavy FDE work loses leverage and where stronger demand starts rewarding judgment, architecture awareness, and sharper ownership.",
      },
      {
        title: "90-day career transition direction",
        desc: "A staged path to help you move from delivery-heavy identity toward a more durable and higher-upside engineering story.",
      },
      {
        title: "AI-era leverage lens",
        desc: "A grounded view of how to use AI to increase output while keeping your credibility anchored in real problem-solving and decision quality.",
      },
      {
        title: "Resume, LinkedIn, and interview positioning",
        desc: "Examples for sounding closer to outcomes, trade-offs, and business relevance instead of task completion alone.",
      },
      {
        title: "India-first market context",
        desc: "A sharper read on how GCC, SaaS, and product teams are separating commodity implementation from stronger engineering profiles.",
      },
      {
        title: "Ceiling and compensation framing",
        desc: "A more useful way to understand why salary upside changes when your profile signals better judgment, ownership, and leverage.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "What AI makes cheaper inside execution-heavy FDE work",
          "Why pure delivery throughput is becoming a weaker moat",
          "What stronger FDE signal looks like in the current market",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 90-day transition direction",
          "A sharper market story for better roles",
          "A clearer sense of what proof to build next",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A generic software engineering tutorial",
          "A fake promise that every FDE should switch titles immediately",
          "Hype-heavy AI career advice detached from India realities",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Execution-Only FDE Identity",
        desc: "Your profile is valued mainly for implementation speed, delivery throughput, and completing assigned work.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Higher-Signal FDE Positioning",
        desc: "You begin to show stronger product awareness, systems thinking, and more visible ownership of trade-offs and outcomes.",
        color: "#db2777",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Career Transition",
        desc: "You are positioned for roles that reward better judgment, stronger engineering leverage, and closer alignment to business value.",
        color: "#9d174d",
      },
    ],
    forYou: [
      "You work as an FDE and can feel execution-heavy work becoming easier to compress with AI.",
      "You want a stronger path into higher-leverage engineering, product-adjacent, or AI-shaped roles without discarding your current experience.",
      "You need a practical 90-day transition direction instead of generic advice to just learn more tools.",
      "You want your resume and interviews to signal ownership, judgment, and systems thinking more clearly.",
      "You are targeting stronger GCC, SaaS, or product-team positioning in India.",
    ],
    notForYou: [
      "You want a beginner programming course or full-stack engineering tutorial.",
      "You already operate in a high-leverage engineering role with strong architecture and product ownership signal.",
      "You want a broad global software market overview instead of India-first career transition guidance.",
    ],
    ctaTitle: "Move beyond execution-only FDE work.",
    ctaBody:
      "Use this guide to sharpen your career transition story, build stronger proof of leverage, and reposition toward work that rewards better judgment and ownership.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#be185d",
      accentSoft: "#f9a8d4",
      accentStrong: "#9d174d",
      heroGradient: "linear-gradient(135deg, #2a0718 0%, #5b1234 52%, #be185d 100%)",
      heroText: "rgba(255,220,235,0.86)",
      sectionTint: "#fff5f8",
      sectionBorder: "#f9a8d4",
      panelTint: "#fff9fb",
      finalGradient: "linear-gradient(160deg, #2a0718 0%, #5b1234 60%, #be185d 100%)",
    },
  },
  "business-analyst-survival-guide-2026": {
    productName: "Business Analyst Survival Guide 2026",
    title: "Business Analyst",
    accentTitle: "Survival Guide 2026",
    score: "7.1 / 10",
    riskLabel: "Active Risk",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "See what is being compressed in BA work, what still compounds, and how to move from documentation-heavy delivery into stronger GCC and product-side analyst positioning.",
    heroNote:
      "The goal is not to sound more technical. The goal is to sound more valuable.",
    outcomeBullets: [
      "A 60-day upgrade direction built for working BAs",
      "Clearer positioning beyond documentation-heavy work",
      "India-first salary and market context for your next move",
    ],
    promiseBullets: [
      "Decode your SA-AIRS score in plain language",
      "Reframe your experience around problem framing and ownership",
      "Turn AI usage into visible career proof instead of vague upskilling",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for BA work",
        desc: "A practical breakdown of what is being compressed, what still matters, and how to interpret that without panic.",
      },
      {
        title: "60-day repositioning plan",
        desc: "A structured path to build stronger proof, not just consume more AI content.",
      },
      {
        title: "AI-era workflow guidance",
        desc: "Where AI should accelerate your work, where judgment should stay human-led, and how to use both without hurting credibility.",
      },
      {
        title: "Resume and interview positioning",
        desc: "Examples and prompts to help you sound closer to outcomes, product thinking, and business value.",
      },
      {
        title: "India-specific market direction",
        desc: "Context for GCC and product-side analyst paths, including where higher-leverage BA demand is moving.",
      },
      {
        title: "Salary framing for stronger roles",
        desc: "A grounded view of what changes when your positioning improves and the work becomes less commodity-like.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Which BA tasks are easiest to automate",
          "Why documentation alone is becoming a ceiling",
          "What better analyst signal looks like in India",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 60-day plan to build visible proof",
          "A sharper way to describe your value",
          "A clearer GCC or product-side direction",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A generic BA certification playbook",
          "A fake promise that every BA should become a PM",
          "US-market advice awkwardly adapted for India",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Commodity BA Work",
        desc: "Documentation-heavy output with low strategic visibility.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "AI-Augmented BA",
        desc: "Faster execution plus early proof of stronger thinking.",
        color: "#2563eb",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Analyst",
        desc: "Problem framing, feature thinking, and stronger outcome ownership.",
        color: "#0f766e",
      },
    ],
    forYou: [
      "You are a Business Analyst or Senior BA in Indian IT services and the role feels documentation-heavy.",
      "You can feel AI compressing low-leverage work but you are not yet sure what to build next.",
      "You want to move toward GCC or product-side analyst work without pretending to be a PM overnight.",
      "You want a 60-day plan that turns AI usage into visible proof.",
      "You already have domain depth and want to turn it into a stronger moat.",
    ],
    notForYou: [
      "You want a technical training course on BA tools.",
      "You already operate like a product analyst with strong outcome ownership and AI feature design experience.",
      "You want a broad global BA market analysis instead of India-first guidance.",
    ],
    ctaTitle: "Move beyond documentation-heavy BA work.",
    ctaBody:
      "Use this guide to build a clearer market story, stronger proof, and a more credible next-step plan.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#0f766e",
      accentSoft: "#99f6e4",
      accentStrong: "#155e75",
      heroGradient: "linear-gradient(135deg, #08131f 0%, #0f2740 50%, #155e75 100%)",
      heroText: "rgba(190,235,240,0.88)",
      sectionTint: "#f0fdfa",
      sectionBorder: "#99f6e4",
      panelTint: "#f4fbfb",
      finalGradient: "linear-gradient(160deg, #07111d 0%, #0b1d31 60%, #0f3a4f 100%)",
    },
  },
  "data-analyst-career-guide-2026": {
    productName: "Data Analyst Career Guide 2026",
    title: "Data Analyst",
    accentTitle: "Career Guide 2026",
    score: "7.8 / 10",
    riskLabel: "Moderate-High Exposure",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand what is being automated in reporting-heavy analyst work, what higher-value analyst paths still compound, and how to reposition without guessing.",
    heroNote:
      "The future is not fewer analysts. It is fewer low-leverage analysts.",
    outcomeBullets: [
      "A 90-day blueprint for higher-value analyst positioning",
      "Clearer movement beyond dashboard dependence",
      "India-first guidance for GCC, SaaS, and product-facing analyst roles",
    ],
    promiseBullets: [
      "Decode where analyst work is being commoditized",
      "Build a stronger market story around insight and decision support",
      "Prioritize the next skills and proof that actually change your positioning",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for reporting-heavy work",
        desc: "A practical explanation of what is being automated and what becomes more valuable.",
      },
      {
        title: "90-day action direction",
        desc: "A structured next-step plan designed to create visible progress, not more random learning.",
      },
      {
        title: "Portfolio direction",
        desc: "Guidance on what kind of analyst proof feels stronger in the AI era.",
      },
      {
        title: "Positioning strategy",
        desc: "How to move from dashboard dependence toward insight, context, and business value.",
      },
      {
        title: "Sector-aware lens",
        desc: "A more useful view of where analyst demand deepens across SaaS, FinTech, and E-Commerce style environments.",
      },
      {
        title: "Salary and market framing",
        desc: "A grounded India-first view of how stronger analyst positioning changes your upside.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "What AI makes cheaper in analyst work",
          "Why recurring reporting is under pressure",
          "What hiring managers value more now",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A stronger analyst story for the market",
          "A more deliberate 90-day plan",
          "A clearer direction for better proof and positioning",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A machine learning course",
          "A generic list of analytics certificates",
          "Advice that treats the India market like an afterthought",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Reporting Dependence",
        desc: "Your value is tied too tightly to recurring dashboards and standard analysis work.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Insight and Context",
        desc: "You begin to signal better problem framing, communication, and business awareness.",
        color: "#2563eb",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Analyst",
        desc: "You are positioned closer to decision support, product thinking, and strategic value creation.",
        color: "#1d4ed8",
      },
    ],
    forYou: [
      "You are a Reporting Analyst or BI Analyst and your current work feels easier to automate.",
      "You want to move toward more valuable analyst work without guessing your way through it.",
      "You want an India-first plan instead of generic global analytics career advice.",
      "You have limited weekly time and need higher-return next steps.",
      "You want stronger positioning, not just more certificates.",
    ],
    notForYou: [
      "You already operate as a Product Analyst or Analytics Engineer at a higher-leverage level.",
      "You want a technical ML or data science course instead of a career strategy guide.",
      "You want a global market analysis instead of India-first positioning guidance.",
    ],
    ctaTitle: "Move from reporting dependence to analyst leverage.",
    ctaBody:
      "Use this guide to build a clearer story, a better next-step plan, and a more durable analyst profile.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#2563eb",
      accentSoft: "#93c5fd",
      accentStrong: "#1338a8",
      heroGradient: "linear-gradient(135deg, #050d2e 0%, #0a1854 50%, #1338a8 100%)",
      heroText: "rgba(180,210,255,0.85)",
      sectionTint: "#eff6ff",
      sectionBorder: "#bfdbfe",
      panelTint: "#f8fbff",
      finalGradient: "linear-gradient(160deg, #050d2e 0%, #0a1854 60%, #1338a8 100%)",
    },
  },
  "qa-engineer-survival-guide-2026": {
    productName: "QA Engineer Survival Guide 2026",
    title: "QA Engineer",
    accentTitle: "Survival Guide 2026",
    score: "9.5 / 10",
    riskLabel: "High Exposure",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "See exactly where manual QA is under pressure, what higher-value quality work still compounds, and how to reposition before the market hardens further.",
    heroNote:
      "The safer move is upward, not sideways.",
    outcomeBullets: [
      "A 90-day QA upgrade direction built for Indian IT roles",
      "Clearer movement toward higher-value quality ownership",
      "Interview and positioning help for stronger GCC-ready quality roles",
    ],
    promiseBullets: [
      "Decode why manual-only QA is narrowing so quickly",
      "Find your higher-value quality zone before the market fully resets",
      "Replace vague fear with a practical transition path",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for manual QA",
        desc: "A direct explanation of what is under pressure and what still benefits from human judgment.",
      },
      {
        title: "90-day repositioning path",
        desc: "A structured plan to move from manual-only identity toward stronger quality ownership.",
      },
      {
        title: "AI testing and workflow direction",
        desc: "A practical lens on where AI fits into testing work and how to stay relevant as execution gets cheaper.",
      },
      {
        title: "Hiring signal guidance",
        desc: "How stronger QA profiles communicate judgment, risk awareness, and ownership in the current market.",
      },
      {
        title: "GCC and salary context",
        desc: "A more grounded view of where higher-value quality roles sit and how the market rewards them.",
      },
      {
        title: "Examples and messaging support",
        desc: "Frameworks to make your next move clearer in applications, interviews, and internal conversations.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "What parts of QA are easiest to automate",
          "Why manual-only execution is narrowing fast",
          "Where stronger human-value quality work begins",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 90-day transition direction",
          "A stronger story for interviews and internal moves",
          "A clearer path toward higher-value quality work",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A beginner Selenium course",
          "A generic fear-based AI hot take",
          "Advice that ignores how Indian QA hiring actually works",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Manual-Only Execution",
        desc: "Your value is tied too tightly to repetitive testing work that can increasingly be automated.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Stronger Quality Ownership",
        desc: "You begin to signal judgment, risk awareness, and the ability to think beyond checklist execution.",
        color: "#16a34a",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage QA Positioning",
        desc: "You are presented as someone who protects quality outcomes, not just someone who runs test cases.",
        color: "#0d9268",
      },
    ],
    forYou: [
      "You are a Manual QA Engineer or QA Lead in Indian IT services.",
      "Your team has started automation or AI tooling and you feel behind.",
      "You have tried applying to new QA roles and the market feels flat.",
      "You want a concrete plan instead of generic upskilling advice.",
      "You want to become harder to replace, not just more anxious.",
    ],
    notForYou: [
      "You are already an SDET or Quality Engineer actively using advanced AI testing workflows.",
      "You want a technical course on Selenium or automation fundamentals.",
      "You want a global QA market analysis instead of India-first guidance.",
    ],
    ctaTitle: "Move before the role narrows further.",
    ctaBody:
      "Use this guide to replace vague fear with a clearer plan, stronger positioning, and a more future-proof QA story.",
    faqDelivery: DELIVERY_NOTE,
    testimonials: [
      {
        quote:
          "I highly recommend the QA Survival Guide by Sriram Advisory. It delivers practical insights and a structured approach that simplify complex QA concepts into actionable strategies. This guide is a valuable resource for both aspiring and experienced QA professionals, helping us stay confident and resilient in the real-world testing market.",
        source: "",
      },
      {
        quote:
          "This guide is highly useful for manual testers at any experience level who want to upskill and transition into AI QA roles.",
        source: "",
      },
    ],
    theme: {
      accent: "#0d9268",
      accentSoft: "#6ee7b7",
      accentStrong: "#0f5c3a",
      heroGradient: "linear-gradient(135deg, #071a14 0%, #0d3322 50%, #0f5c3a 100%)",
      heroText: "rgba(180,240,220,0.85)",
      sectionTint: "#f0fdf8",
      sectionBorder: "#bbf7d0",
      panelTint: "#f8faff",
      finalGradient: "linear-gradient(160deg, #071a14 0%, #0d3322 60%, #0f5c3a 100%)",
    },
  },
  "selenium-engineer-upgrade-guide-2026": {
    productName: "Selenium Engineer Upgrade Guide 2026",
    title: "Selenium Engineer",
    accentTitle: "Upgrade Guide 2026",
    score: "7.2 / 10",
    riskLabel: "Active Upgrade Risk",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand how the automation market is splitting, what premium testing roles now expect, and how to move from Selenium-heavy comfort toward more modern relevance.",
    heroNote:
      "Your base is not the problem. Standing still is.",
    outcomeBullets: [
      "A 60-day upgrade direction toward Playwright and AI-shaped quality work",
      "Clearer GCC and product-side automation positioning",
      "A practical bridge from legacy automation comfort to stronger market relevance",
    ],
    promiseBullets: [
      "Decode the gap between legacy automation demand and premium automation demand",
      "Upgrade your positioning without discarding your existing experience",
      "Focus on the skills and signals that move your ceiling upward",
    ],
    whatYouGet: [
      {
        title: "Market split clarity",
        desc: "A more useful view of where Selenium still has value and where stronger demand has already moved on.",
      },
      {
        title: "60-day upgrade direction",
        desc: "A practical plan to move toward modern automation relevance instead of collecting disconnected tutorials.",
      },
      {
        title: "Playwright and AI-era positioning lens",
        desc: "A clearer way to present your background as a foundation for stronger automation work.",
      },
      {
        title: "Hiring signal guidance",
        desc: "How stronger automation profiles communicate tooling currency, architecture awareness, and better long-term fit.",
      },
      {
        title: "Illustrative progression examples",
        desc: "An honest picture of what a stronger upgrade path can look like in GCC-style environments.",
      },
      {
        title: "India-first salary context",
        desc: "A grounded view of why your salary ceiling changes when your positioning changes.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Why legacy automation comfort is becoming a ceiling",
          "What modern automation roles are rewarding",
          "How the market is splitting in India",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 60-day upgrade direction",
          "A stronger automation story for the market",
          "A clearer next move beyond Selenium-only identity",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A beginner Selenium tutorial",
          "A fake claim that Selenium is dead overnight",
          "Generic QA advice with no upgrade lens",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Legacy Automation Comfort",
        desc: "Your profile is still too tightly tied to older automation expectations and familiar tooling.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Modern Automation Relevance",
        desc: "You begin to signal stronger architecture awareness, better tooling currency, and more future-ready thinking.",
        color: "#4f46e5",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Quality Positioning",
        desc: "You are seen as someone who can own stronger automation outcomes in a more AI-shaped environment.",
        color: "#0d9268",
      },
    ],
    forYou: [
      "You are a Selenium Automation Engineer and want to stay ahead of the shift.",
      "You have started seeing new automation expectations in job postings and need a clearer upgrade path.",
      "You want stronger GCC or product positioning without discarding your base experience.",
      "You want a practical roadmap instead of another testing tutorial.",
      "You want to move toward more durable automation relevance.",
    ],
    notForYou: [
      "You already operate at an advanced Playwright and AI evaluation level.",
      "You want a beginner automation course or hands-on Selenium tutorial.",
      "You want a global QA market analysis instead of India-first positioning guidance.",
    ],
    ctaTitle: "Upgrade before the market gap widens.",
    ctaBody:
      "Use this guide to turn Selenium experience into stronger modern relevance, better positioning, and a clearer upgrade path.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#4f46e5",
      accentSoft: "#a5b4fc",
      accentStrong: "#312e81",
      heroGradient: "linear-gradient(135deg, #0a0a2e 0%, #1e1b4b 50%, #312e81 100%)",
      heroText: "rgba(199,210,254,0.85)",
      sectionTint: "#f5f3ff",
      sectionBorder: "#c7d2fe",
      panelTint: "#f8faff",
      finalGradient: "linear-gradient(135deg, #0a0a2e 0%, #1e1b4b 100%)",
    },
  },
  "java-developer-ai-leverage-guide-2026": {
    productName: "Java Developer AI Leverage Guide 2026",
    title: "Java Developer",
    accentTitle: "AI Leverage Guide 2026",
    score: "7.5 / 10",
    riskLabel: "Active Risk",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "See what parts of Java work are getting cheaper, what still compounds inside the Java ecosystem, and how to move toward higher-leverage engineering identity instead of boilerplate dependence.",
    heroNote:
      "Let AI handle the repeatable work. Keep your time for what compounds.",
    outcomeBullets: [
      "A 60-day direction toward higher-leverage Java work",
      "Clearer positioning around architecture, judgment, and AI integration",
      "A better path into GCC and product-side roles without abandoning Java",
    ],
    promiseBullets: [
      "Decode what is actually at risk in Java careers",
      "Move up the value chain instead of sideways into panic",
      "Use AI to increase leverage while staying grounded in real engineering work",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for Java work",
        desc: "A direct explanation of what repetitive implementation work is losing value and what still compounds.",
      },
      {
        title: "60-day leverage direction",
        desc: "A practical roadmap for building more visible proof around judgment, ownership, and higher-value work.",
      },
      {
        title: "Architecture and domain lens",
        desc: "A clearer way to think about design judgment, diagnosis, and business-aware engineering as your moat.",
      },
      {
        title: "AI integration positioning",
        desc: "Guidance on how to sound stronger around AI-era engineering without pretending to be an AI researcher.",
      },
      {
        title: "Hiring signal guidance",
        desc: "What makes a Java profile feel more future-ready in GCC and product settings.",
      },
      {
        title: "India-first salary context",
        desc: "A grounded view of why stronger engineering positioning changes your ceiling.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Why boilerplate Java work is under pressure",
          "What design judgment is worth more now",
          "How to stay inside Java while getting more valuable",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 60-day leverage direction",
          "A stronger story for GCC and product roles",
          "A clearer sense of what to build next",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A beginner Java tutorial",
          "A hype-heavy promise that everyone should pivot stacks",
          "Generic advice to just learn AI",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Boilerplate Dependence",
        desc: "Your profile is too tightly tied to implementation speed and repeatable backend work.",
        color: "#78716c",
      },
      {
        stage: "Stage 2",
        title: "AI-Augmented Delivery",
        desc: "You start signaling stronger output, better judgment, and improved technical leverage.",
        color: "#b45309",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Java Positioning",
        desc: "You are seen as someone who owns design, trade-offs, and business-aware engineering decisions.",
        color: "#ea580c",
      },
    ],
    forYou: [
      "You are a Java or Spring Boot developer and repetitive implementation work feels easier to automate.",
      "You want to use AI to increase leverage without abandoning the Java ecosystem.",
      "You are targeting stronger GCC or product roles and want better positioning.",
      "You want a practical roadmap instead of generic advice to just learn AI.",
      "You want to move up the value chain, not sideways into panic.",
    ],
    notForYou: [
      "You already build advanced production AI features in Java and mainly need deep implementation help.",
      "You want a beginner Java course or full Spring Boot tutorial.",
      "You want a global Java market analysis instead of India-first guidance.",
    ],
    ctaTitle: "Move up the Java value chain.",
    ctaBody:
      "Use this guide to become more visible, more trusted, and more durable as a Java developer in an AI-shaped market.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#b45309",
      accentSoft: "#fdba74",
      accentStrong: "#b45309",
      heroGradient: "linear-gradient(135deg, #1c0d05 0%, #5b2410 55%, #b45309 100%)",
      heroText: "rgba(255,230,200,0.86)",
      sectionTint: "#fff7ed",
      sectionBorder: "#fdba74",
      panelTint: "#fffaf5",
      finalGradient: "linear-gradient(135deg, #1c0d05 0%, #5b2410 100%)",
    },
  },
  "bpo-career-survival-guide-2026": {
    productName: "BPO & Customer Support Career Survival Guide 2026",
    title: "BPO & Customer Support",
    accentTitle: "Career Survival Guide 2026",
    score: "9.2 / 10",
    riskLabel: "High Exposure",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand where support work is being compressed fastest, what human-value work still matters, and how to reposition before AI-enabled service workflows reset the floor beneath you.",
    heroNote:
      "The goal is not panic. The goal is better positioning.",
    outcomeBullets: [
      "A 30-day repositioning direction for support professionals",
      "Clearer movement toward stronger exception-handling and oversight roles",
      "India-first guidance for one of the most disrupted large workforces",
    ],
    promiseBullets: [
      "Decode where AI is shrinking routine support work fastest",
      "See the higher-value support roles that open up as workflows change",
      "Turn existing support experience into stronger market relevance",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for BPO and support work",
        desc: "A plain-English explanation of where AI is applying the most pressure and what still needs human judgment.",
      },
      {
        title: "30-day repositioning path",
        desc: "A focused next-step direction for working professionals who need clarity, not panic.",
      },
      {
        title: "Five new AI-era role directions",
        desc: "A practical view of where support experience can evolve as AI handles more tier-1 and tier-2 work.",
      },
      {
        title: "Profile and messaging support",
        desc: "Guidance to help your experience signal judgment, escalation value, and adaptability.",
      },
      {
        title: "Transition thinking",
        desc: "How to reframe support experience so it feels relevant in an AI-shaped service market.",
      },
      {
        title: "India-first market context",
        desc: "A grounded view of what this shift means for one of India largest employment categories.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Which support work AI absorbs first",
          "Where the human moat begins",
          "How service workflows are changing in India",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 30-day repositioning direction",
          "A clearer sense of which roles to target",
          "A stronger way to present your support experience",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A coding or ML curriculum",
          "A generic 'learn AI' pep talk",
          "A global BPO overview detached from India realities",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Scripted Task Dependence",
        desc: "Your value is tied too closely to routine support execution that AI can increasingly absorb.",
        color: "#78716c",
      },
      {
        stage: "Stage 2",
        title: "Human Judgment and Escalation",
        desc: "You begin to signal exception handling, quality judgment, and stronger operational awareness.",
        color: "#d97706",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Support Positioning",
        desc: "You are presented as someone who improves the system, not just someone who works inside it.",
        color: "#b45309",
      },
    ],
    forYou: [
      "You work in a BPO, call centre, or customer support role in India.",
      "Your floor has started using AI tools and you feel your role shrinking.",
      "You want a concrete repositioning plan, not generic advice to just learn AI.",
      "You have support experience and want to leverage it rather than discard it.",
      "You want to understand how to stay relevant as service workflows change.",
    ],
    notForYou: [
      "You already work in an advanced AI operations or bot quality role.",
      "You want a technical AI engineering path involving coding or ML.",
      "You want a global BPO market analysis instead of India-first guidance.",
    ],
    ctaTitle: "Reposition before the market settles without you.",
    ctaBody:
      "Use this guide to replace fear with a clearer strategy, stronger signal, and a more durable version of your support experience.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#d97706",
      accentSoft: "#fcd34d",
      accentStrong: "#78350f",
      heroGradient: "linear-gradient(135deg, #1c0a00 0%, #3b1a00 50%, #78350f 100%)",
      heroText: "rgba(255,220,150,0.85)",
      sectionTint: "#fffbeb",
      sectionBorder: "#fde68a",
      panelTint: "#fffaf5",
      finalGradient: "linear-gradient(160deg, #1c0a00 0%, #3b1a00 60%, #78350f 100%)",
    },
  },
  "devops-survival-guide-2026": {
    productName: "DevOps Survival Guide 2026",
    title: "DevOps",
    accentTitle: "Survival Guide 2026",
    score: "6.8 / 10",
    riskLabel: "Active Risk",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand which parts of DevOps work are getting cheaper, what production judgment still compounds, and how to move toward platform, reliability, and AI infrastructure relevance.",
    heroNote:
      "The moat is no longer writing more YAML. It is better production judgment.",
    outcomeBullets: [
      "A 60-day direction toward platform and reliability leverage",
      "Clearer movement beyond pipeline-heavy execution",
      "India-first context for GCC and product-side DevOps upside",
    ],
    promiseBullets: [
      "Decode what active risk means for DevOps engineers",
      "Reposition beyond repetitive delivery mechanics",
      "Turn production scar tissue into stronger market signal",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for DevOps work",
        desc: "A sharper explanation of what AI accelerates in DevOps and what it does not replace.",
      },
      {
        title: "60-day upgrade direction",
        desc: "A practical roadmap to build visible proof around stronger production judgment and platform thinking.",
      },
      {
        title: "Reliability and platform lens",
        desc: "A better way to frame your experience around systems trade-offs, ownership, and production outcomes.",
      },
      {
        title: "AI infrastructure relevance",
        desc: "Guidance on where DevOps experience still compounds in an AI-shaped engineering market.",
      },
      {
        title: "Portfolio and interview signal",
        desc: "How to present your production work so stronger teams see platform thinking instead of only maintenance work.",
      },
      {
        title: "India-first salary context",
        desc: "A grounded view of why stronger platform-oriented roles command better upside.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "What AI makes cheaper in DevOps",
          "Why pipeline-only identity is weakening",
          "Where platform and reliability work still compounds",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 60-day repositioning direction",
          "A stronger production story for the market",
          "A clearer route toward higher-leverage platform work",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A tool-specific certification course",
          "A hype-heavy claim that DevOps disappears",
          "Generic advice to collect more tools",
        ],
      },
    ],
    stages: [
      {
        stage: "Before",
        title: "Execution-Heavy DevOps",
        desc: "Your market story is dominated by setup, maintenance, and repetitive delivery mechanics.",
        color: "#64748b",
      },
      {
        stage: "After",
        title: "Higher-Leverage Platform Signal",
        desc: "You are seen as someone who can think about reliability, systems trade-offs, and stronger production outcomes.",
        color: "#1d4ed8",
      },
    ],
    forYou: [
      "You are a DevOps, SRE, or platform-leaning engineer in India and more of your work is becoming boilerplate.",
      "You are strong in CI/CD, Terraform, Docker, or Kubernetes, but want a better path than competing on YAML speed.",
      "You want to reposition toward GCC or product roles with stronger reliability, platform, or AI infrastructure ownership.",
      "You need a practical 60-day direction, not another vague prompt to learn AI.",
      "You have real production experience and want to turn that scar tissue into a market advantage.",
    ],
    notForYou: [
      "You want a deep technical certification course on one DevOps tool rather than a career guide.",
      "You already operate as a staff-level platform architect with strong SLO, FinOps, and AI infrastructure ownership.",
      "You want a broad global market analysis instead of India-first positioning guidance.",
    ],
    ctaTitle: "Move beyond pipeline maintenance.",
    ctaBody:
      "Use this guide to turn DevOps experience into a stronger platform story, a clearer transition plan, and a more defensible role.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#1d4ed8",
      accentSoft: "#bfdbfe",
      accentStrong: "#1d4ed8",
      heroGradient: "linear-gradient(135deg, #07111d 0%, #0d1b2a 50%, #1d4ed8 100%)",
      heroText: "rgba(210,225,255,0.86)",
      sectionTint: "#eff6ff",
      sectionBorder: "#bfdbfe",
      panelTint: "#f8fbff",
      finalGradient: "linear-gradient(160deg, #07111d 0%, #0d1b2a 60%, #1d4ed8 100%)",
    },
  },
};

export const SHARED_FAQ = [
  {
    question: "What exactly is this?",
    answer: SHARED_FAQ_SCOPE,
  },
  {
    question: "Why pay for this instead of reading free AI career content?",
    answer: SHARED_FAQ_TRUST,
  },
  {
    question: "When do I receive the guide?",
    answer: DELIVERY_NOTE,
  },
];
