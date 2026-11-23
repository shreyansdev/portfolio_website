import React from "react";
import { resumeData } from "../../content/resumeData";
import { siteConfig } from "../functions/siteConfig";
import { siteContent } from "../../content/siteContent";
import { ChapterHeading } from "../components/ChapterHeading";
import { Panel } from "../components/Panel";
import { Tag } from "../components/Tag";
import { Reveal } from "../components/anim/Reveal";
import { Stagger, StaggerItem } from "../components/anim/Stagger";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden border-t-2 border-line">
      <div className="w-[min(1180px,calc(100%-48px))] max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Chapter 02 Header */}
        <ChapterHeading
          seal={siteContent.about.chapter.seal}
          eyebrow={siteContent.about.chapter.eyebrow}
          title={siteContent.about.chapter.title}
          verticalJp={siteContent.about.chapter.verticalJp}
        />

        {/* About Grid: 7 cols main panel, 5 cols stats & certs on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Main Bio Panel (7 cols) */}
          <div className="lg:col-span-7">
            <Panel className="p-6 sm:p-8 relative">
              {/* Circular Avatar Peek */}
              <div
                className="avatar-peek border-[3px] border-line rounded-full overflow-hidden bg-tone select-none pointer-events-none"
                aria-hidden="true"
              >
                <img
                  src={siteConfig.avatarPath}
                  alt={siteConfig.avatarAlt}
                  className="w-full h-full object-cover object-[center_30%]"
                />
              </div>

              {/* Section Kicker */}
              <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-muted mb-2">
                {siteContent.about.kicker}
              </div>

              {/* Subheading */}
              <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4 text-ink-new">
                {siteContent.about.subheading}
              </h3>

              {/* Bio Paragraphs */}
              <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-ink-new">
                {siteContent.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Coursework Tags */}
              <div className="mt-8 pt-6 border-t-2 border-line">
                <h4 className="font-display text-lg sm:text-xl uppercase mb-3 text-ink-new">
                  {siteContent.about.courseworkHeading}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.coursework.map((course, idx) => (
                    <Tag key={idx} variant="tag">
                      {course}
                    </Tag>
                  ))}
                </div>
              </div>
            </Panel>
          </div>

          {/* Right Column: Stats & Certifications (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            
            {/* 2-up Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Reveal delay={0.1}>
                <div className="p-4 sm:p-5 border-2 border-line bg-tone">
                  <span className="font-mono text-[10px] uppercase text-muted block">
                    {siteContent.about.stats.cgpa.label}
                  </span>
                  <strong className="font-display text-2xl sm:text-4xl text-ink-new block mt-1 leading-tight">
                    {siteContent.about.stats.cgpa.value}
                  </strong>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-4 sm:p-5 border-2 border-line bg-tone">
                  <span className="font-mono text-[10px] uppercase text-muted block">
                    {siteContent.about.stats.graduationYear.label}
                  </span>
                  <strong className="font-display text-2xl sm:text-4xl text-ink-new block mt-1 leading-tight">
                    {siteContent.about.stats.graduationYear.value}
                  </strong>
                </div>
              </Reveal>
            </div>

            {/* Certifications Cards */}
            <Stagger stagger={0.12} className="flex flex-col gap-3 sm:gap-4">
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

          </div>

        </div>

      </div>
    </section>
  );
};
