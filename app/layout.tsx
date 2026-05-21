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
  title: "Altrics — AI-решения и автоматизация для бизнеса",
  description:
    "Altrics создаёт AI-ассистентов, бизнес-автоматизации и кастомные ChatGPT-системы для малого и среднего бизнеса в России и СНГ."
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
