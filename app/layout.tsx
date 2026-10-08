import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Providers } from "./Providers";
import { SITE } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPersonSchema, buildWebsiteSchema, buildProfilePageSchema } from "@/lib/jsonld";

const isProductionDeployment = process.env.VERCEL_ENV === "production";

const otherVerifications: Record<string, string> = {};
if (SITE.verification.bing) {
  otherVerifications["msvalidate.01"] = SITE.verification.bing;
}
if (SITE.verification.yandex) {
  otherVerifications["yandex-verification"] = SITE.verification.yandex;
}

/* ─── Metadata ─────────────────────────────────────────────────────────────
   Hierarchical metadata. Root layout sets defaults; child pages override
   only what changes. metadataBase makes relative URLs (like /og-image)
   resolve to absolute ones in social previews. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  // Title template — every page becomes "Page Title | Sriashika Addala"
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },

  description: SITE.description,
  keywords: [...SITE.keywords],

  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,

  // Canonical for homepage — every page should specify its own via alternates.canonical
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": SITE.url,
    },
  },

  // Robots — allow all by default. Override on specific routes if needed.
  robots: !isProductionDeployment
    ? {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      }
    : {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },

  // Open Graph — Facebook, LinkedIn, Slack, Discord previews
  openGraph: {
    type: "profile",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
    firstName: SITE.person.givenName,
    lastName: SITE.person.familyName,
  },

  // Generic X/Twitter-compatible preview card; no account attribution.
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/opengraph-image"],
  },

  // Search Console verification — paste tokens into lib/seo.ts when you have them
  verification: {
    google: SITE.verification.google || undefined,
    other: otherVerifications,
  },

  // Apple-specific
  appleWebApp: {
    title: SITE.name,
    capable: true,
    statusBarStyle: "black-translucent",
  },

  // Category — helps some search engines classify the site
  category: "technology",

  // Format detection — prevents iOS from auto-linking phone numbers in body
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

/* ─── Viewport ─────────────────────────────────────────────────────────────
   Next.js 15+ requires viewport (and themeColor) exported separately from
   metadata. This is a breaking change from earlier versions. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: SITE.themeColorDark },
    { media: "(prefers-color-scheme: light)", color: SITE.themeColorLight },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.language} suppressHydrationWarning>
      <head>
        {/* Pre-connect to font CDNs for faster LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* JSON-LD structured data — server-rendered so crawlers see it immediately */}
        <JsonLd data={buildPersonSchema()} id="person-schema" />
        <JsonLd data={buildWebsiteSchema()} id="website-schema" />
        <JsonLd data={buildProfilePageSchema()} id="profile-page-schema" />
      </head>
      <body>
        <Providers>{children}</Providers>

        {/* Noscript fallback — search engines without JS still parse this */}
        <noscript>
          <div style={{ padding: "2rem", maxWidth: 720, margin: "0 auto" }}>
            <h1>{SITE.name}</h1>
            <p>{SITE.description}</p>
            <p>
              Contact:{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p>
              For the full interactive experience, please enable JavaScript.
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
