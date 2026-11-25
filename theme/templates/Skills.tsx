import React from "react";
import { resumeData } from "../../content/resumeData";
import { siteContent } from "../../content/siteContent";
import { ChapterHeading } from "../components/ChapterHeading";
import { Panel } from "../components/Panel";
import { TagStagger } from "../components/anim/TagStagger";
import { Stagger, StaggerItem } from "../components/anim/Stagger";
import { Reveal } from "../components/anim/Reveal";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden border-t-2 border-line">
      <div className="w-[min(1180px,calc(100%-48px))] max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Chapter 03 Header */}
        <ChapterHeading
          seal={siteContent.skills.chapter.seal}
          eyebrow={siteContent.skills.chapter.eyebrow}
          title={siteContent.skills.chapter.title}
          verticalJp={siteContent.skills.chapter.verticalJp}
        />

        {/* Skills Grid: Staggered Panels */}
        <Stagger
          stagger={0.07}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
        >
          {resumeData.skillCategories.map((cat, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            const isTone = idx % 2 === 1;

            return (
              <StaggerItem key={idx} className="h-full">
                <Panel
                  variant={isTone ? "tone" : "default"}
                  animateOnScroll={false}
                  className="min-h-[165px] sm:min-h-[190px] p-4 sm:p-6 flex flex-col justify-start h-full"
                >
                  <span className="font-display text-3xl sm:text-4xl block border-b border-line pb-2 mb-3 sm:mb-3.5 text-ink-new leading-none">
                    {num}
                  </span>
                  <h3 className="font-display text-xl sm:text-[23px] uppercase mb-3 leading-tight text-ink-new">
                    {cat.category}
                  </h3>
                  <div className="mt-auto sm:mt-0 pt-2">
                    <TagStagger tags={cat.skills} />
                  </div>
                </Panel>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Wide Specialization Banner */}
        <Reveal delay={0.2}>
          <div className="mt-4 sm:mt-5 p-5 sm:p-6 border-[3px] border-line bg-tone relative pr-24 sm:pr-28">
            <div className="font-mono text-xs tracking-[0.12em] uppercase text-muted mb-1 font-medium">
              {siteContent.skills.cybersecurityBanner.kicker}
            </div>
            <h3 className="font-display text-xl sm:text-2xl uppercase text-ink-new leading-tight">
              {siteContent.skills.cybersecurityBanner.heading}
            </h3>
            <p className="text-muted text-xs sm:text-sm mt-1 sm:mt-1.5 leading-relaxed max-w-2xl">
              {siteContent.skills.cybersecurityBanner.body}
            </p>

            {/* Chibi hooded developer graphic */}
            <svg
              className="absolute w-[68px] sm:w-[78px] h-[75px] sm:h-[85px] right-3 -bottom-2 sm:-bottom-3 z-10 pointer-events-none"
              viewBox="0 0 100 110"
              aria-label={siteContent.skills.cybersecurityBanner.chibiAriaLabel}
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
              <path d="M49 72q7 5 14 0" fill="none" stroke="var(--ink)" strokeWidth="2" />
            </svg>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
