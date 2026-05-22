import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { capabilities } from "@/lib/content";

export function CapabilitiesSection() {
  return (
    <Section id="capabilities" alt>
      <SectionHeader
        label="Сценарии"
        title="С чего обычно начинаем автоматизацию"
        description="Лучше всего AI работает там, где есть повторяющиеся обращения, типовые ответы, заявки, статусы, записи, консультации или ручная передача данных между сервисами."
      />

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground shadow-sm transition-all hover:border-primary/25 hover:shadow-card"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent-muted text-primary">
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-9"
                />
              </svg>
            </span>
            {item}
          </div>
        ))}
      </div>
    </Section>
  );
}
