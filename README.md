# Portfolio — Hendra

Personal portfolio of vibe-coded products, built with **Next.js 16**
(App Router), **TypeScript**, and **Tailwind CSS v4**, deployed on **Vercel**.

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

| What                 | Where in `src/data/site.ts` |
| -------------------- | --------------------------- |
| Name, role, tagline  | `siteConfig`                |
| Email, GitHub, links | `siteConfig`                |
| Hero stats           | `siteConfig.stats`          |
| The "quick facts" box | `siteConfig.facts`          |
| Navigation links     | `siteConfig.nav`            |
| Project cards        | `projects`                  |
| Toolkit sections     | `stackGroups`               |
| "How I work" steps   | `processSteps`              |
| About paragraphs     | `aboutParagraphs`           |

### Adding a project

Append an entry to the `projects` array:

```ts
{
  slug: "my-new-app",
  title: "My New App",
  logo: "dignote",                      // see "Brand logos" below
  summary: "One line shown on the card.",
  description: "Longer text shown when Details is opened.",
  year: "2026",
  status: "Live",                       // "Live" shows a green dot, else grey
  stack: ["React", "TypeScript"],
  highlights: ["Point one", "Point two"],
  live: "https://my-app.example.com",   // optional
  repo: "https://github.com/user/repo", // optional
}
```

### Brand logos

The four project logos come from the Digital Group ID brand kit and are inlined
as React components in
[`src/components/logos/digi-logos.tsx`](src/components/logos/digi-logos.tsx).

- `logo: "digifleet" | "digifuel" | "digiscm" | "dignote"` picks one.
- They are inlined rather than loaded with `<img>` on purpose: an SVG loaded
  through `<img>` renders in an isolated context where external resources —
  including the `@import` of the Sora font inside the original files — are
  blocked. Inlining lets the wordmark use the Sora webfont the site loads.

To use a logo that is not in the kit yet, drop it in that file, export a
component with a `{ className }` prop, and register it in the `digiLogos`
object. The key must also be added to the `LogoKey` union in
`src/data/site.ts`.

## Contact form

The form posts to `POST /api/contact`
([`src/app/api/contact/route.ts`](src/app/api/contact/route.ts)), which sends
the message through [Resend](https://resend.com).

**Without configuration the form still works** — if no API key is set, the
endpoint returns `503` and the browser falls back to opening the visitor's own
mail client with the message pre-filled, so no message is lost.

To enable real server-side sending:

1. Copy `.env.example` to `.env.local`.
2. Add a Resend API key (free tier available).
3. Optionally verify your own domain in Resend and set `CONTACT_FROM`.

```bash
RESEND_API_KEY=re_xxxx
CONTACT_TO=hendra@synctrax.id
CONTACT_FROM=Portfolio <you@yourdomain.com>
```

The endpoint validates input, enforces a message length cap, and includes a
honeypot field that silently drops bot submissions.

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

## Structure

```
src/
├── app/
│   ├── layout.tsx              # Fonts, SEO metadata, <html> shell
│   ├── page.tsx                # Section order
│   ├── globals.css             # Theme tokens and base styles
│   └── api/contact/route.ts    # Contact form endpoint (Resend)
├── components/
│   ├── icons.tsx               # Inline SVG icons
│   ├── logos/digi-logos.tsx    # Digital Group ID brand logos
│   ├── reveal.tsx              # Scroll-in animation wrapper
│   ├── section.tsx             # Shared section shell + heading
│   ├── contact-form.tsx        # Client-side contact form
│   ├── site-nav.tsx            # Sticky nav with scroll spy
│   ├── site-footer.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── projects.tsx
│       ├── project-explorer.tsx   # expandable project cards
│       ├── about.tsx
│       ├── stack.tsx
│       ├── process.tsx
│       └── contact.tsx
└── data/
    └── site.ts                 # ← all editable content
```

## Accessibility & performance notes

- Reveal animations render content as **visible** on the server; the hidden
  state is only applied after hydration, and only to elements below the fold.
  The page stays fully readable with JavaScript disabled.
- `prefers-reduced-motion` is respected.
- The home page is fully static and prerendered — only the contact endpoint runs
  on demand.

## Deploying

Push to GitHub and connect the repository at
[vercel.com/new](https://vercel.com/new). Vercel detects Next.js automatically.
If you use the contact form, add `RESEND_API_KEY` in the project's
**Settings → Environment Variables**.
