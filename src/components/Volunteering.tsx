import React from 'react';
import { motion } from 'motion/react';
import { HandHeart, Landmark } from 'lucide-react';
import { CV_DATA } from '../constants';

export default function Volunteering() {
  return (
    <section id="volunteering" className="section-fx relative py-20 sm:py-24 lg:py-32 bg-black text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400 mb-4"
          >
            Community
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Volunteering
          </motion.h2>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-[2px] h-full bg-white/10" />

          <div className="space-y-12 sm:space-y-16">
            {CV_DATA.volunteering.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.organization}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* ICON */}
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 
                  w-10 h-10 rounded-full bg-black border border-white/10 
                  flex items-center justify-center z-20">
                  {index === 0 ? (
                    <Landmark className="w-4 h-4 text-red-400" />
                  ) : (
                    <HandHeart className="w-4 h-4 text-red-400" />
                  )}
                </div>

                {/* CARD */}
                <div className="w-full sm:w-[45%] ml-12 sm:ml-0">
                  <div className="relative p-5 sm:p-6 rounded-2xl border border-red-500/35 bg-red-500/12 backdrop-blur-md 
                    hover:bg-red-500/18 transition-all duration-300 group">
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-red-500/20 blur-xl" />

                    <div className="relative z-10">
                      <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                        {item.period}
                      </span>

                      <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">
                        {item.role}
                      </h3>

                      <p className="text-sm italic text-white/60 mb-3">
                        {item.organization}
                      </p>

                      <p className="text-sm text-white/70 leading-relaxed">
                        Volunteer leadership role contributing to student-focused and multicultural community initiatives.
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
