import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { VideoBlock } from "@/components/VideoBlock";
import { InquiryForm } from "@/components/InquiryForm";
import { Section, SectionHeading, Em } from "@/components/Section";
import { localSeo, guarantee } from "@/lib/content";
import { siteConfig, video } from "@/lib/config";
import { existingImage } from "@/lib/assets";

// LocalBusiness / ProfessionalService structured data for local + topical SEO.
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description:
    "Local SEO agency helping Rio Grande Valley businesses rank in the top 3 on Google.",
  url: siteConfig.url,
  email: siteConfig.email,
  areaServed: siteConfig.areaServed,
  address: {
    "@type": "PostalAddress",
    addressRegion: "TX",
    addressCountry: "US",
  },
  knowsAbout: [
    "Local SEO",
    "Google Business Profile optimization",
    "Google Maps ranking",
    "Local citations",
    "Search engine optimization",
  ],
};

export default function Home() {
  const salesVideoSrc = existingImage(video.salesSrc);
  const salesPoster = existingImage(video.salesPoster);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      {/* HERO — sales video front and center */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20">
        <Container size="narrow" className="text-center">
          <FadeIn>
            <div className="flex justify-center">
              <Eyebrow>{localSeo.hero.eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-medium sm:text-5xl">
              {localSeo.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              {localSeo.hero.intro}
            </p>
          </FadeIn>
          <FadeIn delay={120} className="mt-10">
            <VideoBlock
              src={salesVideoSrc}
              wistiaId={video.salesWistiaId}
              poster={salesPoster}
              label={localSeo.hero.videoLabel}
            />
          </FadeIn>
          <FadeIn delay={200} className="mt-8">
            <p className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-emerald/25 bg-emerald/[0.06] px-5 py-2 text-sm font-semibold text-emerald">
              {guarantee.price} · {guarantee.promise}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* REQUIREMENTS — qualify honestly, mirrors the video */}
      <Section tone="sand-50">
        <div className="max-w-2xl">
          <Eyebrow>{localSeo.requirements.eyebrow}</Eyebrow>
          <SectionHeading className="mt-5">
            A few <Em>honest</Em> requirements.
          </SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/65">
            {localSeo.requirements.intro}
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {localSeo.requirements.items.map((r, i) => (
            <FadeIn key={r.title} delay={(i % 2) * 90} as="article">
              <div className="h-full rounded-2xl border border-ink/10 bg-white p-7 shadow-sm">
                <span className="flex size-9 items-center justify-center rounded-full bg-ink font-display text-sm text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/65">{r.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10">
          <Button href="#inquiry">Sounds like me, book the call</Button>
        </FadeIn>
      </Section>

      {/* BOOKING */}
      <Section id="inquiry" size="wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="lg:pt-6">
            <Eyebrow>{localSeo.cta.eyebrow}</Eyebrow>
            <SectionHeading className="mt-5">
              Book your <Em>free</Em> strategy call.
            </SectionHeading>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              {localSeo.cta.body}
            </p>
          </div>
          <InquiryForm />
        </div>
      </Section>
    </>
  );
}
