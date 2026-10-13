# Sriram Advisory

The primary journey is Product and Market Review: Home, How I Help, Research & Insights, About and Request a Review. The owner removed the solopreneur audience restriction and Resources menu link. Existing product, guide, assessment, resource and Cashfree routes remain available.

Contact enquiries and free-resource requests submit directly to the existing Sriram Advisory Formspree form. Review enquiries validate the optional HTTP(S) product link, preserve text after failure, lock pending submissions and time out after 15 seconds. The owner declined additional durable storage, queue and retention automation. No new database or email-service environment variables are required. See docs/FORM_OPERATIONS.md and docs/v3-local-review.md.

Hosted staging uses `SRIRAM_STAGING=1`, `STAGING_USERNAME` and `STAGING_PASSWORD` (server-only). Missing staging credentials block access. Production keeps `SRIRAM_STAGING=0`. Review measurement is wired to the existing Vercel Analytics package with URL redaction and an event/property allowlist; set `NEXT_PUBLIC_REVIEW_ANALYTICS=1` at build time only if the existing plan already supports custom events. No new analytics subscription is required.

Website for [sriramadvisory.com](https://sriramadvisory.com) — AI career displacement risk assessments using the SA-AIRS™ methodology.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Vercel Analytics

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your values (see Environment section below)

# 3. Run development server
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build
npm run start
```

---

## Environment Variables

Create `.env.local` from the example file. **Never commit `.env.local` to git.**

| Variable | Description |
|---|---|
| `ADMIN_PASSWORD` | Password for admin routes |
| `ADMIN_KEY` | API key for admin access |

---

## Project Structure

```
app/
  page.tsx              # Home page
  layout.tsx            # Root layout (fonts, analytics, global metadata)
  globals.css           # Global styles (Tailwind + custom design tokens)
  about/                # About page
  cases/                # Case studies page
  get-started/          # Pricing and purchase page
  insights/             # Insights index + [slug] article pages
  privacy/              # Privacy policy
  refund/               # Refund policy
  report/               # Full Report product page
  system/               # Methodology overview (public-safe — no IP weights)
  terms/                # Terms of service
  robots.ts             # Robots.txt (generated)
  sitemap.ts            # Sitemap (generated)
components/
  Navbar.tsx            # Navigation bar with mobile hamburger
  Footer.tsx            # Footer with nav, legal links, contact
data/                   # Static data files (if any)
public/
  sriram.png            # Founder photo (used in navbar / footer)
```

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — hero, SA-AIRS™ intro, social proof |
| `/about` | Founder bio, philosophy, differentiators |
| `/report` | Full Report product page |
| `/get-started` | Pricing + intake page (Razorpay) |
| `/insights` | Insights index page |
| `/insights/[slug]` | Individual insight articles |
| `/system` | SA-AIRS™ methodology overview (no proprietary weights) |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/refund` | Refund policy |

---

## Key Design Decisions

- **IP protection:** `/system` shows the 5-dimension framework at a high level. Exact weights, scoring rubrics, and calibration data are never exposed publicly.
- **Paid-only model:** All products purchased via Razorpay (`/get-started`). No free tier.
- **Client page with metadata:** `get-started/layout.tsx` exports metadata because the page file is a `"use client"` component.
- **Insights articles:** Defined in `app/insights/[slug]/page.tsx` as the `ARTICLES` array. Add new articles there — both the index and sitemap pick them up automatically.

---

## Deployment

Deployed on Vercel. Push to `main` → automatic deployment.

Environment variables must be set in the Vercel project dashboard (not committed to git).

---

## Legal

- Privacy Policy: `/privacy`
- Terms of Service: `/terms`
- Refund Policy: `/refund`

Contact: sriram@sriramadvisory.com

# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
