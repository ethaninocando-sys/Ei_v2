"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Section, SectionHeading, Em } from "./Section";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/utils";
import { beforeAfter, type BeforeAfterStat } from "@/lib/content";

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    setDisplay(0);
    const duration = 800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

function StatRow({
  stat,
  inView,
  mode,
}: {
  stat: BeforeAfterStat;
  inView: boolean;
  mode: "before" | "after";
}) {
  const badge =
    mode === "before" ? "bg-red-700 text-white" : "bg-emerald text-white";
  return (
    <div className="flex items-center gap-3 rounded-lg border border-ink/[0.08] bg-white px-4 py-3">
      <span className={cn("min-w-[3.25rem] rounded-md px-2.5 py-1 text-center text-sm font-semibold", badge)}>
        {inView ? <AnimatedNumber target={stat.numeric} suffix={stat.suffix} /> : "0"}
      </span>
      <span className="text-sm font-medium text-ink/80">{stat.label}</span>
    </div>
  );
}

export function BeforeAfter() {
  const [mode, setMode] = useState<"before" | "after">("before");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="difference">
      <div className="max-w-2xl">
        <Eyebrow>{beforeAfter.eyebrow}</Eyebrow>
        <SectionHeading className="mt-5">
          The <Em>difference</Em> the top 3 makes.
        </SectionHeading>
      </div>

      <div
        ref={ref}
        className="mt-12 rounded-3xl border border-ink/10 bg-sand-50 p-5 shadow-sm sm:p-8"
      >
        {/* Tabs */}
        <div className="flex items-center gap-2">
          {(["before", "after"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors",
                mode === m
                  ? "bg-ink text-white"
                  : "border border-ink/15 text-ink/60 hover:text-ink",
              )}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Stats */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-stats"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                  <MapPin className="size-4" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-semibold leading-tight">Your business</p>
                  <p className="text-sm text-ink/55">Rio Grande Valley, TX</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {beforeAfter[mode].stats.map((s) => (
                  <StatRow key={s.label} stat={s} inView={inView} mode={mode} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Map */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-map"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-xl border border-ink/[0.08]"
            >
              <Image
                src={beforeAfter[mode].map}
                alt={`Local map ranking — ${mode}`}
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-xs leading-relaxed text-stone">
        {beforeAfter.note}
      </p>
    </Section>
  );
}
