/* ── Tiny utilities ─────────────────────────────────────────────────────── */

export function cn(...inputs: Array<string | undefined | false | null>): string {
  return inputs.filter(Boolean).join(" ");
}

export function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Easing — the one we use everywhere. */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT_CUBIC = [0.65, 0, 0.35, 1] as const;
