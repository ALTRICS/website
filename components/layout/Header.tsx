"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#directions", label: "Направления" },
  { href: "#capabilities", label: "Сценарии" },
  { href: "#industries", label: "Отрасли" },
  { href: "#how-it-works", label: "Как работаем" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex shrink-0 items-center">
          <Image
            src="/logo.svg"
            alt="altrics"
            width={140}
            height={32}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="#cta" variant="primary" size="sm">
            Обсудить задачу
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border-subtle bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#cta"
              variant="primary"
              size="md"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Обсудить задачу
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
