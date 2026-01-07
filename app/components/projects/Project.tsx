"use client";

import { projects } from "@/data/data";
import { useMemo } from "react";
import ProjectCard from "./projectCard";

export default function Projects() {
  const projectCards = useMemo(() => {
    return projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-black/40 py-16 lg:py-24"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center top-40 pointer-events-none">
        <h2
          className="text-[8rem] sm:text-[9rem] lg:text-[17rem] font-black tracking-wide select-none"
          style={{
            WebkitTextStroke: "2px rgba(255,255,255,0.07)",
            color: "transparent",
          }}
        >
          PROJECTS
        </h2>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="flex justify-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800/60 hover:border-yellow-400/50 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse-glow" />
            <span className="text-xs font-semibold text-zinc-300 tracking-wider uppercase">
              Projects
            </span>
          </div>
        </div>
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h3 className="text-4xl sm:text-5xl font-bold text-white">
            Featured Projects
          </h3>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Real-world applications showcasing my experience in building
            scalable, production-ready solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectCards}
        </div>
      </div>
    </section>
  );
}
