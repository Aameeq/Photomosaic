import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ZoomImageProps {
  src: string;
  alt: string;
  zoomLevel?: number;
  loupeSize?: number;
}

export default function ZoomImage({ 
  src, 
  alt, 
  zoomLevel = 3, 
  loupeSize = 250 
}: ZoomImageProps) {
  const [showLoupe, setShowLoupe] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { damping: 30, stiffness: 250 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 250 });

  // Use transforms for background position to keep it reactive
  const bgX = useTransform(mouseX, (x) => {
    if (!containerRef.current) return '0%';
    return `${(x / containerRef.current.offsetWidth) * 100}%`;
  });
  const bgY = useTransform(mouseY, (y) => {
    if (!containerRef.current) return '0%';
    return `${(y / containerRef.current.offsetHeight) * 100}%`;
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-white/10 group cursor-none mb-8"
      onMouseEnter={() => setShowLoupe(true)}
      onMouseLeave={() => setShowLoupe(false)}
      onMouseMove={handleMouseMove}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto block transition-all duration-500 group-hover:scale-[1.02]" 
      />
      
      {showLoupe && (
        <motion.div
          className="absolute pointer-events-none rounded-full border-2 border-white/40 shadow-[0_0_40px_rgba(0,0,0,0.7)] overflow-hidden z-50 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            width: loupeSize,
            height: loupeSize,
            left: springX,
            top: springY,
            x: "-50%",
            y: "-50%",
          }}
        >
          <motion.div
            className="absolute"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: `${100 * zoomLevel}%`,
              backgroundPositionX: bgX,
              backgroundPositionY: bgY,
              width: "100%",
              height: "100%",
              backgroundRepeat: 'no-repeat'
            }}
          />
          {/* Lens Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10" />
          {/* Crosshair */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-6 h-px bg-white" />
            <div className="w-px h-6 bg-white" />
          </div>
        </motion.div>
      )}
      
      {/* Tooltip Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col items-center justify-end pb-8">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-[11px] text-white font-medium uppercase tracking-[0.2em]">
          Interactive Zoom
        </div>
      </div>
    </div>
  );
}
