import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
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
  const [scrolled, setScrolled] = useState(false);
  const [logoMissing, setLogoMissing] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-black">
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

          {/* MENU ITEMS */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center flex-1 mx-4">
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
        </div>
      </div>
    </nav>
  );
}
