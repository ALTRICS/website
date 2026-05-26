import type { Metadata } from "next";
import { LoginView } from "@/components/sections/LoginView";

export const metadata: Metadata = {
  title: "Вход в кабинет – Altrics",
  description:
    "Вход в кабинет altrics для подключённых клиентов. Запрос доступа к AI-ботам, автоматизациям и единому inbox."
};

export default function LoginPage() {
  return <LoginView />;
}
