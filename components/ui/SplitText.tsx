"use client";

import { motion, useReducedMotion } from "framer-motion";

type SplitTextProps = {
  text: string;
  delay?: number;
  staggerWord?: number;
  className?: string;
  accentWords?: string[]; // words to render in accent color
  italic?: boolean;
};

/**
 * Word-by-word reveal. Splits on whitespace and renders each word with a
 * staggered y/opacity transition. Words flagged in `accentWords` are coloured.
 */
export function SplitText({
  text,
  delay = 0,
  staggerWord = 0.07,
  className,
  accentWords = [],
  italic = false,
}: SplitTextProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const accentSet = new Set(accentWords.map((w) => w.toLowerCase().replace(/[.,!?]$/, "")));

  if (reduced) {
    return (
      <span className={className}>
        {words.map((w, i) => {
          const isAccent = accentSet.has(w.toLowerCase().replace(/[.,!?]$/, ""));
          return (
            <span
              key={i}
              style={{
                color: isAccent ? "var(--accent)" : "inherit",
                fontStyle: isAccent && italic ? "italic" : "inherit",
              }}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </span>
    );
  }

  return (
    <span className={className} style={{ display: "inline-block" }}>
      {words.map((w, i) => {
        const isAccent = accentSet.has(w.toLowerCase().replace(/[.,!?]$/, ""));
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "top",
              marginRight: i < words.length - 1 ? "0.28em" : 0,
            }}
          >
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.85,
                delay: delay + i * staggerWord,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "inline-block",
                color: isAccent ? "var(--accent)" : "inherit",
                fontStyle: isAccent && italic ? "italic" : "inherit",
              }}
            >
              {w}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
