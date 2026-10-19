/**
 * All portfolio content lives in this file.
 * Edit the values below and the whole site updates — no component edits needed.
 */

export type Project = {
  slug: string;
  title: string;
  /** One line used on the card. */
  summary: string;
  /** Longer paragraph, shown when a project is expanded. */
  description: string;
  year: string;
  status: string;
  stack: string[];
  highlights: string[];
  live?: string;
  /** Only rendered when the repo is public. */
  repo?: string;
};

export type SiteConfig = {
  name: string;
  /** Shown in the browser tab + SEO title. */
  title: string;
  role: string;
  tagline: string;
  intro: string;
  location: string;
  email: string;
  github: string;
  socials: { label: string; href: string }[];
  stats: { label: string; value: string }[];
  facts: { label: string; value: string }[];
  nav: { label: string; href: string }[];
};

export const siteConfig: SiteConfig = {
  // TODO: ganti nama & detail di sini
  name: "ADS Code",
  title: "ADS Code — Portfolio of Vibecoded Products",
  role: "Vibe Coder & Product Builder",
  tagline:
    "I build and ship real products with AI — from a vague idea to a live URL with real users, fast.",
  intro:
    "Four production web apps built end to end: fleet management, supply chain, fuel tracking, and shared household finance. Every one of them went from problem statement to deployed software without a traditional development team.",
  location: "Indonesia",
  email: "", // isi kalau mau tombol email muncul
  github: "https://github.com/adscode24",
  socials: [{ label: "GitHub", href: "https://github.com/adscode24" }],
  stats: [
    { value: "4", label: "Live products" },
    { value: "4", label: "Custom subdomains" },
    { value: "2", label: "Native mobile builds" },
    { value: "100%", label: "AI-assisted" },
  ],
  facts: [
    { label: "Based in", value: "Indonesia" },
    { label: "Focus", value: "SaaS, operations & logistics apps" },
    { label: "Method", value: "AI-assisted development" },
    { label: "Status", value: "Open to freelance & collaboration" },
  ],
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
};

export const projects: Project[] = [
  {
    slug: "digifleet",
    title: "DigiFleet",
    summary: "SaaS transport management system for managing a company fleet.",
    description:
      "A fleet management product built for companies running their own vehicles. Vehicles, drivers, and trips are managed in one system with live location on a map, and it ships as a native Android and iOS app as well as a web dashboard. The architecture is multi-tenant SaaS with subscription billing, so it works for one company today and many tomorrow.",
    year: "2026",
    status: "Live",
    stack: ["React", "TypeScript", "Firebase", "Capacitor"],
    highlights: [
      "Fleet, driver, and trip management in one system",
      "Live vehicle location with interactive mapping",
      "Native Android & iOS builds via Capacitor",
      "Multi-tenant SaaS architecture with subscription billing",
    ],
    live: "https://fleet.digitalgroup.id/",
  },
  {
    slug: "digi-scm",
    title: "DigiSCM",
    summary:
      "Measures distribution team productivity, with an accounting book built in.",
    description:
      "An operations tool for distribution teams that answers a question spreadsheets never could: how productive was the field team this month? Activity is captured as it happens through QR scanning and location tracking, rather than reconstructed from paperwork at the end of the month. The accounting book lives in the same system, so the numbers and the ledger always agree.",
    year: "2026",
    status: "Live",
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    highlights: [
      "Team productivity measured from real field activity",
      "Integrated accounting book (buku keuangan)",
      "QR scanning and location tracking for field verification",
      "Reporting and spreadsheet export",
    ],
    live: "https://scm.digitalgroup.id/",
  },
  {
    slug: "digifuel",
    title: "DigiFuel",
    summary: "Tracks fuel spending and transport costs across daily vehicle use.",
    description:
      "Fuel and transport expense tracking built for people who spend most of their working life in a vehicle. Every fuel purchase and transport cost is logged against a vehicle, turning a pile of receipts into a monthly number you can actually see. It installs like a native app, keeps working with poor connectivity, and exports clean reports when finance asks for them.",
    year: "2026",
    status: "Live",
    stack: ["React", "TypeScript", "Firebase", "PWA"],
    highlights: [
      "Per-vehicle fuel and transport cost history",
      "Installable PWA with a native mobile build",
      "Monthly reporting with charts and PDF export",
      "Works reliably with intermittent connectivity",
    ],
    live: "https://fuel.digitalgroup.id/",
  },
  {
    slug: "dignote",
    title: "DigiNote",
    summary: "Shared finance tracking for couples keeping one set of books.",
    description:
      "A household finance app built for two people and one shared set of books. Both partners log income, expenses, and bills in the same place, which removes the end-of-month ritual of comparing screenshots and figuring out where the money went. Simple enough that both people actually keep using it.",
    year: "2026",
    status: "Live",
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    highlights: [
      "One shared ledger for both partners",
      "Income, expense, and bill tracking in one place",
      "Ends the monthly 'cari struk' reconciliation",
      "Designed to stay simple enough for two people to maintain",
    ],
    live: "https://note.digitalgroup.id/",
  },
];

export const stackGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL", "Bash"],
  },
  {
    title: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "Radix UI", "Recharts", "React Leaflet"],
  },
  {
    title: "Mobile",
    items: ["Capacitor", "Android", "iOS", "PWA", "Local notifications"],
  },
  {
    title: "Backend & Data",
    items: ["Firebase", "Supabase", "Firestore", "PostgreSQL", "Express", "Stripe"],
  },
  {
    title: "AI-assisted",
    items: ["Claude Code", "Cursor", "GitHub Copilot", "OpenCode", "Google GenAI"],
  },
  {
    title: "Platform & Ops",
    items: ["Vercel", "GitHub Actions", "Git", "Firestore rules", "Chrome DevTools"],
  },
];

export const processSteps: {
  step: string;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    title: "Find the real problem",
    description:
      "Start with whoever has the pain, not with a feature list. A warehouse that cannot tell what it has in stock is a problem worth solving; 'make a dashboard' is not.",
  },
  {
    step: "02",
    title: "Cut it down to shippable",
    description:
      "Decide the smallest version that is genuinely useful, then build exactly that. A small app that people open every day beats a large one that is still in progress.",
  },
  {
    step: "03",
    title: "Build with AI as a pair",
    description:
      "I write the intent, review what comes back, and fix what is wrong. Reading the code and correcting it is the actual work — that step is what separates a demo from a product.",
  },
  {
    step: "04",
    title: "Deploy early, iterate on real usage",
    description:
      "Get it on a real domain fast. Real usage surfaces problems no planning session ever would, and the next fix lands in days instead of months.",
  },
];

export const aboutParagraphs: string[] = [
  "I build software for problems that are too boring for most developers and too expensive for most businesses to keep ignoring: where the fleet actually is, what the distribution team actually did, what the fuel actually cost, where the household money actually went.",
  "I came to this through vibe coding rather than a traditional engineering path — describing the problem, collaborating with AI on the implementation, and iterating on real code until it worked. That approach let me ship products across logistics and finance without years of prior domain experience.",
  "All four products listed here are live and running on real subdomains. Not demos, not prototypes — used software, with native mobile builds where the work happens away from a desk.",
];
