import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { platformConnectNote, platformModules } from "@/lib/content";

export function PlatformSection() {
  return (
    <Section id="platform" alt>
      <SectionHeader
        label="Платформа"
        title="Платформа altrics"
        description="Сейчас мы запускаем AI-ботов и автоматизации под конкретные процессы бизнеса. Следующий шаг — единый кабинет, где компания сможет видеть обращения, клиентов, статусы, AI-ботов, базу знаний и аналитику."
      />

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {platformConnectNote}
      </p>

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

      <p className="mt-8 text-sm text-muted">
        Функционал кабинета развивается поэтапно — подключаем модули по мере
        настройки ваших процессов.
      </p>
    </Section>
  );
}
