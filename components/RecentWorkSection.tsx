"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Liftoff.design",
    description: "Sprint-based design for founders.",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    gradient: "from-[#FF2EF5] to-[#8A6BFF]",
    year: "2024",
  },
  {
    title: "Rydify App",
    description: "Clean, ride-sharing interface built in Figma.",
    tags: ["Mobile App", "Design System", "Prototyping"],
    gradient: "from-[#8A6BFF] to-[#FF2EF5]",
    year: "2024",
  },
  {
    title: "InOrbyt Rebrand",
    description: "Web3 ecosystem identity with dynamic logo system.",
    tags: ["Rebranding", "Logo Design", "Web3"],
    gradient: "from-[#FF2EF5] to-[#8A6BFF]",
    year: "2025",
  },
];

export function RecentWorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="work" ref={ref} className="px-6 py-24 relative overflow-hidden">
      {/* Background gradients removed for minimal look */}

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-4 px-3 py-1 rounded-full border border-[#FF2EF5]/20 bg-[#FF2EF5]/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-wider text-[#FF2EF5]">Featured Work</span>
          </motion.div>
          <h2 className="mb-6 text-white max-w-3xl">
            Startups we've helped ship beautiful products
          </h2>
          <p className="text-white/60 max-w-2xl leading-relaxed" style={{ fontSize: '1.125rem' }}>
            Real projects, real results. See how we transform ideas into stunning digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              {/* Gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Border glow */}
              <motion.div
                className={`absolute -inset-[1px] bg-gradient-to-br ${project.gradient} rounded-3xl opacity-0 blur-xl -z-10`}
                animate={hoveredIndex === index ? { opacity: 0.5 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Card content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Project preview area with animated gradient */}
                <div className="mb-6 h-56 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center border border-white/10 overflow-hidden relative group-hover:border-white/20 transition-all duration-500">
                  <motion.div
                    className={`w-32 h-32 rounded-full bg-gradient-to-br ${project.gradient} opacity-40`}
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                      rotate: hoveredIndex === index ? [0, 180, 360] : 0,
                    }}
                    transition={{ duration: 3, repeat: hoveredIndex === index ? Infinity : 0 }}
                  />
                  
                  {/* Year badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <span className="text-xs text-white/70">{project.year}</span>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-6"
                    initial={{ opacity: 0 }}
                    animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <motion.div
                    animate={hoveredIndex === index ? { x: 4, y: -4 } : { x: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
                  </motion.div>
                </div>

                <p className="text-white/60 group-hover:text-white/80 mb-4 flex-1 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm group-hover:border-white/20 group-hover:text-white/80 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.04, ease: "easeOut" }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all work CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF2EF5]/10 to-[#8A6BFF]/10"
              initial={{ x: "-100%", skewX: -20 }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
