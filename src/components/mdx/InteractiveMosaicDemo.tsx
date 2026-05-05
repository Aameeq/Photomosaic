import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveMosaicDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const squaresRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      squaresRef.current,
      { scale: 0, opacity: 0, rotation: -15 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="my-12 p-8 border border-stroke rounded-2xl bg-surface/50 backdrop-blur-sm overflow-hidden" ref={containerRef}>
      <h3 className="text-2xl font-display italic text-accent mb-6 mt-0">How The Algorithm Works</h3>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-1 aspect-[2/1] w-full">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) squaresRef.current[i] = el;
            }}
            className="bg-accent/20 rounded-sm w-full h-full hover:bg-accent transition-colors duration-300"
            style={{ animationDelay: `${i * 0.02}s` }}
          />
        ))}
      </div>
      <p className="text-sm text-muted mt-6 mb-0">
        Thousands of source images are analyzed for color and texture, then algorithmically mapped to regions of your primary photo.
      </p>
    </div>
  );
}
