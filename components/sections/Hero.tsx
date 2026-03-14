 "use client";

import { motion } from "framer-motion";
import { AltricsLogo } from "../branding/AltricsLogo";

const stats = [
  { label: "Employee time saved", value: "50–80%" },
  { label: "Faster processing", value: "x3–x5" },
  { label: "Industries", value: "Sales, logistics, e‑com" }
];

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-hero-gradient pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
      <div className="noise-bg pointer-events-none absolute inset-0 opacity-70" />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <AltricsLogo
            variant="horizontal"
            className="h-7 w-auto text-slate-50"
          />
        </div>
        <div className="hidden items-center gap-4 text-xs font-medium text-slate-300/80 sm:flex">
          <span className="rounded-full border border-white/10 bg-slate-900/40 px-3 py-1">
            AI automation studio
          </span>
          <span className="hidden text-slate-400 md:inline">
            For small & medium businesses in Russia
          </span>
        </div>
      </header>

      <main className="relative mx-auto mt-14 flex w-full max-w-6xl flex-col items-center gap-12 px-4 sm:mt-20 sm:px-6 lg:mt-24 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
        <div className="relative z-10 max-w-xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AI employees that work 24/7
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl"
          >
            AI employees
            <br />
            for your business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mt-6 text-balance text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Automate routine operations in sales, logistics, e‑commerce,
            services and manufacturing. altrics builds AI assistants and
            automations that free your team from manual work, reduce costs and
            increase efficiency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
          >
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-sky-400 via-indigo-500 to-violet-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-500/40 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Get AI automation
            </a>
            <p className="max-w-[13rem] text-xs text-slate-400">
              We analyze your processes and launch automation in weeks, not
              months.
            </p>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-10 grid w-full grid-cols-2 gap-4 text-left sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-300 backdrop-blur"
              >
                <dt className="text-[0.72rem] uppercase tracking-wide text-slate-400">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-base font-semibold text-slate-50">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative z-10 w-full max-w-xl"
        >
          <div className="gradient-border relative overflow-hidden rounded-3xl bg-slate-950/70 p-[1px]">
            <div className="relative h-full w-full rounded-[1.45rem] bg-slate-950/80 p-5 sm:p-6">
              <div className="pointer-events-none absolute -inset-px rounded-[1.45rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.1),transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.2),transparent_55%)]" />

              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Live operations
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    AI handles routine work
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-[0.7rem] font-medium text-emerald-300 ring-1 ring-emerald-400/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Online 24/7
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-200 sm:text-sm">
                <VisualCard
                  title="Sales"
                  items={[
                    "Qualify leads automatically",
                    "Prepare offers from CRM",
                    "Send follow‑ups without delays"
                  ]}
                />
                <VisualCard
                  title="Orders & logistics"
                  items={[
                    "Calculate orders in seconds",
                    "Generate documents",
                    "Sync data across systems"
                  ]}
                />
                <VisualCard
                  title="Support"
                  items={[
                    "Instant client responses",
                    "Answers from your knowledge",
                    "Escalate complex cases"
                  ]}
                />
                <VisualCard
                  title="Back‑office"
                  items={[
                    "Process documents",
                    "Prepare reports",
                    "Update CRM and tables"
                  ]}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

type VisualCardProps = {
  title: string;
  items: string[];
};

function VisualCard({ title, items }: VisualCardProps) {
  return (
    <div className="flex flex-col gap-1.5 rounded-2xl border border-slate-700/60 bg-slate-900/70 p-3 shadow-[0_0_0_1px_rgba(15,23,42,0.7)]">
      <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-300">
        {title}
      </p>
      <ul className="space-y-1 text-[0.7rem] text-slate-400">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-1.5">
            <span className="mt-[0.3rem] h-1 w-1 rounded-full bg-sky-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

