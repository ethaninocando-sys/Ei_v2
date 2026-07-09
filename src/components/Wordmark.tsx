import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function Wordmark({ tone = "ink" }: { tone?: "ink" | "light" }) {
  const color = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/70" : "text-stone";
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5 leading-none">
      <Image
        src="/logo.svg"
        alt=""
        width={28}
        height={30}
        className="h-7 w-auto"
        priority
      />
      <span className="inline-flex flex-col">
        <span className={`font-display text-lg font-medium tracking-tight ${color}`}>
          {siteConfig.name}
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] ${sub}`}
        >
          Local SEO
        </span>
      </span>
    </Link>
  );
}
