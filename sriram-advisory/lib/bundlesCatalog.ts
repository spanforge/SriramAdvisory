export type BundleBadge = "Most Popular" | "Best Value";

export type BundleItem = {
  name: string;
  price: string;
};

export type BundleCard = {
  name: string;
  price: number;
  priceLabel: string;
  savingsLabel: string;
  description: string;
  items: BundleItem[];
  note?: string;
  badge?: BundleBadge;
};

export type BundleSection = {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  accentColor: string;
  tint: string;
  borderColor: string;
  bundles: BundleCard[];
};

export const BUNDLE_DELIVERY_NOTE =
  "All bundle contents delivered to your email within 30 minutes of payment.";

export const BUNDLE_PAGE_SUBTITLE =
  "Complete intelligence stacks for professionals who want more than one angle on their career decision.";

export const BUNDLE_SECTIONS: BundleSection[] = [
  {
    id: "tier-1",
    eyebrow: "Tier 1 - Role Bundles",
    title: "Role Bundles",
    tagline: "Two perspectives. One decision.",
    accentColor: "#0d9268",
    tint: "linear-gradient(135deg, #f2fbf8 0%, #dcfce7 100%)",
    borderColor: "#bbf7d0",
    bundles: [
      {
        name: "The Quality Modernization Bundle",
        price: 799,
        priceLabel: "Rs 799",
        savingsLabel: "You save Rs 199",
        description:
          "For QA professionals moving from manual execution to modern automation and AI quality ownership.",
        items: [
          { name: "QA Engineer Survival Guide 2026", price: "Rs 499" },
          { name: "Selenium Engineer Upgrade Guide 2026", price: "Rs 499" },
        ],
      },
      {
        name: "The Data Career Bundle",
        price: 799,
        priceLabel: "Rs 799",
        savingsLabel: "You save Rs 199",
        description:
          "For data professionals who want to understand both the analysis and engineering sides of AI-era data work.",
        items: [
          { name: "Data Analyst Career Guide 2026", price: "Rs 499" },
          { name: "Data Engineer AI Survival Guide 2026", price: "Rs 499" },
        ],
      },
      {
        name: "The Java Modernization Bundle",
        price: 799,
        priceLabel: "Rs 799",
        savingsLabel: "You save Rs 199",
        description:
          "For Java developers moving from implementation-heavy work toward platform and architecture ownership.",
        items: [
          { name: "Java Developer AI Leverage Guide 2026", price: "Rs 499" },
          { name: "DevOps Survival Guide 2026", price: "Rs 499" },
        ],
      },
      {
        name: "The Analyst to Product Bundle",
        price: 799,
        priceLabel: "Rs 799",
        savingsLabel: "You save Rs 199",
        description:
          "For BAs who want to understand their current risk and map a clear path toward AI product ownership.",
        items: [
          { name: "Business Analyst Survival Guide 2026", price: "Rs 499" },
          { name: "BA to AI PM Guide 2026", price: "Rs 499" },
        ],
      },
      {
        name: "The Platform Engineering Bundle",
        price: 799,
        priceLabel: "Rs 799",
        savingsLabel: "You save Rs 199",
        description:
          "For infrastructure professionals moving toward AI-native cloud and platform engineering roles.",
        items: [
          { name: "Cloud Engineer AI Survival Guide 2026", price: "Rs 499" },
          { name: "DevOps Survival Guide 2026", price: "Rs 499" },
        ],
      },
      {
        name: "The HR Transition Bundle",
        price: 799,
        priceLabel: "Rs 799",
        savingsLabel: "You save Rs 199",
        description:
          "For HR professionals who need both market intelligence and personal positioning clarity.",
        items: [
          { name: "HR Recruiter Survival Guide 2026", price: "Rs 499" },
          { name: "Career Positioning Audit", price: "Rs 999" },
        ],
        note: "Career Positioning Audit delivery is 48 to 72 hours as per standard service terms.",
      },
    ],
  },
  {
    id: "tier-2",
    eyebrow: "Tier 2 - Role + Report Bundles",
    title: "Role + Report Bundles",
    tagline: "Role direction plus market intelligence.",
    accentColor: "#1a4fd6",
    tint: "linear-gradient(135deg, #f0f5ff 0%, #dbeafe 100%)",
    borderColor: "#bfdbfe",
    bundles: [
      {
        name: "The QA Intelligence Bundle",
        price: 999,
        priceLabel: "Rs 999",
        savingsLabel: "You save Rs 299",
        description:
          "Role direction plus market data. For QA professionals who want to know both what to do and what the market is doing.",
        items: [
          { name: "QA Engineer Survival Guide 2026", price: "Rs 499" },
          { name: "State of QA Careers India 2026", price: "Rs 799" },
        ],
        badge: "Most Popular",
      },
      {
        name: "The Java Intelligence Bundle",
        price: 999,
        priceLabel: "Rs 999",
        savingsLabel: "You save Rs 299",
        description:
          "For Java developers who want role-specific leverage plus the full India IT risk picture.",
        items: [
          { name: "Java Developer AI Leverage Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 799" },
        ],
      },
      {
        name: "The Data Intelligence Bundle",
        price: 999,
        priceLabel: "Rs 999",
        savingsLabel: "You save Rs 299",
        description:
          "For analysts who want career direction plus context on where data roles sit in India's AI risk landscape.",
        items: [
          { name: "Data Analyst Career Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 799" },
        ],
      },
      {
        name: "The BA Strategy Bundle",
        price: 999,
        priceLabel: "Rs 999",
        savingsLabel: "You save Rs 299",
        description:
          "For BAs thinking beyond their current role toward where AI is taking enterprise work.",
        items: [
          { name: "Business Analyst Survival Guide 2026", price: "Rs 499" },
          { name: "AI Futures 2026", price: "Rs 799" },
        ],
      },
      {
        name: "The BPO Transition Bundle",
        price: 999,
        priceLabel: "Rs 999",
        savingsLabel: "You save Rs 299",
        description:
          "For support professionals who need urgent clarity on risk and realistic next steps.",
        items: [
          { name: "BPO & Customer Support Career Survival Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 799" },
        ],
      },
      {
        name: "The FDE Intelligence Bundle",
        price: 999,
        priceLabel: "Rs 999",
        savingsLabel: "You save Rs 299",
        description:
          "For forward deployed engineers who want to understand both their transition path and the broader AI shift.",
        items: [
          { name: "FDE Career Transition Guide 2026", price: "Rs 499" },
          { name: "AI Futures 2026", price: "Rs 799" },
        ],
      },
    ],
  },
  {
    id: "tier-3",
    eyebrow: "Tier 3 - Deep Dive Bundles",
    title: "Deep Dive Bundles",
    tagline: "Everything you need on one role. Nothing you don't.",
    accentColor: "#7c3aed",
    tint: "linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)",
    borderColor: "#d8b4fe",
    bundles: [
      {
        name: "The QA Deep Dive",
        price: 1299,
        priceLabel: "Rs 1,299",
        savingsLabel: "You save Rs 497",
        description:
          "Everything a QA professional needs - role risk, transition path, automation modernization, and market intelligence in one stack.",
        items: [
          { name: "QA Engineer Survival Guide 2026", price: "Rs 499" },
          { name: "Selenium Engineer Upgrade Guide 2026", price: "Rs 499" },
          { name: "State of QA Careers India 2026", price: "Rs 799" },
        ],
        badge: "Most Popular",
      },
      {
        name: "The Data Deep Dive",
        price: 1299,
        priceLabel: "Rs 1,299",
        savingsLabel: "You save Rs 497",
        description:
          "The complete data career picture - analyst repositioning, engineering transition, and India market risk data.",
        items: [
          { name: "Data Analyst Career Guide 2026", price: "Rs 499" },
          { name: "Data Engineer AI Survival Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 799" },
        ],
      },
      {
        name: "The Java Deep Dive",
        price: 1299,
        priceLabel: "Rs 1,299",
        savingsLabel: "You save Rs 497",
        description:
          "For Java professionals who want role leverage, platform engineering direction, and full market risk context.",
        items: [
          { name: "Java Developer AI Leverage Guide 2026", price: "Rs 499" },
          { name: "DevOps Survival Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 799" },
        ],
      },
      {
        name: "The BA Deep Dive",
        price: 1299,
        priceLabel: "Rs 1,299",
        savingsLabel: "You save Rs 497",
        description:
          "From current role risk to AI product ownership - the complete BA transition intelligence stack.",
        items: [
          { name: "Business Analyst Survival Guide 2026", price: "Rs 499" },
          { name: "BA to AI PM Guide 2026", price: "Rs 499" },
          { name: "AI Futures 2026", price: "Rs 799" },
        ],
      },
    ],
  },
  {
    id: "tier-4",
    eyebrow: "Tier 4 - Flagship Bundles",
    title: "Flagship Bundles",
    tagline: "The complete SA intelligence stack.",
    accentColor: "#b45309",
    tint: "linear-gradient(135deg, #fff8f0 0%, #ffedd5 100%)",
    borderColor: "#fdba74",
    bundles: [
      {
        name: "The Complete QA Stack",
        price: 1999,
        priceLabel: "Rs 1,999",
        savingsLabel: "You save Rs 1,296",
        description:
          "For QA professionals who want the full picture - market intelligence, transition path, automation direction, India risk rankings, and personal positioning clarity.",
        items: [
          { name: "QA Engineer Survival Guide 2026", price: "Rs 499" },
          { name: "Selenium Engineer Upgrade Guide 2026", price: "Rs 499" },
          { name: "State of QA Careers India 2026", price: "Rs 799" },
          { name: "AI Risk Rankings India 2026", price: "Rs 799" },
          { name: "Career Positioning Audit", price: "Rs 999" },
        ],
      },
      {
        name: "The Complete Data Stack",
        price: 1999,
        priceLabel: "Rs 1,999",
        savingsLabel: "You save Rs 1,096",
        description:
          "For data professionals who want role intelligence, market data, future scenarios, and their own SA-AIRS score in one place.",
        items: [
          { name: "Data Analyst Career Guide 2026", price: "Rs 499" },
          { name: "Data Engineer AI Survival Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 799" },
          { name: "AI Futures 2026", price: "Rs 799" },
          { name: "SA-AIRS Pro Report", price: "Rs 999" },
        ],
      },
      {
        name: "The Complete Java Stack",
        price: 1999,
        priceLabel: "Rs 1,999",
        savingsLabel: "You save Rs 1,296",
        description:
          "For Java professionals who want leverage, platform direction, cloud intelligence, market risk data, and a personal score.",
        items: [
          { name: "Java Developer AI Leverage Guide 2026", price: "Rs 499" },
          { name: "DevOps Survival Guide 2026", price: "Rs 499" },
          { name: "Cloud Engineer AI Survival Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 799" },
          { name: "SA-AIRS Pro Report", price: "Rs 999" },
        ],
      },
      {
        name: "The Full SA Library",
        price: 3999,
        priceLabel: "Rs 3,999",
        savingsLabel: "You save Rs 3,496",
        description:
          "Every Sriram Advisory guide and report published to date. For professionals who want the complete workforce intelligence stack across all Indian IT roles.",
        items: [
          { name: "All 13 guides", price: "Rs 6,487 total" },
          { name: "All 4 reports", price: "Rs 3,196 total" },
          { name: "Total individual value", price: "Rs 9,495" },
        ],
        note: "New guides and reports added after purchase are not included automatically. Buyers receive what is published at time of purchase.",
        badge: "Best Value",
      },
    ],
  },
];
