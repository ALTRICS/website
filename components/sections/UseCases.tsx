import { Section } from "../layout/Section";

const useCases = [
  {
    title: "Sales automation",
    description:
      "Qualify leads, answer questions, prepare proposals and push deals through CRM without manual data entry."
  },
  {
    title: "Order calculation automation",
    description:
      "Automatically calculate complex orders, prices and delivery costs based on your catalog, margins and rules."
  },
  {
    title: "Customer support AI",
    description:
      "AI agent answers typical questions in Russian from your knowledge base and escalates complex issues to humans."
  },
  {
    title: "Document processing",
    description:
      "Extract data from contracts, invoices and acts, validate fields and sync with accounting or ERP."
  },
  {
    title: "CRM automation",
    description:
      "Keep CRM clean: update statuses, fill in fields, create tasks and reminders automatically."
  }
];

export function UseCasesSection() {
  return (
    <div className="bg-slate-950 py-16 sm:py-20">
      <Section id="use-cases">
        <div className="flex flex-col gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Example use cases
            </h2>
            <p className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Real workflows we automate for small and medium businesses.
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
                  <span>AI employee, not another SaaS tool</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

