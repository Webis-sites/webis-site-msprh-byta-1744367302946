'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCut, FaFemale, FaMale, FaPalette, FaSprayCan, FaClock, FaShekelSign } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// Define service category interface
interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  services: Service[];
}

// Define service interface
interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  popular?: boolean;
}

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('men');

  // Service categories with their respective services
  const serviceCategories: ServiceCategory[] = [
    {
      id: 'men',
      title: 'תספורות גברים',
      icon: <FaMale className="text-2xl" />,
      services: [
        {
          id: 'men-1',
          name: 'תספורת קלאסית',
          description: 'תספורת קלאסית עם מספריים ומכונה, כולל שטיפה וסטיילינג',
          price: 80,
          duration: '30 דקות',
          popular: true,
        },
        {
          id: 'men-2',
          name: 'תספורת + זקן',
          description: 'תספורת מלאה כולל עיצוב וטיפוח זקן',
          price: 120,
          duration: '45 דקות',
        },
        {
          id: 'men-3',
          name: 'עיצוב זקן',
          description: 'עיצוב וטיפוח זקן בלבד',
          price: 50,
          duration: '20 דקות',
        },
        {
          id: 'men-4',
          name: 'תספורת ילדים',
          description: 'תספורת לילדים עד גיל 12',
          price: 60,
          duration: '25 דקות',
        },
      ],
    },
    {
      id: 'women',
      title: 'תספורות נשים',
      icon: <FaFemale className="text-2xl" />,
      services: [
        {
          id: 'women-1',
          name: 'תספורת ועיצוב',
          description: 'תספורת, שטיפה ועיצוב שיער',
          price: 150,
          duration: '60 דקות',
          popular: true,
        },
        {
          id: 'women-2',
          name: 'פן',
          description: 'פן מקצועי לכל אורך שיער',
          price: 90,
          duration: '40 דקות',
        },
        {
          id: 'women-3',
          name: 'תסרוקת ערב',
          description: 'עיצוב שיער לאירועים מיוחדים',
          price: 200,
          duration: '75 דקות',
        },
        {
          id: 'women-4',
          name: 'תספורת קצרה',
          description: 'תספורת לשיער קצר כולל עיצוב',
          price: 120,
          duration: '45 דקות',
        },
      ],
    },
    {
      id: 'color',
      title: 'צבע וגוונים',
      icon: <FaPalette className="text-2xl" />,
      services: [
        {
          id: 'color-1',
          name: 'צבע שיער מלא',
          description: 'צביעת שיער מלאה בצבע אחיד',
          price: 220,
          duration: '90 דקות',
          popular: true,
        },
        {
          id: 'color-2',
          name: 'גוונים והבהרות',
          description: 'הבהרות חלקיות או מלאות',
          price: 280,
          duration: '120 דקות',
        },
        {
          id: 'color-3',
          name: 'בליאז׳',
          description: 'טכניקת צביעה מתקדמת ליצירת מראה טבעי',
          price: 350,
          duration: '150 דקות',
        },
        {
          id: 'color-4',
          name: 'תיקון צבע',
          description: 'תיקון צבע קיים או שינוי גוון',
          price: 180,
          duration: '60 דקות',
        },
      ],
    },
    {
      id: 'treatments',
      title: 'טיפולים',
      icon: <FaSprayCan className="text-2xl" />,
      services: [
        {
          id: 'treat-1',
          name: 'טיפול קרטין',
          description: 'טיפול קרטין להחלקת שיער ומראה בריא',
          price: 400,
          duration: '120 דקות',
          popular: true,
        },
        {
          id: 'treat-2',
          name: 'מסכת שיער',
          description: 'טיפול אינטנסיבי להזנת השיער',
          price: 120,
          duration: '40 דקות',
        },
        {
          id: 'treat-3',
          name: 'טיפול לשיער יבש',
          description: 'טיפול מיוחד לשיער יבש ופגום',
          price: 150,
          duration: '50 דקות',
        },
        {
          id: 'treat-4',
          name: 'טיפול קרקפת',
          description: 'טיפול לקרקפת רגישה או יבשה',
          price: 180,
          duration: '60 דקות',
        },
      ],
    },
  ];

  // Find the active category
  const activeCategoryData = serviceCategories.find(
    (category) => category.id === activeCategory
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="services-section" dir="rtl" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-right mx-auto relative inline-block">
            <span className="relative z-10">השירותים שלנו</span>
            <span className="absolute bottom-1 right-0 w-full h-3 bg-[#FFEEAD] opacity-50 -z-10"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-right">
            במספרה ביתא אנו מציעים מגוון רחב של שירותי עיצוב שיער וטיפוח ברמה הגבוהה ביותר.
            הצוות המקצועי שלנו מתמחה בכל סוגי השיער והסגנונות.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {serviceCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 py-3 px-5 rounded-xl text-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#588C7E] text-white shadow-[inset_0_-4px_4px_rgba(0,0,0,0.1),inset_0_4px_4px_rgba(255,255,255,0.2)]'
                  : 'bg-white text-gray-700 shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)]'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {activeCategoryData?.services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden rounded-2xl p-6 ${
                service.popular
                  ? 'bg-gradient-to-br from-[#588C7E]/90 to-[#588C7E]/70 text-white'
                  : 'bg-white/70'
              } backdrop-blur-md border border-white/20 shadow-lg`}
              style={{
                boxShadow: service.popular
                  ? '0 10px 30px rgba(88, 140, 126, 0.3)'
                  : '0 10px 30px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
              }}
            >
              {service.popular && (
                <div className="absolute top-3 left-3 bg-[#FFEEAD] text-[#588C7E] text-xs font-bold py-1 px-3 rounded-full">
                  פופולרי
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 text-right">
                  {service.name}
                </h3>
                <p
                  className={`text-sm mb-4 text-right ${
                    service.popular ? 'text-white/90' : 'text-gray-600'
                  }`}
                >
                  {service.description}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div
                  className={`flex items-center gap-1 ${
                    service.popular ? 'text-white/90' : 'text-gray-500'
                  }`}
                >
                  <FaClock className="text-sm" />
                  <span className="text-sm">{service.duration}</span>
                </div>
                <div
                  className={`flex items-center gap-1 text-lg font-bold ${
                    service.popular ? 'text-white' : 'text-[#588C7E]'
                  }`}
                >
                  <span>{service.price}</span>
                  <FaShekelSign className="text-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block py-4 px-8 bg-[#FFEEAD] text-[#588C7E] font-bold rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.05),inset_-5px_-5px_10px_rgba(255,255,255,0.5)]"
          >
            הזמינו תור עכשיו
          </motion.a>
          <p className="mt-4 text-gray-500">
            או התקשרו אלינו: <span className="font-bold">03-1234567</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;