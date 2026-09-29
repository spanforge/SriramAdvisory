# Sriram Advisory website rewrite — implementation plan

Planning baseline: `Sriram_Advisory_Website_Development_Specification_v1_1.docx`, version 1.1, 28 September 2026. Prepared 29 September 2026 after reading the complete specification, including tables, and inspecting the repository. This document plans implementation; no application changes or deployment have been made.

The specification remains authoritative for exact publication copy, field contracts and acceptance wording. References below use its section numbers, including **8A**. Older website specifications do not override v1.1. Every numbered specification section and all 24 acceptance tests are mapped below.

## 1. Delivery objective and scope

Rebuild the public experience around four pillars, in this order:

1. Careers and Capabilities — `/careers`.
2. Business and Delivery — `/business`.
3. Technology and Digital Safety — `/technology-digital-safety`.
4. Education & Learning — `/education`.

Use the descriptor “Practical guidance for better learning, better work and safer digital lives.” and primary promise “Strengthen learning and careers. Improve business performance. Use technology wisely.” This is a substantial information architecture, content, design and enquiry-system rewrite within the existing application and hosting arrangement.

Preserve existing products, IDs, valuable URLs, assessment scoring, checkout, customer downloads, receipts, fulfilment and update entitlements. The two starting offers are the existing Career Risk Audit and, when delivery readiness is approved, the Business and Delivery Health Check. New services are enquiry-led, with written scope before sale. Technology and Digital Safety remains an informational and advisory pathway. Education launches with editorial material and general discussion, without a service, price or booking flow.

Excluded: accounts, customer portal, LMS, community, chatbot, new scoring engine, automated business diagnostic, scheduling integration, subscription billing, incident response service, new desktop software, separate corporate microsite, visual CMS, custom admin console and speculative coming-soon catalogue. No framework upgrade is required.

## 2. Repository findings and immediate implications

| Observed evidence | Implementation implication |
| --- | --- |
| `package.json`: Next.js 16.2.3, React 19.2.4, TypeScript, Tailwind 4; `package-lock.json` present | Retain App Router and npm lockfile; verify actual installed/locked versions in baseline. Read installed `node_modules/next/dist/docs/` before code changes. |
| `README.md` says Vercel but also describes Razorpay and old admin variables | Treat hosting as documented, not independently verified. Replace stale setup/integration documentation after account inspection. |
| `app/api/create-order/route.ts`, `app/api/verify-order/route.ts`, `components/CashfreeCheckout.tsx` use Cashfree | Preserve payment integration and return route. Establish distinct live payment and fulfilment paths before redesign. |
| Order creation fixes prices for three exposure product codes but otherwise accepts a client amount; checkout commonly supplies product name and amount | Record a commerce integrity issue. Reconcile server-authoritative pricing with actual products; any necessary commerce remediation must be a separately approved work item under specification §13, not an incidental redesign. Critical unresolved payment defects block release. |
| `/payment-status` verifies provider state server-side, but chooses explanatory copy from the product query string | Preserve verified payment state. Audit misleading delivery/failed-payment copy against actual commitments; query text must never determine entitlement. |
| Only create-order and verify-order API handlers found in the route listing | Local inspection does not establish production webhook, receipt, fulfilment or entitlement infrastructure. Locate external/manual mechanisms; do not assume they do not exist. |
| `lib/siteCatalog.ts`, `lib/guideSalesContent.ts`, `lib/bundlesCatalog.ts`, assessment pages and checkout props contain catalogue/commercial content | Reconcile into a verified binding layer; avoid deriving checkout authority from formatted display-price strings. Preserve bundle contents and customer promises. |
| Contact posts directly to Formspree; free guide lead form has its own Formspree endpoint | Replace the main Contact journey with the required transactional enquiry backend. Preserve and separately verify existing free-guide delivery/gating; do not introduce gates on new free resources. |
| Beehiiv component exists; Vercel Analytics mounts in root layout; tracking calls occur in multiple components | Verify newsletter, consent and unsubscribe. Introduce a central event allowlist and consent gate, including existing calls. Omit unverified optional integrations. |
| `TrackedLink` sends `href` | Avoid forwarding full URLs/query strings into events; audit page-view collection as well as custom events. |
| Article records live inside `app/insights/[slug]/page.tsx`, imported by index and sitemap | Extract records to a content module, preserving article slugs, body, dates and sources. Add publication-state enforcement. |
| Pages frequently render their own Navbar/Footer; layout owns fonts, floating WhatsApp and analytics | Refactor shell ownership deliberately and remove duplicate shell rendering in the same change. Protect assessment and checkout layouts from global CSS changes. |
| Existing fonts are Google-loaded Bebas Neue, DM Sans and DM Mono | Introduce specified typography using approved self-hosted Inter when available, otherwise system sans; verify legacy layout effects. |
| `public/sriram.png` exists; no separate logo asset was established in this inspection | Reuse approved portrait and verify the existing logo/wordmark treatment. Do not invent assets or credentials. |
| Sitemap uses non-www origin; specification proposes www subject to configuration | Verify domain ownership and host redirects before choosing canonical origin. |
| Existing permanent redirects include `/frameworks/:path*`, `/products`, `/services`, `/our-thinking`, `/snapshot`, `/ai-champion` and an old field-notes product | Inventory their actual statuses/targets. Resolve the specification's 301 requirement using installed framework/hosting semantics; `permanent: true` alone must not be assumed to mean 301. |
| Package scripts contain dev/build/start/lint, without a test script | Add focused automated checks for publication, forms, transactions, routes and critical customer journeys. Record baseline lint/build issues separately. |

Public spot-checks of [Home](https://www.sriramadvisory.com/) and [Contact](https://www.sriramadvisory.com/contact) also show the career-centred navigation and existing contact flow. These checks are not a complete crawl, hosting verification or commercial audit. No production credentials, provider consoles or customer records were accessed during planning.

## 3. Execution sequence and gates

| Milestone | Work packages | Depends on | Exit evidence |
| --- | --- | --- | --- |
| M1: inventory and shared design | W01 baseline; W02 content/config contracts; W03 visual system and shell | Repository and existing configuration discovery | Route/catalogue baselines, decision log, component preview, recorded deployment/commerce risks |
| M2: homepage, pillars and service templates | W04 all primary pages; W05 service availability and content | M1 contracts and shell | Responsive preview with exact copy, correct links and unavailable states; Education works without content |
| M3: resources, migration and enquiries | W06 directories/articles/About/legal; W07 form/API/storage/notification; W08 SEO/analytics | M1 contracts; provider test setup for integration | Migrated content, working query state, durable enquiries and outage tests, indexing/tracking checks |
| M4: regression, review and launch | W09 quality/commerce/migration; W10 approval/release/handover | M2–M3, verified production dependencies | AT01–AT24 evidence, owner decisions, tested recovery, production smoke results and handover |

Start discovery of database, email, hosting schedules, commerce and owner content in M1; these must not wait until the end of M3. Implement with isolated test configuration while production values and business approvals are resolved. Estimate implementation effort after W01 and provider inspection, including external lead times; this plan does not invent a completion date.

## 4. W01 — baseline, inventory and migration controls

Specification §§1–3, 13, 16, 18–19.

- Record framework/router, lockfile, installed versions, build commands, deployment project, environments, storage, catalogue, payments, webhook ownership, delivery mechanisms, email, analytics and environment-variable **names** in README. Never copy secret values into records.
- Establish a source branch and baseline release/commit before implementation. Capture representative screenshots, metadata, free-check input/output fixtures, checkout paths and existing purchase/update promises.
- Generate a complete route inventory from source routes, dynamic article/content records, sitemap, redirects and a production crawl. Include old campaigns, unlinked pages, customer downloads, legal routes, aliases, query contracts and fragment links.
- Inventory columns: source URL, observed status, title, canonical, incoming navigation, product association, existing destination, proposed action, target/status if redirected, reason, test result and owner.
- Catalogue columns: existing ID/provider reference, detail route, price/currency/tax, availability, deliverables, bundle membership, checkout destination, receipt/delivery path, customer access, updates and authoritative evidence.
- Identify the actual fulfilment owner and each distinct path: guide/report download or email, bundle delivery, assessment/service coordination, free-tool paid follow-ups and any externally hosted checkout. Confirm rather than infer which paths are live.
- Preserve `/guides`, `/bundles`, `/reports`, `/assessments`, their detail URLs and `/tools/free-ai-exposure-check`. Record the exact mappings for Career Risk Audit (`/products/airs-assessment`) and Career Positioning Audit (`/services/career-positioning-audit`) against live catalogue records.
- Review `/career-intelligence-report`, `/get-started`, `/report`, `/products/pro-edition`, `/ai-literacy`, `/ai-delivery-intelligence`, `/free`, `/about/our-thinking`, `/system`, `/methodology`, `/cases` and framework routes individually; do not infer retirement merely because they are absent from the new top navigation.
- Keep useful legacy pages. Use exact 301 mappings only where appropriate; preserve queries when required. Retired material without an equivalent gets an accurate retirement page or 410. Unknown paths return real 404s. No blanket homepage redirects, loops or chains.
- Snapshot deployment and data/configuration references securely. Identify rollback operator and access. Run baseline lint/build and record existing failures before implementation.

Deliverables: updated README; `docs/rewrite/route-inventory.csv`; `catalogue-inventory.csv`; `decision-log.md`; baseline screenshots/test evidence; safe deployment backup references. Proposed documentation paths are implementation targets, not files already generated by this plan.

## 5. W02 — configuration, content and publication model

Specification §§2, 10, 13, 18.

Prefer typed records and committed Markdown with static public rendering; use MDX only if needed and trusted. Keep business content out of page components. No visual CMS or admin application.

| Record | Required contract |
| --- | --- |
| SiteConfig | brandName, descriptor, canonicalOrigin, verifiedEmail, WhatsAppURL, LinkedInURL, navigation, feature flags; no secrets |
| Pillar registry | Stable IDs `career`, `business`, `technology-digital-safety`, `education`, public labels, order, routes and legacy tag aliases |
| Offering | id, slug or legacyURL, title, summary, audience, pillar, availability, mode purchase/enquiry, CTA, deliverables, exclusions, commercialText, optional productId |
| Product binding | Preserved ID, detailURL, provider reference, currency, price, tax treatment, entitlement and fulfilment rules; existing verified commerce authority wins |
| Resource | id, title, summary, topic, format, access, destination, publishedAt, optional productId and featuredRank; searchable role metadata where relevant |
| Article | id, existing slug/URL, title, summary, topic, author, body, dates, status, sources, image/alt and relevant CTA; safety reviewed date |
| ProofAsset | type, approved text/asset, attribution, consent reference, approval date, publish flag |
| Redirect | Exact source, target, status 301, reason, test result |

Add explicit publication state wherever needed for resources/offerings so a shared publication predicate controls direct routes, cards, related content, searches, feeds and sitemaps. Drafts and future-dated records are never publicly retrievable. Draft preview must be protected; document how scheduled publication becomes visible, such as a scheduled rebuild.

Map `technology` and `digital-safety` tags to the technology pillar. Keep `capability` as an enquiry interest/optional secondary tag. Preserve legacy topic URLs with explicit aliases. Education topic and pillar both use `education`; no published education offering in this release.

Build validation rejects duplicate IDs/slugs, missing fields, unsafe URLs, broken internal references, unpublished CTA targets and purchase cards without valid product bindings. Reject untrusted scripts/HTML. Validate real download destinations and provide contact fallback plus operator alerts for failures.

Separate server secrets from browser-visible config. Required production values fail deployment validation; optional analytics/newsletter absence disables their UI/tracking. Separate development, protected/noindexed preview and production, with test payments and test recipients outside production. Document placeholder `.env.example`; the current `.env*` ignore rule will need a narrow `!.env.example` exception.

Current payment variable names observed: `CASHFREE_APP_ID`, `CASHFREE_SECRET_KEY`, `CASHFREE_ENV`, `NEXT_PUBLIC_CASHFREE_ENV`, `NEXT_PUBLIC_BASE_URL`. Reuse safely and verify public/private modes agree. Contact enquiries use the existing owner-controlled Formspree form, matching the previous site and avoiding additional enquiry infrastructure.

## 6. W03 — visual system, navigation and shared shell

Specification §§3–4, 15.

| Token | Required value |
| --- | --- |
| Surfaces | White `#FFFFFF`, alternate `#F5F7FA` |
| Text | Primary `#17212B`, secondary `#475569` |
| Brand/actions | `#173B4B`, white button text; restrained accent `#0F766E` |
| Borders/focus | `#D8E0E6`; visible 3px focus ring with offset |
| Type | Approved self-hosted Inter or system sans; body 18px desktop/16px mobile, H1 48/34px, H2 32/26px, body line-height 1.5 |
| Width/padding | Content 1200px, prose 720px; horizontal padding 24/16px |
| Spacing/controls | 8px scale; sections 72/40px; radius 12px; cards 24/20px padding; controls at least 44px high |

Below 768px: one-column cards and stacked hero actions. 768–1023px: two-column grids and collapsed navigation. At 1024px+: standard three-column cards and desktop navigation. **Homepage pillars remain a two-by-two grid from 768px upward**, in the four-pillar DOM/keyboard order. Odd cards retain normal width; no clipping fixed heights or core-offering carousels.

Build/rework Header (existing Navbar), Footer, Breadcrumbs, PillarCard, OfferingCard, ResourceCard, EnquiryForm, ArticleLayout, metadata helpers and basic buttons/sections. Desktop header: linked logo, click/keyboard “How We Help” with exactly four pillars, Resources, Insights, About, Contact and primary “Discuss Your Challenge” to `/contact`. Mobile/tablet: labelled menu button and expandable vertical list. Escape closes and restores focus; accurate expanded state and `aria-current`; preserve Back and deep links.

Footer groups: How We Help, Resources, Company, Legal, with verified email/WhatsApp/LinkedIn. Inner breadcrumbs: Home > section > page. Add skip link and landmarks. Ensure shared shell appears exactly once, including legacy pages. Keep sticky elements/floating WhatsApp clear of focus, anchors and mobile checkout controls.

Use restrained images and approved existing identity/portrait; no fear imagery, AI robots or animated backgrounds. Primary filled, secondary outlined, tertiary text actions; visible hover/focus; explain disabled actions where relevant. Reserve aspect ratios, responsive WebP/AVIF with fallback, meaningful founder alt and empty decorative alt. Do not lazy-load the main above-fold image; lazy-load offscreen media. Test final contrast, reduced motion, 320px layouts and 200% zoom.

## 7. W04 — homepage and all four pillar pages

Use the exact quoted copy in specification §§5–8A, without silently shortening promises or adding claims. Store ordered sections and editor-selected records in content modules.

| Route | Required sequence and actions |
| --- | --- |
| `/` | Eyebrow, exact primary-promise H1, audience/30-years body; “Explore How We Can Help” → `#how-we-help`, discussion → Contact. Four ordered cards under “What would you like to improve?”. Three starting offers subject to readiness; verified audit price, enquiry services display “Scope agreed after an initial discussion”. Experience section → About. Up to three real editor-selected resources; approved proof only; up to three recent insights with pillar labels; exact closing discussion copy. Verified newsletter only. |
| `/careers` | Exact career hero; assessments CTA → `/assessments`; free-check CTA → verified existing route. Three starting questions; Career Risk Audit and Career Positioning Audit plus verified live assessments; six selected published role guides and all-guides CTA; management readiness/communication/judgment capabilities → `interest=capability`; up to three career articles; closing → `interest=career`. |
| `/business` | Exact business hero, health-check detail CTA when available, discussion → `interest=business`. Six problems: missed commitments, rework, unclear updates, dependence on few people, sales/delivery gaps, unhelpful reports. Six support areas: projects/programmes; operations; SDLC/quality; sales/pre-sales; talent/communication; technology adoption with pillar link. Health-check deliverables and four-step process. Corporate-team section → `interest=capability`. Relevant published resources/articles; exact closing business CTA. |
| `/technology-digital-safety` | Technology-adoption hero and discussion route → `interest=technology`. Adoption: use cases, workflows, learning/adoption and useful outcomes. Safety: impersonation/scams, accounts, information handling, verifying requests, AI data boundaries and reporting concerns. Include the AI-safety explanation and specialist-services boundary. |
| `/education` | Exact emerging-focus hero, discussion → `/contact?interest=education` with no offer; Insights CTA → `/insights?topic=education` only if a published article exists. Starting question about applying learning; students; faculty; institutions; responsible AI; published resources and up to three insights; closing discussion CTA. |

Career safeguards: reach free check, assessment details and complete guide directory within two selections; reuse catalogue names, prices, INR/tax treatment, deliverables and update promises. Temporarily unavailable products retain needed customer access and use “Contact Us About This Product”; retired products have accurate notices/alternatives. Preserve free-check questions, result logic, data handling and disclaimer. Scores are not job-loss probabilities; SA-AIRS does not extend into business or safety.

Business safeguards: explain delivery risks/ownership/recovery, useful operating measures, defect prevention, proposal realism/handover and executive communication. Health-check steps: understand situation, review agreed evidence, identify priorities, discuss action plan. No guaranteed savings, unsupported quantified outcomes or confidential first-contact uploads.

Technology safeguards: adoption and safer use remain distinct; AI sits within both where relevant. Never imply voice/caller ID proves identity. Safety articles need reviewed dates and references. No emergency helpdesk, protection guarantee or compliance assurance. Unreleased software is omitted; a later real tool requires approved product record, platform, version, privacy and support information.

Education details: students apply concepts, question assumptions, evaluate evidence and communicate reasoning; faculty use meaningful assignments/projects/feedback, with oral explanation, changed assumptions and milestones as examples. Institutions support faculty/employer relationships and review demonstrated learning, retention, internship quality and verified graduate outcomes while recognising research, citizenship and intellectual development. AI covers assistance, verification, disclosure, equitable access and student information; cross-link safety without changing pillar ownership.

Education editorial coverage includes assessment, faculty capability, curriculum/application, education-to-work, AI, governance/funding, research, inclusion and wellbeing. Require dated statistical sources, distinguish unemployment/unemployability and institution types, separate recommendations from evidence. No placement guarantees, rankings, blanket institutional criticism or invented academic credentials/results. The Learning and Career Readiness Review stays internal; future release requires scope, evidence, outputs, academic input, fees, capacity and approved tests. No SA-AIRS extension to students/faculty/institutions. Empty Education collections disappear gracefully.

## 8. W05 — service detail and availability

Specification §§1, 7–9, 13.

Create `/services/business-delivery-health-check` with the reusable detail template in this order: breadcrumb; H1/outcome; audience; problems; deliverables; steps; inclusions/exclusions; commercial explanation; six FAQs; enquiry CTA.

| Contract | Health check |
| --- | --- |
| Audience/outcome | Growing IT services businesses/scoped corporate teams; prioritised delivery and operating problems |
| Inputs | Discovery and agreed non-sensitive/redacted evidence |
| Included | Discovery, agreed review, findings, prioritised 90-day action plan, leadership readout |
| Boundary | One business unit/delivery area per statement of work |
| Excluded | Implementation, certification, security testing, unlimited follow-up |
| CTA | “Request a Health Check Discussion” |
| Destination | `/contact?interest=business&offer=business-delivery-health-check` |

The page shows “Scope agreed after an initial discussion” and “We agree the scope, fee, schedule and deliverables with you before work begins.” Health-check timing, interviews, evidence volume and implementation support belong in proposals.

FAQs cover audience, outputs, fee determination, required information, tailoring and no guaranteed results. No purchase/booking control. Availability comes from records: disabled services lose catalogue cards, promotional detail links and sitemap entries; pillar actions become general topic enquiries. Direct visits to a disabled known service show an informative unavailable state and general Contact link, proposed `noindex`; reject unpublished offer IDs at the form/API. Never fabricate an education offer.

## 9. W06 — Resources, Insights, About and legal/content migration

Specification §§10, 13–14, 16.

Resources at `/resources`: H1 “Practical resources for your next step”. Search title, summary and role; trim, ignore case and debounce 200ms. Query keys `q`, `topic`, `format`, `access` and proposed `page`. Topic is all or one canonical pillar; format all/tool/guide/template/report/bundle; access all/free/paid. Combine with AND, unknown filter values reset to all. Normalise invalid pagination safely.

Show 12 records per page, featured rank then published date descending, with deterministic tie-breaking. Reset page to 1 when filtering. Update URL without full reload and restore state on reload/Back/Forward. Avoid a history entry for each keystroke; ensure committed filter/search changes can be revisited. Cards show title, summary, topic, format, access or verified price and action. Empty state: “No resources match your selection.” plus “Clear Filters”. New free resources have no login/email gate. Confirm asset delivery and accessible failure fallback.

Insights at `/insights`: topic and title/summary search, 12 articles per page, newest first; equivalent URL restoration and Education combinations/empty states. Preserve `/insights/[slug]`. Article template: title, summary, author, published/updated dates, topic, body, sources, relevant CTA, up to three related articles. Semantic headings, descriptive links, accessible images; dates displayed in Asia/Kolkata. Preserve sources/content and deliberately review metadata changes. Direct guessed draft/future URLs must fail, not merely disappear from cards.

About at `/about`: exact H1/opening from §10; approved portrait and biography; founder's eight expertise areas grouped under established pillars; separately introduce Education as emerging. The exact eight-area list is a founder-brief dependency, not an invitation to invent a list. Explain context → evidence → practical steps → progress review; exact Education paragraph; discussion CTA. Publish employer/client/scale/results only with verified permission. Without testimonials use an honest approach/sample-output explanation, labelled accurately.

Preserve `/privacy`, `/terms`, `/refund`, `/disclaimer` and customer commitments. Prepare owner-reviewed updates for actual enquiry use, processors, retention, contact rights and enquiry-led service terms. An education-only disclaimer cannot be the sole paid-advisory contract. Do not publish legal-policy assumptions as approved facts. Verify Beehiiv provider, consent/unsubscribe; otherwise remove newsletter UI. Review existing claims/proof, including `/cases`, without fabricating evidence.

## 10. W07 — accessible enquiry journey and durable backend

Specification §§3, 11–13, 15, 18. This is a required functional system with storage and delivery operations.

### Form and query contract

Contact H1: “Tell us what you would like to improve”. Use the exact introductory privacy warning, visible labels and required-field explanation; show verified email/WhatsApp alternatives. Remove existing 24-hour response promises unless approved.

| Field | Validation/conditional behaviour |
| --- | --- |
| name | Required, trimmed, 2–100 characters; international names accepted |
| email | Required, syntax validated, at most 254; preserve display value, separate normalised comparison key |
| interest | Required: career/business/capability/technology/digital-safety/education/other |
| organisation | Required for business/capability; optional for technology/digital-safety/education; hidden for career/other; maximum 150 |
| teamSize | Optional only when organisation shown, except always hidden for education; enum 1, 2–10, 11–50, 51–200, 201–1000, 1001+ |
| message | Required, trimmed, 20–3000, plain text |
| contactAcknowledgement | Required unchecked acknowledgement with exact §11 text and Privacy link; not newsletter consent |
| offerId | Hidden, published-registry validated and compatible with selected interest |
| sourcePath/campaign/honeypot | Relative source path with no personal query data; allowlisted campaign fields; invisible honeypot; no upload |

Final camelCase naming is a documented API implementation decision. Accept only declared fields. Unknown interest/offer query values are ignored for prefill; explicitly invalid submitted values are rejected. Changing interest clears incompatible offer and drops hidden fields on submission, enforced server-side as well as client-side.

Education displays optional “Institution” under the existing organisation key, hides team size, has no fabricated offer and shows “Please describe the challenge without sharing personal student records or confidential assessment material.” No ages, grades, student IDs, identifiable submissions or files.

Validate on submit, and on blur after interaction; show inline errors plus focused error summary, never colour alone. Preserve valid fields after failure. “Send Enquiry” becomes disabled “Sending…”. Generate a UUID submission key and retain it with the same payload through network retries; changed payload after a failed attempt needs a fresh key rather than an accidental 409. Clear personal fields only after accepted response. No personal URLs, storage-based drafts or browser persistence.

Success text: “Thank you. Your enquiry has been received.” plus random non-sequential reference and “We will respond using the email address you provided.” Network/server text: “We could not confirm your enquiry. Please try again, or email us directly.” Rate limit: “Too many attempts. Please try again later.” Honour Retry-After. Announce statuses accessibly and never show success for rejected/unconfirmed submissions.

### API and transaction

Submit the validated contact form directly to the existing owner-controlled Formspree endpoint. Retain client-side validation, explicit privacy acknowledgement, a honeypot field and clear success/error states. Verify delivery in the Formspree dashboard after deployment.

| Status | Required response/meaning |
| --- | --- |
| 201 | New persisted enquiry: `{ok:true, reference:string}` |
| 200 | Same key + same payload: same reference, no new enquiry/outbox |
| 400 | Malformed JSON/shape, safe generic error |
| 422 | `{ok:false, errors:{field:message}}` |
| 403 | Invalid origin/CSRF |
| 409 | Existing idempotency key with different payload |
| 413 / 415 | Too large / unsupported content type |
| 429 | Rate limited, Retry-After |
| 503 | Persistence unavailable; no acceptance claim |

Use a managed relational database under an existing owner-controlled provider account where available. Additive migrations create enquiries, notification outbox and shared abuse-control storage (or equivalent shared limiter). Enquiry and outbox insert occur in **one transaction**. Unique idempotency key, normalised validated-payload hash and concurrency-safe insert/replay handling; 24-hour retry window. Document key/hash expiry behaviour separately from enquiry retention, and ensure accepted retries remain replays rather than consuming another accepted-submission allowance.

Enquiry fields: validated form values, internal UUID, random public reference, UTC timestamps, consent version, safe source/campaign, status new/contacted/closed/spam, notification status and retention due date. Index reference, due jobs and retention where useful. Protected provider console access with least privilege and MFA; no custom admin UI.

### Notification, abuse controls and retention

Scheduled outbox worker uses safe job claiming so overlapping runs do not intentionally duplicate delivery. Track attempts, next attempt, sentAt and last safe error code. Initial send followed by retries after 1, 5, 30 minutes, 2 hours and 12 hours; document interval interpretation consistently. Alert after exhaustion; operator can inspect/retry. Use provider idempotent-send support where available; document residual duplicate-notification risk if provider cannot guarantee delivery idempotency. Email outage never rolls back an accepted enquiry.

Verified sender domain, fixed configured recipient and safe plain-text body. Validated user email may be Reply-To, never From; prevent header injection, never interpolate into HTML. Test the actual received notification, including Institution under organisation and absence of hidden team size.

Shared production limiter: five attempts/15 minutes per pseudonymous network identifier and three accepted enquiries/hour per normalised email. Hash/HMAC abuse identifiers with server secret, trust only verified hosting proxy information, expire abuse identifiers within 24 hours. Do not keep raw identifying abuse data in logs. Honeypot produces generic rejection; accessible CAPTCHA only if measured abuse warrants it. Reject unsafe input safely without corrupting legitimate international names/plain text.

Proposed retention: 180 days after last interaction, subject to owner approval and exceptions. Purge job must remove related personal outbox data and expire abuse metadata; document backup retention and how approved exceptions/last interactions are handled. Failure alerts and operator purge/retry exercises are required. Do not log names, emails, messages, institution values or secrets. Database outage returns recoverable error with fields/key preserved. Validate missing production configuration before deployment.

## 11. W08 — SEO, metadata and privacy-safe measurement

Specification §§3, 14–15.

Verify canonical host configuration before adopting proposed `https://www.sriramadvisory.com`. Redirect HTTP and alternate host to final canonical in one hop. Every indexable route gets unique title/description, absolute canonical, Open Graph title/description/image and social image alt; one H1 and meaningful heading order. Use exact proposed titles in §14, with descriptions naturally around 140–160 characters where useful.

Education title: “Education and Learning | Sriram Advisory”. Description: “Explore practical learning, faculty support and responsible AI in higher education with Sriram Advisory.” Add `/education` to sitemap only after publication.

Sitemap comes from published canonical records, including preserved live products/articles; exclude APIs, drafts, preview, unavailable services, contact success state and filter combinations. Filtered directories: base-directory canonical and `noindex,follow`; unfiltered paginated directories: stable self-canonicals. Keep preview access-controlled where available plus noindex; robots.txt alone is not access control. Custom 404 links to Home, Resources and Contact with actual 404 status.

Truthful Organization, BreadcrumbList and Article structured data; preserve verified Product schema and price/availability alignment. No invented ratings, reviews or credentials. Preserve existing article metadata unless deliberately improved.

| Event | Allowed properties |
| --- | --- |
| pillar_selected | pillar, placement |
| offer_viewed / offer_cta_clicked | offer_id, pillar, placement |
| resource_opened | resource_id, format, access |
| enquiry_started / enquiry_accepted | interest, offer_id only when present |
| enquiry_failed | safe error category only |
| checkout_started / purchase_confirmed | Preserve verified existing analytics contract; confirmation requires server-verified payment |

Use existing analytics vendor only, behind feature flag and approved consent configuration; absent configuration disables all non-essential tracking. Audit direct `track()` calls and automatic page views. Never transmit names, emails, message/institution/student information, full query strings or public enquiry references. Education events use `pillar=education` or `interest=education`, with no offer ID. Event emission must follow actual state; accepted event only after durable acceptance. Qualified leads/sales are reviewed manually or in the existing CRM, not inferred from click counts.

## 12. W09 — quality, security and commerce regression

Specification §§13, 15–17.

Automated tests should cover behaviour that could lose customers/data or violate publication rules: shared validation, conditional education fields, registry/query parsing, filter combinations/history, publication visibility, idempotency races, transaction rollback, rate limits, outbox retry and retention. Use database integration tests for transactional guarantees and browser tests for key journeys. Add route/link/canonical checks and accessibility automation; manual checks remain necessary.

Run existing lint, TypeScript validation and production build with the lockfile; investigate legacy config warnings against installed docs rather than upgrading the stack automatically. Consult official installed-version/actual-provider references when implementing framework, checkout, signed webhooks, email and scheduled jobs.

Commerce verification: each distinct provider test-mode payment path; amount, currency, approved tax display, receipt, delivery and existing customer access; success, failure, cancellation, pending, interrupted return and repeat callbacks/webhooks where supported. Confirm fulfilment occurs once and return URL alone cannot unlock products. Preserve provider checkout/order IDs, webhook signature checks, duplicate-event handling, return URLs and updates. Locate externally owned automation and test it with its operator. Do not silently rebuild commerce to cover unknowns; isolate changes and obtain required business review. Unresolved critical journey failure blocks release.

Accessibility: WCAG 2.2 AA acceptance target, without unsupported certification claims. Automated checks plus keyboard and screen-reader checks for landmarks/skip link, menus, headings, labels, errors/status, focus order/visibility, contrast, zoom and anchor offsets. Test long titles/names, missing images, empty directories, reduced motion, slow network and forms without optional services.

Browser/device matrix: latest stable Chrome, Edge, Firefox, Safari at release; Android Chrome and iOS Safari; widths 320/375/768/1024/1440px; 200% zoom. Record actual versions and screenshots.

Performance: test Home, **all four** pillars, Resources, Contact and one article under production-like mobile conditions. LCP ≤2.5s, CLS ≤0.1; field INP ≤200ms when data exists, with launch interaction testing and no invented field compliance. Median of three consistent Lighthouse mobile runs ≥90 target. New editorial pages target ≤200KB compressed initial JS and ≤1MB initial transfer excluding user-triggered downloads. Record commerce exceptions with cause/mitigation; minimise client components/scripts, fonts and images.

Security/resilience: HTTPS, appropriate headers, checkout-compatible tested CSP, anti-framing unless required, output encoding, parameterised DB access, server validation, least-privilege secrets, dependency review and safe external links. Optional integration outage cannot break reading/navigation. No browser-stored personal drafts. Broken downloads provide contact fallback and operator alert; database outage never claims acceptance; email outage retains durable lead. Document safe operator logs/alerts with no sensitive contents.

## 13. W10 — release, rollback and maintainability

Specification §§16–19.

1. Finalise inventory/redirect map and catalogue reconciliation; snapshot current deployment/data/config references without placing secrets in the repo.
2. Implement on a branch; deploy isolated preview with test credentials/recipient, protected access and noindex. Apply additive DB migrations and verify them.
3. Complete acceptance evidence and owner review of public claims, education copy, service readiness, commercial terms, privacy, retention and contact details.
4. Deploy immutable release using the verified existing hosting workflow; retain previous deployment. Run production smoke tests for four-pillar navigation, direct/legacy routes, metadata, durable enquiry acceptance and payment entry points. Avoid unauthorised production charges.
5. Monitor acceptance rates, outbox delay/failures, app errors, broken links/downloads and indexing versus baseline. Check daily for the first week and again after indexing changes.

Rollback triggers: broken checkout, lost enquiry persistence, widespread 5xx or critical privacy defect. Revert application deployment, not accepted data; do not drop new enquiry tables. Keep safe notification draining and retention operations functioning, or pause/resume with an explicit recovery procedure. Feature-disable a failing optional section. Exercise recovery in preview and record operator, commands/access and verification steps.

Handover includes source branch/release commit and exact lockfile; setup/deployment and placeholder config; provider ownership/secret rotation; content-editing guide with offering/resource/article examples and draft→preview→owner review→published flow; route/redirect inventories; catalogue/payment/fulfilment evidence; enquiry schema/migrations; notification retry, failure alerts and retention job; acceptance report/screenshots/accessibility/performance/limitations; backup/rollback/smoke guide and post-launch defect contact.

Completion means deployed approved pages, passing mandatory acceptance, retained customer access, durable enquiries plus reliable notification, and an owner who can maintain content using the handover. A static prototype is not completion.

## 14. Finite decisions and dependencies

These do not prevent preparing templates and test-backed behaviour. Resolve production dependencies before their release gates; do not invent values.

| Dependency | Responsible owner | Resolution/gate |
| --- | --- | --- |
| Hosting project/domain/environment access and release operator | Business owner + developer | Verify current arrangement, canonical host, scheduled jobs, preview protection and rollback in M1 |
| Products, provider configuration, prices, tax, receipts, fulfilment and entitlements | Business owner + developer | Reconcile real systems; preserve commitments; close critical commerce issues before launch |
| Two new services' delivery readiness | Business owner | Confirm fulfilment or disable service availability and use topic enquiries |
| Database, mail, limiter and worker configuration | Developer + account owner | Select already controlled provider accounts where possible; prove transaction/delivery/retry in test and production setup |
| Public contact channels, private recipient and sender domain | Business owner + developer | Verify public links and actual end-to-end notification; approve any response deadline |
| Privacy, processors, proposed 180-day retention/exceptions and advisory terms | Business owner | Approve actual uses/wording before public form goes live |
| Biography, eight expertise areas, logo/portrait and education publication copy | Business owner/editor | Verify source brief and claims; approve Education as emerging focus |
| Testimonials/case studies | Business owner | Require consented evidence; otherwise hide proof section |
| Featured resources and six career guides | Editor/owner | Select real published items; fewer available items means smaller collection, never placeholders |
| Newsletter and analytics consent configuration | Business owner + developer | Verify existing integration/consent/unsubscribe or keep disabled |

Clarifications to record in the decision log: the specification requires Resource role search although role is not listed in its minimum record fields; add optional search-role metadata. Add publication state needed by global draft rules. Choose/document `page` pagination query and invalid-page behaviour. Define unavailable-service response/indexing policy, idempotency-expiry semantics and retry interval interpretation. These routine implementation decisions must preserve stated outcomes. Changes to scope, routes, commercial promises, data use, hosting or payments need reason, owner and affected AT IDs; customer commitments/data-use changes require business-owner review.

## 15. Acceptance matrix — all 24 release tests

Initial status of every test: **not run**. At execution, add result, evidence link, tester, date and owner decision. Mandatory tests pass or have explicit owner-approved scope removal; broken critical journeys are not acceptable exceptions.

| ID | Required proof | Work package |
| --- | --- | --- |
| AT01 | Desktop/mobile reach all four pillars; keyboard/Escape restores focus | W03 |
| AT02 | Exact homepage order/copy/routes; no placeholders or unavailable offers shown live | W04–05 |
| AT03 | Every published product and customer entitlement reachable; prices match checkout | W01, W02, W09 |
| AT04 | Each distinct test-mode payment/fulfilment path completes once; cancellation remains unpaid | W09 |
| AT05 | Both enabled services show outputs, boundaries and enquiry action; no speculative fee/guarantee | W05 |
| AT06 | Correct interest/offer prefill; changed interest clears incompatible values | W05, W07 |
| AT07 | Consent/email/message invalid cases fail client and server; valid fields preserved | W07 |
| AT08 | One enquiry and outbox row for valid submission; double-click/retry/concurrency does not duplicate | W07 |
| AT09 | DB failure recoverable; email failure retains accepted record and retries | W07 |
| AT10 | Unknown queries, oversized bodies, unsafe input, bad origin/CSRF and limits handled safely | W07, W09 |
| AT11 | Resource AND filters, URL restore, Back and clearable empty state | W06 |
| AT12 | Draft/future records absent from direct routes/search/sitemap; bad assets have usable fallback | W02, W06 |
| AT13 | Every inventory route matches map; no redirect chain/loop or broken internal link | W01, W09 |
| AT14 | Keyboard/screen reader, 320px/200% zoom, actual contrast/focus | W03, W09 |
| AT15 | Unique metadata/canonicals, real 404s, sitemap and preview noindex | W08 |
| AT16 | Representative mobile performance budgets; documented cause/mitigation for exceptions | W09 |
| AT17 | No personal analytics; absent consent configuration emits no non-essential events | W08 |
| AT18 | Operator receives test notification, finds record, retries failures and runs purge | W07, W10 |
| AT19 | Approved content/commercial values; optional missing content omitted cleanly | W04–06, W10 |
| AT20 | Preview rollback exercised; production smoke checklist ready | W10 |
| AT21 | Education fourth in header/footer/Home, correct 2×2 and mobile grid/reading order | W03–04 |
| AT22 | Education prefill, optional Institution, hidden team size, client/server/persistence/email correct; no invented offer; hidden fields cleared | W07 |
| AT23 | Education topic/search/filter combinations, URL restore, Back, empty states; private drafts | W02, W06 |
| AT24 | Education metadata/sitemap/events; no personal institution/student data; unpublished education services absent | W04, W08 |

## 16. Specification coverage register

| Specification section | Plan coverage |
| --- | --- |
| Purpose, positioning, boundaries | Plan §§1–3; exact copy remains governed by source |
| 1 Outcomes and release scope | §§1, 7–8, 13–14 |
| 2 Architecture and implementation baseline | §§2, 4–6, 10 |
| 3 Navigation and route register | §§4, 6–10, 15 |
| 4 Visual and responsive specification | §§6, 12 |
| 5 Homepage copy and section order | §7 |
| 6 Careers page | §§4–5, 7, 12 |
| 7 Business and delivery | §§7–8 |
| 8 Technology and digital safety | §§7–8 |
| 8A Education and learning | §§1, 5–7, 9–11, 14–15 |
| 9 Service detail contracts | §8 |
| 10 Resources, insights, about and legal | §9 |
| 11 Contact fields and states | §10 |
| 12 Enquiry endpoint/storage/notification | §10 |
| 13 Content and commerce | §§4–5, 8–10, 12 |
| 14 Search and measurement | §11 |
| 15 Accessibility/performance/resilience | §§6, 10, 12 |
| 16 Migration/release/recovery | §§4, 12–13 |
| 17 AT01–AT24 | §15, every test included |
| 18 Dependencies/handover/sequence/completion | §§3, 13–14 |
| 19 Sources/verification/change control | §§2, 4, 12, 14 |

## 17. Proposed implementation file map

| Area | Existing files to adapt / proposed new location |
| --- | --- |
| Shell/design | `app/layout.tsx`, `app/globals.css`, `components/Navbar.tsx`, `Footer.tsx`, `FloatingWhatsApp.tsx`; shared breadcrumb/card/section components |
| Main pages | `app/page.tsx`; new `app/careers/page.tsx`, `business/page.tsx`, `technology-digital-safety/page.tsx`, `education/page.tsx` |
| Services | New named service route pages and shared service template; retain existing career-positioning route |
| Directories/editorial | New `app/resources/page.tsx`; `app/insights/page.tsx`, `app/insights/[slug]/page.tsx`, About and legal pages |
| Content/config | Proposed `lib/config/`, `lib/content/`, `content/articles/`; adapt current catalogue files through verified bindings |
| Enquiries | `components/EnquiryForm.tsx`, `app/contact/page.tsx`, existing Formspree form |
| SEO/measurement | `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`, metadata helpers, `components/TrackedLink.tsx` and consent-aware analytics adapter |
| Preserved commerce | `components/CashfreeCheckout.tsx`, `app/api/create-order/route.ts`, `app/api/verify-order/route.ts`, `app/payment-status/page.tsx`, existing tool/product/guide/bundle pages; changes require defined scope |
| Validation/operations | Proposed `scripts/validate-content.*`, focused tests, `docs/rewrite/`, placeholder `.env.example`, updated README |

Start implementation with W01 and the content/config contracts. Do not begin by deleting the existing route tree or substituting a static mockup for working commerce and enquiry requirements.
