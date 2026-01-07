"use client";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { aboutData } from "@/data/data";
import AboutInfoCards from "../ui/AboutCard/AboutCard";
import { useEffect, useRef } from "react";
import { initAboutAnimations } from "@/background/aboutAnimation/aboutAnimation";

export default function AboutSectionComplete() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !leftRef.current || !rightRef.current) return;
    const cleanup = initAboutAnimations({
      section: sectionRef.current,
      left: leftRef.current,
      right: rightRef.current,
    });
    return cleanup;
  }, []);
  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="relative w-full min-h-screen bg-black overflow-hidden py-10 lg:py-20"
      >
        {/* Massive Background Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="relative">
            <h2
              className="text-[10rem] sm:text-[10rem] lg:text-[15rem] font-black tracking-wide select-none leading-none"
              style={{
                WebkitTextStroke: "3px rgba(255, 255, 255, 0.07)",
                color: "transparent",
              }}
            >
              ABOUT ME
            </h2>
          </div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 z-10">
          {/* Status Badge */}
          <div className="flex justify-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800/60 hover:border-yellow-400/50 transition-colors duration-300">
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse-glow" />
              <span className="text-xs font-semibold text-zinc-300 tracking-wider uppercase">
                {aboutData.status}
              </span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <div
              ref={leftRef}
              className="space-y-8 lg:space-y-10 animate-slide-in-left"
            >
              {/* Greeting */}
              <p className="text-zinc-500 text-base sm:text-lg font-light tracking-wide">
                {aboutData.greeting}
              </p>

              {/* Title with gradient */}
              <div className="space-y-3">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1]">
                  <span className="block bg-linear-to-r from-white via-zinc-100 to-white bg-clip-text text-transparent">
                    Fakiyat <span className="text-yellow-500 ">Afaq</span>
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-zinc-400/90">
                  {aboutData.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl font-light">
                {aboutData.description}
              </p>
            </div>

            {/* Right Column - Image & Stats */}
            <div
              ref={rightRef}
              className="relative flex flex-col items-center gap-10 lg:gap-12 animate-slide-in-right"
            >
              {/* Profile Image Section */}
              <div className="relative w-full max-w-lg">
                {/* Profile Image Container */}
                <div className="relative group mx-auto w-fit">
                  {/* Glow effect */}
                  <div className="absolute -inset-6 bg-linear-to-br from-purple-600/10 via-pink-600/10 to-yellow-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  {/* Image wrapper */}
                  <div className="relative">
                    <div className="relative rounded-full overflow-hidden border-4 border-zinc-900/80 shadow-2xl shadow-black/50 w-80 h-80 lg:w-96 lg:h-96">
                      <Image
                        src={aboutData.profileImage}
                        alt={aboutData.greeting}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        priority
                      />
                    </div>

                    {/* Download CV Button - Positioned on image */}
                    <a
                      href="#"
                      className="absolute bottom-6 right-6 group/btn flex items-center justify-center w-16 h-16 rounded-full bg-black/90 backdrop-blur-sm border-2 border-yellow-400 hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 hover:scale-110"
                      aria-label="Download CV"
                    >
                      <IconArrowUpRight className="h-7 w-7 text-yellow-400 group-hover/btn:text-black transition-colors duration-300 group-hover/btn:rotate-45" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Grid - 3 Cards */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl">
                {aboutData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative bg-zinc-950/60 backdrop-blur-sm border border-zinc-800/60 rounded-2xl p-5 sm:p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Animated gradient overlay on hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 via-pink-500/0 to-yellow-400/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-yellow-400/5 transition-all duration-700" />

                    <div className="relative text-center space-y-2">
                      {/* Number with suffix */}
                      <div className="flex items-start justify-center">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-none">
                          {stat.number}
                        </span>
                        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 leading-none">
                          {stat.suffix}
                        </span>
                      </div>

                      {/* Labels */}
                      <div className="space-y-0.5">
                        <p className="text-[10px] sm:text-xs font-semibold text-zinc-400 tracking-wider uppercase leading-tight">
                          {stat.label}
                        </p>
                        <p className="text-[10px] sm:text-xs text-zinc-500 leading-tight">
                          {stat.sublabel}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes pulse-glow {
            0%,
            100% {
              opacity: 1;
              box-shadow: 0 0 8px #facc15;
            }
            50% {
              opacity: 0.7;
              box-shadow: 0 0 12px #facc15;
            }
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}</style>
      </section>

      {/* Info Cards Section - Below About */}
      <section className="relative w-full bg-black">
        <AboutInfoCards />
      </section>
    </>
  );
}
