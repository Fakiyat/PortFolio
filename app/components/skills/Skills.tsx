"use client";

import { motion, Variants } from "framer-motion";
import { skills } from "@/data/data";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Image Layer */}
      <Image
        src="/background.webp"
        alt="Background pattern"
        fill
        sizes="100vw"
        priority
        className="object-cover opacity-20 filter contrast-125"
      />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xs" />

      {/* Content Container */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-semibold text-zinc-300 tracking-widest uppercase">
              Tech Stack
            </span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-3"
        >
          <h3 className="text-4xl sm:text-6xl font-extrabold text-white">
            Technical <span className="text-amber-400">Expertise</span>
          </h3>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto font-light">
            Modern tools, frameworks, and libraries I use to build scalable digital experiences.
          </p>
        </motion.div>

        {/* Categorized Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {Object.values(skills).map((group, idx) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-6 sm:p-8 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-amber-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative space-y-6">
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3.5 border-b border-zinc-800/80 pb-4">
                    <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform">
                      <GroupIcon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-wide">
                      {group.title}
                    </h4>
                  </div>

                  {/* Skill Items Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {group.items.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="relative flex flex-col items-center justify-center p-3.5 rounded-2xl border border-zinc-800/90 bg-zinc-900/60 hover:bg-zinc-900 hover:border-amber-500/50 transition-all group/item shadow-sm"
                        >
                          <SkillIcon className="w-6 h-6 text-amber-400 group-hover/item:scale-110 transition-transform mb-2" />
                          <span className="text-xs font-semibold text-zinc-300 text-center line-clamp-1">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
