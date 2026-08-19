# Nyvexo brand assets

Both files here are the real Nyvexo brand assets as supplied by the client,
resized only (Lanczos downsample, no redrawing):

- `nyvexo-icon.png` — the square "N" mark. Source: a 1200×1200 export.
  Used directly as-is: it already has its own gradient background baked
  in, so no wrapper/chip is needed on any surface. Also the source for
  `app/icon.png` (32×32) and `app/apple-icon.png` (180×180).
- `nyvexo-full-white.png` — the client's white-on-dark full lockup
  (icon + "Nyvexo" wordmark, white text with a purple accent "X").
  Used as-is on dark backgrounds (footer).

**No dark-on-light full lockup was supplied.** On light backgrounds
(header, mobile nav) `components/Logo.tsx` therefore pairs the real icon
image with "Nyvexo" set as live text in the site's own type (Manrope),
rather than flattening a new logo image — the icon artwork itself is
never redrawn. If a real light-background lockup is provided later, drop
it in here as e.g. `nyvexo-full-dark.png` and update `Logo.tsx`'s
`variant="light"` branch to use it directly instead.
