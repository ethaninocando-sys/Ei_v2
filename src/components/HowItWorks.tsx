"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { Eyebrow } from "./Eyebrow";
import { icons } from "./icons";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="sand-50">
      <div className="max-w-2xl">
        <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
        <SectionHeading className="mt-5">{howItWorks.title}</SectionHeading>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        {howItWorks.steps.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-start gap-5 rounded-2xl border border-ink/10 bg-white px-6 py-5 shadow-sm sm:items-center"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              {Icon && (
                <Icon className="hidden size-5 shrink-0 text-sea sm:block" strokeWidth={1.5} />
              )}
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 leading-relaxed text-ink/65">{s.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
