import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2";

const variants: Record<Variant, string> = {
  // Emerald = the one confident accent, CTAs only.
  primary:
    "bg-emerald text-white px-7 py-3.5 hover:bg-emerald-600",
  secondary:
    "border border-ink/20 text-ink px-7 py-3.5 hover:border-ink/50 hover:bg-ink/[0.03]",
  quiet:
    "text-sea px-1 py-1 underline decoration-sea/30 underline-offset-4 hover:decoration-sea",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
