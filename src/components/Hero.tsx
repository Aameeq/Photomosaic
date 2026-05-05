import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const roles = ["Photo Mosaics", "Animated Mosaics", "Video Mosaics", "Masterpieces"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex] = useState(0);

  useEffect(() => {
    // Basic setup if needed, video is handled natively
  }, []);

  useEffect(() => {
    // GSAP Entrance
    const ctx = gsap.context(() => {
      gsap.to('.name-reveal', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.1,
        ease: 'power3.out'
      });
      gsap.to('.blur-in', {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.3,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-bg">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          src="/assets/media/hero-bg.mp4"
          autoPlay 
          muted 
          loop 
          playsInline 
          title="Photomosaic AI Photo Mosaic Background Video"
          aria-label="Cinematic background animation showing a professional photomosaic being assembled from thousands of tiny photos"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        <div 
          className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8"
          style={{ opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' }}
        >
          PHOTOMOSAIC BLOG
        </div>
        
        <h1 
          className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6"
          style={{ opacity: 0, transform: 'translateY(50px)' }}
        >
          Photomosaic
        </h1>
        
        <div 
          className="blur-in text-lg md:text-xl text-text-primary mb-4"
          style={{ opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' }}
        >
          Create stunning <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block">{roles[roleIndex]}</span> from your memories.
        </div>
        
        <p 
          className="blur-in text-sm md:text-base text-muted max-w-md mb-12"
          style={{ opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' }}
        >
          Discover the art and technology behind high-resolution, interactive photo mosaics.
        </p>
        
        <div 
          className="blur-in flex flex-wrap justify-center gap-4"
          style={{ opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' }}
        >
          <a href="#articles" className="group relative inline-flex items-center justify-center rounded-full text-sm px-7 py-3.5 transition-all duration-300 hover:scale-105 bg-text-primary text-bg hover:bg-bg hover:text-text-primary">
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 mask-border p-[2px]"></span>
            <span className="relative z-10">Read Articles</span>
          </a>
          
          <a href="https://photomosaic.work" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center rounded-full text-sm px-7 py-3.5 transition-all duration-300 hover:scale-105 border-2 border-stroke bg-bg text-text-primary hover:border-transparent">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            <div className="absolute inset-[2px] bg-bg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <span className="relative z-20">Try Photomosaic</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em] mb-2">SCROLL</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-accent animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
