import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Link from "next/link"; // 1. Import Link เข้ามา

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-24 relative">
      
      {/* 2. สร้างแถบเมนูนำทาง (Navbar) แบบลอยตัวเท่ๆ */}
      <nav className="sticky top-6 z-50 flex justify-center gap-6 bg-zinc-900/60 backdrop-blur-md py-3 px-8 rounded-full border border-zinc-800 w-fit mx-auto shadow-2xl">
        <Link href="#hero" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Profile
        </Link>
        <Link href="#experience" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Experience
        </Link>
        <Link href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Projects
        </Link>
      </nav>

      {/* 3. ใส่ id ให้แต่ละ Section และใส่ scroll-mt-32 เพื่อไม่ให้เมนูด้านบนบังตอนเลื่อนมาถึง */}
      <div id="hero" className="scroll-mt-32">
        <Hero />
      </div>
      
      <div id="experience" className="scroll-mt-32">
        <Experience />
      </div>
      
      <div id="projects" className="scroll-mt-32">
        <Projects />
      </div>

    </main>
  );
}