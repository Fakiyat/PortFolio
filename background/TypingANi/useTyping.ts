"use client";
import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

interface UseTypingAnimationOptions {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  startDelay?: number;
  loop?: boolean;
  onTypeComplete?: (text: string) => void;
}

/**
 * Custom hook for typing animation using GSAP
 * Handles full delete mode - completely removes text before typing next phrase
 */
export function useTypingAnimation({
  texts,
  typeSpeed = 0.08,
  deleteSpeed = 0.04,
  pauseAfterType = 2,
  pauseAfterDelete = 0.5,
  startDelay = 0.5,
  loop = true,
  onTypeComplete,
}: UseTypingAnimationOptions) {
  const textRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Memoize the animation builder to prevent recreating on every render
  const buildAnimation = useCallback(() => {
    if (!textRef.current || texts.length === 0) return null;

    const element = textRef.current;
    const tl = gsap.timeline({
      repeat: loop ? -1 : 0,
      paused: false,
    });

    // Initial delay before starting
    if (startDelay > 0) {
      tl.to({}, { duration: startDelay });
    }

    texts.forEach((text, textIndex) => {
      const chars = text.split("");

      // === TYPE CHARACTERS ===
      chars.forEach((char, i) => {
        // Natural speed variation (±30%)
        const speed = gsap.utils.random(typeSpeed * 0.7, typeSpeed * 1.3);

        tl.to(
          element,
          {
            textContent: chars.slice(0, i + 1).join(""),
            duration: speed,
            ease: "none",
          },
          `+=${i === 0 ? 0 : speed * 0.1}` // Small delay between characters
        );

        // Extra pause after punctuation for natural feel
        if (/[.,!?;:]/.test(char)) {
          tl.to({}, { duration: 0.15 });
        }
      });

      // === PAUSE AFTER TYPING ===
      tl.to({}, { duration: pauseAfterType });

      // === CALLBACK ===
      if (onTypeComplete) {
        tl.call(() => onTypeComplete(text));
      }

      // === DELETE ALL CHARACTERS (FULL DELETE MODE) ===
      // Only delete if not the last text OR if looping
      const shouldDelete = textIndex < texts.length - 1 || loop;

      if (shouldDelete) {
        for (let i = chars.length - 1; i >= 0; i--) {
          const speed = gsap.utils.random(deleteSpeed * 0.8, deleteSpeed * 1.2);

          tl.to(element, {
            textContent: chars.slice(0, i).join(""),
            duration: speed,
            ease: "none",
          });
        }

        // === PAUSE BEFORE NEXT TEXT ===
        tl.to({}, { duration: pauseAfterDelete });
      }
    });

    return tl;
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

  useEffect(() => {
    // Build and store the timeline
    const timeline = buildAnimation();
    timelineRef.current = timeline;

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      // Clear text content on unmount
      if (textRef.current) {
        textRef.current.textContent = "";
      }
    };
  }, [buildAnimation]);

  // Control methods
  const controls = {
    play: useCallback(() => {
      timelineRef.current?.play();
    }, []),
    pause: useCallback(() => {
      timelineRef.current?.pause();
    }, []),
    restart: useCallback(() => {
      timelineRef.current?.restart();
    }, []),
    kill: useCallback(() => {
      timelineRef.current?.kill();
    }, []),
  };

  return { textRef, controls };
}
