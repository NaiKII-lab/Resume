"use client"; 

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-24 relative">
      
      <motion.nav 
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}    
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }} 
        className="sticky top-6 z-50 flex justify-center gap-4 md:gap-6 bg-zinc-900/60 backdrop-blur-md py-3 px-6 md:px-8 rounded-full border border-zinc-800 w-fit mx-auto shadow-2xl overflow-x-auto max-w-full"
      >
        <a href="#hero" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Profile</a>
        <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</a>
        <a href="#skills" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Skills</a>
        <a href="#education" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Education</a>
        <a href="#experience" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Experience</a>
        <a href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Projects</a>
        <a href="#certificates" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Certificates</a>
      </motion.nav>

      <FadeIn>
        <div id="hero" className="scroll-mt-32">
          <Hero />
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div id="about" className="scroll-mt-32">
          <About />
        </div>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <div id="skills" className="scroll-mt-32">
          <Skills />
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div id="education" className="scroll-mt-32">
          <Education />
        </div>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <div id="experience" className="scroll-mt-32">
          <Experience />
        </div>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <div id="projects" className="scroll-mt-32">
          <Projects />
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div id="certificates" className="scroll-mt-32">
          <Certificates />
        </div>
      </FadeIn>

    </main>
  );
}