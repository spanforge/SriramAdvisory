# Enquiry operations — implementation v2.1

Selected option: **A — existing Formspree integration**, form `mojzewly`. The owner confirmed Formspree on 11 October 2026. No Formspree read/master keys belong in client code. Existing paid/free customer workflows are separate and remain intact.

## Submission contract

The owner approved activation and all contact fields. The visitor acknowledges the linked Privacy Notice and submits name, email, optional organisation, one of six interests, challenge, optional attempts/outcome, privacyAcknowledged and an allowlisted source. The live client uses the same existing endpoint (`https://formspree.io/f/mojzewly`), FormData POST and JSON Accept header as FreeGuideLeadForm. The existing guide form code is unchanged. The transport includes _subject, an enquiryReference and the provider's _gotcha honeypot.

Only a successful provider response shows confirmation. Failed requests retain the visitor's text for retry. Validation runs locally; no new server endpoint or server validation enforcement is claimed. The UUID reference is for correlation, not proven provider idempotency. A mocked browser check passed without sending an external enquiry. Inbox delivery still requires account-specific verification.

## Owner operations and remaining evidence

1. Sign into the existing Formspree account and open form `mojzewly`. Confirm the recipient is the intended owner mailbox, sender/Reply-To settings, durable submission retention, and domain restrictions.
2. Demonstrate recovery of a received submission from the protected inbox independently of email notification. Export only to authorised storage; never publish exported submissions or API credentials.
3. Confirm failed notification visibility/retries and the owner's alert/recovery procedure. Preserve the same reference for possible duplicate notification or submission recovery; no exactly-once email claim.
4. Apply deletion of unconverted enquiries after **180 days**, the spec default adopted for this implementation. Active client records follow the engagement policy. Document the periodic review/deletion owner and reconcile provider retention capabilities. Delete a test submission and verify deletion/export access.
5. Test delivery to an approved test mailbox before release, with explicit permission to send that test. No real or synthetic external enquiry is sent by development checks.
6. The publicly documented provider API does not establish transactional UUID idempotency. Passing an Idempotency-Key or reference alone does **not** prove deduplication. Same-key/concurrent/timeout/changed-payload tests, 24-hour hash retention, 409 behaviour, and configured quota equivalence remain mandatory release evidence. Resolve any shortfall with the smallest durable extension; do not invent success or claim these gates pass.
7. Verify five submissions per 15 minutes per keyed IP hash and ten/day per normalised email hash or a documented equivalent; do not store raw IP in the enquiry record. Provider spam screening is not proof of these precise quotas.

No public enquiry read/list endpoint or owner admin app is introduced. Provider authentication, recipient/sender, failed delivery and deletion settings cannot be inspected from this checkout.

## Documentation sources

- [Formspree submissions API](https://help.formspree.io/articles/the-forms-api/form-submissions-api): authenticated recovery and delivery-status fields; API availability depends on the account plan.
- [Formspree API keys](https://help.formspree.io/articles/the-forms-api/api-keys): read/master keys and submission authentication are different; keep recovery credentials private.
- [Formspree abuse controls](https://help.formspree.io/articles/troubleshooting/how-to-prevent-spam): provider spam, honeypot and domain controls.
- [Formspree plugin retries](https://formspree.io/blog/automatic-retries/): provider retry facilities still need account-specific notification verification.

## Deployment configuration

`ENQUIRY_PUBLIC_ORIGIN` is the exact approved browser origin, default `https://www.sriramadvisory.com`. Local development accepts its own request origin. Provider credentials for protected recovery stay in the owner's dashboard or server-only configuration; no API-read keys are required by the visitor form. The existing form ID is public, not a secret.

Rollback must retain enquiries in Formspree. Reverting application code must not delete or rewrite received messages. If the receiving system is unavailable, keep direct email visible and hide the inactive form; email-only is an interim state with full enquiry acceptance outstanding.
