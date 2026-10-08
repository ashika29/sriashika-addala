"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { CursorVariant } from "@/types";

/* ── prefers-reduced-motion ──────────────────────────────────────────────── */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return reduced;
}

/* ── In-view detection ───────────────────────────────────────────────────── */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px"
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold, rootMargin]);
  return [ref, inView];
}

/* ── Scroll progress (0..1) ──────────────────────────────────────────────── */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return progress;
}

/* ── Custom cursor state ─────────────────────────────────────────────────── */
type CursorState = {
  pos: { x: number; y: number };
  variant: CursorVariant;
  enabled: boolean;
};

export function useCursor(): CursorState {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(supportsFinePointer);
    if (!supportsFinePointer) return;

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const v = target?.closest?.("[data-cursor]")?.getAttribute("data-cursor") as
        | CursorVariant
        | null;
      if (v) setVariant(v);
    };
    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      // Only reset if leaving an attributed region (not entering another one).
      const related = e.relatedTarget as HTMLElement | null;
      if (target?.closest?.("[data-cursor]") && !related?.closest?.("[data-cursor]")) {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return { pos, variant, enabled };
}

/* ── Mouse position for parallax ─────────────────────────────────────────── */
export function useMousePosition(): { x: number; y: number } {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!supportsFinePointer) return;
    const handle = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);
  return pos;
}

/* ── Theme (persisted in localStorage) ───────────────────────────────────── */
export function useTheme(): { theme: "dark" | "light"; toggle: () => void } {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sa-theme");
      if (saved === "dark" || saved === "light") setTheme(saved);
    } catch {
      /* localStorage unavailable, default to dark */
    }
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("sa-theme", next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
