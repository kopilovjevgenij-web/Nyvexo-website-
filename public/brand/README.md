# Real SmartFlow logo goes here

No brand logo file exists anywhere in this repository yet (checked: `public/`,
repo root, all asset folders). The mark currently rendered by
`components/Logo.tsx` is a **placeholder** inline SVG, not the real SmartFlow
brand — do not treat it as final.

## To install the real logo

1. Add the real file(s) here, e.g.:
   - `public/brand/logo.svg` (preferred — crisp at every size)
   - `public/brand/logo-dark.svg` (light-on-dark variant for the footer, if
     the brand has one; falls back to `logo.svg` if omitted)
2. In `components/Logo.tsx`, flip `HAS_REAL_LOGO` from `false` to `true`.
3. Redeploy. The real asset is then used in the header, footer, mobile nav,
   and — via `app/icon.tsx` / `app/apple-icon.tsx` — the favicon.

No new logo has been invented or generated to replace it in the meantime,
per instructions: the placeholder stays clearly a placeholder until the real
asset is dropped in.
