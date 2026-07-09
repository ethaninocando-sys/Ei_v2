import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <section className="pt-36 pb-24 sm:pt-40">
      <Container size="narrow">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-5 text-4xl sm:text-5xl">Terms of Service</h1>
        <div className="mt-8 space-y-6 leading-relaxed text-ink/70">
          <p>
            These terms govern your use of the {siteConfig.name} website and the
            local SEO services described on it. By submitting an inquiry you agree
            to be contacted about your request.
          </p>
          <h2 className="pt-2 text-2xl text-ink">Services</h2>
          <p>
            {siteConfig.name} provides local search engine optimization services
            for businesses in the Rio Grande Valley, including Google Business
            Profile optimization, SEO-built websites, and local citations. Specific
            deliverables, pricing, and terms are confirmed in writing before any
            engagement begins.
          </p>
          <h2 className="pt-2 text-2xl text-ink">Guarantee</h2>
          <p>
            Our top-3 ranking guarantee and its conditions are described during
            your strategy call and set out in your service agreement. Rankings
            depend on factors outside our control, including changes to Google's
            algorithms; the guarantee terms in your signed agreement govern.
          </p>
          <h2 className="pt-2 text-2xl text-ink">Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sea underline decoration-sea/30 underline-offset-4 hover:decoration-sea"
            >
              {siteConfig.email}
            </a>
            .
          </p>
          <p className="pt-4 text-sm text-stone">
            Last updated {new Date().getFullYear()}.
          </p>
        </div>
      </Container>
    </section>
  );
}
