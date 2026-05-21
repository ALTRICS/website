import type { ReactNode } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { directions } from "@/lib/content";

function DirectionIcon({ type }: { type: string }) {
  const paths: Record<string, ReactNode> = {
    user: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 19.125a7.125 7.125 0 0 1 14.25 0"
      />
    ),
    workflow: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5 9 9l4.5 4.5L21 6M21 6h-5.25M21 6v5.25"
      />
    ),
    layers: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.429 9.75 12 4.5l5.571 5.25M6.429 14.25 12 19.5l5.571-5.25M3.75 12h16.5"
      />
    )
  };

  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        {paths[type] ?? paths.workflow}
      </svg>
    </span>
  );
}

export function DirectionsSection() {
  return (
    <Section id="directions">
      <SectionHeader
        label="Направления"
        title="Три ключевых направления, в которых мы создаём AI-решения"
        description="Выбираем формат под задачу: личный ассистент, автоматизация процессов или корпоративная система поверх ChatGPT."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {directions.map((dir, index) => (
          <article
            key={dir.id}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover"
          >
            <div className="flex items-start justify-between gap-4">
              <DirectionIcon type={dir.icon} />
              <span className="text-xs font-medium text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {dir.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {dir.description}
            </p>
            <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-border-subtle pt-5">
              {dir.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
