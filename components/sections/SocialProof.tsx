import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { trustItems } from "@/lib/content";

const caseStudyPlaceholder = {
  problem: "Ручная обработка заявок и долгие ответы клиентам",
  solution: "AI-ассистент с интеграцией в CRM и мессенджеры",
  result: "Сокращение времени ответа и разгрузка команды"
};

export function SocialProofSection() {
  return (
    <Section id="trust">
      <SectionHeader
        label="Доверие"
        title="Почему с нами работают"
        description="Фокус на практичном внедрении AI для малого и среднего бизнеса — с понятным результатом и поддержкой после запуска."
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

      <div className="mt-12 rounded-2xl border border-dashed border-border bg-slate-50/80 p-6 sm:p-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Кейсы — скоро
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase text-primary">
              Задача
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {caseStudyPlaceholder.problem}
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase text-primary">
              Решение
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {caseStudyPlaceholder.solution}
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase text-primary">
              Результат
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {caseStudyPlaceholder.result}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
