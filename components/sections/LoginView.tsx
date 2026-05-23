"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { RequestCtaButton } from "@/components/ui/RequestCtaButton";
import { APP_URL } from "@/lib/constants";
import { loginOnboardingSteps } from "@/lib/content";

export function LoginView() {
  return (
    <div className="flex min-h-screen flex-col bg-hero-mesh">
      <Header />

      <main className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-card sm:p-10">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Вход в платформу altrics
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Платформа доступна для подключённых клиентов. Если мы уже настроили
            для вас рабочее пространство – войдите в кабинет. Если вы хотите подключить
            AI-бота, автоматизацию или личный кабинет, оставьте заявку на
            доступ.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href="#"
              variant="primary"
              size="lg"
              className="sm:flex-1"
              target="_blank"
              rel="noreferrer"
            >
              Войти в кабинет
            </Button>
            <RequestCtaButton
              variant="secondary"
              size="lg"
              className="sm:flex-1"
            >
              Запросить доступ
            </RequestCtaButton>
          </div>

          <div className="mt-10 rounded-2xl border border-border-subtle bg-slate-50/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Как подключается платформа
            </p>
            <ol className="mt-4 space-y-3">
              {loginOnboardingSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-8 text-center text-sm text-muted">
            <Link
              href="/"
              className="font-medium text-primary transition-colors hover:text-primary-light"
            >
              ← На главную
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
