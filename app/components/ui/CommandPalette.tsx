"use client";

import { useEffect, useState, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconSearch,
  IconHome2,
  IconUser,
  IconCode,
  IconBriefcase,
  IconTimeline,
  IconMail,
  IconDownload,
  IconCopy,
  IconCheck,
  IconTerminal2,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { personalInfo } from "@/data/data";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal?: () => void;
}

function CommandPalette({
  isOpen,
  onClose,
  onOpenTerminal,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const navActions = useMemo(
    () => [
      { id: "home", label: "Go to Home", icon: IconHome2, href: "#home" },
      { id: "about", label: "Go to About Me", icon: IconUser, href: "#about" },
      {
        id: "skills",
        label: "Explore Skills & Tech",
        icon: IconCode,
        href: "#skills",
      },
      {
        id: "projects",
        label: "View Featured Projects",
        icon: IconBriefcase,
        href: "#projects",
      },
      {
        id: "experience",
        label: "Work Experience Timeline",
        icon: IconTimeline,
        href: "#experience",
      },
      {
        id: "contact",
        label: "Get in Touch",
        icon: IconMail,
        href: "#contact",
      },
    ],
    [],
  );

  const quickActions = useMemo(
    () => [
      {
        id: "copy-email",
        label: `Copy Email (${personalInfo.email})`,
        icon: copied ? IconCheck : IconCopy,
        action: () => {
          navigator.clipboard.writeText(personalInfo.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        },
      },
      {
        id: "resume",
        label: "Download Resume (PDF)",
        icon: IconDownload,
        action: () => {
          window.open(personalInfo.resumeUrl, "_blank");
        },
      },
      {
        id: "github",
        label: "View GitHub Profile",
        icon: IconBrandGithub,
        action: () => {
          window.open(personalInfo.github, "_blank");
        },
      },
      {
        id: "linkedin",
        label: "Connect on LinkedIn",
        icon: IconBrandLinkedin,
        action: () => {
          window.open(personalInfo.linkedin, "_blank");
        },
      },
      {
        id: "terminal",
        label: "Open Interactive Dev Terminal",
        icon: IconTerminal2,
        action: () => {
          onClose();
          if (onOpenTerminal) onOpenTerminal();
        },
      },
    ],
    [copied, onClose, onOpenTerminal],
  );

  const filteredNav = useMemo(
    () =>
      navActions.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()),
      ),
    [navActions, query],
  );

  const filteredQuick = useMemo(
    () =>
      quickActions.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()),
      ),
    [quickActions, query],
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden hyper-glass"
          >
            {/* Search Input Box */}
            <div className="flex items-center px-4 py-3.5 border-b border-zinc-800 bg-zinc-900/60">
              <IconSearch className="w-5 h-5 text-amber-400 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or section to search..."
                className="w-full bg-transparent text-zinc-100 placeholder-zinc-500 text-sm outline-none!"
                autoFocus
              />
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-md">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-96 overflow-y-auto p-2 scrollbar-thin divide-y divide-zinc-800/40">
              {/* Navigation Group */}
              {filteredNav.length > 0 && (
                <div className="py-2">
                  <div className="px-3 py-1 text-[11px] font-semibold uppercase text-zinc-500 tracking-wider">
                    Navigation
                  </div>
                  {filteredNav.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-amber-500/10 hover:border-amber-500/20 border border-transparent transition-all group"
                      >
                        <Icon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              )}

              {/* Quick Actions Group */}
              {filteredQuick.length > 0 && (
                <div className="py-2">
                  <div className="px-3 py-1 text-[11px] font-semibold uppercase text-zinc-500 tracking-wider">
                    Quick Actions
                  </div>
                  {filteredQuick.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-purple-500/10 hover:border-purple-500/20 border border-transparent transition-all text-left group"
                      >
                        <Icon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {filteredNav.length === 0 && filteredQuick.length === 0 && (
                <div className="p-8 text-center text-zinc-500 text-sm">
                  No commands found matching "{query}"
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default memo(CommandPalette);
