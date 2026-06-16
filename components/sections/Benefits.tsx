import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { benefits } from "@/lib/content";

export function BenefitsSection() {
  return (
    <Section id="benefits">
      <SectionHeader
        label="Преимущества"
        title="Практическая ценность для бизнеса"
        description="Внедряем ИИ так, чтобы он влиял на скорость работы, качество сервиса и операционную эффективность."
      />

      <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-2xl border border-border bg-surface p-5 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <dt className="text-sm font-semibold text-foreground">
              {benefit.title}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {benefit.description}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
