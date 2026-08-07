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
| `--color-ink-tertiary` | `#62666d` | Meta, captions, footer                     |
| `--color-accent`       | `#5e6ad2` | Primary accent (buttons, links, focus)     |
| `--color-accent-soft`  | `#828fff` | Hover/highlight state of accent            |
| `--color-accent-blue`  | `#3b78f6` | Secondary accent, used sparingly           |

Ship light and dark from the same tokens; this brief documents the dark theme
(the default). Contrast: ink on canvas ≈ 19:1; ink-subtle on canvas ≈ 6:1 (AA body).

## Typography

- **Sans:** Inter — 400/500/600/700/800. Body, UI, headings.
- **Mono:** JetBrains Mono — 400/500. Eyebrows and small labels only, uppercase,
  letter-spacing `0.15em–0.25em`.
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

## Motion

Minimal and precise. Color/opacity transitions ~200ms. No parallax or large
entrance animations; at most a single scroll-cue bounce in the hero.
