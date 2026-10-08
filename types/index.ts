// ── Domain types ─────────────────────────────────────────────────────────────

export type Theme = "dark" | "light";

export type CursorVariant = "default" | "hover" | "link" | "postcard" | "drag";

export type Chapter = {
  era: string;
  numeral: string; // Roman
  title: string;
  where: string;
  body: string;
  pull: string;
};

export type Innovation = {
  n: string;
  name: string;
  tagline: string;
  body: string;
  hue: string;
};

export type Project = {
  slug: string;
  title: string;
  org: string;
  year: string;
  stack: string[];
  size: "lg" | "md" | "sm";
  note: string;
};

export type GalleryKind =
  | "all"
  | "article"
  | "painting"
  | "essay"
  | "fiction"
  | "audio"
  | "design"
  | "video"
  | "research";

export type GalleryItem = {
  id: string;
  kind: Exclude<GalleryKind, "all">;
  title: string;
  meta: string;
  caption: string;
  color: string;
  symbol: string; // unicode glyph used as art placeholder
};

export type WritingPlatform = {
  name: string;
  handle: string;
  metric: string;
  metricLabel: string;
  url: string;
};

export type ResearchWork = {
  title: string;
  date: string;
  dateTime: string;
  summary: string;
  note?: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  sub: string;
};

export type SocialLink = {
  name: string;
  url: string;
};
