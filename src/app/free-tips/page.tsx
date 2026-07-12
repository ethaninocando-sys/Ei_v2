import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { VideoBlock } from "@/components/VideoBlock";
import { freeTips } from "@/lib/content";
import { video } from "@/lib/config";
import { existingImage } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Your 3 free tips",
  robots: { index: false },
};

export default function FreeTipsPage() {
  const tipsVideoSrc = existingImage(video.tipsSrc);
  const tipsPoster = existingImage(video.tipsPoster);

  return (
    <section className="pt-28 pb-24 sm:pt-36">
      <Container size="narrow">
        <FadeIn className="text-center">
          <div className="flex justify-center">
            <Eyebrow>{freeTips.eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl">{freeTips.title}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            {freeTips.intro}
          </p>
        </FadeIn>

        <FadeIn delay={120} className="mt-10">
          <VideoBlock
            src={tipsVideoSrc}
            wistiaId={video.tipsWistiaId}
            poster={tipsPoster}
            label={freeTips.videoLabel}
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {freeTips.tips.map((tip, i) => (
            <FadeIn key={tip.title} delay={i * 90} as="article">
              <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
                <span className="flex size-9 items-center justify-center rounded-full bg-emerald/10 font-display text-sm text-emerald">
                  {i + 1}
                </span>
                <h2 className="mt-4 text-lg font-semibold">{tip.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{tip.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14 text-center">
          <p className="text-lg text-ink/70">
            Rather have all of this done for you?
          </p>
          <div className="mt-6">
            <Button href={freeTips.cta.href}>{freeTips.cta.label}</Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
