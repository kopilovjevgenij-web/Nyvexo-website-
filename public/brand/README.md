# SmartFlow brand assets

`logo.png` is the real SmartFlow logo, as supplied by the client — background
removed (made transparent) and whitespace trimmed; the artwork itself
(shapes, colors, proportions) is untouched.

`logo-mark.png` is the icon-only "SF" mark cropped from the same file, used
to generate `app/icon.png` and `app/apple-icon.png` (the site favicon /
apple-touch-icon).

`components/Logo.tsx` renders `logo.png` directly on light backgrounds
(header, mobile nav). On the dark footer, the "Smart" portion of the
wordmark (dark navy) isn't legible against the dark background, so it's
placed — unaltered — on a small white rounded chip instead of being
recolored, per "don't change the logo's colors."

To replace with an updated asset later: overwrite `logo.png` (and
re-crop `logo-mark.png` / regenerate the two favicon PNGs at `app/icon.png`
and `app/apple-icon.png` if the mark itself changes).
