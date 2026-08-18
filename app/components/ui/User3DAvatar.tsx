"use client";

import { useRef, useState, useCallback, memo } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconSparkles,
  IconBrain,
} from "@tabler/icons-react";

interface User3DAvatarProps {
  imageSrc?: string;
  name?: string;
}

function User3DAvatar({
  imageSrc = "/code2.webp",
  name = "Fakiyat Afaq",
}: User3DAvatarProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse position motion values (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid 3D movement
  const mouseX = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 20 });

  // 3D rotations based on cursor
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [18, -18]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-18, 18]);

  // Parallax offsets for floating tech pills
  const pill1X = useTransform(mouseX, [-0.5, 0.5], [-25, 25]);
  const pill1Y = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

  const pill2X = useTransform(mouseX, [-0.5, 0.5], [30, -30]);
  const pill2Y = useTransform(mouseY, [-0.5, 0.5], [25, -25]);

  const pill3X = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const pill3Y = useTransform(mouseY, [-0.5, 0.5], [20, -20]);

  const pill4X = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
  const pill4Y = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);

  // Dynamic light sheen gradient calculation
  const sheenX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const sheenY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const currentX = (e.clientX - rect.left) / width - 0.5;
      const currentY = (e.clientY - rect.top) / height - 0.5;

      x.set(currentX);
      y.set(currentY);
    },
    [x, y],
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] aspect-[4/5] mx-auto flex items-center justify-center perspective-1000 py-6"
    >
      {/* Background Hyper Glow Ring */}
      <motion.div
        animate={{
          scale: isHovered ? 1.08 : 1,
          opacity: isHovered ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.5 }}
        className="absolute -inset-4 rounded-3xl bg-linear-to-r from-amber-500/30 via-orange-500/20 to-purple-600/30 blur-2xl pointer-events-none"
      />

      {/* Main 3D Card Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-3xl border border-zinc-700/50 bg-zinc-950/70 backdrop-blur-xl shadow-2xl overflow-visible p-4 flex flex-col items-center justify-center transition-all duration-300 transform-gpu"
      >
        {/* Dynamic Specular Lighting Layer */}
        <motion.div
          style={{
            background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 60%)`,
          }}
          className="absolute inset-0 rounded-3xl pointer-events-none z-30"
        />

        {/* 3D Inner Frame & Image */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="relative w-full h-full rounded-2xl overflow-hidden border border-amber-500/20 shadow-inner group/img"
        >
          {/* Avatar Graphic Image */}
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            priority
            className="object-cover object-center filter brightness-95 contrast-105 group-hover/img:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Ambient Lighting Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

          {/* Floating Status Badge on Avatar */}
          <div className="absolute bottom-4 left-25 right-4 w-50 flex items-center justify-between px-2 py-2 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-zinc-700/60 shadow-lg">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2 ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-zinc-200 tracking-wide">
                Frontend & AI Engineer
              </span>
            </div>
            <IconSparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          </div>
        </div>

        {/* ---------------- 3D Floating Tech Badges ---------------- */}

        {/* Badge 1: React (Top Left) */}
        <motion.div
          style={{
            x: pill1X,
            y: pill1Y,
            transform: "translateZ(75px)",
          }}
          className="absolute -top-3 -left-4 z-40 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-zinc-900/90 border border-cyan-500/40 shadow-xl backdrop-blur-md"
        >
          <IconBrandReact className="w-5 h-5 text-cyan-400 animate-[spin_8s_linear_infinite]" />
          <span className="text-xs font-semibold text-cyan-200">React 19</span>
        </motion.div>

        {/* Badge 2: Next.js (Top Right) */}
        <motion.div
          style={{
            x: pill2X,
            y: pill2Y,
            transform: "translateZ(85px)",
          }}
          className="absolute top-6 -right-5 z-40 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-zinc-900/90 border border-amber-500/40 shadow-xl backdrop-blur-md"
        >
          <IconBrandNextjs className="w-5 h-5 text-amber-400" />
          <span className="text-xs font-semibold text-amber-200">
            Next.js 16
          </span>
        </motion.div>

        {/* Badge 3: TypeScript (Bottom Left) */}
        <motion.div
          style={{
            x: pill3X,
            y: pill3Y,
            transform: "translateZ(65px)",
          }}
          className="absolute bottom-16 -left-6 z-40 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-zinc-900/90 border border-blue-500/40 shadow-xl backdrop-blur-md"
        >
          <IconBrandTypescript className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-medium text-blue-200">TypeScript</span>
        </motion.div>

        {/* Badge 4: Tailwind / AI (Bottom Right) */}
        <motion.div
          style={{
            x: pill4X,
            y: pill4Y,
            transform: "translateZ(90px)",
          }}
          className="absolute bottom-20 -right-4 z-40 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-zinc-900/90 border border-purple-500/40 shadow-xl backdrop-blur-md"
        >
          <IconBrain className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-medium text-purple-200">AI & UI</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(User3DAvatar);
