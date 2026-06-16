import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { howItWorks } from "@/lib/content";

export function HowItWorksSection() {
  return (
    <Section id="process" alt>
      <SectionHeader
        label="Как внедряем"
        title="Процесс внедрения"
        description="Прозрачный процесс от анализа до запуска. Каждое решение адаптируем под ваш бизнес."
      />

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {howItWorks.map((step, index) => (
          <li
            key={step.title}
            className="relative rounded-2xl border border-border bg-surface p-5 shadow-card"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {index + 1}
            </span>
            <h3 className="mt-4 text-sm font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
