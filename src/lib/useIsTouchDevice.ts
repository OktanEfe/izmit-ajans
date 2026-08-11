"use client";

import { useEffect, useState } from "react";

/** True on touch-primary devices (phones/tablets) where infinite decorative
 *  JS animations aren't worth the mobile GPU/compositor budget.
 *
 *  Always starts `false` (matching what the server renders) and flips
 *  client-side in an effect — reading `window` in the initializer would
 *  make the first client render disagree with the SSR'd HTML and trigger
 *  a hydration mismatch. */
export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isTouch;
}
