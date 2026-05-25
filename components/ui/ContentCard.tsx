import type { ReactNode } from "react";

type ContentCardProps = {
  title: string;
  description: string;
  launchPrice?: string;
  monthlyPrice?: string;
  features?: readonly string[];
  supportFeatures?: readonly string[];
  clientExamples?: readonly string[];
  index?: number;
  footer?: ReactNode;
  className?: string;
};

export function ContentCard({
  title,
  description,
  launchPrice,
  monthlyPrice,
  features,
  supportFeatures,
  clientExamples,
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

      {launchPrice && (
        <p className="mt-4 text-xl font-semibold tracking-tight text-foreground">
          {launchPrice}
        </p>
      )}
      {monthlyPrice && (
        <p className="mt-1.5 text-sm text-muted-foreground">{monthlyPrice}</p>
      )}

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {features && features.length > 0 && (
        <div className="mt-5 border-t border-border-subtle pt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Что входит в запуск
          </p>
          <ul className="mt-3 flex flex-1 flex-col gap-2">
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
        </div>
      )}

      {supportFeatures && supportFeatures.length > 0 && (
        <div className="mt-4 border-t border-border-subtle pt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Что может входить в поддержку
          </p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {supportFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-300" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {clientExamples && clientExamples.length > 0 && (
        <div className="mt-4 border-t border-border-subtle pt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Примеры клиентов
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {clientExamples.join(" · ")}
          </p>
        </div>
      )}

      {footer && <div className="mt-6">{footer}</div>}
    </article>
  );
}
