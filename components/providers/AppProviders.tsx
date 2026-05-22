"use client";

import type { ReactNode } from "react";
import { RequestModalProvider } from "@/components/providers/RequestModalProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return <RequestModalProvider>{children}</RequestModalProvider>;
}
