# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server (do not start/restart if the user already has one running)
- `npm run build` — typecheck (`tsc -b`) then production build via Vite; treat a failing build as a real error, not something to work around
- `npm run lint` — oxlint; run before considering any task done
- `npm run preview` — serve the `dist/` build locally

There is no test runner configured in this project.

## Architecture

Marketing site for Elite Urban Realty Professionals (Detroit real estate), built as a Vite + React 19 + TypeScript SPA styled with Tailwind v4. Client-side routing only via `react-router-dom` — no server, no CMS, no backend.

- `src/App.tsx` — route table. All pages render inside `Layout` via `<Outlet />`.
- `src/components/Layout.tsx` — the persistent header (nav, mobile menu) and footer (contact info, newsletter form, legal disclaimer) shared by every route.
- `src/components/ui.tsx` — small shared primitives used across pages: `Eyebrow`, `ArrowIcon`, `PageHero`.
- `src/pages/*` — one component per route (`Home`, `About`, `Programs`, `Investors`, `Agents`, `Testimonials`, `NotFound`). Pages import content from `src/data/site.ts` rather than hardcoding copy.
- `src/data/site.ts` — single source of truth for site copy and structured content: contact details, nav items, stats, partner logos, testimonials/reviews, team bios, investor tiers/FAQs, legal disclaimers. Also re-exports imported image assets used by that content (logos, portraits). When adding or editing on-site copy, edit here first.
- `src/assets/` — image assets, organized by kind: `logos/` (partner and brand marks), `people/` (team/testimonial portraits), `photos/` (property/scene photography). Imported directly into `site.ts` or page components so Vite fingerprints and optimizes them at build time.

### Styling

Tailwind v4 with the theme defined in `src/index.css` via `@theme`, not a `tailwind.config.js` (none exists — don't add one). Brand tokens: `--color-navy` (`#000050`), `--color-lime` (`#adff3e`), `--color-shell` (`#fbfbfb`), used as `bg-navy`, `text-lime`, etc. Font is Inter, loaded via Google Fonts `<link>` tags in `index.html`.

Mobile-first: base classes target small screens, `sm:`/`md:`/`lg:` layer up from there.

### Conventions already in place

- No semicolons, double quotes — match existing formatting rather than reformatting files.
- Page components are default exports; shared pieces in `components/` and `ui.tsx` are named exports.
- Internal navigation uses `react-router-dom`'s `Link`/`NavLink`; the header's contact CTA and footer anchors use a plain `<a href="#contact">` since the footer (with the contact form) is present on every page via `Layout`.
