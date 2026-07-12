# Video scripts — Ei Conversion funnel

Three videos, three files. Each file contains **two versions**:

- **V1 — word-for-word.** Full teleprompter script. Read it as written. Use this
  while you're still building confidence on camera.
- **V2 — beat sheet.** The same video broken into labeled beats: what each beat
  has to accomplish, the lines you must hit verbatim (the ones doing the
  persuasion work), and where you're free to improvise. Graduate to this when
  you're comfortable.

## Where each video lives in the funnel

| Video | Length | Placement | Job |
| --- | --- | --- | --- |
| `home-page.md` | ~2:30 | Homepage hero | Hook → get the email signup |
| `newsletter-3-tips.md` | ~7:00 | `/free-tips` (linked from the signup email) | Deliver real value → build trust → point to `/local-seo` |
| `local-seo.md` | ~6:30 | `/local-seo` sales page | Pitch + qualify → book the strategy call |

## Recording notes (all three)

- **Pace:** ~140–150 words/min spoken. Don't rush the pauses — the "…" marks
  are beats, not typos.
- **Numbers are locked and must match the website:** 75% of clicks go to the
  top 3 · worth ~$50,000/yr for an average McAllen business · $497/month flat ·
  top 3 in 90 days or free until you're there. If a number ever changes, change
  it on the site (src/lib/content.ts) the same day.
- **Never claim:** years of experience, specific client ranking results beyond
  what's true. The RGV Elite Comics mention is scoped honestly (work delivered,
  not rankings caused) — keep it that way.
- **Wardrobe/setting:** consistent across all three videos — they'll be watched
  in sequence within days of each other.
- **Hosting:** videos are hosted on Wistia. After publishing, copy the media ID
  (the hashed string in the share/embed URL, e.g.
  `ethaninocando.wistia.com/s/<mediaId>`) into `src/lib/config.ts` -> `wistia`
  and it appears on the site automatically. `heroMediaId` is already set to the
  recorded homepage hook video (`gyy4vzszf41iaaf`).
