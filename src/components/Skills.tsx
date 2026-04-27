import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../constants';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

export default function Skills() {
  return (
    <section id="skills" className="section-fx relative py-32 bg-black text-white overflow-hidden">
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
            Expertise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold text-white"
          >
            My Skills
          </motion.h2>
        </div>

        {/* TABS */}
        <Tabs defaultValue="programming" className="w-full max-w-5xl mx-auto">

          {/* TAB LIST */}
          <div className="flex justify-center mb-16 overflow-x-auto no-scrollbar">
            <TabsList className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 flex gap-2 shadow-lg shadow-black/20">
              {Object.keys(CV_DATA.skills).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider
                  text-white/60 hover:text-white hover:bg-white/10
                  data-[state=active]:bg-red-500 data-[state=active]:text-white 
                  transition-all duration-300"
                >
                  {category.replace('_', ' ')}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* TAB CONTENT */}
          {Object.entries(CV_DATA.skills).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
                      flex flex-col items-center justify-center text-center min-h-[148px]
                      hover:bg-red-500/18 hover:-translate-y-1 transition-all duration-300 overflow-hidden border-red-500/35 bg-red-500/12">

                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-red-500/20 blur-xl" />

                      <div className="relative z-10 mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-red-300 font-semibold text-sm group-hover:border-red-400/40 group-hover:text-yellow-300 transition-colors duration-300">
                        {skill.slice(0, 2).toUpperCase()}
                      </div>

                      {/* Letter */}
                      <span className="relative z-10 text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>

                      <span className="relative z-10 mt-3 h-px w-10 bg-white/10 group-hover:bg-red-400/70 transition-colors duration-300" />

                    </div>
                  </motion.div>
                ))}

              </div>
            </TabsContent>
          ))}

        </Tabs>
      </div>
    </section>
  );
}