"use client";

import { Ski, skills } from "@/data/data";
import Image from "next/image";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-16 lg:py-24 "
    >
      <Image
        src="/background.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />
      {/* Background Text */}

      <div className="relative max-w-auto mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="flex justify-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800/60 hover:border-yellow-400/50 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse-glow" />
            <span className="text-xs font-semibold text-zinc-300 tracking-widest uppercase">
              Skills
            </span>
          </div>
        </div>
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-zinc-400 tracking-widest uppercase text-xs mb-3">
            What I work with
          </p>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">
            Technical <span className="text-yellow-400">Skills</span>
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {Object.values(skills).map((group, idx) => (
            <div
              key={idx}
              className="group relative min-w-[320px] sm:min-w-[380px] lg:min-w-[420px] bg-zinc-950/80 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-6 lg:p-8 hover:border-yellow-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-400/5"
            >
              {/* Gradient hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/0 via-pink-500/0 to-yellow-400/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-yellow-400/5 transition-all duration-700" />

              <div className="relative">
                {/* Card Title */}
                <div className="flex items-center gap-3 mb-6">
                  <group.icon className="w-8 h-9 text-yellow-400" />
                  <h4 className="text-lg font-semibold text-white">
                    {group.title}
                  </h4>
                </div>

                {/* Skill Bars */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative flex flex-col items-center tracking-tighter gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/20"
                    >
                      {/* Hover gradient overlay */}
                      <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-amber-400/5 to-orange-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Icon */}
                      <skill.icon className="relative h-5 w-5 text-amber-400 transition-transform duration-300 group-hover:scale-110" />

                      {/* Skill Name */}
                      <span className="relative text-sm font-medium text-zinc-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations (reuse About style) */}
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

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
