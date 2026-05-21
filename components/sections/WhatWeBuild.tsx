import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whatWeBuild } from "@/lib/content";

export function WhatWeBuildSection() {
  return (
    <Section id="what-we-build" alt>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <SectionHeader
          label="Форматы"
          title="Что мы можем создать для вашего бизнеса"
          description="Мы не ограничены одним форматом или нишей — от простого бота до продвинутого внутреннего ассистента и кастомной ChatGPT-системы."
          className="lg:max-w-md"
        />

        <div className="grid flex-1 gap-3 sm:grid-cols-2">
          {whatWeBuild.map((item) => (
            <div
              key={item}
              className="group rounded-xl border border-border bg-surface px-4 py-3.5 text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary/30 hover:shadow-card"
            >
              <span className="mr-2 text-primary opacity-70 group-hover:opacity-100">
                →
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
