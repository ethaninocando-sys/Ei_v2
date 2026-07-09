import { Section, SectionHeading, Em } from "./Section";
import { Eyebrow } from "./Eyebrow";
import { EmailCaptureForm } from "./EmailCaptureForm";
import { leadMagnet } from "@/lib/content";

/** Homepage "3 free tips" email-capture band — the hook video's CTA target. */
export function LeadMagnet() {
  return (
    <Section id="free-tips" size="narrow">
      <div className="rounded-3xl bg-sea/[0.08] px-8 py-16 text-center sm:px-14">
        <div className="flex justify-center">
          <Eyebrow>{leadMagnet.eyebrow}</Eyebrow>
        </div>
        <SectionHeading className="mt-5">
          3 tips to rank <Em>higher</Em> on Google.
        </SectionHeading>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink/70">
          {leadMagnet.body}
        </p>
        <div className="mt-9">
          <EmailCaptureForm />
        </div>
      </div>
    </Section>
  );
}
