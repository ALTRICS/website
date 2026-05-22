import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { platformFeatures } from "@/lib/content";

export function PlatformSection() {
  return (
    <Section id="platform" alt>
      <SectionHeader
        label="Платформа"
        title="Развиваем altrics в единую платформу для AI-коммуникаций"
        description="Сейчас мы запускаем AI-ботов и автоматизации под конкретные процессы бизнеса. Следующий шаг — единый кабинет, где компания сможет видеть обращения, клиентов, статусы, AI-ботов, аналитику и базу знаний."
      />

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {platformFeatures.map((item) => (
          <div
            key={item}
            className="group rounded-xl border border-border bg-surface px-4 py-3.5 text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary/30 hover:shadow-card"
          >
            <span className="mr-2 text-primary opacity-70 group-hover:opacity-100">
              →
            </span>
            {item}
          </div>
        ))}
      </div>
    </Section>
  );
}
