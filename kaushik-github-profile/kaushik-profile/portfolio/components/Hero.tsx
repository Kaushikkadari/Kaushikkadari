"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AmbientBackground from "./AmbientBackground";
import TypingLine from "./TypingLine";
import MagneticButton from "./MagneticButton";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
      <AmbientBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div variants={item} className="relative mb-8">
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-cyan/20 blur-2xl" />
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="h-28 w-28 overflow-hidden rounded-full border border-cyan/30 shadow-glow md:h-32 md:w-32"
          >
            {/* Replace /avatar.png with your own image in /public */}
            <Image
              src="/avatar.png"
              alt="Kaushik's avatar"
              width={128}
              height={128}
              className="h-full w-full object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.p variants={item} className="eyebrow mb-4">
          Data Science · Machine Learning
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Kaushik
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-balance text-base text-fog sm:text-lg"
        >
          Data Scientist building <TypingLine />
        </motion.p>

        <motion.p variants={item} className="mt-3 max-w-md text-sm text-mist">
          Python · Azure · ML pipelines — with a creative side in editing,
          writing, and memes.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="https://github.com/TODO">
            <span className="font-mono">{"</>"}</span> GitHub
          </MagneticButton>
          <MagneticButton href="https://linkedin.com/in/TODO" variant="ghost">
            LinkedIn
          </MagneticButton>
          <MagneticButton href="mailto:TODO@example.com" variant="ghost" external={false}>
            Contact
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex flex-col items-center gap-2 text-mist"
        >
          <span className="eyebrow">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-cyan-soft to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
