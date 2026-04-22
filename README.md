# akhadirdia.github.io

Personal portfolio of **Abdou Khadir DIA** — Senior Data Scientist specializing in ML, Generative AI, and MLOps.

Live site: [akhadirdia.github.io](https://akhadirdia.github.io)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 4](https://astro.build/) — static-first, zero JS by default |
| Styles | [Tailwind CSS 3](https://tailwindcss.com/) |
| Icons | [@lucide/astro](https://lucide.dev/) |
| Deployment | GitHub Pages via GitHub Actions |

## Features

- One-page scroll with smooth navigation
- Typewriter hero animation (vanilla JS)
- Animated metric counters on scroll (IntersectionObserver)
- Experience timeline with role-type badges (Industry / Research / Policy)
- Featured projects grid + secondary 3-column grid
- Skill badges grouped by domain
- Publications with DOI links
- SEO: sitemap, robots.txt, Open Graph, Twitter Card, canonical URLs
- Fully responsive — mobile-first

## Local development

```bash
# Prerequisites: Node.js >= 18

git clone https://github.com/akhadirdia/akhadirdia.github.io.git
cd akhadirdia.github.io
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
```

## Customizing content

All content lives in typed TypeScript data files — no need to touch the components:

| File | Content |
|---|---|
| `src/data/experience.ts` | Work history, bullets, stack |
| `src/data/projects.ts` | Projects, tags, GitHub links |
| `src/data/publications.ts` | Papers, journals, DOIs |
| `src/data/skills.ts` | Skill groups and badges |

To update personal info (name, email, links), edit `src/components/Hero.astro`, `src/components/Contact.astro`, and `src/layouts/Layout.astro`.

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.

---

Built with [Astro](https://astro.build/) · Deployed on [GitHub Pages](https://pages.github.com/)
