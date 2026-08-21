"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, ShieldAlert, Cpu, Sparkles, FolderGit2 } from "lucide-react";
import { resumeData } from "../../content/resumeData";
import { ResumeButton } from "../partials/ResumeButton";
import { SocialLinks } from "../partials/SocialLinks";
import { Badge } from "../components/Badge";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Neo-brutalist Background Grid Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#0F0F0F_1px,transparent_1px)] [background-size:24px_24px] opacity-15 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Copy (Left Column - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Sticker Pills Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Badge variant="yellow" size="sm" rotate="slight-left">
                ⚡ AVAILABLE FOR HIRE
              </Badge>
              <Badge variant="cyan" size="sm" rotate="slight-right">
                📍 BENGALURU, INDIA
              </Badge>
              <Badge variant="pink" size="sm" rotate="slight-left">
                🎓 BE CS (2023 - 2027)
              </Badge>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-ink leading-[1.05]"
              >
                HI, I&apos;M{" "}
                <span className="bg-neo-yellow px-3 border-4 border-ink inline-block shadow-brutal -rotate-1 hover:rotate-0 transition-transform">
                  {resumeData.personalInfo.name.toUpperCase()}
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-mono font-bold text-xl sm:text-2xl lg:text-3xl text-ink bg-neo-cyan/40 px-3 py-1 border-2 border-ink inline-self-start shadow-brutal-sm mt-2"
              >
                {resumeData.personalInfo.tagline}
              </motion.h2>
            </div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-ink-muted font-sans font-medium max-w-2xl border-l-4 border-ink pl-4 py-1 bg-white/70"
            >
              {resumeData.personalInfo.bio}
            </motion.p>

            {/* CTAs Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <ResumeButton variant="primary" size="lg" label="Download Resume" />

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, boxShadow: "6px 6px 0px 0px #0F0F0F" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-ink font-mono font-black text-base uppercase border-4 border-ink shadow-brutal hover:bg-neo-lime transition-colors"
              >
                <FolderGit2 className="w-5 h-5" />
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Quick Social Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex items-center gap-4"
            >
              <span className="font-mono text-xs font-bold uppercase text-ink-muted">CONNECT:</span>
              <SocialLinks size="sm" showLabels={true} />
            </motion.div>
          </div>

          {/* Right Column Visual Graphic Block (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md bg-neo-yellow border-4 border-ink p-6 shadow-brutal-xl"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b-4 border-ink pb-3 mb-6 bg-white p-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 border border-ink" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 border border-ink" />
                  <div className="w-3 h-3 rounded-full bg-green-500 border border-ink" />
                </div>
                <span className="font-mono text-xs font-black uppercase tracking-wider">shreyans_sys.sh</span>
                <Sparkles className="w-4 h-4 text-ink" />
              </div>

              {/* Interactive Info Cards inside Terminal */}
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="bg-white border-2 border-ink p-3 shadow-brutal-sm flex items-center justify-between">
                  <span className="flex items-center gap-2 font-bold">
                    <Code2 className="w-4 h-4 text-blue-600" /> FULL-STACK
                  </span>
                  <span className="bg-neo-cyan px-2 py-0.5 border border-ink font-bold">React / Node / FastAPI</span>
                </div>

                <div className="bg-white border-2 border-ink p-3 shadow-brutal-sm flex items-center justify-between">
                  <span className="flex items-center gap-2 font-bold">
                    <ShieldAlert className="w-4 h-4 text-red-600" /> CYBERSECURITY
                  </span>
                  <span className="bg-neo-pink text-white px-2 py-0.5 border border-ink font-bold">AES / Nmap / Metasploit</span>
                </div>

                <div className="bg-white border-2 border-ink p-3 shadow-brutal-sm flex items-center justify-between">
                  <span className="flex items-center gap-2 font-bold">
                    <Cpu className="w-4 h-4 text-green-600" /> EMBEDDED / IoT
                  </span>
                  <span className="bg-neo-lime px-2 py-0.5 border border-ink font-bold">ESP32 / Arduino / WebSerial</span>
                </div>

                <div className="bg-white border-2 border-ink p-4 shadow-brutal-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold">CURRENT DEGREE CGPA:</span>
                    <span className="font-black text-sm bg-neo-yellow px-2 border border-ink">8.45 / 10.0</span>
                  </div>
                  <div className="w-full bg-gray-200 border border-ink h-3 overflow-hidden">
                    <div className="bg-neo-pink h-full w-[84.5%]" />
                  </div>
                </div>
              </div>

              {/* Floating Sticker Stamp */}
              <motion.div
                animate={{ rotate: [ -5, 5, -5 ] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-neo-pink text-white border-4 border-ink px-4 py-2 font-mono font-black text-xs uppercase shadow-brutal rotate-6"
              >
                100% BUILDER MODE 🚀
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
