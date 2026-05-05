import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Upload & Analysis",
    description: "Upload your target image and source gallery. Our AI analyzes colors, textures, and geometry to find the perfect matches.",
    icon: "📁",
    details: ["Batch upload thousands of photos", "AI-powered color mapping", "Texture recognition engine"]
  },
  {
    number: "02",
    title: "AI Generation",
    description: "The engine precisely places thousands of tiles, matching every pixel while maintaining the integrity of the original masterpiece.",
    icon: "🤖",
    details: ["LAB Delta-E color science", "Intelligent tile reuse penalty", "Up to 10,000 tiles per mosaic"]
  },
  {
    number: "03",
    title: "Cinematic Motion",
    description: "Export high-resolution 4K video with cinematic zooms. Watch as thousands of memories converge into a single story.",
    icon: "🎥",
    details: ["12 professional animation styles", "4K Ultra-HD MP4 export", "Cinematic zoom & fly-in effects"]
  },
  {
    number: "04",
    title: "Interactive WebAR",
    description: "Share interactive, zoomable mosaics that work on any device. 97% cheaper and faster than traditional software.",
    icon: "🚀",
    details: ["Marker-based AR projection", "Browser-native (no app needed)", "Scan QR to play animation"]
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-bg py-24 relative overflow-hidden">
      {/* Background Decorative Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-stroke to-transparent hidden md:block" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Process</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-6">
            How it <span className="font-display italic text-accent">works</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            From thousands of individual memories to a singular, breathtaking masterpiece. Our AI streamlines the complex art of photomosaic creation.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-12 md:gap-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image/Icon Side */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-[-20px] bg-accent/5 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-surface border border-stroke rounded-[40px] flex items-center justify-center text-7xl md:text-8xl shadow-2xl relative z-10 group-hover:border-accent/30 transition-colors">
                    <span className="grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
                      {step.icon}
                    </span>
                    
                    {/* Floating Number Card */}
                    <div className="absolute -top-4 -right-4 md:-right-8 bg-bg border border-stroke px-4 py-2 rounded-2xl shadow-xl">
                      <span className="text-accent font-display italic text-2xl md:text-3xl">{step.number}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl text-text-primary mb-4 font-medium">{step.title}</h3>
                <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                  {step.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {step.details.map((detail, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-surface border border-stroke rounded-full text-muted/80">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA in section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <a href="https://photomosaic.work" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center rounded-full text-lg px-10 py-5 bg-text-primary text-bg hover:scale-105 transition-all duration-300">
          <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 mask-border p-[2px]"></span>
          <span className="relative z-10 flex items-center gap-3">
            Start Your Masterpiece <span className="text-xl">→</span>
          </span>
        </a>
      </motion.div>
    </section>
  );
}
