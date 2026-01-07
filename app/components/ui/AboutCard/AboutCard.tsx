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
    description: "Bachelor's in Computer Science with AI specialization",
    color: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: IconCode,
    title: "Passion",
    description: "Building clean UI with maintainable, scalable code",
    color: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: IconRocket,
    title: "Focus",
    description: "Performance optimization and user experience",
    color: "from-pink-500 to-pink-600",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
  },
  {
    icon: IconUsers,
    title: "Approach",
    description: "Team collaboration with ownership mindset",
    color: "from-yellow-500 to-yellow-600",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
  },
];

export default function AboutInfoCards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const cards = gsap.utils.toArray<HTMLElement>(".info-card");

    // Set initial state
    gsap.set(cards, {
      opacity: 0,
      y: 60,
      rotateX: -15,
    });

    // Create scroll trigger animation
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

    // Floating animation

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={cardsRef} className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <div key={index} className="info-card group">
              {/* Card Container */}
              <div className="relative h-full">
                {/* Glow effect on hover */}
                <div
                  className={`absolute -inset-0.5 bg-linear-to-r ${card.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500`}
                />

                {/* Main Card */}
                <div className="relative h-full bg-linear-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 group-hover:border-zinc-700/50 transition-all duration-500 hover:-translate-y-2">
                  {/* Icon Container */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${card.iconBg} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon
                      className={`w-7 h-7 ${card.iconColor}`}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-zinc-300 transition-all duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {card.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-linear-to-br from-zinc-600 to-zinc-800 group-hover:scale-150 transition-transform duration-300" />

                  {/* Bottom gradient line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${card.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
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
