import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { architectureCards } from "@/lib/content";

export function ArchitectureSection() {
  return (
    <Section id="platform">
      <SectionHeader
        label="АРХИТЕКТУРА ПЛАТФОРМЫ"
        title="Из чего состоит операционная среда altrics"
        description="Вместо разрозненных чат-ботов и хаоса в таблицах вы получаете единую систему, где коммуникации, бизнес-знания и рабочие процессы действуют в связке."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {architectureCards.map((card) => (
          <article
            key={card.id}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-medium text-muted">
                {card.number}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {card.description}
            </p>
            <div className="mt-5 flex flex-1 flex-col gap-4 border-t border-border-subtle pt-5">
              {card.points.map((point) => (
                <div key={point.title}>
                  <p className="text-sm font-semibold text-foreground">
                    {point.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
