/**
 * Central place for brand details and every external integration ID the site
 * needs. Public values live here; secret values (Resend API key) live in
 * environment variables — never commit those.
 *
 * The Wistia media IDs below are STUBs until filled in. The component that
 * reads them renders a visible "add your video" placeholder while empty, so
 * the whole site runs end-to-end before every video is recorded.
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

export const wistia = {
  /**
   * Wistia media IDs (the hashed string in a video's share/embed URL, e.g.
   * https://ethaninocando.wistia.com/s/<mediaId>). Leave blank to show a
   * labeled placeholder in that slot. Scripts for all three live in
   * /video-scripts.
   */
  heroMediaId: "gyy4vzszf41iaaf", // Homepage hook video (~2:30)
  salesMediaId: "", // /local-seo sales video (~6:30)
  tipsMediaId: "", // /free-tips "3 free tips" video (~7:00)
};
