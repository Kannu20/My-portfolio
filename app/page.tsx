
import React from 'react';

import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Project';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar/>
      <Hero />
      <ProofBar/>
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer/>
    </main>
  );
}
