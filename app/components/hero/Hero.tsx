"use client";

import { useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  IconDownload,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconTerminal2,
  IconSparkles,
} from "@tabler/icons-react";

import { personalInfo } from "@/data/data";
import { ModernStatusBadge } from "../ui/Badge/Badge";
import PillButton from "../ui/pillbutton/pillButton";
import IconButton from "../ui/iconButton/iconbutton";
import HeroBackground from "@/background/animation/HeroAnimation";
import TypingAnimation from "@/background/animation/typingAnimation";
import User3DAvatar from "../ui/User3DAvatar";
import InteractiveTerminal from "../ui/InteractiveTerminal";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const roleTitles = useMemo(
    () => [" Software Engineer", " Architect", " UI/UX Engineer", " Developer"],
    [],
  );

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden isolate bg-black flex items-center justify-center pt-24 pb-16"
    >
      {/* Background Motion Effects */}
      <HeroBackground />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center min-h-[85vh]"
        >
          {/* Left Column: Text & CTAs */}
          <div className="space-y-8">
            {/* Status Pill Badge */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3"
            >
              <ModernStatusBadge
                variant="floating"
                dotColor="orange"
                text="Available for SDE-1 / Frontend Engineer roles"
              />
            </motion.div>

            {/* Greeting Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3"
            >
              <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-400 to-transparent" />
              <p className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wider uppercase font-medium">
                Hey, I'm
                <span className="text-amber-400 font-bold flex items-center gap-1">
                  {personalInfo.name}
                  <span className="inline-block text-xl animate-[wave_1.4s_ease-in-out_infinite]">
                    👋
                  </span>
                </span>
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight">
                <span className="block text-white drop-shadow-md">
                  Frontend
                </span>
                <TypingAnimation
                  texts={roleTitles}
                  typeSpeed={0.08}
                  deleteSpeed={0.04}
                  pauseAfterType={2.5}
                  pauseAfterDelete={0.5}
                  startDelay={0.8}
                  loop
                  showCursor
                  className="block bg-linear-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                  cursorClassName="text-amber-400"
                />
              </h1>
            </motion.div>

            {/* Headline Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed font-light"
            >
              {personalInfo.headline}
            </motion.p>

            {/* Info Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl"
            >
              {[personalInfo.intro[0], personalInfo.intro[1]].map((text, i) => (
                <div
                  key={i}
                  className="group relative bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-4 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-amber-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-3">
                    <IconSparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <h3 className="text-zinc-300 text-xs sm:text-sm font-medium leading-snug">
                      {text}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <PillButton
                variant="primary"
                size="md"
                href={personalInfo.resumeUrl}
                icon={<IconDownload className="h-5 w-5" />}
                iconPosition="left"
              >
                My Resume
              </PillButton>

              <PillButton
                variant="secondary"
                size="md"
                href="#contact"
                icon={<IconMail className="h-5 w-5" />}
                iconPosition="left"
              >
                Contact Me
              </PillButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-2"
            >
              <IconButton
                href={personalInfo.linkedin}
                icon={<IconBrandLinkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
              <IconButton
                href={personalInfo.github}
                icon={<IconBrandGithub className="h-5 w-5" />}
                label="GitHub"
              />
              <IconButton
                href={`mailto:${personalInfo.email}`}
                icon={<IconMail className="h-5 w-5" />}
                label="Email"
                target="_self"
              />
            </motion.div>
          </div>

          {/* Right Column: 3D Mouse Tracking Avatar */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            <User3DAvatar imageSrc="/code2.webp" name={personalInfo.name} />
          </motion.div>
        </motion.div>
      </div>

      {/* Terminal CLI Modal */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </section>
  );
}
