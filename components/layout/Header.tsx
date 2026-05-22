"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { RequestCtaButton } from "@/components/ui/RequestCtaButton";
import { headerNavLinks, LOGIN_PATH } from "@/lib/constants";

function resolveNavHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.svg"
            alt="altrics"
            width={140}
            height={32}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {headerNavLinks.map((link) => (
            <a
              key={link.href}
              href={resolveNavHref(link.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Button href={LOGIN_PATH} variant="ghost" size="sm">
            Войти
          </Button>
          <RequestCtaButton variant="primary" size="sm">
            Обсудить задачу
          </RequestCtaButton>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <Button href={LOGIN_PATH} variant="ghost" size="sm">
            Войти
          </Button>
          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
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
      </div>

      {open && (
        <div className="border-t border-border-subtle bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {headerNavLinks.map((link) => (
              <a
                key={link.href}
                href={resolveNavHref(link.href)}
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <RequestCtaButton
              variant="primary"
              size="md"
              className="mt-2 w-full"
              onAfterOpen={() => setOpen(false)}
            >
              Обсудить задачу
            </RequestCtaButton>
          </nav>
        </div>
      )}
    </header>
  );
}
