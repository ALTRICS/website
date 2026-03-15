import { Section } from "../layout/Section";

export function FinalCtaSection() {
  return (
    <div id="cta" className="bg-slate-950 py-16 sm:py-20">
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-violet-500/20 px-6 py-10 text-center sm:px-10 sm:py-12 lg:text-left">
          <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen">
            <div className="noise-bg h-full w-full" />
          </div>

          <div className="relative max-w-2xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Автоматизируйте бизнес с помощью AI.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-100/80 sm:text-base">
              Расскажите о текущих процессах — мы предложим конкретные AI‑решения,
              которые освободят время команды и сократят операционные расходы.
            </p>
          </div>

          <div className="relative mt-8 flex flex-col items-center justify-start gap-4 sm:flex-row lg:mt-8">
            <a
              href="mailto:hello@altrics.ai?subject=Запрос%20на%20AI‑автоматизацию"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-slate-50 shadow-lg shadow-slate-900/60 ring-1 ring-sky-400/80 transition hover:bg-slate-900 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Оставить запрос на автоматизацию
            </a>
            <p className="max-w-xs text-xs text-slate-100/80">
              Обычно отвечаем в течение одного рабочего дня с уточняющими
              вопросами и предложением следующих шагов.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

