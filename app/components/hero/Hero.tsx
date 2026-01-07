"use client";
import Image from "next/image";
import {
  IconDownload,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

import { aboutData, personalInfo } from "@/data/data";
import { ModernStatusBadge } from "../ui/Badge/Badge";
import PillButton from "../ui/pillbutton/pillButton";
import IconButton from "../ui/iconButton/iconbutton";
import HeroBackground from "@/background/animation/HeroAnimation";

import { useInViewport } from "@/hooks/useInViewPort";
import { useMemo } from "react";
import TypingAnimation from "@/background/animation/typingAnimation";

export default function HeroSection() {
  const { ref, inView } = useInViewport<HTMLDivElement>();

  const roleTitles = useMemo(
    () => [" Developer", " Engineer", " UI Engineer", " Web Developer"],
    []
  );

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden isolate bg-black"
    >
      {inView && <HeroBackground />}

      <div className="absolute inset-0" />

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-32">
        <ModernStatusBadge
          variant="floating"
          dotColor="orange"
          text="Available for SDE-1 / Frontend Engineer roles"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.8fr] gap-13 items-center min-h-screen">
          {/* Left Content */}
          <div className="relative z-20 space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 animate-fade-in">
              <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-400 to-transparent" />

              <p className="flex items-center gap-1 text-gray-400 text-sm tracking-wider uppercase font-light">
                Hey, I'm
                <span className="flex items-center gap-1 text-amber-400">
                  {personalInfo.name}
                  <span className="inline-block text-2xl animate-[wave_1.4s_ease-in-out_infinite]">
                    👋
                  </span>
                </span>
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-33 tracking-normal">
              <span className="block text-white animate-slide-up">
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
                className="block bg-linear-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(251,191,36,0.35)]"
                cursorClassName="text-amber-400"
              />
            </h1>

            {/* Subheading */}
            <p className="text-gray-400 text-lg max-w-md leading-relaxed animate-fade-in animation-delay-400">
              {personalInfo.headline}
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-6 pt-8 max-w-3xl animate-fade-in animation-delay-600">
              {[personalInfo.intro[0], personalInfo.intro[1]].map((text, i) => (
                <div
                  key={i}
                  className="group relative bg-linear-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative text-center">
                    <h3 className="text-amber-400 text-sm font-medium">
                      {text}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 animate-fade-in animation-delay-800">
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
                href={`#contact`}
                icon={<IconMail className="h-5 w-5" />}
                iconPosition="left"
              >
                Contact Me
              </PillButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 animate-fade-in animation-delay-900">
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
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex flex-col items-center gap-10 lg:gap-12 animate-slide-in-right">
            <div className="relative w-full max-w-lg">
              <div className="relative group mx-auto w-fit">
                {/* Golden Glow */}
                <div className="absolute -inset-6 bg-linear-to-br from-amber-500/20 via-orange-400/20 to-yellow-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="relative">
                  <div className="relative rounded-full overflow-hidden border-4 border-zinc-900/80 shadow-2xl shadow-black/50 w-70 h-90 lg:w-100 lg:h-120">
                    <Image
                      src={aboutData.profileImage}
                      alt={aboutData.greeting}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
