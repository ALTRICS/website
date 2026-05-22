import type { ReactNode } from "react";

type ContentCardProps = {
  title: string;
  description: string;
  features?: readonly string[];
  index?: number;
  footer?: ReactNode;
  className?: string;
};

export function ContentCard({
  title,
  description,
  features,
  index,
  footer,
  className = ""
}: ContentCardProps) {
  return (
    <article
      className={`flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {index !== undefined && (
          <span className="text-xs font-medium text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {features && features.length > 0 && (
        <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-border-subtle pt-5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      {footer && <div className="mt-6">{footer}</div>}
    </article>
  );
}
