"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMousePosition } from "@/lib/hooks";
import { STATS } from "@/data";
import { SplitText } from "@/components/ui/SplitText";
import { StatCounter } from "@/components/ui/StatCounter";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mouse = useMousePosition();
  const reducedMotion = useReducedMotion() ?? false;

  // Scroll-linked parallax for the background wordmark
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const wordmarkX = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      aria-label="Introduction"
      tabIndex={-1}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        padding: "140px 40px 80px",
        display: "grid",
        gridTemplateRows: "auto 1fr auto auto",
        gap: 40,
      }}
    >
      {/* Massive background wordmark */}
      <motion.div
        aria-hidden
        className="font-serif"
        style={{
          position: "absolute",
          left: "-2vw",
          bottom: "-5vw",
          fontSize: "min(30vw, 420px)",
          fontWeight: 300,
          color: "var(--ink-4)",
          opacity: reducedMotion ? 1 : wordmarkOpacity,
          lineHeight: 0.78,
          letterSpacing: "-0.06em",
          fontStyle: "italic",
          fontVariationSettings: "'opsz' 144",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          x: reducedMotion ? 0 : wordmarkX,
          mixBlendMode: "normal",
        }}
      >
        ashika.
      </motion.div>

      {/* Atmospheric glow — follows cursor */}
      <motion.div
        aria-hidden
        animate={reducedMotion ? { x: 0, y: 0 } : { x: mouse.x * 30, y: mouse.y * 20 }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 60, damping: 22, mass: 1 }
        }
        style={{
          position: "absolute",
          top: "30%",
          left: "60%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 60%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Soft grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.35,
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      {/* Top meta row */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : { delay: 0.3, duration: 1 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          position: "relative",
          zIndex: 2,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span className="kicker">An auto-biography in motion · v2026</span>
        <span className="kicker" style={{ color: "var(--ink-4)" }}>
          Hyderabad ⟶ Lethbridge ⟶ wherever the work matters
        </span>
      </motion.div>

      {/* Headline */}
      <div style={{ position: "relative", zIndex: 2, alignSelf: "center" }}>
        <h1
          className="font-serif"
          style={{
            fontWeight: 300,
            fontSize: "clamp(56px, 11vw, 168px)",
            lineHeight: 0.92,
            letterSpacing: "-0.035em",
            fontVariationSettings: "'opsz' 144",
          }}
        >
          <span style={{ display: "block", overflow: "hidden" }}>
            <SplitText text="I make" delay={0.15} />
          </span>
          <span
            style={{
              display: "block",
              overflow: "hidden",
              paddingLeft: "clamp(20px, 6vw, 120px)",
            }}
          >
            <SplitText
              text="hard things simple."
              delay={0.35}
              accentWords={["simple."]}
              italic
            />
          </span>
          <span
            style={{
              display: "block",
              overflow: "hidden",
              marginTop: 18,
              fontSize: "clamp(28px, 4.5vw, 64px)",
              color: "var(--ink-2)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            <SplitText text="Then I teach what I learned." delay={0.6} />
          </span>
        </h1>

        {/* Signature line */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }
          }
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginTop: 56,
            flexWrap: "wrap",
          }}
        >
          <span
            className="font-serif"
            style={{ fontStyle: "italic", fontSize: 18, color: "var(--ink-2)" }}
          >
            Sriashika Addala
          </span>
          <span style={{ flex: "0 0 80px", height: 1, background: "var(--rule-strong)" }} />
          <span
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
            }}
          >
            Software Engineer II · Upland Software
          </span>
        </motion.div>
      </div>

      <div
        className="hero-actions"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          marginTop: 28,
        }}
      >
        <a href="#work" data-cursor="link" className="hero-action hero-action--primary">
          Explore my work
        </a>
        <a href="#contact" data-cursor="link" className="hero-action">
          Get in touch
        </a>
      </div>

      {/* Pull quote */}
      <motion.p
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { delay: 1.3, duration: 0.9 }}
        className="font-serif"
        style={{
          maxWidth: 620,
          fontSize: "clamp(17px, 1.5vw, 22px)",
          lineHeight: 1.55,
          color: "var(--ink-2)",
          position: "relative",
          zIndex: 2,
        }}
      >
        I’ve moved from learning unfamiliar stacks to owning product work, with each
        chapter shaped by building, teaching, and adapting.{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Antifragile by design.</em>
      </motion.p>

      {/* Stat slab */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { delay: 1.5, duration: 0.95, ease: [0.22, 1, 0.36, 1] }
        }
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid var(--rule)",
          paddingTop: 32,
          position: "relative",
          zIndex: 2,
        }}
        className="hero-stats"
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "0 24px",
              borderLeft: i === 0 ? "none" : "1px solid var(--rule)",
            }}
          >
            <div
              className="font-serif"
              style={{
                fontSize: "clamp(34px, 3.6vw, 54px)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                fontVariationSettings: "'opsz' 96",
              }}
            >
              <StatCounter value={s.value} suffix={s.suffix} />
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink-2)",
                marginTop: 12,
              }}
            >
              {s.label}
            </div>
            <div
              className="font-serif"
              style={{
                fontStyle: "italic",
                fontSize: 12,
                color: "var(--ink-3)",
                marginTop: 4,
              }}
            >
              {s.sub}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : { delay: 1.8, duration: 1 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: 40,
          display: "flex",
          alignItems: "center",
          gap: 14,
          zIndex: 2,
        }}
      >
        <span
          style={{
            width: 36,
            height: 1,
            background: "var(--ink-3)",
            animation: "scrollPulse 2.4s ease-in-out infinite",
            transformOrigin: "left",
          }}
        />
        <span
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--ink-3)",
          }}
        >
          Scroll to read on
        </span>
      </motion.div>

      <style jsx>{`
        .hero-action {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          padding: 11px 18px;
          border: 1px solid var(--rule-strong);
          border-radius: 999px;
          color: var(--ink);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }
        .hero-action:hover {
          border-color: var(--accent);
          background-color: var(--accent-soft);
        }
        .hero-action--primary {
          border-color: var(--accent);
          background-color: var(--accent);
          color: var(--bg);
        }
        .hero-action--primary:hover {
          background-color: color-mix(in srgb, var(--accent) 82%, var(--ink));
        }
        @keyframes scrollPulse {
          0%,
          100% {
            transform: scaleX(1);
            opacity: 0.6;
          }
          50% {
            transform: scaleX(1.6);
            opacity: 1;
          }
        }
        @media (max-width: 1024px) {
          .hero-actions {
            margin-top: 24px !important;
          }
          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px 0;
          }
          .hero-stats > div:nth-child(3) {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }
        @media (max-width: 640px) {
          .hero-actions {
            gap: 10px !important;
          }
          .hero-stats {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
