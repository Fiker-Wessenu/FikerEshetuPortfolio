import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../constants';

export default function Education() {
  return (
    <section id="education" className="section-fx relative py-32 bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400 mb-4"
          >
            My Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold text-white"
          >
            Education
          </motion.h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-16">
            {CV_DATA.education.map((edu, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Node */}
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(255,0,0,0.7)] z-20" />

                  {/* Card */}
                  <div
                    className={`w-full md:w-[45%] group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 ${
                      isLeft ? 'mr-auto' : 'ml-auto'
                    }`}
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-red-500/10 blur-xl" />

                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {edu.degree.split(' – ')[0]}
                      </h3>

                      <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
                        {edu.institution}
                      </p>

                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      <span className="text-sm font-semibold text-red-400">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
