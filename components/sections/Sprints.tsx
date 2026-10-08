"use client";

import { motion } from "framer-motion";
import { INNOVATIONS } from "@/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMark } from "@/components/ui/SectionMark";

const ACCENT_HUES: Record<string, string> = {
  "var(--ember)": "#d97757",
  "var(--sun)": "#e8c547",
  "var(--ice)": "#6fb6cc",
};

export function Sprints() {
  return (
    <section
      id="sprints"
      aria-label="Innovation sprints"
      tabIndex={-1}
      style={{
        padding: "140px 40px 120px",
        background: "var(--bg-2)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div style={{ maxWidth: "var(--page-max)", margin: "0 auto" }}>
        <SectionMark n="02" label="Three sprints, three wins" />

        <header style={{ marginBottom: 80 }}>
          <Reveal>
            <h2 className="display">
              Ideas that <em>moved beyond the sprint.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede" style={{ marginTop: 28 }}>
              Three innovation sprint wins at Upland. Each winning idea was selected for
              the product roadmap.
            </p>
          </Reveal>
        </header>

        <div
          className="sprints-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--rule)",
            border: "1px solid var(--rule)",
          }}
        >
          {INNOVATIONS.map((s, i) => {
            const rawHue = ACCENT_HUES[s.hue] ?? "#d97757";
            return (
              <Reveal key={s.n} delay={i * 0.12} y={32}>
                <motion.article
                  data-cursor="hover"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  style={{
                    background: "var(--bg-2)",
                    padding: "40px 36px 44px",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    cursor: "default",
                  }}
                >
                  {/* Atmospheric seal */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: 36,
                      right: 36,
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${rawHue}40 0%, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 40,
                    }}
                  >
                    <span
                      className="font-serif"
                      style={{
                        fontStyle: "italic",
                        fontSize: 28,
                        color: rawHue,
                        fontWeight: 300,
                      }}
                    >
                      {s.n}
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: rawHue,
                        padding: "4px 10px",
                        border: `1px solid ${rawHue}66`,
                        borderRadius: 999,
                      }}
                    >
                      Sprint winner
                    </span>
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontWeight: 400,
                      fontSize: 26,
                      lineHeight: 1.1,
                      letterSpacing: "-0.015em",
                      marginBottom: 10,
                      fontVariationSettings: "'opsz' 96",
                    }}
                  >
                    {s.name}
                  </h3>

                  <p
                    className="font-serif"
                    style={{
                      fontStyle: "italic",
                      fontSize: 16,
                      color: rawHue,
                      marginBottom: 24,
                    }}
                  >
                    {s.tagline}
                  </p>

                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink-2)" }}>
                    {s.body}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <footer
            style={{
              marginTop: 64,
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: 32,
              alignItems: "start",
              paddingTop: 32,
              borderTop: "1px solid var(--rule)",
            }}
            className="sprints-foot"
          >
            <span className="kicker">Also —</span>
            <p
              className="font-serif"
              style={{
                fontSize: 17,
                lineHeight: 1.55,
                color: "var(--ink-2)",
                maxWidth: "60ch",
              }}
            >
              AI Pilot Program Champion at Upland. Volunteered, evaluated providers & use-cases influencing org rollout,
              trained several engineers, built the demos and extensive documentation. Awarded GitHub Goodies.
            </p>
          </footer>
        </Reveal>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .sprints-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .sprints-foot {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
