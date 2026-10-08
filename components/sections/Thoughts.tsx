"use client";

import { PRINCIPLES, WRITING_PLATFORMS } from "@/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMark } from "@/components/ui/SectionMark";
import { Marquee } from "@/components/ui/Marquee";

export function Thoughts() {
  return (
    <section
      id="thoughts"
      aria-label="Principles and published writing"
      tabIndex={-1}
      style={{
        padding: "140px 0 120px",
      }}
    >
      <div
        style={{
          padding: "0 40px",
          maxWidth: "var(--page-max)",
          margin: "0 auto",
        }}
      >
        <SectionMark n="05" label="Thoughts" />

        <Reveal>
          <h2 className="display">
            What I <em>believe.</em>
          </h2>
        </Reveal>
      </div>

      {/* The big marquee quote — full-bleed */}
      <div
        style={{
          marginTop: 80,
          overflow: "hidden",
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
          padding: "40px 0",
        }}
      >
        <Marquee speed={60}>
          <span
            className="font-serif"
            style={{
              fontSize: "clamp(60px, 10vw, 160px)",
              fontWeight: 300,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              padding: "0 40px",
              fontStyle: "italic",
              fontVariationSettings: "'opsz' 144",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            Meet your life&apos;s purpose while maintaining humanity, integrity, fun,
            challenges, & growth.{" "}
            <span style={{ color: "var(--accent)" }}>—</span>{" "}
          </span>
        </Marquee>
      </div>

      <div
        style={{
          padding: "100px 40px 0",
          maxWidth: "var(--page-max)",
          margin: "0 auto",
        }}
      >
        <div
          className="words-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 100,
            alignItems: "start",
          }}
        >
          {/* Principles */}
          <ol style={{ listStyle: "none" }}>
            {PRINCIPLES.map((p, i) => (
              <Reveal key={i} delay={i * 0.1} x={-20} y={0}>
                <li
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr",
                    gap: 24,
                    padding: "32px 0",
                    borderTop: "1px solid var(--rule)",
                    borderBottom:
                      i === PRINCIPLES.length - 1
                        ? "1px solid var(--rule)"
                        : undefined,
                    alignItems: "baseline",
                  }}
                  className="principle"
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      color: "var(--accent)",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="font-serif"
                    style={{
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: "clamp(22px, 2.6vw, 36px)",
                      lineHeight: 1.25,
                      letterSpacing: "-0.015em",
                      fontVariationSettings: "'opsz' 72",
                    }}
                  >
                    {p}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Aside */}
          <Reveal delay={0.2}>
            <aside
              className="words-aside"
              style={{
                position: "sticky",
                top: 120,
                padding: 36,
                borderLeft: "2px solid var(--accent)",
                background: "var(--bg-2)",
              }}
            >
              <p
                className="font-serif"
                style={{
                  fontSize: 19,
                  lineHeight: 1.5,
                  color: "var(--ink-2)",
                  marginBottom: 18,
                }}
              >
                <span
                  style={{
                    fontSize: 48,
                    color: "var(--accent)",
                    lineHeight: 0,
                    position: "relative",
                    top: 10,
                    marginRight: 4,
                  }}
                >
                  &ldquo;
                </span>
                Nobody else explains complicated concepts so naturally a kid can
                understand.
              </p>
              <p
                className="font-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--ink-3)",
                }}
              >
                — GeeksforGeeks editorial&apos;s remarks on my writing
              </p>
            </aside>
          </Reveal>
        </div>

        {/* Writing platforms grid */}
        <Reveal delay={0.2}>
          <section aria-label="Writing platforms" style={{ marginTop: 100 }}>
            <h3
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 400,
                color: "var(--ink-3)",
                margin: "0 0 16px",
              }}
            >
              Writing platforms
            </h3>
            <div
              className="platforms-grid"
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${WRITING_PLATFORMS.length}, 1fr)`,
                gap: 0,
                borderTop: "1px solid var(--rule)",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              {WRITING_PLATFORMS.map((p, i) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  style={{
                    padding: "32px 24px",
                    borderLeft: i === 0 ? "none" : "1px solid var(--rule)",
                    minHeight: 240,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "background 0.4s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--accent-soft)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                  aria-label={`Visit ${p.name}: ${p.handle}`}
                  className="platform-tile"
                >
                  <div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--ember)",
                        marginBottom: 8,
                      }}
                    >
                      0{i + 1}
                    </div>
                    <h4
                      className="font-serif"
                      style={{
                        fontSize: 22,
                        fontWeight: 400,
                        marginBottom: 4,
                        fontVariationSettings: "'opsz' 96",
                      }}
                    >
                      {p.name}
                    </h4>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        color: "var(--ink-3)",
                      }}
                    >
                      {p.handle}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-serif"
                      style={{
                        fontSize: 32,
                        letterSpacing: "-0.02em",
                        lineHeight: 1,
                        fontVariationSettings: "'opsz' 96",
                      }}
                    >
                      {p.metric}
                    </div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        marginTop: 4,
                      }}
                    >
                      {p.metricLabel}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .words-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .words-aside {
            position: relative !important;
            top: 0 !important;
          }
          .platforms-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .platform-tile:nth-child(odd) {
            border-left: none !important;
          }
          .platform-tile:nth-child(n + 3) {
            border-top: 1px solid var(--rule) !important;
          }
        }
        @media (max-width: 640px) {
          .platforms-grid {
            grid-template-columns: 1fr !important;
          }
          .platform-tile {
            border-left: none !important;
            border-top: 1px solid var(--rule) !important;
          }
          .platform-tile:first-child {
            border-top: none !important;
          }
        }
      `}</style>
    </section>
  );
}
