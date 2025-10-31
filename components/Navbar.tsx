"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2 cursor-pointer group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 transition-all duration-300" />
          <span className="text-white font-semibold tracking-tight">ProductJoy</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {["Work", "Process", "Pricing", "FAQ"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/60 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/40 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
        
        <motion.button
          className="px-6 py-2.5 rounded-lg bg-white text-black relative overflow-hidden group border border-white/10 hover:border-white/20 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Start Your Design</span>
          
        </motion.button>
      </div>
    </motion.nav>
  );
}
