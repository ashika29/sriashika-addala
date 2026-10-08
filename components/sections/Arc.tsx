"use client";

import { CHAPTERS } from "@/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMark } from "@/components/ui/SectionMark";

export function Arc() {
  return (
    <section
      id="arc"
      aria-label="Career arc"
      tabIndex={-1}
      style={{
        padding: "140px 40px 120px",
        maxWidth: "var(--page-max)",
        margin: "0 auto",
      }}
    >
      <SectionMark n="01" label="The arc" />

      <header
        className="arc-head"
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 80,
          marginBottom: 100,
          alignItems: "end",
        }}
      >
        <Reveal>
          <h2 className="display">
            Six chapters.<br />
            <em>One through-line.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="lede">
            I take the harder path on purpose. Startups over corporates. Unknown stacks over
            comfortable ones. The pressure isn&apos;t a bug — it&apos;s the feature that compounds. My feature.
          </p>
        </Reveal>
      </header>

      <ol style={{ listStyle: "none" }}>
        {CHAPTERS.map((c, i) => (
          <Reveal key={c.numeral} delay={i * 0.06} y={48}>
            <li
              className="chapter"
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: 48,
                padding: "56px 0",
                borderTop: "1px solid var(--rule)",
                borderBottom: i === CHAPTERS.length - 1 ? "1px solid var(--rule)" : undefined,
              }}
            >
              <div
                className="chapter__rail"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 16,
                  position: "sticky",
                  top: 120,
                  height: "fit-content",
                }}
              >
                <span
                  className="font-serif"
                  style={{
                    fontStyle: "italic",
                    fontSize: 64,
                    fontWeight: 300,
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  {c.numeral}
                </span>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    marginLeft: 8,
                  }}
                />
              </div>

              <div style={{ maxWidth: "64ch" }}>
                <div
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    color: "var(--ink-3)",
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  {c.era}
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(28px, 3.4vw, 48px)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    marginBottom: 12,
                    fontVariationSettings: "'opsz' 96",
                  }}
                >
                  {c.title}
                </h3>
                <div
                  className="font-mono"
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.08em",
                    color: "var(--ink-2)",
                    marginBottom: 24,
                  }}
                >
                  {c.where}
                </div>
                <p
                  className="font-serif"
                  style={{
                    fontSize: 18,
                    lineHeight: 1.65,
                    color: "var(--ink-2)",
                    marginBottom: 24,
                  }}
                >
                  {c.body}
                </p>
                <blockquote
                  className="font-serif"
                  style={{
                    fontStyle: "italic",
                    fontSize: 20,
                    lineHeight: 1.4,
                    color: "var(--accent)",
                    borderLeft: "2px solid var(--accent)",
                    paddingLeft: 20,
                  }}
                >
                  {c.pull}
                </blockquote>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <style jsx>{`
        @media (max-width: 1024px) {
          .arc-head {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .chapter {
            grid-template-columns: 80px 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 640px) {
          .chapter {
            grid-template-columns: 1fr !important;
          }
          .chapter__rail {
            flex-direction: row !important;
            align-items: center !important;
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
