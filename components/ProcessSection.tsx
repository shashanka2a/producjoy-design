"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { FileText, Pencil, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Brief",
    duration: "1 Day",
    description: "We align on goals, users, and visual direction through a collaborative discovery workshop.",
    color: "#FF2EF5",
    details: ["Stakeholder interviews", "Competitive analysis", "Visual mood boards", "Success metrics"],
  },
  {
    icon: Pencil,
    title: "Design",
    duration: "3-7 Days",
    description: "Pixel-perfect execution using live Figma boards with real-time collaboration and feedback.",
    color: "#8A6BFF",
    details: ["Wireframes & flows", "High-fidelity mockups", "Interactive prototypes", "Design system"],
  },
  {
    icon: Rocket,
    title: "Deliver",
    duration: "1 Day",
    description: "Complete handoff with components, design tokens, developer documentation, and support.",
    color: "#FF2EF5",
    details: ["Component library", "Design tokens", "Documentation", "Developer support"],
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="process" ref={ref} className="px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-4 px-3 py-1 rounded-full border border-[#8A6BFF]/20 bg-[#8A6BFF]/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-wider text-[#8A6BFF]">Our Process</span>
          </motion.div>
          <h2 className="mb-6 text-white max-w-3xl">
            From <span className="bg-gradient-to-r from-[#FF2EF5] to-[#8A6BFF] bg-clip-text text-transparent">idea to execution</span> in days
          </h2>
          <p className="text-white/60 max-w-2xl leading-relaxed" style={{ fontSize: '1.125rem' }}>
            A streamlined workflow designed for speed without compromising quality • because great design shouldn't take months.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Animated vertical connecting line */}
          <motion.div
            className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#FF2EF5] via-[#8A6BFF] to-[#FF2EF5] hidden md:block"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="flex-1 text-left"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden">
                    {/* Hover gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}10, ${step.color}05)`,
                      }}
                    />

                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center relative"
                          style={{
                            background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                            border: `1px solid ${step.color}40`,
                          }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <step.icon className="w-7 h-7" style={{ color: step.color }} />
                          <motion.div
                            className="absolute inset-0 rounded-2xl"
                            style={{ boxShadow: `0 0 0 rgba(${step.color === "#FF2EF5" ? "255,46,245" : "138,107,255"},0.3)` }}
                            animate={hoveredIndex === index ? {
                              boxShadow: `0 0 30px rgba(${step.color === "#FF2EF5" ? "255,46,245" : "138,107,255"},0.5)`,
                            } : {}}
                          />
                        </motion.div>
                        <div className="text-left">
                          <h3 className="text-white mb-1">{step.title}</h3>
                          <p className="text-sm" style={{ color: step.color }}>{step.duration}</p>
                        </div>
                      </div>
                      <p className="text-white/70 mb-6 leading-relaxed text-left">{step.description}</p>

                      {/* Details list */}
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={hoveredIndex === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.details.map((detail, i) => (
                          <motion.div
                            key={detail}
                            className="flex items-center gap-2 text-left"
                            initial={{ opacity: 0, x: -10 }}
                            animate={hoveredIndex === index ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: step.color }} />
                            <span className="text-sm text-white/50">{detail}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Center animated dot */}
                <div className="relative z-10 hidden md:block">
                  <motion.div
                    className="w-8 h-8 rounded-full relative"
                    style={{ background: step.color }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ background: step.color }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
