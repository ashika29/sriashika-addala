"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useInView } from "@/lib/hooks";

type StatCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
  format?: boolean;
};

export function StatCounter({
  value,
  suffix = "",
  duration = 1800,
  format = true,
}: StatCounterProps) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.3);
  const [n, setN] = useState(0);
  const rafRef = useRef<number | null>(null);
  const reducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setN(value);
      return;
    }
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out-cubic
      setN(Math.round(value * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, value, duration, reducedMotion]);

  return (
    <span ref={ref}>
      {format ? n.toLocaleString() : n}
      {suffix}
    </span>
  );
}
