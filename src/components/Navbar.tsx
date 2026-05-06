import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-black/10' : ''}`}>
        
        {/* Logo */}
        <Link 
          to="/" 
          className="group relative w-9 h-9 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 rounded-full accent-gradient-border"
          title="Photomosaic AI Home"
          aria-label="Photomosaic AI Home"
        >
          <div className="w-full h-full bg-bg rounded-full flex items-center justify-center z-10">
            <span className="font-display italic text-[13px] text-text-primary">PM</span>
          </div>
        </Link>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden md:block" />

        {/* Nav Links */}
        <div className="flex items-center">
          <Link to="/" className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary bg-stroke/50 transition-colors">
            Home
          </Link>
          <Link to="/#articles" className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-muted hover:text-text-primary hover:bg-stroke/50 transition-colors">
            Articles
          </Link>
          <Link to="/#features" className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-muted hover:text-text-primary hover:bg-stroke/50 transition-colors">
            Features
          </Link>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1" />

        {/* Contact Button */}
        <a href="https://photomosaic.work" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center rounded-full text-xs sm:text-sm cursor-pointer">
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          <div className="relative z-10 bg-surface rounded-full backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1 text-text-primary">
            Try Photomosaic <span className="text-[10px]">↗</span>
          </div>
        </a>

      </div>
    </nav>
  );
}
