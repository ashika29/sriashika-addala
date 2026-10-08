# Sriashika Addala — Personal Site

An auto-biography in motion. Built with Next.js 15, React 19, TypeScript, Framer Motion, and Lenis.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Architecture

```
app/
  layout.tsx              ─ Root layout, metadata, JSON-LD injection
  Providers.tsx           ─ Theme + smooth scroll + cursor wrapper
  page.tsx                ─ Homepage (just assembles sections)
  sitemap.ts              ─ Dynamic /sitemap.xml
  robots.ts               ─ Dynamic /robots.txt
  manifest.ts             ─ Web app manifest; install icons are not yet supplied
  opengraph-image.tsx     ─ Dynamic /opengraph-image (1200x630)
components/
  sections/               ─ Hero, Arc, Sprints, Work, Research, Thoughts, Contact
  seo/JsonLd.tsx          ─ Server-rendered structured data injector
  ui/                     ─ Reusable: CustomCursor, Reveal, Marquee, Magnetic,
                            StatCounter, SectionMark, SplitText, ScrollProgress,
                            SmoothScrollProvider, Nav
data/
  index.ts                ─ Structured portfolio content and publication data.
lib/
  hooks.ts                ─ useTheme, useCursor, useInView, useScrollProgress,
                            useMousePosition, useReducedMotion
  utils.ts                ─ cn, clamp, lerp, easings
  seo.ts                  ─ SEO single source of truth (URL, person, keywords)
  jsonld.ts               ─ schema.org builders (Person, WebSite, ProfilePage)
styles/
  globals.css         ─ CSS variables + base + dark/light themes
types/
  index.ts            ─ All TypeScript types
```

## Stack rationale

- **Next.js 15 + React 19** — App Router, RSC where possible
- **TypeScript strict mode** — full type safety
- **Framer Motion** — orchestrated animations, layout transitions, springs
- **Lenis** — physics-based smooth scroll (no jank, honours reduced-motion)
- **styled-jsx** — scoped responsive styles per-component (built into Next)
- **No CSS framework** — design tokens are direct CSS variables in `globals.css`

## Customization

### Content
Structured portfolio content, career chapters, projects, and publication
summaries live in `data/index.ts`. Page-specific headings and presentation copy
remain with their components.

### Colors
Tokens are in `styles/globals.css` under `[data-theme="dark"]` and
`[data-theme="light"]`. The accent (`--accent`) drives most accent logic.

### Animations
Easing curves are in `lib/utils.ts`. The site honours
`prefers-reduced-motion` everywhere — animations degrade to instant.

## Accessibility

- Full keyboard navigation
- Focus-visible outlines (themed)
- Semantic HTML throughout
- `prefers-reduced-motion` respected in: SmoothScrollProvider, Reveal,
  SplitText, Magnetic, all hover transforms
- Custom cursor disabled on coarse-pointer devices
- Color contrast WCAG AA on both themes

## Performance

- All animations use `transform` and `opacity` (GPU-only)
- Lenis uses RAF, never blocks main thread
- IntersectionObserver for reveals (disconnects after first trigger)
- No layout thrash (no width/height/top/left transitions)
- Lighthouse target: 90+ Performance, 100 Accessibility

## Adding new content

### A new project
Add to `PROJECTS` in `data/index.ts`:
```ts
{
  slug: "new-thing",
  title: "New Thing",
  org: "Wherever",
  year: "2026",
  stack: ["React", "TypeScript"],
  size: "md",  // "lg" | "md" | "sm"
  note: "What it is, why it matters."
}
```

### A new gallery card
Add to `GALLERY` in `data/index.ts`:
```ts
{
  id: "unique-slug",
  kind: "painting",   // see GalleryKind in types
  title: "Title",
  meta: "Where · When",
  caption: "The story behind it.",
  color: "#A35A4A",
  symbol: "◐"
}
```

To use real images instead of glyph + color, swap the `Postcard` component
in `Gallery.tsx` to render `<Image src={item.image} ... />` in the centre.

## Deployment

```bash
npm run build
npm run start
```

Or deploy to Vercel: `vercel`

## Known TODOs (intentional)

- Project detail pages (`/projects/[slug]`) — stub route, not yet built
- The Gallery section is deferred until its artwork and content are ready.
- Add a current, approved résumé PDF before restoring a résumé download.
