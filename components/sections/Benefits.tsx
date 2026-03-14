import { Section } from "../layout/Section";

const benefits = [
  {
    title: "Save 50–80% employee time",
    description:
      "AI employees take over monotonous work: answering typical questions, filling CRM, preparing documents and reports."
  },
  {
    title: "Reduce operational costs",
    description:
      "Instead of hiring more staff to close process gaps, you scale operations with AI assistants that work 24/7."
  },
  {
    title: "Faster processing",
    description:
      "Orders, calculations and responses are handled in seconds, not hours — even during peak load."
  },
  {
    title: "Scale without hiring",
    description:
      "When order volume grows, AI simply handles more tasks in parallel while your core team focuses on strategy."
  }
];

export function BenefitsSection() {
  return (
    <div className="bg-slate-950 py-16 sm:py-20">
      <Section id="benefits">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Benefits
            </h2>
            <p className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Tangible business results, not just another AI demo.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              We design automations that are directly tied to your P&amp;L:
              time saved, costs reduced and revenue protected from operational
              mistakes.
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

