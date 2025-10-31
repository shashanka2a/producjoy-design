"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Palette, Users, Presentation, Shirt } from "lucide-react";

const services = [
  {
    icon: Palette,
    number: "01",
    title: "Brand Identity & Strategy",
    description: "Define your startup's visual DNA with timeless typography, color systems, and logo design that resonates.",
    gradient: "from-[#FF2EF5]/10 to-[#8A6BFF]/10",
    borderGradient: "from-[#FF2EF5] to-[#8A6BFF]",
    iconColor: "#FF2EF5",
  },
  {
    icon: Presentation,
    number: "02",
    title: "Pitch Decks",
    description: "Investor-ready presentation decks that tell your story with clarity, impact, and stunning visuals that get funded.",
    gradient: "from-[#8A6BFF]/10 to-[#FF2EF5]/10",
    borderGradient: "from-[#8A6BFF] to-[#FF2EF5]",
    iconColor: "#8A6BFF",
  },
  {
    icon: Users,
    number: "03",
    title: "Product UX Design",
    description: "User-tested flows that convert and delight, backed by research and behavioral psychology principles.",
    gradient: "from-[#FF2EF5]/10 to-[#8A6BFF]/10",
    borderGradient: "from-[#FF2EF5] to-[#8A6BFF]",
    iconColor: "#FF2EF5",
  },
  {
    icon: Shirt,
    number: "04",
    title: "Merch & Print Design",
    description: "T-shirts, stickers, posters, and swag that amplify your brand. From concept to print-ready files.",
    gradient: "from-[#8A6BFF]/10 to-[#FF2EF5]/10",
    borderGradient: "from-[#8A6BFF] to-[#FF2EF5]",
    iconColor: "#8A6BFF",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  return (
    <section ref={ref} className="px-6 py-24 relative">
      {/* Decorative gradients removed for a cleaner, pitch-black aesthetic */}

      <div className="max-w-7xl mx-auto">
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
            <span className="text-xs uppercase tracking-wider text-[#FF2EF5]">Our Services</span>
          </motion.div>
          <h2 className="mb-6 text-white max-w-3xl">
            Everything you need to design remarkable products
          </h2>
          <p className="text-white/60 max-w-2xl leading-relaxed" style={{ fontSize: '1.125rem' }}>
            Complete design solutions that scale with your startup's ambitions—from brand foundations to product launch.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={false}
              />
              
              {/* Border glow on hover */}
              <motion.div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${service.borderGradient} blur-xl -z-10`}
                initial={false}
              />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.borderGradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <span className="text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
                    {service.number}
                  </span>
                </div>
                
                <motion.h3 
                  className="mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 group-hover:bg-clip-text transition-all duration-300"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-white/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed"
                  whileHover={{ x: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.description}
                </motion.p>

                {/* Hover arrow */}
                <motion.div
                  className="mt-6 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: service.iconColor }}
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span>Learn more</span>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path
                      d="M1 8h14M9 2l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
