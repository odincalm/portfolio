/** Public facts verified from the existing portfolio and the owner's brief. */

export const site = {
  name: "ODIN",
  handle: "odincalm0",
  personName: "Nitin Kumar",
  email: "odincalm@proton.me",
  phoneDisplay: "+91 90349 51794",
  /** Digits only, as used by wa.me. Verified from the live site. */
  whatsappDigits: "919034951794",
  whatsappUrl: "https://wa.me/919034951794",
  instagramUrl: "https://instagram.com/odincalm0",
  instagramHandle: "@odincalm0",
  linkedinUrl: "https://www.linkedin.com/in/nitin-kumar-35a0a7279/",
  githubUrl: "https://github.com/odincalm",
  /**
   * Verified GitHub Pages production URL. Canonicals point here until the
   * owner confirms a different host. This app's preview is served at `/`.
   */
  productionOrigin: "https://odincalm.github.io/portfolio",
  /**
   * Prices are quote-only. Do not invent a rate card.
   * Set approvedInr when the owner confirms figures; the UI must keep
   * showing "quote" while this stays null.
   */
  pricing: {
    mode: "quote" as const,
    approvedInr: null as null | Record<string, string>,
  },
} as const;

export function canonicalUrl(path: string): string {
  if (path === "/") return `${site.productionOrigin}/`;
  return `${site.productionOrigin}${path}`;
}

export function pageHead(title: string, description: string, path: string) {
  const url = canonicalUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
