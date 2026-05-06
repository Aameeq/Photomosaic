import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin center content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: pinRef.current,
        pinSpacing: true,
      });

      // Parallax columns
      gsap.to(col1Ref.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(col2Ref.current, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-bg overflow-hidden border-b border-stroke/20">
      
      {/* Layer 1: Pinned Center */}
      <div ref={pinRef} className="absolute inset-0 h-screen w-full flex flex-col items-center justify-center pointer-events-none z-10 px-4">
        <div className="flex flex-col items-center text-center max-w-2xl bg-bg/80 backdrop-blur-md p-8 rounded-3xl pointer-events-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Gallery</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tight mb-6">
            Mosaic <span className="font-display italic">masterpieces</span>
          </h2>
          <p className="text-muted text-sm md:text-base mb-8 max-w-md">
            A collection of breathtaking photo and animated mosaics created by our community.
          </p>
          <a href="https://photomosaic.work" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center rounded-full text-sm px-8 py-4 bg-text-primary text-bg hover:scale-105 transition-all duration-300">
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 mask-border p-[2px]"></span>
            <span className="relative z-10 flex items-center gap-2">Create Your Own <span className="text-xs">↗</span></span>
          </a>
        </div>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1400px] h-full grid grid-cols-2 gap-12 md:gap-40 px-6 md:px-20 pt-[50vh]">
          
          {/* Column 1 */}
          <div ref={col1Ref} className="flex flex-col gap-12 md:gap-32 items-end pt-32 pointer-events-auto">
            {[9, 10, 5].map((item) => (
              <a href="https://photomosaic.work" target="_blank" rel="noopener noreferrer" key={`c1-${item}`} className="w-full max-w-[320px] aspect-square bg-surface border border-stroke rounded-3xl p-4 -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer block hover:border-transparent">
                <div 
                  role="img"
                  aria-label={`Community Mosaic Masterpiece ${item}`}
                  className="w-full h-full bg-surface rounded-2xl overflow-hidden relative group bg-cover bg-center"
                  style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/media/mosaic-${item}.jpg)` }}
                >
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="flex flex-col gap-12 md:gap-32 items-start pointer-events-auto">
            {[4, 2, 8].map((item) => (
              <a href="https://photomosaic.work" target="_blank" rel="noopener noreferrer" key={`c2-${item}`} className="w-full max-w-[320px] aspect-square bg-surface border border-stroke rounded-3xl p-4 rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer block hover:border-transparent">
                <div 
                  role="img"
                  aria-label={`Community Mosaic Masterpiece ${item}`}
                  className="w-full h-full bg-surface rounded-2xl overflow-hidden relative group bg-cover bg-center"
                  style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/media/mosaic-${item}.jpg)` }}
                >
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
