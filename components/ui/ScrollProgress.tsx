"use client";

import { useScrollProgress } from "@/lib/hooks";

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: "var(--rule)",
        zIndex: 200,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress * 100}%`,
          background: "var(--accent)",
          transformOrigin: "left",
          transition: "width 0.05s linear",
          boxShadow: "0 0 12px var(--accent)",
        }}
      />
    </div>
  );
}
