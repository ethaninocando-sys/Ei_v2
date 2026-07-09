# Ei Conversion

Marketing site for **Ei Conversion** — a local SEO agency that gets Rio Grande
Valley businesses into the top 3 on Google.

It merges two earlier projects: the design system, motion discipline, and
Resend contact flow from the `canyesa_prototype` build, and the copy, offer,
before/after, FAQ, and other conversion elements from the original `Ei` site.

Built with **Next.js 15 (App Router)**, **Tailwind CSS v4** (CSS-first tokens),
**framer-motion**, **lucide-react**, and **Resend**. Warm-editorial theme:
bone background `#f4f1ea`, deep navy ink `#16223b`, emerald accent `#0f7a53`
(CTAs + growth), Fraunces (display) + Mulish (sans).

## Structure

Single focused landing page (`/`):

```
Hero (headline + hook video + CTA + trust chips)
 → Benefits ("why the top 3")
 → Before / After (interactive)
 → How it works (4 steps)
 → Case study (honest scope-of-work)
 → FAQ (includes $497/mo + 90-day guarantee)
 → Side offers (Ads / Websites / Automations — understated)
 → Inquiry form (final CTA)
```

Plus `/terms` (noindex).

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in your Resend key
npm run dev                  # http://localhost:3000
```

The site runs immediately with **placeholders** where the hero video and case
study screenshot will go — nothing crashes when an asset is missing.

## What to fill in

1. **`src/lib/config.ts`** — brand details (already set to Ei Conversion /
   ei-conversion.com / ethan@ei-conversion.com), phone, and socials.
2. **`.env.local`** (copy from `.env.example`):
   - `RESEND_API_KEY` — required for the inquiry form to send email.
   - `RESEND_FROM` — a verified sender once `ei-conversion.com` is verified in
     Resend (until then the code falls back to `onboarding@resend.dev`, which
     only delivers to the Resend account owner's inbox).
   - `INQUIRIES_TO` — where lead notifications go (defaults to `siteConfig.email`).
3. **Media** (drop files in `public/`, they swap in automatically):
   - `public/videos/hero.mp4` (+ optional `public/images/hero-poster.jpg`)
   - `public/images/case-study.jpg` — a real GBP / ranking screenshot.
4. **Copy & numbers** — all in `src/lib/content.ts`, including the illustrative
   before/after figures (replace with real client results when available) and
   the FAQ pricing/guarantee.

## Where things live

```
src/
  app/
    page.tsx              → the landing page (assembles all sections)
    layout.tsx            → fonts, metadata, Nav + Footer
    terms/page.tsx        → Terms of Service (noindex)
    api/contact/route.ts  → Resend: notify + branded confirmation
    globals.css           → brand tokens (@theme)
  components/             → design system + interactive sections
  lib/
    content.ts            → all copy + before/after data + FAQ
    config.ts             → brand + integration IDs
    assets.ts             → drop-in image guard
    utils.ts              → cn()
```
