"use client";

import React from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { resumeData } from "../../content/resumeData";
import { BookOpen, GraduationCap, Award, ShieldCheck, Cpu } from "lucide-react";

export const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="bg-canvas border-y-4 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <Badge variant="cyan" size="lg" rotate="slight-left" className="mb-2">
              02 /// ABOUT ME
            </Badge>
            <h2 className="font-mono font-black text-3xl sm:text-5xl text-ink uppercase tracking-tight">
              ENGINEERING & CODE ARCHITECTURE
            </h2>
          </div>
          <span className="font-mono text-sm font-bold bg-neo-yellow px-3 py-1 border-2 border-ink shadow-brutal-sm">
            COMPUTER SCIENCE B.E.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Bio Card (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Card bg="white" shadowSize="brutal-lg" stickerBadge="PROFILE BRIEF" stickerColor="yellow">
              <h3 className="font-mono font-bold text-xl sm:text-2xl text-ink mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-neo-pink" />
                Acharya Institute of Technology Student
              </h3>
              <p className="text-ink-muted text-base sm:text-lg leading-relaxed font-sans mb-4">
                I am a Computer Science & Engineering undergraduate at Acharya Institute of Technology, Bengaluru (2023–2027), holding an active CGPA of <strong className="text-ink bg-neo-yellow px-1 border border-ink font-mono">8.45 / 10.0</strong>.
              </p>
              <p className="text-ink-muted text-base sm:text-lg leading-relaxed font-sans">
                My passion lies at the intersection of <strong>Full-Stack Web Development</strong>, <strong>Cybersecurity</strong>, <strong>Machine Learning</strong>, and <strong>Embedded Systems / IoT</strong>. Whether it&apos;s building zero-persistence encrypted chat platforms, fine-tuning neural networks for image authenticity detection, or configuring low-level microcontrollers over Web Serial API, I focus on performance, security, and developer utility.
              </p>
            </Card>

            {/* Relevant Coursework Card */}
            <Card bg="cyan" shadowSize="brutal-lg" stickerBadge="CORE COURSEWORK" stickerColor="pink">
              <h3 className="font-mono font-black text-lg text-ink mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> RELEVANT ACADEMIC SUBJECTS
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-ink font-mono text-xs sm:text-sm font-bold px-3 py-1 border-2 border-ink shadow-brutal-sm hover:bg-neo-yellow transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Metrics & Certifications Highlight (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neo-pink text-white border-4 border-ink p-4 shadow-brutal flex flex-col justify-between">
                <span className="font-mono text-xs font-bold uppercase opacity-90">CURRENT CGPA</span>
                <span className="font-mono font-black text-3xl sm:text-4xl mt-2">8.45</span>
                <span className="font-mono text-xs mt-1">/ 10.0 Scale</span>
              </div>

              <div className="bg-neo-lime text-ink border-4 border-ink p-4 shadow-brutal flex flex-col justify-between">
                <span className="font-mono text-xs font-bold uppercase">GRADUATION YEAR</span>
                <span className="font-mono font-black text-3xl sm:text-4xl mt-2">2027</span>
                <span className="font-mono text-xs">Acharya AIT</span>
              </div>
            </div>

            {/* Certifications Card */}
            <Card bg="white" shadowSize="brutal-lg" stickerBadge="IIT CERTIFICATIONS" stickerColor="lime">
              <h3 className="font-mono font-black text-lg text-ink mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-neo-purple" /> NPTEL (IIT) CERTIFICATIONS
              </h3>

              <div className="space-y-4">
                {resumeData.certifications.map((cert, idx) => (
                  <div key={idx} className="border-2 border-ink p-3 bg-canvas border-l-8 border-l-ink">
                    <div className="flex items-center justify-between">
                      <h4 className="font-mono font-black text-sm text-ink">{cert.title}</h4>
                      {cert.distinction && (
                        <span className="bg-neo-yellow text-ink text-xs font-mono font-black px-2 py-0.5 border border-ink">
                          {cert.distinction} ({cert.score})
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs text-ink-muted mt-1">{cert.issuer} • {cert.year}</p>
                    <p className="font-sans text-xs text-ink mt-2">{cert.details}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Key Focus Icons */}
            <div className="bg-neo-purple text-white border-4 border-ink p-4 shadow-brutal flex items-center justify-between font-mono text-xs font-bold uppercase">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-neo-yellow" />
                <span>ETHICAL HACKING</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-neo-cyan" />
                <span>IoT & HARDWARE</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
