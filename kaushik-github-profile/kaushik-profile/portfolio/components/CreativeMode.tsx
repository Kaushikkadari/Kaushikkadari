"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function EditingCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl glass p-6">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-cyan-soft">
        🎬 Editing
      </p>
      <div className="mb-6 flex h-16 items-end gap-1">
        {[6, 14, 9, 18, 11, 20, 8].map((h, i) => (
          <motion.span
            key={i}
            className="w-2 rounded-sm bg-gradient-to-t from-cyan/70 to-indigo/70"
            style={{ height: h * 3 }}
            animate={{ scaleY: [1, 1.35, 1] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.12,
            }}
          />
        ))}
      </div>
      <p className="font-display text-sm text-white">Frames → Motion</p>
      <p className="mt-2 text-sm text-mist">
        Cutting video and photo into something that actually holds a beat.
      </p>
    </div>
  );
}

function WritingCard() {
  const lines = [92, 68, 80, 45];
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl glass p-6">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-cyan-soft">
        ✍️ Writing
      </p>
      <div className="mb-6 flex flex-col gap-2.5">
        {lines.map((w, i) => (
          <motion.span
            key={i}
            className="h-2 rounded-full bg-white/10"
            initial={{ width: 0 }}
            whileInView={{ width: `${w}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
      <p className="font-display text-sm text-white">Ideas → Words</p>
      <p className="mt-2 text-sm text-mist">
        Storytelling and playing with language until a thought lands right.
      </p>
    </div>
  );
}

function MemeCard() {
  return (
    <motion.div
      className="group relative h-full cursor-default overflow-hidden rounded-2xl glass p-6"
      whileHover={{ rotate: [-0.5, 0.5, -0.3, 0], transition: { duration: 0.5 } }}
    >
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-cyan-soft">
        😂 Memes
      </p>
      <div className="mb-6 flex h-16 items-center justify-center">
        <motion.span
          className="font-display text-4xl"
          animate={{ rotate: [0, -6, 6, -3, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          💬
        </motion.span>
      </div>
      <p className="font-display text-sm text-white">Internet → Chaos</p>
      <p className="mt-2 text-sm text-mist">
        Fluent in internet culture, mostly for the sake of a good punchline.
      </p>
    </motion.div>
  );
}

export default function CreativeMode() {
  return (
    <section id="creative" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <SectionHeading eyebrow="05 / Creative Mode" title="The non-technical side" />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-3">
        <Reveal>
          <EditingCard />
        </Reveal>
        <Reveal delay={0.08}>
          <WritingCard />
        </Reveal>
        <Reveal delay={0.16}>
          <MemeCard />
        </Reveal>
      </div>
    </section>
  );
}
