import { Section } from "../layout/Section";

const useCases = [
  {
    title: "Автоматизация продаж",
    description:
      "Квалификация лидов, ответы на типовые вопросы, подготовка коммерческих предложений."
  },
  {
    title: "Автоматический просчёт заказов",
    description:
      "ИИ считает сложные заказы, цены и стоимость доставки по вашему каталогу, марже и бизнес‑правилам."
  },
  {
    title: "ИИ‑поддержка клиентов",
    description:
      "ИИ‑агент на русском отвечает на типовые запросы из вашей базы знаний и передаёт сложные кейсы людям."
  },
  {
    title: "Обработка документов",
    description:
      "Извлечение данных из договоров, счетов и актов, проверка полей и синхронизация с бухгалтерией или ERP."
  },
  {
    title: "Автоматизация CRM",
    description:
      "Поддержание чистоты CRM: автоматическое обновление статусов, заполнение полей, постановка задач и напоминаний."
  }
];

export function UseCasesSection() {
  return (
    <div className="bg-slate-950 py-16 sm:py-20">
      <Section id="use-cases">
        <div className="flex flex-col gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Примеры сценариев
            </h2>
            <p className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Реальные процессы, которые мы автоматизируем для малого и среднего
              бизнеса.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <article
                key={useCase.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-4 text-sm text-slate-200 transition-transform hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-[0_18px_45px_rgba(15,23,42,0.9)]"
              >
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-[0.8rem]">
                    {useCase.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[0.7rem] text-sky-300/90">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15 text-[0.6rem]">
                    24/7
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

