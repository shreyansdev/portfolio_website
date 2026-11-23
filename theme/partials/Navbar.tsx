"use client";

import React, { useState, useEffect } from "react";
import { m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../functions/siteConfig";
import { siteContent } from "../../content/siteContent";
import { ThemeToggle } from "./ThemeToggle";
import { ResumeButton } from "./ResumeButton";
import { ScrollProgress } from "../components/anim/ScrollProgress";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const sectionIds = siteConfig.navItems.map((item) => item.href.replace("#", ""));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if ("IntersectionObserver" in window && elements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-35% 0px -55% 0px" }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 h-[76px] bg-nav border-b-2 border-line backdrop-blur-md transition-colors">
        <div className="w-[min(1180px,calc(100%-64px))] max-w-7xl mx-auto h-full flex items-center justify-between gap-6 px-4">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="font-display text-[26px] tracking-[0.04em] uppercase text-ink-new whitespace-nowrap hover:opacity-85 transition-opacity"
          >
            {siteContent.nav.logo}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-[22px]" aria-label="Main navigation">
            {siteConfig.navItems.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeId === targetId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative font-mono text-[11px] tracking-[0.02em] text-ink-new transition-colors py-2.5 ${
                    isActive ? "font-bold opacity-100" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <m.span
                      layoutId="activeNavUnderline"
                      className="absolute left-0 right-0 bottom-0 h-[3.5px] bg-ink-new -skew-x-[25deg] pointer-events-none"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Nav Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <ResumeButton className="hidden sm:inline-flex btn small resume-nav" />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="md:hidden w-[42px] h-[42px] border-[1.5px] border-line bg-paper grid place-items-center text-ink-new cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Top Scroll Progress Bar */}
        <ScrollProgress />
      </header>

      {/* Full-Screen Mobile Menu Panel */}
      {isOpen && (
        <nav
          className="fixed inset-x-0 top-[76px] bottom-0 bg-paper z-40 p-8 flex flex-col gap-3 border-t-2 border-line overflow-y-auto"
          aria-label="Mobile navigation"
        >
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-3xl text-ink-new border-b border-line py-3 uppercase hover:pl-2 transition-all"
            >
              {item.label}
            </a>
          ))}
          <ResumeButton
            onClick={() => setIsOpen(false)}
            variant="solid"
            className="mt-4 btn"
          />
        </nav>
      )}
    </>
  );
};
