<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project overview

Link-in-bio page for Kevin Ady Guzmán (Software Developer). Static single-page site (`src/app/page.tsx`) listing links grouped by section (Portfolio, Currículum, Contacto, Redes). No backend, no database, no API routes. Sibling project to `../mi-portfolio`, deployed the same way (GitHub Pages, static export).

# Stack

- **Next.js 16.2.9** (App Router) — check `node_modules/next/dist/docs/01-app` before using any App Router API.
- **React 19.2.4** / **react-dom 19.2.4**, with `babel-plugin-react-compiler` enabled — avoid manual `useMemo`/`useCallback`.
- **TypeScript 5**, strict mode. Path alias `@/*` → `./src/*`.
- **Tailwind CSS 4** via `@tailwindcss/postcss` (CSS-first config — theme tokens declared with `@theme inline` in `src/app/globals.css`, no `tailwind.config.js`).
- **shadcn/ui-style components** in `src/components/ui/` built on `@radix-ui/react-slot`, `class-variance-authority` (cva), and `tailwind-merge` + `clsx` via `cn()` in `src/lib/utils.ts`.
- **motion** for the entrance stagger animation.
- **lucide-react** for icons, plus hand-written brand icons in `src/components/icons/SocialIcons.tsx`.
- Fonts: `next/font/google` — `JetBrains_Mono` (body/mono) and `Special_Elite` (display), same as `mi-portfolio`.

# Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build (static export to ./out)
npm run start    # run production build
npm run lint     # eslint
```

# Architecture

- `src/app/layout.tsx` — root layout: fonts, `<html lang="es">`, metadata.
- `src/app/page.tsx` — renders `<LinkTree />`.
- `src/components/LinkTree.tsx` — client component: avatar/name/tagline header + one block per section from `src/data/links.ts`, wrapped in a `motion` stagger fade-in.
- `src/components/LinkRow.tsx` — a single link button (icon + label + chevron), brutalist-border row.
- `src/data/links.ts` — **single source of truth for content**. Edit this file to change your name, tagline, sections, or links — never hardcode link data in JSX.
- `src/components/icons/SocialIcons.tsx` — hand-drawn GitHub/LinkedIn SVGs (kept vector, no external icon font).

# Visual style — "VHS / CRT brutalist", green terminal variant

Same visual language as `mi-portfolio` (see its `AGENTS.md`), re-themed in dark green/phosphor tones instead of amber/rust. All theming lives in `src/app/globals.css`; do not introduce a separate Tailwind config or scattered inline colors.

- Color tokens are HSL CSS custom properties on `:root`, mapped into Tailwind via `@theme inline` as `--color-*`. Always use semantic classes (`bg-background`, `text-accent`, `border-border`, …).
- `--radius: 0` — square-cornered brutalist UI everywhere.
- Reused utility classes from `globals.css` `@layer utilities`: `.brutalist-shadow`, `.brutalist-border`, `.chromatic-hover`, `.crt-glow`, `.grid-bg`, `.flicker`, `.terminal-cursor`.
- Typography: `JetBrains Mono` for body/UI (uppercase + tracked on labels), `Special Elite` for the name/display heading.
- UI copy is in Spanish (`lang="es"`) — keep new user-facing text in Spanish.

# Editing content

To update your links/bio, edit only `src/data/links.ts` — it's typed, so TypeScript will flag anything malformed. Do not add a CMS or fetch layer for this; the whole point of this page is that it's static and edited by hand.
