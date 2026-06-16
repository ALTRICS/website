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
  openRequestModalWithPlan: (plan: string) => void;
  closeRequestModal: () => void;
  isOpen: boolean;
  selectedPlan: string;
};

const RequestModalContext = createContext<RequestModalContextValue | null>(
  null
);

export function RequestModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const openRequestModal = useCallback(() => {
    setSelectedPlan("");
    setIsOpen(true);
  }, []);

  const openRequestModalWithPlan = useCallback((plan: string) => {
    setSelectedPlan(plan);
    setIsOpen(true);
  }, []);

  const closeRequestModal = useCallback(() => {
    setIsOpen(false);
    setSelectedPlan("");
  }, []);

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
      value={{ openRequestModal, openRequestModalWithPlan, closeRequestModal, isOpen, selectedPlan }}
    >
      {children}
      <RequestModal isOpen={isOpen} onClose={closeRequestModal} selectedPlan={selectedPlan} />
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
