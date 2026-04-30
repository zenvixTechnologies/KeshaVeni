"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ingredients = [
  {
    id: "amla",
    name: "Amla (Indian Gooseberry)",
    description: "Rich in Vitamin C and antioxidants, Amla strengthens hair follicles and prevents premature greying. It acts as a natural conditioner, leaving your hair smooth and shiny.",
    image: "/images/amla_ingredient.webp",
    color: "from-green-500/20 to-emerald-900/40"
  },
  {
    id: "herbs",
    name: "Bhringraj & Brahmi",
    description: "Known as the 'King of Herbs' for hair, Bhringraj promotes profound hair growth. Brahmi soothes the scalp, relieving stress and promoting a deep, restful sleep.",
    image: "/images/ayurvedic_herbs.webp",
    color: "from-amber-500/20 to-[#0f2e1c]/40"
  }
];

export default function IngredientsSection() {
  const [activeId, setActiveId] = useState(ingredients[0].id);

  return (
    <section id="ingredients" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2f6f3e]/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#F1CA41] text-sm font-medium tracking-widest uppercase mb-2 block">Nature&apos;s Apothecary</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ingredient Spotlight
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Every drop of Kesha Veni is packed with the purest Ayurvedic herbs, traditionally cold-pressed to preserve their potent healing properties.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          
          {/* Interactive List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {ingredients.map((ing) => (
              <button
                key={ing.id}
                onMouseEnter={() => setActiveId(ing.id)}
                onClick={() => setActiveId(ing.id)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border backdrop-blur-sm
                  ${activeId === ing.id 
                    ? "bg-[#2f6f3e]/20 border-[#F1CA41]/50 shadow-[0_0_20px_rgba(241,202,65,0.1)]" 
                    : "bg-zinc-900/50 border-zinc-800 hover:border-[#7acb88]/50 hover:bg-zinc-800/50"
                  }`}
              >
                <h3 className={`text-2xl font-bold mb-2 transition-colors ${activeId === ing.id ? "text-[#F1CA41]" : "text-white"}`}>
                  {ing.name}
                </h3>
                <AnimatePresence>
                  {activeId === ing.id && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-zinc-300 leading-relaxed overflow-hidden"
                    >
                      {ing.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          {/* Image Display */}
          <div className="w-full lg:w-2/3 h-[500px] relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            <AnimatePresence mode="wait">
              {ingredients.map((ing) => (
                activeId === ing.id && (
                  <motion.div
                    key={ing.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-t ${ing.color} z-10`} />
                    <Image 
                      src={ing.image} 
                      alt={ing.name} 
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover"
                      priority={false}
                      loading="lazy"
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
