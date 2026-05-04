import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center bg-black text-white overflow-hidden py-8 sm:py-12 lg:py-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          
          {/* NAME */}
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2 }}
            className="mt-4 sm:mt-2 overflow-hidden whitespace-nowrap border-r-2 border-red-500 text-[clamp(1.8rem,4.4vw,3.4rem)] font-extrabold tracking-tight leading-[1] bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,0,0.6)] inline-block"
          >
            {CV_DATA.name}
          </motion.h1>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 sm:mt-4"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-red-500 shadow-[0_0_60px_rgba(255,0,0,0.6)] mx-auto md:mx-0">
              <img
                src={CV_DATA.profileImage}
                alt={CV_DATA.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 sm:mt-4 flex flex-wrap justify-center md:justify-start gap-3 w-full"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium text-center transition-all duration-300 hover:scale-105 shadow-md shadow-red-900/30"
            >
              Contact Me
            </a>

            <a
              href={CV_DATA.cvLink}
              download="Complete2_CV_Fiker.pdf"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/30 hover:border-red-400 hover:text-red-400 text-white text-sm font-medium text-center transition-all duration-300 hover:scale-105"
            >
              📥 Download CV
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* TITLE */}
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } }
            }}
            className="text-lg sm:text-2xl md:text-3xl font-serif italic text-white/80 flex flex-wrap gap-1 justify-center md:justify-start"
          >
            {CV_DATA.title.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, rotate: -10 },
                  visible: { opacity: 1, y: 0, rotate: 0 }
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                className="inline-block hover:text-red-400 transition"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* SUMMARY */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl"
          >
            {CV_DATA.summary}
          </motion.p>

          {/* AVAILABILITY */}
          <motion.p className="mt-4 text-sm sm:text-base font-medium text-red-400/90 flex flex-wrap justify-center md:justify-start">
            {'Available for work and collaboration'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10, rotate: -8 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 10], rotate: [-8, 0, 0, 8] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                  delay: i * 0.04
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
}