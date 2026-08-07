# Portfolio — Wen Xuan (Alex)

Personal portfolio built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), designed for deployment on Vercel.

## Editing content

**All text lives in one place:** [`src/data/site.ts`](src/data/site.ts). Update your
profile, skills, education, projects, and experience there — the components render
from that file, so you never touch layout markup to change wording.

## Project structure

```
src/
├── data/site.ts          ← all content (edit this)
├── styles/global.css     ← design tokens (colors, fonts)
├── layouts/BaseLayout.astro
├── components/           ← Nav, Hero, About, Skills, Education,
│                            Projects, Experience, Contact
└── pages/index.astro     ← assembles the components
public/                   ← static assets (favicon, put resume.pdf here)
```

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start dev server at `localhost:4321`     |
| `npm run build`   | Build the static site to `./dist/`       |
| `npm run preview` | Preview the production build locally     |

## To-do before going live

- Add your résumé as `public/resume.pdf` (the nav + hero link to `/resume.pdf`).
- Double-check the project links in `src/data/site.ts` point to the right repos.

## Deploying to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), **Add New → Project** and import the repo.
3. Vercel auto-detects Astro (build: `astro build`, output: `dist`) — just click **Deploy**.
4. Every `git push` to the main branch redeploys automatically.
