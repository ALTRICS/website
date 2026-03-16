import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  title: "ALTRICS — Автоматизация процессов для вашего бизнеса",
  description:
    "ALTRICS помогает малому и среднему бизнесу в России автоматизировать рутинные операции с помощью AI‑ассистентов и автоматизаций."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}

