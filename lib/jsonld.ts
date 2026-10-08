import { SITE, absUrl } from "./seo";

/* ════════════════════════════════════════════════════════════════════════════
   JSON-LD Schema Builders
   ════════════════════════════════════════════════════════════════════════════
   These return plain JSON-serialisable objects following schema.org. They
   are server-rendered into <script type="application/ld+json"> tags inside
   the root layout's <head>.

   Goals:
   - Describe the person entity for search engines; this does not guarantee a
     Knowledge Panel, rich result, ranking, or any particular presentation
   - Make the configured job, employer, and profile links available as data
   - Provide identity information for systems that consume structured data;
     this does not guarantee LLM citations or accuracy
   ════════════════════════════════════════════════════════════════════════════ */

/** schema.org/Person — the canonical identity record. */
export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.person.name,
    givenName: SITE.person.givenName,
    familyName: SITE.person.familyName,
    url: SITE.url,
    image: absUrl("/opengraph-image"),
    jobTitle: SITE.person.jobTitle,
    description: SITE.description,
    email: `mailto:${SITE.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.countryCode,
    },
    worksFor: {
      "@type": "Organization",
      name: SITE.person.worksFor,
    },
    alumniOf: SITE.person.alumniOf.map((school) => ({
      "@type": "EducationalOrganization",
      name: school.name,
      url: school.url,
    })),
    knowsAbout: [...SITE.person.knowsAbout],
    sameAs: [...SITE.person.sameAs],
  };
}

/** schema.org/WebSite — describes this site; it does not guarantee sitelinks. */
export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: {
      "@id": `${SITE.url}/#person`,
    },
  };
}

/** schema.org/ProfilePage — describes this page as a profile page. */
export function buildProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE.url}/#profilepage`,
    url: SITE.url,
    name: `${SITE.name} — Personal Site`,
    description: SITE.description,
    mainEntity: {
      "@id": `${SITE.url}/#person`,
    },
    isPartOf: {
      "@id": `${SITE.url}/#website`,
    },
    inLanguage: SITE.language,
  };
}

/** schema.org/BreadcrumbList — for sub-pages when you add them. */
export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
