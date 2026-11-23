"use client";

import React from "react";
import { m } from "framer-motion";
import { staggerContainer, tagVariants, defaultViewport } from "../../functions/animations";
import { Tag } from "../Tag";

interface TagStaggerProps {
  tags: string[];
  className?: string;
}

export const TagStagger: React.FC<TagStaggerProps> = ({ tags, className = "" }) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer(0.04, 0.1)}
      className={`flex flex-wrap gap-1.5 ${className}`}
    >
      {tags.map((tag, idx) => (
        <m.span key={idx} variants={tagVariants}>
          <Tag variant="tag">{tag}</Tag>
        </m.span>
      ))}
    </m.div>
  );
};
