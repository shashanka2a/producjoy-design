"use client";

import { motion } from "motion/react";
import { ArrowRight, Zap, Package, Clock } from "lucide-react";

// Background ornaments removed for a cleaner hero

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-32 overflow-hidden">
      {/* Minimal background, no gradients for a pitch-black look */}
      
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-sm text-white/60">✨ Premium Design Studio</span>
          </motion.div>

          <h1 className="mb-8 max-w-5xl mx-auto">
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Design world-class
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-[#FF2EF5] via-[#C945FF] to-[#8A6BFF] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              experiences, insanely fast
            </motion.span>
          </h1>
        </motion.div>
        
          <motion.p
          className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Premium UI + UX + Brand design crafted for startups that move at lightning speed. 
          From concept to prototype, we make design happen.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 sm:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://calendly.com/5ha5hank/availability"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF2EF5] to-[#8A6BFF] text-white flex items-center gap-2 shadow-[0_0_28px_rgba(255,46,245,0.18)] relative overflow-hidden"
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(255,46,245,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start Your Design</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
              initial={{ x: "-100%", skewX: -20 }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.a>

          <motion.a
            href="#work"
            className="group px-8 py-4 rounded-xl border-2 border-white/15 text-white backdrop-blur-sm bg-white/5 hover:border-white/30 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Our Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF2EF5]/5 to-[#8A6BFF]/5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          {[
            { icon: Clock, value: "2–10 days", label: "Delivery time", color: "#FF2EF5" },
            { icon: Package, value: "50+ Designs", label: "shipped", color: "#8A6BFF" },
            { icon: Zap, value: "24/7", label: "Collaboration", color: "#FF2EF5" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group flex items-center gap-4 cursor-default"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300"
                style={{
                  boxShadow: `0 0 0 rgba(${stat.color === "#FF2EF5" ? "255,46,245" : "138,107,255"},0.3)`,
                }}
                whileHover={{
                  boxShadow: `0 0 30px rgba(${stat.color === "#FF2EF5" ? "255,46,245" : "138,107,255"},0.4)`,
                }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </motion.div>
              <div className="text-left">
                <div className="text-white">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
