"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading, Em } from "./Section";
import { Eyebrow } from "./Eyebrow";
import { Placeholder } from "./Placeholder";
import { icons } from "./icons";
import { caseStudy } from "@/lib/content";

type CaseImage = { src?: string; alt: string; label: string; ratio: string };

/** Each screenshot's `src` is resolved server-side (via existingImage) and passed
 *  in, so the real image swaps in the moment the file lands in /public; until then
 *  its labeled placeholder shows. */
export function CaseStudy({
  images,
}: {
  images: { heatmap: CaseImage; gbp: CaseImage; website: CaseImage };
}) {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{caseStudy.eyebrow}</Eyebrow>
          <SectionHeading className="mt-5">
            A look at <Em>what we do</Em>.
          </SectionHeading>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
            {caseStudy.intro}
          </p>

          <div className="mt-8 space-y-3">
            {caseStudy.items.map((w, i) => {
              const Icon = icons[w.icon];
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
                >
                  {Icon && (
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sea/10 text-sea">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                  )}
                  <div>
                    <h3 className="font-semibold">{w.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">{w.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:ml-auto">
          {/* Hero: ranking heatmap — the proof */}
          <Placeholder
            label={images.heatmap.label}
            src={images.heatmap.src}
            alt={images.heatmap.alt}
            ratio={images.heatmap.ratio}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="shadow-sm ring-1 ring-ink/10"
          />
          {/* Bottom row: GBP profile + website, equal-height thumbnails */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <Placeholder
              label={images.gbp.label}
              src={images.gbp.src}
              alt={images.gbp.alt}
              ratio={images.gbp.ratio}
              sizes="(min-width: 1024px) 21vw, 50vw"
              className="shadow-sm ring-1 ring-ink/10"
            />
            <Placeholder
              label={images.website.label}
              src={images.website.src}
              alt={images.website.alt}
              ratio={images.website.ratio}
              sizes="(min-width: 1024px) 21vw, 50vw"
              className="shadow-sm ring-1 ring-ink/10"
            />
          </div>
          {/* Client caption */}
          <p className="mt-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-stone">
            {caseStudy.client}
          </p>
        </div>
      </div>
    </Section>
  );
}
