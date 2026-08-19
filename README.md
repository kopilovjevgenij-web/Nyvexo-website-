# Nyvexo — Websites, Automation & AI

Marketing site for Nyvexo, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.
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

Case studies are framed as short "Example" cards (Problem → Solution → What happens
automatically → Result) — not real client stories. No testimonials, client logos, or
stats are fabricated anywhere; `components/sections/Testimonials.tsx` exists with
clearly-labeled mock data but isn't imported into the page until real reviews exist.

## Brand assets

- `lib/constants.ts` — company name, email, phone, social links.
- `public/brand/README.md` — what the real logo files are, and how `components/Logo.tsx`
  uses them (see note below about the missing light-background lockup).
- `app/icon.png` / `app/apple-icon.png` — static favicon / apple-touch-icon, generated
  from `public/brand/nyvexo-icon.png`.
- `app/[locale]/opengraph-image.tsx` — generated OG image, embeds the real icon.

**Known gap:** only a white-on-dark full lockup was supplied, not a dark-on-light one.
`Logo.tsx`'s light-background variant (header, mobile nav) therefore renders the real
icon image next to "Nyvexo" set as live text, instead of a flattened logo image. Drop a
real light-background lockup into `public/brand/` and wire it up there if one arrives.

## Lead form

`app/api/contact/route.ts` validates and logs submissions from the Contact and
Nyvexo Audit forms (both forms send a `locale` field). Wire it up to a CRM, Google
Sheets, Telegram, email, or a Make/n8n webhook — the request/response contract used by
the forms won't change.

## Analytics

`NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_META_PIXEL_ID` (see `.env.example`) are read by
`components/Analytics.tsx`. Nothing loads until real IDs are set.

## Legal pages

`/[locale]/privacy-policy`, `/terms`, `/cookie-policy` are GDPR-style templates,
translated into all three locales, and flagged in-page as needing legal review before
publishing.
