import { Section } from "@/components/layout/Section";
import { ContentCard } from "@/components/ui/ContentCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { growthStages } from "@/lib/content";

export function GrowthPathSection() {
  return (
    <Section id="growth-path">
      <SectionHeader
        label="Путь внедрения"
        title="Типовой сценарий внедрения"
        description="Начинаем с простого и понятного сценария, а затем расширяем решение: добавляем интеграции, кабинет, аналитику, базу знаний и управление AI-ботами."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {growthStages.map((stage, index) => (
          <ContentCard
            key={stage.title}
            title={stage.title}
            description={stage.description}
            features={stage.features}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
