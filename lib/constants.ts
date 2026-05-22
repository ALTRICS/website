export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.altrics.tech";

export const TELEGRAM_URL = "https://t.me/+N573lsg4kWgwNGRi";

export const LOGIN_PATH = "/login";

export const CONTACT_EMAIL = "contact@altrics.tech";

export const headerNavLinks = [
  { href: "#directions", label: "Направления" },
  { href: "#platform", label: "Платформа" },
  { href: "#industries", label: "Отрасли" },
  { href: "#capabilities", label: "Сценарии" },
  { href: "#how-it-works", label: "Как работаем" }
] as const;

export const footerNavLinks = [
  { href: "#directions", label: "Направления" },
  { href: "#platform", label: "Платформа" },
  { href: "#industries", label: "Отрасли" },
  { href: "#capabilities", label: "Сценарии" },
  { href: "#how-it-works", label: "Как работаем" },
  { href: LOGIN_PATH, label: "Вход в платформу" },
  { href: "#cta", label: "Контакты" }
] as const;
