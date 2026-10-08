"use client";

import { RESEARCH_WORKS } from "@/data";
import { RESEARCHGATE_PROFILE_URL } from "@/lib/seo";
import { SectionMark } from "@/components/ui/SectionMark";

export function Research() {
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      tabIndex={-1}
      style={{
        padding: "120px 40px",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <div style={{ maxWidth: "var(--page-max)", margin: "0 auto" }}>
        <SectionMark n="04" label="Research & academic work" />

        <header style={{ marginBottom: 48 }}>
          <h2 id="research-heading" className="display">
            Curiosity beyond <em>the product.</em>
          </h2>
          <p className="lede" style={{ marginTop: 24 }}>
            Two research studies and one course project in computer vision,
            containerization, and software requirements.
          </p>
        </header>

        <ol className="research-list">
          {RESEARCH_WORKS.map((work, index) => (
            <li key={work.title} className="research-item">
              <div className="research-date font-mono">
                <span aria-hidden>0{index + 1}</span>
                <time dateTime={work.dateTime}>{work.date}</time>
              </div>
              <div>
                <h3 className="font-serif">{work.title}</h3>
                <p className="research-summary">{work.summary}</p>
                {work.note && (
                  <p className="research-note font-mono">{work.note}</p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <a
          className="research-link font-mono"
          href={RESEARCHGATE_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all three research and academic works on ResearchGate (opens in a new tab)"
        >
          View all three works on ResearchGate <span aria-hidden>↗</span>
        </a>
      </div>

      <style jsx>{`
        .research-list {
          list-style: none;
          border-top: 1px solid var(--rule);
        }
        .research-item {
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr);
          gap: 28px;
          padding: 28px 0;
          border-bottom: 1px solid var(--rule);
        }
        .research-date {
          display: flex;
          gap: 18px;
          padding-top: 7px;
          color: var(--ink-3);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .research-date span {
          color: var(--accent);
        }
        .research-item h3 {
          font-size: clamp(22px, 2.4vw, 32px);
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 10px;
        }
        .research-summary {
          max-width: 72ch;
          color: var(--ink-2);
          font-size: 15px;
          line-height: 1.6;
        }
        .research-note {
          margin-top: 12px;
          color: var(--ink-3);
          font-size: 10px;
          line-height: 1.6;
        }
        .research-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 44px;
          margin-top: 28px;
          color: var(--accent);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-bottom: 1px solid var(--accent);
        }
        @media (max-width: 640px) {
          .research-item {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 22px 0;
          }
        }
      `}</style>
    </section>
  );
}
