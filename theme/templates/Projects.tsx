"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../components/AnimatedSection";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { resumeData, ProjectItem } from "../../content/resumeData";
import { siteConfig } from "../functions/siteConfig";
import { Github, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Terminal, Cpu } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", "AI / Machine Learning", "Web & Security", "IoT / Hardware", "Embedded & Tools"];

  const filteredProjects = selectedCategory === "ALL"
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    if (category.includes("AI")) return Sparkles;
    if (category.includes("Security")) return ShieldCheck;
    if (category.includes("IoT")) return Cpu;
    return Terminal;
  };

  return (
    <AnimatedSection id="projects" className="bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <Badge variant="cyan" size="lg" rotate="slight-left" className="mb-2">
              05 /// FEATURED PROJECTS
            </Badge>
            <h2 className="font-mono font-black text-3xl sm:text-5xl text-ink uppercase tracking-tight">
              PROVEN BUILDS & SYSTEMS
            </h2>
          </div>
          <span className="font-mono text-sm font-bold bg-neo-yellow px-3 py-1 border-2 border-ink shadow-brutal-sm">
            {resumeData.projects.length} CORE PROJECTS
          </span>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-4 border-b-4 border-ink">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs sm:text-sm font-black px-4 py-2 border-2 border-ink transition-all shadow-brutal-sm select-none ${
                  isSelected
                    ? "bg-neo-yellow text-ink shadow-brutal scale-105"
                    : "bg-white text-ink hover:bg-neo-cyan"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectItem, idx: number) => {
            const Icon = getCategoryIcon(project.category);

            return (
              <Card
                key={project.title}
                bg="white"
                shadowSize="brutal-xl"
                stickerBadge={project.year}
                stickerColor={idx % 2 === 0 ? "yellow" : "cyan"}
                className="flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b-3 border-ink">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-neo-yellow border-2 border-ink shadow-brutal-sm">
                        <Icon className="w-5 h-5 text-ink" />
                      </div>
                      <span className="font-mono text-xs font-black uppercase bg-neo-pink text-white px-2 py-0.5 border border-ink">
                        {project.category}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-ink-muted">BUILD #{idx + 1}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-mono font-black text-2xl sm:text-3xl text-ink mb-4 hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description Bullets */}
                  <ul className="space-y-2 mb-6">
                    {project.description.map((desc, dIdx) => (
                      <li key={dIdx} className="font-sans text-sm text-ink flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-neo-pink shrink-0 mt-1" />
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Tags */}
                  <div className="mb-6">
                    <span className="font-mono text-xs font-bold text-ink-muted uppercase block mb-2">TECH STACK USED:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, tIdx) => (
                        <Badge
                          key={tIdx}
                          variant={tIdx % 2 === 0 ? "cyan" : "white"}
                          size="sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t-3 border-ink flex items-center justify-between gap-4">
                  <motion.a
                    href={project.githubUrl || siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2, boxShadow: "4px 4px 0px 0px #0F0F0F" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-ink text-white font-mono font-bold text-xs uppercase border-2 border-ink shadow-brutal-sm hover:bg-neo-yellow hover:text-ink transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </motion.a>

                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2, boxShadow: "4px 4px 0px 0px #0F0F0F" }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-neo-lime text-ink font-mono font-bold text-xs uppercase border-2 border-ink shadow-brutal-sm hover:bg-neo-cyan transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  ) : (
                    <span className="font-mono text-xs font-bold text-ink-muted bg-canvas px-3 py-2 border-2 border-ink opacity-80">
                      LOCAL / HW BUILD
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </AnimatedSection>
  );
};
