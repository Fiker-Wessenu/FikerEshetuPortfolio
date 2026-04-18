import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CV_DATA } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="section-fx relative py-32 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400 mb-4"
          >
            Best Projects
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-bold text-white"
          >
            Selected Works
          </motion.h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {CV_DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/projects/default.png";
                  }}
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs text-red-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-semibold text-white mt-1">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white/60 mt-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-1 border border-white/10 rounded-full text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}