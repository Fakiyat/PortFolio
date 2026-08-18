"use client";

import { useState, useRef, useEffect } from "react";
import SlidingSheet from "./SlidingSheet";
import { personalInfo, skills, projects } from "@/data/data";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CommandLog = {
  command: string;
  output: React.ReactNode;
};

export default function InteractiveTerminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs sm:text-sm">
          <p className="text-emerald-400 font-bold">
            🚀 Welcome to Fakiyat Afaq's Interactive CLI v1.0.0
          </p>
          <p className="text-zinc-400">
            Type <span className="text-amber-400 font-bold">help</span> to view available terminal commands.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-amber-400 font-semibold">Available Commands:</p>
            <p>• <span className="text-emerald-400 font-bold">whoami</span> - Brief introduction</p>
            <p>• <span className="text-emerald-400 font-bold">skills</span> - List primary frontend & stack technologies</p>
            <p>• <span className="text-emerald-400 font-bold">projects</span> - View featured live project builds</p>
            <p>• <span className="text-emerald-400 font-bold">contact</span> - Show contact details & links</p>
            <p>• <span className="text-emerald-400 font-bold">hire-me</span> - Launch recruiter contact payload</p>
            <p>• <span className="text-emerald-400 font-bold">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <p className="text-xs text-zinc-300">
            {personalInfo.name} — {personalInfo.headline}
          </p>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-cyan-400 font-semibold">Frontend Core:</p>
            <p className="text-zinc-400">React 19, Next.js 16, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS</p>
            <p className="text-purple-400 font-semibold mt-2">Animations & Tools:</p>
            <p className="text-zinc-400">Framer Motion, GSAP, Zustand, React Query, Ant Design, Git, Vercel</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-1.5 text-xs">
            {projects.map((p) => (
              <div key={p.id} className="flex flex-col gap-0.5">
                <span className="text-amber-400 font-bold">• {p.title}</span>
                <span className="text-zinc-400">{p.description}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-amber-400 underline">{personalInfo.email}</a></p>
            <p>GitHub: <a href={personalInfo.github} target="_blank" className="text-cyan-400 underline">{personalInfo.github}</a></p>
            <p>LinkedIn: <a href={personalInfo.linkedin} target="_blank" className="text-blue-400 underline">{personalInfo.linkedin}</a></p>
          </div>
        );
        break;

      case "hire-me":
        outputNode = (
          <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
            🎉 Awesome! Let's build something extraordinary together. Email me directly at {personalInfo.email} or click the Contact Me button!
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        outputNode = (
          <p className="text-xs text-rose-400">
            Command not recognized: "{cmd}". Type <span className="font-bold underline text-amber-400">help</span> for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: outputNode }]);
    setInput("");
  };

  return (
    <SlidingSheet
      isOpen={isOpen}
      onClose={onClose}
      title="Developer Terminal"
      subtitle="Interactive CLI Shell"
      position="right"
      maxWidth="max-w-xl"
    >
      <div className="flex flex-col h-[520px] bg-black/90 border border-zinc-800 rounded-xl p-4 font-mono text-xs sm:text-sm overflow-hidden shadow-inner">
        {/* Terminal Header Bar */}
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-zinc-800">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-[11px] text-zinc-500 font-mono ml-2">bash - fakiyat@portfolio:~</span>
        </div>

        {/* Scrollable Command Log */}
        <div className="flex-1 overflow-y-auto space-y-4 scrollbar-thin pr-2">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-emerald-400">fakiyat@portfolio:~$</span>
                <span className="text-zinc-100 font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 border-l border-zinc-800">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleCommandSubmit} className="mt-3 pt-3 border-t border-zinc-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type command..."
            className="flex-1 bg-transparent text-zinc-100 placeholder-zinc-600 focus:outline-none font-mono text-xs sm:text-sm"
          />
        </form>
      </div>
    </SlidingSheet>
  );
}
