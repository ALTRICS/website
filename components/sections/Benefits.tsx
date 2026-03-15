import { Section } from "../layout/Section";

const benefits = [
  {
    title: "Экономия 50–80% времени сотрудников",
    description:
      "AI‑сотрудники берут на себя однообразные задачи: ответы на типовые вопросы, заполнение CRM, подготовку документов и отчётов."
  },
  {
    title: "Снижение операционных затрат",
    description:
      "Вместо увеличения штата вы масштабируете операции за счёт AI‑ассистентов, которые работают 24/7."
  },
  {
    title: "Быстрая обработка",
    description:
      "Заказы, расчёты и ответы выполняются за секунды, а не часы — даже в пиковые моменты."
  },
  {
    title: "Рост без найма",
    description:
      "Когда увеличивается объём заказов, AI просто обрабатывает больше задач параллельно, а команда сосредотачивается на стратегии."
  }
];

export function BenefitsSection() {
  return (
    <div className="bg-slate-950 py-16 sm:py-20">
      <Section id="benefits">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Преимущества
            </h2>
            <p className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Осязаемые бизнес‑результаты, а не очередная AI‑демо.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Мы проектируем автоматизации, которые напрямую влияют на P&amp;L:
              экономят время, снижают затраты и защищают выручку от
              операционных ошибок.
            </p>
          </div>

          <dl className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-4"
              >
                <div className="pointer-events-none absolute -left-10 top-0 h-20 w-20 rounded-full bg-violet-500/25 blur-3xl" />
                <div className="relative">
                  <dt className="text-sm font-semibold text-slate-50">
                    {benefit.title}
                  </dt>
                  <dd className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-[0.8rem]">
                    {benefit.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </div>
  );
}

