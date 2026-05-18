export default function Experience() {
  const experiences = [
    {
      role: "เซนต์เมรี่ (Path time)",
      company: "คีย์ผล",
      period: "2022 - 2525 ( 3years )",
      description: "คีย์ข้อมูลการตรวจสุขภาพประจำปีของนักเรียนและบุคลากรในโรงเรียน เพื่อใช้ในการวิเคราะห์และวางแผนการดูแลสุขภาพ",
      skills: ["Excel", "Word"]
    },
    {
      role: "สํานักงานป้องกันควบคุมโรคที่ 9 นครราชสีมา (ฝึกงาน)",
      company: "IT Support & Developer",
      period: "2025 - 2526 ( 4months )",
      description: "พัฒนาและดูแลระบบบันทึกข้อมูลภายในองค์กร ออกแบบระบบฐานข้อมูล และโครงสร้าง Data Flow Diagram (DFD)",
      skills: ["PHP", "Laravel", "Git"]
    }
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 border-l border-zinc-800 space-y-2">
            <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6px] top-1.5" />
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h3 className="font-medium text-lg">{exp.role}</h3>
              <span className="text-sm text-zinc-500">{exp.period}</span>
            </div>
            <p className="text-sm text-zinc-400">{exp.company}</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {exp.skills.map((skill) => (
                <span key={skill} className="text-xs bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}