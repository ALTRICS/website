import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "altrics — AI‑сотрудники для вашего бизнеса",
  description:
    "altrics помогает малому и среднему бизнесу в России автоматизировать рутинные операции с помощью AI‑ассистентов и автоматизаций."
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

