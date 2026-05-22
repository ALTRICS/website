"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from "react";
import { RequestModal } from "@/components/ui/RequestModal";

type RequestModalContextValue = {
  openRequestModal: () => void;
  closeRequestModal: () => void;
  isOpen: boolean;
};

const RequestModalContext = createContext<RequestModalContextValue | null>(
  null
);

export function RequestModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openRequestModal = useCallback(() => setIsOpen(true), []);
  const closeRequestModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeRequestModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeRequestModal]);

  return (
    <RequestModalContext.Provider
      value={{ openRequestModal, closeRequestModal, isOpen }}
    >
      {children}
      <RequestModal isOpen={isOpen} onClose={closeRequestModal} />
    </RequestModalContext.Provider>
  );
}

export function useRequestModal() {
  const context = useContext(RequestModalContext);
  if (!context) {
    throw new Error("useRequestModal must be used within RequestModalProvider");
  }
  return context;
}
