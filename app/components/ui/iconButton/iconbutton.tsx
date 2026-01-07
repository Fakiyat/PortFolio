"use client";
import React from "react";

interface IconButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  target?: string;
  rel?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  href,
  icon,
  label,
  target = "_blank",
  rel = "noopener noreferrer",
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      className="group relative w-12 h-12 rounded-full bg-linear-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 flex items-center justify-center hover:border-yellow-500/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-500/0 to-pink-500/0 group-hover:from-yellow-500/10 group-hover:to-amber-500/10 transition-all duration-300" />

      {/* Icon */}
      <span className="relative z-10 text-zinc-400 group-hover:text-yellow-400 transition-colors duration-300">
        {icon}
      </span>
    </a>
  );
};

export default IconButton;
