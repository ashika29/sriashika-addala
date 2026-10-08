import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/* ════════════════════════════════════════════════════════════════════════════
   sitemap.ts — Next.js App Router auto-generates /sitemap.xml from this.

   Submit it to:
   - Google Search Console:  https://search.google.com/search-console
   - Bing Webmaster Tools:   https://www.bing.com/webmasters
   - Yandex Webmaster:       https://webmaster.yandex.com

   When you add new pages (e.g. /projects/[slug] dynamic routes), include them
   here so they're discoverable.
   ════════════════════════════════════════════════════════════════════════════ */

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    // Hash-only anchors don't need their own sitemap entries — they're part
    // of the homepage. If you split sections into routes later, add them here.
    // Example for when you add project detail pages:
    // ...PROJECTS.map((p) => ({
    //   url: `${SITE.url}/projects/${p.slug}`,
    //   changeFrequency: "yearly" as const,
    //   priority: 0.7,
    // })),
  ];
}
