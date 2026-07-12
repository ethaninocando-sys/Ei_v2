# Ei Conversion

Marketing site for **Ei Conversion** — a local SEO agency that gets Rio Grande
Valley businesses into the top 3 on Google.

It merges two earlier projects: the design system, motion discipline, and
Resend contact flow from the `canyesa_prototype` build, and the copy, offer,
before/after, FAQ, and other conversion elements from the original `Ei` site.

Built with **Next.js 15 (App Router)**, **Tailwind CSS v4** (CSS-first tokens),
**framer-motion**, **lucide-react**, **Wistia** (video), and **Resend** (email).
Warm-editorial theme: bone background `#f4f1ea`, deep navy ink `#16223b`,
emerald accent `#0f7a53` (CTAs + growth), Fraunces (display) + Mulish (sans).

## Structure

The funnel (modeled on the ProfResults flow — video scripts in `/video-scripts`):

```
/            Landing page: hero (hook video) → benefits → before/after
             → how it works → case study → "3 free tips" email capture
             → FAQ → side offers → inquiry form
/free-tips   Thank-you page linked from the signup email — hosts the
             3-tips video (noindex)
/local-seo   Sales page: sales video → honest requirements → booking form
/terms       Terms of Service (noindex)
```

Email capture posts to `/api/subscribe` (adds the contact to a Resend
audience + sends the tips email). The inquiry forms post to `/api/contact`
(lead notification + branded confirmation). No database anywhere.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in your Resend key
npm run dev                  # http://localhost:3000
```

The site runs immediately with **placeholders** where each video and the case
study screenshot will go — nothing crashes when an asset is missing.

## What to fill in

1. **`src/lib/config.ts`** — brand details (already set to Ei Conversion /
   ei-conversion.com / ethan@ei-conversion.com), phone, socials, and the
   Wistia media IDs for each video (`wistia.heroMediaId` is already set to the
   recorded homepage hook video).
2. **`.env.local`** (copy from `.env.example`):
   - `RESEND_API_KEY` — required for the inquiry form to send email.
   - `RESEND_FROM` — a verified sender once `ei-conversion.com` is verified in
     Resend (until then the code falls back to `onboarding@resend.dev`, which
     only delivers to the Resend account owner's inbox).
   - `INQUIRIES_TO` — where lead notifications go (defaults to `siteConfig.email`).
   - `RESEND_AUDIENCE_ID` — newsletter audience for "3 free tips" signups.
3. **Video** — record and publish each one to Wistia (scripts in
   `/video-scripts`), then drop its media ID (the hashed string in the
   share/embed URL, e.g. `ethaninocando.wistia.com/s/<mediaId>`) into
   `src/lib/config.ts` -> `wistia`:
   - `heroMediaId` — homepage hook video (~2:30) — **done**
   - `salesMediaId` — `/local-seo` sales video (~6:30)
   - `tipsMediaId` — `/free-tips` 3-tips video (~7:00)
   - `public/images/case-study.jpg` — a real GBP / ranking screenshot (this one
     stays a plain image, not a video).
4. **Copy & numbers** — all in `src/lib/content.ts`, including the illustrative
   before/after figures (replace with real client results when available) and
   the FAQ pricing/guarantee.

## Where things live

```
src/
  app/
    page.tsx                → the landing page (assembles all sections)
    layout.tsx               → fonts, metadata, Nav + Footer
    local-seo/page.tsx       → sales page (video, requirements, booking)
    free-tips/page.tsx       → tips-video thank-you page (noindex)
    terms/page.tsx           → Terms of Service (noindex)
    api/contact/route.ts     → Resend: notify + branded confirmation
    api/subscribe/route.ts   → Resend: newsletter signup + tips email
    globals.css              → brand tokens (@theme)
  components/                → design system + interactive sections
    WistiaEmbed.tsx           → video embed with drop-in placeholder
  lib/
    content.ts               → all copy + before/after data + FAQ
    config.ts                → brand + integration IDs (incl. Wistia)
    assets.ts                → drop-in image guard
    utils.ts                 → cn()
```
