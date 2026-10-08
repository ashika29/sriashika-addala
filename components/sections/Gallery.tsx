"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { GALLERY } from "@/data";
import type { GalleryItem, GalleryKind } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMark } from "@/components/ui/SectionMark";

const FILTER_KINDS: GalleryKind[] = [
  "all",
  "article",
  "painting",
  "essay",
  "fiction",
  "design",
  "audio",
  "video",
  "research",
];

/** Slight per-index rotation for that postcard tilt. */
function tiltFor(i: number): number {
  const tilts = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1.8];
  return tilts[i % tilts.length];
}

export function Gallery() {
  const [filter, setFilter] = useState<GalleryKind>("all");

  const visible = useMemo<GalleryItem[]>(
    () => (filter === "all" ? GALLERY : GALLERY.filter((g) => g.kind === filter)),
    [filter]
  );

  return (
    <section
      id="gallery"
      aria-label="Gallery of articles, paintings, fiction, and design"
      style={{
        padding: "140px 40px 120px",
        background: "var(--bg-2)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "var(--page-max)", margin: "0 auto" }}>
        <SectionMark n="05" label="Beyond code" />

        <header style={{ marginBottom: 56 }}>
          <Reveal>
            <h2 className="display">
              A gallery of the <em>other things.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}          >
            <p className="lede" style={{ marginTop: 28 }}>Coming soon...</p>
          </Reveal>
        </header>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Postcard ──────────────────────────────────────────────────────────── */

function Postcard({ item, index }: { item: GalleryItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  const tilt = tiltFor(index);

  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 32, rotate: tilt }}
      animate={{ opacity: 1, y: 0, rotate: tilt }}
      exit={{ opacity: 0, y: -32, scale: 0.95 }}
      transition={{
        layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.5, delay: index * 0.04 },
        y: { duration: 0.7, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] },
      }}
      whileHover={{
        rotate: 0,
        scale: 1.04,
        y: -8,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      data-cursor="postcard"
      style={{
        aspectRatio: "5 / 7",
        background: "var(--bg)",
        border: "1px solid var(--rule)",
        position: "relative",
        overflow: "hidden",
        textAlign: "left",
        padding: 0,
        cursor: "pointer",
        boxShadow: hovered
          ? `0 30px 60px -20px ${item.color}66, 0 0 0 1px ${item.color}55`
          : "0 10px 30px -15px rgba(0,0,0,0.35)",
        transition: "box-shadow 0.55s var(--ease-cinematic)",
        borderRadius: 2,
      }}
    >
      {/* Color wash */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${item.color}26 0%, transparent 50%, ${item.color}12 100%)`,
          opacity: hovered ? 1 : 0.7,
          transition: "opacity 0.5s",
        }}
      />

      {/* Postage lines (top-left) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 14,
          left: 14,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <div style={{ width: 30, height: 1, background: `${item.color}80` }} />
        <div style={{ width: 22, height: 1, background: `${item.color}55` }} />
        <div style={{ width: 28, height: 1, background: `${item.color}66` }} />
      </div>

      {/* Stamp / kind label (top-right) */}
      <div
        className="font-mono"
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          border: `1px solid ${item.color}99`,
          padding: "4px 8px",
          fontSize: 8,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: item.color,
          background: "color-mix(in srgb, var(--bg) 80%, transparent)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          borderRadius: 2,
        }}
      >
        {item.kind}
      </div>

      {/* Glyph */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${hovered ? 1.15 : 1})`,
          fontSize: "clamp(72px, 11vw, 140px)",
          color: item.color,
          opacity: 0.88,
          transition: "transform 0.7s var(--ease-cinematic)",
          fontFamily: "var(--font-serif)",
          lineHeight: 1,
        }}
      >
        {item.symbol}
      </div>

      {/* Caption strip */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: 20,
          background:
            "linear-gradient(to top, color-mix(in srgb, var(--bg) 96%, transparent) 0%, transparent 100%)",
          transform: hovered ? "translateY(0)" : "translateY(8px)",
          transition: "transform 0.55s var(--ease-cinematic)",
        }}
      >
        <div
          className="font-serif"
          style={{
            fontSize: 18,
            lineHeight: 1.15,
            marginBottom: 6,
            fontWeight: 400,
          }}
        >
          {item.title}
        </div>
        <div
          className="font-mono"
          style={{
            fontSize: 9,
            letterSpacing: "0.1em",
            color: "var(--ink-3)",
            marginBottom: 8,
          }}
        >
          {item.meta}
        </div>
        <div
          className="font-serif"
          style={{
            fontSize: 12,
            fontStyle: "italic",
            color: "var(--ink-2)",
            lineHeight: 1.5,
            opacity: hovered ? 1 : 0.65,
            transition: "opacity 0.4s",
          }}
        >
          {item.caption}
        </div>
      </div>
    </motion.button>
  );
}
