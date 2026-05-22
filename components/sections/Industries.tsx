"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { industries } from "@/lib/content";

export function IndustriesSection() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find((i) => i.id === activeId) ?? industries[0];

  return (
    <Section id="industries">
      <SectionHeader
        label="Отрасли"
        title="Адаптируем AI-сценарии под вашу сферу"
        description="Платформа остаётся единой: заявки, клиенты, диалоги, AI-боты, база знаний и аналитика. Под каждую отрасль меняются сценарии, статусы, поля заявки, инструкции AI и интеграции."
      />

      <div className="mt-10 flex flex-col gap-8 lg:flex-row">
        <div
          className="flex gap-2 overflow-x-auto pb-2 lg:max-w-[220px] lg:flex-col lg:overflow-visible lg:pb-0"
          role="tablist"
          aria-label="Отрасли"
        >
          {industries.map((industry) => {
            const isActive = industry.id === activeId;
            return (
              <button
                key={industry.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(industry.id)}
                className={`shrink-0 rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-all lg:w-full ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "border border-border bg-surface text-muted-foreground hover:border-slate-300 hover:bg-slate-50 hover:text-foreground"
                }`}
              >
                {industry.name}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          className="flex-1 rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8"
        >
          <h3 className="text-xl font-semibold text-foreground">
            {active.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Примеры сценариев, с которых обычно начинаем в этой сфере:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {active.examples.map((example) => (
              <li
                key={example}
                className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-foreground"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[0.65rem] font-bold text-primary">
                  ✓
                </span>
                {example}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
