import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Calendar, Sparkles } from 'lucide-react';
import { CV_DATA } from '../constants';

const iconForAward = (title: string) => {
  if (title.includes('1st Prize')) return Trophy;
  if (title.includes('2nd Prize')) return Medal;
  if (title.includes('Scholarship')) return Sparkles;
  return Award;
};

export default function Awards() {
  const featured = CV_DATA.awards.items.find((item) => item.highlight);
  const others = CV_DATA.awards.items.filter((item) => !item.highlight);

  const [confetti, setConfetti] = useState<any[]>([]); // ✅ FIX

  const burstConfetti = () => {
    const colors = ['#fbbf24', '#fde68a', '#ffffff', '#f59e0b', '#d97706'];

    const particles = Array.from({ length: 35 }).map(() => ({
      id: Math.random().toString(36).substring(2),
      left: 50 + (Math.random() - 0.5) * 10,
      top: 40 + (Math.random() - 0.5) * 10,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
    }));

    setConfetti(particles);
    setTimeout(() => setConfetti([]), 1500);
  };

  const cardColors = [
    "from-amber-500/10 to-yellow-500/10",
    "from-orange-500/10 to-red-500/10",
    "from-purple-500/10 to-pink-500/10",
    "from-blue-500/10 to-indigo-500/10",
    "from-emerald-500/10 to-green-500/10"
  ];

  return (
    <section id="awards" className="relative py-32 text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.14),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.1),transparent_34%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-[0.3em] text-rose-300">
            Achievements
          </span>
          <h2 className="text-4xl font-bold mt-4">Awards</h2>
        </div>

        {/* FEATURED */}
        {featured && (
          <motion.div
            onMouseEnter={burstConfetti}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative mb-14 rounded-3xl border border-white/15 bg-gradient-to-br from-rose-500/15 via-orange-500/10 to-amber-500/15 backdrop-blur-md p-10 shadow-[0_0_40px_rgba(244,63,94,0.12)]"
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {confetti.map((c) => (
                <span
                  key={c.id}
                  className="absolute"
                  style={{
                    left: `${c.left}%`,
                    top: `${c.top}%`,
                    width: `${c.size}px`,
                    height: `${c.size}px`,
                    backgroundColor: c.color,
                    animation: `coin-burst 1.5s ease-out forwards`,
                  }}
                />
              ))}
            </div>

            <h3 className="text-3xl font-bold mb-3">{featured?.title}</h3>
            <p className="text-white/75 mb-6">{featured?.description}</p>

            <div className="flex items-center gap-2 text-rose-300">
              <Calendar className="h-4 w-4" />
              {featured?.duration}
            </div>
          </motion.div>
        )}

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {others.map((item, index) => {
            const Icon = iconForAward(item.title);
            const gradient = cardColors[index % cardColors.length];

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -10, scale: 1.03, rotateX: 4, rotateY: -4 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group relative rounded-2xl border border-white/15 backdrop-blur-md p-7 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.04)]"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-70`}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none"
                  initial={{ opacity: 0.35 }}
                  whileHover={{ opacity: 0.65 }}
                  transition={{ duration: 0.35 }}
                />

                <motion.div
                  className="absolute inset-0 rounded-2xl border border-white/0 pointer-events-none"
                  whileHover={{ borderColor: 'rgba(255,255,255,0.22)' }}
                  transition={{ duration: 0.35 }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between mb-5">
                    <motion.div
                      className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-amber-400/10 rounded-xl border border-amber-300/30 shadow-[0_0_18px_rgba(251,191,36,0.18)]"
                      whileHover={{ rotate: 8, scale: 1.12 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-amber-300" />
                    </motion.div>
                    <span className="text-xs text-white/60">{item.year}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.event}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}