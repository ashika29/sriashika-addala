"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MagneticProps = {
  children: ReactNode;
  strength?: number; // 0 = none, 1 = strong
  className?: string;
  as?: "div" | "span" | "button" | "a";
};

/**
 * Magnetic interaction: the element's content drifts toward the cursor.
 * Pure transforms — GPU only, no layout thrash.
 */
export function Magnetic({
  children,
  strength = 0.35,
  className,
  as = "div",
}: MagneticProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
      setOffset({ x: dx, y: dy });
    },
    [strength, reduced]
  );

  const onLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  const animate = { x: offset.x, y: offset.y };
  const transition = { type: "spring" as const, stiffness: 200, damping: 18, mass: 0.5 };
  const handlers = { onMouseMove: onMove, onMouseLeave: onLeave };

  // The ref is shared; we cast at each branch because motion components have
  // element-specific ref types that don't unify cleanly under HTMLElement.
  const setRef = (el: HTMLElement | null) => {
    ref.current = el;
  };

  if (as === "span") {
    return (
      <motion.span
        ref={setRef as React.RefCallback<HTMLSpanElement>}
        className={className}
        animate={animate}
        transition={transition}
        {...handlers}
      >
        {children}
      </motion.span>
    );
  }
  if (as === "button") {
    return (
      <motion.button
        type="button"
        ref={setRef as React.RefCallback<HTMLButtonElement>}
        className={className}
        animate={animate}
        transition={transition}
        {...handlers}
      >
        {children}
      </motion.button>
    );
  }
  if (as === "a") {
    return (
      <motion.a
        ref={setRef as React.RefCallback<HTMLAnchorElement>}
        className={className}
        animate={animate}
        transition={transition}
        {...handlers}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.div
      ref={setRef as React.RefCallback<HTMLDivElement>}
      className={className}
      animate={animate}
      transition={transition}
      {...handlers}
    >
      {children}
    </motion.div>
  );
}
