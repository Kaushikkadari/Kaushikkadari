"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden pt-16">
      <div
        className="absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(0,229,255,0.10), transparent)",
        }}
      />
      <svg
        viewBox="0 0 1440 100"
        className="w-full text-navy"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="currentColor"
          initial={{ d: "M0,40 C360,90 1080,0 1440,50 L1440,100 L0,100 Z" }}
          animate={{
            d: [
              "M0,40 C360,90 1080,0 1440,50 L1440,100 L0,100 Z",
              "M0,55 C360,10 1080,90 1440,35 L1440,100 L0,100 Z",
              "M0,40 C360,90 1080,0 1440,50 L1440,100 L0,100 Z",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <div className="bg-navy px-6 py-10 text-center">
        <p className="font-mono text-xs text-mist">
          Built with Next.js, Tailwind, and Motion.dev.
        </p>
        <p className="mt-2 text-xs text-mist/70">
          © {new Date().getFullYear()} Kaushik. No projects section — on purpose.
        </p>
      </div>
    </footer>
  );
}
