"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { RequestCtaButton } from "@/components/ui/RequestCtaButton";
import { useRequestModal } from "@/components/providers/RequestModalProvider";
import { pricingPlans, pricingNote, enterprisePlan } from "@/lib/content";

function EnterpriseModal({
  onClose,
  onRequestEnterprise
}: {
  onClose: () => void;
  onRequestEnterprise: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[110] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enterprise-modal-title"
      onClick={handleOverlayClick}
    >
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-white p-6 shadow-card-hover sm:p-8">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground"
          aria-label="Закрыть"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2
          id="enterprise-modal-title"
          className="pr-8 text-xl font-semibold text-foreground"
        >
          {enterprisePlan.title}
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {enterprisePlan.format}
        </p>

        <div className="mt-6 border-b border-border-subtle pb-5">
          <p className="text-2xl font-semibold tracking-tight text-foreground">
            {enterprisePlan.price}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {enterprisePlan.limit}
          </p>
          <p className="mt-1 text-xs text-muted">
            {enterprisePlan.limitNote}
          </p>
        </div>

        <div className="mt-5 space-y-4">
          {enterprisePlan.benefits.map((benefit) => {
            const [title, ...rest] = benefit.split(" — ");
            const text = rest.join(" — ");
            return (
              <div key={title}>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                {text && (
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <Button
            type="button"
            variant="primary"
            size="lg"
            className="w-full"
            onClick={onRequestEnterprise}
          >
            {enterprisePlan.cta}
          </Button>
        </div>
      </div>
    </div>
  );
}

export function PricingSection() {
  const [enterpriseOpen, setEnterpriseOpen] = useState(false);
  const { openRequestModalWithPlan } = useRequestModal();

  const handleConcierge = () => {
    openRequestModalWithPlan("concierge");
  };

  const handleEnterpriseRequest = () => {
    setEnterpriseOpen(false);
    setTimeout(() => openRequestModalWithPlan("enterprise"), 300);
  };

  return (
    <Section id="pricing">
      <SectionHeader
        label="ПОДПИСКА"
        title="Подписка и форматы работы"
        description="Прозрачная ежемесячная стоимость с заранее указанными лимитами и форматом сопровождения. Выберите самостоятельную настройку или запуск вместе с командой altrics."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {pricingPlans.map((plan) => (
          <article
            key={plan.id}
            className="relative flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover"
          >
            {plan.badge && (
              <span className="absolute -top-2.5 right-6 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-primary-foreground shadow-sm">
                {plan.badge}
              </span>
            )}

            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-foreground">
                {plan.title}
              </h3>
            </div>

            <p className="mt-1 text-sm text-muted-foreground">
              {plan.format}
            </p>

            <div className="mt-4 border-b border-border-subtle pb-4">
              <p className="text-2xl font-semibold tracking-tight text-foreground">
                {plan.price}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {plan.limit}
              </p>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                Что входит
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {"setupNote" in plan && plan.setupNote && (
              <p className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                {plan.setupNote}
              </p>
            )}

            <div className="mt-5 border-t border-border-subtle pt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                Кому подходит
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {plan.audience}
              </p>
            </div>

            <div className="mt-auto pt-6">
              {plan.id === "basic" ? (
                <RequestCtaButton variant="secondary" size="md" className="w-full">
                  {plan.cta}
                </RequestCtaButton>
              ) : (
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={handleConcierge}
                >
                  {plan.cta}
                </Button>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        {pricingNote}
      </p>

      <div className="mt-10 rounded-2xl border border-primary/10 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-6 text-center shadow-soft sm:p-8">
        <p className="text-base font-semibold text-foreground sm:text-lg">
          У вас крупная компания, высокий объём обращений или нужны сложные интеграции?
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Для масштабных задач доступен индивидуальный формат внедрения и сопровождения.
        </p>
        <div className="mt-5">
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={() => setEnterpriseOpen(true)}
          >
            Посмотреть условия Enterprise
          </Button>
        </div>
      </div>

      {enterpriseOpen && (
        <EnterpriseModal
          onClose={() => setEnterpriseOpen(false)}
          onRequestEnterprise={handleEnterpriseRequest}
        />
      )}
    </Section>
  );
}
