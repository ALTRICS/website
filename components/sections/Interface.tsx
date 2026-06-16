"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { platformModules } from "@/lib/content";

type ModuleWithScreenshot = (typeof platformModules)[number] & {
  screenshot: string | null;
};

function ScreenshotModal({
  src,
  alt,
  onClose
}: {
  src: string;
  alt: string;
  onClose: () => void;
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
      className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={handleOverlayClick}
    >
      <div className="relative max-h-[90vh] max-w-[90vw] overflow-auto rounded-2xl bg-white shadow-2xl">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-muted-foreground shadow-sm transition-colors hover:bg-white hover:text-foreground"
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
        <img
          src={src}
          alt={alt}
          className="max-h-[85vh] w-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
}

export function InterfaceSection() {
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);
  const [activeAlt, setActiveAlt] = useState("");

  const openScreenshot = (module: ModuleWithScreenshot) => {
    if (module.screenshot) {
      setActiveScreenshot(module.screenshot);
      setActiveAlt(module.title);
    }
  };

  const closeScreenshot = () => {
    setActiveScreenshot(null);
    setActiveAlt("");
  };

  return (
    <Section id="interface" alt>
      <SectionHeader
        label="ИНТЕРФЕЙС"
        title="Единый личный кабинет для управления ИИ-ассистентами"
        description="Все ключевые модули altrics находятся в одном рабочем пространстве. Интерфейс, Inbox, карточки клиентов, база знаний и аналитика используют единое ядро, а специфика компании задаётся настройками ИИ-агентов, сценариев и бизнес-правил."
      />

      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        Набор доступных функций, лимитов и сопровождения зависит от тарифа, но работа команды остаётся в едином интерфейсе.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platformModules.map((mod) => {
          const isHighlighted = "highlighted" in mod && mod.highlighted;
          return (
            <article
              key={mod.title}
              className={`group relative flex flex-col rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:border-primary/20 hover:shadow-card-hover ${
                isHighlighted
                  ? "-translate-y-1 shadow-lg hover:-translate-y-1.5"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between p-5 sm:p-6">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    {mod.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {mod.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {activeScreenshot && (
        <ScreenshotModal
          src={activeScreenshot}
          alt={activeAlt}
          onClose={closeScreenshot}
        />
      )}
    </Section>
  );
}
