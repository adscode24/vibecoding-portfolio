# Vibecoding Portfolio

Personal portfolio site for the projects I build with AI coding tools.

Built with **Next.js 16** (App Router), **TypeScript**, and **Tailwind CSS v4**.
Deployed on **Vercel**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Editing the content

**Almost everything lives in one file: [`src/data/site.ts`](src/data/site.ts).**

You do not need to touch any component to change the content:

| What                | Where in `src/data/site.ts`        |
| ------------------- | --------------------------------- |
| Name, role, tagline | `siteConfig`                      |
| Email, GitHub, links | `siteConfig`                     |
| Hero stats           | `siteConfig.stats`               |
| The "quick facts" box | `siteConfig.facts`               |
| Navigation links     | `siteConfig.nav`                 |
| Project cards        | `projects`                       |
| Toolkit sections     | `stackGroups`                    |
| "How I work" steps   | `processSteps`                   |
| About paragraphs     | `aboutParagraphs`                |

### Adding a project

Append an entry to the `projects` array:

```ts
{
  slug: "my-new-app",
  title: "My New App",
  summary: "One line shown on the card.",
  description: "Longer text shown when the Details button is opened.",
  year: "2026",
  status: "Live",              // "Live" shows a green dot, anything else grey
  stack: ["Next.js", "TypeScript"],
  highlights: ["Point one", "Point two"],
  live: "https://my-app.example.com",   // optional
  repo: "https://github.com/user/repo", // optional
}
```

Cards are automatically filtered by the technologies in `stack`, so a new tag
creates its own filter pill.

### Hiding or removing a project

Delete it from the array. There is no `hidden` flag to forget about.

## Structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts, SEO metadata, <html> shell
│   ├── page.tsx          # Section order
│   └── globals.css       # Theme tokens and base styles
├── components/
│   ├── icons.tsx         # Inline SVG icons
│   ├── reveal.tsx        # Scroll-in animation wrapper
│   ├── section.tsx       # Shared section shell + heading
│   ├── site-nav.tsx      # Sticky nav with scroll spy
│   ├── site-footer.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── projects.tsx
│       ├── project-explorer.tsx   # filtering + expandable cards
│       ├── about.tsx
│       ├── stack.tsx
│       ├── process.tsx
│       └── contact.tsx
└── data/
    └── site.ts           # ← all editable content
```

## Styling

Colours and fonts are design tokens at the top of
[`src/app/globals.css`](src/app/globals.css):

```css
@theme static {
  --color-ink: #0a0a0a;
  --color-muted: #6b7280;
  --color-line: #e5e7eb;
  --color-accent: #4f46e5;
}
```

Change `--color-accent` to recolour the whole site.

## Accessibility & performance notes

- Reveal animations render content as **visible** on the server; the hidden
  state is only applied after hydration to elements below the fold. The page is
  fully readable with JavaScript disabled.
- `prefers-reduced-motion` is respected.
- The site is fully static and prerendered — no runtime server cost.

## Deploying

Push to GitHub and connect the repository at
[vercel.com/new](https://vercel.com/new). Vercel detects Next.js automatically;
no configuration is required.
