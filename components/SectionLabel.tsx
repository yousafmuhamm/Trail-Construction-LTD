/**
 * The recurring "vertical accent bar + UPPERCASE LABEL" eyebrow used to head
 * every section. `tone` switches between dark sections (light text + brand-soft
 * bar) and light sections (ink text + brand bar).
 */
type SectionLabelProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
};

export function SectionLabel({ children, tone = "light" }: SectionLabelProps) {
  const isDark = tone === "dark";
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-5 w-1 rounded-full bg-brass"
      />
      <span
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
          isDark ? "text-brand-soft" : "text-brand"
        }`}
      >
        {children}
      </span>
    </span>
  );
}
