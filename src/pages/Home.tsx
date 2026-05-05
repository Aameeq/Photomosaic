import { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SelectedWorks from '../components/SelectedWorks';
import Journal from '../components/Journal';
import Explorations from '../components/Explorations';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      
      <main className="bg-bg min-h-screen">
        <Hero />
        <SelectedWorks />
        <Journal />
        <HowItWorks />
        <Explorations />
        <Stats />
      </main>

      <Footer />
    </>
  );
}
