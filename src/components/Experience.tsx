import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { CV_DATA } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="section-fx relative py-16 sm:py-24 lg:py-32 bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400 mb-4"
          >
            Professional
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[1.65rem] sm:text-4xl md:text-5xl font-bold text-white"
          >
            Work Experience
          </motion.h2>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">

          {/* Vertical line */}
          <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-[2px] h-full bg-white/10" />

          <div className="space-y-9 sm:space-y-16">
            {CV_DATA.experience.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center pl-10 sm:pl-12 md:pl-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >

                {/* ICON */}
                <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border border-white/10 
                  flex items-center justify-center z-20">
                  <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" />
                </div>

                {/* CARD */}
                <div className="w-full md:w-[45%] ml-0">

                  <div className="relative p-4 sm:p-6 rounded-2xl border border-red-500/35 bg-red-500/12 backdrop-blur-md 
                    hover:bg-red-500/18 transition-all duration-300 group">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-red-500/20 blur-xl" />

                    <div className="relative z-10">

                      <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                        {exp.period}
                      </span>

                      <h3 className="text-base sm:text-xl font-semibold text-white mt-1">
                        {exp.role}
                      </h3>

                      <p className="text-sm italic text-white/60 mb-3">
                        {exp.company}
                      </p>

                      <p className="text-sm text-white/60 leading-relaxed">
                        {exp.description}
                      </p>

                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}