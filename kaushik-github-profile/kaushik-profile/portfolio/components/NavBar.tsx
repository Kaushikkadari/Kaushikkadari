"use client";

import { motion } from "motion/react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Focus" },
  { href: "#stack", label: "Stack" },
  { href: "#stats", label: "GitHub" },
  { href: "#creative", label: "Creative" },
  { href: "#goals", label: "Goals" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div className="glass hidden gap-1 rounded-full px-2 py-2 md:flex">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-1.5 font-mono text-xs text-mist transition-colors duration-200 hover:bg-white/5 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
