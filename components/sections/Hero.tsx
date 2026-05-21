"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";

const previewCards = [
  {
    title: "Персональный агент",
    status: "Активен",
    lines: ["План на сегодня готов", "Напоминание: встреча в 15:00"]
  },
  {
    title: "Автоматизация заявок",
    status: "12 обработано",
    lines: ["Лид квалифицирован", "CRM обновлён"]
  },
  {
    title: "Бизнес-ассистент",
    status: "Team copilot",
    lines: ["Ответ по регламенту", "Шаблон для отдела продаж"]
  }
];

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-hero-mesh">
      <Header />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14 lg:px-8 lg:pb-32">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-16">
          <div className="w-full max-w-xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              AI для бизнеса в России и СНГ
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            >
              AI-решения, которые упрощают бизнес
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              От персональных AI-агентов до автоматизации процессов и кастомных
              систем на базе ChatGPT — мы создаём инструменты, которые делают
              работу проще и эффективнее.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start"
            >
              <Button href="#cta" variant="primary" size="lg">
                Получить консультацию
              </Button>
              <Button href="#capabilities" variant="secondary" size="lg">
                Смотреть сценарии
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-sm text-muted"
            >
              Экономим время, снижаем рутину и внедряем AI в ежедневные
              процессы без лишней сложности.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full max-w-lg"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-100/80 via-white to-sky-100/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-card sm:p-6">
              <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  </div>
                  <span className="text-xs font-medium text-muted">
                    altrics workspace
                  </span>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[0.65rem] font-medium text-emerald-700">
                  Online
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {previewCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-border-subtle bg-slate-50/80 p-3 transition-shadow hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-foreground">
                        {card.title}
                      </p>
                      <span className="text-[0.65rem] text-primary">
                        {card.status}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {card.lines.map((line) => (
                        <li
                          key={line}
                          className="flex items-center gap-2 text-[0.7rem] text-muted-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary/60" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
