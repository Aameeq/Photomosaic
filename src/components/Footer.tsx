import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    // GSAP Marquee
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1
      });
    }
  }, []);

  return (
    <footer className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden border-t border-stroke/30">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <video 
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}assets/media/motion_secondary.mp4`}
          autoPlay 
          muted 
          loop 
          playsInline 
          title="Photomosaic Background Video"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* GSAP Marquee */}
        <div className="w-full overflow-hidden mb-16 md:mb-24 flex whitespace-nowrap">
          <div ref={marqueeRef} className="flex gap-4 text-6xl md:text-8xl lg:text-9xl font-display italic text-white/10 tracking-tight">
            {[...Array(20)].map((_, i) => (
              <span key={i}>CREATE YOUR MASTERPIECE • MEMORIES REIMAGINED • </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mb-24">
          <a 
            href="mailto:hello@photomosaic.work" 
            className="group relative inline-flex items-center justify-center rounded-full text-lg md:text-2xl px-10 py-6 bg-surface border border-stroke text-text-primary hover:border-transparent transition-all duration-300 hover:scale-105"
            title="Contact Photomosaic AI"
            aria-label="Send an email to hello@photomosaic.work"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            <div className="absolute inset-[2px] bg-bg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <span className="relative z-20 flex items-center gap-3">
              hello@photomosaic.work <span className="text-xl">↗</span>
            </span>
          </a>
        </div>

        {/* Footer Bar */}
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted relative z-30 pointer-events-auto">
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/aameeqvr?igsh=MWNtaDNpbDhoMDl1bA==" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors" title="Follow Photomosaic on Instagram" aria-label="Follow Photomosaic on Instagram">Instagram</a>
            <a href="https://www.facebook.com/aameeq2" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors" title="Follow Photomosaic on Facebook" aria-label="Follow Photomosaic on Facebook">Facebook</a>
            <a href="https://www.linkedin.com/company/aame-eq/" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors" title="Connect with Photomosaic on LinkedIn" aria-label="Connect with Photomosaic on LinkedIn">LinkedIn</a>
          </div>
          
          <a 
            href="https://photomosaic.work" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-surface/50 px-4 py-2 rounded-full border border-stroke hover:bg-surface cursor-pointer transition-colors group"
            title="Try Photomosaic AI Maker"
            aria-label="Try Photomosaic AI Maker - Opens in a new tab"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="group-hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold">Try Photomosaic</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
