# AGENTS.md — Portfolio Website

## Mission
Build a polished, fast, accessible, responsive developer portfolio that presents the developer's identity, skills, experience, selected projects, and contact options. Prioritize quality over unnecessary complexity. Never invent personal information, work history, metrics, or project links; use clearly marked placeholders when details are missing.

## Required stack
- Package manager: **pnpm only**. Do not use npm or yarn for installation or scripts.
- Framework: **Next.js** with App Router.
- Language: **TypeScript**, strict mode; avoid `any`.
- UI: React Server Components by default; Client Components only for interactivity; use components from shadcn-ui.
- Styling: Tailwind CSS, following the installed version's conventions.
- Icons: lucide-react when needed.
- Animation: CSS first; add an animation library only if justified.
- Use currently compatible stable package versions and follow the project's existing configuration.

## Initial setup
If the project does not exist, initialize it with:

```bash
pnpm create next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias '@/*' --use-pnpm
```

Inspect the generated project before making changes. Do not overwrite existing work without reviewing it.

## Product requirements
Create a cohesive single-page portfolio with these sections:
1. **Header/navigation** — clear identity, accessible navigation, mobile menu, and prominent contact CTA.
2. **Hero** — concise positioning statement, short introduction, links to projects and contact, optional resume link if a real file exists.
3. **About** — authentic professional summary, interests, and strengths.
4. **Skills** — organized technical skills; only include technologies actually confirmed by the owner.
5. **Featured projects** — reusable cards with title, problem, solution, stack, screenshot, and verified demo/repository links when provided.
6. **Experience** — optional timeline populated only with confirmed experience.
7. **Contact** — verified email/social links; use a mailto link unless a working backend/form service is configured.
8. **Footer** — concise closing and navigation/social links.

Use editable typed data objects for portfolio content so the owner can update information without editing layout components.

## Visual direction — Impeccable (primary authority)
- **Impeccable is the primary visual-design direction and review framework for this project.** Follow its actual installed guidance, skills, commands, and documentation when accessible; do not invent Impeccable commands or claim to have run unavailable tools.
- Before designing, inspect the repository for Impeccable configuration or guidance. If Impeccable is not installed or accessible, state that limitation and apply the principles below without pretending to use it.
- Establish a coherent art direction before coding: visual concept, typographic scale, color palette, spacing rhythm, layout grid, component states, and motion principles.
- Aim for an editorial, distinctive, polished portfolio rather than a generic AI-generated landing page. Favor strong hierarchy, deliberate whitespace, precise alignment, readable content, and considered details.
- Avoid default-looking gradient hero sections, excessive glassmorphism, random decorative blobs, arbitrary shadows, and interchangeable project cards.
- Treat accessibility and usability as part of visual quality: readable contrast, visible keyboard focus, semantic structure, touch targets, and mobile layouts down to 320px.
- Motion must support comprehension, remain subtle, and respect `prefers-reduced-motion`. Avoid effects that harm performance or obscure content.
- Use a small, consistent set of design tokens in CSS/Tailwind rather than one-off arbitrary values. Choose a visual identity appropriate to the owner's actual work and personality; do not fabricate personal facts.
- Use only owner-provided or appropriately licensed visual assets. Never invent screenshots of real projects.

### Impeccable-driven design workflow
1. **Discover:** inspect available Impeccable instructions and project design constraints.
2. **Define:** document the chosen visual direction and core design tokens before building UI.
3. **Implement:** create the page with consistent typography, spacing, components, and responsive behavior.
4. **Review:** inspect the rendered page at mobile and desktop sizes; use Impeccable's actual review/refinement workflow when available.
5. **Refine:** correct weak hierarchy, uneven spacing, inconsistent styles, contrast problems, and generic-looking patterns before considering the UI finished.
6. **Verify:** run code checks and, where browser tooling exists, test navigation, interactive states, and responsive layouts.

## Suggested project structure
```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    icon.*
  components/
    layout/
    sections/
    ui/
  data/
    portfolio.ts
  lib/
    utils.ts
  types/
    portfolio.ts
public/
  images/
  resume/              # only if an actual resume is provided
```

Adapt to the existing repository rather than forcing this structure when inappropriate.

## Engineering rules
- Use semantic HTML and accessible landmarks, headings, labels, focus indicators, and keyboard navigation.
- Prefer Server Components. Add `"use client"` only where hooks, browser APIs, or interactive state require it.
- Keep components focused, reusable, and strongly typed; avoid unnecessary abstraction.
- Use `next/image` for appropriate local or remote images and `next/link` for internal navigation.
- Set meaningful metadata, Open Graph data, favicon, canonical URL when known, and descriptive alt text.
- Avoid layout shift, excessive client JavaScript, unnecessary dependencies, and blocking resources.
- Store secrets in environment variables; never expose private keys or credentials.
- No fake testimonials, achievements, statistics, experience, or broken placeholder links.
- No lorem ipsum in final visible copy. Unknown facts should be marked as TODO in source data or presented neutrally.
- Comments should explain non-obvious decisions, not restate code.

## Workflow for the agent
1. Inspect repository files, package.json, existing scripts, and installed dependencies.
2. Summarize the implementation plan and identify missing personal content.
3. Build a working page using accurate provided content and clearly editable placeholders.
4. Implement sections and reusable components with responsive styling.
5. Add metadata, accessibility, image optimization, and optional tasteful interactions.
6. Run available validation scripts and fix errors.
7. Report completed work, files changed, checks run, and any remaining TODOs.

## Validation
Run the scripts that actually exist in `package.json`, normally:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Do not claim checks passed unless executed successfully. If browser testing is available, inspect mobile and desktop layouts, navigation, console errors, and keyboard usability.

## Definition of done
- Portfolio loads and builds successfully.
- All primary sections render correctly on mobile and desktop.
- No TypeScript, lint, or build errors in available checks.
- Navigation, CTAs, and provided links work.
- Content is easy to update from typed data.
- Accessibility, SEO basics, performance, and reduced-motion preferences are addressed.
- Missing owner information is documented without invented facts.

## Owner information to request when needed
Preferred display name, professional title, short bio, verified skills, featured projects with links/screenshots, experience, contact email, social profiles, resume, language preference, and visual references. Do not block initial implementation solely because these details are missing.


## Portfolio Content

Use `docs/PORTFOLIO_CONTENT.md` as the single
source of truth for all portfolio content.

Use `DESIGN.md` for visual direction.

Do not invent personal information, work
experience, project features, or achievements.

Feature Weather.io as the primary project.

Preserve the supplied content and adapt its
presentation to the Japanese Zen Futurism
design system.