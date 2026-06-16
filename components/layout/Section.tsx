"use client";

import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

type SectionProps = MotionProps & {
  id?: string;
  className?: string;
  children: ReactNode;
  alt?: boolean;
};

export function Section({
  id,
  className = "",
  children,
  alt = false,
  ...motionProps
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 sm:py-20 lg:py-24 ${alt ? "bg-slate-50/80" : ""} ${className}`}
    >
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          {...motionProps}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
