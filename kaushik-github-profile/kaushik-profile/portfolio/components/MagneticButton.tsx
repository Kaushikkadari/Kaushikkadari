"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  external?: boolean;
};

/**
 * A CTA that leans very slightly toward the cursor on hover. The pull is
 * capped small (max ~8px) so it reads as responsiveness, not a gimmick.
 */
export default function MagneticButton({
  href,
  children,
  variant = "solid",
  external = true,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.25);
    y.set(relY * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-cyan text-void shadow-glow hover:shadow-glow-lg"
      : "glass text-fog hover:border-cyan/40 hover:text-white";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}
