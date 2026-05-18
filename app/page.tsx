import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates"; 
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-24 relative">
      
      <nav className="sticky top-6 z-50 flex justify-center gap-4 md:gap-6 bg-zinc-900/60 backdrop-blur-md py-3 px-6 md:px-8 rounded-full border border-zinc-800 w-fit mx-auto shadow-2xl overflow-x-auto max-w-full">
        <Link href="#hero" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Profile
        </Link>
        <Link href="#skills" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Skills
        </Link>
        <Link href="#experience" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Experience
        </Link>
        <Link href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Projects
        </Link>
        <Link href="#certificates" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Certs
        </Link>
      </nav>

      <div id="hero" className="scroll-mt-32">
        <Hero />
      </div>
      
      <div id="skills" className="scroll-mt-32">
        <Skills />
      </div>
      
      <div id="experience" className="scroll-mt-32">
        <Experience />
      </div>
      
      <div id="projects" className="scroll-mt-32">
        <Projects />
      </div>

      <div id="certificates" className="scroll-mt-32">
        <Certificates />
      </div>

    </main>
  );
}