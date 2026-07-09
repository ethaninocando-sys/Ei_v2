import type { Metadata } from "next";
import { Fraunces, Mulish } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/config";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Local SEO in the Rio Grande Valley — Rank Top 3 on Google | ${siteConfig.name}`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    "Ei Conversion gets Rio Grande Valley businesses into the top 3 on Google. Local SEO with a 90-day top-3 guarantee — no long-term contracts. Serving McAllen, Edinburg, Mission, Pharr, Harlingen, Weslaco and Brownsville.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `Local SEO in the Rio Grande Valley — Rank Top 3 on Google | ${siteConfig.name}`,
    description:
      "Get your local business into the top 3 on Google. Local SEO with a 90-day top-3 guarantee, no long-term contracts.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Rank Top 3 on Google in the Rio Grande Valley | ${siteConfig.name}`,
    description:
      "Local SEO that gets Rio Grande Valley businesses into the top 3 on Google.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${mulish.variable}`}>
      <head>
        <noscript>
          <style>{`.fade-in{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
