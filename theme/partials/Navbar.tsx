"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../functions/siteConfig";
import { ResumeButton } from "./ResumeButton";
import { Badge } from "../components/Badge";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "py-2 bg-canvas/95 backdrop-blur-md" : "py-4 bg-canvas"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between bg-white border-[3px] border-ink p-3 shadow-brutal">
          {/* Logo Badge */}
          <a href="#hero" className="flex items-center gap-2 group">
            <Badge variant="yellow" size="md" rotate="slight-left" className="group-hover:rotate-0 transition-transform">
              <Terminal className="w-4 h-4" />
              <span>SHREYANSDEV</span>
            </Badge>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 font-mono text-xs lg:text-sm font-bold text-ink hover:bg-neo-cyan hover:border-2 hover:border-ink hover:shadow-brutal-sm transition-all border-2 border-transparent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Area: Resume Download Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <ResumeButton variant="primary" size="sm" className="hidden sm:inline-flex" />

            {/* Mobile Hamburger Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 bg-neo-yellow border-2 border-ink shadow-brutal-sm text-ink"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="bg-neo-yellow border-[3px] border-ink p-6 shadow-brutal-lg flex flex-col gap-4">
              <div className="flex items-center justify-between border-b-2 border-ink pb-3">
                <span className="font-mono font-black text-sm uppercase">/// MENU NAVIGATION</span>
                <span className="font-mono text-xs font-bold bg-white px-2 py-0.5 border border-ink">SELECT SECTION</span>
              </div>

              <div className="flex flex-col gap-2">
                {siteConfig.navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 bg-white border-2 border-ink shadow-brutal-sm font-mono font-bold text-base hover:bg-neo-cyan transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t-2 border-ink flex flex-col gap-3">
                <ResumeButton variant="dark" size="md" className="w-full justify-center" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
