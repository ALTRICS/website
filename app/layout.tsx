import type { Metadata } from "next";
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
  title: "Altrics — AI-автоматизация заявок и коммуникаций для бизнеса",
  description:
    "Внедряем AI-ботов, ответы на заявки, n8n-автоматизации и внутренних ассистентов для МСБ. Развиваем единую платформу для заявок, клиентов и коммуникаций."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
