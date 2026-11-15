# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring teams reviewing a developer's work and deciding whether to make contact.

## Product Purpose

A portfolio with Brazilian Portuguese navigation, personal introduction, expertise descriptions, and project copy that presents Leonardo Vieira Moreira's selected work, English project names and expertise titles, and verified ways to get in touch. Success means a visitor can understand the projects and initiate a hiring conversation.

## Capabilities and Constraints

- Single-page portfolio built with the existing Next.js App Router, TypeScript, Tailwind CSS, and pnpm stack.
- Projects, skills, experience, and contact methods must reflect owner-confirmed information. Do not fabricate credentials, screenshots, links, or contact details.
- `docs/portifolio-content.md` is the source of truth for identity, professional title, biography, expertise, skills, contact details, and project descriptions.
- The contact action opens an accessible form and sends via a server-side Resend route. With an API key, the no-domain test sender `onboarding@resend.dev` sends only to the matching Resend account email in portfolio data. A verified-domain sender can be enabled through environment variables later.
- No previous professional employment is listed; do not manufacture an experience timeline.
- The supplied personal phone number is withheld from the public page until its publication is confirmed.
- Live demos, project screenshots, a résumé, and a canonical site URL have not been supplied.
- Portuguese is the selected interface language.

## Brand Commitments

- The owner selected the architectural direction documented in `DESIGN.md` over the existing game-inspired selection screen.
- The photograph at `public/images/zen-architecture.jpg` is the provided architectural asset for the portfolio.

## Evidence on Hand

- The architectural photograph is available locally.
- The content document provides Leonardo's name, title, biography, expertise, four selected projects, email, and GitHub profile.
- All four project repository URLs resolve publicly. Weather.io is the primary project.
- No project screenshots, verified live demos, LinkedIn URL, résumé, or professional-employment entries have been provided.

## Product Principles

- Lead with the owner's real work once supplied.
- Make missing content explicit and easy to replace without changing the layout.
- Keep navigation, reading, and contact paths clear on small and large screens.
