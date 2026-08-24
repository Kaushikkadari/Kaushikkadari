"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const PHRASES = ["pricing pipelines.", "ML systems.", "clean data.", "for production."];

/**
 * Cycles through short phrases with a typewriter effect. Falls back to a
 * single static phrase when the user prefers reduced motion.
 */
export default function TypingLine() {
  const reduced = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(PHRASES[0]);
      return;
    }

    const current = PHRASES[phraseIndex];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, reduced]);

  return (
    <span className="font-mono text-cyan-soft">
      {text}
      {!reduced && (
        <motion.span
          className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-cyan-soft align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </span>
  );
}
