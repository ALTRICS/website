import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  platformFooterNote,
  platformIntro,
  platformModules
} from "@/lib/content";

export function PlatformSection() {
  return (
    <Section id="platform">
      <SectionHeader
        label="Кабинет"
        title="Личный кабинет для управления AI-автоматизацией"
      />

      <div className="mt-6 max-w-3xl space-y-4">
        {platformIntro.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platformModules.map((module) => (
          <article
            key={module.title}
            className="rounded-2xl border border-border bg-surface p-5 shadow-card transition-all hover:border-primary/20 hover:shadow-card-hover"
          >
            <h3 className="text-sm font-semibold text-foreground">
              {module.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {module.description}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
        {platformFooterNote}
      </p>
    </Section>
  );
}
