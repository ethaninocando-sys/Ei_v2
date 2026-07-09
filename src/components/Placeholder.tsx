import { ReactNode } from "react";
import Image from "next/image";

/**
 * Clearly-labeled image placeholder, sized to the real asset's aspect ratio.
 * Every one maps to a real asset that can be dropped in later.
 *
 * Pass `src` (+ `alt`) to render the real photo instead of the placeholder;
 * the labeled placeholder shows whenever `src` is omitted.
 */
export function Placeholder({
  label,
  ratio = "4 / 3",
  className = "",
  rounded = "rounded-2xl",
  src,
  alt = "",
  sizes,
  children,
}: {
  label: string;
  ratio?: string;
  className?: string;
  rounded?: string;
  src?: string;
  alt?: string;
  sizes?: string;
  children?: ReactNode;
}) {
  if (src) {
    return (
      <div
        style={{ aspectRatio: ratio }}
        className={`relative w-full overflow-hidden ${rounded} bg-sand-200 ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover"
        />
        {children}
      </div>
    );
  }

  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`relative w-full overflow-hidden ${rounded} bg-gradient-to-br from-sand-200 via-sand to-emerald/15 ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-ink) 0 1px, transparent 1px 22px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <span
          aria-hidden
          className="flex h-9 w-9 items-center justify-center rounded-full border border-stone/40 text-stone"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 16l4-4 3 3 4-5 5 6M4 6h16v12H4z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-stone">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
