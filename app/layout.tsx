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
  title: "Altrics – AI-система для заявок, клиентов и коммуникаций",
  description:
    "Настраиваем умных помощников, которые отвечают на частые вопросы, собирают заявки, записывают клиентов и передают сложные обращения менеджеру."
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
