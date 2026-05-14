import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export type Article = {
  slug: string;
  type: "Analysis" | "Framework" | "Data";
  title: string;
  teaser: string;
  tag: string;
  date: string;
  readTime: string;
  body: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "seniority-trap-mid-career-ai-risk",
    type: "Analysis",
    title: "The Seniority Trap: Why Mid-Career Professionals Face the Highest AI Risk",
    teaser: "Junior employees adapt. Senior executives are insulated. It is the 8–18 year professional who is most exposed — here is why, and what to do about it.",
    tag: "Career Strategy",
    date: "14 May 2026",
    readTime: "6 min read",
    body: `There is a pattern that shows up repeatedly across the professionals I assess.

Junior employees — the 0–5 year cohort — are anxious, but they adapt. They have not built an identity around a specific way of doing things. They are used to learning. They pick up tools fast. Their risk is real, but so is their flexibility.

Senior executives — the 20+ year cohort — are largely insulated. Not because they are irreplaceable (many are not), but because their work is wrapped in relationship capital, institutional trust, and decision authority that AI cannot replicate. They are also expensive enough that companies are reluctant to restructure around them.

The professionals with the highest structural risk are in the middle. The 8–18 year band. Mid-level managers. Senior individual contributors. Functional specialists. People who have built genuine expertise — but in a domain where that expertise is increasingly replicable.

**Why the middle gets squeezed**

Here is what happens when AI increases productivity for a given function:

The junior work disappears first — it is the easiest to automate. But companies do not hire fewer juniors and keep the same number of seniors. They restructure the entire layer. The senior specialist who used to manage a team of five analysts now manages one — or none. Their output is still needed, but the organisational justification for their cost is weaker.

At the same time, the executive above them is not going anywhere. So the mid-senior professional is caught: they cannot move up (the executive layer has not thinned), and they cannot justify the support structure they were built around.

This is the seniority trap. The expertise is real. The vulnerability is structural.

**The four signals to watch**

In SA-AIRS™ assessments, mid-career professionals who score in the High or Very High risk tier tend to share four characteristics:

1. Their core deliverables are digital and text-based — reports, analyses, decks, recommendations
2. Their seniority comes from depth in one domain, not breadth across the organisation
3. Their direct reports are in roles with high automation feasibility
4. Their relationship capital is internal (cross-functional influence) rather than external (client trust, market reputation)

This is not a death sentence. It is a diagnosis. And a diagnosis is useful because it points to the right interventions.

**What actually moves the needle**

The professionals who successfully reposition in this window share one common strategy: they shift from being the best at a task to being the person who determines which tasks matter.

That sounds abstract. Here is what it looks like in practice:

The senior data analyst who repositions stops being the one who builds the model and starts being the one who defines which questions the model should answer — and whose judgment is trusted when the model is wrong.

The mid-level marketing manager who repositions stops being the one who produces campaigns and starts being the one who owns the relationship with the agency, the brief, the brand guardrails — the judgment layer that AI cannot replace.

This is not reskilling in the conventional sense. You are not learning a new tool. You are changing what you are accountable for.

**The 90-day window**

The professionals I have seen successfully navigate this had one thing in common: they moved before the pressure was visible. They did not wait for a restructure announcement. They read the signals early — in how their work was being discussed, in what their managers were starting to do themselves with AI tools, in where budget was flowing — and they began repositioning quietly.

Ninety days is enough time to shift your role's centre of gravity if you know what to move toward. But it requires an honest read of where you actually sit on the risk spectrum first.

That is what the SA-AIRS™ assessment is designed to give you.`,
  },
];

const TYPE_COLOURS: Record<string, { bg: string; text: string }> = {
  Analysis: { bg: "rgba(26,79,214,0.08)", text: "#1a4fd6" },
  Framework: { bg: "rgba(79,195,247,0.1)", text: "#0991c5" },
  Data: { bg: "rgba(16,180,140,0.08)", text: "#0d9e7e" },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} | Sriram Advisory`,
    description: article.teaser,
  };
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const c = TYPE_COLOURS[article.type] ?? TYPE_COLOURS["Analysis"];
  const paragraphs = article.body.split("\n\n");

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="px-5 md:px-10" style={{ paddingTop: 120, paddingBottom: 72, background: "#0a1628" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Link href="/insights" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 12, color: "#8898b8", textDecoration: "none",
            fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em",
            marginBottom: 32,
          }}>
            ← Back to Insights
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{
              display: "inline-flex",
              background: c.bg, color: c.text,
              fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "4px 12px", borderRadius: 20,
            }}>{article.type}</span>
            <span style={{ fontSize: 12, color: "#8898b8" }}>{article.tag}</span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(32px, 5vw, 58px)", lineHeight: 1.05,
            letterSpacing: "0.02em", color: "#f8faff", margin: "0 0 28px",
          }}>{article.title}</h1>

          <p style={{
            fontSize: 18, color: "rgba(248,250,255,0.65)", lineHeight: 1.7, margin: "0 0 32px",
          }}>{article.teaser}</p>

          <div style={{
            display: "flex", gap: 24, alignItems: "center",
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 12, color: "#8898b8",
          }}>
            <span>{article.date}</span>
            <span style={{ color: "rgba(136,152,184,0.3)" }}>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="px-5 md:px-10" style={{ background: "#ffffff", paddingTop: 64, paddingBottom: 80 }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {paragraphs.map((para, i) => {
            if (para.startsWith("**") && para.endsWith("**")) {
              return (
                <h2 key={i} style={{
                  fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                  fontSize: 26, letterSpacing: "0.04em", color: "#0a1628",
                  margin: "48px 0 16px",
                }}>{para.replace(/\*\*/g, "")}</h2>
              );
            }
            if (para.startsWith("1. ") || para.startsWith("2. ")) {
              const items = para.split("\n").filter(Boolean);
              return (
                <ol key={i} style={{ paddingLeft: 24, margin: "0 0 24px" }}>
                  {items.map((item, j) => (
                    <li key={j} style={{ fontSize: 16, color: "#3a4a6a", lineHeight: 1.8, marginBottom: 8 }}>
                      {item.replace(/^\d+\. /, "")}
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={i} style={{ fontSize: 16, color: "#3a4a6a", lineHeight: 1.85, margin: "0 0 24px" }}>
                {para}
              </p>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-10" style={{ background: "#f0f4f8", paddingTop: 72, paddingBottom: 72, textAlign: "center" }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "0.02em",
            color: "#0a1628", margin: "0 0 16px", lineHeight: 1,
          }}>Know Where You Actually Stand</h2>
          <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.75, margin: "0 0 32px" }}>
            Get your AI Career Risk Score — personalised to your specific role. Delivered within 24 hours.
          </p>
          <Link href="/get-started" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#1a4fd6", color: "#ffffff", textDecoration: "none",
            padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 15,
            border: "1px solid #3b6ef0",
          }}>
            Get Your Risk Score →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
