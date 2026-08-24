"use client";

import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Wraps a block in a fade + rise + unblur reveal that triggers once when
 * it enters the viewport. Used to give every section the same restrained
 * scroll-in motion described in the brief.
 */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
