"use client";

import Link from "next/link";
import {
  IconUser,
  IconCode,
  IconBriefcase,
  IconMail,
  IconHome2,
  IconTimeline,
} from "@tabler/icons-react";
import { memo, useEffect, useRef, useState } from "react";

const navItems = [
  { id: "home", icon: IconHome2 },
  { id: "about", icon: IconUser },
  { id: "skills", icon: IconCode },
  { id: "projects", icon: IconBriefcase },
  { id: "experience", icon: IconTimeline },
  { id: "contact", icon: IconMail },
];
function Navbar() {
  const [active, setActive] = useState("home");

  const activeRef = useRef("home");

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;

          if (activeRef.current !== id) {
            activeRef.current = id;
            setActive(id);

            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.01,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        z-50
        bg-black/50 backdrop-blur-2xl
        border border-white/20
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        rounded-full
        px-1 py-1
      "
    >
      <ul className="flex items-center gap-6">
        {navItems.map(({ id, icon: Icon }) => (
          <li key={id} className="relative group">
            <Link
              href={`#${id}`}
              className={`
                flex items-center justify-center
                w-12 h-12 rounded-full
                text-white/70
                hover:text-amber-500
                hover:bg-yellow-300/20
                transition-all duration-300
              ${
                active === id
                  ? "bg-yellow-300/20 text-white"
                  : "text-white/60 hover:bg-white/10"
              }
              
                `}
            >
              <Icon size={22} />
            </Link>

            {/* Active Indicator (static version like image) */}
            <span
              className="
                absolute -bottom-2 left-1/2 -translate-x-1/2
                w-2 h-2 rounded-full
                bg-amber-500
                opacity-0 group-hover:opacity-100
                transition
              "
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default memo(Navbar);
