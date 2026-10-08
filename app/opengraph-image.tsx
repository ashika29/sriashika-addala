import { ImageResponse } from "next/og";
import { SITE } from "@/lib/seo";

/* ════════════════════════════════════════════════════════════════════════════
   opengraph-image.tsx — dynamically generates the social-share preview image.

   Resolved automatically at /opengraph-image by Next.js. Referenced from
   layout.tsx's metadata.openGraph.images.

   The design matches the site aesthetic: warm dark background, serif display
   type, ember accent. 1200x630 is the canonical OG size (Twitter, LinkedIn,
   Slack, Discord, Facebook all use this).
   ════════════════════════════════════════════════════════════════════════════ */

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0E0D0B",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Atmospheric glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "55%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(217,119,87,0.25) 0%, transparent 60%)",
            filter: "blur(40px)",
            display: "flex",
          }}
        />

        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(242,239,232,0.5)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <span>SRIASHIKA ADDALA</span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: 120,
              lineHeight: 0.95,
              color: "#F2EFE8",
              letterSpacing: "-0.04em",
              fontWeight: 400,
              display: "flex",
            }}
          >
            I make
          </div>
          <div
            style={{
              fontSize: 120,
              lineHeight: 0.95,
              color: "#F2EFE8",
              letterSpacing: "-0.04em",
              fontWeight: 400,
              paddingLeft: 100,
              display: "flex",
            }}
          >
            hard things{" "}
            <span style={{ color: "#D97757", fontStyle: "italic", marginLeft: 24 }}>
              simple.
            </span>
          </div>
          <div
            style={{
              fontSize: 46,
              lineHeight: 1.1,
              color: "rgba(242,239,232,0.7)",
              fontStyle: "italic",
              marginTop: 20,
              display: "flex",
            }}
          >
            Then I teach what I learned.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              fontSize: 22,
              color: "rgba(242,239,232,0.7)",
              fontFamily: "monospace",
            }}
          >
            <span>Software Engineer II · Upland Software</span>
            <span style={{ color: "rgba(242,239,232,0.4)", fontSize: 18 }}>
              Hyderabad · Antifragile by design
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              fontSize: 18,
              color: "rgba(242,239,232,0.5)",
              fontFamily: "monospace",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            <span>141K+ ARTICLE VIEWS · 3/3 SPRINT WINS</span>
            <span style={{ color: "rgba(242,239,232,0.3)", marginTop: 4 }}>
              v2026
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
