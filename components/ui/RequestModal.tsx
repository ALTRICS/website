"use client";

import { FormEvent, useState, type ReactNode } from "react";
import {
  requestAutomationOptions,
  requestFormSuccessMessage
} from "@/lib/content";

type RequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  company: string;
  industry: string;
  leadSource: string;
  automation: string;
  contact: string;
};

const initialForm: FormState = {
  name: "",
  company: "",
  industry: "",
  leadSource: "",
  automation: "",
  contact: ""
};

export function RequestModal({ isOpen, onClose }: RequestModalProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setSubmitted(false);
    setForm(initialForm);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: отправка заявки в API или Telegram-уведомление
    // Пример: await fetch("/api/leads", { method: "POST", body: JSON.stringify(form) })
    console.info("[altrics] lead request (frontend only):", form);

    setSubmitted(true);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="request-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        aria-label="Закрыть форму"
        onClick={handleClose}
      />

      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-white p-6 shadow-card-hover sm:p-8">
        <button
          type="button"
          onClick={handleClose}
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

        {submitted ? (
          <div className="py-6 text-center sm:py-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-9"
                />
              </svg>
            </span>
            <h2
              id="request-modal-title"
              className="mt-4 text-lg font-semibold text-foreground"
            >
              Заявка отправлена
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {requestFormSuccessMessage}
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h2
              id="request-modal-title"
              className="pr-8 text-xl font-semibold text-foreground"
            >
              Обсудить задачу
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Расскажите о процессе и мы предложим первый AI-сценарий и план
              запуска. Платформа подключается после настройки первого сценария.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Field label="Имя" required>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={inputClass}
                  placeholder="Как к вам обращаться"
                />
              </Field>

              <Field label="Компания" required>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  className={inputClass}
                  placeholder="Название компании"
                />
              </Field>

              <Field label="Сфера бизнеса">
                <input
                  type="text"
                  value={form.industry}
                  onChange={(e) => updateField("industry", e.target.value)}
                  className={inputClass}
                  placeholder="Например: услуги, e-commerce, логистика"
                />
              </Field>

              <Field label="Где сейчас приходят заявки">
                <input
                  type="text"
                  value={form.leadSource}
                  onChange={(e) => updateField("leadSource", e.target.value)}
                  className={inputClass}
                  placeholder="Telegram, сайт, WhatsApp, звонки..."
                />
              </Field>

              <Field label="Что хотите автоматизировать">
                <select
                  value={form.automation}
                  onChange={(e) => updateField("automation", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Выберите направление</option>
                  {requestAutomationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Telegram / телефон" required>
                <input
                  type="text"
                  required
                  value={form.contact}
                  onChange={(e) => updateField("contact", e.target.value)}
                  className={inputClass}
                  placeholder="@username или +7..."
                />
              </Field>

              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
              >
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted focus:border-primary/40 focus:ring-2 focus:ring-primary/15";

function Field({
  label,
  required,
  children
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-foreground">
      {label}
      {required && <span className="text-primary"> *</span>}
      {children}
    </label>
  );
}
