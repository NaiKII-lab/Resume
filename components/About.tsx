export default function About() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-400 text-sm leading-relaxed">
        
        <div className="md:col-span-2 space-y-4">
          <p>
            สวัสดีครับ ผมเป็นนักศึกษาจบใหม่สายพัฒนาเว็บไซต์ที่มีความหลงใหลในการเขียนโค้ดและการออกแบบระบบ 
            เริ่มต้นเส้นทางจากการสร้างสรรค์ระบบหลังบ้านด้วย <span className="text-orange-400">PHP และ Laravel Framework</span> 
            และกำลังสนุกกับการต่อยอดความรู้เข้าสู่ฝั่ง Modern Frontend ด้วย <span className="text-sky-400">Next.js และ TypeScript</span> เพื่อพัฒนาแอปพลิเคชันที่ตอบโจทย์ผู้ใช้งานได้อย่างสมบูรณ์แบบ
          </p>
          <p>
            ผมชอบความท้าทายในการวิเคราะห์ระบบ ออกแบบฐานข้อมูล (Database Schema) ไปจนถึงการเขียนแผนภาพขั้นตอนการทำงาน (DFD) 
            เป็นคนชอบเรียนรู้เทคโนโลยีใหม่ ๆ ตลอดเวลา พร้อมที่จะพัฒนาทักษะการทำงานร่วมกับทีม และนำทักษะมาแก้ไขปัญหาจริงในโปรเจกต์องค์กรครับ
          </p>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-xl space-y-3">
          <h3 className="text-base font-medium text-zinc-200">Personal Info</h3>
          <div className="space-y-2.5 text-xs">
            <p><span className="text-zinc-500">ชื่อ:</span> นายนฤพล ดาระวัลย์</p>
            <p><span className="text-zinc-500">ชื่อเล่น:</span> นาย</p>
            <p><span className="text-zinc-500">อายุ:</span> 23 ปี</p>
            <p><span className="text-zinc-500">ตำแหน่ง:</span> Full-Stack Developer</p>
            <p><span className="text-zinc-500">ความสนใจ:</span> Web Application, System Design</p>
            <p><span className="text-zinc-500">ที่อยู่:</span> นครราชสีมา, ประเทศไทย</p>
          </div>
        </div>

      </div>
    </section>
  );
}