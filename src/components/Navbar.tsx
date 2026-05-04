import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { Button } from '../../components/ui/button';
import { CV_DATA } from '../constants';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Awards', id: 'awards' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoMissing, setLogoMissing] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  // Scroll function
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  // Handle mobile click (close first, then scroll)
  const handleNavClick = (id: string) => {
    setIsOpen(false);

    setTimeout(() => {
      scrollToSection(id);
    }, 350); // wait for menu animation
  };

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
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-emerald-900/80 dark:text-emerald-300/80 hover:text-red-500 transition"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">

            {/* THEME TOGGLE */}
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
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 text-white ${
                isOpen
                  ? 'bg-red-700 scale-110 shadow-lg shadow-red-500/40'
                  : 'bg-red-500 hover:bg-red-600'
              }`}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.25 }}
        className={`fixed inset-0 z-50 md:hidden bg-black/95 backdrop-blur-xl ${
          isOpen
            ? 'pointer-events-auto visible'
            : 'pointer-events-none invisible'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center px-6 space-y-6">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>

          {/* MENU ITEMS */}
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className="w-full max-w-xs text-center text-lg font-semibold text-white py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-red-500/20 transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}