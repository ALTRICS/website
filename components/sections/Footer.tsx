import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <Image
            src="/logo.svg"
            alt="ALTRICS"
            width={150}
            height={24}
            className="h-6 w-auto"
          />
          <p className="max-w-sm text-xs text-slate-500">
            Студия AI‑автоматизации, которая помогает малому и среднему бизнесу
            в России убрать рутину из ежедневных операций.
          </p>
          <p className="text-[0.7rem] text-slate-600">
            © {new Date().getFullYear()} ALTRICS. Все права защищены.
          </p>
          <p className="mt-1 text-[0.65rem] text-slate-600">
            * Показатель рассчитан на основе наших внутренних данных по
            реализованным AI‑автоматизациям и может отличаться в зависимости от
            отрасли и конкретных процессов.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 text-xs sm:items-end">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://t.me/+N573lsg4kWgwNGRi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-200 transition hover:border-sky-400 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 28 28"
                className="h-4 w-4 text-slate-300"
                fill="none"
              >
                <path
                  d="M22 2 11 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2 15 22 11 13 2 9 22 2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Telegram</span>
            </a>
            <a
              href="mailto:contact@altrics.tech"
              aria-label="Написать на почту: contact@altrics.tech"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-200 transition hover:border-sky-400 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 21 21"
                className="h-4 w-4 text-slate-300"
                fill="none"
              >
                <path
                  d="M4.5 7.5A2 2 0 0 1 6.5 5.5h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-9Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.3 7.2 12 12l6.7-4.8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>contact@altrics.tech</span>
            </a>
            <a
              href="tel:+79012308121"
              aria-label="Позвонить: +7 901 230 8121"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-200 tabular-nums transition hover:border-sky-400 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 23 23"
                className="h-4 w-4 text-slate-300"
                fill="none"
              >
                <path
                  d="M8.5 3.5c.4 0 .8.2 1 .6l1.2 2.6c.2.5.1 1-.3 1.4l-1 1c-.2.2-.3.5-.2.8.7 2 2.3 3.6 4.3 4.3.3.1.6 0 .8-.2l1-1c.4-.4 1-.5 1.4-.3l2.6 1.2c.4.2.6.6.6 1v1.3c0 .7-.5 1.3-1.2 1.4-1 .2-2 .3-3 .1-6.2-1-11.2-6-12.2-12.2-.2-1 0-2 .1-3 .1-.7.7-1.2 1.4-1.2h1.3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="tracking-wide">+7 901 230 8121</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

