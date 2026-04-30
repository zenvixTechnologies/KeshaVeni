"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/images/shiny_hair.png", alt: "Healthy, shiny Indian hair", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { src: "/images/lifestyle_oil.png", alt: "Woman massaging hair oil", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/images/amla_ingredient.png", alt: "Fresh Amla", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/images/ayurvedic_herbs.png", alt: "Ayurvedic Herbs", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-[#0f2e1c] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            The Kesha Veni <span className="text-[#F1CA41]">Experience</span>
          </h2>
          <p className="text-[#7acb88]/80 max-w-2xl mx-auto text-lg font-light">
            Witness the transformation. True natural beauty starts from the roots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group shadow-2xl ${img.colSpan} ${img.rowSpan}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
