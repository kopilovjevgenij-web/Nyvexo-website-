# SmartFlow — Websites, Automation & AI

Marketing site for SmartFlow, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/            routes, layout, metadata, sitemap/robots, API routes
components/     shared UI (Header, Footer, CookieBanner, Logo) and ui/ primitives
components/sections/  one file per homepage block (Hero, Services, FAQ, ...)
data/           typed content — edit these to change copy without touching components
lib/            constants (site config) and small utilities
```

## Content

All homepage copy, services, industries, FAQ, case studies and testimonials live in
`data/*.ts`. `data/testimonials.ts` ships empty on purpose — no fabricated reviews —
and the Testimonials section automatically switches from its placeholder state once
entries are added there.

## Replacing the placeholder brand

- `lib/constants.ts` — company name, email, phone, social links (all placeholders).
- `components/Logo.tsx` — inline SVG wordmark; edit here to rebrand instead of
  managing raster logo files.
- `app/icon.tsx` / `app/apple-icon.tsx` / `app/opengraph-image.tsx` — generated
  favicon/OG image; edit or replace with static assets under `public/` if preferred.

## Lead form

`app/api/contact/route.ts` validates and logs submissions from the Contact and
SmartFlow Audit forms. Wire it up to a CRM, Google Sheets, Telegram, email, or a
Make/n8n webhook — the request/response contract used by the forms won't change.

## Analytics

`NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_META_PIXEL_ID` (see `.env.example`) are read by
`components/Analytics.tsx`. Nothing loads until real IDs are set.

## Legal pages

`/privacy-policy`, `/terms`, `/cookie-policy` are GDPR-style templates and are
flagged in-page as needing legal review before publishing.

## i18n

Content ships in Russian first. `lib/constants.ts` exports `LOCALES`/`DEFAULT_LOCALE`
and the data-file split keeps translation additive: introducing `/en` and `/lv`
routes later doesn't require refactoring components.
