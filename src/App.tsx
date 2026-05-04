/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Volunteering from './components/Volunteering';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

type SectionTransitionProps = {
  children: React.ReactNode;
  delay?: number;
};

function SectionTransition({ children, delay = 0 }: SectionTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden bg-black text-white transition-colors duration-300">
        <Navbar />
        <main className="pt-16">
          <SectionTransition>
            <Hero />
          </SectionTransition>
          <SectionTransition delay={0.03}>
            <About />
          </SectionTransition>
          <SectionTransition delay={0.05}>
            <Education />
          </SectionTransition>
          <SectionTransition delay={0.07}>
            <Projects />
          </SectionTransition>
          <SectionTransition delay={0.09}>
            <Skills />
          </SectionTransition>
          <SectionTransition delay={0.11}>
            <Experience />
          </SectionTransition>
          <SectionTransition delay={0.13}>
            <Awards />
          </SectionTransition>
          <SectionTransition delay={0.15}>
            <Volunteering />
          </SectionTransition>
          <SectionTransition delay={0.17}>
            <Certifications />
          </SectionTransition>
          <SectionTransition delay={0.19}>
            <Contact />
          </SectionTransition>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
