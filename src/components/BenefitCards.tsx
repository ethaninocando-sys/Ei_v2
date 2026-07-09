"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { Eyebrow } from "./Eyebrow";
import { icons } from "./icons";
import { benefits } from "@/lib/content";

export function BenefitCards() {
  return (
    <Section tone="sand-50">
      <div className="max-w-2xl">
        <Eyebrow>{benefits.eyebrow}</Eyebrow>
        <SectionHeading className="mt-5">{benefits.title}</SectionHeading>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.items.map((b, i) => {
          const Icon = icons[b.icon];
          return (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              className="rounded-2xl border border-ink/10 bg-white p-7 shadow-sm"
            >
              {Icon && (
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
              )}
              <h3 className="mt-5 text-xl">{b.title}</h3>
              <p className="mt-2.5 leading-relaxed text-ink/65">{b.body}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
