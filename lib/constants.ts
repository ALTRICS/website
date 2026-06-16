export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.altrics.tech";

export const TELEGRAM_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/altrics";

export const LOGIN_PATH = "/login";

export const CONTACT_EMAIL = "contact@altrics.tech";

export const headerNavLinks = [
  { href: "#platform", label: "Платформа" },
  { href: "#scenarios", label: "Сценарии" },
  { href: "#industries", label: "Отрасли" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#process", label: "Как внедряем" }
] as const;

export const footerNavLinks = [
  { href: "#platform", label: "Платформа" },
  { href: "#scenarios", label: "Сценарии" },
  { href: "#industries", label: "Отрасли" },
  { href: "#interface", label: "Интерфейс" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#process", label: "Как внедряем" },
  { href: "#cta", label: "Контакты" }
] as const;
