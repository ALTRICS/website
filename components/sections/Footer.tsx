import { AltricsLogo } from "../branding/AltricsLogo";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <AltricsLogo
            variant="horizontal"
            className="h-6 w-auto text-slate-100"
          />
          <p className="max-w-sm text-xs text-slate-500">
            Студия AI‑автоматизации, которая помогает малому и среднему бизнесу
            в России убрать рутину из ежедневных операций.
          </p>
          <p className="text-[0.7rem] text-slate-600">
            © {new Date().getFullYear()} ALTRICS. Все права защищены.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 text-xs sm:items-end">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://t.me/+N573lsg4kWgwNGRi"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-200 transition hover:border-sky-400 hover:bg-slate-900"
            >
              Telegram
            </a>
            <a
              href="mailto:support@altrics.tech"
              className="rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-200 transition hover:border-sky-400 hover:bg-slate-900"
            >
              support@altrics.tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

