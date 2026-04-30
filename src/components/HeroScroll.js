"use client";

import React, { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 240;

export default function HeroScroll() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Render specific frame
  const renderFrame = React.useCallback((index, imageArray = images) => {
    if (!canvasRef.current) return;
    
    // Find the closest loaded frame if the exact one isn't loaded yet
    let imgToDraw = imageArray[index - 1];
    if (!imgToDraw) {
      for (let i = index - 1; i >= 0; i--) {
        if (imageArray[i]) {
          imgToDraw = imageArray[i];
          break;
        }
      }
    }
    
    if (!imgToDraw) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = imgToDraw;

    // Ensure canvas dimensions match window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Calculate scaling to cover the whole screen (like object-fit: cover)
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  }, [images]);

  // Preload images progressively
  useEffect(() => {
    const loadedImages = new Array(FRAME_COUNT).fill(null);
    
    // Function to load the rest of the images
    const loadRemainingFrames = () => {
      for (let i = 2; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/images/hero_section/ezgif-frame-${paddedIndex}.webp`;
        img.onload = () => {
          loadedImages[i - 1] = img;
          setImages([...loadedImages]);
        };
      }
    };

    // Load Frame 1 first to display immediately
    const firstImg = new Image();
    firstImg.src = `/images/hero_section/ezgif-frame-001.webp`;
    firstImg.onload = () => {
      loadedImages[0] = firstImg;
      setImages([...loadedImages]);
      
      if (canvasRef.current) {
        // We pass the array directly since state might not have updated yet
        renderFrame(1, loadedImages);
      }
      
      // Once first frame is painted, silently load the rest
      loadRemainingFrames();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Calculate scroll progress relative to the container
      const start = window.innerHeight; // Start animation when container hits top
      const end = rect.height - window.innerHeight;
      
      // Scroll amount inside the container
      const scrollY = -rect.top;
      
      let progress = scrollY / end;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * FRAME_COUNT)
      );
      
      // Request animation frame for smooth drawing
      requestAnimationFrame(() => renderFrame(frameIndex + 1));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(scrollProgress * FRAME_COUNT)
      );
      renderFrame(frameIndex + 1);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images, scrollProgress, renderFrame]);

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-white text-center p-6">
          <FeatureText 
            progress={scrollProgress} 
            start={0.02} 
            end={0.16} 
            title="Kesha Veni" 
            desc="Nourish Your Roots, Naturally 🌿" 
            titleClass="font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#F1CA41] via-[#fff5d1] to-[#d4af37] drop-shadow-[0_10px_40px_rgba(241,202,65,0.6)] filter"
            descClass="text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-widest mt-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] uppercase"
          />
          <FeatureText 
            progress={scrollProgress} 
            start={0.18} 
            end={0.32} 
            title="100% Ayurvedic Formula" 
            desc="Authentic & Pure" 
            titleClass="text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] font-black"
            descClass="text-3xl md:text-4xl lg:text-5xl font-serif text-[#F1CA41] italic mt-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          />
          <FeatureText 
            progress={scrollProgress} 
            start={0.34} 
            end={0.48} 
            title="Powered by Nature's Finest Herbs" 
            desc="" 
            titleClass="text-[#7acb88] drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] font-black"
          />
          <FeatureText 
            progress={scrollProgress} 
            start={0.50} 
            end={0.64} 
            title="Reduces Hair Fall" 
            desc="Stronger roots, healthier growth" 
            titleClass="text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] font-black"
            descClass="text-2xl md:text-3xl font-light text-[#7acb88] tracking-widest mt-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] uppercase"
          />
          <FeatureText 
            progress={scrollProgress} 
            start={0.66} 
            end={0.80} 
            title="Strengthens Hair from Root to Tip" 
            desc="" 
            titleClass="font-serif bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] filter"
          />
          <FeatureText 
            progress={scrollProgress} 
            start={0.82} 
            end={0.98} 
            title="Improves Sleep & Scalp Health" 
            desc="Relax and Rejuvenate" 
            titleClass="text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] font-black"
            descClass="text-3xl md:text-4xl lg:text-5xl font-serif text-[#F1CA41] italic mt-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureText({ progress, start, end, title, desc, titleClass = "text-white", descClass = "text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" }) {
  // Calculate opacity based on progress
  let opacity = 0;
  let translateY = 40;
  let scale = 0.9;

  if (progress >= start && progress <= end) {
    // Fade in
    const fadeDuration = 0.04; // 4% of scroll for fade
    if (progress < start + fadeDuration) {
      opacity = (progress - start) / fadeDuration;
      translateY = 40 * (1 - opacity);
      scale = 0.9 + 0.1 * opacity;
    } 
    // Fade out
    else if (progress > end - fadeDuration) {
      opacity = (end - progress) / fadeDuration;
      translateY = -40 * (1 - opacity);
      scale = 0.9 + 0.1 * opacity;
    } 
    // Fully visible
    else {
      opacity = 1;
      translateY = 0;
      scale = 1;
    }
  }

  return (
    <div 
      className="absolute flex flex-col items-center justify-center max-w-4xl transition-transform duration-75 will-change-transform"
      style={{ 
        opacity, 
        transform: `translateY(${translateY}px) scale(${scale})`,
        visibility: opacity > 0 ? "visible" : "hidden"
      }}
    >
      <h2 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 ${titleClass}`}>
        {title}
      </h2>
      {desc && (
        <p className={descClass}>
          {desc}
        </p>
      )}
    </div>
  );
}
