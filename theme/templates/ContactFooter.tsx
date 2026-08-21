"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../components/AnimatedSection";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { SocialLinks } from "../partials/SocialLinks";
import { ResumeButton } from "../partials/ResumeButton";
import { siteConfig } from "../functions/siteConfig";
import { Mail, Phone, MapPin, Copy, Check, ArrowUp, Sparkles } from "lucide-react";

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.socials.displayEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-canvas border-t-4 border-ink pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Hero Box */}
        <div className="bg-neo-yellow border-4 border-ink p-8 sm:p-12 shadow-brutal-xl mb-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <Badge variant="dark" size="lg" rotate="slight-left" className="inline-self-start">
                06 /// GET IN TOUCH
              </Badge>

              <h2 className="font-mono font-black text-3xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight leading-none">
                LET&apos;S BUILD SOMETHING BOLD TOGETHER
              </h2>

              <p className="font-sans text-base sm:text-lg text-ink font-medium max-w-xl">
                Open for software engineering opportunities, full-stack projects, cybersecurity collaborations, or hardware IoT inquiries. Feel free to reach out directly!
              </p>

              {/* Direct Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.a
                  href={siteConfig.socials.email}
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "6px 6px 0px 0px #0F0F0F" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white font-mono font-black text-sm uppercase border-3 border-ink shadow-brutal hover:bg-neo-pink transition-colors"
                >
                  <Mail className="w-5 h-5 text-neo-yellow" />
                  <span>Send Email</span>
                </motion.a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-ink font-mono font-bold text-sm uppercase border-3 border-ink shadow-brutal hover:bg-neo-cyan transition-colors"
                >
                  {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                  <span>{copied ? "COPIED TO CLIPBOARD!" : "Copy Email"}</span>
                </button>
              </div>
            </div>

            {/* Right Contact Card */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Card bg="white" shadowSize="brutal-lg" stickerBadge="DIRECT CONTACT" stickerColor="pink">
                <div className="space-y-4 font-mono text-sm">
                  
                  {/* Email */}
                  <a
                    href={siteConfig.socials.email}
                    className="flex items-center gap-3 p-3 bg-canvas border-2 border-ink shadow-brutal-sm hover:bg-neo-cyan transition-colors"
                  >
                    <div className="p-2 bg-neo-yellow border border-ink">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-ink-muted block uppercase">EMAIL ADDRESS</span>
                      <span className="font-black text-ink">{siteConfig.socials.displayEmail}</span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={siteConfig.socials.phone}
                    className="flex items-center gap-3 p-3 bg-canvas border-2 border-ink shadow-brutal-sm hover:bg-neo-lime transition-colors"
                  >
                    <div className="p-2 bg-neo-pink text-white border border-ink">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-ink-muted block uppercase">PHONE NUMBER</span>
                      <span className="font-black text-ink">{siteConfig.socials.displayPhone}</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3 p-3 bg-canvas border-2 border-ink shadow-brutal-sm">
                    <div className="p-2 bg-neo-cyan border border-ink">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-ink-muted block uppercase">LOCATION</span>
                      <span className="font-black text-ink">Bengaluru, Karnataka, India</span>
                    </div>
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t-2 border-ink flex flex-col gap-3">
                  <span className="font-mono text-xs font-bold uppercase text-ink-muted">RESUME DOWNLOAD:</span>
                  <ResumeButton variant="primary" size="md" className="w-full justify-center" />
                </div>
              </Card>
            </div>

          </div>
        </div>

        {/* Footer Navigation & Credits */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b-2 border-ink">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <h3 className="font-mono font-black text-xl text-ink uppercase">
              SHREYANS JAIN
            </h3>
          </div>

          {/* Social Links */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <span className="font-mono text-xs font-bold uppercase text-ink-muted">SOCIAL PROFILES & CHANNELS:</span>
            <SocialLinks size="md" showLabels={true} />
          </div>

          {/* Back to top button */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -4, boxShadow: "5px 5px 0px 0px #0F0F0F" }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-neo-cyan text-ink border-3 border-ink shadow-brutal flex items-center gap-2 font-mono font-bold text-xs uppercase"
            >
              <ArrowUp className="w-5 h-5" />
              <span>TOP</span>
            </motion.button>
          </div>

        </div>

        {/* Bottom Copyright & Ticker Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-bold text-ink">
          <div>
            © {new Date().getFullYear()} SHREYANS JAIN. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-2 bg-neo-lime px-3 py-1 border border-ink">
            <Sparkles className="w-4 h-4 text-ink" />
            <span>BE CSE @ ACHARYA INSTITUTE OF TECHNOLOGY</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
