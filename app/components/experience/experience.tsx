"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  IconCalendar,
  IconBriefcase,
  IconCheck,
  IconChevronDown,
  IconChevronUp,
  IconSchool,
  IconSparkles,
  IconMapPin,
  IconTrendingUp,
} from "@tabler/icons-react";
import { experience, education } from "@/data/data";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(1); // Default open first role

  // Scroll progress for vertical line growth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 85%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative bg-black py-20 lg:py-32 px-6 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center top-24 pointer-events-none opacity-10">
        <h2
          className="text-[8rem] sm:text-[14rem] lg:text-[22rem] font-black tracking-tight select-none leading-none"
          style={{
            WebkitTextStroke: "2px rgba(255,255,255,0.08)",
            color: "transparent",
          }}
        >
          EXPERIENCE
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800">
            <IconBriefcase className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold text-zinc-300 tracking-widest uppercase">
              Professional Journey
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white">
            Work Experience & <span className="text-amber-400">Impact</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Scroll down to explore my career timeline across AI platforms, SaaS systems, and automated workflow engineering.
          </p>
        </div>

        {/* Timeline Track & Cards Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Base Background Track Line */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-1 bg-zinc-800/80 rounded-full" />

          {/* Dynamic Scroll-Driven Animated Line Connector */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 sm:left-8 top-6 bottom-6 w-1 bg-gradient-to-b from-amber-400 via-yellow-400 to-orange-500 rounded-full origin-top shadow-[0_0_15px_rgba(251,191,36,0.6)]"
          />

          <div className="space-y-12">
            {experience.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Dynamic Pulsing Connector Node Dot */}
                  <div className="absolute left-4 sm:left-8 top-7 -translate-x-1/2 flex items-center justify-center z-20">
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-400 border-4 border-zinc-950 shadow-lg shadow-amber-400/80" />
                    </span>
                  </div>

                  {/* Experience Card Container */}
                  <div
                    className={`group relative rounded-3xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? "border-amber-500/50 bg-zinc-950/90 shadow-2xl shadow-amber-500/10 hyper-glass-gold"
                        : "border-zinc-800/80 bg-zinc-950/70 hover:border-zinc-700 hover:bg-zinc-950/90 hyper-glass"
                    }`}
                  >
                    {/* Card Header Bar (Click to toggle accordion) */}
                    <div
                      onClick={() => toggleExpand(item.id)}
                      className="p-6 sm:p-8 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                            {item.role}
                          </h3>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                            {item.company}
                          </span>
                        </div>

                        <p className="text-xs text-zinc-400 font-light flex items-center gap-2">
                          <IconCalendar className="w-3.5 h-3.5 text-amber-400" />
                          <span>{item.period}</span>
                          <span>•</span>
                          <IconMapPin className="w-3.5 h-3.5 text-zinc-500" />
                          <span>{item.location}</span>
                        </p>
                      </div>

                      {/* Expand / Collapse Icon Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(item.id);
                        }}
                        className="self-end sm:self-center flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-amber-400 hover:border-amber-500/40 transition-all shrink-0"
                      >
                        <span>{isExpanded ? "Collapse Details" : "View Details"}</span>
                        {isExpanded ? (
                          <IconChevronUp className="w-4 h-4 text-amber-400" />
                        ) : (
                          <IconChevronDown className="w-4 h-4 text-amber-400" />
                        )}
                      </button>
                    </div>

                    {/* Role High-Level Summary & Impact Metrics */}
                    <div className="px-6 sm:px-8 pb-4">
                      <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                        {item.description}
                      </p>

                      {/* Impact Metric Chips */}
                      {item.metrics && (
                        <div className="flex flex-wrap gap-2 pt-3">
                          {item.metrics.map((metric, mIdx) => (
                            <span
                              key={mIdx}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-900/90 border border-zinc-800 text-amber-400 text-xs font-medium"
                            >
                              <IconTrendingUp className="w-3.5 h-3.5" />
                              <span>{metric}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Expandable Accordion Body Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="border-t border-zinc-800/80 bg-zinc-900/40 px-6 sm:px-8 py-6 space-y-6"
                        >
                          {/* Tech Stack Chips */}
                          <div className="space-y-2">
                            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                              Tech Stack & Architecture
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.tech.map((t, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-medium hover:border-amber-400/50 transition-colors"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Detailed Responsibilities & Accomplishments */}
                          <div className="space-y-3">
                            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                              <IconSparkles className="w-4 h-4 text-amber-400" />
                              <span>Key Achievements & Deliverables</span>
                            </h4>

                            <div className="space-y-3">
                              {item.responsibilities.map((resp, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/60"
                                >
                                  <div className="p-1 rounded-md bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                                    <IconCheck className="w-4 h-4" />
                                  </div>
                                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                                    {resp}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}

            {/* Education Card Item */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 sm:pl-20 pt-4"
            >
              {/* Connector Node */}
              <div className="absolute left-4 sm:left-8 top-11 -translate-x-1/2 flex items-center justify-center z-20">
                <span className="relative flex h-6 w-6 items-center justify-center">
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-500 border-4 border-zinc-950 shadow-lg shadow-purple-500/80" />
                </span>
              </div>

              <div className="relative rounded-3xl border border-purple-500/30 bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-md hyper-glass">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <IconSchool className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {education.institution}
                      </h3>
                      <p className="text-xs text-purple-300 font-medium">
                        {education.degree}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 self-start sm:self-auto">
                    {education.period}
                  </span>
                </div>

                <div className="pt-4 space-y-2">
                  {education.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
