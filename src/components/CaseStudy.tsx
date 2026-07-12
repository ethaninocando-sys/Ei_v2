"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { Section, SectionHeading, Em } from "./Section";
import { Eyebrow } from "./Eyebrow";
import { Placeholder } from "./Placeholder";
import { Lightbox, type LightboxImage } from "./Lightbox";
import { icons } from "./icons";
import { caseStudy } from "@/lib/content";

type CaseImage = { src?: string; alt: string; label: string; ratio: string };

/** Each screenshot's `src` is resolved server-side (via existingImage) and passed
 *  in, so the real image swaps in the moment the file lands in /public; until then
 *  its labeled placeholder shows. Real screenshots open in a full-screen lightbox
 *  when clicked. */
export function CaseStudy({
  images,
}: {
  images: { heatmap: CaseImage; gbp: CaseImage; website: CaseImage };
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Only real (resolved) screenshots are zoomable; placeholders stay static.
  const shots = [images.heatmap, images.gbp, images.website];
  const lightboxImages: LightboxImage[] = shots
    .filter((s): s is CaseImage & { src: string } => Boolean(s.src))
    .map((s) => ({ src: s.src, alt: s.alt, label: s.label }));

  function Shot({
    img,
    sizes,
    className,
  }: {
    img: CaseImage;
    sizes: string;
    className: string;
  }) {
    const placeholder = (
      <Placeholder
        label={img.label}
        src={img.src}
        alt={img.alt}
        ratio={img.ratio}
        sizes={sizes}
        className={className}
      >
        {img.src && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition duration-200 group-hover:bg-ink/25 group-hover:opacity-100">
            <span className="flex size-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm">
              <ZoomIn className="size-5" strokeWidth={1.75} />
            </span>
          </span>
        )}
      </Placeholder>
    );

    if (!img.src) return placeholder;

    const index = lightboxImages.findIndex((l) => l.src === img.src);
    return (
      <button
        type="button"
        onClick={() => setActiveIndex(index)}
        aria-label={`View larger — ${img.label}`}
        className="group block w-full cursor-zoom-in rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sea focus-visible:ring-offset-2"
      >
        {placeholder}
      </button>
    );
  }

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
          <Shot
            img={images.heatmap}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="shadow-sm ring-1 ring-ink/10"
          />
          {/* Bottom row: GBP profile + website, equal-height thumbnails */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <Shot
              img={images.gbp}
              sizes="(min-width: 1024px) 21vw, 50vw"
              className="shadow-sm ring-1 ring-ink/10"
            />
            <Shot
              img={images.website}
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

      <Lightbox
        images={lightboxImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onIndexChange={setActiveIndex}
      />
    </Section>
  );
}
