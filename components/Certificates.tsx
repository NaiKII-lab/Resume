"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
  image: string;
}

export default function Certificates() {
  const certificates: CertificateItem[] = [
    {
      title: "User Experience (UX) and User Interface (UI) Design Digital Manpower Development Institute",
      issuer: "กรมพัฒนาฝีมือแรงงาน กระทรวงแรงงาน",
      year: "2025",
      image: "/cert-uxui.jpg",
    },
    {
      title: "Web Development with HTML and CSS",
      issuer: "Chulalongkorn University",
      year: "2025",
      image: "/cert-html.jpg",
    },
    {
      title: "Getting to Know AI and ML",
      issuer: "Chulalongkorn University",
      year: "2025",
      image: "/cert-aiml.jpg",
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedIndex]);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">Certificates</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div 
            key={index} 
            onClick={() => setSelectedIndex(index)}
            className="group flex flex-col overflow-hidden bg-zinc-900/40 border border-zinc-800/80 rounded-xl hover:border-zinc-500 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <div className="relative w-full h-48 bg-zinc-800 overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
                  View Full
                </span>
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow space-y-2">
              <h3 className="font-medium text-zinc-200 line-clamp-2 group-hover:text-sky-400 transition-colors" title={cert.title}>
                {cert.title}
              </h3>
              <p className="text-sm text-zinc-500 mt-auto pt-2">{cert.issuer}</p>
              <p className="text-xs text-zinc-600 font-mono">{cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="pop-up-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              key="pop-up-container"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800/80 rounded-2xl flex flex-col items-center shadow-2xl overflow-hidden cursor-default"
            >
              <button 
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-full text-zinc-400 hover:text-white transition-colors z-10 backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center p-2 sm:p-4 bg-zinc-900/20">
                <Image
                  src={certificates[selectedIndex].image}
                  alt={certificates[selectedIndex].title}
                  width={1200}
                  height={800}
                  className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg drop-shadow-2xl"
                  quality={100}
                />
              </div>
              
              <div className="w-full bg-zinc-900/80 border-t border-zinc-800/80 p-4 text-center backdrop-blur-md">
                <p className="text-sm font-medium text-zinc-300">{certificates[selectedIndex].title}</p>
                <p className="text-xs font-mono text-zinc-500 mt-1">{certificates[selectedIndex].issuer} • {certificates[selectedIndex].year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}