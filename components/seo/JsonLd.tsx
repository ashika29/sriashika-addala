/* ════════════════════════════════════════════════════════════════════════════
   JsonLd component — server-rendered structured data.

   Renders a <script type="application/ld+json"> tag with the provided data
   serialised safely. Use one per schema (Person, WebSite, ProfilePage etc).

   This is intentionally a Server Component (no "use client") so the JSON-LD
   ships in the initial HTML response — crawlers see it before any JS runs.
   ════════════════════════════════════════════════════════════════════════════ */

type JsonLdProps = {
  /** Plain JSON-serialisable object. Use the builders in lib/jsonld.ts. */
  data: Record<string, unknown>;
  /** Stable id for React reconciliation and easier devtools inspection. */
  id?: string;
};

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      id={id}
      // Safe: data is built from typed constants, never user input.
      // The replace() guards against accidental </script> in any string.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
