"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconHome2,
  IconUser,
  IconCode,
  IconBriefcase,
  IconTimeline,
  IconMail,
  IconCommand,
  IconTerminal2,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import CommandPalette from "../ui/CommandPalette";
import InteractiveTerminal from "../ui/InteractiveTerminal";

const navItems = [
  { id: "home", label: "Home", icon: IconHome2 },
  { id: "about", label: "About", icon: IconUser },
  { id: "skills", label: "Skills", icon: IconCode },
  { id: "projects", label: "Projects", icon: IconBriefcase },
  { id: "experience", label: "Experience", icon: IconTimeline },
  { id: "contact", label: "Contact", icon: IconMail },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  const activeRef = useRef("home");

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (activeRef.current !== id) {
            activeRef.current = id;
            setActive(id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop Floating Navbar (Hidden when CLI Terminal is open) */}
      <AnimatePresence>
        {!isTerminalOpen && (
          <motion.nav
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 left-1/2 z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hyper-glass"
          >
            <ul className="flex items-center gap-1">
              {navItems.map(({ id, icon: Icon, label }) => {
                const isActive = active === id;
                return (
                  <li key={id} className="relative">
                    <Link
                      href={`#${id}`}
                      className={`relative z-10 flex items-center gap-2 px-3.5 py-2.5 rounded-full text-xs font-semibold transition-colors ${
                        isActive ? "text-zinc-950 font-bold" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{label}</span>
                    </Link>

                    {/* Animated Floating Active Indicator Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full z-0 shadow-md shadow-amber-400/20"
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="h-5 w-px bg-zinc-800 mx-1" />

            {/* Action Triggers with Premium Animated Tooltips */}
            <div className="flex items-center gap-1">
              {/* Quick Actions (Cmd+K) Button with Tooltip */}
              <div className="relative flex items-center">
                <button
                  onClick={() => setIsCommandOpen(true)}
                  onMouseEnter={() => setHoveredTooltip("search")}
                  onMouseLeave={() => setHoveredTooltip(null)}
                  className="p-2.5 rounded-full text-zinc-400 hover:text-amber-400 hover:bg-zinc-900 transition-colors"
                  aria-label="Quick Actions & Command Palette"
                >
                  <IconCommand size={18} />
                </button>
                <AnimatePresence>
                  {hoveredTooltip === "search" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                      exit={{ opacity: 0, y: 6, scale: 0.9, x: "-50%" }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute bottom-full mb-3 left-1/2 whitespace-nowrap pointer-events-none z-50 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950/95 border border-amber-500/30 text-xs text-zinc-200 shadow-2xl backdrop-blur-md"
                    >
                      <span className="font-semibold text-zinc-100">Quick Actions</span>
                      <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-zinc-800 border border-zinc-700 rounded text-amber-400 shadow-inner">
                        ⌘K
                      </kbd>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-zinc-950 border-r border-b border-amber-500/30" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Developer CLI Terminal Button with Tooltip */}
              <div className="relative flex items-center">
                <button
                  onClick={() => setIsTerminalOpen(true)}
                  onMouseEnter={() => setHoveredTooltip("terminal")}
                  onMouseLeave={() => setHoveredTooltip(null)}
                  className="p-2.5 rounded-full text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 transition-colors"
                  aria-label="Developer CLI Terminal"
                >
                  <IconTerminal2 size={18} />
                </button>
                <AnimatePresence>
                  {hoveredTooltip === "terminal" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                      exit={{ opacity: 0, y: 6, scale: 0.9, x: "-50%" }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute bottom-full mb-3 left-1/2 whitespace-nowrap pointer-events-none z-50 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950/95 border border-emerald-500/30 text-xs text-zinc-200 shadow-2xl backdrop-blur-md"
                    >
                      <span className="font-semibold text-emerald-400">Developer CLI</span>
                      <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-zinc-800 border border-zinc-700 rounded text-emerald-400 shadow-inner">
                        Terminal
                      </kbd>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-zinc-950 border-r border-b border-emerald-500/30" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Top Header Bar (Hidden when CLI Terminal is open) */}
      <AnimatePresence>
        {!isTerminalOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-4 left-4 right-4 z-40 flex sm:hidden items-center justify-between px-4 py-3 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 shadow-xl hyper-glass"
          >
            <span className="text-xs font-bold text-white tracking-wide">
              FAKIYAT <span className="text-amber-400">AFAQ</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCommandOpen(true)}
                className="p-2 rounded-xl text-zinc-300 hover:bg-zinc-900"
                aria-label="Quick Actions"
              >
                <IconCommand size={18} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-xl bg-amber-400 text-zinc-950 font-bold"
                aria-label="Toggle Mobile Menu"
              >
                <IconMenu2 size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sliding Sheet Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && !isTerminalOpen && (
          <div className="fixed inset-0 z-50 flex items-stretch justify-end sm:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative z-10 w-4/5 max-w-xs h-full bg-zinc-950 border-l border-zinc-800 p-6 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <span className="text-sm font-bold text-white">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full text-zinc-400 hover:text-white"
                  >
                    <IconX size={20} />
                  </button>
                </div>

                <div className="space-y-2">
                  {navItems.map(({ id, label, icon: Icon }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        active === id
                          ? "bg-amber-400 text-zinc-950 font-bold"
                          : "text-zinc-300 hover:bg-zinc-900"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 space-y-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsTerminalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-mono"
                >
                  <IconTerminal2 size={16} />
                  <span>Launch CLI Terminal</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Command Palette & Terminal Modals */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </>
  );
}
