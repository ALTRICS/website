import { Section } from "../layout/Section";

const solutions = [
  {
    title: "AI assistants process requests",
    description:
      "AI employees chat with your clients, suppliers and partners, understand intent and follow your business rules."
  },
  {
    title: "AI calculates orders automatically",
    description:
      "Orders, pricing, discounts and delivery options are calculated instantly based on your data and constraints."
  },
  {
    title: "AI integrates with CRM",
    description:
      "Every interaction is logged to your CRM or ERP, tasks are created, statuses are updated and fields stay in sync."
  },
  {
    title: "AI automates workflows",
    description:
      "From first client message to closed deal, altrics orchestrates the steps across tools without human micromanagement."
  }
];

export function SolutionSection() {
  return (
    <div className="bg-slate-950 py-16 sm:py-20">
      <Section id="solution">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              The solution
            </h2>
            <p className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              altrics builds AI assistants that take over repeatable operations
              in your company.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Instead of adding more people to close operational gaps, we create
              AI employees that plug into your existing tools and reliably
              perform routine work end‑to‑end.
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
                      AI
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

