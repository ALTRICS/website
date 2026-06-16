import type { Metadata } from "next";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.png", type: "image/png" }]
  },
  verification: {
    yandex: "a8de06dd1a0b7692"
  },
  title: "ИИ-операционная среда для работы с клиентами | altrics",
  description:
    "altrics объединяет обращения, клиентов, базу знаний, ИИ-агентов, автоматизации и аналитику в единой операционной среде для бизнеса.",
  openGraph: {
    title: "ИИ-операционная среда для работы с клиентами | altrics",
    description:
      "altrics объединяет обращения, клиентов, базу знаний, ИИ-агентов, автоматизации и аналитику в единой операционной среде для бизнеса."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
