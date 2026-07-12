/**
 * Central place for brand details and every external integration ID the site
 * needs. Public values live here; secret values (Resend API key) live in
 * environment variables — never commit those.
 *
 * The video ID below is a STUB. The component that reads it renders a visible
 * "add your video" placeholder while it is empty, so the whole site runs
 * end-to-end before any account exists.
 */

export const siteConfig = {
  name: "Ei Conversion",
  tagline: "Local SEO that gets Rio Grande Valley businesses into the top 3 on Google.",
  url: "https://ei-conversion.com",
  domain: "ei-conversion.com",
  email: "ethan@ei-conversion.com",
  phone: "", // optional — leave blank to hide from the footer
  region: "Rio Grande Valley",
  // Cities used for local-SEO copy and structured data (areaServed).
  areaServed: [
    "McAllen, TX",
    "Edinburg, TX",
    "Mission, TX",
    "Pharr, TX",
    "Harlingen, TX",
    "Weslaco, TX",
    "Brownsville, TX",
    "Rio Grande Valley",
  ],
  socials: {
    // Optional — leave blank to hide.
    instagram: "",
    x: "",
    linkedin: "",
  },
};

export const video = {
  /**
   * Self-hosted videos. Drop an MP4 at the path below (plus an optional poster
   * image) and it plays automatically; while missing, a labeled placeholder
   * shows instead. Scripts for all three live in /video-scripts.
   *
   * A `*WistiaId` takes priority over the matching `*Src` mp4 when both are set.
   */
  // Homepage hook video (~2:30)
  heroWistiaId: "xbpc0fab1l",
  heroSrc: "/videos/hero.mp4",
  heroPoster: "/images/hero-poster.jpg",
  // /local-seo sales video (~6:30)
  salesWistiaId: "",
  salesSrc: "/videos/local-seo.mp4",
  salesPoster: "/images/local-seo-poster.jpg",
  // /free-tips "3 free tips" video (~7:00)
  tipsWistiaId: "",
  tipsSrc: "/videos/free-tips.mp4",
  tipsPoster: "/images/free-tips-poster.jpg",
};
