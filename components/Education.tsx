const EducationIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

export default function Education() {
  const educationList = [
    {
      degree: "มัธยมศึกษาตอนปลาย (สายศิลป์-พละ)",
      institution: "โรงเรียนบุญเหลือวิทยานุสรณ์",
      period: "2019 - 2022",
      gpa: "3.18",
      details: "ศึกษาเกี่ยวกับการพัฒนาซอฟต์แวร์, การวิเคราะห์และออกแบบระบบ (System Analysis and Design), ระบบจัดการฐานข้อมูล (DBMS) และโครงสร้างเครือข่ายคอมพิวเตอร์"
    },
    {
      degree: "ปริญญาตรี วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์)",
      institution: "มหาวิทยาลัยราชภัฏนครราชสีมา",
      period: "2022 - ปัจจุบัน",
      gpa: "2.92",
      details: "ศึกษาเกี่ยวกับการพัฒนาซอฟต์แวร์, การวิเคราะห์และออกแบบระบบ (System Analysis and Design), ระบบจัดการฐานข้อมูล (DBMS) และโครงสร้างเครือข่ายคอมพิวเตอร์"
    }
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">Education</h2>
      <div className="space-y-4">
        {educationList.map((edu, index) => (
          <div key={index} className="flex items-start space-x-4 p-5 bg-zinc-900/40 border border-zinc-800/80 rounded-xl hover:border-zinc-700 transition-colors">
            <div className="mt-1 bg-zinc-800 p-2 rounded-lg text-emerald-400">
              <EducationIcon className="w-5 h-5" />
            </div>
            <div className="space-y-1 w-full">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="font-medium text-zinc-200">{edu.degree}</h3>
                <span className="text-xs font-mono text-zinc-500">{edu.period}</span>
              </div>
              <p className="text-sm text-zinc-400">{edu.institution}</p>
              {edu.gpa && <p className="text-xs text-zinc-500 font-mono">GPA: {edu.gpa}</p>}
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}