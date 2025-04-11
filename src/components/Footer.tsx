'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface SocialLink {
  id: string;
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface NavLink {
  id: string;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      id: 'facebook',
      icon: <FaFacebook size={24} />,
      href: 'https://facebook.com',
      label: 'פייסבוק',
    },
    {
      id: 'instagram',
      icon: <FaInstagram size={24} />,
      href: 'https://instagram.com',
      label: 'אינסטגרם',
    },
    {
      id: 'whatsapp',
      icon: <FaWhatsapp size={24} />,
      href: 'https://wa.me/972501234567',
      label: 'וואטסאפ',
    },
  ];

  const navLinks: NavLink[] = [
    { id: 'home', href: '/', label: 'דף הבית' },
    { id: 'services', href: '/services', label: 'שירותים' },
    { id: 'gallery', href: '/gallery', label: 'גלריה' },
    { id: 'about', href: '/about', label: 'אודות' },
    { id: 'contact', href: '/contact', label: 'צור קשר' },
  ];

  const legalLinks: NavLink[] = [
    { id: 'privacy', href: '/privacy', label: 'מדיניות פרטיות' },
    { id: 'terms', href: '/terms', label: 'תנאי שימוש' },
  ];

  const businessHours = [
    { day: 'ראשון - חמישי', hours: '09:00 - 20:00' },
    { day: 'שישי', hours: '09:00 - 14:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  return (
    <footer id="footer" dir="rtl" className="w-full bg-gradient-to-br from-[#588C7E]/90 to-[#588C7E]/80 backdrop-blur-md text-white relative overflow-hidden">
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about section */}
          <div className="text-right">
            <div className="flex justify-end mb-4">
              <div className="relative h-16 w-40 overflow-hidden rounded-lg shadow-neumorphic">
                <Image 
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="מספרה ביתא"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#FFEEAD]">מספרה ביתא</h3>
            <p className="text-sm mb-4">
              אנחנו מספרה מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <div className="flex justify-end space-x-4 space-x-reverse">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full backdrop-blur-sm border border-white/20 shadow-neumorphic hover:bg-[#FFEEAD]/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4 text-[#FFEEAD]">ניווט מהיר</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
                    <Link href={link.href} className="hover:text-[#FFEEAD] transition-colors duration-300 flex items-center justify-end">
                      <span>{link.label}</span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4 text-[#FFEEAD]">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-end">
                <span className="mr-2">רחוב הרצל 123, תל אביב</span>
                <FaMapMarkerAlt className="text-[#FFEEAD]" />
              </li>
              <li className="flex items-center justify-end">
                <span className="mr-2">050-123-4567</span>
                <FaPhone className="text-[#FFEEAD]" />
              </li>
              <li className="flex items-center justify-end">
                <span className="mr-2">info@beta-salon.co.il</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFEEAD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </li>
            </ul>
          </div>

          {/* Business hours */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4 text-[#FFEEAD]">שעות פעילות</h3>
            <ul className="space-y-2">
              {businessHours.map((item, index) => (
                <li key={index} className="flex items-center justify-end">
                  <div>
                    <span className="block">{item.day}</span>
                    <span className="block text-[#FFEEAD]">{item.hours}</span>
                  </div>
                  <FaClock className="ml-2 text-[#FFEEAD]" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-8"></div>

        {/* Bottom section with legal links and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="order-2 md:order-1 mt-4 md:mt-0">
            <p className="text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} מספרה ביתא. כל הזכויות שמורות.
            </p>
          </div>
          <div className="order-1 md:order-2 flex space-x-4 space-x-reverse">
            {legalLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-sm hover:text-[#FFEEAD] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;