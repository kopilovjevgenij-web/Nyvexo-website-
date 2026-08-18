# SmartFlow — Websites, Automation & AI

Marketing site for SmartFlow, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.
Fully localized: Latvian (default), English, Russian.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/lv`.

## Structure

```
app/[locale]/         localized routes: home, privacy-policy, terms, cookie-policy
app/                  locale-independent routes: /api/contact, sitemap.xml, robots.txt, favicon
components/           shared UI (Header, Footer, CookieBanner, Logo) and ui/ primitives
components/sections/  one file per homepage block (Hero, Services, FAQ, ...) — all take `dictionary`
lib/i18n/             translation dictionaries (lv/en/ru), the Dictionary type, locale helpers
lib/constants.ts      site config: name, contacts, locales
proxy.ts              redirects any URL with no locale prefix to /lv (no browser-language auto-detect)
```

## Localization (LV / EN / RU)

- `lib/i18n/types.ts` defines the `Dictionary` type — the single source of truth for every
  UI string on the site (nav, hero, services, forms, FAQ, legal pages, metadata, ...).
- `lib/i18n/dictionaries/{lv,en,ru}.ts` each implement that type in full. TypeScript enforces
  that all three stay in sync — a missing key in any locale is a build error.
- Latvian (`lv`) is the default/primary locale. `proxy.ts` redirects `/` and any
  locale-less path to `/lv` unconditionally — it does **not** read `Accept-Language`.
- The header's language switcher (desktop + mobile) swaps the locale segment of the
  current URL and preserves the current in-page anchor.
- Adding a new locale: add it to `LOCALES` in `lib/constants.ts`, add a dictionary file,
  done — routing, sitemap, hreflang and metadata all derive from `LOCALES`.

## Content

Case studies are framed as "Solution concept" examples (Problem → Solution → What
happens automatically → Result) — not real client stories. No testimonials, client
logos, or stats are fabricated anywhere; sections that would need them (e.g.
testimonials) are simply omitted until real ones exist, per the project's trust rules.

## Replacing the placeholder brand

- `lib/constants.ts` — company name, email, phone, social links.
- `components/Logo.tsx` / `public/brand/README.md` — no real logo asset exists in this
  repo yet; drop the real file into `public/brand/` and flip `HAS_REAL_LOGO` to `true`.
- `app/icon.tsx` / `app/apple-icon.tsx` / `app/[locale]/opengraph-image.tsx` — generated
  favicon/OG image; replace with static assets under `public/` if preferred.

## Lead form

`app/api/contact/route.ts` validates and logs submissions from the Contact and
SmartFlow Audit forms (both forms send a `locale` field). Wire it up to a CRM, Google
Sheets, Telegram, email, or a Make/n8n webhook — the request/response contract used by
the forms won't change.

## Analytics

`NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_META_PIXEL_ID` (see `.env.example`) are read by
`components/Analytics.tsx`. Nothing loads until real IDs are set.

## Legal pages

`/[locale]/privacy-policy`, `/terms`, `/cookie-policy` are GDPR-style templates,
translated into all three locales, and flagged in-page as needing legal review before
publishing.
