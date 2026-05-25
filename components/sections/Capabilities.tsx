"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  additionalCapabilities,
  capabilitiesFooterNote,
  popularCapabilities
} from "@/lib/content";

export function CapabilitiesSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section id="capabilities" alt>
      <SectionHeader
        label="Сценарии"
        title="С чего обычно начинаем автоматизацию"
        description="Лучше всего AI работает там, где есть повторяющиеся обращения, типовые ответы, заявки, статусы, записи, консультации или ручная передача данных между сервисами."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {popularCapabilities.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded-2xl border border-primary/15 bg-surface p-5 shadow-card transition-all hover:border-primary/25 hover:shadow-card-hover sm:p-6"
          >
            <span className="inline-flex w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
              Часто запускаем
            </span>
            <h3 className="mt-3 text-base font-semibold text-foreground sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex w-full items-center justify-between rounded-xl border border-border bg-slate-50/80 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-slate-50 sm:w-auto sm:min-w-[200px]"
          aria-expanded={expanded}
        >
          Ещё сценарии
          <svg
            className={`ml-3 h-4 w-4 shrink-0 text-muted transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        {expanded && (
          <div className="mt-4 flex flex-wrap gap-2">
            {additionalCapabilities.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-border bg-white px-3 py-1.5 text-xs text-muted-foreground shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      <p className="mt-10 rounded-2xl border border-border bg-slate-50/80 px-5 py-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {capabilitiesFooterNote}
      </p>
    </Section>
  );
}
