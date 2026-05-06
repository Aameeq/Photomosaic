import { motion } from 'framer-motion';

const projects = [
  { title: "High-Resolution Output", colSpan: "md:col-span-7", aspect: "aspect-[4/3] md:aspect-auto", img: 6 },
  { title: "Animation Engine", colSpan: "md:col-span-5", aspect: "aspect-[4/3] md:aspect-auto", img: 1 },
  { title: "Interactive Zoom", colSpan: "md:col-span-5", aspect: "aspect-[4/3] md:aspect-auto", img: 7 },
  { title: "Lightning Fast", colSpan: "md:col-span-7", aspect: "aspect-[4/3] md:aspect-auto", img: 3 }
];

export default function SelectedWorks() {
  return (
    <section id="features" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
              Core <span className="font-display italic">capabilities</span>
            </h2>
            <p className="text-muted text-sm md:text-base">
              Explore what makes Photomosaic the ultimate tool for generating massive, interactive photo mosaics.
            </p>
          </div>
          
          <a href="https://photomosaic.work" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center justify-center rounded-full text-sm px-6 py-3 border border-stroke text-text-primary hover:border-transparent relative group mt-8 md:mt-0">
            <span className="absolute inset-[-1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            <div className="absolute inset-[1px] bg-bg rounded-full z-10" />
            <span className="relative z-20 flex items-center gap-2">Try Photomosaic now <span className="text-xs">→</span></span>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <a 
              href="https://photomosaic.work" target="_blank" rel="noopener noreferrer"
              key={i} 
              className={`${project.colSpan} ${project.aspect} md:min-h-[400px] group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer block`}
            >
              <div 
                role="img"
                aria-label={`${project.title} - Photomosaic AI demonstration. High-resolution output at 300 DPI, print-ready for billboards and posters.`}
                className="absolute inset-0 bg-surface transition-transform duration-700 ease-out group-hover:scale-105 bg-cover bg-center"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/media/mosaic-${project.img}.jpg)` }}
                title={`${project.title} - Professional Photomosaic Result`}
              />
              
              {/* Halftone overlay */}
              <div 
                className="absolute inset-0 mix-blend-overlay opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '4px 4px' }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 ease-out flex items-center justify-center">
                <div className="relative inline-flex items-center justify-center rounded-full text-sm px-6 py-3 bg-white text-bg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100">
                  <span className="absolute inset-[-2px] rounded-full accent-gradient z-0"></span>
                  <div className="absolute inset-[2px] bg-white rounded-full z-10" />
                  <span className="relative z-20 flex items-center gap-2">
                    Explore — <span className="font-display italic">{project.title}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <a href="https://photomosaic.work" target="_blank" rel="noopener noreferrer" className="md:hidden w-full mt-8 inline-flex items-center justify-center rounded-full text-sm px-6 py-4 border border-stroke text-text-primary relative group">
          <span className="absolute inset-[-1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          <div className="absolute inset-[1px] bg-bg rounded-full z-10" />
          <span className="relative z-20 flex items-center gap-2">Try Photomosaic now <span className="text-xs">→</span></span>
        </a>

      </div>
    </section>
  );
}
