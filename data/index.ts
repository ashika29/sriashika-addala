import type {
  Chapter,
  Innovation,
  Project,
  GalleryItem,
  WritingPlatform,
  ResearchWork,
  Stat,
  SocialLink,
} from "@/types";

/* ════════════════════════════════════════════════════════════════════════════
   All copy lives here. Every word is final and tone-checked.
   The voice: confident but humble. Inspiring, not boastful.
   ════════════════════════════════════════════════════════════════════════════ */

export const STATS: Stat[] = [
  {
    value: 141679,
    suffix: "+",
    label: "Article views",
    sub: "GeeksforGeeks editorial",
  },
  {
    value: 3,
    suffix: "/3",
    label: "Sprint wins",
    sub: "Ideas selected for the product roadmap",
  },
  {
    value: 6,
    suffix: "mo",
    label: "On Audiences",
    sub: "From a new stack to complex systems",
  },
  {
    value: 75,
    suffix: "%",
    label: "Org-wide productivity lift",
    sub: "BOLT library, SysCloud",
  },
];

export const CHAPTERS: Chapter[] = [
  {
    era: "2017 — 2021",
    numeral: "I",
    title: "Lethbridge & Lovely",
    where: "LPU, Punjab · University of Lethbridge, Canada",
    body: "BTech in Computer Science with a major in AI/ML. A full scholarship took me to Canada for a semester abroad. Tim Hortons gave me my first paycheck and my first lesson: every job teaches something if you let it.",
    pull: "Every job teaches something.",
  },
  {
    era: "2020 — 2021",
    numeral: "II",
    title: "The intern who stayed",
    where: "SysCloud · Engineering Intern",
    body: "AngularJS, .NET, PHP — a stack from another decade. I walked in knowing nothing. Seven months later I was mentoring the next batch of interns through the same maze, on a different stack: React, NodeJS, GraphQL and Postgres.",
    pull: "Walked in knowing nothing.",
  },
  {
    era: "2021 — 2023",
    numeral: "III",
    title: "The overhaul",
    where: "SysCloud · Software Engineer",
    body: "Shipped 2 generations of BaaS: Backup as a Service from a reimagined codebase. Co-led BOLT and MSP beyond product application, a component library that lifted productivity 75% across the org. Mentored seven interns through it all.",
    pull: "Overhaul. Then launch what came next.",
  },
  {
    era: "2023",
    numeral: "IV",
    title: "Stabilize and build",
    where: "SysCloud · Senior Engineer",
    body: "Led 3rd & 4th generations' architecture for AI-powered data transformation. Helped lay a robust Cypress test automation framework that was config driven, scalable and maintainable. Directed SysCloud Academy — an in-house knowledge platform. Built the future while stabilizing the present.",
    pull: "Built the future while stabilizing the present.",
  },
  {
    era: "2024 — 2025",
    numeral: "V",
    title: "Day-one customer",
    where: "Upland · Software Engineer I",
    body: "I spent my first six months at Upland on Connectors. Then I was asked to bring my expertise to Audiences, a segmentation product that helps marketers reach the right people. Audiences reached production nine months after its concept, with our first enterprise customer onboarding on launch day.",
    pull: "First customer: day one.",
  },
  {
    era: "2025 —",
    numeral: "VI",
    title: "The Audiences shift",
    where: "Upland · Software Engineer II",
    body: "Audiences brought me into an unfamiliar .NET Framework, IIS, and Windows Services stack. Within my first six months on the product, I went from learning that stack to handling complex systems alongside a principal engineer with forty years of experience. Three innovation sprint wins, with ideas selected for the product roadmap.",
    pull: "Six months on Audiences: from a new stack to complex systems.",
  },
];

export const INNOVATIONS: Innovation[] = [
  {
    n: "02",
    name: "VSCode AI Test Generator",
    tagline: "An extension that writes your tests.",
    body: "OpenAI + HuggingFace, tuned for JavaScript, TypeScript, and React. Reached 95% test coverage across team members' real codebases. Built in a sprint and selected as the sprint winner.",
    hue: "var(--sun)",
  },
  {
    n: "01",
    name: "AI-Powered Audiences",
    tagline: "English in, segmentation logic out.",
    body: "Users ask in natural language. The system translates to precise query logic against complex segmentation data. Now on the product roadmap alongside other AI-driven features & data driven insights.",
    hue: "var(--ice)",
  },
  {
    n: "03",
    name: "Upland Buddy",
    tagline: "A cross-product AI assistant concept.",
    body: "An AI/ML-powered assistant concept for contextual knowledge across Upland products. Won the People's Choice Award at Upland's 2026 innovation sprint.",
    hue: "var(--ember)",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "upland/audiences",
    title: "Audiences",
    org: "Upland",
    year: "2024 - Present",
    stack: [
      "ASP.NET",
      "Knockout",
      "React",
      "Snowflake",
      "AWS",
      "Postgres",
      "Playwright",
      "API",
      "Python",
      "AI/ML",
      "Agentic AI Systems",
    ],
    size: "md",
    note: "Adestra Audiences helps marketing teams discover audience opportunities, build targeted segments, and activate campaigns faster using the customer data they already have—all within Adestra. Instead of relying on external tools, analysts, or complex data workflows, marketers can uncover insights, refine audiences, and launch more relevant campaigns instantly, right where their email campaigns happen.",
  },
  {
    slug: "upland/connectors",
    title: "Connectors",
    org: "Upland",
    year: "2024",
    stack: [
      "AWS",
      "Node.js",
      "Salesforce",
      "React",
      "Shopify",
      "Postgres",
      "CRM",
    ],
    size: "md",
    note: "My first six months at Upland were spent on Connectors, integrating Salesforce and Shopify with Adestra. I continue to support the work on demand. Purpose-built for organizations managing multiple brands, teams, or business units.",
  },
  {
    slug: "syscloud-backup",
    title: "Backup",
    org: "SysCloud",
    year: "2021 - 2024",
    stack: [
      "React",
      "TypeScript",
      "GraphQL",
      "PostgreSQL",
      "Go",
      "Cypress",
      "API",
      "AWS",
      "Sentry",
      "Chargebee",
      "Docker",
      "Storybook",
    ],
    size: "md",
    note: "Contributed to four generations of SysCloud: Backup as a Service and co-led BOLT, a shared component library adopted beyond the product team. Focused on reliability, testability, and maintainability.",
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gfg-recursion",
    kind: "article",
    title: "Recursion, explained for a 10-year-old",
    meta: "GeeksforGeeks · 141K views",
    caption:
      "Editorial-picked. The article that taught me writing is just translation.",
    color: "#C8A878",
    symbol: "✎",
  },
  {
    id: "hallway-wall",
    kind: "painting",
    title: "The hallway wall",
    meta: "Acrylic on plaster · 2024",
    caption: "One weekend, no stencils. The kind of mistake you can't undo.",
    color: "#A35A4A",
    symbol: "◐",
  },
  {
    id: "first-startup",
    kind: "essay",
    title: "On failing the first startup",
    meta: "Medium · @ashika2k8",
    caption: "Two co-founders. No problem. We learned which order matters.",
    color: "#7A8C6F",
    symbol: "❦",
  },
  {
    id: "imperfect-souls",
    kind: "fiction",
    title: "Imperfect Souls",
    meta: "Wattpad · ongoing",
    caption: "Fiction is where the unsayable lives. Still writing.",
    color: "#8E6C9A",
    symbol: "❋",
  },
  {
    id: "podcast-pilot",
    kind: "audio",
    title: "Pilot — the longer story",
    meta: "Podcast · in progress",
    caption: "Reserved for the longer story. Soon.",
    color: "#5A7AA0",
    symbol: "♫",
  },
  {
    id: "bolt-sketches",
    kind: "design",
    title: "BOLT component sketches",
    meta: "Notebook scans · 2022",
    caption: "Every reusable component starts on paper.",
    color: "#B89060",
    symbol: "◇",
  },
  {
    id: "mural-timelapse",
    kind: "video",
    title: "Mural timelapse",
    meta: "Mural timelapse · 2023",
    caption: "Three hours, sped to thirty seconds. The wall is still there.",
    color: "#9A5A48",
    symbol: "▶",
  },
  {
    id: "undergrad-paper",
    kind: "research",
    title: "Undergraduate research paper",
    meta: "Undergraduate research · 2020",
    caption: "First thing I ever wrote that someone else cited.",
    color: "#6B7B8E",
    symbol: "§",
  },
];

export const RESEARCH_WORKS: ResearchWork[] = [
  {
    title: "Research paper on vehicle detection and recognition",
    date: "May 2020",
    dateTime: "2020-05",
    summary:
      "Computer-vision approaches for real-time vehicle detection on the LPU campus, with license-plate detection and OCR integrated into an Intelligent Traffic Management System.",
    note:
      "Later cited by a 2024 study on vehicle identification for Japanese used vehicles.",
  },
  {
    title: "Understanding Containerization",
    date: "March 2020",
    dateTime: "2020-03",
    summary:
      "A practical comparison of containerization technologies, including Docker, for a university server environment serving thousands of students.",
  },
  {
    title: "SRS — Software Requirements Specification for Snapchat",
    date: "July 2019",
    dateTime: "2019-07",
    summary:
      "A software-engineering course project: a 23-page requirements specification covering product features, interfaces, scalability requirements, ER diagrams, and black-box and white-box test plans.",
  },
];

export const WRITING_PLATFORMS: WritingPlatform[] = [
  {
    name: "GeeksforGeeks",
    handle: "Editorial contributor",
    metric: "141,679+",
    metricLabel: "views on one article",
    url: "https://www.geeksforgeeks.org/profile/ashika2k8",
  },
  {
    name: "Medium",
    handle: "@ashika2k8",
    metric: "Bold perspectives",
    metricLabel: "essays & reflections",
    url: "https://medium.com/@ashika2k8",
  },
  {
    name: "Wattpad",
    handle: "Imperfect Souls",
    metric: "Creative Fiction",
    metricLabel: "ongoing stories",
    url: "https://www.wattpad.com/story/345666699-imperfect-souls",
  },
  {
    name: "WordPress",
    handle: "ashikavarma",
    metric: "Experimenting",
    metricLabel: "longform thinking",
    url: "https://ashikavarma.wordpress.com",
  },
  {
    name: "ResearchGate",
    handle: "Sriashika Addala",
    metric: "Giving back",
    metricLabel: "61k+ reads | 6 citations",
    url: "https://www.researchgate.net/profile/Sriashika-Addala",
  },
];

export const PRINCIPLES: string[] = [
  "Make mistakes - learn from them, but never repeat a mistake.",
  "Every failure is a teacher I chose to keep.",
  "You shall reap what you sow. Karma, you see!",
  "Kindness is non-negotiable. So are boundaries.",
  "The day I stop learning is my last day.",
  "Curiosity fuels growth and innovation.",
  "Either I'm learning or I'm teaching.",
  "All in or nothing.",
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sriashika-addala/" },
  { name: "GitHub", url: "https://github.com/ashika29" },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/ashika2k8",
  },
];

export const NAV_LINKS = [
  { label: "Arc", id: "arc" },
  { label: "Sprints", id: "sprints" },
  { label: "Work", id: "work" },
  { label: "Research", id: "research" },
  { label: "Thoughts", id: "thoughts" },
  { label: "Contact", id: "contact" },
] as const;
