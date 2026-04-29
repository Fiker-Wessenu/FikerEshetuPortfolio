import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="section-fx relative h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      <div className="relative z-10 max-w-7xl w-full px-6 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">

          {/* NAME WITH PECULIAR ANIMATION */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04
                }
              }
            }}
            className="mt-16 lg:-ml-4 text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold tracking-tight whitespace-nowrap
            bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent
            drop-shadow-[0_0_25px_rgba(255,0,0,0.6)] animate-[pulse_2s_ease-in-out_infinite] flex whitespace-nowrap justify-center lg:justify-start gap-[2px]"
          >
            {CV_DATA.name.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ type: 'spring', stiffness: 180, damping: 10 }}
                className="inline-block hover:scale-110 hover:text-red-300 transition duration-300"
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* IMAGE (SHIFTED RIGHT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 lg:ml-6"
          >
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-red-500 shadow-[0_0_60px_rgba(255,0,0,0.6)]">
              <img
                src={CV_DATA.profileImage}
                alt={CV_DATA.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* BUTTONS (SHIFTED RIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 lg:ml-6"
          >
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md shadow-red-900/30"
            >
              Contact Me
            </a>

            <a
              href={CV_DATA.cvLink}
              download="Complete2_CV_Fiker.pdf"
              className="px-4 py-2 rounded-full border border-white/30 hover:border-red-400 hover:text-red-400 text-white text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              📥 Download CV
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">

          {/* TITLE WITH PECULIAR ANIMATION */}
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
            className="mt-8 text-xl sm:text-2xl md:text-3xl font-serif italic text-white/80 flex flex-wrap gap-1"
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
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* SUMMARY */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-base sm:text-lg text-white/70 leading-relaxed"
          >
            {CV_DATA.summary}
          </motion.p>

          <motion.p
            className="mt-6 text-sm sm:text-base font-medium text-red-400/90 flex flex-wrap gap-[1px]"
          >
            {'Available for work and collaboration'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10, rotate: -8 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 10], rotate: [-8, 0, 0, 8] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                  delay: i * 0.04,
                  ease: 'easeInOut'
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
