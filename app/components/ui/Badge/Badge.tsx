"use client";

interface ModernStatusBadgeProps {
  variant?: "neomorphic" | "glass" | "neon" | "luxury" | "floating";
  text?: string;
  dotColor?: "green" | "blue" | "purple" | "orange" | "red" | "pink";
  showDot?: boolean;
}

export function ModernStatusBadge({
  variant = "floating",
  text = "available for work",
  dotColor = "green",
  showDot = true,
}: ModernStatusBadgeProps) {
  // Color configurations for the dot
  const dotColors = {
    green: {
      ping: "bg-emerald-400",
      gradient: "from-green-400 via-emerald-400 to-green-500",
      shadow: "shadow-green-500/50",
      glow: "from-green-600/20 via-emerald-500/20 to-green-600/20",
      border: "border-green-500/30",
      neonGlow: "from-green-500 to-emerald-400",
      neonShadow: "shadow-[0_0_20px_rgba(34,197,94,0.8)]",
    },
    blue: {
      ping: "bg-blue-400",
      gradient: "from-blue-400 via-cyan-400 to-blue-500",
      shadow: "shadow-blue-500/50",
      glow: "from-blue-600/20 via-cyan-500/20 to-blue-600/20",
      border: "border-blue-500/30",
      neonGlow: "from-blue-500 to-cyan-400",
      neonShadow: "shadow-[0_0_20px_rgba(59,130,246,0.8)]",
    },
    purple: {
      ping: "bg-purple-400",
      gradient: "from-purple-400 via-violet-400 to-purple-500",
      shadow: "shadow-purple-500/50",
      glow: "from-purple-600/20 via-violet-500/20 to-purple-600/20",
      border: "border-purple-500/30",
      neonGlow: "from-purple-500 to-violet-400",
      neonShadow: "shadow-[0_0_20px_rgba(168,85,247,0.8)]",
    },
    orange: {
      ping: "bg-orange-400",
      gradient: "from-orange-400 via-amber-400 to-orange-500",
      shadow: "shadow-orange-500/50",
      glow: "from-orange-600/20 via-amber-500/20 to-orange-600/20",
      border: "border-orange-500/30",
      neonGlow: "from-orange-500 to-amber-400",
      neonShadow: "shadow-[0_0_20px_rgba(249,115,22,0.8)]",
    },
    red: {
      ping: "bg-red-400",
      gradient: "from-red-400 via-rose-400 to-red-500",
      shadow: "shadow-red-500/50",
      glow: "from-red-600/20 via-rose-500/20 to-red-600/20",
      border: "border-red-500/30",
      neonGlow: "from-red-500 to-rose-400",
      neonShadow: "shadow-[0_0_20px_rgba(239,68,68,0.8)]",
    },
    pink: {
      ping: "bg-pink-400",
      gradient: "from-pink-400 via-rose-400 to-pink-500",
      shadow: "shadow-pink-500/50",
      glow: "from-pink-600/20 via-rose-500/20 to-pink-600/20",
      border: "border-pink-500/30",
      neonGlow: "from-pink-500 to-rose-400",
      neonShadow: "shadow-[0_0_20px_rgba(236,72,153,0.8)]",
    },
  };

  const colors = dotColors[dotColor];

  return (
    <>
      {variant === "neomorphic" && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 group">
          <div className="relative inline-flex items-center gap-3 bg-linear-to-br from-zinc-900 via-black to-zinc-950 px-6 py-3 rounded-full border border-zinc-800/30 shadow-2xl shadow-green-500/5 backdrop-blur-xl hover:shadow-green-500/20 transition-all duration-500">
            {showDot && (
              <span className="relative flex h-3 w-3">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors.ping} opacity-75`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 bg-linear-to-tr ${colors.gradient} shadow-lg ${colors.shadow}`}
                ></span>
              </span>
            )}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-100 to-white text-[13px] font-medium tracking-wide group-hover:from-green-200 group-hover:via-emerald-100 group-hover:to-green-200 transition-all duration-300">
              {text}
            </span>
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer"></div>
          </div>
        </div>
      )}

      {variant === "glass" && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
          <div className="relative group">
            <div
              className={`absolute -inset-1 bg-linear-to-r ${colors.neonGlow} rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
            ></div>
            <div className="relative inline-flex items-center gap-3 bg-zinc-950/80 backdrop-blur-2xl px-6 py-3 rounded-full border border-white/10 shadow-xl">
              {showDot && (
                <div className="relative flex items-center justify-center">
                  <div
                    className={`absolute w-6 h-6 rounded-full border-2 ${colors.border} animate-ping`}
                  ></div>
                  <div
                    className={`absolute w-4 h-4 rounded-full bg-${dotColor}-500/20 blur-sm`}
                  ></div>
                  <div
                    className={`relative w-2.5 h-2.5 rounded-full bg-linear-to-tr ${colors.gradient} shadow-lg ${colors.shadow}`}
                  ></div>
                </div>
              )}
              <span className="text-white/90 text-[13px] font-medium tracking-[0.02em]">
                {text}
              </span>
            </div>
          </div>
        </div>
      )}

      {variant === "neon" && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
          <div className="relative group cursor-pointer">
            <div
              className={`absolute -inset-2 bg-linear-to-r ${colors.neonGlow} rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300`}
            ></div>
            <div
              className={`relative inline-flex items-center gap-3 bg-black px-6 py-3 rounded-full border-2 border-${dotColor}-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)] group-hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] group-hover:border-${dotColor}-400 transition-all duration-300`}
            >
              {showDot && (
                <div className="relative">
                  <div
                    className={`absolute inset-0 w-3 h-3 rounded-full bg-${dotColor}-400 blur-md animate-pulse`}
                  ></div>
                  <div
                    className={`relative w-3 h-3 rounded-full bg-linear-to-br ${colors.gradient} ${colors.neonShadow}`}
                  ></div>
                </div>
              )}
              <span
                className={`text-white text-[13px] font-semibold tracking-wider uppercase group-hover:text-${dotColor}-300 transition-colors duration-300`}
              >
                {text}
              </span>
            </div>
          </div>
        </div>
      )}

      {variant === "luxury" && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
          <div className="group relative">
            <div className="absolute -inset-px bg-linear-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700"></div>
            <div className="relative inline-flex items-center gap-3 bg-zinc-950 px-7 py-3.5 rounded-full border border-zinc-800 shadow-2xl backdrop-blur-md group-hover:border-zinc-700 transition-all duration-500">
              {showDot && (
                <div className="relative">
                  <div
                    className={`w-2 h-2 rounded-full bg-${dotColor}-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse`}
                  ></div>
                </div>
              )}
              <span className="text-zinc-300 text-[12px] font-light tracking-[0.08em] uppercase group-hover:text-zinc-100 transition-colors duration-300">
                {text}
              </span>
            </div>
          </div>
        </div>
      )}

      {variant === "floating" && (
        <div className="absolute top-7 left-1/2 -translate-x-1/2 z-50">
          <div className="relative group animate-float">
            <div
              className={`absolute -inset-3 bg-linear-to-r ${colors.glow} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
            ></div>
            <div
              className={`absolute -inset-3 bg-linear-to-r ${colors.glow.replace(
                "/20",
                "/30"
              )} rounded-full blur-lg`}
            ></div>
            <div className="relative inline-flex items-center gap-4 bg-linear-to-br from-zinc-900/90 via-black/90 to-zinc-950/90 backdrop-blur-xl px-8 py-2.5 rounded-full border border-purple-900 shadow-[0_8px_32px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500 min-w-2.5 mx-auto">
              {showDot && (
                <div className="relative flex items-center justify-center w-3 h-3">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full ${colors.ping} opacity-75 animate-ping`}
                  ></span>
                  <span
                    className={`absolute inline-flex h-4 w-4 rounded-full border-2 ${colors.border} animate-spin-slow`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-3 w-3 bg-linear-to-tr ${colors.gradient} ${colors.neonShadow}`}
                  ></span>
                </div>
              )}
              <span className="text-white text-[13px] font-medium tracking-wide">
                {text}
              </span>
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </>
  );
}
