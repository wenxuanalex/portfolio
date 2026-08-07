# DESIGN.md — Wen Xuan (Alex) Portfolio

A reusable design brief in the [getdesign.md](https://getdesign.md) style: a single
document that captures the site's visual language so any coding agent can build new
pages that stay on-system. Tokens below were extracted from a Linear-derived
reference design and are the source of truth for `src/styles/global.css`.

## Design language

Engineered, high-contrast, and quiet. Pure-black canvas, near-white text, one
restrained indigo accent. Small radii and hairline borders signal precision over
decoration. Monospace is used only for labels/eyebrows, never body copy. The look
should read as "a tool built by someone technical," not a marketing landing page.

## Color tokens

| Token                  | Hex       | Use                                        |
| ---------------------- | --------- | ------------------------------------------ |
| `--color-canvas`       | `#000000` | Page background                            |
| `--color-canvas-raised`| `#0f1011` | Cards, panels                              |
| `--color-canvas-hover` | `#141516` | Raised surface on hover                    |
| `--color-border`       | `#23252a` | Hairline borders, dividers                 |
| `--color-ink`          | `#f7f8f8` | Primary text, headings                     |
| `--color-ink-muted`    | `#d0d6e0` | Emphasis body text                         |
| `--color-ink-subtle`   | `#8a8f98` | Body copy, secondary text                  |
| `--color-ink-faint`    | `#62666d` | Non-text only — icons, rules. Never text.  |
| `--color-accent`       | `#5e6ad2` | Primary accent (buttons, links, focus)     |
| `--color-accent-hover` | `#4c57b8` | Pressed/hover fill under white text        |
| `--color-accent-soft`  | `#828fff` | Accent text, eyebrows, focus ring          |
| `--color-accent-blue`  | `#3b78f6` | Secondary accent, used sparingly           |

**Dark only.** This site ships a single dark theme; there is no light variant, and
the tokens above are the whole palette.

### Contrast rules (measured, WCAG 2.1)

| Pair                          | Ratio    | Verdict                       |
| ----------------------------- | -------- | ----------------------------- |
| `ink` on `canvas`             | 19.74:1  | AA / AAA                      |
| `ink-muted` on `canvas`       | 14.38:1  | AA / AAA                      |
| `ink-subtle` on `canvas`      | 6.46:1   | AA — the floor for body copy  |
| `ink-faint` on `canvas`       | 3.64:1   | **Fails AA text.** Non-text only |
| `accent-soft` on `canvas`     | 7.32:1   | AA — used for the focus ring  |
| white on `accent`             | 4.70:1   | AA (normal text)              |
| white on `accent-hover`       | 6.24:1   | AA — why hover darkens        |
| white on `accent-soft`        | 2.87:1   | **Never pair these.**         |

Two rules follow: body text never uses `ink-faint`, and accent fills darken on
hover (`accent-hover`) rather than lightening, so white labels stay legible.

## Typography

- **Sans:** Inter — 400/500/600/700/800. Body, UI, headings.
- **Mono:** JetBrains Mono — 400/500. Eyebrows and small labels only, uppercase,
  letter-spacing `0.15em–0.25em`.
- Both are **self-hosted** via `@fontsource` and imported in `BaseLayout.astro`.
  No third-party font requests at runtime.
- **Scale (rem):** xs .75 · sm .875 · base 1 · lg 1.125 · xl 1.25 · 2xl 1.5 ·
  3xl 1.875 · 5xl 3. Headings use tight tracking (`-0.02em`) and weight 700–800.

## Spacing & shape

- **Radii:** `md .375rem`, `lg .5rem`. Keep corners small — no pill-shaped cards.
  Only fully-round (`9999px`) for buttons/badges by intent.
- **Borders:** 1px, `--color-border`. Elevation comes from borders + subtle raise,
  not heavy shadows.
- **Container:** max-width `64rem` (`5xl`) for content; generous vertical section
  padding (`py-20`→`py-28`).

## Components

- **Nav:** fixed, blurred translucent canvas, hairline underline-on-hover links.
- **Cards:** `canvas-raised` fill, `border` hairline, hover → `accent` border.
- **Buttons:** primary = solid accent on canvas text; secondary = bordered ghost.
- **Eyebrow:** mono, uppercase, `accent-soft`, wide tracking, above every section title.

## Responsive

Breakpoints are `sm` 640px, `md` 768px, `lg` 1024px.

- **Navigation** collapses to a toggle below `md`; the Résumé CTA stays visible at
  every width.
- **Two-column layouts** (Experience timeline, Education rows) stack below `md` —
  the 10rem label column is too tight at `sm`.
- **Card grids** step 1 → 2 (`sm`) → 3 (`lg`) rather than jumping straight to 3.
- Interactive targets are at least 44×44px.

## Motion

Minimal and precise. Color/opacity transitions ~200ms. No parallax or large
entrance animations; at most a single scroll-cue bounce in the hero.

Transitions animate `transform` and `opacity` only — never `width`, `height`, or
spacing. Under `prefers-reduced-motion: reduce`, movement stops (bounce, smooth
scroll, underline sweep, arrow nudge) while colour transitions remain: fades carry
state, not motion. Do not ship a blanket `transition-duration: 0.01ms` kill.

## Accessibility floor

- Every interactive element shows a `:focus-visible` ring: 2px `accent-soft`,
  3px offset.
- Body text meets 4.5:1; see the contrast table above.
- Icon-only controls carry an `aria-label`; decorative glyphs are `aria-hidden`.
