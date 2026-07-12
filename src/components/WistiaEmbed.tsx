"use client";

import Script from "next/script";
import { PlayCircle } from "lucide-react";

/**
 * Wistia video embed. If a real `mediaId` is provided it renders Wistia's
 * async embed (responsive, in the site's rounded-2xl card style); while empty
 * it renders a clearly-labeled placeholder in the same footprint, so the
 * layout is complete before a video is recorded.
 */
export function WistiaEmbed({
  mediaId,
  label,
  className = "",
}: {
  mediaId?: string;
  label: string;
  className?: string;
}) {
  if (!mediaId) {
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

  return (
    <>
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="afterInteractive" />
      <div
        className={`aspect-video w-full overflow-hidden rounded-2xl shadow-sm ${className}`}
      >
        <div
          className={`wistia_embed wistia_async_${mediaId} videoFoam=true`}
          style={{ position: "relative", width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
}
