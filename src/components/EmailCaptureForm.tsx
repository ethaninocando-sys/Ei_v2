"use client";

import { FormEvent, useState } from "react";
import { leadMagnet } from "@/lib/content";

/**
 * The "3 free tips" email capture. Posts to /api/subscribe, which adds the
 * contact to the Resend audience and emails them the link to /free-tips.
 */
export function EmailCaptureForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = new FormData(e.currentTarget);

    setSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email") }),
      });
      const result = await res.json();
      if (!res.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-emerald/25 bg-emerald/[0.06] p-6 text-center">
        <h3 className="text-xl">{leadMagnet.successTitle}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">
          {leadMagnet.successBody}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder={leadMagnet.emailPlaceholder}
          aria-label="Email address"
          className="h-12 flex-1 rounded-full border border-ink/15 bg-white px-5 text-ink placeholder:text-ink/40 transition-colors focus:border-sea focus:outline-none"
        />
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-12 items-center justify-center rounded-full bg-emerald px-7 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-emerald-600 focus-visible:outline-2 disabled:opacity-60"
        >
          {submitting ? "Sending…" : leadMagnet.cta}
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-700">{error}</p>}
      <p className="mt-3 text-xs text-stone">{leadMagnet.disclaimer}</p>
    </div>
  );
}
