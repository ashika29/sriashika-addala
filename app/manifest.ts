import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/* ════════════════════════════════════════════════════════════════════════════
   manifest.ts — auto-generates /manifest.webmanifest

   Supplies browser metadata for an installable experience when the required
   icon assets are present. A manifest does not itself improve search ranking.

   ICONS NEEDED IN /public:
   - /icon-192.png   (192x192, PNG)
   - /icon-512.png   (512x512, PNG)
   - /apple-icon.png (180x180, PNG, no transparency)
   - /favicon.ico    (multi-size ICO)
   ════════════════════════════════════════════════════════════════════════════ */

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.tagline}`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: SITE.themeColorDark,
    theme_color: SITE.themeColorDark,
    orientation: "portrait-primary",
    categories: ["portfolio", "personal", "technology"],
    lang: SITE.language,
  };
}
