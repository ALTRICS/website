import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { scenarioCards } from "@/lib/content";

export function ScenariosSection() {
  return (
    <Section id="scenarios" alt>
      <SectionHeader
        label="СЦЕНАРИИ РАБОТЫ"
        title="Какие задачи берут на себя ИИ-агенты"
        description="Лучше всего передавать ИИ процессы с высокой долей рутины - там, где менеджеры регулярно отвечают на одинаковые вопросы, собирают данные вручную или переносят их между рабочими системами."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {scenarioCards.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-card transition-all hover:border-primary/25 hover:shadow-card-hover sm:p-6"
          >
            {item.badge ? (
              <span className="w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
                {item.badge}
              </span>
            ) : (
              <span className="h-5" />
            )}
            <h3 className="mt-3 text-base font-semibold text-foreground sm:text-lg">
              {item.title}
            </h3>
            {item.sublabel && (
              <p className="mt-0.5 text-xs text-muted">
                {item.sublabel}
              </p>
            )}
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
