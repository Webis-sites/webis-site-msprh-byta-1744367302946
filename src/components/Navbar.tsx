'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiClock, FiCalendar } from 'react-icons/fi';
import { RiScissors2Line } from 'react-icons/ri';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navItems: NavItem[] = [
    { id: 'home', label: 'ראשי', href: '#' },
    { id: 'services', label: 'שירותים', href: '#services' },
    { id: 'gallery', label: 'גלריה', href: '#gallery' },
    { id: 'about', label: 'אודות', href: '#about' },
    { id: 'contact', label: 'צור קשר', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Variants for animations
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header 
      id="navbar"
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <RiScissors2Line className="text-[#588C7E] text-3xl mr-2" />
              <h1 className="text-2xl font-bold text-[#588C7E]">מספרה ביתא</h1>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-gray-700 hover:text-[#588C7E] transition-colors duration-300 text-lg font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Book Now Button - Desktop */}
          <div className="hidden md:block">
            <motion.a
              href="#book"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-6 py-3 rounded-lg font-bold text-white
                bg-gradient-to-l from-[#588C7E] to-[#4a7a6d]
                shadow-[5px_5px_10px_rgba(88,140,126,0.2),-5px_-5px_10px_rgba(255,255,255,0.7)]
                hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.1)]
                transition-all duration-300
                backdrop-filter backdrop-blur-sm
                border border-white/20
              "
            >
              <span className="flex items-center">
                <FiCalendar className="ml-2" />
                קבע תור עכשיו
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="
                p-3 rounded-full
                bg-[#588C7E]/10
                shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.7)]
                hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.3)]
                transition-all duration-300
              "
              aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
            >
              {isOpen ? (
                <FiX className="text-[#588C7E] text-2xl" />
              ) : (
                <FiMenu className="text-[#588C7E] text-2xl" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white/95 backdrop-blur-lg md:hidden z-40 overflow-y-auto"
            style={{ top: '72px' }}
          >
            <div className="container mx-auto px-4 py-8 h-full flex flex-col">
              <nav className="flex flex-col space-y-6 text-right mb-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    variants={itemVariants}
                    onClick={toggleMenu}
                    className="text-2xl font-medium text-gray-800 hover:text-[#588C7E] transition-colors duration-300 border-b border-gray-200 pb-4"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* Book Now Button - Mobile */}
              <motion.a
                href="#book"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="
                  w-full py-4 rounded-lg font-bold text-white text-center text-xl
                  bg-gradient-to-l from-[#588C7E] to-[#4a7a6d]
                  shadow-[5px_5px_10px_rgba(88,140,126,0.2),-5px_-5px_10px_rgba(255,255,255,0.7)]
                  hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.1)]
                  transition-all duration-300
                  backdrop-filter backdrop-blur-sm
                  border border-white/20
                  mb-8
                "
              >
                <span className="flex items-center justify-center">
                  <FiCalendar className="ml-2" />
                  קבע תור עכשיו
                </span>
              </motion.a>

              {/* Contact Info */}
              <div className="mt-auto">
                <motion.div 
                  variants={itemVariants}
                  className="
                    bg-white/50 backdrop-blur-md rounded-xl p-6
                    shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)]
                    border border-white/40
                  "
                >
                  <h3 className="text-xl font-bold text-[#588C7E] mb-4 text-right">שעות פעילות</h3>
                  <div className="flex items-center justify-end mb-3">
                    <p className="text-gray-700 text-right">א'-ה': 09:00 - 20:00</p>
                    <FiClock className="ml-2 text-[#588C7E]" />
                  </div>
                  <div className="flex items-center justify-end mb-3">
                    <p className="text-gray-700 text-right">ו': 09:00 - 14:00</p>
                    <FiClock className="ml-2 text-[#588C7E]" />
                  </div>
                  <div className="flex items-center justify-end">
                    <p className="text-gray-700 text-right">03-1234567</p>
                    <FiPhone className="ml-2 text-[#588C7E]" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-l from-[#FFEEAD] to-[#588C7E] opacity-80"></div>
    </header>
  );
};

export default Navbar;