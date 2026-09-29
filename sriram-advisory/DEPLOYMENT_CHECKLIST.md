# Production deployment checklist

The application build is production-ready once the deployment platform has the required owner-controlled configuration.

## Required environment variables

- `NEXT_PUBLIC_BASE_URL=https://www.sriramadvisory.com`
- `CASHFREE_APP_ID`
- `CASHFREE_SECRET_KEY`
- `CASHFREE_ENV=production`
- `NEXT_PUBLIC_CASHFREE_ENV=production`

`NEXT_PUBLIC_` variables are embedded during the build and must be present before the production build runs.

## Provider configuration

- Add `https://www.sriramadvisory.com` to the Cashfree production domain allowlist.
- Confirm that the Cashfree account is in production mode and can accept INR payments.
- Confirm that Formspree form `mojzewly`, used by the contact form and free-resource forms, belongs to Sriram Advisory and sends notifications to the intended email address.

## Verification after deployment

1. Submit a contact enquiry and confirm it appears in the Formspree dashboard and reaches the configured notification email address.
2. Complete one low-value sandbox checkout before switching both Cashfree environment variables to `production`.
3. In production, verify that the return page reports successful, pending, and failed transactions correctly.
4. Confirm the manual fulfilment process from the Cashfree dashboard, since digital delivery is intentionally handled outside the website.
5. Open `/snapshot` and confirm it redirects to `/tools/free-ai-exposure-check`.
