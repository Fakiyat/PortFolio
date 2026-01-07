"use client";

import { IconCalendar } from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/data/data";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    /* -------------------------------
       Scroll Progress Line
    -------------------------------- */
    gsap.fromTo(
      progressRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );

    /* -------------------------------
       Active Dot Highlight Sync
    -------------------------------- */
    dotRefs.current.forEach((dot, index) => {
      ScrollTrigger.create({
        trigger: dot,
        start: "top center",
        end: "bottom center",
        onEnter: () => activateDot(index),
        onEnterBack: () => activateDot(index),
      });
    });

    function activateDot(activeIndex: number) {
      dotRefs.current.forEach((dot, i) => {
        gsap.to(dot, {
          scale: i === activeIndex ? 1.6 : 1,
          backgroundColor:
            i === activeIndex ? "#fbbf24" : "rgba(251,191,36,0.4)",
          boxShadow:
            i === activeIndex ? "0 0 18px rgba(251,191,36,0.7)" : "none",
          duration: 0.35,
          ease: "power3.out",
        });
      });
    }

    /* -------------------------------
       “Currently Here” Pulse (First Dot)
    -------------------------------- */
    gsap.to(dotRefs.current[0], {
      scale: 1.9,
      repeat: -1,
      yoyo: true,
      duration: 1.4,
      ease: "power1.inOut",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-black py-28 px-6 sm:px-8 lg:px-16 z-10"
    >
      {/* Massive Background Text */}

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
        {/* LEFT (STICKY) */}
        <div>
          <div className="lg:sticky lg:top-28 space-y-6">
            <div className="flex  mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800/60 hover:border-yellow-400/50 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse-glow" />
                <span className="text-xs font-semibold text-zinc-300 tracking-wider uppercase">
                  Experience
                </span>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Work{" "}
              <span className="text-yellow-400 tracking-wide ">History</span>
            </h2>

            <p className="max-w-md text-gray-400 leading-relaxed">
              A timeline of my professional journey building frontend systems,
              SaaS platforms, and automation-driven products.
            </p>
          </div>
        </div>

        {/* RIGHT (TIMELINE) */}
        <div className="relative">
          {/* Base Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-zinc-800" />

          {/* Progress Line */}
          <div
            ref={progressRef}
            className="absolute left-4 top-0 w-px bg-linear-to-b from-amber-400 to-orange-500"
          />

          <div className="space-y-24">
            {experience.map((item, index) => (
              <div key={item.id} className="relative pl-16">
                {/* Dot */}
                <div className="absolute left-1 top-5">
                  <div className="relative flex h-6 w-6 items-center justify-center">
                    <div
                      ref={(el) => {
                        if (el) dotRefs.current[index] = el;
                      }}
                      className="h-3 w-3 rounded-full bg-amber-400/40"
                    />
                  </div>
                </div>

                {/* Card */}
                <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-sm p-8 transition-all duration-500 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/15">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-amber-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Header */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.role}
                      </h3>
                      <p className="text-amber-400 font-medium">
                        {item.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-1 text-sm text-gray-400">
                      <IconCalendar size={16} />
                      {item.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Responsibilities */}
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {item.responsibilities.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span className="text-sm text-gray-400">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
