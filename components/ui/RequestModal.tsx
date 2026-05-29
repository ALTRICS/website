"use client";

import { FormEvent, useState, type ReactNode } from "react";
import {
  requestAutomationOptions,
  requestFormSuccessMessage
} from "@/lib/content";
import { TELEGRAM_URL } from "@/lib/constants";

type RequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  company: string;
  businessSphere: string;
  leadSource: string;
  automationGoal: string;
  contact: string;
  website: string;
};

type UtmState = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
};

const initialForm: FormState = {
  name: "",
  company: "",
  businessSphere: "",
  leadSource: "",
  automationGoal: "",
  contact: "",
  website: ""
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const requiredFields: Array<
  keyof Pick<FormState, "name" | "company" | "contact">
> = ["name", "company", "contact"];

export function RequestModal({ isOpen, onClose }: RequestModalProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setStatus("idle");
    setErrorMessage("");
    setForm(initialForm);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "loading") return;

    const hasMissingRequiredField = requiredFields.some(
      (field) => !form[field].trim()
    );

    if (hasMissingRequiredField) {
      setErrorMessage("Заполните имя, компанию и контакт для связи.");
      return;
    }

    if (
      form.name.trim().length < 2 ||
      form.company.trim().length < 2 ||
      form.contact.trim().length < 3
    ) {
      setErrorMessage("Проверьте имя, компанию и контакт для связи.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const params = new URLSearchParams(window.location.search);
      const utm: UtmState = {
        utm_source: params.get("utm_source") ?? "",
        utm_medium: params.get("utm_medium") ?? "",
        utm_campaign: params.get("utm_campaign") ?? "",
        utm_content: params.get("utm_content") ?? "",
        utm_term: params.get("utm_term") ?? ""
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          page: "landing",
          createdAt: new Date().toISOString(),
          ...utm
        })
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  const updateField = (field: keyof FormState, value: string) => {
    if (errorMessage) setErrorMessage("");
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

        {status === "success" ? (
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
        ) : status === "error" ? (
          <div className="py-6 text-center sm:py-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-600">
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
                  d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
                />
              </svg>
            </span>
            <h2
              id="request-modal-title"
              className="mt-4 text-lg font-semibold text-foreground"
            >
              Не удалось отправить заявку
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Попробуйте ещё раз или напишите нам напрямую в Telegram.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="inline-flex justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
              >
                Попробовать снова
              </button>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border border-border bg-surface px-6 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                Написать в Telegram
              </a>
            </div>
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
              запуска. Кабинет подключается только если он нужен задаче.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <Field label="Имя" required>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={inputClass}
                  placeholder="Как к вам обращаться"
                  disabled={status === "loading"}
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
                  disabled={status === "loading"}
                />
              </Field>

              <Field label="Сфера бизнеса">
                <input
                  type="text"
                  value={form.businessSphere}
                  onChange={(e) =>
                    updateField("businessSphere", e.target.value)
                  }
                  className={inputClass}
                  placeholder="Например: услуги, e-commerce, логистика"
                  disabled={status === "loading"}
                />
              </Field>

              <Field label="Где сейчас приходят заявки">
                <input
                  type="text"
                  value={form.leadSource}
                  onChange={(e) => updateField("leadSource", e.target.value)}
                  className={inputClass}
                  placeholder="Telegram, сайт, WhatsApp, звонки..."
                  disabled={status === "loading"}
                />
              </Field>

              <Field label="Что хотите автоматизировать">
                <select
                  value={form.automationGoal}
                  onChange={(e) =>
                    updateField("automationGoal", e.target.value)
                  }
                  className={inputClass}
                  disabled={status === "loading"}
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
                  disabled={status === "loading"}
                />
              </Field>

              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e) => updateField("website", e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {errorMessage && (
                <p className="rounded-xl bg-rose-50 px-3.5 py-2.5 text-sm text-rose-700">
                  {errorMessage}
                </p>
              )}

              <p className="text-xs leading-relaxed text-muted">
                Нажимая “Отправить заявку”, вы соглашаетесь на обработку
                контактных данных для связи по вашему запросу.
              </p>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Отправляем..." : "Отправить заявку"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted focus:border-primary/40 focus:ring-2 focus:ring-primary/15 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-muted";

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
