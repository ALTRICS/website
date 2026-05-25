import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { trustItems } from "@/lib/content";

export function SocialProofSection() {
  return (
    <Section id="trust">
      <SectionHeader
        label="Подход"
        title="Как мы внедряем AI в бизнес"
        description="Сначала — конкретный процесс и понятный результат. Расширяем решение по мере задач клиента: бот, интеграции, кабинет."
        align="center"
        className="mx-auto"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trustItems.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-surface p-5 text-center shadow-card sm:text-left"
          >
            <h3 className="text-sm font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
