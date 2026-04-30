"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Reduces Hair Fall",
    description: "Strengthens hair roots deeply and prevents breakage & thinning.",
    emoji: "🌱",
    icon: (
      <svg className="w-8 h-8 text-[#F1CA41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Promotes Healthy Growth",
    description: "Activates dormant hair follicles and supports thicker, healthier hair.",
    emoji: "🌿",
    icon: (
      <svg className="w-8 h-8 text-[#F1CA41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Deep Nourishment",
    description: "Penetrates scalp layers to keep hair soft, smooth & hydrated.",
    emoji: "💧",
    icon: (
      <svg className="w-8 h-8 text-[#F1CA41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Improves Sleep",
    description: "Calming herbal ingredients relieve stress through deep scalp massage.",
    emoji: "🌙",
    icon: (
      <svg className="w-8 h-8 text-[#F1CA41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )
  },
  {
    title: "Adds Natural Shine",
    description: "Restores dull hair and gives it a silky, glossy, vibrant finish.",
    emoji: "✨",
    icon: (
      <svg className="w-8 h-8 text-[#F1CA41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "100% Ayurvedic Formula",
    description: "Chemical-free blend. No parabens, no sulfates, just nature's best.",
    emoji: "🛡️",
    icon: (
      <svg className="w-8 h-8 text-[#F1CA41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// SVG leaf component for the floating background effect
const LeafIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C12 22 2.5 16 2.5 8C2.5 4.5 5 2 8 2C10.5 2 12 4.5 12 4.5C12 4.5 13.5 2 16 2C19 2 21.5 4.5 21.5 8C21.5 16 12 22 12 22Z" opacity="0.3"/>
  </svg>
);

const leafData = [
  { top: "10%", left: "20%", rotate: 45, scale: 0.8, opacity: 0.2, x: 20, rotTo: 180, duration: 20 },
  { top: "30%", left: "80%", rotate: 120, scale: 1.2, opacity: 0.15, x: -15, rotTo: 20, duration: 25 },
  { top: "60%", left: "10%", rotate: 200, scale: 0.6, opacity: 0.3, x: 30, rotTo: 300, duration: 18 },
  { top: "80%", left: "70%", rotate: 15, scale: 1.5, opacity: 0.1, x: -25, rotTo: -90, duration: 22 },
  { top: "40%", left: "40%", rotate: 300, scale: 0.9, opacity: 0.25, x: 10, rotTo: 400, duration: 19 },
  { top: "90%", left: "30%", rotate: 90, scale: 1.1, opacity: 0.2, x: -20, rotTo: 0, duration: 24 },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden z-10 bg-[#0f2e1c]">
      {/* Background Cinematic Lighting & Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F1CA41]/15 via-[#2f6f3e]/10 to-transparent blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7acb88]/10 via-[#0f2e1c]/5 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F1CA41]/10 via-transparent to-transparent blur-[80px] pointer-events-none" />

      {/* Floating Leaves Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {leafData.map((leaf, i) => (
          <motion.div
            key={i}
            className="absolute text-[#7acb88]"
            initial={{ 
              top: leaf.top, 
              left: leaf.left, 
              rotate: leaf.rotate,
              scale: leaf.scale,
              opacity: leaf.opacity
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, leaf.x, 0],
              rotate: [null, leaf.rotTo],
            }}
            transition={{
              duration: leaf.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <LeafIcon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#F1CA41]/30 bg-[#F1CA41]/10 backdrop-blur-sm">
            <span className="text-[#F1CA41] text-sm font-medium tracking-widest uppercase">The Essence of Nature</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-[0_4px_20px_rgba(212,175,55,0.15)]">
            Why Choose Kesha Veni?
          </h2>
          <p className="text-xl md:text-2xl text-[#7acb88]/80 max-w-2xl mx-auto font-light">
            Discover the healing touch of 100% pure Ayurvedic oils, crafted to restore your hair&apos;s natural vitality.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-3xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 bg-[#2f6f3e]/10 border border-[#7acb88]/20 hover:border-[#F1CA41]/50 hover:bg-[#2f6f3e]/20 hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] overflow-hidden"
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F1CA41]/0 via-transparent to-[#F1CA41]/0 group-hover:from-[#F1CA41]/10 transition-colors duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-[#0f2e1c]/80 inline-flex items-center justify-center border border-[#7acb88]/20 group-hover:border-[#F1CA41]/40 shadow-[0_0_15px_rgba(47,111,62,0.3)] transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div className="text-4xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter drop-shadow-[0_0_10px_rgba(246,226,122,0.3)]">
                    {feature.emoji}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#F1CA41] transition-colors duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  {feature.title}
                </h3>
                
                <p className="text-[#7acb88]/80 leading-relaxed group-hover:text-[#7acb88] transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
