"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading, Em } from "./Section";
import { Eyebrow } from "./Eyebrow";
import { Placeholder } from "./Placeholder";
import { icons } from "./icons";
import { caseStudy } from "@/lib/content";

/** `imageSrc` is resolved server-side (via existingImage) and passed in, so the
 *  real screenshot swaps in the moment the file lands in /public. */
export function CaseStudy({ imageSrc }: { imageSrc?: string }) {
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

        <Placeholder
          label={caseStudy.imageLabel}
          src={imageSrc}
          alt={caseStudy.imageAlt}
          ratio="4 / 5"
          className="mx-auto max-w-sm shadow-sm lg:ml-auto"
        />
      </div>
    </Section>
  );
}
