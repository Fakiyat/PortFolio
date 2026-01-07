"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Always reset scroll on hard refresh
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return null;
}
