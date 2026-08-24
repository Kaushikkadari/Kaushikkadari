"use client";

import { motion } from "motion/react";

/**
 * Slow, atmospheric background: a fine engineering grid, two soft radial
 * glows drifting on very long cycles, and a grain layer so the dark
 * surface never looks flat. Everything here is decorative — it never
 * competes with foreground content.
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade" />

      <motion.div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,229,255,0.16), transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.55, 0.8, 0.55], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute top-1/3 right-[-10%] h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.14), transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.6, 0.4], y: [0, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="grain absolute inset-0 opacity-[0.25] mix-blend-soft-light" />
    </div>
  );
}
