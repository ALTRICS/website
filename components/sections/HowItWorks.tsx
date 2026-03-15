import { Section } from "../layout/Section";

const steps = [
  {
    title: "Анализируем бизнес‑процесс",
    description:
      "Погружаемся в текущие процессы, инструменты и данные. Совместно определяем, где AI может безопасно забрать рутину.",
    meta: "1–2 стратегические сессии"
  },
  {
    title: "Проектируем и строим AI‑автоматизацию",
    description:
      "Проектируем и реализуем AI‑ассистентов, промпты и интеграции с вашей CRM, ERP, мессенджерами и внутренними системами.",
    meta: "Запуск за 2–4 недели"
  },
  {
    title: "Запуск и сопровождение",
    description:
      "Тестируем с вашей командой, контролируем качество, дорабатываем промпты и поддерживаем автоматизации по мере изменений процессов.",
    meta: "Непрерывная оптимизация"
  }
];

export function HowItWorksSection() {
  return (
    <div className="bg-slate-950 py-16 sm:py-20">
      <Section id="how-it-works">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Как это работает
            </h2>
            <p className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              От идеи до работающего AI‑сотрудника за три понятных шага.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Мы фокусируемся на быстрых, но безопасных запусках: стартуем с
              узкого, но ценного процесса и расширяем автоматизацию, когда
              команда видит стабильный результат.
            </p>
          </div>

          <ol className="flex flex-1 flex-col gap-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4"
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/50">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:text-[0.8rem]">
                    {step.description}
                  </p>
                  <p className="mt-2 text-[0.7rem] text-slate-500">
                    {step.meta}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </div>
  );
}

