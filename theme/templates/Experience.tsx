"use client";

import React from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { resumeData } from "../../content/resumeData";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="bg-canvas border-y-4 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <Badge variant="pink" size="lg" rotate="slight-left" className="mb-2">
              04 /// EDUCATION & ACADEMIC TIMELINE
            </Badge>
            <h2 className="font-mono font-black text-3xl sm:text-5xl text-ink uppercase tracking-tight">
              ACADEMIC JOURNEY & MILESTONES
            </h2>
          </div>
          <span className="font-mono text-sm font-bold bg-neo-lime px-3 py-1 border-2 border-ink shadow-brutal-sm">
            2020 – PRESENT
          </span>
        </div>

        {/* Timeline Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education Timeline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-mono font-black text-2xl text-ink uppercase flex items-center gap-2 mb-2">
              <GraduationCap className="w-7 h-7 text-neo-pink" /> ACADEMIC QUALIFICATIONS
            </h3>

            <div className="space-y-6 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-1 before:bg-ink">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="relative pl-10">
                  {/* Timeline Dot */}
                  <div className="absolute left-1.5 top-1.5 w-6 h-6 bg-neo-yellow border-3 border-ink rounded-none shadow-brutal-sm flex items-center justify-center font-mono text-xs font-bold">
                    {idx + 1}
                  </div>

                  <Card bg="white" shadowSize="brutal-lg" hoverEffect={true}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-black bg-neo-cyan px-2.5 py-0.5 border border-ink shadow-brutal-sm">
                        {edu.period}
                      </span>
                      <span className="font-mono text-xs font-black bg-neo-yellow px-2.5 py-0.5 border border-ink">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="font-mono font-black text-lg sm:text-xl text-ink">
                      {edu.degree}
                    </h4>

                    <div className="flex items-center gap-4 text-xs font-mono font-bold text-ink-muted my-2">
                      <span className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4" /> {edu.institution}
                      </span>
                      {edu.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {edu.location}
                        </span>
                      )}
                    </div>

                    {edu.details && (
                      <ul className="space-y-1.5 mt-3 pt-3 border-t-2 border-dashed border-ink/30">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="font-sans text-sm text-ink flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-neo-pink shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Recognition (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-mono font-black text-2xl text-ink uppercase flex items-center gap-2 mb-2">
              <Award className="w-7 h-7 text-neo-purple" /> CERTIFICATIONS & HONORS
            </h3>

            {resumeData.certifications.map((cert, idx) => (
              <Card
                key={idx}
                bg={idx === 0 ? "yellow" : "cyan"}
                shadowSize="brutal-lg"
                stickerBadge={cert.distinction ? cert.distinction.toUpperCase() : "IIT CERTIFIED"}
                stickerColor={idx === 0 ? "pink" : "purple"}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-ink flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {cert.year}
                  </span>
                  {cert.score && (
                    <span className="font-mono text-xs font-black bg-white px-2 py-0.5 border border-ink">
                      SCORE: {cert.score}
                    </span>
                  )}
                </div>

                <h4 className="font-mono font-black text-xl text-ink mb-1">
                  {cert.title}
                </h4>

                <p className="font-mono text-xs font-bold text-ink-muted mb-3">
                  {cert.issuer}
                </p>

                <p className="font-sans text-sm text-ink border-t-2 border-ink pt-3">
                  {cert.details}
                </p>
              </Card>
            ))}

            {/* Quote Card */}
            <div className="bg-ink text-white border-4 border-ink p-6 shadow-brutal-xl relative">
              <p className="font-mono font-bold text-sm leading-relaxed text-neo-yellow">
                &ldquo;Continuous hands-on implementation in algorithms, full-stack security, and IoT embedded design drives my technical progress.&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between font-mono text-xs">
                <span className="text-white/80">— SHREYANS JAIN</span>
                <span className="bg-neo-pink text-white px-2 py-0.5 border border-white">BE CSE Student</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
