"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TEXT = "İzmit Sosyal Medya.";

type Phase = "typing" | "shimmer" | "done";

export default function IntroOverlay({ onDone }: { onDone: () => void }) {
  const [charCount, setCharCount]     = useState(0);
  const [phase, setPhase]             = useState<Phase>("typing");
  const [cursorVisible, setCursor]    = useState(true);
  const [visible, setVisible]         = useState(true);

  /* Guards against calling onDone() twice (normal exit + fail-safe) */
  const doneRef = useRef(false);
  const safeDone = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onDone();
  };

  /* Fail-safe: if timers get throttled (tab backgrounded on mobile, low-power
     mode, etc.) and the exit animation never completes, force the overlay
     off after a generous margin so it can never permanently block scroll. */
  useEffect(() => {
    const failsafe = setTimeout(safeDone, 4000);
    return () => clearTimeout(failsafe);
  }, []);

  /* Typewriter */
  useEffect(() => {
    if (phase !== "typing") return;
    if (charCount < TEXT.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 65);
      return () => clearTimeout(t);
    }
    /* typing done → shimmer */
    const t = setTimeout(() => setPhase("shimmer"), 180);
    return () => clearTimeout(t);
  }, [charCount, phase]);

  /* After shimmer completes (CSS ~0.85s) → start slide-up */
  useEffect(() => {
    if (phase !== "shimmer") return;
    const t = setTimeout(() => {
      setPhase("done");
      setVisible(false);
    }, 1100);          /* shimmer (850ms) + pause (250ms) */
    return () => clearTimeout(t);
  }, [phase]);

  /* Cursor blink — stop once typing done */
  useEffect(() => {
    if (phase !== "typing") {
      const t = setTimeout(() => setCursor(false), 0);
      return () => clearTimeout(t);
    }
    const id = setInterval(() => setCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, [phase]);

  return (
    <AnimatePresence onExitComplete={safeDone}>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Text + shimmer wrapper */}
          <div className="relative overflow-hidden">
            <p
              className="relative z-10 text-white font-light tracking-[0.12em] select-none"
              style={{ fontSize: "clamp(1.25rem, 4vw, 2.5rem)" }}
            >
              {TEXT.slice(0, charCount)}
              {/* blinking cursor — hidden once typing done */}
              <span
                className="inline-block w-[2px] h-[1.1em] ml-[2px] align-middle bg-[#FF5A00] relative top-[-0.05em]"
                style={{ opacity: cursorVisible ? 1 : 0, transition: "opacity 0.1s" }}
              />
            </p>

            {/* Shimmer overlay — right-to-left sweep */}
            {phase === "shimmer" && (
              <span
                aria-hidden
                className="intro-shimmer absolute inset-y-0 w-[60%] pointer-events-none z-20"
                style={{ top: "-20%", height: "140%", right: "0" }}
              />
            )}
          </div>

          <div className="absolute bottom-8 left-0 w-full flex justify-center" aria-hidden>
            <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-neutral-700">
              İzmit Sosyal Medya
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
