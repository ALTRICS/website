import { Section } from "../layout/Section";

const steps = [
  {
    title: "Analyze business process",
    description:
      "We dive into your current workflow, tools and data. Together we define where AI can safely take over routine steps.",
    meta: "1–2 strategy sessions"
  },
  {
    title: "Build AI automation",
    description:
      "We design and implement AI assistants, prompts and integrations with your CRM, ERP, messengers and internal tools.",
    meta: "2–4 weeks implementation"
  },
  {
    title: "Launch and support",
    description:
      "We test with your team, monitor quality, adjust prompts and keep automations aligned with your changing processes.",
    meta: "Continuous optimization"
  }
];

export function HowItWorksSection() {
  return (
    <div className="bg-slate-950 py-16 sm:py-20">
      <Section id="how-it-works">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              How it works
            </h2>
            <p className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              From idea to working AI employee in three clear steps.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              We focus on fast but safe delivery: starting from a narrow, highly
              valuable process and expanding automation once your team is
              confident in the result.
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

