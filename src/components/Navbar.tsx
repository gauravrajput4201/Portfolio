"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
// ...existing code...

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems: { label: string; id: string }[] = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isScrolled ? 'bg-[rgba(10,10,10,0.8)] backdrop-blur-[20px] border-b border-white/10 py-4' : 'py-6'} px-8`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
  <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-8">
        <motion.div
          className="text-[1.5rem] font-bold bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('hero')}
        >
          <span className="font-inter tracking-tight">GS</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className="relative text-white/80 text-[0.95rem] font-medium bg-none border-none cursor-pointer py-2 transition-colors duration-300 hover:text-white group"
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] transition-all duration-300 w-0 group-hover:w-full"></span>
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="hidden md:block py-3 px-6 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] border-none rounded-full text-white font-semibold text-[0.9rem] cursor-pointer transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Let's Talk
        </motion.button>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden bg-none border-none text-white cursor-pointer p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="flex flex-col gap-4 py-6 border-t border-white/10 mt-4 md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className="text-white/80 text-[1.1rem] font-medium bg-none border-none cursor-pointer py-3 text-left transition-all duration-300 border-l-4 border-transparent hover:text-white hover:border-[#06b6d4] pl-3 hover:pl-6"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
