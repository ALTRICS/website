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
  title: "Altrics – AI-автоматизация заявок, клиентов и коммуникаций для бизнеса",
  description:
    "Внедряем Telegram-ботов, AI-ответы на заявки, n8n-автоматизации и интеграции для малого и среднего бизнеса в России и СНГ."
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
