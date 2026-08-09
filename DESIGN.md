# DESIGN.md — Wen Xuan (Alex) Portfolio

A reusable design brief in the [getdesign.md](https://getdesign.md) style: a single
document that captures the site's visual language and information architecture so
any coding agent can build new pages that stay on-system. Tokens below are the
source of truth for `src/styles/global.css`; the structure below is the source of
truth for page composition.

## Design language

Engineered, high-contrast, and quiet. Pure-black canvas, near-white text, one
restrained indigo accent. Small radii and hairline borders signal precision over
decoration. Monospace is used only for labels/eyebrows, never body copy. The look
should read as "a tool built by someone technical," not a marketing landing page.

**Mode: Experience.** The visitor is here to judge the work. The interface recedes;
the projects lead. Every homepage section exists to get someone into a case study.

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

| Pair                          | Ratio    | Verdict                          |
| ----------------------------- | -------- | -------------------------------- |
| `ink` on `canvas`             | 19.74:1  | AA / AAA                         |
| `ink-muted` on `canvas`       | 14.38:1  | AA / AAA                         |
| `ink-subtle` on `canvas`      | 6.46:1   | AA — the floor for body copy     |
| `ink-faint` on `canvas`       | 3.64:1   | **Fails AA text.** Non-text only |
| `accent-soft` on `canvas`     | 7.32:1   | AA — used for the focus ring     |
| white on `accent`             | 4.70:1   | AA (normal text)                 |
| white on `accent-hover`       | 6.24:1   | AA — why hover darkens           |
| white on `accent-soft`        | 2.87:1   | **Never pair these.**            |

Two rules follow: body text never uses `ink-faint`, and accent fills darken on
hover (`accent-hover`) rather than lightening, so white labels stay legible.

## Typography

- **Sans:** Inter — 400/500/600/700/800. Body, UI, headings.
- **Mono:** JetBrains Mono — 400/500. Eyebrows and small labels only, uppercase,
  letter-spacing `0.15em–0.25em`.
- **Scale (rem):** xs .75 · sm .875 · base 1 · lg 1.125 · xl 1.25 · 2xl 1.5 ·
  3xl 1.875 · 5xl 3. Headings use tight tracking (`-0.02em`) and weight 700–800.
- Both faces are **self-hosted** via `@fontsource` and imported in
  `BaseLayout.astro`. No third-party font requests at runtime.
- Never specify a platform system face (Segoe UI, San Francisco, Arial) as the
  display voice — it renders differently on every OS and reads as unstyled.

## Spacing & shape

- **Radii:** `md .375rem`, `lg .5rem`. Keep corners small — no pill-shaped cards.
  Only fully-round (`9999px`) for buttons/badges by intent.
- **Borders:** 1px, `--color-border`. Elevation comes from borders + subtle raise,
  not heavy shadows.
- **Container:** max-width `64rem` (`5xl`) for content; generous vertical section
  padding (`py-20`→`py-28`).

## Glows

Three named treatments, all built from the accent at low alpha. They are the only
decorative element on the site and must not be joined by others.

| Class        | Geometry                        | Used by                 |
| ------------ | ------------------------------- | ----------------------- |
| `.glow`      | Single radial, top-centre       | Homepage hero           |
| `.glow-flank`| Two radials, left and right edge| Contact / footer        |
| `.glow-band` |  Radial swept from upper-left      | Project page hero bands |

---

# Information architecture

## Homepage

The audience is a hiring manager screening for **AI Engineer**. Work must be
reachable in the second viewport, so nothing narrative sits above it.

Sections in order. The nav lists three; the hero and footer are unlabelled.

1. **Nav** — sticky, dark, translucent with backdrop blur, **no bottom border or
   divider**. Name at left links home. Anchors: Work · Skills · Contact. Résumé
   pill stays visible at every width. Below `md` the anchors collapse into a
   toggle panel.
2. **Hero** — full viewport height, `.glow`, headline in Inter 800 with balanced
   wrapping, a `role · location` line, a short first-person intro grounded in the
   résumé, two CTAs (View Work, Download Résumé), a muted `profile.status` line
   carrying graduation date and availability, and a scroll indicator pointing at
   `#work`. **No eyebrow** — the nav already carries the name, and a kicker above
   a heading is a standing ban.
3. **Work** (`#work`) — one featured full-width card, then the remainder in a
   two-column grid. Every card links to its own `/work/*` page. Order is by
   relevance to the target role, not chronology: GenAI and agentic work leads.
4. **Skills** (`#skills`) — heading "The toolkit behind the work", five category
   columns, each a mono label over a hairline rule with a plain list beneath.
   GenAI and retrieval lead; classical ML sits last.
5. **Contact** (`#contact`) — `.glow-flank`, heading, three CTAs, hairline footer.

Experience, Education and My Story are deliberately **not** homepage sections.
The résumé covers the first two, and the one hiring-relevant fact each carried
(current role, graduation date) lives in `profile.status` in the hero. All three
keep their data in `site.ts` — and `Story.astro` still exists — so any of them can
be restored without retyping.

## Project pages — `/work/[slug]`

Generated from `projects[]` in `src/data/site.ts` via `getStaticPaths`.

- **Nav:** replaced by a "← Back to work" link plus the Résumé pill. No anchors.
- **Hero band:** `.glow-band` behind a mono context line (role · course · year),
  the project title, the blurb, tag pills, and a "View on GitHub" button when a
  public repo exists.
- **Body:** each section is a hairline-separated row — heading in a fixed left
  column at `md` and up, prose at `max-w-2xl` on the right.
- **Section headings** vary by project. Draw from: Problem · Approach ·
  Challenges · Outcome · Notes. Not every project uses all four.
- **Footer:** "← All work" and a "Next: <project>" link that cycles.

### Content rules

- Case-study prose must be traceable to the repository, the README, or the
  résumé. Do not invent metrics, dates, team sizes, or outcomes.
- Where a project is private and detail is thin, add a `todo: true` section named
  "Notes" that states the gap plainly. It renders in `ink-subtle` italic behind a
  hairline left rule — set apart visually without dropping below the AA text
  floor — and is a visible prompt to the author, not filler for the reader.
- Hero bands are abstract by design where no genuine artwork exists. These are
  pipelines, not interfaces, so a fabricated UI mockup would misrepresent the
  work. Replace with real screenshots only when genuine ones exist.

## Social card

`public/og.png` bakes the role and tagline into pixels, so editing `site.ts`
alone leaves the preview stale. Regenerate with `node scripts/og.mjs`, which
fills `scripts/og/template.html` from `profile` and the `site` URL in
`astro.config.mjs`, then screenshots it at 1200x630. Re-run it whenever role,
tagline or domain changes.

## Imagery

Every image on this site must be a real artefact of the work — a screenshot of
software that ran, or a diagram or chart that was actually produced. No stock
photography, no illustration, no generated mockups.

- **Format:** WebP, quality 80–88. Keep a page under ~200 KB of imagery; raw PNG
  screenshots routinely cost 5–10× that for no visible gain.
- **Hero plates** are composed at **1600×900** on `canvas-raised` with the accent
  glow behind, so mixed-aspect screenshots become one consistent set. Give every
  `<img>` explicit `width`/`height` to reserve layout space.
- **Pick the hero for the thumbnail, not the page.** The same file renders at
  ~960px on the case study and ~460px on the Work card. Anything whose meaning
  lives in small text — a wide flow diagram, a dense table — becomes an
  unreadable sliver at card size. Choose the artefact with the strongest shape
  (a chart, a UI, a photo) and put the detailed diagram in the body instead.
- **Split them when the jobs differ.** A project may set `thumbnail` to override
  the card image while `hero` stays on the page. The card's job is to earn a
  click — a credential or a recognisable product shot can beat an informative
  chart there. The page's job is evidence. Use the override sparingly; a single
  image serving both is the default.
- **Compose, never crop, for heroes.** Card thumbnails use `object-fit: cover`,
  which silently eats titles, legends and axis labels on any source that is not
  16:9. Pad the artwork onto the plate so nothing is clipped.
- **Light artwork** (Mermaid exports, most diagrams) sets `plate: true`, which
  renders it on a white pad inside the usual hairline border. Never drop a
  white-background image straight onto the canvas.
- **Loading:** heroes are `eager`, everything below the fold is `lazy`.
- **Alt text** describes what the image shows. Card thumbnails repeat the
  adjacent title, so they take `alt=""` and stay out of the accessibility tree.
- **Work card thumbnails appear whenever real artwork exists**, and a mixed set is
  fine. Thumbnails are `aspect-[16/9] object-cover`, so every card's image area is
  identical even if a future source is not 1600×900.
- **Work grid cards are equal height within a row.** The grid uses the default
  `items-stretch`; each card is `flex flex-col`, and the tag/link footer carries
  `mt-auto` so those rails align across the row no matter how long a blurb runs.
  The featured full-width card sits outside the grid and is exempt.
  Until every card has a thumbnail, an illustrated card will leave visible space
  in its text-only row partner — the cost of aligned rails, and it resolves as
  the artwork set fills in.

## Responsive

Breakpoints are `sm` 640px, `md` 768px, `lg` 1024px.

- **Navigation** collapses to a toggle below `md`; the Résumé CTA stays visible at
  every width.
- **Two-column layouts** (project section rows) stack below `md`.
- **Skills** steps 1 → 2 (`sm`) → 5 (`lg`). **Work grid** steps 1 → 2 (`sm`).
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
