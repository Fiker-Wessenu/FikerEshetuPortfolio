import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { CV_DATA } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-14 sm:py-20 bg-black text-white overflow-hidden border-t border-white/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-0 right-40 w-48 h-48 rounded-full bg-red-500/5 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-40 w-56 h-56 rounded-full bg-red-600/5 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-10 sm:mb-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.04,
                  }
                }
              }}
              className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4"
            >
              {CV_DATA.name.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  transition={{ type: 'spring', stiffness: 150, damping: 12 }}
                  className="inline-block hover:text-red-400 hover:scale-110 transition duration-300"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-6"
            >
              (c) {new Date().getFullYear()} All Rights Reserved
            </motion.p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-px bg-gradient-to-r from-red-500 to-transparent origin-left"
            />
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:items-end space-y-6 sm:space-y-8"
          >
            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap justify-center md:justify-end gap-6 sm:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                href="https://github.com/Fiker-Wessenu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-white/50 hover:text-red-400 transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/fiker-eshetu-3a3759249"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="text-white/50 hover:text-red-400 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href={`mailto:${CV_DATA.contact.email}`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-white/50 hover:text-red-400 transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
            
            {/* Links and Back to Top */}
            <motion.div 
              className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.a 
                href="https://carpurchase-byfiker.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ x: 4 }}
                className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-red-400 transition-colors duration-300"
              >
                Car Sales Platform
              </motion.a>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -3 }}
                className="group flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.3em] text-white/50 hover:text-red-400 transition-colors duration-300 p-0 h-auto bg-none border-none cursor-pointer"
              >
                <span>Back to top</span>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUp className="h-4 w-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent origin-center"
        />
      </div>
    </footer>
  );
}
