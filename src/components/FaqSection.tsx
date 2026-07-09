"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Section, SectionHeading, Em } from "./Section";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/utils";
import { faq } from "@/lib/content";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" size="narrow">
      <div className="text-center">
        <div className="flex justify-center">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
        </div>
        <SectionHeading className="mt-5">
          Questions, <Em>answered</Em>.
        </SectionHeading>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-3 text-left">
        {faq.items.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className={cn(
                "overflow-hidden rounded-2xl border bg-white shadow-sm transition-colors",
                isOpen ? "border-emerald/40" : "border-ink/10",
              )}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-ink"
              >
                {f.q}
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full transition-colors",
                    isOpen ? "bg-emerald text-white" : "bg-ink/[0.05] text-ink/60",
                  )}
                >
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center justify-center"
                  >
                    <Plus className="size-3.5" />
                  </motion.span>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-ink/70">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
