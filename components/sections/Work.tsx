"use client";

import { PROJECTS } from "@/data";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { SectionMark } from "@/components/ui/SectionMark";

const SPAN: Record<string, number> = { lg: 3, md: 2, sm: 2 };

export function Work() {
  return (
    <section
      id="work"
      aria-label="Selected work and projects"
      tabIndex={-1}
      style={{
        padding: "140px 40px 120px",
        maxWidth: "var(--page-max)",
        margin: "0 auto",
      }}
    >
      <SectionMark n="03" label="Work that shipped" />

      <Reveal>
        <h2 className="display" style={{ marginBottom: 80, maxWidth: 800 }}>
          Products I helped <em>move forward.</em>
        </h2>
      </Reveal>

      <div
        className="work-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 1,
          background: "var(--rule)",
          border: "1px solid var(--rule)",
        }}
      >
        {PROJECTS.map((p, i) => (
          <Reveal
            key={p.slug}
            delay={i * 0.06}
            y={24}
            style={{ gridColumn: `span ${SPAN[p.size] ?? 2}` }}
          >
            <motion.div
              data-cursor="hover"
              whileHover={{ backgroundColor: "var(--bg-2)" }}
              transition={{ duration: 0.3 }}
              style={{
                background: "var(--bg)",
                padding: "36px 32px",
                position: "relative",
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                cursor: "pointer",
                gridColumn: `span ${SPAN[p.size] ?? 2}`,
              }}
              className={`work-tile work-tile--${p.size}`}
            >
              <div
                className="font-mono"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  marginBottom: 22,
                }}
              >
                <span>{p.org}</span>
                <span style={{ color: "var(--ink-4)" }}>·</span>
                <span>{p.year}</span>
              </div>

              <h3
                className="font-serif"
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(24px, 2.6vw, 36px)",
                  letterSpacing: "-0.015em",
                  marginBottom: 12,
                  fontVariationSettings: "'opsz' 96",
                }}
              >
                {p.title}
              </h3>

              <p
                className="font-serif"
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "var(--ink-2)",
                  marginBottom: 24,
                  flex: 1,
                }}
              >
                {p.note}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.06em",
                      padding: "4px 9px",
                      border: "1px solid var(--rule)",
                      borderRadius: 2,
                      color: "var(--ink-2)",
                    }}
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <motion.span
                aria-hidden
                whileHover={{ x: 4, y: -4 }}
                style={{
                  position: "absolute",
                  top: 32,
                  right: 28,
                  fontSize: 14,
                  color: "var(--accent)",
                  opacity: 0.4,
                }}
              >
                ↗
              </motion.span>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .work-grid > div {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 640px) {
          .work-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
