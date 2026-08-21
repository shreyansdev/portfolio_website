"use client";

import React from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { resumeData } from "../../content/resumeData";
import { Code, Terminal, Cpu, Database, Shield, Brain } from "lucide-react";

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes("Languages")) return Code;
    if (category.includes("Web")) return Terminal;
    if (category.includes("Machine")) return Brain;
    if (category.includes("Embedded")) return Cpu;
    if (category.includes("Databases")) return Database;
    return Shield;
  };

  return (
    <AnimatedSection id="skills" className="bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <Badge variant="yellow" size="lg" rotate="slight-left" className="mb-2">
              03 /// TECH STACK & SKILLS
            </Badge>
            <h2 className="font-mono font-black text-3xl sm:text-5xl text-ink uppercase tracking-tight">
              TOOLKIT & SPECIALIZATIONS
            </h2>
          </div>
          <span className="font-mono text-sm font-bold bg-neo-cyan px-3 py-1 border-2 border-ink shadow-brutal-sm">
            {resumeData.skillCategories.flatMap(c => c.skills).length}+ VERIFIED SKILLS
          </span>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {resumeData.skillCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.category);
            
            return (
              <Card
                key={idx}
                bg="white"
                shadowSize="brutal-lg"
                stickerBadge={`0${idx + 1}`}
                stickerColor={idx % 2 === 0 ? "yellow" : "cyan"}
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b-3 border-ink">
                    <div className={`p-2.5 border-2 border-ink shadow-brutal-sm ${cat.color}`}>
                      <Icon className="w-6 h-6 text-ink" />
                    </div>
                    <h3 className="font-mono font-black text-lg sm:text-xl text-ink uppercase">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2.5 mt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <Badge
                        key={sIdx}
                        variant={sIdx % 3 === 0 ? "yellow" : sIdx % 3 === 1 ? "cyan" : "white"}
                        size="md"
                        rotate={sIdx % 4 === 0 ? "slight-left" : sIdx % 4 === 2 ? "slight-right" : "none"}
                        className="hover:bg-neo-pink hover:text-white transition-colors cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t-2 border-dashed border-ink/40 flex items-center justify-between text-xs font-mono font-bold text-ink-muted">
                  <span>CATEGORY LEVEL: ADVANCED</span>
                  <span className="text-neo-pink font-black">✓ VERIFIED</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-neo-yellow border-4 border-ink p-6 shadow-brutal-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-ink" />
            <div>
              <h4 className="font-mono font-black text-lg text-ink uppercase">CYBERSECURITY & NETWORKING PROFICIENCY</h4>
              <p className="font-sans text-sm text-ink-muted">Trained in penetration testing, vulnerability analysis, Nmap, Wireshark, Metasploit & AES zero-knowledge crypto.</p>
            </div>
          </div>
          <Badge variant="dark" size="lg" className="whitespace-nowrap">
            KALI LINUX READY 🛡️
          </Badge>
        </div>

      </div>
    </AnimatedSection>
  );
};
