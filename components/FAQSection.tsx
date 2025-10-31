"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How do revisions work?",
    answer: "We include a set number of revisions with each plan (2 for Starter, unlimited for Sprint and Studio+). Revisions are typically turned around within 24-48 hours. We use Figma's commenting system to make feedback seamless and collaborative, ensuring your vision comes to life exactly as you imagine.",
  },
  {
    question: "Can you match my existing brand?",
    answer: "Absolutely! If you have existing brand guidelines, we'll work within them to create designs that feel cohesive with your current identity. If you need a refresh or evolution of your brand, we can help with that too. We start every project with a brand audit to understand your visual language.",
  },
  {
    question: "Do you design logos?",
    answer: "Yes! Logo design is included in our Sprint and Studio+ plans as part of the complete brand identity package. This includes primary logo, variations, favicon, usage guidelines, and file formats optimized for both digital and print applications.",
  },
  {
    question: "Do you handle prototyping?",
    answer: "Yes, all our designs include interactive prototypes in Figma. For Studio+ plans, we create advanced prototypes with micro-interactions and animations that closely mirror the final product experience. These prototypes are perfect for user testing and stakeholder presentations.",
  },
  {
    question: "What file formats do you deliver?",
    answer: "You'll receive organized Figma files with components, design tokens, and style guides. We can also export assets in any format you need (PNG, SVG, PDF, etc.) and provide design specs for your development team. Everything is documented and ready for seamless handoff.",
  },
  {
    question: "Do you work with developers?",
    answer: "Yes! We provide detailed design handoff documentation and are available for developer collaboration. Our Studio+ plan includes dedicated developer support during implementation, including design QA, spec reviews, and technical consultations to ensure pixel-perfect execution.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);
  
  return (
    <section id="faq" ref={ref} className="px-6 py-32 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-3 py-1 rounded-full border border-[#FF2EF5]/20 bg-[#FF2EF5]/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-wider text-[#FF2EF5]">FAQ</span>
          </motion.div>
          <h2 className="mb-6 text-white">
            Questions? We've got <span className="bg-gradient-to-r from-[#FF2EF5] to-[#8A6BFF] bg-clip-text text-transparent">answers</span>
          </h2>
          <p className="text-white/60 leading-relaxed" style={{ fontSize: '1.125rem' }}>
            Everything you need to know about working with us
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            value={openItem}
            onValueChange={setOpenItem}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="group border border-white/10 rounded-2xl px-6 bg-gradient-to-br from-white/[0.07] to-white/[0.02] hover:border-white/20 hover:from-white/[0.10] hover:to-white/[0.03] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gradient glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FF2EF5]/5 to-[#8A6BFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                  />

                  <AccordionTrigger className="text-white hover:no-underline py-6 relative text-left">
                    <div className="flex items-start gap-4 w-full">
                      <motion.div
                        className="mt-1 flex-shrink-0"
                        animate={{
                          rotate: openItem === `item-${index}` ? 45 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#FF2EF5]/20 to-[#8A6BFF]/20 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                          <Plus className="w-4 h-4 text-[#FF2EF5]" />
                        </div>
                      </motion.div>
                      <span className="flex-1 pr-4">{faq.question}</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="text-white/70 pb-6 pl-10 leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={openItem === `item-${index}` ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ y: -4 }}
        >
          <h4 className="text-white mb-2">Still have questions?</h4>
          <p className="text-white/60 mb-6">
            We're here to help. Schedule a call with our team.
          </p>
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF2EF5] to-[#8A6BFF] text-white shadow-[0_0_30px_rgba(255,46,245,0.3)] relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Book a Call</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
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
