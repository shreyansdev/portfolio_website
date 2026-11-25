"use client";

import React, { useState } from "react";
import { m } from "framer-motion";
import { resumeData } from "../../content/resumeData";
import { siteConfig } from "../functions/siteConfig";
import { siteContent } from "../../content/siteContent";
import { ChapterHeading } from "../components/ChapterHeading";
import { AvatarImage } from "../components/AvatarImage";
import { ResumeButton } from "../partials/ResumeButton";
import { SocialLinks } from "../partials/SocialLinks";
import {
  defaultViewport,
  staggerContainer,
  stampLetterVariants,
  revealVariants,
} from "../functions/animations";

export const ContactFooter: React.FC = () => {
  const [copyText, setCopyText] = useState<string>(siteContent.buttons.copyEmail);
  const [copyStatus, setCopyStatus] = useState<string>("");

  const handleCopyEmail = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(siteConfig.socials.displayEmail);
      } else {
        // Fallback for browsers without clipboard API
        const textarea = document.createElement("textarea");
        textarea.value = siteConfig.socials.displayEmail;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopyText(siteContent.buttons.copiedEmail);
      setCopyStatus("Email address copied to clipboard");
      setTimeout(() => {
        setCopyText(siteContent.buttons.copyEmail);
        setCopyStatus("");
      }, 2500);
    } catch {
      setCopyText(siteConfig.socials.displayEmail);
      setCopyStatus(siteConfig.socials.displayEmail);
    }
  };

  return (
    <>
      {/* Chapter 06 Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden border-t-2 border-line bg-paper"
      >
        <div className="w-[min(1180px,calc(100%-48px))] max-w-7xl mx-auto px-2 sm:px-4">
          
          {/* Chapter 06 Header */}
          <ChapterHeading
            seal={siteContent.contact.chapter.seal}
            eyebrow={siteContent.contact.chapter.eyebrow}
            title={siteContent.contact.chapter.title}
            verticalJp={siteContent.contact.chapter.verticalJp}
          />

          {/* Contact 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Callout Copy & Actions (7 cols) */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={revealVariants}
              className="lg:col-span-7 flex flex-col"
            >
              <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl text-ink-new uppercase tracking-tight leading-none mb-4">
                {siteContent.contact.calloutHeading}
              </h3>

              <p className="font-sans text-muted text-sm sm:text-base leading-relaxed max-w-xl mb-6">
                {siteContent.contact.calloutText}
              </p>

              {/* Direct Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  href={siteConfig.socials.email}
                  className="btn solid"
                >
                  {siteContent.buttons.sendEmail}
                </a>

                <button
                  type="button"
                  id="copyEmail"
                  onClick={handleCopyEmail}
                  className="btn"
                >
                  {copyText}
                </button>
                <span className="sr-only" aria-live="polite" aria-atomic="true">
                  {copyStatus}
                </span>

                <ResumeButton className="btn" />
              </div>

              {/* Text Social Links */}
              <div className="mt-2">
                <SocialLinks variant="text" />
              </div>
            </m.div>

            {/* Right Column: Contact Details Panel (5 cols) */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={revealVariants}
              transition={{ delay: 0.15 }}
              className="lg:col-span-5 border-2 border-line p-6 pb-16 bg-tone relative"
            >
              <div className="divide-y divide-line">
                {/* Email Row */}
                <div className="py-1.5 flex items-center gap-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted min-w-[85px] sm:min-w-[92px]">
                    {siteContent.contact.labels.email}
                  </span>
                  <a
                    href={siteConfig.socials.email}
                    className="text-xs sm:text-sm font-semibold text-ink-new break-all font-sans hover:underline focus-visible:underline min-h-[44px] min-w-[44px] inline-flex items-center"
                  >
                    {siteConfig.socials.displayEmail}
                  </a>
                </div>

                {/* Phone Row */}
                <div className="py-1.5 flex items-center gap-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted min-w-[85px] sm:min-w-[92px]">
                    {siteContent.contact.labels.phone}
                  </span>
                  <a
                    href={siteConfig.socials.phone}
                    className="text-xs sm:text-sm font-semibold text-ink-new break-all font-sans hover:underline focus-visible:underline min-h-[44px] min-w-[44px] inline-flex items-center"
                  >
                    {siteConfig.socials.displayPhone}
                  </a>
                </div>

                {/* Location Row */}
                <div className="py-3 flex items-center gap-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted min-w-[85px] sm:min-w-[92px]">
                    {siteContent.contact.labels.location}
                  </span>
                  <strong className="text-xs sm:text-sm font-semibold text-ink-new break-all font-sans">
                    {resumeData.personalInfo.location}
                  </strong>
                </div>
              </div>

              {/* Peeking Chibi SVG in Contact Box */}
              <svg
                className="absolute right-2 -bottom-4 w-[68px] sm:w-[78px] h-[75px] sm:h-[85px] z-10 pointer-events-none select-none"
                viewBox="0 0 100 110"
                aria-label={siteContent.contact.chibiAriaLabel}
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
                <path d="M45 74q8 7 16 0" fill="none" stroke="var(--ink)" strokeWidth="2" />
              </svg>
            </m.div>

          </div>

        </div>
      </section>

      {/* Manga END Footer */}
      <footer className="footer pt-14 pb-8 border-t-2 border-line relative overflow-hidden bg-paper">
        <div className="w-[min(1180px,calc(100%-48px))] max-w-7xl mx-auto px-2 sm:px-4">
          
          {/* Giant Manga Stroked "END" Word - Letters Stamp In */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer(0.18, 0.1)}
            className="end-word flex justify-center items-center select-none pointer-events-none"
          >
            {["E", "N", "D"].map((letter, i) => (
              <m.span
                key={i}
                variants={stampLetterVariants}
                className="inline-block"
              >
                {letter}
              </m.span>
            ))}
          </m.div>

          {/* Waving Chibi Developer Graphic */}
          <svg
            className="footer-chibi select-none pointer-events-none"
            viewBox="0 0 100 110"
            aria-label={siteContent.footer.chibiAriaLabel}
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
            <path d="M83 46q18-12 13-25m-8 27 15-3" fill="none" stroke="var(--ink)" strokeWidth="3" />
          </svg>

          {/* Bottom Bar: Circular Avatar + Name, Copyright, Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-line text-xs font-mono">
            {/* Circular Avatar + Author Name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 border-2 border-line rounded-full overflow-hidden bg-paper shrink-0">
                <AvatarImage size="160" className="w-full h-full" />
              </div>
              <strong className="font-display text-xl sm:text-2xl tracking-wider text-ink-new">
                {resumeData.personalInfo.name.toUpperCase()}
              </strong>
            </div>

            {/* Copyright Line */}
            <span className="text-muted text-xs text-center">
              {siteContent.footer.copyright}
            </span>

            {/* Back to top Link */}
            <a
              href="#hero"
              className="text-ink-new hover:underline uppercase text-xs font-medium inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-2"
            >
              {siteContent.buttons.backToTop}
            </a>
          </div>

        </div>
      </footer>
    </>
  );
};
