"use client";

import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxImage = { src: string; alt: string; label?: string };

/**
 * Full-screen image viewer. Open by passing a non-null `index`; close via the
 * button, the backdrop, or Escape. Left/right arrows (and on-screen chevrons)
 * cycle through `images` when there's more than one. Body scroll is locked while open.
 */
export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;
  const count = images.length;

  const go = useCallback(
    (delta: number) => {
      if (index === null || count === 0) return;
      onIndexChange((index + delta + count) % count);
    },
    [index, count, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, go, onClose]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.label ?? current.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink/85 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="size-5" strokeWidth={1.75} />
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
              >
                <ChevronLeft className="size-6" strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
              >
                <ChevronRight className="size-6" strokeWidth={1.75} />
              </button>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt}
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
          />
          {current.label && (
            <p className="mt-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/70">
              {current.label}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
