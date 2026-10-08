import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/* ════════════════════════════════════════════════════════════════════════════
   robots.ts — Next.js auto-generates /robots.txt from this.

   Strategy: allow crawlers to fetch public site assets so rendered pages can
   be processed. Only API routes are excluded; blocking /_next/ can prevent
   crawlers from fetching the JavaScript and CSS needed to render the site.

   Non-production deployments stay crawlable so search engines can read their
   page-level noindex metadata. Only production advertises the sitemap.
   ════════════════════════════════════════════════════════════════════════════ */

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV !== "production") {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
