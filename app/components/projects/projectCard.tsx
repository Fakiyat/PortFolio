"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconExternalLink, IconBrandGithub, IconMaximize } from "@tabler/icons-react";
import { ProjectItem } from "../ui/ProjectSheet";

type ProjectCardProps = {
  project: ProjectItem;
  onOpenDetails?: (project: ProjectItem) => void;
};

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-zinc-950/70 backdrop-blur-md border border-zinc-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
    >
      {/* Top Image Preview Banner */}
      <div className="relative h-52 w-full overflow-hidden bg-zinc-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-90" />

        {/* Quick View Sheet Trigger Overlay Button */}
        <button
          onClick={() => onOpenDetails && onOpenDetails(project)}
          className="absolute top-3 right-3 p-2.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-amber-400 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
          title="Open Details Sheet"
        >
          <IconMaximize className="w-4 h-4 text-amber-400" />
        </button>
      </div>

      {/* Card Content Body */}
      <div className="relative p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h4 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
            {project.title}
          </h4>
          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 font-light">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Card Actions Footer */}
        <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenDetails && onOpenDetails(project)}
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
          >
            <span>View Architecture</span>
            <IconMaximize className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            {project.codeUrl && project.codeUrl !== "#" && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                title="GitHub Code"
              >
                <IconBrandGithub size={18} />
              </a>
            )}

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 text-zinc-950 font-bold text-xs hover:bg-yellow-300 transition-all shadow-md shadow-amber-400/20"
              >
                <IconExternalLink size={14} />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
