"use client";
import { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { useTypingAnimation } from "./useTyping";

interface TypingAnimationProps {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  startDelay?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  cursorChar?: string;
  cursorClassName?: string;
  onTypeComplete?: (text: string) => void;
}

/**
 * TypingAnimation Component
 *
 * A professional typing animation component with:
 * - Full delete mode (completely removes text before typing next)
 * - Natural typing rhythm with speed variations
 * - Optional animated cursor
 * - Optimized performance with memoization
 *
 * @example
 * <TypingAnimation
 *   texts={["Frontend Developer", "UI/UX Designer", "Web Developer"]}
 *   typeSpeed={0.08}
 *   deleteSpeed={0.04}
 *   pauseAfterType={2}
 *   className="text-6xl font-bold"
 *   showCursor={true}
 * />
 */
function TypingContactComponent({
  texts,
  typeSpeed = 0.08,
  deleteSpeed = 0.04,
  pauseAfterType = 2,
  pauseAfterDelete = 0.5,
  startDelay = 0.5,
  loop = true,
  className = "",
  showCursor = true,
  cursorChar = "|",
  cursorClassName = "",
  onTypeComplete,
}: TypingAnimationProps) {
  const { textRef, controls } = useTypingAnimation({
    texts,
    typeSpeed,
    deleteSpeed,
    pauseAfterType,
    pauseAfterDelete,
    startDelay,
    loop,
    onTypeComplete,
  });

  const cursorRef = useRef<HTMLSpanElement>(null);

  // Setup cursor animation
  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;

    const cursor = cursorRef.current;

    // Animate cursor blinking
    const cursorAnimation = gsap.to(cursor, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "steps(1)",
    });

    return () => {
      cursorAnimation.kill();
    };
  }, [showCursor]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={textRef} className={className}></span>
      {showCursor && (
        <span
          ref={cursorRef}
          className={`inline-block ml-1 ${cursorClassName}`}
          style={{
            width: "3px",
            height: "1em",
            background: "currentColor",
            transform: "translateY(0.1em)",
          }}
          aria-hidden="true"
        >
          {cursorChar === "|" ? "" : cursorChar}
        </span>
      )}
    </span>
  );
}

// Memoize component to prevent unnecessary re-renders
export default memo(TypingContactComponent);
