"use client";

import { SOCIAL_LINKS } from "@/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMark } from "@/components/ui/SectionMark";
import { Magnetic } from "@/components/ui/Magnetic";
import { SITE } from "@/lib/seo";

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact and professional links"
      tabIndex={-1}
      style={{
        padding: "160px 40px 0",
        background:
          "radial-gradient(ellipse at 40% 60%, var(--accent-soft) 0%, var(--bg-2) 55%)",
        borderTop: "1px solid var(--rule)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <SectionMark n="06" label="The reaching out" />

      <div
        style={{
          maxWidth: "var(--page-max)",
          margin: "0 auto",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 48,
          width: "100%",
        }}
      >
        <Reveal>
          <h2
            className="font-serif"
            style={{
              fontWeight: 300,
              fontSize: "clamp(40px, 6vw, 96px)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              maxWidth: "16ch",
              fontVariationSettings: "'opsz' 144",
            }}
          >
            If you&rsquo;ve read this far —<br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>
              let&rsquo;s build something that matters.
            </em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <Magnetic strength={0.2} as="div">
            <a
              href={`mailto:${SITE.email}`}
              data-cursor="link"
              className="font-serif"
              style={{
                fontStyle: "italic",
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 400,
                color: "var(--accent)",
                borderBottom: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
                paddingBottom: 6,
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                transition: "gap 0.4s var(--ease-cinematic), border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.gap = "22px";
                e.currentTarget.style.borderBottomColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.gap = "14px";
                e.currentTarget.style.borderBottomColor =
                  "color-mix(in srgb, var(--accent) 40%, transparent)";
              }}
            >
              {SITE.email}
              <span aria-hidden>↗</span>
            </a>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.3}>
          <section
            aria-labelledby="professional-links-heading"
            style={{
              borderTop: "1px solid var(--rule)",
              paddingTop: 24,
              width: "100%",
            }}
          >
            <h3
              id="professional-links-heading"
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 400,
                color: "var(--ink-3)",
                margin: "0 0 12px",
              }}
            >
              Professional & coding profiles
            </h3>
            <div className="contact-links" style={{ display: "flex", flexWrap: "wrap" }}>
              {SOCIAL_LINKS.map((s, i) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--ink-2)",
                    padding: "8px 24px 8px 0",
                    marginRight: 24,
                    borderRight:
                      i === SOCIAL_LINKS.length - 1 ? "none" : "1px solid var(--rule)",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-2)")}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.35}>
          <p
            className="font-serif"
            style={{
              fontStyle: "italic",
              fontSize: "clamp(18px, 2vw, 24px)",
              color: "var(--ink-2)",
              margin: 0,
            }}
          >
            Social ghost online. Social butterfly offline.
          </p>
        </Reveal>
      </div>

      <footer
        className="font-mono"
        style={{
          maxWidth: "var(--page-max)",
          margin: "80px auto 0",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "28px 0",
          borderTop: "1px solid var(--rule)",
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--ink-3)",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span>Built with passion. Designed to be remembered.</span>
        <span>© 2026 Sriashika Addala · Hyderabad</span>
      </footer>

      <style jsx>{`
        @media (max-width: 640px) {
          .contact-links {
            flex-direction: column !important;
          }
          .contact-links a {
            border-right: none !important;
            border-bottom: 1px solid var(--rule) !important;
            margin-right: 0 !important;
            padding: 12px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
