import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CostComparisonChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const labelsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      barsRef.current,
      { height: 0, opacity: 0 },
      {
        height: (i) => (i === 0 ? '200px' : '40px'),
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      labelsRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        delay: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <div className="my-12 p-8 border border-stroke rounded-2xl bg-surface/50 backdrop-blur-sm" ref={containerRef}>
      <h3 className="text-2xl font-display italic text-accent mb-12 mt-0">Average Cost Comparison</h3>
      
      <div className="flex items-end justify-center gap-12 h-[220px] mb-4">
        <div className="flex flex-col items-center gap-4">
          <span 
            className="text-lg font-bold text-muted"
            ref={(el) => { if (el) labelsRef.current[0] = el; }}
          >
            $150 - $300+
          </span>
          <div 
            className="w-16 bg-stroke rounded-t-lg relative overflow-hidden"
            ref={(el) => { if (el) barsRef.current[0] = el; }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-stroke/50"></div>
          </div>
          <span className="font-body font-medium text-sm text-muted">Traditional Studio</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span 
            className="text-2xl font-bold text-accent"
            ref={(el) => { if (el) labelsRef.current[1] = el; }}
          >
            $1.00
          </span>
          <div 
            className="w-16 bg-accent rounded-t-lg relative overflow-hidden accent-gradient"
            ref={(el) => { if (el) barsRef.current[1] = el; }}
          >
            <div className="absolute inset-0 bg-white/20"></div>
          </div>
          <span className="font-body font-medium text-sm text-accent">Photomosaic.work</span>
        </div>
      </div>
    </div>
  );
}
