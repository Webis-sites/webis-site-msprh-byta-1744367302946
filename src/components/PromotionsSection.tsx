'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt, FaScissors, FaFire } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';

interface Promotion {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  imageUrl: string;
  category: string;
  isHot: boolean;
}

const PromotionsSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [promotions, setPromotions] = useState<Promotion[]>([
    {
      id: 1,
      title: "מבצע קיץ מיוחד",
      description: "תספורת וצבע שיער במחיר מיוחד לחודשי הקיץ. כולל טיפול מיוחד להגנה מפני השמש.",
      discount: "30%",
      validUntil: "2023-08-31",
      imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "תספורות",
      isHot: true,
    },
    {
      id: 2,
      title: "חבילת טיפוח שיער",
      description: "טיפול שיער מלא הכולל מסכה, סרום וטיפול קרטין במחיר מיוחד.",
      discount: "25%",
      validUntil: "2023-09-15",
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "טיפולי שיער",
      isHot: false,
    },
    {
      id: 3,
      title: "מבצע לכלות",
      description: "חבילת כלה מושלמת: תסרוקת, איפור ומניקור במחיר מיוחד לעונת החתונות.",
      discount: "20%",
      validUntil: "2023-10-30",
      imageUrl: "https://images.unsplash.com/photo-1595499280941-d3603ea1cd58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "אירועים מיוחדים",
      isHot: true,
    },
    {
      id: 4,
      title: "טיפול שיער לגברים",
      description: "תספורת, עיצוב זקן וטיפול פנים במחיר מיוחד.",
      discount: "15%",
      validUntil: "2023-09-30",
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "גברים",
      isHot: false,
    },
  ]);

  // Calculate time left for the nearest promotion
  useEffect(() => {
    const calculateTimeLeft = () => {
      // Find the nearest promotion end date
      const sortedPromotions = [...promotions].sort(
        (a, b) => new Date(a.validUntil).getTime() - new Date(b.validUntil).getTime()
      );
      
      const nearestPromotion = sortedPromotions[0];
      const difference = new Date(nearestPromotion.validUntil).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [promotions]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="promotions-section" dir="rtl" className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-right mb-4 text-gray-800">
            <span className="text-primary">מבצעים</span> מיוחדים
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-right">
            המבצעים הכי חמים במספרה ביתא. הזדרזו להזמין תור ולנצל את ההטבות המיוחדות שלנו.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/20">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">זמן שנותר למבצע הקרוב</h3>
              <div className="flex justify-center gap-4 text-center">
                <div className="bg-primary/10 rounded-xl p-4 w-20 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),_inset_-2px_-2px_5px_rgba(255,255,255,0.5)]">
                  <div className="text-3xl font-bold text-primary">{timeLeft.days}</div>
                  <div className="text-sm text-gray-600">ימים</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-4 w-20 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),_inset_-2px_-2px_5px_rgba(255,255,255,0.5)]">
                  <div className="text-3xl font-bold text-primary">{timeLeft.hours}</div>
                  <div className="text-sm text-gray-600">שעות</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-4 w-20 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),_inset_-2px_-2px_5px_rgba(255,255,255,0.5)]">
                  <div className="text-3xl font-bold text-primary">{timeLeft.minutes}</div>
                  <div className="text-sm text-gray-600">דקות</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-4 w-20 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),_inset_-2px_-2px_5px_rgba(255,255,255,0.5)]">
                  <div className="text-3xl font-bold text-primary">{timeLeft.seconds}</div>
                  <div className="text-sm text-gray-600">שניות</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative overflow-hidden"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-white/30 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={promo.imageUrl} 
                    alt={promo.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {promo.category}
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="absolute bottom-4 left-4 bg-secondary text-gray-800 font-bold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                    <MdLocalOffer className="text-gray-800" />
                    <span>הנחה {promo.discount}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{promo.title}</h3>
                    {promo.isHot && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <FaFire /> חם
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-right">{promo.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                      <FaCalendarAlt />
                      <span>בתוקף עד: {formatDate(promo.validUntil)}</span>
                    </div>
                    
                    <button className="w-full py-3 px-6 bg-primary text-white rounded-xl font-medium transition-all duration-300 shadow-[5px_5px_10px_rgba(0,0,0,0.1),_-5px_-5px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),_inset_-5px_-5px_10px_rgba(255,255,255,0.2)] active:scale-[0.98] flex justify-center items-center gap-2">
                      <FaScissors />
                      <span>הזמינו תור עכשיו</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/90 to-primary rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">רוצים להתעדכן במבצעים חדשים?</h3>
            <p className="text-white/90 mb-6">הירשמו לניוזלטר שלנו וקבלו עדכונים על מבצעים חדשים ישירות למייל</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="הזינו את כתובת המייל שלכם"
                className="flex-grow py-3 px-4 rounded-xl bg-white/90 backdrop-blur-sm border border-white/30 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-secondary text-right"
              />
              <button className="py-3 px-6 bg-secondary text-gray-800 rounded-xl font-medium transition-all duration-300 shadow-[5px_5px_10px_rgba(0,0,0,0.1)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.05)] active:scale-[0.98]">
                הרשמה
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromotionsSection;