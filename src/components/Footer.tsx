import Link from "next/link";
import { nav, guarantee } from "@/lib/content";
import { siteConfig } from "@/lib/config";
import { Wordmark } from "./Wordmark";

const socialLinks = Object.entries(siteConfig.socials).filter(
  ([, href]) => href,
) as [string, string][];

const socialLabels: Record<string, string> = {
  instagram: "Instagram",
  x: "X",
  linkedin: "LinkedIn",
};

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-sand-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/[0.06] px-3.5 py-1.5 text-xs font-semibold text-emerald">
              {guarantee.price} · {guarantee.promise}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-ink/70 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#inquiry"
                  className="text-ink/70 transition-colors hover:text-ink"
                >
                  Free strategy call
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-ink/70 transition-colors hover:text-ink"
                >
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phone && (
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className="text-ink/70 transition-colors hover:text-ink"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
              )}
              <li className="text-ink/50">Serving the {siteConfig.region}</li>
            </ul>
            {socialLinks.length > 0 && (
              <ul className="mt-4 flex gap-4 text-sm">
                {socialLinks.map(([key, href]) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sea transition-colors hover:text-ink"
                    >
                      {socialLabels[key] ?? key}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="transition-colors hover:text-ink">
              Terms of Service
            </Link>
            <span>{siteConfig.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
