# Enquiry operations — Product and Market Review

Selected option: **A — existing Formspree integration**, form `mojzewly`. The owner confirmed Formspree on 11 October 2026. No Formspree read/master keys belong in client code. Existing paid/free customer workflows are separate and remain intact.

## Submission contract

The visitor acknowledges the linked Privacy Notice and submits name, email, one of five stages (Idea, Market, Distribution, Adoption, Unsure), situation, optional HTTP(S) product link, optional organisation/attempts/outcome, privacyAcknowledged and an allowlisted source. The client uses the existing endpoint (`https://formspree.io/f/mojzewly`), FormData POST and JSON Accept header. The existing guide form code is unchanged. The transport includes _subject, an enquiryReference and the provider's _gotcha honeypot.

Only an HTTP success with JSON `ok: true` shows confirmation. Requests time out after 15 seconds. Failed requests retain the visitor's text and reference for retry. Pending submissions are locked. Validation runs locally; no new server endpoint or server validation enforcement is claimed. The UUID reference is for correlation, not proven provider idempotency. Browser checks use mocked provider responses and do not send an external enquiry. Prior handoff notes record owner-confirmed inbox delivery.

On 13 October 2026 the owner declined the additional storage, retry and retention feature. Keep Formspree; do not add a database, queue, automatic deletion policy or subscription. Those original specification requirements are intentionally outside the revised scope, not claimed as implemented.

## Owner operations and remaining evidence

1. Sign into the existing Formspree account and open form `mojzewly`. Confirm the recipient is the intended owner mailbox, sender/Reply-To settings, durable submission retention, and domain restrictions.
2. Demonstrate recovery of a received submission from the protected inbox independently of email notification. Export only to authorised storage; never publish exported submissions or API credentials.
3. Confirm failed notification visibility/retries and the owner's alert/recovery procedure. Preserve the same reference for possible duplicate notification or submission recovery; no exactly-once email claim.
4. Handle deletion requests at sriram@sriramadvisory.com. No automatic retention period is approved or implemented in this release; do not publish an invented schedule.
5. Test delivery to an approved test mailbox before release, with explicit permission to send that test. No real or synthetic external enquiry is sent by development checks.
6. The provider API does not establish transactional UUID idempotency. Passing a reference alone does not prove deduplication. Durable retry deduplication and a custom queue are excluded by the owner's revised scope. A retry after an uncertain timeout can produce duplicate provider records.
7. Provider abuse controls remain in use; the application does not claim custom IP/email quotas. No raw IP, email address or enquiry text is sent to analytics.

No public enquiry read/list endpoint or owner admin app is introduced. Provider authentication, recipient/sender, failed delivery and deletion settings cannot be inspected from this checkout.

## Documentation sources

- [Formspree submissions API](https://help.formspree.io/articles/the-forms-api/form-submissions-api): authenticated recovery and delivery-status fields; API availability depends on the account plan.
- [Formspree API keys](https://help.formspree.io/articles/the-forms-api/api-keys): read/master keys and submission authentication are different; keep recovery credentials private.
- [Formspree abuse controls](https://help.formspree.io/articles/troubleshooting/how-to-prevent-spam): provider spam, honeypot and domain controls.
- [Formspree plugin retries](https://formspree.io/blog/automatic-retries/): provider retry facilities still need account-specific notification verification.

## Deployment configuration

`ENQUIRY_PUBLIC_ORIGIN` is the exact approved browser origin, default `https://www.sriramadvisory.com`. Local development accepts its own request origin. Provider credentials for protected recovery stay in the owner's dashboard or server-only configuration; no API-read keys are required by the visitor form. The existing form ID is public, not a secret.

Rollback must retain enquiries in Formspree. Reverting application code must not delete or rewrite received messages. If the receiving system is unavailable, keep direct email visible and hide the inactive form; email-only is an interim state with full enquiry acceptance outstanding.
