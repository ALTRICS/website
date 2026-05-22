import { Section } from "@/components/layout/Section";
import { ContentCard } from "@/components/ui/ContentCard";
import { RequestCtaButton } from "@/components/ui/RequestCtaButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { launchFormats, launchFormatsNote } from "@/lib/content";

export function LaunchFormatsSection() {
  return (
    <Section id="launch-formats" alt>
      <SectionHeader
        label="Запуск"
        title="Форматы запуска"
        description="Начинаем с понятного процесса и расширяем решение по мере результата. Стоимость зависит от задачи, количества каналов, интеграций и уровня автоматизации."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {launchFormats.map((format, index) => (
          <ContentCard
            key={format.id}
            title={format.title}
            description={format.description}
            features={format.includes}
            index={index}
            footer={
              <RequestCtaButton variant="secondary" size="md" className="w-full">
                {format.cta}
              </RequestCtaButton>
            }
          />
        ))}
      </div>

      <p className="mt-10 rounded-2xl border border-border bg-slate-50/80 px-5 py-4 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
        {launchFormatsNote}
      </p>
    </Section>
  );
}
