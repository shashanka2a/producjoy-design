"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Check, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    icon: "🎯",
    name: "Starter",
    subtitle: "Perfect for Testing",
    duration: "2 Days",
    price: "$2,000",
    description: "Perfect for single-page or landing design",
    features: [
      "1 design concept",
      "2 revisions included",
      "Desktop + Mobile responsive",
      "Figma file handoff",
      "48-hour delivery",
    ],
    color: "#8A6BFF",
  },
  {
    icon: "🚀",
    name: "Sprint",
    subtitle: "Most Popular Choice",
    duration: "1 Week",
    price: "$5,000",
    description: "Full brand + UI kit for growing startups",
    features: [
      "Complete brand identity",
      "Full UI design system",
      "Unlimited revisions",
      "Interactive prototypes",
      "Design tokens & components",
      "7-day delivery",
      "Slack collaboration",
    ],
    popular: true,
    color: "#FF2EF5",
  },
  {
    icon: "🌌",
    name: "Studio+",
    subtitle: "Enterprise Solution",
    duration: "1 Month",
    price: "$15,000",
    description: "End-to-end product design system",
    features: [
      "Everything in Sprint",
      "Multi-platform design",
      "User research & testing",
      "Motion & interaction design",
      "Developer handoff support",
      "30-day delivery",
      "Dedicated design lead",
      "Priority support",
    ],
    color: "#8A6BFF",
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="pricing" ref={ref} className="px-6 py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[#FF2EF5]/10 to-[#8A6BFF]/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
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
            <span className="text-xs uppercase tracking-wider text-[#8A6BFF]">Pricing Plans</span>
          </motion.div>
          <h2 className="mb-6 text-white max-w-3xl mx-auto">
            Choose your <span className="bg-gradient-to-r from-[#FF2EF5] to-[#8A6BFF] bg-clip-text text-transparent">design sprint</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '1.125rem' }}>
            Flexible design engagements that match your timeline and budget • no hidden fees, no surprises.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-500 ${
                plan.popular
                  ? "bg-gradient-to-b from-white/[0.12] to-white/[0.04] border-2 border-[#FF2EF5]/50 md:-translate-y-2"
                  : "bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: plan.popular ? -8 : 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: plan.popular ? -10 : -6, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF2EF5] to-[#8A6BFF] text-white text-sm flex items-center gap-2 shadow-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="w-4 h-4" />
                  Most Popular
                </motion.div>
              )}
              
              {/* Glow effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 bg-gradient-to-br ${plan.popular ? "from-[#FF2EF5]/20 to-[#8A6BFF]/20" : "from-white/10 to-white/5"} -z-10 blur-xl`}
                animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
              />
              
              <div className="relative">
                {/* Icon and header */}
                <div className="mb-6">
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {plan.icon}
                  </motion.div>
                  <h3 className="text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-white/50">{plan.subtitle}</p>
                  <div className="text-xs text-white/40 mt-2">{plan.duration}</div>
                </div>
                
                {/* Price */}
                <div className="mb-6">
                  <motion.div
                    className="flex items-baseline gap-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                  >
                    <span className="text-white" style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1 }}>
                      {plan.price}
                    </span>
                  </motion.div>
                </div>
                
                <p className="text-white/60 mb-8 leading-relaxed">{plan.description}</p>
                
                {/* CTA Button */}
                <motion.a
                  href="https://calendly.com/5ha5hank/availability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl mb-8 transition-all duration-300 relative overflow-hidden group block ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#FF2EF5] to-[#8A6BFF] text-white shadow-[0_0_28px_rgba(255,46,245,0.18)]"
                      : "border-2 border-white/20 text-white hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {plan.popular && (
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%", skewX: -20 }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  )}
                </motion.a>
                
                {/* Features list */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.15 + featureIndex * 0.05 }}
                    >
                      <motion.div
                        className="mt-0.5 flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${plan.color}40, ${plan.color}20)`,
                            border: `1px solid ${plan.color}60`,
                          }}
                        >
                          <Check className="w-3 h-3" style={{ color: plan.color }} />
                        </div>
                      </motion.div>
                      <span className="text-white/80 leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-white/60 mb-4">Need a custom package?</p>
          <motion.button
            className="text-transparent bg-gradient-to-r from-[#FF2EF5] to-[#8A6BFF] bg-clip-text hover:opacity-80 transition-opacity underline decoration-[#FF2EF5]/30 underline-offset-4"
            whileHover={{ scale: 1.05 }}
          >
            Let's talk about your project →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
