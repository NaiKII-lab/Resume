"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}