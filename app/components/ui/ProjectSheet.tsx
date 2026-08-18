"use client";

import { memo } from "react";
import Image from "next/image";
import SlidingSheet from "./SlidingSheet";
import {
  IconExternalLink,
  IconBrandGithub,
  IconCheck,
  IconCode,
  IconRocket,
} from "@tabler/icons-react";

export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
  featured?: boolean;
};

interface ProjectSheetProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectSheet({ project, isOpen, onClose }: ProjectSheetProps) {
  if (!project) return null;

  return (
    <SlidingSheet
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle="Project Architecture & Deep Dive"
      position="right"
      maxWidth="max-w-2xl"
    >
      <div className="space-y-6">
        {/* Project Cover Banner Image */}
        <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
              Featured Build
            </span>
          </div>
        </div>

        {/* Overview Description */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
            <IconRocket className="w-4 h-4 text-amber-400" /> Overview
          </h4>
          <p className="text-zinc-300 text-base leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
            <IconCode className="w-4 h-4 text-cyan-400" /> Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-medium hover:border-amber-500/40 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
            Key Architecture Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80"
              >
                <div className="p-1 rounded-md bg-amber-500/10 text-amber-400 mt-0.5">
                  <IconCheck className="w-4 h-4" />
                </div>
                <span className="text-sm text-zinc-300 font-light">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTA Buttons */}
        <div className="pt-6 border-t border-zinc-800 flex items-center gap-4">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-linear-to-r from-amber-400 to-yellow-500 text-zinc-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <IconExternalLink className="w-4 h-4" /> Live Preview
            </a>
          )}

          {project.codeUrl && project.codeUrl !== "#" && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold text-sm hover:border-zinc-500 transition-all hover:scale-[1.02]"
            >
              <IconBrandGithub className="w-4 h-4" /> View Code
            </a>
          )}
        </div>
      </div>
    </SlidingSheet>
  );
}

export default memo(ProjectSheet);
