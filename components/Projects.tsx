export default function Projects() {
  const projects = [
    {
      title: "Government Travel Recording System",
      description: "ระบบบันทึกและจัดการข้อมูลการเดินทางราชการ ช่วยลดความซ้ำซ้อนของเอกสารและเพิ่มความรวดเร็วในการตรวจสอบข้อมูล",
      tags: ["Laravel", "MySQL", "TailwindCSS", "Git"],
      link: "https://github.com/NaiKII-lab/odpc9_recording_system"
    },
    {
      title: "Online Job Market",
      description: "ระบบตลาดงานออนไลน์ที่เชื่อมโยงนายจ้างและผู้หางาน มีฟีเจอร์การสมัครงาน การจัดการโปรไฟล์ และระบบแจ้งเตือน",
      tags: ["PHP", "MySQL", "Bootstrap"],
      link: "https://github.com/NaiKII-lab/Online-Job-Market-website"
    }
  ];

  const CodeIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col justify-between p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-zinc-500 transition-all duration-300 shadow-lg"
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-bold text-xl text-zinc-100 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-zinc-500">{project.subtitle}</p>
              </div>
              
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[11px] font-medium bg-zinc-800/80 text-zinc-300 px-2.5 py-1 rounded-md border border-zinc-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ส่วนปุ่มลิงก์ด้านล่างของการ์ด */}
            <div className="pt-6 mt-auto">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                <CodeIcon className="w-4 h-4" />
                <span>View Source</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}