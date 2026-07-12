/**
 * Central content source for the Ei Conversion site.
 *
 * Everything a non-developer would want to edit — headlines, offer copy,
 * before/after numbers, FAQs, form fields — lives here so the page bodies stay
 * clean. Copy was merged from the original Ei marketing site and re-pointed at
 * the Rio Grande Valley local market.
 */

import { siteConfig } from "./config";

// Anchor links point at /seo, where these sections live, so they work from
// any page, not just /seo itself.
export const nav = [
  { label: "The difference", href: "/seo#difference" },
  { label: "How it works", href: "/seo#how-it-works" },
  { label: "Local SEO", href: "/seo" },
  { label: "FAQ", href: "/seo#faq" },
];

export const hero = {
  eyebrow: `Local SEO · ${siteConfig.region}`,
  title: "Is your business invisible on Google?",
  subtitle:
    "Three out of four people looking for your service never scroll past the top 3 results on Google. If you're not there, you don't exist to them. We get Rio Grande Valley businesses into the top 3. And we keep them there.",
  primaryCta: { label: "Get your free strategy call", href: "#inquiry" },
  secondaryCta: { label: "See the difference", href: "#difference" },
  videoLabel: "Homepage hook video (2–3 min): why you're invisible on Google",
  // Small trust chips under the hero.
  chips: [
    "90-Day Top 3 Guarantee",
    "No Long-Term Contracts",
    "Free Strategy Call",
  ],
};

// "Is this even worth it?" — why ranking in the top 3 matters.
export const benefits = {
  eyebrow: "The advantage",
  title: "But, is this even worth it?",
  items: [
    {
      icon: "eye",
      title: "Visibility",
      body: "75% of people searching for your service go to the top 3 results. If you're not there, you're invisible.",
    },
    {
      icon: "coins",
      title: "No ad spend",
      body: "No pay-per-click costs or big ad budgets, like you'd spend on Google Ads or Meta Ads.",
    },
    {
      icon: "trending",
      title: "Long-term asset",
      body: "Once you're in the top 3, you'll usually stay there for years. No extra monthly costs.",
    },
  ],
};

// Before / After interactive block. Numbers are illustrative of the kind of
// movement local SEO produces — clearly framed as an example, not a specific
// client's guaranteed result.
export type BeforeAfterStat = {
  label: string;
  numeric: number;
  suffix: string;
};

export const beforeAfter: {
  eyebrow: string;
  title: string;
  before: { stats: BeforeAfterStat[]; map: string };
  after: { stats: BeforeAfterStat[]; map: string };
} = {
  eyebrow: "Before / After",
  title: "The difference the top 3 makes.",
  before: {
    stats: [
      { label: "Average map rank", numeric: 86, suffix: "" },
      { label: "Local market share", numeric: 1, suffix: "%" },
      { label: "Clicks per month", numeric: 5, suffix: "" },
      { label: "New clients per month", numeric: 2, suffix: "" },
    ],
    map: "/map-before.png",
  },
  after: {
    stats: [
      { label: "Average map rank", numeric: 2, suffix: "" },
      { label: "Local market share", numeric: 82, suffix: "%" },
      { label: "Clicks per month", numeric: 80, suffix: "" },
      { label: "New clients per month", numeric: 15, suffix: "+" },
    ],
    map: "/map-after.png",
  },
};

export const howItWorks = {
  eyebrow: "How it works",
  title: "It's pretty easy.",
  steps: [
    {
      icon: "calendar",
      title: "Strategy call",
      body: "Book a free call. We'll look at your market and where you currently rank.",
    },
    {
      icon: "map",
      title: "Onboarding",
      body: "We'll send simple instructions to get secure access to your Google Business Profile. About 15 minutes of your time.",
    },
    {
      icon: "list",
      title: "Execution",
      body: "We handle your Google profile, website, and citations, then keep pushing your rankings higher.",
    },
    {
      icon: "rocket",
      title: "What works?",
      body: "We track what's working and do more of it.",
    },
  ],
};

// Case study — honest scope-of-work for the real practice client. This is what
// was delivered, not a ranking-results claim.
export const caseStudy = {
  eyebrow: "Recent work",
  title: "A look at what we do.",
  intro:
    "A recent local project: here's exactly what we delivered, top to bottom.",
  items: [
    {
      icon: "pin",
      title: "Google Business Profile",
      body: "Fully audited and optimized the GBP listing top to bottom: categories, services, photos, and posts.",
    },
    {
      icon: "globe",
      title: "SEO-built website",
      body: "Built a new website from the ground up with local SEO best practices baked into every page.",
    },
    {
      icon: "checks",
      title: "Citations",
      body: "Built citations across relevant directories to strengthen local trust signals and consistency.",
    },
  ],
  client: "RGV Elite Comics & Collectibles, Edinburg, TX",
  images: {
    heatmap: {
      src: "/images/case-study-heatmap.png",
      alt: "Google Maps ranking heatmap — ranked #1 across Edinburg, TX",
      label: "Ranking heatmap",
      ratio: "16 / 10",
    },
    gbp: {
      src: "/images/case-study-gbp.png",
      alt: "Google Business Profile — RGV Elite Comics & Collectibles, 4.8 stars",
      label: "Google Business Profile",
      ratio: "4 / 5",
    },
    website: {
      src: "/images/case-study-website.png",
      alt: "SEO-built website homepage for RGV Elite Comics & Collectibles",
      label: "Website",
      ratio: "4 / 5",
    },
  },
};

export const faq = {
  eyebrow: "FAQ",
  title: "Questions, answered.",
  items: [
    {
      q: "What's the difference between SEO and Google Ads?",
      a: "Google Ads puts you at the top only as long as you keep paying. The moment you stop, you disappear. SEO (what we do) earns your spot organically, because Google decides you're the most relevant result. Once you're there, you stay without ongoing ad spend.",
    },
    {
      q: "Which businesses do you work with?",
      a: "Local businesses across the Rio Grande Valley: dentists, plumbers, lawyers, restaurants, clinics, contractors, any business that serves customers in a specific area. If people search your service plus your city, we can help you.",
    },
    {
      q: "How much of my time will this take?",
      a: "Very little. We handle everything on our end. Onboarding needs about 15 minutes to get secure access to your Google Business Profile. After that we do the work and send regular updates so you always know where you stand.",
    },
    {
      q: "What are the terms and pricing?",
      a: "It's $497/month with no long-term contracts. Cancel anytime. Most clients stay because the results speak for themselves. And we guarantee top 3 rankings within 90 days, or we keep working for free until you're there.",
    },
    {
      q: "How do we get started?",
      a: "Book a free strategy call using the form on this page. We'll look at your current Google presence, assess your market, and tell you exactly what it would take to get you into the top 3. No pressure, no obligation.",
    },
  ],
};

// Secondary offers — present, but deliberately understated so the top-3 Google
// offer stays the hero.
export const sideOffers = {
  eyebrow: "Beyond SEO",
  title: "Need more than rankings?",
  body: "Local SEO is what we're known for. When it makes sense, we also handle the rest of your growth stack, so everything works together.",
  items: [
    {
      icon: "target",
      title: "Meta & Google Ads",
      body: "Paid campaigns for when you need leads flowing today, while SEO compounds in the background.",
    },
    {
      icon: "layout",
      title: "Websites",
      body: "Fast, modern, SEO-built websites that turn visitors into booked calls.",
    },
    {
      icon: "workflow",
      title: "Automations",
      body: "Follow-up, booking, and reviews handled automatically so no lead slips through the cracks.",
    },
  ],
};

export const inquiry = {
  eyebrow: "Free strategy call",
  title: "Let's get you into the top 3.",
  body: "Tell us about your business and we'll come back with exactly what it would take to rank you in the top 3 across the Valley. No cost, no obligation.",
  // Client-facing note about where submissions currently go while testing.
  successTitle: "Thanks! We've got your details.",
  successBody:
    "We'll review your business and reach out within 24 hours to book your free strategy call.",
};

export const guarantee = {
  price: "$497/mo",
  promise: "Top 3 in 90 days, or we work for free until you're there.",
};

// Lead magnet — the "3 free tips" email capture on the homepage. This is the
// secondary conversion path for visitors not ready to book a call yet; the
// hook video's CTA points here.
export const leadMagnet = {
  eyebrow: "Free stuff",
  title: "3 tips to rank higher on Google.",
  body: "Get a free video showing the first three things I do when I start working with a local business to get them into the top 3. No technical know-how needed. Drop in your email and it lands straight in your inbox.",
  emailPlaceholder: "name@yourbusiness.com",
  cta: "Get the 3 free tips",
  disclaimer: "You'll also get the newsletter. Unsubscribe anytime, and I'll never bother you again.",
  successTitle: "Check your inbox!",
  successBody: "Your 3 free tips are on the way. If the email isn't there in a couple of minutes, check your spam folder.",
};

// /free-tips — the page the signup email links to, hosting the tips video.
export const freeTips = {
  eyebrow: "Your free video",
  title: "3 tips to rank higher on Google.",
  intro: "Thanks for signing up. These are the first three things I do when I start working with a local business. And you can put every one of them to work today.",
  videoLabel: "3 free tips video (~7 min): GBP, website, citations",
  tips: [
    {
      title: "Fill out your Google Business Profile",
      body: "Claim it free at business.google.com and complete everything (services, photos, hours, address) and collect reviews consistently. This is where I start with every client.",
    },
    {
      title: "Make your website match",
      body: "Google wants to know two things: what you do, and where you do it. Say both clearly, starting with your headline. \"Plumbing in McAllen, TX\" beats \"Welcome to our website\" every time.",
    },
    {
      title: "Clean up your citations",
      body: "Google trusts businesses whose name, address, and phone number match everywhere: directories, the chamber of commerce, the online yellow pages. Inconsistency is a mess, and Google doesn't trust a mess.",
    },
  ],
  cta: { label: "See how I'd do it for you", href: "/" },
};

// / (homepage) — the sales page: video, honest requirements, booking form.
export const localSeo = {
  hero: {
    eyebrow: "For local businesses",
    title: "The only two things you need to know about marketing.",
    intro: "This short video covers the two things that actually matter, how to tell whether we'd be a good match, and exactly what happens when we work together.",
    videoLabel: "Local SEO sales video (~7 min)",
  },
  requirements: {
    eyebrow: "Are we a match?",
    title: "A few honest requirements.",
    intro: "I'd rather tell you where you stand before the call than waste your time on it. If these four sound like you, we're probably a great match.",
    items: [
      {
        title: "You're doing well and want more",
        body: "I work with businesses that are already doing well and want to scale up. If you're at zero and just starting out, or about to go under, we're probably not a good match yet.",
      },
      {
        title: "You're not looking for a next-weekend miracle",
        body: "The work compounds over weeks and months: that's exactly why the guarantee is 90 days, not 9 days. If you need results by Saturday, this isn't it.",
      },
      {
        title: "$497/month works for you",
        body: "Flat rate for the core work of getting you into the top 3. Retargeting on Google and Meta is custom by industry. We'd scope that on the call. If $497 is your last dollar, don't spend it here.",
      },
      {
        title: "You don't need a 48-page contract",
        body: "No long-term lock-in, no legalese. If at any point you're unhappy or feel we've done enough, say the word and we part ways, no hard feelings.",
      },
    ],
  },
  cta: {
    eyebrow: "Next step",
    title: "Book your free strategy call.",
    body: "If you read those requirements and thought \"that's me,\" we should talk. There's no sales floor and no closers: it's me on the call. Fill out the form and I'll personally reach out to find a time that works.",
  },
};
