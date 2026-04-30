import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  { name: 'Volunteering', href: '#volunteering' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoMissing, setLogoMissing] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? 'hidden' : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 dark:bg-black/85 backdrop-blur-xl py-3 shadow-sm border-b border-black/5 dark:border-white/10'
          : 'bg-white/80 dark:bg-black/70 backdrop-blur-xl py-3 border-b border-black/5 dark:border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl lg:text-2xl font-serif italic text-emerald-900 dark:text-emerald-300 tracking-tight whitespace-nowrap"
          >
            {!logoMissing && (
              <img
                src={CV_DATA.logoPath}
                alt="Fiker logo"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-md object-cover border border-black/10 dark:border-white/15 shadow-sm"
                onError={() => setLogoMissing(true)}
              />
            )}
          </motion.div>

          <div className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-8 overflow-x-auto no-scrollbar px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-emerald-900/80 dark:text-emerald-300/85 hover:text-emerald-900 dark:hover:text-emerald-200 transition-colors whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="rounded-full w-9 h-9 sm:w-10 sm:h-10 hover:bg-black/5 dark:hover:bg-white/5"
            >
              {theme === 'light' ? <Moon className="h-4 w-4 sm:h-5 sm:w-5" /> : <Sun className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="md:hidden w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="mobile-navigation"
            className="fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-40 flex flex-col items-stretch justify-start overflow-y-auto px-4 py-20 sm:px-6 sm:py-24 md:hidden"
          >
            <div className="absolute top-4 right-4 sm:top-8 sm:right-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="rounded-full w-11 h-11 border border-black/5 dark:border-white/10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-14 w-full max-w-sm mx-auto space-y-3 sm:space-y-4 text-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-2xl px-4 py-3 text-2xl sm:text-4xl font-bold text-emerald-900 dark:text-emerald-300 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:font-serif hover:italic transition-all duration-300 break-words"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
