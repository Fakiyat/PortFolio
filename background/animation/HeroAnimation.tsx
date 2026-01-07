import { memo, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function FloatingCodeSyntax3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Screen size check
  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      setShouldRender(isLargeScreen);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Idle detection
    const idleTimer = setTimeout(() => {
      setIsIdle(true);
    }, 1500);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      clearTimeout(idleTimer);
    };
  }, []);

  // Viewport detection - only animate when hero section is visible
  useEffect(() => {
    if (!containerRef.current || !shouldRender || !isIdle) return;

    // Create ScrollTrigger to detect when hero section is in view
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => setIsInView(true),
      onLeave: () => setIsInView(false),
      onEnterBack: () => setIsInView(true),
      onLeaveBack: () => setIsInView(false),
    });

    return () => {
      trigger.kill();
    };
  }, [shouldRender, isIdle]);

  // Main animation logic
  useEffect(() => {
    if (!containerRef.current || !shouldRender || !isIdle || !isInView) return;

    const ctx = gsap.context(() => {
      const dataLines = gsap.utils.toArray<HTMLElement>(".data-line-vertical");
      const syntaxSymbols = gsap.utils.toArray<HTMLElement>(".syntax-symbol");
      const container = containerRef.current;

      // Mouse parallax interaction
      const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        gsap.to(container, {
          rotateY: x * 20,
          rotateX: -y * 15,
          duration: 1.5,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Initial setup
      gsap.set(dataLines, {
        scaleY: 0,
        opacity: 0,
      });

      gsap.set(syntaxSymbols, {
        opacity: 0,
        y: -100,
      });

      // Entrance animation
      const masterTL = gsap.timeline();

      // Vertical lines appear first
      masterTL.to(dataLines, {
        scaleY: 1,
        opacity: 0.6,
        duration: 1.2,
        stagger: 0.08,
        ease: "power2.out",
      });

      // Syntax symbols rain down
      masterTL.to(
        syntaxSymbols,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.02,
        },
        "-=0.5"
      );

      // Flowing data lines
      dataLines.forEach((line, i) => {
        gsap.to(line, {
          opacity: gsap.utils.random(0.3, 0.7),
          scaleY: gsap.utils.random(0.8, 1.2),
          duration: gsap.utils.random(2, 4),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

      // Falling syntax symbols
      syntaxSymbols.forEach((symbol) => {
        const tl = gsap.timeline({
          repeat: -1,
          delay: gsap.utils.random(0, 3),
        });

        tl.fromTo(
          symbol,
          {
            y: -100,
            opacity: 0,
          },
          {
            y: 800,
            opacity: gsap.utils.random(0.4, 0.9),
            duration: gsap.utils.random(5, 9),
            ease: "none",
          }
        ).to(symbol, {
          opacity: 0,
          duration: 0.5,
        });
      });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, containerRef);

    return () => {
      ctx.revert(); // Clean up all animations and event listeners
    };
  }, [shouldRender, isIdle, isInView]);

  // Don't render if conditions not met
  if (!shouldRender || !isIdle) return null;

  // Code syntax symbols to display
  const syntaxSymbols = [
    "<>",
    "</",
    "/>",
    "{ }",
    "( )",
    "[ ]",
    "=>",
    "===",
    "!==",
    "&&",
    "||",
    "!=",
    "++",
    "--",
    "+=",
    "-=",
    "*=",
    "/=",
    "let",
    "const",
    "var",
    "if",
    "else",
    "for",
    "=>",
    "?",
    ":",
    ";",
    ".",
    ",",
    "==",
    "!=",
    "<",
    ">",
    "<=",
    ">=",
    "!",
    "&",
    "|",
    "^",
    "~",
    "%",
    "{}",
    "()",
    "[]",
    "``",
    "''",
    '""',
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 40% 30%, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at 60% 70%, rgba(250, 204, 21, 0.06) 0%, transparent 50%)",
        }}
      />

      <div
        style={{
          perspective: "2000px",
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Vertical data lines */}
          {Array.from({ length: 20 }).map((_, i) => {
            const x = (i - 10) * 70;
            const height = gsap.utils.random(60, 100);

            return (
              <div
                key={`line-${i}`}
                className="data-line-vertical"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translateX(${x}px) translateZ(-150px)`,
                  width: "1px",
                  height: `${height}%`,
                  background:
                    i % 3 === 0
                      ? "linear-gradient(180deg, transparent 0%, rgba(250, 204, 21, 0.4) 50%, transparent 100%)"
                      : i % 3 === 1
                      ? "linear-gradient(180deg, transparent 0%, rgba(168, 85, 247, 0.4) 50%, transparent 100%)"
                      : "linear-gradient(180deg, transparent 0%, rgba(236, 72, 153, 0.4) 50%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
            );
          })}

          {/* Falling syntax symbols */}
          {syntaxSymbols.map((symbol, i) => {
            const x = gsap.utils.random(-600, 600);
            const z = gsap.utils.random(-200, 100);
            const fontSize = gsap.utils.random(14, 24);
            const isOperator = [
              "<>",
              "</>",
              "=>",
              "===",
              "!==",
              "&&",
              "||",
            ].includes(symbol);
            const isKeyword = [
              "let",
              "const",
              "var",
              "if",
              "else",
              "for",
            ].includes(symbol);

            return (
              <div
                key={`syntax-${i}`}
                className="syntax-symbol"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "-100px",
                  transform: `translateX(calc(-50% + ${x}px)) translateZ(${z}px)`,
                  fontFamily: "'Fira Code', 'Courier New', monospace",
                  fontSize: `${fontSize}px`,
                  fontWeight: isKeyword ? "600" : "bold",
                  color: isOperator
                    ? "rgba(250, 204, 21, 0.6)"
                    : isKeyword
                    ? "rgba(168, 85, 247, 0.6)"
                    : "rgba(236, 72, 153, 0.6)",
                  textShadow: isOperator
                    ? "0 0 10px rgba(250, 204, 21, 0.4)"
                    : isKeyword
                    ? "0 0 10px rgba(168, 85, 247, 0.4)"
                    : "0 0 10px rgba(236, 72, 153, 0.4)",
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {symbol}
              </div>
            );
          })}

          {/* Central energy glow */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%) translateZ(-200px)",
              width: "350px",
              height: "350px",
              background:
                "radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(50px)",
              animation: "energy-pulse 5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes energy-pulse {
          0%,
          100% {
            transform: translate(-50%, -50%) translateZ(-200px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) translateZ(-200px) scale(1.3);
            opacity: 0.6;
          }
        }

        @media (max-width: 1024px) {
          .data-line-vertical,
          .syntax-symbol {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
export default memo(FloatingCodeSyntax3D);
