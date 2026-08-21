import React from "react";
import { Hero } from "../theme/templates/Hero";
import { About } from "../theme/templates/About";
import { Skills } from "../theme/templates/Skills";
import { Experience } from "../theme/templates/Experience";
import { Projects } from "../theme/templates/Projects";
import { ContactFooter } from "../theme/templates/ContactFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ContactFooter />
    </>
  );
}
