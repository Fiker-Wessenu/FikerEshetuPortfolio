import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isOpen
          ? 'bg-black/95 backdrop-blur-xl shadow-lg border-b border-white/10'
          : scrolled
          ? 'bg-white/95 dark:bg-black/90 backdrop-blur-xl shadow-sm border-b border-black/5 dark:border-white/10'
          : 'bg-white dark:bg-black backdrop-blur-xl border-b border-black/5 dark:border-white/10'
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
                className="text-sm font-medium text-emerald-900/80 dark:text-emerald-300/80 hover:text-red-500 transition"
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
                isOpen
                  ? 'bg-red-700 scale-110 shadow-lg shadow-red-500/40'
                  : 'bg-red-500 hover:bg-red-600'
              }`}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU: always mounted, visibility toggled via opacity & pointer-events */}
      <motion.div
        aria-hidden={!isOpen}
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-0 md:hidden bg-black/95 backdrop-blur-xl overflow-x-hidden transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto z-50' : 'opacity-0 pointer-events-none z-50'
        }`}
      >
        <div className="h-[100dvh] overflow-y-auto overscroll-contain px-6 pt-24 pb-10">
          <button
            aria-label="Close mobile menu"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center active:scale-95 transition"
          >
            <X className="h-5 w-5" />
          </button>

          <nav className="min-h-full flex flex-col items-center justify-center">
            <div className="w-full max-w-xs flex flex-col items-center gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={false}
                  animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ delay: isOpen ? i * 0.05 : 0 }}
                  className="w-full text-center text-lg font-semibold text-white py-4 px-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-red-500/15 hover:text-red-300 transition"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </nav>
        </div>
      </motion.div>
    </nav>
  );
}