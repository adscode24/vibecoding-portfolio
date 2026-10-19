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
  repo?: string;
  live?: string;
  featured?: boolean;
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
    "I turn messy operational problems into working web apps — fast, in public, and shipped to real users.",
  intro:
    "Most of what I build starts as a rough idea and ends as a deployed product in the same week. I work with AI coding tools as a partner: describing the problem, iterating on real code, and refining until it's genuinely usable.",
  location: "Indonesia",
  email: "", // isi kalau mau tombol email muncul
  github: "https://github.com/adscode24",
  socials: [
    { label: "GitHub", href: "https://github.com/adscode24" },
  ],
  stats: [
    { value: "10+", label: "Projects shipped" },
    { value: "8", label: "Live deployments" },
    { value: "3", label: "Business domains" },
    { value: "100%", label: "AI-assisted builds" },
  ],
  facts: [
    { label: "Based in", value: "Indonesia" },
    { label: "Focus", value: "Web apps, dashboards, internal tools" },
    { label: "Method", value: "AI-assisted development" },
    { label: "Status", value: "Open to freelance & collaboration" },
  ],
  nav: [
    { label: "Work", href: "#work" },    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
};

export const projects: Project[] = [
  {
    slug: "dashboard-gudang-batu-ceper",
    title: "Dashboard Gudang Batu Ceper",
    summary: "Warehouse operations dashboard for inventory and stock flow.",
    description:
      "An internal dashboard that replaced manual spreadsheet tracking for a stone materials warehouse. Covers stock in/out, material movements, and reporting so the team can see current inventory without asking anyone.",
    year: "2026",
    status: "Live",
    stack: ["HTML", "JavaScript", "Vercel"],
    highlights: [
      "Live inventory overview across material types",
      "Stock in / stock out tracking",
      "Deployed on Vercel, accessible on any device",
    ],
    live: "https://whbacep.vercel.app",
    repo: "https://github.com/adscode24/dashboard-gudang-batu-ceper",
    featured: true,
  },
  {
    slug: "dashboard-produksi",
    title: "Dashboard Produksi",
    summary: "Production monitoring dashboard built for a manufacturing team.",
    description:
      "A production dashboard that gives the floor team a live picture of output, targets, and daily progress — replacing status updates that depended on someone remembering to send them.",
    year: "2026",
    status: "Live",
    stack: ["HTML", "JavaScript", "Vercel"],
    highlights: [
      "Daily production output vs target",
      "Simple, fast-loading interface",
      "Works well on tablets used on the shop floor",
    ],
    live: "https://dashboard-produksi-two.vercel.app",
    repo: "https://github.com/adscode24/dashboard-produksi",
    featured: true,
  },
  {
    slug: "pintarku",
    title: "Pintarku",
    summary: "Educational app that helps parents track their child's learning.",
    description:
      "A learning companion for parents and kids. Parents set up activities and follow progress, turning a vague goal of 'help the kid study' into something trackable week to week.",
    year: "2026",
    status: "Live",
    stack: ["TypeScript", "Next.js"],
    highlights: [
      "Typed end-to-end for fewer runtime bugs",
      "Progress tracking per learning activity",
      "Mobile-first layout for parents on the move",
    ],
    live: "https://anakku-pintar.vercel.app",
    repo: "https://github.com/adscode24/Pintarku",
  },
  {
    slug: "digital-group-id",
    title: "Digital Group ID",
    summary: "Company website and landing presence for a digital group.",
    description:
      "A clean marketing site for Digital Group ID, built to present services clearly and make it easy for prospective clients to reach out.",
    year: "2026",
    status: "Live",
    stack: ["HTML", "CSS", "Vercel"],
    highlights: [
      "Service-focused landing structure",
      "Fast static build, strong Lighthouse scores",
      "Zero-downtime deploys via Vercel",
    ],
    live: "https://digital-group-id.vercel.app",
    repo: "https://github.com/adscode24/digital-group-id",
  },
  {
    slug: "logo-design-skill",
    title: "Logo Design Skill",
    summary: "A reusable skill for generating brand logo concepts.",
    description:
      "An experiment in turning repeatable design work into a reusable building block — a packaged skill that produces consistent logo concepts instead of starting from a blank canvas every time.",
    year: "2026",
    status: "Public",
    stack: ["HTML", "Design"],
    highlights: [
      "Reusable, documented design workflow",
      "Consistent output across runs",
      "Open-sourced for reuse",
    ],
    repo: "https://github.com/adscode24/logo-design-skill",
  },
];

export const stackGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL", "Python"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Vite", "HTML5"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "REST APIs", "PostgreSQL", "Supabase", "Firebase"],
  },
  {
    title: "AI-assisted",
    items: ["Cursor", "Claude Code", "GitHub Copilot", "v0", "OpenCode"],
  },
  {
    title: "Platform & Ops",
    items: ["Vercel", "GitHub Actions", "Git", "Docker", "Android"],
  },
  {
    title: "Product",
    items: ["Figma", "Postman", "Notion", "Agile/Scrum"],
  },
];

export const processSteps: {
  step: string;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    title: "Understand the problem",
    description:
      "Sit with the person who has the pain. Not the feature list — the actual workflow that's broken and what it costs them today.",
  },
  {
    step: "02",
    title: "Map the smallest useful version",
    description:
      "Decide what the first version must do to be worth using. Cut everything else. A small thing that works beats a big thing that doesn't ship.",
  },
  {
    step: "03",
    title: "Build with AI as a pair",
    description:
      "I write the intent and review the output. When the generated code is wrong, I fix it rather than accept it — that review step is the actual work.",
  },
  {
    step: "04",
    title: "Ship early, iterate in public",
    description:
      "Deploy to a real URL as soon as it runs. Real usage surfaces what no planning session would, and fixes land in days rather than months.",
  },
];

export const aboutParagraphs: string[] = [
  "I build things that solve real, boring, expensive problems — a warehouse that loses track of stock, a factory floor without visibility, a parent unsure whether their kid is actually progressing.",
  "I came to programming through vibe coding: describing what I need, collaborating with AI on the implementation, and iterating fast on real code until it works. That approach let me ship projects in domains I don't have formal experience in, which is how I ended up building for logistics and manufacturing.",
  "What I care about is shipping. A deployed app that solves a narrow problem for a few people is worth more than a plan for a big one that never leaves the drawing board.",
];
