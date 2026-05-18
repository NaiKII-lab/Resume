import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-24">
      {/* 1. แนะนำตัวแบบกระชับ */}
      <Hero />
      
      {/* 2. ประสบการณ์การทำงาน/ฝึกงาน */}
      <Experience />
      
      {/* 3. ผลงานเด่น */}
      <Projects />
    </main>
  );
}
