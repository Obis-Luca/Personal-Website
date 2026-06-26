# Luca Obis — Portfolio

A high-end, animated single-page portfolio. Built with **React 18 + Vite + Framer Motion**, no UI kit — every component and animation is hand-built.

## Run it

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Requires Node 18+.

## What's inside

| Section | Highlights |
|---|---|
| **Hero** | Typewriter role cycler, count-up stats, gradient headline, floating orbs + conic ring |
| **About** | Narrative + syntax-highlighted "terminal" card, education card |
| **Experience** | Scroll-drawn gradient timeline spine, pulsing "current" node (Amazon → Dapter → Raiffeisen) |
| **Projects** | Bento grid, category filters with animated layout, cursor-tracking spotlight on hover |
| **Skills** | Animated gradient proficiency bars that fill on scroll |
| **Contact** | Closing CTA, social pills, integrated footer |

Global touches: an interactive constellation **particle field** that reacts to the cursor, a **scroll-progress** bar, a scroll-spy **nav** with an animated active underline, and a responsive mobile menu.

## Editing content

All content lives in one file: [`src/data/content.js`](src/data/content.js) — profile, stats, experience, projects, skills. Edit there; every component reads from it.

## Design system

CSS custom properties in [`src/styles/global.css`](src/styles/global.css) define the palette (cyan → violet → pink), typography (Space Grotesk / JetBrains Mono / Inter), and shared utilities. Shared motion variants live in `src/styles/motion.js`.

- Fully responsive down to ~380px.
- Respects `prefers-reduced-motion`.
- Zero runtime dependencies beyond `react`, `react-dom`, `framer-motion`.

— Designed & built by Luca Obis.
