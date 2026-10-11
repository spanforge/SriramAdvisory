# Editing the v2.1 website

The owner approved reuse of `/public/sriram.png` and the three supplied essays on 11 October 2026. Publication date: **2026-10-11**. The existing About biography supports the supplied 30-year experience line; final preview factual review remains part of release.

- `content/site-v21.json`: landing/service copy (homepage/resources revised with owner approval after the brand review), ordered process, situations, worked example, service summaries and seven FAQ answers.
- `lib/positioning.ts`: identity, portrait, ordered navigation, six enquiry interests and enablement. Set portrait to null for the text-only fallback. No invented alternate face.
- `content/articles/*.mdx`: article bodies. Edit repository MDX, not page component markup.
- `content/launch-essays.json`: new article title/summary/category/author/status/dates/featured order/CTA/source metadata.
- `content/archive-articles.json`: archive metadata (Seniority Trap headline qualified after the brand review). Archive bodies and original dates remain unchanged; new category mapping lives in `lib/thinking.ts`.
- `lib/thinking.ts`: published/future-date filtering, computed 200-word/minute reading time, related selection and statically imported MDX body registry. Adding a new article requires one registry import/entry but not component edits. Drafts are excluded from public routes and sitemap.
- `lib/siteCatalog.ts`, `paymentCatalog.ts`, `guideSalesContent.ts`, `bundlesCatalog.ts`: preserved commercial sources. Reconcile production records before editing them; this repositioning does not authorise changing assessment scores, product IDs or prices.

## Demonstrated editorial edits

The implementation moved the supplied Sprint description into `content/site-v21.json` and renders it through the existing page layout. An editor can revise `sprint.summary` and preview that same route without editing JSX. The complete supplied first essay is in `content/articles/before-buying-an-ai-tool.mdx`; the Thinking/detail routes render it through the generic article template. Both content edits were included in the successful production build. The owner's own edit-and-publish exercise remains a handover check.

For a publication, check title, summary, links, sources, category and real date; use `status: published`, actual `publishedAt`, and actual `updatedAt` on updates. Future publication dates stay excluded until that date; do not claim a scheduler exists. Feature no more than three articles in explicit editorial order. Do not add image placeholders, view counts, ratings or unsupported claims.

## Disabling a service

Change its `enabled` value in `content/site-v21.json`. Shared summaries, homepage Sprint introduction, form interests and sitemap respect this setting; direct service visits show a general enquiry invitation. The header links to the overview, never a disabled service. The retained Health Check toggle is `healthCheckEnabled` in `lib/positioning.ts`; inspect its direct-visit behaviour and implementation crosslinks whenever changing that toggle.

Internal proposal defaults from specification §§8–9 belong in proposals/operations, never in published page content. Scope, fee, schedule and capacity are agreed per proposal.

## Consulting resources and brand updates

`content/consulting-resources.ts` contains the four free tools/examples, rendered by `app/resources/[slug]/page.tsx`. Keep sample outputs explicitly fictional. `lib/commercialCopy.ts` supplies the same Pro refund promise to the sales page and refund policy. Framework routes now render individual pages rather than a shared redirect. See `BRAND_IMPLEMENTATION.md` for approved changes, biography sourcing and evidence still needed.

`content/founder-profile.ts` contains owner-approved biography facts from the supplied profile PDF. Keep role dates and employer responsibility distinct from independent consulting results. Do not publish the source PDF or its private contact details.


The owner requested a narrative About page rather than a LinkedIn-style chronology. The public biography now explains engineering, enterprise delivery, commercial responsibility, entrepreneurship and AI capability through their relevance to advisory work. Role-by-role dates, credential lists and experience cards have been removed; LinkedIn remains available for the detailed career history. Edit these paragraphs in `content/founder-profile.ts`.


LinkedIn writing is stored in `content/linkedin-posts.json` with full owner-approved text in `content/articles/`. Selected published posts precede the original launch essays in homepage feature selection (maximum three). Add the exact original post URL to `originalUrl` when supplied; do not substitute the profile URL for a post. The supplied AI and human progress post is dated 11 October 2026, attributed to LinkedIn and closes with an About link rather than an enquiry pitch.
