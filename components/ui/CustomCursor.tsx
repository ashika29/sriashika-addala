"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/lib/hooks";

const SIZES: Record<string, number> = {
  default: 10,
  hover: 44,
  link: 28,
  postcard: 80,
  drag: 64,
};

const LABELS: Record<string, string> = {
  postcard: "open",
  link: "↗",
  drag: "drag",
};

/**
 * Custom cursor with multiple variants based on `data-cursor` attribute.
 * - Springs the position for buttery follow.
 * - Hides on touch / coarse-pointer devices.
 */
export function CustomCursor() {
  const { pos, variant, enabled } = useCursor();

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  // Spring config: tight but soft. The big variants feel "lazy" because the
  // bounding box is larger; we keep the spring constant.
  const sx = useSpring(mx, { stiffness: 400, damping: 32, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 400, damping: 32, mass: 0.4 });

  useEffect(() => {
    mx.set(pos.x);
    my.set(pos.y);
  }, [pos.x, pos.y, mx, my]);

  // Apply the "has custom cursor" class on <html> so we can hide the native one.
  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");
    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, [enabled]);

  if (!enabled) return null;

  const size = SIZES[variant] ?? SIZES.default;
  const label = LABELS[variant] ?? "";
  const showRing = variant !== "default";

  return (
    <>
      {/* Outer ring (animated size + label) */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          borderRadius: "50%",
          border: showRing ? "1px solid var(--accent)" : "1px solid transparent",
          background: variant === "postcard" ? "var(--accent)" : "transparent",
          color: "var(--bg)",
          mixBlendMode: variant === "postcard" ? "normal" : "difference",
          pointerEvents: "none",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          x: sx,
          y: sy,
          transition: "width 0.4s var(--ease-cinematic), height 0.4s var(--ease-cinematic), background 0.3s ease, border-color 0.3s ease",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {label}
      </motion.div>

      {/* Inner dot (always small, snappier follow) */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 5,
          height: 5,
          marginLeft: -2.5,
          marginTop: -2.5,
          borderRadius: "50%",
          background: "var(--accent)",
          pointerEvents: "none",
          zIndex: 9999,
          x: mx,
          y: my,
          opacity: variant === "default" ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      />
    </>
  );
}
