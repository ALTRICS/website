import { Section } from "../layout/Section";

const solutions = [
  {
    title: "ИИ‑ассистенты обрабатывают обращения",
    description:
      "ИИ‑сотрудники общаются с клиентами, поставщиками и партнёрами, понимают запрос и действуют по вашим правилам."
  },
  {
    title: "ИИ автоматически считает заказы",
    description:
      "Заказы, цены, и варианты доставки рассчитываются мгновенно на основе ваших данных и ограничений."
  },
  {
    title: "ИИ интегрируется с CRM",
    description:
      "Каждое взаимодействие попадает в CRM или ERP, создаются задачи, обновляются статусы и поля всегда в актуальном состоянии."
  },
  {
    title: "ИИ автоматизирует процессы",
    description:
      "От первого обращения клиента до закрытой сделки Altrics управляет шагами между системами без ручного микроменеджмента."
  }
];

export function SolutionSection() {
  return (
    <div className="bg-slate-950 py-16 sm:py-20">
      <Section id="solution">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Решение
            </h2>
            <p className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              ALTRICS создаёт ИИ‑ассистентов, которые берут на себя повторяющиеся
              операции в вашей компании.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Вместо того чтобы нанимать дополнительных людей, мы запускаем
              AI‑сотрудников, которые подключаются к вашим текущим инструментам и
              надёжно выполняют рутину от начала до конца.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 text-sm text-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.75)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-500/20 blur-3xl" />
                <div className="relative">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-[0.65rem] text-sky-300 ring-1 ring-sky-400/40">
                      ИИ
                    </span>
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-[0.8rem]">
                    {solution.description}
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

