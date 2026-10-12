import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { ComponentType } from "react";
import productMarketPosts from "@/content/product-market-posts.json";
import NatureDistribution from "@/content/articles/what-nature-teaches-us-about-product-distribution.mdx";
import DropboxDistribution from "@/content/articles/how-products-found-their-customers-01-dropbox.mdx";
import archive from "@/content/archive-articles.json";
import launch from "@/content/launch-essays.json";
import linkedinPosts from "@/content/linkedin-posts.json";
import Article8 from "@/content/articles/when-ai-becomes-the-explanation-for-everything.mdx";
import Article0 from "@/content/articles/delivery-reporting-that-supports-decisions.mdx";
import Article1 from "@/content/articles/sales-to-delivery-handover.mdx";
import Article2 from "@/content/articles/choose-ai-use-cases-before-tools.mdx";
import Article3 from "@/content/articles/practical-learning-reveals-understanding.mdx";
import Article4 from "@/content/articles/seniority-trap-mid-career-ai-risk.mdx";
import Article5 from "@/content/articles/before-buying-an-ai-tool.mdx";
import Article6 from "@/content/articles/look-at-unfinished-work.mdx";
import Article7 from "@/content/articles/training-needs-practice.mdx";

export const categories = ["Decisions and judgment", "Work and organisations", "Technology in practice", "Learning and capability", "Technology and society"];
const archiveCategories: Record<string, string> = { business: "Work and organisations", career: "Career decisions", "technology-digital-safety": "Technology in practice", education: "Learning and capability" };
const bodies: Record<string, ComponentType> = {
  "what-nature-teaches-us-about-product-distribution": NatureDistribution,
  "how-products-found-their-customers-01-dropbox": DropboxDistribution,
  "delivery-reporting-that-supports-decisions": Article0,
  "sales-to-delivery-handover": Article1,
  "choose-ai-use-cases-before-tools": Article2,
  "practical-learning-reveals-understanding": Article3,
  "seniority-trap-mid-career-ai-risk": Article4,
  "before-buying-an-ai-tool": Article5,
  "look-at-unfinished-work": Article6,
  "training-needs-practice": Article7,
  "when-ai-becomes-the-explanation-for-everything": Article8
};
export type Article = {
  slug: string; title: string; summary: string; category: string; author: string;
  publishedAt: string | null; updatedAt: string | null; status: "draft" | "published";
  featured: boolean; sources: { title: string; url: string }[]; cta: string;
  ctaHref?: string; publicationNote?: string; originalUrl?: string | null;
  interest: string; illustrative: boolean; body: string; readTime: string; Body: ComponentType;
};
const records: Omit<Article, "body" | "readTime" | "Body">[] = [
  ...productMarketPosts.map(article => ({ ...article, status: article.status as Article["status"] })),
  ...linkedinPosts.map(article => ({ ...article, status: article.status as Article["status"] })),
  ...archive.map(article => ({
    slug: article.slug, title: article.title, summary: article.summary,
    category: archiveCategories[article.topic], author: "Sriram Srinivasan",
    publishedAt: article.date, updatedAt: article.date, status: "published" as const,
    featured: false, sources: [], illustrative: false,
    cta: article.topic === "career" ? "Working through a career decision? Discuss your question" : "Have a challenge to work through? Discuss your challenge",
    interest: article.topic === "career" ? "career" : "general",
  })),
  ...launch.map(article => ({ ...article, status: article.status as Article["status"] })),
];
function hydrate(article: Omit<Article, "body" | "readTime" | "Body">): Article {
  // Repository-only paths: no user input is used to select filesystem locations.
  const body = readFileSync(join(process.cwd(), "content", "articles", `${article.slug}.mdx`), "utf8");
  const words = body.replace(/[#*_`]/g, "").trim().split(/\s+/u).length;
  return { ...article, body, readTime: `${Math.max(1, Math.ceil(words / 200))} min read`, Body: bodies[article.slug] };
}
export function getPublishedArticles(today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date())): Article[] {
  return records.filter(article => article.status === "published" && article.publishedAt && article.publishedAt <= today).map(hydrate);
}
export function getArticle(slug: string): Article | undefined { return getPublishedArticles().find(article => article.slug === slug); }
export function getFeaturedArticles(): Article[] { return getPublishedArticles().filter(article => article.featured).slice(0, 3); }
export function getRelatedArticles(article: Article): Article[] {
  const others = getPublishedArticles().filter(item => item.slug !== article.slug).sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
  const same = others.filter(item => item.category === article.category);
  return [...same, ...others.filter(item => item.category !== article.category)].slice(0, 2);
}

export function getProductMarketArticles(): Article[] {
  const slugs = new Set(productMarketPosts.map(article => article.slug));
  return getPublishedArticles().filter(article => slugs.has(article.slug));
}
