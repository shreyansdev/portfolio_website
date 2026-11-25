import React from "react";
import { resumeData } from "../../content/resumeData";
import { siteConfig } from "../functions/siteConfig";
import { siteContent } from "../../content/siteContent";
import { Tag } from "../components/Tag";
import { BurstBubble } from "../components/BurstBubble";
import { AvatarImage } from "../components/AvatarImage";
import { ResumeButton } from "../partials/ResumeButton";
import { SocialLinks } from "../partials/SocialLinks";
import { TextMaskReveal } from "../components/anim/TextMaskReveal";
import { AvatarParallax } from "../components/anim/AvatarParallax";
import { Reveal } from "../components/anim/Reveal";
import { Stagger, StaggerItem } from "../components/anim/Stagger";

export const Hero: React.FC = () => {
  const nameParts = resumeData.personalInfo.name.split(" ");
  const firstName = nameParts[0].toUpperCase();
  const lastName = nameParts.slice(1).join(" ").toUpperCase();

  return (
    <section id="hero" className="pt-3 pb-10 sm:py-12 lg:py-24 relative overflow-hidden">
      <div className="w-[min(1180px,calc(100%-48px))] max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Main Grid: 2-column on desktop (lg), avatar first on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Intro Copy (7 cols on lg, order-2 on mobile, order-1 on lg) */}
          <div className="lg:col-span-7 flex flex-col gap-2.5 sm:gap-5 lg:gap-6 relative z-10 order-2 lg:order-1">
            
            {/* Chips Row (Fades in after) */}
            <Reveal cssEntrance delay={0.2}>
              <div className="flex flex-wrap gap-2">
                {siteContent.hero.chips.map((chip) => (
                  <Tag key={chip} variant="chip">
                    {chip}
                  </Tag>
                ))}
              </div>
            </Reveal>

            {/* Display Headline with Masked Slide-up */}
            <TextMaskReveal
              className="font-display text-[52px] sm:text-[76px] lg:text-[96px] leading-[0.95] text-ink-new uppercase tracking-normal"
              lines={[
                {
                  text: siteContent.hero.titlePrefix,
                  className: "text-muted text-[42px] sm:text-[60px] lg:text-[76px]",
                },
                { text: firstName },
                { text: lastName },
              ]}
            />

            {/* Subheading / Tagline */}
            <Reveal cssEntrance delay={0.35}>
              <p className="font-semibold text-lg sm:text-xl text-ink-new">
                {resumeData.personalInfo.tagline}
              </p>
            </Reveal>

            {/* Bio Paragraph */}
            <Reveal cssEntrance delay={0.4}>
              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-[560px]">
                {resumeData.personalInfo.bio}
              </p>
            </Reveal>

            {/* Action Buttons Row */}
            <Reveal cssEntrance delay={0.45}>
              <div className="flex flex-wrap gap-3 pt-2">
                <ResumeButton className="btn" variant="solid" />
                <a href="#projects" className="btn">
                  {siteContent.buttons.viewProjects}
                </a>
              </div>
            </Reveal>

            {/* Social Links Row */}
            <Reveal cssEntrance delay={0.5}>
              <div className="pt-2">
                <SocialLinks variant="icons" />
              </div>
            </Reveal>

          </div>

          {/* Right Column: Avatar Manga Art Frame with Slam & Mouse Parallax (5 cols on lg, order-1 on mobile, order-2 on lg) */}
          <div className="lg:col-span-5 order-1 lg:order-2 my-0">
            <AvatarParallax
              sfxOne={siteContent.hero.sfx.one}
              sfxTwo={siteContent.hero.sfx.two}
              burstBubble={
                <BurstBubble
                  label={siteContent.hero.statBubble.label}
                  value={siteContent.hero.statBubble.value}
                  className="w-[210px] h-[142px] sm:w-[228px] sm:h-[164px] lg:w-[232px] lg:h-[174px]"
                />
              }
            >
              {/* Neutral Grey Silhouette Fallback Layer */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-muted z-0 pointer-events-none select-none"
                aria-hidden="true"
              >
                <div className="silhouette" />
                <span className="font-mono text-xs mt-2 text-ink-new opacity-80">
                  SHREYANS JAIN
                </span>
              </div>

              {/* Optimized Light/Dark Avatar */}
              <AvatarImage
                size="800"
                priority
                className="w-full h-full relative z-10 pointer-events-none"
              />
            </AvatarParallax>
          </div>

        </div>

        {/* Hero Mini Summary Panels (Staggered on entrance) */}
        <Stagger
          cssEntrance
          stagger={0.1}
          delay={0.3}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-10 sm:mt-12 pt-6 border-t-2 border-line"
        >
          {siteContent.hero.summaryPanels.map((panel, idx) => (
            <StaggerItem key={idx} cssDelay={0.3 + idx * 0.1}>
              <div className="mini-panel-fold border-2 border-line p-3.5 sm:p-4 bg-paper relative min-h-[88px] sm:min-h-[96px] flex flex-col justify-center">
                <strong className="font-display text-base sm:text-lg uppercase block text-ink-new leading-tight">
                  {panel.title}
                </strong>
                <span className="font-mono text-xs leading-relaxed block mt-1 text-muted">
                  {panel.skills}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>

      {/* Hero Chapter Vertical Japanese Tag */}
      <span
        className="vertical-jp absolute right-2 sm:right-4 top-[120px] text-muted text-xs opacity-60 hidden md:block pointer-events-none select-none"
        aria-hidden="true"
        lang="ja"
      >
        {siteContent.hero.chapter.verticalJp}
      </span>
    </section>
  );
};
