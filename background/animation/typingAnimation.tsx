"use client";
import { useEffect, useRef, memo } from "react";
import gsap from "gsap";

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
 * Custom hook for typing animation logic
 */
function useTypingAnimation({
  texts,
  typeSpeed = 0.08,
  deleteSpeed = 0.04,
  pauseAfterType = 2,
  pauseAfterDelete = 0.5,
  startDelay = 0.5,
  loop = true,
  onTypeComplete,
}: Omit<
  TypingAnimationProps,
  "className" | "showCursor" | "cursorChar" | "cursorClassName"
>) {
  const textRef = useRef<HTMLSpanElement>(null);
  const controls = useRef<{ pause: () => void; play: () => void }>({
    pause: () => {},
    play: () => {},
  });

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const typeNextCharacter = () => {
      const currentText = texts[currentTextIndex];

      if (!isDeleting) {
        // Typing mode
        if (currentCharIndex < currentText.length) {
          element.textContent = currentText.substring(0, currentCharIndex + 1);
          currentCharIndex++;
          timeoutId = setTimeout(typeNextCharacter, typeSpeed * 1000);
        } else {
          // Finished typing, pause then start deleting
          onTypeComplete?.(currentText);
          timeoutId = setTimeout(() => {
            isDeleting = true;
            typeNextCharacter();
          }, pauseAfterType * 1000);
        }
      } else {
        // Deleting mode
        if (currentCharIndex > 0) {
          currentCharIndex--;
          element.textContent = currentText.substring(0, currentCharIndex);
          timeoutId = setTimeout(typeNextCharacter, deleteSpeed * 1000);
        } else {
          // Finished deleting, move to next text
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          if (currentTextIndex === 0 && !loop) {
            return;
          }
          isDeleting = false;
          timeoutId = setTimeout(typeNextCharacter, pauseAfterDelete * 1000);
        }
      }
    };

    timeoutId = setTimeout(typeNextCharacter, startDelay * 1000);

    controls.current = {
      pause: () => clearTimeout(timeoutId),
      play: () => typeNextCharacter(),
    };

    return () => clearTimeout(timeoutId);
  }, [
    texts,
    typeSpeed,
    deleteSpeed,
    pauseAfterType,
    pauseAfterDelete,
    startDelay,
    loop,
    onTypeComplete,
  ]);

  return { textRef, controls: controls.current };
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
function TypingAnimationComponent({
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
  const { textRef } = useTypingAnimation({
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
export default memo(TypingAnimationComponent);
