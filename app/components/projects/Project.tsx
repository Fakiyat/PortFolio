"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/data";
import ProjectCard from "./projectCard";
import ProjectSheet, { ProjectItem } from "../ui/ProjectSheet";

const CATEGORIES = ["All", "SaaS", "Modern Web"] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    if (activeCategory === "SaaS") {
      return projects.filter(
        (p) =>
          p.title.toLowerCase().includes("saas") ||
          p.description.toLowerCase().includes("saas"),
      );
    }
    // if (activeCategory === "Full Stack") {
    //   return projects.filter((p) =>
    //     p.tech.includes("Django") || p.tech.includes("PostgreSQL") || p.title.toLowerCase().includes("full-stack")
    //   );
    // }
    return projects.filter(
      (p) => p.tech.includes("Framer Motion") || p.tech.includes("Next.js"),
    );
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-black py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center top-20 pointer-events-none opacity-20">
        <h2
          className="text-[8rem] sm:text-[12rem] lg:text-[18rem] font-black tracking-tight select-none leading-none"
          style={{
            WebkitTextStroke: "2px rgba(255,255,255,0.08)",
            color: "transparent",
          }}
        >
          WORK
        </h2>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Status Pill Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-semibold text-zinc-300 tracking-wider uppercase">
              Featured Builds
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h3 className="text-4xl sm:text-6xl font-extrabold text-white">
            Selected <span className="text-amber-400">Projects</span>
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-light">
            Production-ready web applications, SaaS dashboards, and full-stack
            solutions built for performance and scale.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-2xl text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? "text-zinc-950 bg-amber-400 font-bold shadow-lg shadow-amber-400/20"
                    : "text-zinc-400 bg-zinc-900/80 border border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Dynamic Animated Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Sliding Project Sheet Drawer */}
      <ProjectSheet
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
