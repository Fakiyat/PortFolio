"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { IconArrowUpRight, IconSparkles } from "@tabler/icons-react";
import { aboutData, personalInfo } from "@/data/data";
import AboutInfoCards from "../ui/AboutCard/AboutCard";

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function AboutSectionComplete() {
  return (
    <>
      <section
        id="about"
        className="relative w-full min-h-screen bg-black overflow-hidden py-16 lg:py-28"
      >
        {/* Giant Watermark Background Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-20">
          <h2
            className="text-[10rem] sm:text-[14rem] lg:text-[20rem] font-black tracking-tighter select-none leading-none"
            style={{
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
              color: "transparent",
            }}
          >
            ABOUT
          </h2>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 z-10">
          {/* Status Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 hover:border-amber-500/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-semibold text-zinc-300 tracking-widest uppercase">
                {aboutData.status}
              </span>
            </div>
          </motion.div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
            {/* Left Column: Story & Bio */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="space-y-8"
            >
              <motion.p variants={fadeInUpVariants} className="text-zinc-500 text-base sm:text-lg font-light tracking-wide flex items-center gap-2">
                <IconSparkles className="w-4 h-4 text-amber-400" /> {aboutData.greeting}
              </motion.p>

              <motion.div variants={fadeInUpVariants} className="space-y-3">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                  <span className="bg-linear-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                    Fakiyat <span className="text-amber-400">Afaq</span>
                  </span>
                </h2>
                <p className="text-xl sm:text-2xl font-light text-amber-200/90">
                  {aboutData.subtitle}
                </p>
              </motion.div>

              <motion.p variants={fadeInUpVariants} className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
                {aboutData.description}
              </motion.p>

              {/* Core Attributes Pills */}
              <motion.div variants={fadeInUpVariants} className="flex flex-wrap gap-3 pt-2">
                {[
                  "Clean Architecture",
                  "Responsive UI/UX",
                  "React 19 & Next.js",
                  "Performance Focused",
                  "AI Workflows",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-semibold hover:border-amber-500/40 hover:text-amber-300 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: Avatar Graphic & Dynamic Stat Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-10"
            >
              {/* Profile Image Frame */}
              <div className="relative group mx-auto">
                <div className="absolute -inset-4 bg-linear-to-r from-amber-500/20 via-orange-500/10 to-purple-600/20 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl w-72 h-72 lg:w-96 lg:h-96">
                  <Image
                    src="/Hero-logo.webp"
                    alt={aboutData.greeting}
                    width={500}
                    height={500}
                    priority
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Resume Download Badge Button */}
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex items-center justify-center w-16 h-16 rounded-full bg-zinc-950 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-zinc-950 shadow-xl hover:scale-110 transition-all duration-300 group/btn"
                  aria-label="Download Resume"
                >
                  <IconArrowUpRight className="h-7 w-7 transition-transform duration-300 group-hover/btn:rotate-45" />
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl">
                {aboutData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-4 sm:p-6 text-center space-y-1.5 hover:border-amber-500/40 transition-colors shadow-lg overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-linear-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center justify-center">
                      <span className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                        {stat.number}
                      </span>
                      {stat.suffix && (
                        <span className="text-xl sm:text-3xl font-extrabold text-amber-400 ml-0.5">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="text-[10px] text-zinc-500">
                      {stat.sublabel}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="relative w-full bg-black">
        <AboutInfoCards />
      </section>
    </>
  );
}
