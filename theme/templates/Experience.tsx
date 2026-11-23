import React from "react";
import { resumeData } from "../../content/resumeData";
import { siteContent } from "../../content/siteContent";
import { ChapterHeading } from "../components/ChapterHeading";
import { Panel } from "../components/Panel";
import { SpeechBubble } from "../components/SpeechBubble";
import { TimelineProgress } from "../components/anim/TimelineProgress";
import { Reveal } from "../components/anim/Reveal";
import { Stagger, StaggerItem } from "../components/anim/Stagger";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden border-t-2 border-line">
      <div className="w-[min(1180px,calc(100%-48px))] max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Chapter 04 Header */}
        <ChapterHeading
          seal={siteContent.education.chapter.seal}
          eyebrow={siteContent.education.chapter.eyebrow}
          title={siteContent.education.chapter.title}
          verticalJp={siteContent.education.chapter.verticalJp}
        />

        {/* 2-Column Education Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education Timeline with Animated Scroll Line (7 cols) */}
          <div className="lg:col-span-7">
            <TimelineProgress className="space-y-6">
              {resumeData.education.map((edu, idx) => {
                const isTone = idx % 2 === 1;

                return (
                  <div key={idx} className="relative">
                    {/* Timeline Node Dot */}
                    <div
                      className="absolute -left-[23px] sm:-left-[31px] top-6 w-4 h-4 rounded-full border-[3px] border-line bg-paper z-10"
                      aria-hidden="true"
                    />

                    {/* Timeline Panel */}
                    <Panel variant={isTone ? "tone" : "default"} className="p-5 sm:p-6">
                      <span className="font-mono text-xs sm:text-sm inline-block border-b-2 border-line pb-0.5 mb-2 font-medium text-ink-new">
                        {edu.period}
                      </span>

                      <h3 className="font-display text-xl sm:text-2xl uppercase text-ink-new leading-tight mb-1">
                        {edu.degree}
                      </h3>

                      {/* Render institution and location ONLY if entry has a location */}
                      {edu.location && (
                        <p className="text-muted text-xs sm:text-sm font-medium">
                          {edu.institution}, {edu.location}
                        </p>
                      )}

                      <p className="font-mono text-xs font-bold text-ink-new mt-1">
                        {edu.score}
                      </p>

                      {/* Render every line of details */}
                      {edu.details && (
                        <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-muted list-disc pl-4 leading-relaxed">
                          {edu.details.map((detail, dIdx) => (
                            <li key={dIdx}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </Panel>
                  </div>
                );
              })}
            </TimelineProgress>
          </div>

          {/* Right Column: Pull Quote, Certifications & Manga Decor (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Pull Quote in Speech Bubble */}
            <Reveal delay={0.15}>
              <SpeechBubble variant="quote-tail" className="p-6 sm:p-7">
                <p className="font-semibold text-base sm:text-lg text-ink-new mb-3 leading-snug">
                  &ldquo;{siteContent.education.quote.text}&rdquo;
                </p>
                <cite className="font-mono text-[11px] uppercase text-muted not-italic block">
                  {siteContent.education.quote.attribution}
                </cite>
              </SpeechBubble>
            </Reveal>

            {/* Certifications Cards from resumeData */}
            <Stagger stagger={0.12} className="flex flex-col gap-3 sm:gap-4 mt-2">
              {resumeData.certifications.map((cert, idx) => (
                <StaggerItem key={idx}>
                  <div className="halftone-corner border-2 border-line p-4 sm:p-5 relative bg-paper">
                    <div className="font-mono text-[10px] uppercase text-muted">
                      {cert.issuer} · {cert.year}
                    </div>
                    <h4 className="font-display text-lg sm:text-xl uppercase text-ink-new mt-1 mb-1">
                      {cert.title}
                    </h4>
                    <p className="font-mono text-xs font-bold text-ink-new mb-2">
                      {cert.distinction ? `${cert.distinction} ` : ""}
                      {cert.score ? `(${cert.score})` : ""}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                      {cert.details}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Torii Gate & Japanese Stamp Decoration */}
            <Reveal delay={0.25}>
              <div className="flex flex-col items-center justify-center mt-6">
                <svg
                  className="w-[120px] sm:w-[150px] opacity-25 text-ink-new pointer-events-none select-none"
                  viewBox="0 0 120 120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  aria-hidden="true"
                >
                  <path d="M10 20h100M20 10h80M30 20v90m60-90v90M20 52h80M25 58h70M22 110h76" />
                </svg>
                <div className="stamp font-mono text-xs border-2 border-line px-2.5 py-1 inline-block -rotate-6 mt-4 bg-paper text-ink-new select-none">
                  {siteContent.education.stamp}
                </div>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
};
