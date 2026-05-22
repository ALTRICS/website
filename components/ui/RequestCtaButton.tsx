"use client";

import { Button } from "@/components/ui/Button";
import { useRequestModal } from "@/components/providers/RequestModalProvider";
import type { ComponentProps, ReactNode } from "react";

type ButtonOnlyProps = Extract<
  ComponentProps<typeof Button>,
  { href?: never }
>;

type RequestCtaButtonProps = ButtonOnlyProps & {
  onAfterOpen?: () => void;
  children: ReactNode;
};

export function RequestCtaButton({
  children,
  onAfterOpen,
  ...props
}: RequestCtaButtonProps) {
  const { openRequestModal } = useRequestModal();

  return (
    <Button
      type="button"
      onClick={() => {
        openRequestModal();
        onAfterOpen?.();
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
