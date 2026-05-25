import { Section } from "@/components/layout/Section";
import { RequestCtaButton } from "@/components/ui/RequestCtaButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  launchFormats,
  launchFormatsNote,
  launchFormatsNoteExtra
} from "@/lib/content";

export function LaunchFormatsSection() {
  return (
    <Section id="launch-formats" alt>
      <SectionHeader
        label="Запуск"
        title="Форматы запуска"
        description="Начинаем с понятного сценария и расширяем решение по мере результата. Стоимость запуска зависит от задачи, количества каналов, интеграций, базы знаний и уровня автоматизации. Поддержка после запуска подключается отдельно."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {launchFormats.map((format, index) => (
          <article
            key={format.id}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-foreground">
                {format.title}
              </h3>
              <span className="text-xs font-medium text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-4 border-b border-border-subtle pb-4">
              <p className="text-xl font-semibold tracking-tight text-foreground">
                {format.launchPrice}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {format.monthlyPrice}
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {format.description}
            </p>

            <div className="mt-5 border-t border-border-subtle pt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                Что входит в запуск
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {format.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-border-subtle pt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                Что может входить в поддержку
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {format.supportIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-border-subtle pt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                Примеры клиентов
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {format.clientExamples.join(" · ")}
              </p>
            </div>

            <div className="mt-6">
              <RequestCtaButton variant="secondary" size="md" className="w-full">
                {format.cta}
              </RequestCtaButton>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 space-y-3">
        <p className="rounded-2xl border border-border bg-slate-50/80 px-5 py-4 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          {launchFormatsNote}
        </p>
        <p className="text-center text-sm leading-relaxed text-muted">
          {launchFormatsNoteExtra}
        </p>
      </div>
    </Section>
  );
}
