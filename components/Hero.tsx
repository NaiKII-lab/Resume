import Image from "next/image";
import { Mail } from "lucide-react";


const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-1 1.05-1.35 2.25-1.3 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center py-10">
      <div className="md:col-span-1 flex justify-center md:justify-start">
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-zinc-800 shadow-xl">
          <Image
            src="/profile.jpg"
            alt="My Profile Picture"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="md:col-span-3 space-y-4 text-center md:text-left">
        <div className="space-y-2">
          <h1 className="text-5xl font-extrabold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Narupol Darawan
          </h1>
          <p className="text-xl text-zinc-500">
            Full-Stack Developer (Laravel 🤝 Next.js)
          </p>
        </div>
        
        <p className="text-zinc-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
          นักพัฒนาเว็บที่เชี่ยวชาญการสร้างระบบหลังบ้านด้วย <span className="text-orange-400">Laravel</span> 
          และกำลังขยายสกิลมาฝั่ง Modern Frontend ด้วย <span className="text-sky-400">Next.js & TypeScript</span>
          มีความสนใจในการออกแบบระบบและการจัดการข้อมูลอย่างมีประสิทธิภาพ
        </p>

        <div className="flex space-x-5 pt-3 justify-center md:justify-start">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <GitHubIcon className="w-7 h-7" />
          </a>
          <a href="mailto:nin0821553368@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
            <Mail className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
}