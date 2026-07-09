/**
 * Central content source for the Ei Conversion site.
 *
 * Everything a non-developer would want to edit — headlines, offer copy,
 * before/after numbers, FAQs, form fields — lives here so the page bodies stay
 * clean. Copy was merged from the original Ei marketing site and re-pointed at
 * the Rio Grande Valley local market.
 */

import { siteConfig } from "./config";

export const nav = [
  { label: "The difference", href: "#difference" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: `Local SEO · ${siteConfig.region}`,
  title: "Is your business invisible on Google?",
  subtitle:
    "Three out of four people looking for your service never scroll past the top 3 results on Google. If you're not there, you don't exist to them. We get Rio Grande Valley businesses into the top 3 — and keep them there.",
  primaryCta: { label: "Get your free strategy call", href: "#inquiry" },
  secondaryCta: { label: "See the difference", href: "#difference" },
  videoLabel: "Homepage hook video (2–3 min) — why you're invisible on Google",
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
  title: "Why the top 3 changes everything.",
  items: [
    {
      icon: "eye",
      title: "Visibility",
      body: "75% of people searching for your service click one of the top 3 results. If you're not there, you're invisible — no matter how good you are.",
    },
    {
      icon: "coins",
      title: "No ad spend",
      body: "Unlike Google or Meta ads, ranking organically doesn't cost you per click. The traffic keeps coming without a meter running.",
    },
    {
      icon: "trending",
      title: "Long-term asset",
      body: "Once you're in the top 3, you tend to stay there for years — a compounding asset, not a monthly ad bill you can never turn off.",
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
  note: string;
  before: { stats: BeforeAfterStat[]; map: string };
  after: { stats: BeforeAfterStat[]; map: string };
} = {
  eyebrow: "Before / After",
  title: "The difference the top 3 makes.",
  note: "Illustrative of the movement local SEO produces over a typical engagement — an example of the pattern, not a guaranteed result.",
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
  title: "Getting started is simple.",
  steps: [
    {
      icon: "calendar",
      title: "Strategy call",
      body: "Book a free call. We assess your market, your competitors, and where you currently rank across the Valley.",
    },
    {
      icon: "map",
      title: "Onboarding",
      body: "We send simple instructions to get secure access to your Google Business Profile. It takes about 15 minutes of your time.",
    },
    {
      icon: "list",
      title: "Execution",
      body: "We handle everything — profile optimization, an SEO-built website, citations, and ongoing work to climb the rankings.",
    },
    {
      icon: "rocket",
      title: "Measure & scale",
      body: "We track rank, calls, and clicks, report back regularly, and double down on what's moving the needle.",
    },
  ],
};

// Case study — honest scope-of-work for the real practice client. This is what
// was delivered, not a ranking-results claim.
export const caseStudy = {
  eyebrow: "Recent work",
  title: "A look at what we do.",
  intro:
    "A recent local project — here's exactly what we delivered, top to bottom.",
  items: [
    {
      icon: "pin",
      title: "Google Business Profile",
      body: "Fully audited and optimized the GBP listing top to bottom — categories, services, photos, and posts.",
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
  imageLabel: "Case study — GBP / ranking screenshot (real, once available)",
  image: "/images/case-study.jpg",
  imageAlt: "Google Business Profile ranking results",
};

export const faq = {
  eyebrow: "FAQ",
  title: "Questions, answered.",
  items: [
    {
      q: "What's the difference between SEO and Google Ads?",
      a: "Google Ads puts you at the top only as long as you keep paying — the moment you stop, you disappear. SEO (what we do) earns your spot organically, because Google decides you're the most relevant result. Once you're there, you stay without ongoing ad spend.",
    },
    {
      q: "Which businesses do you work with?",
      a: "Local businesses across the Rio Grande Valley — dentists, plumbers, lawyers, restaurants, clinics, contractors, any business that serves customers in a specific area. If people search your service plus your city, we can help you.",
    },
    {
      q: "How much of my time will this take?",
      a: "Very little. We handle everything on our end. Onboarding needs about 15 minutes to get secure access to your Google Business Profile. After that we do the work and send regular updates so you always know where you stand.",
    },
    {
      q: "What are the terms and pricing?",
      a: "It's $497/month with no long-term contracts — cancel anytime. Most clients stay because the results speak for themselves. And we guarantee top 3 rankings within 90 days, or we keep working for free until you're there.",
    },
    {
      q: "How do we get started?",
      a: "Book a free strategy call using the form on this page. We'll look at your current Google presence, assess your market, and tell you exactly what it would take to get you into the top 3 — no pressure, no obligation.",
    },
  ],
};

// Secondary offers — present, but deliberately understated so the top-3 Google
// offer stays the hero.
export const sideOffers = {
  eyebrow: "Beyond SEO",
  title: "Need more than rankings?",
  body: "Local SEO is what we're known for. When it makes sense, we also handle the rest of your growth stack — so everything works together.",
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
  successTitle: "Thanks — we've got your details.",
  successBody:
    "We'll review your business and reach out within 24 hours to book your free strategy call.",
};

export const guarantee = {
  price: "$497/mo",
  promise: "Top 3 in 90 days, or we work for free until you're there.",
};
