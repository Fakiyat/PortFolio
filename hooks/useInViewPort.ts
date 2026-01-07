// hooks/useInViewport.ts
"use client";

import { useEffect, useState, useRef } from "react";

export function useInViewport<T extends HTMLElement>(
  options = { threshold: 0.3 }
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
