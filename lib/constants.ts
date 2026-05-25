export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.altrics.tech";

export const TELEGRAM_URL = "https://t.me/+N573lsg4kWgwNGRi";

export const LOGIN_PATH = "/login";

export const CONTACT_EMAIL = "contact@altrics.tech";

export const headerNavLinks = [
  { href: "#directions", label: "Решения" },
  { href: "#capabilities", label: "Сценарии" },
  { href: "#launch-formats", label: "Форматы запуска" },
  { href: "#industries", label: "Отрасли" },
  { href: "#how-it-works", label: "Как внедряем" }
] as const;

export const footerNavLinks = [
  { href: "#directions", label: "Решения" },
  { href: "#launch-formats", label: "Форматы запуска" },
  { href: "#industries", label: "Отрасли" },
  { href: "#how-it-works", label: "Как внедряем" },
  { href: "#cta", label: "Контакты" }
] as const;
