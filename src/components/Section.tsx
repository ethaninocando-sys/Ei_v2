import { ReactNode } from "react";
import { Container } from "./Container";

/**
 * Standard marketing section: consistent vertical rhythm + centered max-width.
 * `tone="ink"` renders a dark navy band (used sparingly for contrast).
 */
export function Section({
  id,
  children,
  className = "",
  tone = "sand",
  size = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "sand" | "sand-50" | "ink";
  size?: "default" | "narrow" | "wide";
}) {
  const bg =
    tone === "ink"
      ? "bg-ink text-white"
      : tone === "sand-50"
        ? "bg-sand-50"
        : "";
  return (
    <section id={id} className={`py-24 sm:py-32 ${bg} ${className}`}>
      <Container size={size}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-3xl sm:text-4xl ${className}`}>{children}</h2>
  );
}

/** Emphasis span in a heading — italic Fraunces for the editorial accent. */
export function Em({ children }: { children: ReactNode }) {
  return <span className="font-display italic text-sea">{children}</span>;
}
