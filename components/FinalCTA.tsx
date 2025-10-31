"use client";

import { motion } from "motion/react";
import { ArrowRight, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function FinalCTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative px-6 py-24 overflow-hidden bg-black">
      {/* Pitch black background - no gradients */}
      
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm text-white/60">🚀 Let's Build Together</span>
          </motion.div>

          <h2 className="mb-6 text-white max-w-4xl mx-auto">
            Ready to design your{" "}
            <span className="bg-gradient-to-r from-[#FF2EF5] via-[#C945FF] to-[#8A6BFF] bg-clip-text text-transparent">
              next big idea?
            </span>
          </h2>
          
          <p className="text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '1.125rem' }}>
            Join 100+ founders who trust ProductJoy to craft products that stand out and convert.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <motion.a
              href="https://calendly.com/5ha5hank/availability"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 rounded-xl bg-gradient-to-r from-[#FF2EF5] to-[#8A6BFF] text-white flex items-center gap-3 shadow-[0_0_28px_rgba(255,46,245,0.18)] relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,46,245,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-semibold">Start Your Design</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                initial={{ x: "-100%", skewX: -20 }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.a>

            <motion.a
              href="https://calendly.com/5ha5hank/availability"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 rounded-xl border-2 border-white/15 text-white bg-white/5 hover:border-white/30 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-semibold">Schedule a Call</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FF2EF5]/5 to-[#8A6BFF]/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          {/* Newsletter signup */}
          <motion.div
            className="mb-20 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-white/60 mb-4">Get design tips & insights in your inbox</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF2EF5]/50 focus:bg-white/10 transition-all duration-300"
              />
              <motion.button
                className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="relative border-t border-white/10 pt-12 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <motion.a
                href="/"
                className="flex items-center gap-2 mb-4 cursor-pointer group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-10 h-10 rounded-xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(255,46,245,0.5)] transition-all duration-300">
                  <Image
                    src="/logo.png"
                    alt="ProductJoy"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white font-semibold text-lg">ProductJoy</span>
              </motion.a>
              <p className="text-white/50 text-sm leading-relaxed">
                Premium design studio crafting world-class experiences for startups that move fast.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <div className="space-y-3">
                {["Work", "Process", "Pricing", "FAQ"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-white/60 hover:text-white transition-colors text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <div className="flex gap-3">
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Github, label: "Github" },
                  { icon: Mail, label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 group"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
            <div className="text-white/40 text-sm">
              © {new Date().getFullYear()} ProductJoy. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-white/40 hover:text-white/60 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
