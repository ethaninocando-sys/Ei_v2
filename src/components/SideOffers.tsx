"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { Eyebrow } from "./Eyebrow";
import { icons } from "./icons";
import { sideOffers } from "@/lib/content";

/**
 * Deliberately understated. The top-3 Google offer is the hero; these are
 * shown as a compact strip so prospects know the rest exists without pulling
 * focus from the main offer.
 */
export function SideOffers() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>{sideOffers.eyebrow}</Eyebrow>
        <SectionHeading className="mt-5">{sideOffers.title}</SectionHeading>
        <p className="mt-5 text-lg leading-relaxed text-ink/65">{sideOffers.body}</p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {sideOffers.items.map((o, i) => {
          const Icon = icons[o.icon];
          return (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl border border-ink/10 bg-sand-50 p-6"
            >
              {Icon && (
                <Icon className="size-6 text-stone" strokeWidth={1.5} />
              )}
              <h3 className="mt-4 text-lg font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{o.body}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
