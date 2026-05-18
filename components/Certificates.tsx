
const AwardIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

export default function Certificates() {
  const certificates = [
    {
      title: "Basic Web Development Certificate",
      issuer: "Your Training Center / University",
      year: "2025",
    },
    {
      title: "Laravel Framework Masterclass",
      issuer: "Online Course Platform",
      year: "2024",
    }
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certificates.map((cert, index) => (
          <div key={index} className="flex items-start space-x-4 p-5 bg-zinc-900/40 border border-zinc-800/80 rounded-xl hover:bg-zinc-800/50 transition-colors">
            <div className="mt-1 bg-zinc-800 p-2 rounded-lg text-sky-400">
              <AwardIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-zinc-200">{cert.title}</h3>
              <p className="text-sm text-zinc-500 mt-1">{cert.issuer}</p>
              <p className="text-xs text-zinc-600 mt-2 font-mono">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}