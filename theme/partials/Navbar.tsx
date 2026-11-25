"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    if (!isOpen) return;

    const mainEl = document.getElementById("main") ?? document.querySelector("main");
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mainEl?.setAttribute("inert", "");

    const getFocusables = (): HTMLElement[] => {
      if (!mobileNavRef.current) return [];
      return Array.from(
        mobileNavRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
    };

    const rafId = requestAnimationFrame(() => {
      const focusables = getFocusables();
      focusables[0]?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (e.key === "Tab") {
        const focusables = getFocusables();
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        const inside = active ? mobileNavRef.current?.contains(active) : false;

        if (e.shiftKey) {
          if (!inside || active === first) {
            e.preventDefault();
            last.focus();
          }
        } else if (!inside || active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const handleHashChange = () => {
      setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = prevOverflow;
      mainEl?.removeAttribute("inert");
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 h-[76px] bg-nav border-b-2 border-line backdrop-blur-md transition-colors">
        <div className="w-[min(1180px,calc(100%-48px))] max-w-7xl mx-auto px-2 sm:px-4 h-full flex items-center justify-between gap-2 lg:gap-6">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="font-display text-[20px] lg:text-[26px] tracking-[0.02em] lg:tracking-[0.04em] uppercase text-ink-new whitespace-nowrap hover:opacity-85 transition-opacity inline-flex items-center min-h-[44px] min-w-[44px]"
          >
            {siteContent.nav.logo}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-[22px]" aria-label="Main navigation">
            {siteConfig.navItems.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeId === targetId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative font-mono text-xs tracking-[-0.02em] lg:tracking-[0.02em] text-ink-new transition-colors py-2.5 whitespace-nowrap inline-flex items-center [@media(pointer:coarse)]:min-h-[44px] [@media(pointer:coarse)]:min-w-[44px] [@media(pointer:coarse)]:justify-center ${
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
          <div className="flex items-center gap-1.5 lg:gap-3 flex-none">
            <ThemeToggle />

            <ResumeButton className="hidden sm:inline-flex btn small resume-nav md:px-2 lg:px-3 md:tracking-normal lg:tracking-[0.04em]" />

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className="md:hidden flex-none w-[44px] h-[44px] border-[1.5px] border-line bg-paper grid place-items-center text-ink-new cursor-pointer"
            >
              {isOpen ? (
                <X className="w-5 h-5" aria-hidden="true" focusable="false" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" focusable="false" />
              )}
            </button>
          </div>
        </div>

        {/* Top Scroll Progress Bar */}
        <ScrollProgress />
      </header>

      {/* Full-Screen Mobile Menu Panel */}
      {isOpen && (
        <nav
          id="mobile-nav"
          ref={mobileNavRef}
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
