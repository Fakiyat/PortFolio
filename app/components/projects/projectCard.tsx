"use client";

import Image from "next/image";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import { memo } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
};

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="
        group relative
        bg-zinc-950/60 backdrop-blur-md
        border border-zinc-800/60
        rounded-2xl overflow-hidden
        transition-all duration-500
        hover:border-yellow-400/40
        hover:shadow-xl hover:shadow-yellow-400/5
        transform-gpu will-change-transform
      "
    >
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 via-pink-500/0 to-yellow-400/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-yellow-400/5 transition-all duration-700" />

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        <h4 className="text-lg font-semibold text-white">{project.title}</h4>

        <p className="text-sm text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="text-sm text-zinc-400 list-disc list-inside space-y-1">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4">
          <a
            href={project.codeUrl}
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-zinc-800 text-zinc-300 hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            <IconBrandGithub size={16} />
            Code
          </a>
          <a
            href={project.liveUrl}
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-yellow-400 text-black hover:bg-yellow-300 transition"
          >
            <IconExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Memoization here is REAL and effective because:
 * - Props are primitive / stable references
 * - Component is pure
 * - Parent does not recreate project objects
 */
export default memo(ProjectCard);
