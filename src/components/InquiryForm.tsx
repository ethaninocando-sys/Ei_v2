"use client";

import { FormEvent, useState } from "react";
import { inquiry } from "@/lib/content";

const fieldBase =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-emerald focus:bg-white/[0.1] focus:outline-none";

function Label({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-white">
      {children}
    </label>
  );
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const area = digits.slice(0, 3);
  const prefix = digits.slice(3, 6);
  const line = digits.slice(6, 10);
  if (digits.length > 6) return `(${area}) ${prefix}-${line}`;
  if (digits.length > 3) return `(${area}) ${prefix}`;
  if (digits.length === 3) return `(${area})`;
  if (digits.length > 0) return `(${area}`;
  return "";
}

const PHONE_PATTERN = "^\\(\\d{3}\\) \\d{3}-\\d{4}$";

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      businessName: data.get("businessName"),
      industry: data.get("industry"),
      website: data.get("website"),
      message: data.get("message"),
    };

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
      <div className="rounded-3xl bg-ink p-8 text-center text-white sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald/25">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-5 text-2xl text-white">{inquiry.successTitle}</h3>
        <p className="mx-auto mt-3 max-w-sm text-white/75">{inquiry.successBody}</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-ink p-8 text-white shadow-lg sm:p-10">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="firstName">First name</Label>
            <input id="firstName" name="firstName" required autoComplete="given-name" className={fieldBase} placeholder="First name" />
          </div>
          <div>
            <Label htmlFor="lastName">Last name</Label>
            <input id="lastName" name="lastName" required autoComplete="family-name" className={fieldBase} placeholder="Last name" />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="email">Email</Label>
            <input id="email" name="email" type="email" required autoComplete="email" className={fieldBase} placeholder="you@business.com" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              pattern={PHONE_PATTERN}
              title="Format: (xxx) xxx-xxxx"
              className={fieldBase}
              placeholder="(956) 000-0000"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="businessName">Business name</Label>
            <input id="businessName" name="businessName" required className={fieldBase} placeholder="Your business" />
          </div>
          <div>
            <Label htmlFor="industry">Industry</Label>
            <input id="industry" name="industry" required className={fieldBase} placeholder="e.g. dentist, plumber, law" />
          </div>
        </div>

        <div>
          <Label htmlFor="website">Website or Google listing</Label>
          <input id="website" name="website" className={fieldBase} placeholder="Optional: your site or GBP link" />
        </div>

        <div>
          <Label htmlFor="message">What's your biggest challenge getting found on Google?</Label>
          <textarea id="message" name="message" rows={4} required className={fieldBase} placeholder="Tell us a little about where you're stuck." />
        </div>

        {error && <p className="text-sm text-amber-300">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-emerald px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-emerald-600 focus-visible:outline-2 disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Sending…" : "Book my free strategy call"}
        </button>

        <p className="text-xs text-white/45">
          No cost, no obligation. We'll reply within 24 hours.
        </p>
      </form>
    </div>
  );
}
