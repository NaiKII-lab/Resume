export default function Skills() {
  const skillCategories = [
    {
      title: "Backend & Database",
      skills: ["PHP", "Laravel", "MySQL", "RESTful APIs"],
    },
    {
      title: "Frontend Development",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Tools & System Design",
      skills: ["Git / GitHub", "Docker", "ER Diagram", "DFD Level 2"],
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-medium text-zinc-300">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 text-sm bg-zinc-900/60 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-default"
                >
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