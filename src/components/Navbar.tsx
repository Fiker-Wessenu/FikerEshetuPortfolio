import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { Button } from '../../components/ui/button';
import { CV_DATA } from '../constants';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Awards', href: '#awards' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoMissing, setLogoMissing] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-black/85 backdrop-blur-xl shadow-sm border-b border-black/5 dark:border-white/10'
          : 'bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-black/5 dark:border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <div className="flex items-center gap-2 text-lg font-semibold text-emerald-900 dark:text-emerald-300">
            {!logoMissing && (
              <img
                src={CV_DATA.logoPath}
                alt="logo"
                className="h-8 w-8 rounded-md object-cover"
                onError={() => setLogoMissing(true)}
              />
            )}
            <span className="hidden sm:block">Fiker</span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-emerald-900/80 dark:text-emerald-300/80 hover:text-emerald-900 dark:hover:text-emerald-200 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* RIGHT CONTROLS */}
          <div className="flex items-center gap-2">
            
            {/* THEME */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9"
            >
              {theme === 'light'
                ? <Moon className="h-4 w-4" />
                : <Sun className="h-4 w-4" />}
            </Button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full active:scale-95 transition-all duration-200 text-white ${
                isOpen ? 'bg-red-700 hover:bg-red-800' : 'bg-red-500 hover:bg-red-600'
              }`}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <motion.button
              aria-label="Close mobile menu"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/45"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              className="absolute inset-y-0 right-0 w-[85vw] max-w-sm bg-white dark:bg-zinc-950 shadow-2xl border-l border-black/10 dark:border-white/10 flex flex-col px-5 pt-20 pb-8"
            >
              {/* NAV ITEMS */}
              <div className="flex flex-col gap-3">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-base font-semibold text-emerald-900 dark:text-emerald-200 py-3 px-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}