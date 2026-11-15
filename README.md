<div align="center">

# Leonardo Vieira — Portfolio

### Software Engineer · Full-Stack Developer

**A digital space where technology, simplicity, and thoughtful design meet.**

[![Website](https://img.shields.io/badge/Website-leovieira.vercel.app-8CCFE6?style=for-the-badge&logo=vercel&logoColor=white)](https://leovieira.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Le0Vieir4-15191D?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Le0Vieir4)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-149ECA?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)

**[Explore the live website](https://leovieira.vercel.app) · [Browse the source](https://github.com/Le0Vieir4/portifolio)**

</div>

---

## Overview

A personal portfolio built to showcase my work, technical expertise, and approach to software engineering. Developed with **Next.js App Router** and **TypeScript**, the experience combines a carefully structured codebase with an editorial, responsive interface.

The visual direction follows **Japanese Zen Futurism**: a balance of contemporary Japanese architecture, intentional negative space, restrained typography, and subtle digital details.

> **Precision in execution. Simplicity in expression. Purpose in every detail.**

## Highlights

- **Distinctive visual identity** — cinematic architectural imagery, minimal composition, and a restrained color palette.
- **Responsive experience** — layouts designed for desktop, tablet, and mobile.
- **Selected projects** — a curated presentation of software projects and their technical context.
- **Expertise and background** — dedicated sections for technologies, experience, and professional introduction.
- **Contact workflow** — validated contact form backed by a Next.js API route and Resend.
- **Maintainable content** — portfolio data separated from UI components and defined with TypeScript types.

## Tech stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, `clsx`, `tailwind-merge` |
| UI | Radix UI primitives, `class-variance-authority`, Lucide icons |
| Validation | Zod |
| Email | Resend |
| Tooling | pnpm, ESLint |
| Deployment | Vercel |

## Design philosophy

The interface is inspired by four Japanese design principles:

| Principle | Meaning | Application |
| --- | --- | --- |
| **Ma (間)** | Intentional space | Breathing room, rhythm, and hierarchy |
| **Kanso (簡素)** | Simplicity | Essential content without visual clutter |
| **Shibui (渋い)** | Subtle elegance | Refined typography and restrained accents |
| **Seijaku (静寂)** | Tranquility | Calm composition and purposeful interactions |

The design system is documented in [`DESIGN.md`](./DESIGN.md).

## Getting started

### Requirements

- Node.js compatible with Next.js 16
- pnpm 10 (the repository specifies `pnpm@10.33.0`)

### Installation

```bash
git clone https://github.com/Le0Vieir4/portifolio.git
cd portifolio
pnpm install
```

### Environment variables

Create a `.env.local` file at the project root:

```dotenv
RESEND_API_KEY=your_resend_api_key
```

The API key is used server-side for the contact form. **Never commit `.env.local` or expose your API key in client-side code.**

### Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
pnpm build
pnpm start
```

## Contact form and Resend

The contact form uses **Zod** validation on the client and in the `/api/contact` endpoint, with **Resend** handling email delivery.

For development without a verified domain, the repository supports Resend's testing sender (`onboarding@resend.dev`). In this mode, messages can only be sent to the email associated with your Resend account. Ensure that `contact.email` in `data/portfolio.ts` matches that address.

The visitor's email is used as **Reply-To**, not as the sender address, so replies can be directed to the person who submitted the form.

Once you have verified a sending domain, configure:

```dotenv
RESEND_API_KEY=your_resend_api_key
RESEND_SENDER_MODE=verified
RESEND_FROM_EMAIL="Portfolio <contact@your-verified-domain.com>"
```

If the API key is missing, the interface provides an email-app fallback. See the project's existing documentation for further implementation details.

## Project structure

```text
portifolio/
├── app/                 # App Router pages and API routes
├── components/          # Reusable interface components
├── data/                # Typed portfolio content
├── docs/                # Content documentation
├── lib/                 # Shared utilities
├── public/images/       # Static images and visual assets
├── types/               # TypeScript definitions
├── DESIGN.md            # Visual language and design principles
├── PRODUCT.md           # Product decisions and requirements
├── AGENTS.md            # Development guidance
└── package.json
```

### Updating portfolio content

The source content is documented in [`docs/portifolio-content.md`](./docs/portifolio-content.md) and represented in [`data/portfolio.ts`](./data/portfolio.ts). Keep both synchronized when editing projects, skills, or contact information. Shared types are defined in [`types/portfolio.ts`](./types/portfolio.ts).

## Quality checks

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## Deployment

The website is deployed on **Vercel**:

**[leovieira.vercel.app](https://leovieira.vercel.app)**

When deploying your own instance, configure the required environment variables in your hosting provider's settings.

## Author

**Leonardo Vieira Moreira**  
Software Engineer · Full-Stack Developer

[Portfolio](https://leovieira.vercel.app) · [GitHub](https://github.com/Le0Vieir4)

---

<div align="center">

<sub>Designed and developed with attention to detail.</sub>

</div>
