'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative h-screen w-full overflow-hidden"
      aria-label="אזור כותרת ראשית"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="רקע מספרה מקצועית"
          layout="fill"
          objectFit="cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
      </div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
        >
          <div className="text-right">
            {/* Logo and Business Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 flex justify-end items-center"
            >
              <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm border border-white/30 shadow-[0_4px_12px_0_rgba(88,140,126,0.5)]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V8H8V5Z" fill="#FFEEAD"/>
                  <path d="M16 10H8V19C8 20.6569 9.34315 22 11 22H13C14.6569 22 16 20.6569 16 19V10Z" fill="#588C7E"/>
                  <path d="M5 10C5 9.44772 5.44772 9 6 9H18C18.5523 9 19 9.44772 19 10C19 10.5523 18.5523 11 18 11H6C5.44772 11 5 10.5523 5 10Z" fill="#FFEEAD"/>
                </svg>
              </div>
              <h1 className="mr-3 text-3xl md:text-4xl font-bold text-white">
                מספרה <span className="text-[#FFEEAD]">ביתא</span>
              </h1>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              מספרה <span className="text-[#FFEEAD]">מוביל</span> בישראל
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 mb-8"
            >
              חווית לקוח מושלמת בכל ביקור. אנחנו מספרה מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button 
                className="relative group overflow-hidden rounded-full bg-[#588C7E] px-8 py-4 text-lg font-bold text-white shadow-[0_8px_20px_0_rgba(88,140,126,0.5)] transition-all duration-300 hover:shadow-[0_12px_28px_0_rgba(88,140,126,0.7)]"
                aria-label="קבע תור עכשיו"
              >
                <span className="relative z-10">קבע תור עכשיו</span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-[#588C7E] to-[#3a5e54] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="absolute -inset-full z-0 h-full w-full translate-x-full transform rounded-full bg-gradient-to-r from-[#FFEEAD]/20 to-transparent opacity-30 blur-md transition-all duration-1000 group-hover:translate-x-0"></span>
              </button>
            </motion.div>
          </div>

          {/* Floating Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-[#FFEEAD]/20 backdrop-blur-md border border-[#FFEEAD]/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-[#588C7E]/20 backdrop-blur-md border border-[#588C7E]/30"
          />
        </motion.div>
      </div>

      {/* Floating Service Icons */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          {[
            { icon: "✂️", label: "תספורות" },
            { icon: "💇‍♀️", label: "עיצוב שיער" },
            { icon: "🧴", label: "טיפולי שיער" },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, x: -5 }}
              className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-md p-3 border border-white/20 shadow-[0_4px_12px_0_rgba(0,0,0,0.2)]"
            >
              <span className="text-lg">{service.label}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#588C7E]/80 text-xl shadow-inner">{service.icon}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;