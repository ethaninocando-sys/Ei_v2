"use client";

import { useEffect, useState } from "react";
import { PlayCircle } from "lucide-react";

/**
 * Hero video block. A `wistiaId` takes priority and renders a Wistia embed.
 * Otherwise, if a real `src` is provided (resolved server-side, so it only
 * appears once the file exists in /public), it autoplays muted/looped and
 * falls back to the poster frame under prefers-reduced-motion. While neither
 * exists it renders a clearly-labeled placeholder well in the same footprint,
 * so the layout is complete before the video is recorded.
 */
export function VideoBlock({
  src,
  wistiaId,
  poster,
  label,
  className = "",
}: {
  src?: string;
  wistiaId?: string;
  poster?: string;
  label: string;
  className?: string;
}) {
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (wistiaId) {
    return (
      <>
        <script src="https://fast.wistia.com/player.js" async />
        <script src={`https://fast.wistia.com/embed/${wistiaId}.js`} async type="module" />
        {/* @ts-expect-error -- wistia-player is a web component, not a typed JSX element */}
        <wistia-player
          media-id={wistiaId}
          className={`aspect-video w-full overflow-hidden rounded-2xl shadow-sm ${className}`}
        />
      </>
    );
  }

  if (!src) {
    return (
      <div
        className={`flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-ink/15 bg-sand-50 text-center ${className}`}
      >
        <PlayCircle className="size-12 text-stone" strokeWidth={1.25} />
        <p className="max-w-xs px-6 text-xs font-semibold uppercase tracking-[0.14em] text-stone">
          {label}
        </p>
      </div>
    );
  }

  if (reducedMotion !== false && poster) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={poster}
        alt=""
        className={`aspect-video w-full rounded-2xl object-cover shadow-sm ${className}`}
      />
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      preload="metadata"
      className={`aspect-video w-full rounded-2xl object-cover shadow-sm ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
