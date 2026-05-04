import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
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

  // Handle mobile click
  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      scrollToSection(id);
    }, 200);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex items-center gap-2 text-lg font-semibold text-red-500">
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
          <div className="hidden md:flex items-center gap-4 sm:gap-6 justify-center flex-1 mx-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-xs sm:text-sm font-medium text-red-500 hover:text-red-400 transition whitespace-nowrap"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* RIGHT CONTROLS */}
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
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-red-500"
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
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden bg-black border-t border-red-500/30 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left px-4 py-2 text-sm font-medium text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
