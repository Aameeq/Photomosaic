export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-stroke">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0 px-0 md:px-8">
            <div className="text-5xl md:text-6xl lg:text-7xl font-display text-text-primary mb-2">97<span className="text-accent">%</span></div>
            <div className="text-sm text-muted uppercase tracking-[0.2em]">Cheaper than competitors</div>
          </div>
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-0 px-0 md:px-8">
            <div className="text-5xl md:text-6xl lg:text-7xl font-display text-text-primary mb-2">12<span className="text-accent">+</span></div>
            <div className="text-sm text-muted uppercase tracking-[0.2em]">Cinematic Styles</div>
          </div>
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-0 px-0 md:px-8">
            <div className="text-5xl md:text-6xl lg:text-7xl font-display text-text-primary mb-2">4K</div>
            <div className="text-sm text-muted uppercase tracking-[0.2em]">Ultra Resolution Output</div>
          </div>

        </div>
      </div>
    </section>
  );
}
