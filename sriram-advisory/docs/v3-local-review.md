# Specification v3.0 local review
Local-only implementation. No production deployment.

## Inventory and migration
Replaced /, /work-with-sriram, /about, /contact, shared navigation and footer.
Added /thinking and /thinking/[slug] with existing published MDX content.
Retained /insights URLs, other service pages, illustrative /thinking-in-practice, customer products, resources, payment APIs and downloads.
/services/problem-solving-sprint returns 301 to /work-with-sriram.
Other service pages have no confirmed equivalent replacement and remain available.

## Contact and launch decisions
Email-only fallback: sriram@sriramadvisory.com, matching the existing business inbox address.
Stage links populate email context without submitting. Copy action is available.
No simulated submission success. Durable form acceptance and inbox delivery have not been verified.
Confirm inbox access, offer delivery, employment wording, business email processor and actual retention policy before publication.
Create at least one suitable sourced product/market article. Homepage uses the permitted writing-index fallback.
Arrange the five-reader clarity check before launch. Analytics remains disabled.

## Staging and rollback
Local development is noindex and listens on loopback. Set SRIRAM_STAGING=1 for a hosted production staging build and add access restriction.
Production is unchanged and remains the rollback version. Preserve its deployment before a public release.
Use reviewed repository version history for source rollback; preserve unrelated local changes.

## Verification results
TypeScript and production build passed.
Chromium checked five main routes at 1440, 768, 390 and 320 px: one H1, HTTP 200 and no horizontal overflow.
Mobile hero action is above the fold. Menu Escape and focus return, FAQ, all four stage contexts and clipboard copy passed.
Research article, resources, careers, guides, assessment, payment status, sitemap and social image returned HTTP 200; Sprint redirect returned 301.
Actual email sending, paid transactions, every download and human clarity review remain outside this automated verification.
Browser screenshots are in test-results/v3-home-desktop.png and test-results/v3-home-mobile.png.

## Owner revision
Removed the solopreneur audience restriction from public copy and metadata.
Restored the existing Formspree enquiry form at /contact as requested.
Decision-card stage parameters preselect Idea, Market, Distribution or Adoption.
Existing form validation, privacy acknowledgement, pending lock, honeypot and email fallback remain available.
The prior email-only contact verification describes the earlier preview and is superseded.

## Launch-review follow-up
Owner confirmed Formspree delivery works.
Contact choices now show only Idea, Market, Distribution, Adoption and Unsure.
Privacy explains review-enquiry purpose, contextual retention and the deletion contact without inventing an automatic deletion schedule.
Terms and Refunds explicitly cover the Product and Market Review.
Dropbox post links the official 3 April 2012 announcement supporting word-of-mouth distribution and rewards for both people.
