import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { CV_DATA } from '../constants';

export default function Certifications() {

  // 🎨 Gradient palette
  const colors = [
    "from-red-500/20 to-pink-500/20",
    "from-blue-500/20 to-cyan-500/20",
    "from-purple-500/20 to-indigo-500/20",
    "from-green-500/20 to-emerald-500/20",
    "from-yellow-500/20 to-orange-500/20"
  ];

  return (
    <section id="certifications" className="section-fx relative py-32 bg-black text-white overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-red-500/10 blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-red-400/5 blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400 mb-4"
          >
            Recognition
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold"
          >
            Certifications
          </motion.h2>
        </div>

        {/* HORIZONTAL SCROLL */}
        <div className="overflow-x-auto no-scrollbar">
          <motion.div
            className="flex gap-8 px-2 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
          >
            {CV_DATA.certifications.map((cert, index) => {
              const gradient = colors[index % colors.length];

              return (
                <motion.div
                  key={cert.title}
                  className="min-w-[280px] sm:min-w-[320px]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                >
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"

                    // 🔥 Hover 3D effect
                    whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}

                    // 🔥 Animated gradient background
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}

                    className={`relative flex flex-col h-full p-8 rounded-2xl border border-white/10
                    bg-gradient-to-br ${gradient}
                    backdrop-blur-xl
                    shadow-lg shadow-red-500/10
                    hover:shadow-red-500/30
                    hover:border-red-400/50
                    transition-all duration-300 group/card
                    bg-[length:200%_200%]`}  // needed for animation
                    style={{ transformPerspective: 1000 }}
                  >

                    {/* Glow Border */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl border-2 border-red-400/0 group-hover/card:border-red-400/50"
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(239, 68, 68, 0)',
                          '0 0 20px rgba(239, 68, 68, 0.3)',
                          '0 0 0px rgba(239, 68, 68, 0)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Shine */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="
                        absolute inset-0 opacity-0 group-hover/card:opacity-100
                        bg-gradient-to-r from-transparent via-white/5 to-transparent
                        translate-x-[-100%] group-hover/card:translate-x-[100%]
                        transition-transform duration-700
                      " />
                    </div>

                    {/* ICON */}
                    <div className="relative z-10 flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-red-400"
                      >
                        <Award className="h-6 w-6" />
                      </motion.div>

                      <ExternalLink className="h-4 w-4 text-white/30 group-hover/card:text-red-400 transition" />
                    </div>

                    {/* TITLE */}
                    <h3 className="relative z-10 text-lg font-semibold leading-tight flex-grow">
                      {cert.title}
                    </h3>

                    {/* LABEL */}
                    <p className="relative z-10 text-xs font-semibold text-red-400 uppercase tracking-wider mt-4">
                      Verified Credential
                    </p>

                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}