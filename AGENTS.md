# Repository Guidelines

## Project Structure & Module Organization
`pages/` hosts the Next.js routes and API handlers, while `components/` contains reusable React building blocks (hero sections, feeds, navigation). Shared data-fetching utilities live in `services/`, global Sass and layout tokens sit in `styles/`, and static assets (images, fonts, sitemap output) belong in `public/`. Keep marketing copy or locale-specific snippets close to their consuming component to minimize cross-file drift. When adding new features, mirror the established pattern: component markup in `components/`, page wiring in `pages/`, and configuration or constants alongside their closest usage.

## Build, Test, and Development Commands
- `npm run dev`: launches the local Next.js server on port 3000 with hot reload.
- `npm run build`: produces the optimized production bundle; use before pushing structural changes.
- `npm run start`: serves the compiled app locally to verify the production build.
- `npm run lint`: runs `next lint` (ESLint + `eslint-config-next`) to enforce repo rules; fix or suppress with justification.

## Coding Style & Naming Conventions
Use modern React functional components with hooks, typed via JSDoc when needed. Component and file names are PascalCase (`components/InfoHeroRight.jsx`), helpers are camelCase, and SCSS modules map 1:1 with their component (`styles/hero.module.scss`). Default to 2-space indentation, single quotes in JSX props, and keep JSX blocks under 80 characters by extracting subcomponents. Prefer CSS variables or shared mixins from `styles/` instead of ad-hoc inline styles. Run the linter before committing; it applies the same rules shipped in CI.

## Testing Guidelines
No automated suite exists yet; smoke-test pages manually by running `npm run dev` and exercising dynamic sections (Facebook feed, Google map, cookie consent). For data-driven components in `services/`, add lightweight utility tests under a new `__tests__/` directory using Jest (supported by Next.js) and name files `*.test.js`. Aim for coverage on API clients and formatting helpers, and document manual verification steps in the pull request.

## Commit & Pull Request Guidelines
Follow the existing history: concise, imperative subject lines (`node bump`, `team image fix`) and optional version tags (e.g., `v1.3.7 ...`). Each commit should tackle one logical change. Pull requests must describe motivation, implementation highlights, manual test notes, and any config changes (env vars, sitemap, assets). Link Jira/GitHub issues when applicable and include screenshots or GIFs for visual tweaks.

## Security & Configuration Tips
Secrets (Google Maps API keys, Facebook tokens) belong in `.env.local` and are loaded via `dotenv`; never commit them. Double-check sitemap updates (`next-sitemap.config.js`) when adding routes, and sanitize any third-party embeds before merging.
