"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  
  const rawX = useMotionValue(-500);
  const rawY = useMotionValue(-500);

  const x = useSpring(rawX, { damping: 30, stiffness: 200, mass: 0.5 });
  const y = useSpring(rawY, { damping: 30, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    // Disable custom cursor spotlight on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setEnabled(true);

    const updateMousePosition = (e: MouseEvent) => {
      rawX.set(e.clientX - 200);
      rawY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [rawX, rawY]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <motion.div
        style={{ x, y }}
        className="w-[400px] h-[400px] rounded-full bg-radial from-amber-500/10 via-purple-500/5 to-transparent blur-3xl opacity-70"
      />
    </div>
  );
}
