"use client";

import { useEffect, useRef } from "react";
import {
  IconSchool,
  IconCode,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const infoCards = [
  {
    icon: IconSchool,
    title: "Education",
    description: "Bachelor's in Computer Science (Artificial Intelligence)",
    color: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: IconCode,
    title: "Passion",
    description: "Building clean UI with maintainable, scalable component code",
    color: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: IconRocket,
    title: "Focus",
    description: "Performance optimization, AI workflows, and user experience",
    color: "from-pink-500 to-pink-600",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
  },
  {
    icon: IconUsers,
    title: "Approach",
    description: "Team collaboration with strong engineering ownership",
    color: "from-amber-500 to-yellow-600",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
];

export default function AboutInfoCards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Use scoped GSAP context for clean cleanup
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".info-card");

      gsap.set(cards, {
        opacity: 0,
        y: 60,
        rotateX: -15,
      });

      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          });
        },
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardsRef} className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <div key={index} className="info-card group">
              <div className="relative h-full">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${card.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500`}
                />
                <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 group-hover:border-zinc-700/50 transition-all duration-500 hover:-translate-y-2">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${card.iconBg} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon
                      className={`w-7 h-7 ${card.iconColor}`}
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 font-light">
                    {card.description}
                  </p>

                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 group-hover:scale-150 transition-transform duration-300" />

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
