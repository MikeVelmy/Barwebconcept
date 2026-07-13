"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** "scroll" reveals when scrolled into view (default). "mount" animates
   * immediately on load — use for above-the-fold content like the hero,
   * which must never depend on IntersectionObserver timing to appear. */
  mode?: "scroll" | "mount";
};

export function Reveal({ children, delay = 0, y = 28, className, mode = "scroll" }: Props) {
  const animation = { opacity: 1, y: 0 };
  const transition = { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const };

  if (mode === "mount") {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        animate={animation}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={animation}
      viewport={{ once: true, amount: 0, margin: "0px 0px -5% 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
