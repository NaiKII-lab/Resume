export default function Projects() {
  const projects = [
    {
      title: "Government Travel Recording System",
      description: "ระบบบันทึกและจัดการข้อมูลการเดินทางราชการ ช่วยลดความซ้ำซ้อนของเอกสารและเพิ่มความรวดเร็วในการตรวจสอบข้อมูล",
      tags: ["Laravel", "MySQL", "TailwindCSS", "Git"],
    },
    {
      title: "Job Seeking & Messaging Platform",
      description: "ออกแบบระบบหางานพร้อมระบบ Chat สื่อสารแบบเรียลไทม์ระหว่างผู้สมัครและบริษัท เน้นการออกแบบโครงสร้าง ER Diagram และ DFD ที่ซับซ้อน",
      tags: ["Next.js", "TypeScript", "TailwindCSS"],
    }
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-5 bg-zinc-900/50 border border-zinc-800/80 rounded-xl hover:border-zinc-700 transition space-y-3">
            <h3 className="font-medium text-lg text-zinc-200">{project.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed min-h-[60px]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[11px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}