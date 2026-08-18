"use client";

import { useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";

interface SlidingSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  position?: "right" | "bottom";
  maxWidth?: string;
}

function SlidingSheet({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  position = "right",
  maxWidth = "max-w-2xl",
}: SlidingSheetProps) {
  // ESC key handler and body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const isRight = position === "right";

  const initialAnimation = isRight
    ? { x: "100%", opacity: 0 }
    : { y: "100%", opacity: 0 };
  const animateTarget = isRight
    ? { x: 0, opacity: 1 }
    : { y: 0, opacity: 1 };
  const exitAnimation = isRight
    ? { x: "100%", opacity: 0 }
    : { y: "100%", opacity: 0 };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-stretch justify-end overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Sliding Drawer Container */}
          <motion.div
            initial={initialAnimation}
            animate={animateTarget}
            exit={exitAnimation}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className={`relative z-10 w-full ${maxWidth} h-full bg-zinc-950/95 border-l border-zinc-800 shadow-2xl flex flex-col overflow-hidden hyper-glass`}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800/80 bg-zinc-900/50">
              <div>
                {title && (
                  <h3 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-xs text-amber-400 font-medium mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors"
                aria-label="Close panel"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default memo(SlidingSheet);
