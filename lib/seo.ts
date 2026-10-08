/* ════════════════════════════════════════════════════════════════════════════
   SEO Configuration — Single source of truth
   ════════════════════════════════════════════════════════════════════════════
   All SEO-relevant constants live here. Layout, sitemap, robots, manifest,
   and JSON-LD all import from this file. Change once, propagate everywhere.

   When you launch:
   1. Update SITE.url to your actual production domain
   2. Add Google Search Console verification token (see verification block)
   3. Submit sitemap.xml to Google Search Console + Bing Webmaster Tools
   ════════════════════════════════════════════════════════════════════════════ */

export const RESEARCHGATE_PROFILE_URL =
  "https://www.researchgate.net/profile/Sriashika-Addala";

export const SITE = {
  /** Production URL — used as metadataBase. Must be absolute. */
  url: "https://sriashikaaddala.vercel.app",

  /** Brand name shown in title templates and structured data. */
  name: "Sriashika Addala",

  /** Short tagline. Appears in default OG description, manifest, JSON-LD. */
  tagline: "Engineer — I like to make hard things simple.",

  /** One-paragraph site description (default meta description and preview cards). */
  description:
    "Sriashika Addala — Software Engineer II at Upland Software, focused on Audiences with on-demand support for Connectors. Three innovation sprint wins, a GeeksforGeeks article with 141,679+ views, and research and academic work spanning computer vision, containerization, and software requirements.",

  /** Owner location — used in JSON-LD Person.address. */
  location: {
    city: "Hyderabad",
    region: "Telangana",
    country: "India",
    countryCode: "IN",
  },

  /** Owner email — for JSON-LD Person.email and direct contact. */
  email: "sriashikaaddala@gmail.com",

  /** Default locale. */
  locale: "en_IN",

  /** Default language for HTML lang attribute. */
  language: "en",

  /** Verification tokens — paste these once you've claimed each property. */
  verification: {
    google: "", // Google Search Console: paste meta name="google-site-verification" content here
    bing: "", // Bing Webmaster Tools
    yandex: "", // Yandex
  },

  /** Theme color for browser UI / PWA. Matches the site's dark default. */
  themeColorDark: "#0E0D0B",
  themeColorLight: "#F4F0E8",

  /** Author / Person identity for JSON-LD. */
  person: {
    name: "Sriashika Addala",
    givenName: "Sriashika",
    familyName: "Addala",
    /** Profile URLs that identify this person across the web. */
    sameAs: [
      "https://www.linkedin.com/in/sriashika-addala/",
      "https://github.com/ashika29",
      "https://medium.com/@ashika2k8",
      "https://www.geeksforgeeks.org/profile/ashika2k8",
      RESEARCHGATE_PROFILE_URL,
      "https://www.wattpad.com/user/aashiqa321_",
    ],
    jobTitle: "Software Engineer II",
    worksFor: "Upland Software",
    alumniOf: [
      {
        name: "Lovely Professional University",
        url: "https://www.lpu.in/",
      },
      {
        name: "University of Lethbridge",
        url: "https://www.uleth.ca/",
      },
    ],
    knowsAbout: [
      "Software Engineering",
      "Agentic AI Systems",
      "AI driven engineering",
      "Product ownership",
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      ".NET",
      "ASP.NET",
      "C#",
      "Python",
      "GraphQL",
      "Snowflake",
      "Postgres",
      "AWS",
      "AI/ML Integration",
      "Computer vision",
      "Vehicle detection",
      "License plate recognition",
      "Optical character recognition",
      "Containerization",
      "Software requirements specifications",
      "OpenAI API",
      "Anthropic Claude",
      "Prompt Engineering",
      "Technical Writing",
      "Mentorship",
      "Test driven development",
      "Forward deployed engineering",
      "FDE",
      "SDE",
      "SDET",
      "AI ML Engineer",
      "AI Engineer",
      "DevOps",
      "CI/CD",
      "Engineering leadership",
    ],
  },

  /** Concise topical terms; search engines decide whether to use them. */
  keywords: [
    "Sriashika Addala",
    "Sriashika",
    "Software Engineer",
    "Upland Software",
    "SysCloud",
    "React",
    "TypeScript",
    ".NET",
    "Applied AI",
    "Computer vision research",
    "Containerization research",
    "Software requirements",
    "GeeksforGeeks Editorial Contributor",
    "ResearchGate publications",
  ],
} as const;

/** Helper to build absolute URLs from path. */
export function absUrl(path: string = "/"): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${cleanPath === "/" ? "" : cleanPath}`;
}
