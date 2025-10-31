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
    <section id="process" ref={ref} className="px-6 py-32 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
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
            From idea to execution in days
          </h2>
          <p className="text-white/60 max-w-2xl leading-relaxed" style={{ fontSize: '1.125rem' }}>
            A streamlined workflow designed for speed without compromising quality—because great design shouldn't take months.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Animated vertical connecting line */}
          <motion.div
            className="absolute left-1/2 top-0 w-[2px] bg-white/10 hidden md:block"
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
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden">
                    {/* Gradient hover removed for cleaner look */}

                    <div className="relative">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse md:justify-end" : ""}`}>
                        <motion.div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center relative"
                          style={{
                            background: `rgba(255,255,255,0.06)`,
                            border: `1px solid rgba(255,255,255,0.12)`,
                          }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <step.icon className="w-7 h-7" style={{ color: step.color }} />
                          
                        </motion.div>
                        <div>
                          <h3 className="text-white mb-1">{step.title}</h3>
                          <p className="text-sm text-white/60">{step.duration}</p>
                        </div>
                      </div>
                      <p className="text-white/70 mb-6 leading-relaxed">{step.description}</p>

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
                            className={`flex items-center gap-2 ${index % 2 === 0 ? "md:flex-row-reverse md:justify-end" : ""}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 10 : -10 }}
                            animate={hoveredIndex === index ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color }} />
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
