import Image from "next/image";

const footerLinks = [
  { href: "#directions", label: "Направления" },
  { href: "#capabilities", label: "Сценарии" },
  { href: "#industries", label: "Отрасли" },
  { href: "#platform", label: "Платформа" },
  { href: "#how-it-works", label: "Как работаем" },
  { href: "#cta", label: "Контакты" }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.svg"
              alt="altrics"
              width={130}
              height={28}
              className="h-7 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Altrics помогает малому и среднему бизнесу автоматизировать
              заявки, коммуникации и повторяющиеся процессы с помощью AI-ботов,
              интеграций и внутренних ассистентов для команды.
            </p>
            <p className="mt-6 text-xs text-muted">
              © {new Date().getFullYear()} altrics. Все права защищены.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Навигация
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Контакты
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:contact@altrics.tech"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                contact@altrics.tech
              </a>
              <a
                href="https://t.me/+N573lsg4kWgwNGRi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Telegram
              </a>
              <a
                href="tel:+79012308121"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                +7 901 230 8121
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
