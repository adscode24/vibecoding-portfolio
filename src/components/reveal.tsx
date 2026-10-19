"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in milliseconds, for staggering siblings. */
  delay?: number;
  className?: string;
};

type Visibility = "shown" | "hidden";

/**
 * Fades + lifts its children into view the first time they scroll on screen.
 * Pure IntersectionObserver, no animation library.
 *
 * Content is server-rendered as visible. The hidden state is only applied
 * after hydration, and only to elements that start below the fold — so with
 * JavaScript disabled, during a print, or in a static screenshot, nothing is
 * ever invisible. Content already on screen never shifts.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visibility, setVisibility] = useState<Visibility>("shown");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Anything already within (or just below) the viewport stays put.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) return;

    setVisibility("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisibility("shown");
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      data-reveal={visibility}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
        visibility === "hidden"
          ? "translate-y-5 opacity-0"
          : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
