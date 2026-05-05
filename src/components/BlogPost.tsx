import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function BlogPost({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen pt-32 pb-24 px-6 md:px-10 lg:px-16 text-text-primary">
        <article className="max-w-[800px] mx-auto prose prose-invert prose-headings:font-display prose-headings:italic prose-a:text-accent hover:prose-a:text-white transition-colors">
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
