type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = ""
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {label}
        </p>
      )}
      <h2
        className={`text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-[2rem] ${label ? "mt-3" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
