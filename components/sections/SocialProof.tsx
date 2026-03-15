import { Section } from "../layout/Section";

const placeholders = ["Лого компании", "Лого компании", "Лого компании", "Лого компании", "Лого компании"];

export function SocialProofSection() {
  return (
    <div className="bg-slate-950 py-14 sm:py-16">
      <Section id="social-proof">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                Нам доверяют современные команды
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Здесь будут логотипы клиентов из сфер продаж, логистики, e‑commerce,
                услуг и производства.
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Работаем с малым и средним бизнесом по всей России.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4">
            {placeholders.map((label, index) => (
              <div
                key={`${label}-${index}`}
                className="flex h-10 min-w-[120px] items-center justify-center rounded-full border border-slate-800/80 bg-slate-900/80 px-4 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-slate-500"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

