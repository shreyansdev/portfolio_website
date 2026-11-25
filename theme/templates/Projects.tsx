"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { resumeData } from "../../content/resumeData";
import { siteContent } from "../../content/siteContent";
import { ChapterHeading } from "../components/ChapterHeading";
import { Tag } from "../components/Tag";
import { ProjectCoverArt } from "../components/ProjectCoverArt";
import { CardTilt } from "../components/anim/CardTilt";
import { mangaEase } from "../functions/animations";

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>(siteContent.projects.filterAll);

  // Dynamically derive category pills in order of appearance
  const categories = [
    siteContent.projects.filterAll,
    ...Array.from(new Set(resumeData.projects.map((p) => p.category))),
  ];

  const filteredProjects =
    activeFilter === siteContent.projects.filterAll
      ? resumeData.projects
      : resumeData.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden border-t-2 border-line">
      <div className="w-[min(1180px,calc(100%-48px))] max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Chapter 05 Header */}
        <ChapterHeading
          seal={siteContent.projects.chapter.seal}
          eyebrow={siteContent.projects.chapter.eyebrow}
          title={siteContent.projects.chapter.title}
          kicker={siteContent.projects.kicker}
          verticalJp={siteContent.projects.chapter.verticalJp}
        />

        {/* Dynamic Category Filter Pills */}
        <div
          className="flex flex-wrap gap-2 mb-8 sm:mb-10"
          role="group"
          aria-label="Project filters"
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;

            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(cat)}
                className={`font-mono text-xs uppercase tracking-wider px-3.5 py-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center transition-all select-none border-2 cursor-pointer ${
                  isActive
                    ? "bg-ink-new text-paper border-line font-bold shadow-[2px_2px_0_var(--ink)]"
                    : "bg-paper text-ink-new border-line hover:bg-tone"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Showing {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
          {activeFilter === siteContent.projects.filterAll ? "" : ` in ${activeFilter}`}
        </p>

        {/* Projects Grid: Animated reflow with AnimatePresence & layout */}
        <m.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const originalIndex = resumeData.projects.findIndex(
                (p) => p.title === proj.title
              );
              const volNum = originalIndex >= 0 ? originalIndex + 1 : 1;

              return (
                <m.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: mangaEase }}
                  key={proj.title}
                  data-category={proj.category}
                  className="project-card border-2 border-line bg-paper min-h-full overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-full">
                    {/* Volume Art Cover (Left side on tablet/desktop, tilted on hover) */}
                    <div className="md:col-span-5 bg-tone border-b-2 md:border-b-0 md:border-r-2 border-line overflow-hidden">
                      <CardTilt className="relative min-h-[220px] md:min-h-full flex items-center justify-center p-4">
                        {/* Dark Manga Book Spine */}
                        <span
                          className="spine absolute left-0 top-0 bottom-0 w-2.5 bg-line z-10"
                          aria-hidden="true"
                        />

                        {/* Volume Number Tag */}
                        <span className="vol-number absolute left-4 top-3 font-mono text-xs font-bold text-ink-new z-10">
                          {siteContent.projects.volumePrefix} {volNum}
                        </span>

                        {/* Halftone Screentone Backdrop */}
                        <div
                          className="absolute inset-0 halftone opacity-60 pointer-events-none"
                          aria-hidden="true"
                        />

                        {/* Bespoke Cover Art SVG */}
                        <div className="relative w-full max-w-[160px] sm:max-w-[180px] z-[5] text-ink-new">
                          <ProjectCoverArt
                            title={proj.title}
                            ariaLabel={siteContent.projects.volumeAriaLabels[proj.title]}
                          />
                        </div>
                      </CardTilt>
                    </div>

                    {/* Project Information (Right side - stays flat for crisp text) */}
                    <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between">
                      <div>
                        {/* Volume Meta Tag */}
                        <div className="font-mono text-xs uppercase tracking-wider text-muted mb-1.5 font-medium">
                          {siteContent.projects.volumePrefix} {volNum} · {proj.year} · {proj.category}
                        </div>

                        {/* Project Title */}
                        <h3 className="font-display text-2xl sm:text-3xl uppercase text-ink-new mb-3 leading-tight">
                          {proj.title}
                        </h3>

                        {/* Extended Description Bullets */}
                        <ul className="space-y-2 text-xs sm:text-[13px] text-muted list-disc pl-4 mb-5 leading-relaxed">
                          {proj.description.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {proj.techStack.map((tech, tIdx) => (
                            <Tag key={tIdx} variant="tag">
                              {tech}
                            </Tag>
                          ))}
                        </div>

                        {/* View Repository Action (Only if githubUrl exists; no liveUrl) */}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn self-start text-xs py-2.5 px-3.5 min-h-[44px] min-w-[44px] inline-flex"
                          >
                            {siteContent.buttons.viewRepository}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </m.article>
              );
            })}
          </AnimatePresence>
        </m.div>

        {/* Chibi hooded developer graphic peeking at bottom */}
        <svg
          className="absolute right-2 -bottom-5 w-[75px] h-[85px] z-10 pointer-events-none select-none"
          viewBox="0 0 100 110"
          aria-label={siteContent.projects.chibiAriaLabel}
          role="img"
        >
          <path
            d="M12 110Q8 70 22 44Q29 14 55 12Q84 15 88 51L95 110"
            fill="var(--ink)"
            stroke="var(--ink)"
            strokeWidth="3"
          />
          <path
            d="M27 57Q27 26 54 25Q79 27 80 58L73 79H34z"
            fill="var(--paper)"
            stroke="var(--ink)"
            strokeWidth="3"
          />
          <path
            d="m27 48 7-25 12 14 8-25 12 24 15-12-3 29"
            fill="var(--ink)"
          />
          <path d="M37 57h12m12 0h12" stroke="var(--ink)" strokeWidth="4" />
        </svg>

      </div>
    </section>
  );
};
