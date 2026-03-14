 "use client";

import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

type SectionProps = MotionProps & {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = "", children, ...motionProps }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        {...motionProps}
      >
        {children}
      </motion.div>
    </section>
  );
}

