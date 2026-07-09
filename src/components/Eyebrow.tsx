export function Eyebrow({
  children,
  tone = "sea",
}: {
  children: string;
  tone?: "sea" | "light";
}) {
  const color = tone === "light" ? "text-emerald" : "text-sea";
  const rule = tone === "light" ? "bg-emerald/60" : "bg-sea/50";
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${color}`}
    >
      <span aria-hidden className={`h-px w-6 ${rule}`} />
      {children}
    </span>
  );
}
