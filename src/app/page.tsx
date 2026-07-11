import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { VideoBlock } from "@/components/VideoBlock";
import { BenefitCards } from "@/components/BenefitCards";
import { BeforeAfter } from "@/components/BeforeAfter";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudy } from "@/components/CaseStudy";
import { LeadMagnet } from "@/components/LeadMagnet";
import { FaqSection } from "@/components/FaqSection";
import { SideOffers } from "@/components/SideOffers";
import { InquiryForm } from "@/components/InquiryForm";
import { Section, SectionHeading, Em } from "@/components/Section";
import { hero, inquiry, caseStudy } from "@/lib/content";
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
  const heroVideoSrc = existingImage(video.heroSrc);
  const heroPoster = existingImage(video.heroPoster);
  const caseImageSrc = existingImage(caseStudy.image);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      {/* HERO */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
              <h1 className="mt-6 text-balance text-4xl font-medium sm:text-5xl lg:text-[3.5rem]">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                {hero.subtitle}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
                <Button href={hero.secondaryCta.href} variant="secondary">
                  {hero.secondaryCta.label}
                </Button>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5">
                {hero.chips.map((chip) => (
                  <li key={chip} className="inline-flex items-center gap-2 text-sm font-medium text-ink/70">
                    <span className="flex size-5 items-center justify-center rounded-full bg-emerald/12 text-emerald">
                      <Check className="size-3" strokeWidth={2.5} />
                    </span>
                    {chip}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={120}>
              <VideoBlock
                src={heroVideoSrc}
                wistiaId={video.heroWistiaId}
                poster={heroPoster}
                label={hero.videoLabel}
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      <BenefitCards />
      <BeforeAfter />
      <HowItWorks />
      <CaseStudy imageSrc={caseImageSrc} />
      <LeadMagnet />
      <FaqSection />
      <SideOffers />

      {/* INQUIRY / FINAL CTA */}
      <Section id="inquiry" tone="sand-50" size="wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="lg:pt-6">
            <Eyebrow>{inquiry.eyebrow}</Eyebrow>
            <SectionHeading className="mt-5">
              Let's get you into the <Em>top 3</Em>.
            </SectionHeading>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              {inquiry.body}
            </p>
          </div>
          <InquiryForm />
        </div>
      </Section>
    </>
  );
}
