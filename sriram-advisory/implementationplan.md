# Sriram Advisory website implementation plan — v2.1

Source: `Sriram_Advisory_Website_Implementation_Specification_v2_1.docx`, version 2.1, 10 October 2026. Plan prepared 11 October 2026.

This plan covers all 25 specification sections. The full source body, including every table cell, supplied essay, public paragraph, internal proposal default and acceptance criterion, is reproduced in Appendix A. Use the DOCX for authoritative typography: italic indented paragraphs identify exact public copy; labelled table columns supply public content as directed. Other prose is implementation guidance, even beneath a Publish copy heading. Implement inline button instructions as controls and links, never as visible instructions.

This is a planning deliverable; implementation, production verification, usability testing and release approval are outstanding. This v2.1 plan supersedes the positioning and scope of the older `IMPLEMENTATION_PLAN.md`; that file remains unchanged. Existing production catalogue, prices, policies and customer commitments remain authoritative. Do not replace them with examples or unverified repository values.

## 1. Outcome and scope

Implementation began on 11 October 2026. See [implementation status](docs/IMPLEMENTATION_STATUS.md) for completed work, verification evidence and remaining release gates. The owner approved Formspree, the existing portrait and publication of all three essays dated 11 October 2026. Task checkboxes below remain the full delivery checklist; local code completion is not production acceptance.

- [ ] Reposition around clear understanding, tested assumptions, understandable choices and practical action. Primary conversion: enquiry about a consequential business or technology problem.
- [ ] Prioritise founders and business, delivery and technology leaders, initially IT services and adjacent digital businesses. Preserve career resources as the secondary journey. Education remains a writing subject without an invented institutional service.
- [ ] Deliver all specified pages, exact copy, working CTAs, durable enquiry acceptance and routing, consistent identity, preserved commerce, mobile usability, accessibility, SEO migration and release evidence.
- [ ] Use Sriram Srinivasan visibly, first person for approach/services and Sriram Advisory for business/policies. Verify the 30-year experience claim against approved biography before release.
- [ ] Apply plain English and qualified claims. Exclude genius/thought-leader comparisons, external thinker affiliation, generic transformation jargon, dominant AI/job-loss fear, invented credentials/employers/outcomes, promised commercial results and guaranteed implementation success.
- [ ] Explain PSW/SA-AIRS only where relevant to existing resources/methodology; no homepage branding framework or trademarks on generic process steps.
- [ ] Use experience, illustrative reasoning, useful writing and deliverables as evidence. No fabricated statistics, stars, testimonials, logos, endorsements, empty proof blocks or coming-soon sections.
- [ ] Keep Spanforge separate, linked only from a short About section. No Probe sale/release implication or competing hero CTA.
- [ ] Reuse the application and hosting. No stack upgrade, new CMS/database for brochure content, animation framework, CRM, broker or public admin app solely for this redesign.

## 2. Repository baseline and planned edit locations

The following are local observations, not production or provider verification.

| Evidence | Planned use or required verification |
| --- | --- |
| `package.json`: Next.js ^16.3.6, React 19.2.4, TypeScript, Tailwind 4; npm lockfile | Verify installed/locked versions; keep current App Router. Read relevant installed `node_modules/next/dist/docs/` guides before code, including routes, metadata, redirects, server rendering and MDX if used. |
| `lib/advisoryContent.ts` holds previous identity, pillars, four interests and resource adapters | Replace positioning and six-interest contract; separate typed page/service/settings content from authoritative commercial records. |
| `components/EnquiryForm.tsx` directly submits to Formspree, using older fields and validation | Evaluate Option A first; observed client code does not prove durable storage, idempotency, retry or owner recovery. Replace UI contract; document provider evidence before choosing B/C. |
| `app/layout.tsx` has older description and JSON-LD; pages use existing Navbar/Footer | Audit shell ownership across every route, including products and assessment layouts; establish exactly one shared header/footer and verified metadata. |
| `components/AdvisoryUI.tsx`, `ServicePage.tsx`, directory components, `lib/insights.ts` | Reuse useful components and migrate content without tying editorial edits to layout markup. Introduce repository MDX articles if no existing CMS satisfies the spec; preserve archive bodies/bylines/dates. |
| `lib/siteCatalog.ts`, `paymentCatalog.ts`, `guideSalesContent.ts`, `bundlesCatalog.ts`; Cashfree checkout and order APIs | Reconcile with production records and capture regression fixtures; preserve IDs, prices, tax handling, purchase/return URLs, fulfilment and entitlements. |
| `next.config.ts` contains existing redirects, including topic-query destinations | Inventory/test every mapping and query dependency. Do not assume framework `permanent: true` produces the required HTTP 301. Review category indexability before remapping old topic URLs. |
| `app/sitemap.ts`, `app/robots.ts`, structured-data components; www metadata origin | Regenerate from verified published/enabled records while retaining domain ownership configuration. |
| `.env.example` documents Cashfree but no enquiry backend secrets | Record only actual selected-provider environment names after discovery; never include values. |

## 3. Execution sequence and dependencies

| Phase | Tasks | Exit evidence |
| --- | --- | --- |
| P1 — Baseline | W01 inventory; W02 contracts and content preparation; start provider/privacy discovery | Reconciled routes/catalogue, rollback reference, source-copy map, integration evidence and decisions |
| P2 — Shell and homepage | W03 visual system/shared chrome; W04 complete homepage | Responsive preview with exact section order, worked example, verified portrait/text-only fallback and working CTAs |
| P3 — Services and thinking | W05 service pages; W06 About/business/Health Check; W07 essays and article contract | Complete supplied copy, bounded offers, archive preservation, publication controls and FAQ |
| P4 — Continuity and contact | W08 Resources/Careers; W09 form UI; W10 selected reliable backend | Preserved commerce, server-rendered directories, proven durable acceptance/notification/recovery |
| P5 — Technical verification | W11 SEO/migration/analytics; W12 acceptance/accessibility/performance | A01–A12 evidence, failure/retry tests, migration report and commerce results |
| P6 — Review and release | W13 owner preview, positioning review, deployment and handover | Required sign-off, production smoke evidence, operations/recovery demonstration and rollback instructions |

No invented delivery date. Estimate after P1, accounting for provider access and owner inputs. Start credential, portrait, biography, essay and retention discovery early. Positioning implementation already authorised by the redesign needs no extra approval gate; final preview and actual operational commitments require the specified owner sign-off before release.

## 4. W01 — Inventory and preservation (spec §§1, 13, 17, 20–21)

- [ ] Capture repository baseline/build reference and last known-good deployment; inventory assets, active integrations and hosting settings.
- [ ] Export production sitemap; enumerate repository routes, article/category slugs, product records and URLs used in checkout, receipts and assessments. Reconcile differences and verify current live output before calling the spec's older About/Contact crawl a deployment defect.
- [ ] Create migration CSV columns: old URL, action, new URL, canonical, reason, test status. Every existing route must have an explicit disposition.
- [ ] Preserve all working commerce/legal paths and query parameters needed by checkout/assessment. Capture baseline product, paid/free assessment, checkout, failed/cancelled payment, fulfilment, downloads, receipts and existing customer commitments.
- [ ] Recover genuine About portrait; verify source/permission and approved biography. Do not treat repository presence as approval or invent a substitute.
- [ ] Inspect actual contact-provider configuration: durable submissions, protected inbox, export/deletion, validation, duplicates, retries and owner access. Select A → B → C on evidence, not assumptions.

## 5. W02 — Content and configuration contracts (spec §§1–2, 17, 22–25)

- [ ] Keep exact public content from Appendix A in structured records; maintain source section references and a page/section/CTA copy checklist. Keep internal proposal defaults out of published records.
- [ ] Page: path, title, description, heading, ordered sections, CTA labels/targets.
- [ ] Article: slug, title, summary, body, category, author, publishedAt, updatedAt, status, featured, sources.
- [ ] Service: slug, title, summary, fit, deliverables, process, boundaries, interest enum, enabled.
- [ ] Resource: preserve existing product ID, slug, type, price, fulfilment fields and authoritative source schema.
- [ ] Settings: founder name, verified experience line, email, approved portrait, navigation, footer and social links.
- [ ] Articles have draft/published status. Exclude drafts from public responses, sitemap and related content; future-dated items stay draft without real scheduling. Feature an explicit ordered maximum of three, never random.
- [ ] Enable all six initial enquiry categories: general, sprint, implementation, workshop, health-check, career. Query fallback is general; server enums remain strict.
- [ ] If owner later disables a service, remove it consistently from navigation, summaries, sitemap and interest options; direct visits show a general enquiry invitation without an active offer. Document service-enable configuration.
- [ ] Define allowlisted source page IDs; unknown source becomes contact. Never put private text, emails or challenge descriptions into URLs.

## 6. W03 — Shared shell and visual system (spec §§3, 5, 16–17)

- [ ] Header order: home-linked logo/name; Work with Sriram `/work-with-sriram`; Thinking `/insights`; About `/about`; Resources `/resources`; primary Discuss your challenge `/contact`. No mega menu.
- [ ] Below 1100 px use menu button and same ordered items; visible close, focus trap, Escape, trigger-focus restoration, navigation-close, aria-expanded/aria-controls; no hover-only interaction.
- [ ] Footer exact identity: Sriram Advisory / Clear thinking. Practical progress. / Helping leaders and teams understand complex problems and move work forward. Groups: Work with Sriram, Thinking, About, Resources, Career Intelligence, Contact; retained Privacy/Terms/Refunds/Disclaimer paths; mailto email and current-year copyright.
- [ ] Remove old shared workforce/IT-performance straplines; retain page-specific career descriptions. Header non-sticky by default; simple footer links.
- [ ] Tokens: background #FAFAF7; text #172026; secondary #46525A; links/buttons #174D4A with white button text; borders #D7DEDA, not the sole control boundary. Verify WCAG AA combinations.
- [ ] System-only heading fonts Georgia/Times New Roman/serif; system sans body, no font network dependency. Max content 1160 px; article 720 px. Gutters 20/32/48 px mobile/tablet/wide. Body 17/18 px mobile/desktop, 1.6 line height; H1 clamp 36–60 px, H2 28–38 px, restrained weight.
- [ ] 8 px spacing base; section gaps 40–56 px mobile, 64–88 px desktop. Controls ≥44 px and visible 3 px focus outline with offset. No fixed-height text containers.
- [ ] Hero: at ≥960 px roughly 60/40 text/portrait grid; portrait 4:5, ≤360 px, face-safe crop/eye positioning. Below 960 px copy/buttons first. Exact portrait alt in Appendix A; approved text-only fallback if unavailable.
- [ ] Article grids: ≥1100 px three columns, 700–1099 two, <700 one. Avoid excessive cards, stock consultant imagery, neon AI graphics and glass effects.
- [ ] Semantic landmarks, skip link, one H1, ordered headings, labelled controls/errors, underlined prose links, no justified/all-caps body text, no image-only text; reduced motion and text equivalents for diagrams.
- [ ] Reuse/build header, footer, text/portrait hero, section heading, situation list, worked-example steps, service summary, article card/body and form with content props and consistent spacing.

## 7. W04 — Complete homepage (spec §§4–6)

Implement these eight sections in order using exact Appendix A copy:

1. Founder/primary-message hero, experience line; Discuss your challenge → `/contact?interest=general`; See how I think → `/#worked-example`. Keep primary CTA visible without fixed-height hero clipping.
2. When the usual answers are not helping: all five situation/supporting-line pairs as a readable list; exact follow-up sentence and general enquiry CTA.
3. Sometimes the first explanation needs testing: introductory paragraph then the entire worked example at `worked-example`, with visible illustrative/not-client label, title, five stages and closing qualification. Semantic ordered list, desktop labels left/mobile stacked; no fabricated result.
4. From a difficult question to a useful next step: Understand, Reframe, Choose, Act and review with all descriptions; numbered text, two desktop columns/one mobile; no animated diagram.
5. Sprint introduction and deliverables; Explore the Sprint → `/services/problem-solving-sprint`; See all ways to work together → `/work-with-sriram`; no unapproved price/duration.
6. Connected experience prose; About Sriram → `/about`; no capability-icon wall.
7. Thinking introduction; three approved supplied essays with category/title/summary/computed reading time/link, no invented dates/views; Browse the thinking → `/insights`.
8. Final invitation and direct email; Discuss your challenge → `/contact?interest=general`.

- [ ] Remove equal-weight two-practice selector, homepage price cards and long AI-methodology explanation; retain useful content in Resources/Careers/FAQ.
- [ ] No popup, autoplay, rotating hero, chat widget, fake availability or nonfunctional booking.
- [ ] Future case-study requirements: client permission even if anonymous, starting situation, evidence, actual contribution, change, observation period, available measurements, limitations/other causes. Without evidence keep illustrative treatment.

## 8. W05 — Service pages and FAQ (spec §§7–9, 22)

| Route | Required implementation |
| --- | --- |
| `/work-with-sriram` | Exact hero, general enquiry; Sprint first, then Implementation Support and Team Workshops with supplied descriptions/link labels; fit, agreed terms, qualified outcomes; distinct Health Check link and secondary Career Intelligence link; seven-question FAQ before final contact invitation. |
| `/services/problem-solving-sprint` | Supplied title/tagline/summary, fit, problem brief, decision note, 30-day action plan, readout, process including scheduled review, one-challenge scope, timing/fee via proposal, separate implementation and explicit exclusions; both Discuss a Sprint CTAs → sprint interest. |
| `/services/implementation-support` | Supplied opening, all five support examples, agreed work package/responsibilities, work plan, scoped artefacts, progress reviews and handover; not unlimited delivery; can follow Sprint or existing decision; implementation interest CTA. |
| `/services/team-workshops` | Supplied opening, all five themes, discovery/tailored agenda/exercises/action summary, proposed format/participants/duration/follow-up, approved material/confidentiality boundary; workshop interest CTA; no certification/accreditation claim. |

- [ ] Publish exact seven FAQ Q&As from §22, covering uncertain problem, sector fit, separate implementation, fees/timing, AI material use, initial message and outcome limits. Native details/summary or accessible disclosure, initially closed, answers server-rendered; do not duplicate the full FAQ on each page.
- [ ] Keep internal defaults in proposal/operations documentation only: Sprint one sponsor; ≤3 ×45-minute interviews; ≤5 evidence items/50 pages or equivalent; ≤2-page brief, ≤5-page decision note, action plan, 60-minute readout, 30-minute review within 30 days; target 10 business days after complete inputs; one factual correction; capacity confirmation.
- [ ] Implementation default: one work package/four weeks, weekly review/final handover; no implied daily availability, production access, staffed team or fixed capacity.
- [ ] Workshop default: remote 90 minutes, ≤12 participants, sponsor discussion, action summary within three business days; recording only by prior agreement.
- [ ] Public offers invite scope discussion without unconfirmed SLA, fixed fees or availability. Confirm actual schedule, fee, capacity, outputs and responsibility in each proposal.

## 9. W06 — About, business and Health Check (spec §§2, 5, 10)

- [ ] `/about`: all supplied paragraphs/How I work/Building as well as advising; genuine portrait or text-only; verified founder experience; Explore Spanforge → `https://www.getspanforge.com`, with accessible new-tab notice if applicable; Discuss your challenge → `/contact`.
- [ ] `/business`: exact IT-services heading/two paragraphs; links to Sprint, Health Check and Implementation Support. Preserve route, remove long AI explanation and repeated generic cards.
- [ ] Health Check: retain discovery, agreed evidence review, findings, 90-day action plan, leadership readout, implementation exclusion, commercial/confidentiality boundaries and existing illustrative label. Add exact separately scoped implementation paragraph and link. Update shared chrome without changing previously purchased engagement obligations.

## 10. W07 — Thinking, essays and article publication (spec §§11–12, 17, 23)

- [ ] `/insights` remains the sole hub; navigation label Thinking. Exact supplied hub heading/intro; All default plus Decisions and judgment, Work and organisations, Technology in practice, Learning and capability.
- [ ] Add complete supplied essays, not summaries alone: `/insights/before-buying-an-ai-tool` (Technology in practice; explicit illustrative reasoning/no client or statistic); `/insights/look-at-unfinished-work` (Work and organisations); `/insights/training-needs-practice` (Learning and capability).
- [ ] Use Sriram Srinivasan, actual approved publication dates and reading time at 200 words/minute. Preview all three; omit withheld articles without empty cards. Preserve supplied summaries and exact relevant footer CTA/interest.
- [ ] Article layout: Home / Thinking breadcrumb, category, H1, summary, author/date, body, sources when present, one enquiry CTA, ≤2 related articles, Back to Thinking. 720 px reading column; no sidebar or mandatory/invented hero image.
- [ ] Related: same category newest publication dates excluding current, then latest approved fallback; omit if none. No launch newsletter, comments or social counters. Optional Copy link uses canonical URL, announces Link copied and selectable fallback.
- [ ] Preserve archived bodies, dates and verified bylines; map delivery/operations/sales/organisation → Work and organisations; AI/digital safety → Technology in practice; education/training → Learning and capability; judgment → Decisions and judgment. Career-only archive may keep Career decisions. Review ambiguity individually without rewriting facts. Homepage prominence only for four primary categories.
- [ ] Preserve useful public category URLs; only equivalent curated category replacements get 301. Review indexability/traffic before archive-to-query redirects.
- [ ] Missing/draft articles return HTTP 404 with Thinking/Contact links. No draft leakage or fabricated claims from missing documents.
- [ ] Editor workflow: content record/MDX edit, preview title/summary/links/sources/date/category, existing deployment publish; actual updatedAt on updates. Demonstrate article and service-copy edits without layout changes.

## 11. W08 — Resources, Careers and directory contracts (spec §§13, 23)

- [ ] `/resources`: exact heading/intro; existing searchable catalogue first; secondary Career Intelligence invitation/copy/link. No invented business templates.
- [ ] `/careers`: exact heading/intro, existing assessment/guide sections and verified prices/descriptions/purchase links; preserve free exposure scoring/limitations and all assessment logic/product names.
- [ ] Catalogue displays title, type, summary, price/Free, original currency/tax handling; preserve fulfilment/payments and private-download protection. Data failure shows retry/contact, no invented records/loading-only page.
- [ ] Shared directory behaviour: Thinking `q/category/page`, Resources `q/type/page`; case-insensitive whitespace-normalised search ≤100 characters; match every entered word across title, summary and plain-text article body/resource description. Enter/Search submits; filter change resets page 1.
- [ ] Server-render initial results/pagination; 12 items/page, Previous/Next and result count. Unknown category/type → All; invalid/negative page →1; too-high page → last available or empty when no matches. Browser back restores URL state. No new search service.
- [ ] Desktop filters visible; mobile labelled collapsible controls, not placeholder-only labels. Existing resource types only.
- [ ] Exact no-results messages from §§11/13 and clear action restoring full set.

## 12. W09 — Contact UI (spec §§14, 22, 24)

- [ ] Exact contact heading, intro, confidentiality warning, Send enquiry label, Sending… state, success/failure and error microcopy from Appendix A.
- [ ] `name` required 2–100; `email` required ≤254/server-valid; `organisation` optional ≤120; `interest` required six-value enum/default general; `challenge` required 20–2000; `attempts` optional ≤1000; `outcome` optional ≤1000; required privacyAcknowledged=true, no marketing opt-in. Count Unicode code points; trim boundaries; optional strings default empty.
- [ ] Exact visible labels/hints, optional outcome hint, linked retained Privacy Notice and six interest labels. No attachments, required phone/budget or account.
- [ ] Disable duplicate pending submits; preserve text on any failure; focus linked error summary and describe field errors. Pending/success/failure aria-live; focus success heading only after durable acknowledgement; never clear prematurely.
- [ ] Invalid incoming interest → general, but strict server validation. Allowlisted source, transport-only website honeypot. Store noticeVersion/acceptedAt server-side.
- [ ] Generate UUID submission key, retain after uncertain timeout, rotate only on acknowledged success or field edit. Handle validation/conflict/quota/transient/oversize/unsupported-request states without losing message.
- [ ] Always visible direct mailto fallback. No 24-hour response claim without real commitment. WhatsApp only retained if verified and owner wants it; email/form suffice.

## 13. W10 — Reliable enquiry operations (spec §§15, 24–25)

Choose and record the smallest reliable option: A existing integration extended only as necessary; B managed durable provider with protected inbox/export/deletion/documented failures; C custom endpoint. Record evidence for storage, duplicates, validation, notifications and recovery. Do not add a custom outbox atop equivalent managed facilities.

- [ ] For custom C: POST `/api/enquiries`, JSON only, ≤32 KiB, strict known fields/enums, plain text, boundary trimming, server-side validation; 413 length and 415 unsupported content handling.
- [ ] Canonical fixed-order trimmed payload hash excludes honeypot/derived metadata; persist key/hash 24 hours. Same key/payload returns prior opaque ID; changed payload 409. Concurrent uniqueness constraint/provider equivalent creates one enquiry.
- [ ] Custom transaction stores enquiry + unique notification job before 201; duplicate acceptance 200; validation 422; rate limit 429 + Retry-After; DB failure 503/no success. A durable enquiry can succeed while notification is pending.
- [ ] Success `{"ok":true,"enquiryId":"opaque-id"}`; validation `{"ok":false,"code":"validation_error","fieldErrors":{"email":"Enter a valid email address."}}`; other codes idempotency_conflict, rate_limited, temporarily_unavailable. Never echo submission/exception text.
- [ ] Prior-success retries precede new-submission quotas while retaining basic abuse checks. Same-origin validation/honeypot; initial quotas five/15 minutes/keyed IP hash and ten/day/normalised email hash. Secret hashing/window expiry; no raw IP in enquiry; only trusted hosting proxy headers. Preserve email local-part case for delivery, comparison normalisation only for duplicate/quota checks.
- [ ] Verified-domain sender, configured owner recipient, visitor as Reply-To never From; escape content. Managed retry facility preferred; custom worker authenticated, unique jobs, atomic claims, attempt tracking/observable failures, no broker.
- [ ] Apply §24 explicit retry delays 1 minute, 5 minutes, 30 minutes, 2 hours, 12 hours, satisfying §15's five retry attempts over 24 hours. Document provider equivalent and initial-send/retry counting. Duplicate email after uncertain acknowledgement may occur; same enquiry reference, no exactly-once claim. On exhausted failures retain enquiry and alert existing operational channel.
- [ ] Owner authenticated recovery independent of notification; protected retrieval/export procedure for C, no public read/list API/admin app. Demonstrate actual recovery and owner-approved test-mailbox delivery.
- [ ] Server-only secrets; document actual database/email/sender/recipient/hash-secret/origin environment names, setup, inspection, deletion and rotation. No public-prefixed secrets/browser leakage or private files in bundles.
- [ ] Decide retention before collection: proposed 180-day deletion for unconverted enquiries, active clients under service policy; reflect actual processors/storage/email/retention in privacy policy. No unreviewed compliance certifications.
- [ ] No names/emails/organisation/message in analytics or ordinary logs. Monitor false positives; only if abuse requires it add accessible disclosed challenge provider.
- [ ] Without credentials: hide form and show explicit email-only preview. Public interim release requires explicit owner acceptance and records full enquiry checks outstanding; never success-only mock.

## 14. W11 — SEO, migration, performance and measurement (spec §§13, 18–19, 23)

- [ ] Apply every exact title tag in §18, homepage/About descriptions and service-opening summaries. Article title/summary feed H1/meta; preserve specific career/product metadata unless shared identity conflicts.
- [ ] One canonical/indexable page on `https://www.sriramadvisory.com`; filters canonicalise to unfiltered hub except justified curated category SEO. Sitemap excludes drafts, enquiry endpoints, success states and parameter variants; robots from verified inventory.
- [ ] Preserve `/insights`, no duplicate `/thinking`; no blanket homepage redirects. Equivalent moved routes use actual HTTP 301, one hop, no loops; test commerce query preservation. Keep canonical www/domain ownership configuration.
- [ ] Verified Person/Organization and published Article schema; no invented Review/AggregateRating/awards/alumni/client relationships.
- [ ] 1200×630 Open Graph design from HTML/SVG/approved assets with brand/message, optional real portrait, descriptive alt and absolute URL; no generated face.
- [ ] Portrait modern compression/fallback, intrinsic dimensions; lazy-load below-fold images. Initial article/resource content is server-rendered/static, no initial client fetch dependency.
- [ ] Target p75 LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 when field data exists. Record representative mobile lab conditions; no field claims from lab scores.
- [ ] Reuse privacy-respecting analytics if present; otherwise optional. Events CTA click/service view/server-accepted enquiry only, with page/interest/CTA label only. Redact q/free-text URL parameters including page views; no personal/text data. Button clicks are not leads.
- [ ] Proposed business measures qualified enquiries/discussions/proposals/paid engagements; establish baseline before targets.

## 15. W12 — Acceptance and evidence (spec §§19, 25)

| ID | Required pass evidence |
| --- | --- |
| A01 | Every route has one shared header/footer, consistent identity and no old global straplines. |
| A02 | Independent comprehension review identifies intended audience, help and enquiry next step. |
| A03 | Every supplied button/text CTA hits specified page, anchor and interest; no dead buttons. |
| A04 | 320, 390, 768, 1440 px and 200% zoom without overflow/clipping; verify 700/960/1100 breakpoints. |
| A05 | Keyboard/screen-reader menu, disclosure, filters and forms; sensible headings/labels/errors/focus. |
| A06 | Visible illustrative label, no claimed client outcome or fabricated measurement. |
| A07 | Invalid client/server payloads rejected; valid enquiry stored once. |
| A08 | Notification outage retries, stored enquiry survives/recoverable, no false success. |
| A09 | Existing product, checkout, assessment/scoring and fulfilment journeys pass preserved baseline. |
| A10 | All old routes retained/mapped; no loops, bad canonicals, draft indexing or query breakage. |
| A11 | No message/personal fields in analytics, URLs or ordinary logs; secrets remain server-only. |
| A12 | Final copy on every page, complete essays, no placeholders/loading-only/empty-proof/TODO/fake-chart content. |

- [ ] Form cases: same key twice and concurrent; timeout after acceptance then retry; changed payload conflict; invalid enum, oversized bytes, Unicode boundaries, HTML-like plain text, missing checkbox; 409/422/429/413/415; DB outage vs notification outage; retained input/key; Retry-After; authenticated recovery; no public enquiry read endpoint/browser secrets.
- [ ] Directory cases: all-word matching, case/whitespace/100-char handling, unknown filter, negative/non-numeric/beyond-range page, no results/clear, browser back, server HTML and draft exclusion.
- [ ] Run appropriate lint/build and focused meaningful route/form/publication/customer-journey checks. Record baseline defects separately; do not call untested production paths verified.
- [ ] Evidence bundle: tested URLs/viewports/build identifier, accessibility findings, link report, form delivery/recovery evidence, migration CSV, commerce results and performance conditions.
- [ ] Positioning test: three buyer-like people see homepage for 30 seconds and answer who it is for, what to contact about, useful approach and next step. Pass if ≥2 independently see difficult business/technology problem + practical follow-through + enquiry route. Revise if read as career shop/generic AI consultancy. Record actual results, not proposed testing as completed.

## 16. W13 — Release, rollback and handover (spec §§20–21, 25)

- [ ] Content gate: final preview approved, verified portrait/text-only fallback, approved facts/experience, published essays checked, no unsupported claims.
- [ ] Functional gate: stored enquiry/notification/recovery proven, every CTA works, current checkout/assessment/fulfilment verified.
- [ ] Technical gate: shared identity, canonicals/migration, mobile/keyboard, server initial content and required evidence verified.
- [ ] Operational gate: actual privacy processors/retention, configured secrets, demonstrated owner recovery and recorded rollback.
- [ ] Safe defaults: real portrait unavailable → text-only; unverified facts → approved facts only; no client proof → omit logos/testimonials; no pricing decision → scope/fee-agreed text; withheld essays → omit without blanks; service schedule/capacity confirmed per proposal; no backend credentials → explicit reduced email-only mode; privacy decision resolved before form collection.
- [ ] Interim email-only public release only with explicit acceptance; remove inactive form, highlight email and list outstanding enquiry acceptance. Analytics/testimonials/extra imagery do not block completion.
- [ ] Use existing pipeline, backward-compatible DB changes and last known-good deployment; immediate production smoke for navigation/enquiry delivery/commerce. On critical failure restore deployment while preserving all received enquiries; never discard data on rollback.
- [ ] Handover: working repository changes, deployment instructions, migration CSV, content-location guide, service-enable configuration, environment names without values, operations/retry/recovery/deletion/rotation guide, test evidence, rollback and concise disabled-optional-item summary. Document every new dependency.
- [ ] Demonstrate one article edit and one service-copy edit; editor can publish without component-markup changes.
- [ ] Final editorial review: useful outcome/founder visible, reasoning over brilliance claims, deliverables/boundaries clear, honest implementation support, discoverable careers, supporting Spanforge context, operational simple contact, no implied external affiliation; clear thinking connected to practical progress.

## 17. Specification coverage register

| Source section | Planned work |
| --- | --- |
| 1 Core implementation decision | Outcome, W01/W02 and full release gates |
| 2 Positioning and content rules | Outcome, W02/W04/W06/editorial review |
| 3 Navigation and routes | W01/W03/W11 |
| 4 Homepage copy and section order | W04 sections 1–4 |
| 5 Worked example and evidence treatment | W03/W04, A06 |
| 6 Homepage continuation and CTAs | W04 sections 5–8, W02 attribution |
| 7 Work with Sriram | W05 overview |
| 8 Problem-Solving Sprint | W05 page/internal defaults |
| 9 Implementation support and workshops | W05 pages/internal defaults |
| 10 About and retained business | W06 |
| 11 Thinking and essay one | W07/W08 |
| 12 Essays two and three | W07 |
| 13 Resources and career continuity | W01/W08/W11, A09 |
| 14 Contact and submission UX | W09 |
| 15 Enquiry delivery and data | W10/W12 |
| 16 Visual/responsive | W03/W12 |
| 17 Technical/content model | Repository baseline/W02/W03/W07 |
| 18 SEO/publishing metadata | W11 |
| 19 Analytics/acceptance | W11/W12 |
| 20 Delivery/completion | Execution phases/W13 |
| 21 Audit/editorial checks | W01/W13 and Appendix A audit URLs |
| 22 FAQ/enquiry microcopy | W05/W09 |
| 23 Article/directory contracts | W07/W08/W11 |
| 24 Form choices/data contract | W09/W10/W12; refines §15 |
| 25 Revision/launch decision | W10/W12/W13; governs interim vs full release |

## Appendix A — Complete source specification

The following is the complete DOCX body in source order, including tables. It is a reference appendix, not text to publish wholesale. Paragraph/run formatting is simplified; italic paragraphs and explicit table columns retain the source's public-copy cues. Original DOCX formatting resolves any ambiguity. All public copy, essays, microcopy, SEO strings, audit URLs and developer guidance remain here to prevent omissions.

Sriram Advisory Website

Implementation Specification

Version 2.1  |  10 October 2026  |  www.sriramadvisory.com

Reposition the website around Sriram’s ability to understand complex problems, question assumptions, explain choices clearly and help turn decisions into action. This document supplies the launch content, page structure, interface behaviour, implementation rules and acceptance criteria for the redesign.

Build on the existing website. Preserve working product, assessment and payment journeys. The primary conversion becomes an enquiry about a consequential business or technology problem. Career products remain accessible through Resources and the career hub.

### Source §1 Core implementation decision

The website should make the visitor think: Sriram can help us see the problem more clearly and take a useful next step. Demonstrate this through worked examples and specific service outputs. Do not describe Sriram as a genius, thought leader, out-of-the-box thinker or the Indian Malcolm Gladwell. The reference is a desired reputation, not a public comparison or endorsement.

Primary audience: founders, business leaders, delivery leaders and technology leaders, initially in IT services and adjacent digital businesses. Secondary audience: professionals looking for career resources. Education and learning remain legitimate subjects for writing; do not introduce an institutional consulting offer without a defined service.

Definition of finished

The full release requires all specified pages, copy and functioning CTAs, plus an enquiry that is stored and routed reliably; existing commerce survives regression testing; all global identity text is consistent; pages work on mobile; SEO migration is verified; accessibility checks pass; and the release checklist is completed. A visual mockup alone is not completion.

Document authority

Italic indented paragraphs are exact public copy. Table columns labelled Publish copy, Description, Supporting line or Visible label contain public content where their section specifies it. All other prose is developer guidance, even when it sits under a Publish copy heading. Button labels and destinations are specified inline and must be implemented, not printed as instructions. This convention prevents implementation notes leaking into the website. Retained catalogue entries, prices and policies must come from the current production data. Do not guess missing values or replace verified existing records with this document’s examples. The public service pages invite a scope discussion; they do not advertise availability, fixed fees or deadlines. Internal proposal defaults are guidance only. Do not add new approval gates for already authorised positioning work; the owner signs off the final preview and actual operational commitments before launch.

### Source §2 Positioning and content rules

Primary message

> *See the problem clearly. Find a practical way forward.*

> *I help leaders and teams make sense of complex business and technology challenges, question assumptions and turn decisions into action.*

Supporting message

> *Built on 30 years of experience across delivery, operations, capability building and technology adoption.*

Use first person for Sriram’s approach and service explanations. Use Sriram Advisory for the business and policy text. Use Sriram Srinivasan as the visible founder name. Verify the stated experience against the existing biography before release; do not add employers, roles, qualifications, client logos or quantitative outcomes without approved evidence.

Tone and editorial requirements

Use plain English, concrete situations and qualified claims. Explain uncertainty rather than promising certainty. Avoid jargon such as transformation catalyst, disruptive solutions, unlock potential and end-to-end excellence. Do not make fear of AI or job loss the dominant brand story. Do not promise commercial outcomes or guaranteed implementation success.

Do not add a named proprietary framework to the homepage solely for branding. Existing PSW and SA-AIRS references may remain on relevant resource and methodology pages where their meaning and limits are explained. Do not place trademark symbols beside generic process steps.

Evidence hierarchy

Use actual founder experience, substantive illustrative examples, useful writing and specific deliverables. Add client case studies only when consent and evidence exist. Until then, do not display testimonial placeholders, empty logo strips, fabricated statistics, star ratings or claims such as trusted by leading companies.

Relationship with Spanforge

Sriram Advisory is the advisory and thinking business. Spanforge is a separate agentic AI testing and security product business. Link to https://www.getspanforge.com from a short About section only. Do not sell Probe on this website or imply it is released. Avoid a competing product CTA in the homepage hero.

### Source §3 Navigation and routes

| Visible label | Destination | Behaviour |
| --- | --- | --- |
| Logo and Sriram Advisory | / | Always links home. |
| Work with Sriram | /work-with-sriram | Single page; no mega menu. |
| Thinking | /insights | Retain existing hub URL. |
| About | /about | Personal experience and approach. |
| Resources | /resources | Existing resources plus career hub. |
| Discuss your challenge | /contact | Primary navigation button. |

Desktop order follows the table. At widths below 1100 px, replace links with a menu button. Mobile menu contains the same items in the same order. Show a visible close control, trap focus while open, close on Escape, restore focus to trigger and close after navigation. Use aria-expanded and aria-controls. No hover-only interaction.

Canonical route register

| Route | Action |
| --- | --- |
| / | Rewrite homepage. |
| /work-with-sriram | Create service overview. |
| /services/problem-solving-sprint | Create flagship engagement page. |
| /services/implementation-support | Create bounded support page. |
| /services/team-workshops | Create workshop page. |
| /business | Retain; rewrite as IT services expertise landing page. |
| /services/business-delivery-health-check | Retain; keep distinct diagnostic offer. |
| /insights and existing article routes | Retain URLs; change navigation label to Thinking. |
| /about and /contact | Replace copy and shared shell. |
| /resources and /careers | Retain; subordinate to advisory positioning. |
| Existing commerce and legal routes | Preserve actual production paths and functionality. |

Footer

> *Sriram Advisory*  
> *Clear thinking. Practical progress.*  
> *Helping leaders and teams understand complex problems and move work forward.*

Footer groups: Work with Sriram, Thinking, About, Resources, Career Intelligence and Contact; below them retain current Privacy, Terms, Refunds and Disclaimer destinations. Show sriram@sriramadvisory.com as a mailto link. Copyright uses the current year. Remove old workforce-intelligence and IT-performance straplines from shared chrome. Keep page-specific career descriptions within career pages.

### Source §4 Homepage copy and section order

Section 1 Publish copy

> *Sriram Srinivasan · Founder of Sriram Advisory*

> *See the problem clearly. Find a practical way forward.*

> *I help leaders and teams make sense of complex business and technology challenges, question assumptions and turn decisions into action.*

> *Built on 30 years of experience across delivery, operations, capability building and technology adoption.*

Buttons: Discuss your challenge → /contact?interest=general; See how I think → /#worked-example. Layout: text left, verified founder portrait right. Do not hide the primary CTA below a fixed-height hero. On mobile place text and buttons before the portrait.

Section 2 Publish copy

> *When the usual answers are not helping*

> *You may recognise one of these situations.*

| Situation | Supporting line |
| --- | --- |
| We keep fixing the same problem. | The symptom improves, but the pattern returns. |
| We have information, but no clear decision. | More reports have not made the choices easier. |
| The technology looks promising. | Its value, cost and practical use are still unclear. |
| Everyone is busy. | Delivery is not improving at the same pace. |
| We know what needs to change. | Ownership and follow-through keep getting in the way. |

Present as a readable list, not five equal decorative cards. Follow with: “Start with the situation. We can work out the right question together.” Link Discuss your challenge to /contact?interest=general.

Section 3 Publish copy

> *Sometimes the first explanation needs testing.*

> *A team asks for productivity training. Before recommending a course, I would examine what keeps interrupting the work, where decisions wait and how much effort goes into rework. Training may help. It may also leave the main constraint untouched.*

Use the worked example in Section 5 immediately below this paragraph. Anchor ID: worked-example. Keep the illustrative label visible before the example.

Section 4 Publish copy

> *From a difficult question to a useful next step*

> *Understand — Clarify the situation, the evidence and the outcome that matters.*  
> *Reframe — Test the initial explanation and consider what else could account for the problem.*  
> *Choose — Compare practical options and agree what to try first.*  
> *Act and review — Make ownership clear, help with the agreed work and examine what changes.*

Use four numbered text steps; two columns on wide screens and one column on mobile. No animated process diagram. Continue homepage with Section 6 of this document.

### Source §5 Worked example and evidence treatment

Homepage worked example Publish copy

> *Illustrative example — not a client case study*

> *Does this team need training or fewer interruptions?*

| Stage | Publish copy |
| --- | --- |
| Starting request | “Our team is missing commitments. We need productivity training.” |
| What I would examine | How many tasks are active, where work waits, how priorities change and how much work must be repeated. |
| An alternative explanation | The team may know how to do the work but lack enough uninterrupted time and timely decisions. |
| A first experiment | Limit concurrent work for one team, assign an owner to blocked decisions and review progress weekly. |
| What would count as progress | Shorter completion times, fewer blocked items and less rework, without shifting the burden elsewhere. |

> *This would be a hypothesis to test. If the evidence points to a skill gap, training may be the right intervention. The purpose is to find a useful explanation before committing to a solution.*

Render as a semantic ordered list with stage labels on the left on desktop, stacked on mobile. Do not present a before-and-after improvement percentage, invented client or measured result.

Evidence requirements

Every future case study needs a client permission record, the starting situation, evidence reviewed, Sriram’s actual contribution, the change made, the observation period, measured results where available and limitations. Anonymous cases still require permission. State where outcomes may have other causes. If evidence is unavailable, keep the example explicitly illustrative.

Founder imagery

Reuse the real founder portrait already used on the current About page after confirming its source and permission. Crop portrait without cutting the face; use object-position near the eyes. Alt text: “Sriram Srinivasan, founder of Sriram Advisory”. Do not generate a substitute face. If the asset cannot be recovered, use the text-only hero and About layout until a genuine portrait is supplied; no stock consultant image.

Proof without unsupported claims

Keep the experience line and concrete areas of work. Do not imply institutional endorsement from employment history. Add outcomes, testimonials or logos only after approval. The launch page must look complete with the evidence available now; it must not display “coming soon” proof sections.

### Source §6 Homepage continuation and calls to action

Section 5 Publish copy

> *Start with one problem that matters.*

> *The Problem-Solving Sprint is a focused engagement to clarify one challenge, test assumptions and agree a practical course of action. You receive a problem brief, a decision note and a 30-day action plan.*

Button: Explore the Sprint → /services/problem-solving-sprint. Text link: See all ways to work together → /work-with-sriram. Do not display an unapproved price or duration in this section.

Section 6 Publish copy

> *Experience across how work is won, delivered and improved*

> *My experience spans projects and programmes, software delivery and quality, operations, sales and pre-sales, talent development, communication and technology adoption. These areas connect: a delivery problem can begin in a sales promise; a capability problem can begin in how work is organised.*

> *I bring those connections into the discussion while keeping the recommendation grounded in your circumstances.*

Link: About Sriram → /about. Use short prose, not a wall of capability icons.

Section 7 Publish copy

> *A useful way to look at the problem*

> *Short essays on work, decisions, technology and learning — written to make a practical difference.*

Feature the three complete launch essays supplied in Sections 11 and 12. Each card has category, title, summary, reading time and link. Do not use fabricated publication dates or views. Button: Browse the thinking → /insights.

Section 8 Publish copy

> *What are you trying to move forward?*

> *Tell me what is happening, what you have tried and what a useful outcome would look like. You do not need to arrive with a perfectly defined problem.*

Button: Discuss your challenge → /contact?interest=general. Secondary text: Prefer email? sriram@sriramadvisory.com.

Homepage boundaries

Remove the equal-weight two-practice selector, product-price cards and lengthy AI methodology explanation from the homepage. Retain their useful content in Resources, Careers and the service FAQ. No popup, autoplay video, rotating hero, chat widget, fake availability counter or unimplemented booking button.

Click attribution

For enquiry links set interest to general, sprint, implementation, workshop, health-check or career as appropriate. A validated source label may accompany the submission. Do not put private text, email addresses or challenge descriptions in query strings.

### Source §7 Work with Sriram page

Hero Publish copy

> *A clear starting point for a difficult problem*

> *Work with me to understand what is getting in the way, choose a practical response and help the agreed change take hold. We begin with one defined challenge and agree the scope before work starts.*

Primary button: Discuss your challenge → /contact?interest=general.

Service summaries Publish copy

| Offer | Description | Link label |
| --- | --- | --- |
| Problem-Solving Sprint | Clarify one problem, test assumptions and choose the next move. Receive a problem brief, decision note and 30-day action plan. | Explore the Sprint |
| Implementation Support | Turn an agreed recommendation into a defined piece of work, with owners, review points and a clear handover. | Explore implementation support |
| Team Workshops | Help a team understand a difficult issue and practise applying a useful approach to its own work. | Explore workshops |

Link each summary to its service route. Show the Sprint first. Do not imply the three offers must be purchased as a package.

Fit Publish copy

> *Where I can be most useful*

> *Delivery and operating problems that keep recurring. Technology decisions with unclear business value. Capability programmes that need a stronger connection to work. Communication and ownership gaps that make decisions harder.*

> *My strongest foundation is IT services and adjacent digital work. For other contexts, the first discussion establishes whether my experience fits your need.*

Engagement Publish copy

> *What we agree before starting*

> *The problem and intended outcome; people involved; evidence to review; deliverables; schedule; fee; and each person’s responsibilities. If the work needs a different specialist, I will say so.*

> *You receive advice and agreed support grounded in the available evidence. Business outcomes also depend on the decisions made, implementation and conditions outside the engagement.*

Additional route Publish copy

> *Looking specifically at delivery health?*

> *The Business and Delivery Health Check is a diagnostic review of one delivery area, with findings and a prioritised 90-day action plan.*

Link: Explore the Health Check → existing health-check route. Below: “Looking for help with a career decision? Explore Career Intelligence.” → /careers. Keep this secondary to business services.

### Source §8 Problem Solving Sprint page

Publish copy

> *Problem-Solving Sprint*

> *One important problem. A clearer decision and a practical next step.*

> *A focused engagement for leaders who need to understand a difficult situation before committing more time, money or effort to a solution.*

Button: Discuss a Sprint → /contact?interest=sprint.

> *A useful fit when*

> *A problem keeps returning; the team has competing explanations; a proposed solution needs testing; or the available information is not producing a clear decision.*

> *What you receive*

> *A problem brief describing the situation, intended outcome and constraints. A decision note setting out the evidence, assumptions, options and recommended direction. A 30-day action plan with agreed owners, first steps and review measures. A readout to discuss the findings and decisions.*

> *How we work*

> *First, we agree the question and boundaries. I speak with the agreed participants and examine a defined evidence set. I test the initial explanation, compare practical options and discuss the recommendation with you. We finish with an action plan and a scheduled review of the first steps.*

> *Scope and timing*

> *The Sprint covers one challenge and an agreed set of participants and materials. The proposal confirms the timetable, evidence required, fee and review date. Implementation beyond the agreed review is scoped separately.*

> *What the Sprint does not include*

> *An open-ended organisational review, outsourced delivery, technical certification or a guaranteed business result. Where the next step needs a specialist, that requirement will be made clear.*

> *Discuss the problem before choosing the engagement.*

Button: Discuss a Sprint → /contact?interest=sprint.

Operational baseline for proposal preparation

Proposed default: one sponsor, up to three stakeholder interviews of 45 minutes, up to five evidence items totalling 50 pages or an equivalent agreed dataset, one problem brief of up to two pages, one decision note of up to five pages, one action plan, one 60-minute readout and one 30-minute review within 30 days of the readout. Target delivery window is 10 business days after complete inputs. One factual correction round. Confirm capacity before accepting; keep these defaults off the public page until adopted. The public copy remains bounded without advertising an unconfirmed SLA.

### Source §9 Implementation support and workshops

Implementation Support Publish copy

> *Help the agreed change take hold*

> *A recommendation becomes useful when someone can act on it. I help turn an agreed decision into a defined piece of work with clear ownership, review points and a practical handover.*

> *Examples of support*

> *Simplifying a reporting process. Clarifying a sales-to-delivery handover. Establishing a decision and review routine. Piloting a capability programme. Helping a team evaluate a technology use case.*

> *What we agree*

> *A specific work package, outputs, responsibilities, time commitment and completion criteria. Your team retains responsibility for operating decisions and ongoing delivery. I take responsibility for the advisory, facilitation and artefacts explicitly included in the engagement.*

> *What you receive*

> *An agreed work plan, the documents or working practices defined in scope, progress reviews and a handover note identifying what is complete and what still needs attention.*

> *This is scoped support, not an unlimited delivery commitment. It can follow a Sprint or begin from an existing decision that is clear enough to implement.*

Button: Discuss implementation support → /contact?interest=implementation. Proposed operating default: one work package over four weeks, weekly review and one final handover. No implied daily availability or production-system access. Keep the public enquiry category enabled for scope discussions. Confirm capacity when proposing an engagement; do not imply a staffed delivery team or fixed availability.

Team Workshops Publish copy

> *Understand the issue together. Practise a useful response.*

> *A focused workshop helps a team work through a real challenge and leave with a shared understanding and practical actions.*

> *Workshop themes*

> *Framing the right problem. Making complex ideas understandable. Improving decisions and ownership. Connecting learning to work. Examining an AI use case before committing to it.*

> *What you receive*

> *A discovery discussion, a tailored agenda, facilitated exercises using an agreed example, and a short action summary. The proposal confirms participants, session format, duration and follow-up.*

> *Workshops use approved examples and material. They do not require participants to share confidential information in public tools.*

Button: Discuss a workshop → /contact?interest=workshop. Proposed operating default: one remote session of 90 minutes, up to 12 participants, one sponsor discussion and action summary within three business days. Recording only by prior agreement. Do not publish certifications or accreditation claims.

### Source §10 About and retained business pages

About Publish copy

> *I look for the explanation that helps the work move.*

> *I am Sriram Srinivasan, founder of Sriram Advisory. My experience spans 30 years of IT services work, including delivery, quality, operations, capability building, sales and pre-sales, communication and technology adoption.*

> *These areas influence one another. A delivery problem can begin with an unclear promise. A learning problem can begin with the way work is assigned. A technology decision can become easier when the business question is made more precise.*

> *My approach is to understand the context, examine the evidence, test the first explanation and make the options easier to discuss. The aim is a decision that people can act on and a way to learn from what happens next.*

> *How I work*

> *I explain the reasoning behind a recommendation. I distinguish evidence from assumptions. I make the scope and responsibilities explicit. I help with the agreed next steps and review what changes.*

> *Building as well as advising*

> *Alongside Sriram Advisory, I am developing Spanforge, focused on testing and security tools for AI agents.*

Link: Explore Spanforge → https://www.getspanforge.com. Same-tab link is acceptable; if opening a new tab, identify that accessibly. Button: Discuss your challenge → /contact.

Business page Publish copy

> *A practical perspective on IT services problems*

> *IT services is my strongest operating context. I help leaders examine recurring delivery issues, preventable rework, unclear ownership and gaps between commercial promises and execution.*

> *Start with the problem you need to resolve. A Problem-Solving Sprint can clarify the decision; a Business and Delivery Health Check can examine a defined delivery area; agreed implementation support can help put the chosen changes into practice.*

Link to those three services. Preserve /business for existing traffic. Remove the old long AI explanation and repeated generic service cards.

Health Check page implementation

Retain the current diagnostic deliverables: discovery, agreed evidence review, findings, 90-day action plan and leadership readout. Retain explicit exclusion of implementation from that package. Add this copy: “Need help acting on the findings? Implementation support can be agreed separately around a defined work package.” Link to /services/implementation-support. Keep current commercial and confidentiality boundaries. Replace shared navigation and footer. Preserve the existing illustrative label. Do not silently convert a previously purchased diagnostic engagement into a different service.

### Source §11 Thinking hub and launch essay one

Thinking hub Publish copy

> *Ideas that help you understand the problem and make a better decision*

> *Writing on work, organisations, technology and learning — with a practical question at the centre: what does this help us see or do differently?*

Categories: Decisions and judgment; Work and organisations; Technology in practice; Learning and capability. Add All as default. Search title, summary and article body. Preserve old category routes with explicit mappings. Server-render initial articles. If no results: “No articles match this search. Try a different term or view all thinking.” Clear search restores all.

Article one Publish copy

> *Before buying an AI tool, examine why the task exists*

> *Summary: A faster task is useful only when the task still serves a useful purpose.*

> *A team spends several hours assembling a weekly report. An AI tool promises to reduce the work to minutes. The saving sounds attractive. Before choosing the tool, there is another question to ask: what decision does this report help someone make?*

> *Perhaps the report identifies exceptions that need attention. Perhaps it creates a record required by a customer. Or perhaps it has continued for years without anyone reviewing why it is produced. Each answer leads to a different choice.*

> *If the report supports a decision, find out which information matters and how quickly it is needed. If it is a required record, preserve the relevant controls. If nobody uses it, test whether it can be stopped or reduced before automating its production.*

> *Automation can still be the right answer. But its value depends on what happens after the output is produced, including the effort needed to check it.*

> *Try this with one recurring task. Write down its purpose, its user and the decision or obligation it supports. Then ask what would happen if it were smaller, less frequent or absent. You may discover a useful automation opportunity. You may also discover a simpler change.*

Category: Technology in practice. Slug: /insights/before-buying-an-ai-tool. Label as an illustrative reasoning essay; no client attribution or invented research statistic. Footer CTA: Have a technology decision to work through? Discuss your challenge → /contact?interest=general.

### Source §12 Launch essays two and three

Article two Publish copy

> *When everyone is busy, look at the unfinished work*

> *Summary: Activity alone cannot tell you where progress is getting stuck.*

> *Imagine a team with full calendars and a growing queue of unfinished work. The first response might be to ask everyone to work faster. Before doing that, look at how much work has been started and how often priorities change.*

> *A task may take only a few hours of focused effort but spend days waiting for an answer, approval or another person’s contribution. Starting more tasks during the wait can make everyone appear productive while increasing the number of things that need attention.*

> *This does not mean that every delay is a coordination problem. The team may lack capacity, skills or adequate tools. The point is to distinguish time spent doing the work from time spent waiting or switching.*

> *Choose one small workflow. Record when an item starts, where it waits and when it finishes. Discuss the main source of delay with the people doing the work. Then try one bounded change, such as limiting concurrent tasks or clarifying who can make a blocked decision.*

> *Review completion time, rework and the effect on other teams. A useful change should improve the flow of work without simply moving the queue somewhere else.*

Category: Work and organisations. Slug: /insights/look-at-unfinished-work. Footer CTA: Is progress getting stuck? Discuss your challenge → /contact?interest=sprint.

Article three Publish copy

> *Training needs a place to become practice*

> *Summary: Course completion is a starting point for examining capability, not the final measure.*

> *A team completes a training programme. Attendance is strong and feedback is positive. Those are useful signals about participation and the learning experience. They do not yet tell us whether the work has improved.*

> *To examine that, choose a task the training was intended to strengthen. What should participants now be able to do? Where will they practise it? Who will give feedback? What would a better result look like?*

> *Sometimes the obstacle is the course itself. Sometimes the workplace gives people no opportunity to apply what they learned. A manager may still reward the old behaviour, or a process may leave no room to try a new approach.*

> *Before commissioning another programme, connect one learning objective to one real task. Arrange an opportunity to practise, a person to review the attempt and a date to examine the result. The first attempt may expose gaps; that is useful information for the next round of learning.*

> *The question is not simply whether people attended. It is whether the learning has a route into everyday work.*

Category: Learning and capability. Slug: /insights/training-needs-practice. Footer CTA: Working on a capability challenge? Discuss a workshop → /contact?interest=workshop.

All essays use Sriram Srinivasan as author and the actual approved publication date. Compute reading time at 200 words per minute. Include the proposed set in the final preview; omit withheld essays without empty cards.

### Source §13 Resources and career continuity

Resources hub Publish copy

> *Practical resources for work and career decisions*

> *Explore the current collection of career assessments, role guides and research. Each resource has a defined purpose; choose the one that fits the decision in front of you.*

Primary section: existing catalogue with search and type filters. Secondary section: “Working through a career decision?” with copy “Visit Career Intelligence for assessments and resources focused on role change, positioning and practical next steps.” Link /careers. Do not fabricate new business templates to fill the page.

Career hub Publish copy

> *Make your next career decision with better context*

> *Explore assessments, guides and research for professionals navigating changing roles, technology and expectations. These resources help structure your thinking; they do not predict or guarantee a career outcome.*

Keep the existing assessment and guide sections, verified prices, product descriptions and purchase destinations. Replace shared identity text. Keep the free exposure check functioning with its existing scoring and limitations. Do not rename products, alter assessment logic or recalculate scores as part of this redesign.

Catalogue behaviour

Use the existing product source as authoritative. Show title, type, summary and current price or Free label; preserve currency formatting and tax treatment. Keep all payment and fulfilment integrations. Server-render at least the initial catalogue; client-side filtering must not produce a permanently empty or loading-only page. On data failure show a retry control and contact link without showing invented products.

Desktop filters remain visible above the list; mobile uses a labelled collapsible filter section. Filters: existing types only. Search persists in URL query parameters q and type where supported. No-result message: “No resources match these filters. Clear filters to see the full collection.” Do not expose private downloads in listing payloads.

Route inventory and migration

Before editing, export the production sitemap and enumerate repository routes, content slugs, product records and links used by checkout, email receipts and assessments. Reconcile the inventories. Store a migration CSV with old URL, action, new URL, canonical, reason and test status. No unmapped existing route may be silently deleted.

Keep /insights rather than adding /thinking as a duplicate hub. Do not redirect every old route to the homepage. Use a permanent 301 only when a route truly moves to an equivalent destination. Preserve query parameters needed by checkout or assessments. Test each mapping for one-hop resolution and no redirect loops.

### Source §14 Contact page and submission experience

Publish copy

> *What are you trying to move forward?*

> *Tell me what is happening, what you have already tried and what a useful outcome would look like. A short description is enough to begin.*

> *Please do not include confidential project material, passwords, personal records or client-identifying information in this first message.*

| Field | Rules | Visible label or hint |
| --- | --- | --- |
| name | Required; 2 to 100 characters | Your name |
| email | Required; max 254; validate server-side | Email address |
| organisation | Optional; max 120 | Organisation |
| interest | Required enum; default general | What would you like to discuss? |
| challenge | Required; 20 to 2000 characters | What is happening? |
| attempts | Optional; max 1000 | What have you already tried? |
| outcome | Optional; max 1000 | What would a useful outcome look like? |
| privacy acknowledgement | Required checkbox; no marketing opt-in | I have read the Privacy Notice and understand how this enquiry will be handled. |

Interest labels: A business or technology challenge; Problem-Solving Sprint; Implementation support; Team workshop; Delivery Health Check; Career question. Invalid incoming interest parameters resolve to general. All six enquiry categories are enabled for initial discussions. A later owner-disabled service must disappear consistently from navigation, summaries, sitemap and form options; direct visits show a general enquiry invitation without an active offer.

Button: Send enquiry. Pending: Sending… Disable repeat submission while pending. Preserve values on failure. Focus the error summary and link each error to the field. Email fallback remains visible. No attachment input, phone requirement, budget requirement or forced account creation.

Success and failure copy

> *Success: Thank you. Your enquiry has been received. Sriram will review it and reply by email about a suitable next step.*

> *Failure: Your enquiry could not be submitted. Your text is still here. Please try again, or email sriram@sriramadvisory.com.*

Do not promise a 24-hour response unless it becomes an actual service commitment. Display success only after durable acceptance by the server. Do not display the entered challenge in the URL or send it to analytics. Direct email opens mailto:sriram@sriramadvisory.com. Retain a verified existing WhatsApp link only if the owner wants it; email and form are sufficient for launch.

### Source §15 Enquiry delivery and data handling

Server contract

Reuse a proven existing backend when it meets these requirements. Prefer a supported managed form service with durable storage and an owner inbox if the current backend is insufficient. The custom endpoint below is a fallback, not a requirement to build a CRM or queue platform. For that fallback implement POST /api/enquiries within the existing deployment architecture. Accept JSON only, maximum 32 KiB, enforce field limits, trim boundary whitespace and treat content as plain text. Never trust client-only validation. Reject unrecognised fields. Allowed interest values are the six enums defined above.

Use an Idempotency-Key UUID generated for one submission and retained across retries after timeout. Rotate it only after acknowledged success or after the visitor edits a field. Apply these semantics through the managed provider where supported, or in the custom endpoint. Persist it with a normalized payload hash for 24 hours. Same key and same payload returns the same success; same key with changed payload returns 409. Store the enquiry and a notification outbox record transactionally before responding 201 with an opaque enquiry ID. Database errors return 503 without success. Duplicate acknowledgements return 200. Validation returns 422 with field errors; rate limits return 429.

Use the existing provider’s durable notification/retry facility where available. If a custom outbox is necessary, use a unique job per enquiry, an authenticated scheduled worker, atomic claims and an observable failed-job state; do not add a message broker. Send notification to the configured owner mailbox from a verified domain sender. Use the validated visitor email as Reply-To, never as From. Escape content in the notification and never execute embedded markup. Retry provider failures with exponential backoff up to five attempts over 24 hours; retain the enquiry and alert the owner through the existing operational channel if delivery still fails. A durable enquiry can succeed while its email notification is pending.

Abuse prevention and privacy

Validate same-origin requests; use a honeypot and rate limiting, initially five submissions per 15 minutes per keyed IP hash and ten per day per normalized email hash. Monitor false positives and tune. Store no raw IP in the enquiry record. If a challenge service is necessary after abuse, use an accessible option and disclose the provider. Never put contact text, email, name or organisation into analytics or ordinary application logs.

Restrict enquiry storage to authenticated server access; no public read/list endpoint. Reuse the existing operational inbox or protected admin process. Document a retention decision before launch: proposed default is deletion of unconverted enquiries after 180 days; active client records follow the agreed service policy. Reflect the actual chosen storage, email processors and retention in the Privacy Notice. Do not state legal compliance certifications without review.

Configuration and operational handoff

Document actual environment names for database connection, email provider credential, sender, recipient, rate-limit hashing secret and public origin. Keep secrets server-side; no public-prefixed secret variables. Provide setup, retry inspection, deletion and rotation instructions. Test real delivery to the owner’s approved test mailbox before release. If backend credentials are unavailable, use a clearly identified email-only preview or owner-accepted interim release. Hide the form and show direct email. This is not completion of the full specification; contact acceptance tests remain open. Never ship a success-only mock form.

### Source §16 Visual system and responsive behaviour

Design direction: calm, editorial and personal. A clear reading experience, a genuine founder portrait and substantive examples should carry the site. Avoid generic corporate stock imagery, neon AI graphics, glass effects and excessive card grids.

| Token | Value or rule |
| --- | --- |
| Page background | #FAFAF7 |
| Primary text | #172026 |
| Secondary text | #46525A |
| Link and primary button | #174D4A with white button text |
| Borders | #D7DEDA; do not use as sole control boundary |
| Heading font | Georgia, Times New Roman, serif; system fonts only |
| Body font | System sans serif stack; no font network dependency |
| Content width | 1160 px maximum; article text 720 px |
| Gutters | 20 px mobile; 32 px tablet; 48 px wide screens |
| Type | Body 18 px desktop and 17 px mobile; line height 1.6 |
| Headings | H1 clamp 36 to 60 px; H2 28 to 38 px; restrained weight |
| Spacing | 8 px base; 64 to 88 px section spacing desktop; 40 to 56 px mobile |
| Controls | Minimum 44 px hit area; visible 3 px focus outline with offset |

Verify actual colour combinations against WCAG AA. No fixed-height text containers. Hero is a two-column grid at 960 px and above with approximately 60 percent text and 40 percent portrait. Use a 4:5 portrait ratio and maximum width 360 px. Below 960 px stack with copy first. Article lists use three columns at 1100 px and above, two from 700 to 1099 px and one below 700 px.

Header is non-sticky by default to preserve mobile space. Footer is simple text links. Buttons use sentence case, clear verbs and one primary action per section. Links in prose are underlined. Avoid all-caps paragraphs and justified body copy. Respect prefers-reduced-motion; motion is optional and never necessary to access content.

Accessibility and content behaviour

Use semantic landmarks, one H1 per page, ordered heading levels and a skip link. Forms use persistent labels and described errors. Focus must remain visible; keyboard users can reach every action. No text embedded in images. For diagrams use semantic text equivalents. At 200 percent zoom and at 320 px width no horizontal overflow or clipped controls. Browser back must preserve normal navigation and filter state.

### Source §17 Technical implementation and content model

Use the existing application

Inspect package files, routes, content sources, deployment settings and active integrations before choosing changes. Reuse the installed framework and existing hosting; do not rebuild or upgrade the stack solely for this repositioning. If the project is Next.js, retain its current routing model and use server rendering or static generation for public content. Do not introduce a CMS, database or animation framework just for brochure copy.

Keep editorial copy in a structured content module or the existing CMS. If no CMS exists, use repository-managed MDX for articles and typed content objects for landing and service pages. Owner edits should not require changes to layout components. Preserve environment settings and payment integrations. Never hardcode production credentials or expose private files in the public bundle.

Content records

| Record | Fields |
| --- | --- |
| Page | path, title, description, heading, ordered sections, CTA labels and targets |
| Article | slug, title, summary, body, category, author, publishedAt, updatedAt, status, featured, sources |
| Service | slug, title, summary, fit, deliverables, process, boundaries, interest enum, enabled |
| Resource | Existing product ID, slug, type, price and fulfilment fields; preserve source schema |
| Site settings | Founder name, approved experience line, email, portrait, navigation, footer, social links |

Article status is draft or published. Drafts must not appear in sitemap, public API responses or related-content lists. Featured articles are an explicit ordered selection, maximum three. Do not use random selection. Dates reflect actual publication. Future publication dates remain draft unless a real scheduling mechanism exists.

Reusable components

Implement one shared header and footer, a text-and-portrait hero, section heading, situation list, worked-example steps, service summary, article card, article body and contact form. Avoid making every section a card. Components accept content data and follow the same responsive spacing rules.

Failure states

For missing or draft article show a proper HTTP 404 with links to Thinking and Contact. For broken catalogue data show a retry and contact option. For unavailable optional portrait use the approved text-only layout. Missing source documents must not generate invented claims. External links receive normal safe navigation attributes. No dead buttons, lorem ipsum, TODO text or fake charts in production.

### Source §18 SEO and publishing metadata

| Page | Title tag |
| --- | --- |
| / | Sriram Advisory \| Clear Thinking and Practical Progress |
| /work-with-sriram | Work with Sriram \| Sriram Advisory |
| /services/problem-solving-sprint | Problem-Solving Sprint \| Sriram Advisory |
| /services/implementation-support | Implementation Support \| Sriram Advisory |
| /services/team-workshops | Team Workshops \| Sriram Advisory |
| /business | IT Services Advisory \| Sriram Advisory |
| /about | About Sriram Srinivasan \| Sriram Advisory |
| /insights | Thinking on Work and Technology \| Sriram Advisory |
| /resources | Career Resources and Guides \| Sriram Advisory |
| /contact | Discuss Your Challenge \| Sriram Advisory |

Homepage description: “Work with Sriram Srinivasan to understand complex business and technology problems, test assumptions and turn decisions into practical action.” About description: “Meet Sriram Srinivasan and explore his approach to delivery, capability, technology decisions and practical problem-solving.” Service descriptions use their supplied opening summary. Preserve specific career and product metadata unless it conflicts with the new shared identity.

Set one canonical URL per indexable page using the production www origin. Update sitemap and robots rules from the verified route inventory. Do not include drafts, enquiry endpoints, success states or parameter-filter variants in the sitemap. Filtered resource and insight views canonicalise to the unfiltered hub unless existing SEO requirements justify a curated category route.

Use Person and Organization structured data only for verified facts, and Article for published essays. Do not add Review, AggregateRating, awards, alumni or client relationships without evidence. Open Graph image uses the brand name and primary message, optionally the real approved portrait; create with HTML/SVG design or existing approved assets. Avoid generated portraits. Provide a 1200 by 630 image, descriptive alt and absolute URL.

Performance targets

Target LCP at most 2.5 seconds, INP at most 200 ms and CLS at most 0.1 at the 75th percentile when real-user data exists. Before launch, use representative mobile lab tests and report the conditions; do not claim field performance from a lab score. Set width and height for images, compress the portrait to an appropriate modern format with fallback, lazy-load below-fold imagery and avoid client-side fetching for the initial article and resource content.

### Source §19 Analytics and acceptance tests

Measurement

Reuse an existing privacy-respecting analytics setup if present. Otherwise analytics is optional and must not block launch. Track CTA click, service-page view and server-accepted enquiry, with page, interest and CTA label only. No text fields or personal data. Do not record search query values; redact q and other free-text URL parameters from analytics page URLs. Do not treat button clicks as leads. Proposed business measures: qualified enquiries, discussions held, proposals and paid engagements. Establish a baseline before setting conversion targets.

| ID | Acceptance test | Pass condition |
| --- | --- | --- |
| A01 | Identity consistency | All routes use one header/footer; no old global straplines. |
| A02 | Homepage comprehension | Independent reviewer identifies who Sriram helps, how and how to enquire. |
| A03 | CTA audit | Every supplied button reaches its correct page or anchor. |
| A04 | Mobile and zoom | 320, 390, 768 and 1440 px plus 200 percent zoom pass without overflow. |
| A05 | Keyboard and screen reader | Menu, forms and filters work; headings and errors are understandable. |
| A06 | Worked-example integrity | Illustrative label is visible; no implied client outcome. |
| A07 | Contact validation | Invalid values rejected client and server; valid values stored once. |
| A08 | Notification reliability | Provider failure retries; stored enquiry survives; false success impossible. |
| A09 | Commerce regression | Existing product, checkout, fulfilment and assessment tests pass. |
| A10 | Migration and SEO | Existing routes retained or mapped; no loops, bad canonicals or draft indexing. |
| A11 | Privacy | No message or personal fields in analytics, URLs or ordinary logs. |
| A12 | Content completion | All pages have final copy; no loading-only, placeholder or empty proof sections. |

Additional form tests

Submit twice with the same key; simulate timeout after server acceptance; retry changed payload; submit invalid interest, oversized body, HTML-like text and missing checkbox. Confirm 409, 422 and 429 paths. Test database failure and notification failure separately. Confirm no enquiry read API is public and no server secrets appear in the browser bundle.

Performance and release evidence

Record tested URLs, viewport sizes, build identifier, accessibility findings, link report, form-delivery evidence, migration CSV and commerce test outcome. Complete a production smoke test immediately after release. Do not state the site is finished while enquiry delivery or preserved customer journeys are unverified.

### Source §20 Delivery plan and completion checklist

Implementation sequence

1. Inventory the current repository, routes, assets, catalogue and integrations. Capture existing behaviour and a rollback reference. 2. Build the shared shell, visual tokens and homepage. 3. Implement service, About and Thinking pages with supplied copy. 4. Integrate Resources and Careers without changing commerce logic. 5. Implement and verify the contact workflow. 6. Complete metadata, migration mapping, responsive and accessibility work. 7. Run all acceptance checks, present the preview and release only after required content and operational sign-off.

Owner inputs and safe defaults

| Input | If unavailable |
| --- | --- |
| Genuine portrait | Use text-only layout; do not fabricate a person. |
| Verified experience details | Use only already approved facts; omit unsupported specifics. |
| Service commitments | Public pages invite discussion; confirm actual scope, fee and capacity in each proposal. |
| Essay sign-off | Preview the supplied essays; omit any withheld item without empty cards. |
| Contact backend credentials | Use explicit email-only mode; report reduced functionality. |
| Client proof | Omit testimonials and client logos entirely. |
| Pricing decision | Use scope-and-fee-agreed copy; no invented prices. |
| Privacy processor and retention decision | Resolve before collecting data through the new form. |

Developer handover contents

Deliver the working repository changes, deployment instructions, route migration CSV, content-location guide, service-enable configuration, environment variable names without values, form operations guide, test evidence and rollback steps. Provide a concise change summary identifying any disabled optional item. Do not leave a new platform dependency undocumented.

Release and rollback

Use the existing hosting pipeline. Preserve the last known-good deployment and make database changes backward-compatible. Check production navigation, enquiry delivery and commerce after deployment. If critical paths fail, restore the previous deployment and preserve received enquiries for recovery; never discard new data during rollback. Keep the www canonical and existing domain ownership configuration.

Readiness statement

This specification supplies the launch narrative, copy and build behaviour. A developer should not need to invent positioning, content structure, new testimonials or service pricing. Repository discovery and the listed owner approvals remain necessary because this document does not grant credentials or verify unobserved backend behaviour.

### Source §21 Audit basis and final editorial checks

Audit date: 10 October 2026. The review used retrieved public page text, not a source-code inspection, visual accessibility audit or payment test. Retrieved About and Contact pages showed an older identity; their crawl dates differed from the homepage, so verify current live output before classifying this as a deployment defect.

| Reviewed URL | What informed this specification |
| --- | --- |
| https://www.sriramadvisory.com/ | Two-practice homepage and current delivery/career emphasis. |
| https://www.sriramadvisory.com/business | Delivery, operations and capability expertise. |
| https://www.sriramadvisory.com/about | Founder identity and experience context. |
| https://www.sriramadvisory.com/contact | Existing email contact and general enquiry form. |
| https://www.sriramadvisory.com/insights | Existing hub route and IT-services framing. |
| https://www.sriramadvisory.com/resources | Existing catalogue entry point. |
| https://www.sriramadvisory.com/careers | Career hub and retained product journeys. |
| https://www.sriramadvisory.com/services/business-delivery-health-check | Diagnostic scope and explicit implementation exclusion. |

Final content checklist

The hero names a useful outcome. Sriram is visible as the person behind the business. Examples demonstrate reasoning rather than claim brilliance. Services specify outputs and boundaries. Implementation support is described honestly. Career products remain discoverable. Spanforge appears in an appropriate supporting context. Contact is simple and operational. No external thinker’s name is used as an implied affiliation. The final impression is clear thinking connected to practical progress.

### Source §22 Service FAQ and enquiry microcopy

Place this FAQ near the bottom of /work-with-sriram, before the final contact invitation. Use native details and summary or accessible disclosure buttons; all answers remain present in server-rendered HTML. Start closed. Do not repeat the full FAQ on every page.

FAQ Publish copy

> *Do I need to know exactly what the problem is?*

> *No. Describe what is happening and what you want to improve. The first discussion helps establish the question and whether I can be useful.*

> *Do you only work with IT services businesses?*

> *IT services and adjacent digital work are my strongest foundation. For another context, we begin by checking whether my experience fits the problem.*

> *Will you help us implement the recommendation?*

> *Yes, where the work fits my experience and we agree a defined scope. Implementation support is a separate commitment with clear outputs and responsibilities. It is not automatically included in a diagnostic review.*

> *How are fees and timing agreed?*

> *The proposal confirms the work, deliverables, schedule and fee before the engagement begins. Sending an enquiry does not commit you to a paid service.*

> *How do you use AI?*

> *AI may help organise agreed information and explore possible interpretations. I review the evidence and take responsibility for the advice. Any use of client material is agreed in advance; sensitive material is not entered into public AI tools by default.*

> *What should I send first?*

> *A short description of the situation is enough. Please do not send confidential files or personal records with the initial enquiry. We can agree what evidence is needed later.*

> *Do you guarantee an outcome?*

> *I commit to the agreed work and deliverables. Business outcomes also depend on implementation, decisions and conditions outside the engagement.*

Exact form errors

Name: “Please enter your name.” Email: “Enter a valid email address.” Challenge: “Please describe the situation in at least 20 characters.” Length: “Please keep this answer within the stated limit.” Checkbox: “Please read and acknowledge the Privacy Notice.” Rate limit: “Too many attempts. Please wait and try again, or email Sriram directly.” Error summary: “Please check the highlighted fields.”

Optional outcome hint: “If you are not sure yet, you can leave this blank.” Privacy Notice is an actual link to the retained policy route. Pending, success and failure messages use an aria-live region; focus moves to the success heading only after acceptance. Never clear the message before acknowledgement.

### Source §23 Article and directory page contracts

Article detail layout

Order: breadcrumb Home / Thinking; category; H1 title; summary; author and publication date; article body; sources when present; one relevant enquiry CTA; up to two related articles; Back to Thinking. Use a 720 px reading column, no sidebars or required hero image. Keep the site header and footer. Use the supplied title as H1 and summary as meta description. Article cards do not show an invented picture.

Related articles are selected from the same category by publication date, excluding the current article; fall back to the latest approved articles, then omit the block if none exist. No newsletter form, comments or social counters in launch scope. An optional Copy link control copies the canonical URL and announces “Link copied”. Failed clipboard access leaves the canonical URL selectable.

Search and pagination

Both directories use URL-backed filters. Thinking accepts q, category and page; Resources accepts q, type and page. Search is case-insensitive and whitespace-normalised, with a 100-character maximum. Filtering matches all entered words against title, summary and plain-text article body or resource description. Submit with Enter or a Search button; changing filters resets page to 1. Do not require a new search service for this catalogue.

Use 12 items per page with Previous and Next links and a result count. Unknown category/type falls back to All. Invalid or negative page resolves to 1. Pages beyond the result count show the last available page or an empty result state when no records match. Browser back restores query state. Initial results and pagination links are rendered on the server. On mobile provide labelled controls; do not rely on a placeholder as the search label.

Archive migration rules

Preserve article bodies, original publication dates and verified bylines. Classify delivery, operations, sales and organisation articles under Work and organisations; practical AI and digital-safety pieces under Technology in practice; education and training under Learning and capability; decision-making and judgment under Decisions and judgment. Career-only pieces may retain a Career decisions category for the archive. Inspect ambiguous pieces individually; do not rewrite factual claims just to fit a category.

Retain any existing public category URL that has useful content. If it is replaced, map it to an equivalent curated category page with a 301. Do not redirect an entire article archive into a query string without reviewing indexability and existing traffic. Only the four primary categories receive homepage prominence.

Publication workflow

Content editor adds the article to the existing CMS or repository, previews it, confirms title, summary, links, sources, date and category, then publishes through the existing deployment workflow. Publish updates use the actual updatedAt date. A content-only change must not require editing component markup. Developer handoff includes one demonstrated article edit and one demonstrated service-copy edit.

### Source §24 Form implementation choices and data contract

Choose the smallest reliable implementation

Option A is the existing working contact integration, extended only where necessary. Option B is a managed provider with durable submissions, a protected inbox, export/deletion capability and documented delivery failures. Option C is the custom endpoint described in Section 15. Choose in that order. The developer records the selected option and how it satisfies storage, duplicate protection, validation and notification checks. Do not require an outbox database on top of an equivalent managed facility.

Canonical submission fields

Use name, email, organisation, interest, challenge, attempts, outcome, privacyAcknowledged and source. Optional strings default to empty. privacyAcknowledged must be true. source is optional and must belong to an allowlist of known page IDs; unknown source becomes contact. Store noticeVersion and acceptedAt on the server. Include a website honeypot field in the transport only and do not retain it as enquiry content. Count field lengths in Unicode code points; validate byte size separately.

Interest mapping: general = A business or technology challenge; sprint = Problem-Solving Sprint; implementation = Implementation support; workshop = Team workshop; health-check = Delivery Health Check; career = Career question. Client query fallbacks must not weaken server enum validation. Never lowercase the email local part for delivery; use a normalised comparison value only for duplicate/rate checks.

Custom endpoint response contract

Success body: {"ok":true,"enquiryId":"opaque-id"}. Validation: {"ok":false,"code":"validation_error","fieldErrors":{"email":"Enter a valid email address."}}. Conflict, rate limit and transient failure use codes idempotency_conflict, rate_limited and temporarily_unavailable. Do not echo submitted fields or internal exception text. Rate-limited responses include Retry-After. Client handles 413 as a length error and 415 as an unsupported request error without losing the message.

Create a canonical payload for hashing from the trimmed fields in a fixed order, excluding honeypot and derived metadata. Same-key concurrent requests use a unique constraint or provider equivalent to produce one enquiry. Allow a same-key retry to return prior success before applying new-submission quotas, but still apply basic abuse protection. Rate-limit hashes use a server secret and expire after their active window; do not trust user-supplied forwarding headers outside the hosting provider’s trusted proxy contract.

Operational acceptance

The owner must have an authenticated way to recover a stored enquiry even if notification fails. For a custom endpoint, provide a documented protected export/retrieval procedure without building a public admin app. Retry notification after 1 minute, 5 minutes, 30 minutes, 2 hours and 12 hours; a worker claims a job once and records attempts. Duplicate email after an uncertain provider acknowledgement is possible and must carry the same enquiry reference. Never claim exactly-once email delivery.

### Source §25 Revision findings and launch decision

| Finding in version 2.0 | Version 2.1 correction |
| --- | --- |
| Copy and build notes mixed | Exact public paragraphs are italic and indented; other prose is guidance. |
| Form backend too prescriptive | Reuse existing integration or managed durable form provider before custom development. |
| Incomplete retry semantics | Retain submission key after timeout; define payload fields, responses and duplicate handling. |
| Email fallback called finished | Interim email-only mode is explicitly distinct from full acceptance. |
| Missing service FAQ | Final FAQ copy supplied, including AI use, fees and implementation scope. |
| Missing article template | Define detail layout, related content, search, pagination and editorial workflow. |
| Scope and launch ambiguity | Enquiry categories invite scoped discussion; internal proposal defaults are not public promises. |

Mandatory full release gates

Content: final preview approved, portrait or text-only fallback verified, no unsubstantiated claims, all published essays checked. Functional: stored enquiry, notification and recovery proven; every CTA works; current checkout and assessment journeys pass. Technical: shared identity, canonicals, route mappings, mobile, keyboard and server-rendered initial content verified. Operational: actual processors and retention reflected in the policy, secrets configured, owner recovery process demonstrated and rollback recorded.

Interim release rule

An email-only site can be launched only as an explicitly accepted interim release. It must show the email contact clearly, remove the inactive form and record enquiry-form acceptance as outstanding. Do not display a form that reports success without a receiving system. Optional analytics, client testimonials and extra imagery are not completion blockers.

Positioning acceptance

Ask three people resembling the intended buyer to view the homepage for 30 seconds and answer: Who is this for? What would you contact Sriram about? What makes his approach useful? What happens next? Pass when at least two independently identify clear thinking about a difficult business or technology problem plus practical follow-through and the enquiry route. If they describe only a career-guide shop or generic AI consultancy, revise the hierarchy before launch. This is a proposed usability check, not a claim that testing has happened.

### Source supplemental part: word/footer1.xml

Sriram Advisory  |  


## Owner-approved brand follow-up

The owner authorised implementation of the site-wide brand review and use of the supplied LinkedIn profile. This supersedes the original homepage/resources copy and generic framework redirect where described in `docs/BRAND_IMPLEMENTATION.md`. The three supplied essays remain complete. Commercial IDs, prices, scoring and payment APIs retain their original contracts. New consulting resources, clearer offer comparison, qualified analytical claims, explicit Pro refund promise and retained-template presentation are implemented locally.


Owner-approved positioning update: the consulting journey now centres on recurring problems, overlooked causes and practical next steps. The homepage demonstrates hypothesis testing with explicitly illustrative examples, gives the Problem-Solving Sprint a prominent entry point and removes a repeated process section. About, service overview, Sprint, contact, Thinking and shared identity copy use the same message. No client results, fees or duration commitments have been invented.
