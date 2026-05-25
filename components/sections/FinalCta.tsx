"use client";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { RequestCtaButton } from "@/components/ui/RequestCtaButton";
import { TELEGRAM_URL } from "@/lib/constants";

export function FinalCtaSection() {
  return (
    <Section id="cta" className="!pb-16 sm:!pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-indigo-50 via-white to-sky-50 px-6 py-12 text-center shadow-soft sm:px-12 sm:py-14 lg:text-left">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative max-w-2xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Давайте найдём процесс, который можно автоматизировать
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Расскажите, где ваша команда тратит время: заявки, ответы клиентам,
            запись, поддержка, статусы, документы или ручная передача данных. Мы
            предложим AI-сценарий, формат запуска и понятный первый шаг для
            внедрения.
          </p>
        </div>

        <div className="relative mt-8 flex flex-col items-center gap-3 sm:flex-row lg:mt-8">
          <RequestCtaButton variant="primary" size="lg">
            Обсудить задачу
          </RequestCtaButton>
          <Button
            href={TELEGRAM_URL}
            variant="secondary"
            size="lg"
            target="_blank"
            rel="noreferrer"
          >
            Написать в Telegram
          </Button>
        </div>
      </div>
    </Section>
  );
}
