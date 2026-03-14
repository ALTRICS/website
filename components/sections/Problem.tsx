import { Section } from "../layout/Section";

const problems = [
  {
    title: "Managers waste hours calculating orders",
    description:
      "Employees manually collect data from CRM, spreadsheets and messengers just to prepare one order or invoice."
  },
  {
    title: "Manual data processing",
    description:
      "Orders, payments, shipments and stock data are copied by hand between systems, leading to delays and frustration."
  },
  {
    title: "Slow responses to clients",
    description:
      "Clients wait minutes or hours for answers to typical questions because the team is busy with routine tasks."
  },
  {
    title: "Human errors",
    description:
      "Typos, miscalculations and forgotten updates in CRM or ERP result in lost revenue and damaged reputation."
  }
];

export function ProblemSection() {
  return (
    <div className="bg-slate-950 py-16 sm:py-20">
      <Section id="problem">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              The problem
            </h2>
            <p className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Routine operations silently eat hours from your business every
              week.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              In most small and medium-sized companies, highly paid specialists
              spend a large part of their day on low‑value manual work instead
              of growing revenue and improving the product.
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

