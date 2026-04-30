"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Ingredients", href: "#ingredients" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? 'pt-4' : 'pt-6'} px-4`}>
      <header 
        className={`relative w-full max-w-7xl rounded-full transition-all duration-500 bg-[#0f2e1c]/30 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] ${
          isScrolled ? "py-2 px-6" : "py-4 px-8"
        }`}
      >
        <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <svg className="w-8 h-8 text-[#F1CA41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-wide">
            Kesha<span className="text-[#F1CA41]">Veni</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[#F1CA41] hover:text-white font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-[#F1CA41] to-[#d4af37] text-[#0f2e1c] font-bold py-2.5 px-6 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(241,202,65,0.4)] hover:shadow-[0_0_30px_rgba(241,202,65,0.6)] transform hover:-translate-y-0.5 border border-[#F1CA41]/50">
            Shop Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#F1CA41] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[110%] left-0 right-0 md:hidden bg-[#0f2e1c]/80 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-white hover:text-[#F1CA41] font-medium text-xl border-b border-white/5 pb-4 last:border-0 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-gradient-to-r from-[#F1CA41] to-[#d4af37] text-[#0f2e1c] font-bold py-3 rounded-full mt-2 shadow-[0_0_20px_rgba(241,202,65,0.4)] w-full border border-[#F1CA41]/50 active:scale-95 transition-transform">
                Shop Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </div>
  );
}
