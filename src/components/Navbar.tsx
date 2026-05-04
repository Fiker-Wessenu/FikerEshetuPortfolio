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
  const [logoMissing, setLogoMissing] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

  // 🔥 AUTO HIDE NAVBAR
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  // Scroll function
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -70;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      scrollToSection(id);
    }, 200);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -80 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-red-500/20"
    >
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
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-red-500 hover:text-red-400 transition"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">

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

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-red-500"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden bg-black border-t border-red-500/30"
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-lg"
            >
              {item.name}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}