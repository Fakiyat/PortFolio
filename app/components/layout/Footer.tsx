"use client";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconMail,
  IconHeart,
} from "@tabler/icons-react";
import { personaldetails, personalInfo } from "@/data/data";

export default function FooterMinimal() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-zinc-900">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* Single row layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-400 order-2 md:order-1">
            <span>© {currentYear}</span>
            <span className="text-amber-400 font-bold">
              {personalInfo.name}
            </span>
            <span>• All rights reserved</span>
          </div>

          {/* Center - Made with */}
          <div className="flex items-center gap-2 text-sm text-gray-400 order-1 md:order-2">
            <span>Created by</span>
            <span className="text-amber-400 font-bold">
              {personalInfo.name}
            </span>
            <span>with</span>
            <IconHeart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-3 order-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/50 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-4 h-4 text-amber-400" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/50 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <IconBrandGithub className="w-4 h-4 text-amber-400" />
            </a>
            <a
              href={personaldetails.twitter || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/50 hover:scale-110 transition-all duration-300"
              aria-label="Twitter"
            >
              <IconBrandX className="w-4 h-4 text-amber-400" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-lg bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/50 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <IconMail className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
