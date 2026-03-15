import { Section } from "../layout/Section";

const problems = [
  {
    title: "Менеджеры тратят часы на просчёт заказов",
    description:
      "Сотрудники вручную собирают данные из CRM, таблиц и мессенджеров, чтобы подготовить один счёт или коммерческое предложение."
  },
  {
    title: "Ручная обработка данных",
    description:
      "Заказы, оплаты, отгрузки и остатки вносятся вручную в разные системы, из‑за чего появляются задержки и хаос."
  },
  {
    title: "Медленные ответы клиентам",
    description:
      "Клиенты ждут минуты и часы даже на типовые вопросы, потому что команда занята операционкой."
  },
  {
    title: "Человеческие ошибки",
    description:
      "Опечатки, неверные суммы и забытые обновления статусов в CRM приводят к потерянной выручке и испорченной репутации."
  }
];

export function ProblemSection() {
  return (
    <div className="bg-slate-950 py-16 sm:py-20">
      <Section id="problem">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Проблема
            </h2>
            <p className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Рутинные операции незаметно съедают часы работы вашего бизнеса
              каждую неделю.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              В большинстве компаний сотрудники с высокой экспертизой тратят
              значимую часть дня на низкоценную ручную работу вместо роста
              выручки и развития продукта.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="gradient-border relative overflow-hidden rounded-2xl bg-slate-950/70 px-4 py-4 text-sm text-slate-200"
              >
                <div className="relative">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-[0.8rem]">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

