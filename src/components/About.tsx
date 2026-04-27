import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Zap } from 'lucide-react';
import { CV_DATA } from '../constants';

const iconMap: Record<string, any> = {
  Code: Code,
  Database: Database,
  Zap: Zap,
};

export default function About() {
  return (
    <section id="about" className="section-fx relative py-32 bg-black text-white overflow-hidden">
      {/* Background glow to match hero */}
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
            About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl font-medium text-white/80 max-w-3xl leading-relaxed"
          >
            {CV_DATA.about}
          </motion.h2>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {CV_DATA.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon];
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative p-6 rounded-2xl border border-red-500/35 bg-red-500/12 backdrop-blur-md hover:bg-red-500/18 transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-red-500/20 blur-xl" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                    <Icon className="h-6 w-6 text-red-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {highlight.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* EXTRA FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-red-500/35 bg-red-500/12 backdrop-blur-md"
          >
            <h3 className="text-lg font-semibold text-red-400 mb-4">Core Skills</h3>
            <div className="space-y-3 text-sm">
              {['JavaScript', 'React', 'Python', 'Data Science', 'Machine Learning'].map((skill, i) => (
                <div key={i} className="flex justify-between">
                  <span>{skill}</span>
                  <span className="text-white/50">●●●●○</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* QUICK FACTS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-red-500/35 bg-red-500/12 backdrop-blur-md"
          >
            <h3 className="text-lg font-semibold text-red-400 mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>🚀 Passionate about AI & Software Development</li>
              <li>💡 Love solving real-world problems</li>
              <li>🌍 Open to global opportunities</li>
              <li>📚 Continuous learner</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
