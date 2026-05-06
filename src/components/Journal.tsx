import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const journals = [
  { title: "What is a Photo Mosaic?", time: "5 min read", date: "Oct 12", link: "/blog/what-is-photo-mosaic" },
  { title: "Top iPhone Mosaic Apps", time: "4 min read", date: "Sep 28", link: "/blog/iphone-mosaic-app" },
  { title: "Photo Mosaic Software Cost", time: "7 min read", date: "Sep 15", link: "/blog/photo-mosaic-cost" },
  { title: "Free Photo Mosaic Tools", time: "6 min read", date: "Aug 30", link: "/blog/free-photo-mosaic-software" }
];

export default function Journal() {
  return (
    <section id="articles" className="bg-bg py-16 md:py-24">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Articles</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
              Recent <span className="font-display italic">articles</span>
            </h2>
            <p className="text-muted text-sm md:text-base">
              Writings on the technology, art, and creation of photo mosaics.
            </p>
          </div>
          
          <button className="hidden md:inline-flex items-center justify-center rounded-full text-sm px-6 py-3 border border-stroke text-text-primary hover:border-transparent relative group mt-8 md:mt-0">
            <span className="absolute inset-[-1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            <div className="absolute inset-[1px] bg-bg rounded-full z-10" />
            <span className="relative z-20 flex items-center gap-2">Read all articles <span className="text-xs">→</span></span>
          </button>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {journals.map((entry, i) => (
            <Link 
              to={entry.link}
              key={i}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 p-6 sm:p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full cursor-pointer transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-14 sm:h-14 bg-surface border border-stroke rounded-xl shrink-0 flex items-center justify-center relative overflow-hidden group-hover:border-accent/50 transition-all duration-500 shadow-inner">
                  {/* Animated Background Pulse */}
                  <motion.div 
                    className="absolute inset-0 bg-accent/5"
                    animate={{ 
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Dynamic Mosaic Icon */}
                  <div 
                    className="relative w-10 h-10 grid grid-cols-2 gap-0.5 z-10"
                    role="img"
                    aria-label={`Animated mosaic icon for: ${entry.title}`}
                  >
                    {[1, 2, 3, 4].map((num) => (
                      <motion.div
                        key={num}
                        className="rounded-[1px] bg-cover bg-center overflow-hidden"
                        animate={{ 
                          opacity: [0.6, 1, 0.6],
                          scale: [0.95, 1.05, 0.95],
                          rotate: [0, num % 2 === 0 ? 5 : -5, 0]
                        }}
                        transition={{ 
                          duration: 2 + num * 0.5, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: num * 0.2
                        }}
                        style={{ 
                          backgroundImage: `url(${import.meta.env.BASE_URL}assets/media/mosaic-${num + 5}.jpg)`,
                          boxShadow: '0 0 10px rgba(0,0,0,0.3)'
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Glass Shine */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <h3 className="text-lg md:text-xl text-text-primary group-hover:text-white transition-colors">{entry.title}</h3>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted">
                <span>{entry.time}</span>
                <span>{entry.date}</span>
                <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-500 group-hover:rotate-45">
                  <span className="text-lg">↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button className="md:hidden w-full mt-8 inline-flex items-center justify-center rounded-full text-sm px-6 py-4 border border-stroke text-text-primary relative group">
          <span className="absolute inset-[-1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          <div className="absolute inset-[1px] bg-bg rounded-full z-10" />
          <span className="relative z-20 flex items-center gap-2">Read all articles <span className="text-xs">→</span></span>
        </button>

      </div>
    </section>
  );
}
