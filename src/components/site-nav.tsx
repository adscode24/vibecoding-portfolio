"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { Close, Menu } from "@/components/icons";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Header border/shadow once the page has moved.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for whichever section is currently in view.
  useEffect(() => {
    const sections = siteConfig.nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (hit) setActiveId(hit.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu after a tap anywhere.
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/85 backdrop-blur-md transition-[border-color,box-shadow] ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight"
        >
          {siteConfig.name}
          <span className="ml-1.5 text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeId === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer noopener"
          className="hidden rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-white md:inline-flex"
        >
          GitHub
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
        >
          {menuOpen ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <nav className="border-t border-line bg-white md:hidden">
          <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-line py-3 text-sm text-muted last:border-0 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3 rounded-full border border-line px-4 py-2.5 text-center text-sm font-medium"
            >
              GitHub
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
