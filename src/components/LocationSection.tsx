'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaClock, FaMapMarkerAlt, FaParking, FaBus, FaPhone } from 'react-icons/fa';
import { MdDirections } from 'react-icons/md';

interface BusinessHour {
  day: string;
  hours: string;
  isToday: boolean;
}

const LocationSection: React.FC = () => {
  const [businessHours, setBusinessHours] = useState<BusinessHour[]>([
    { day: 'ראשון', hours: '09:00 - 20:00', isToday: false },
    { day: 'שני', hours: '09:00 - 20:00', isToday: false },
    { day: 'שלישי', hours: '09:00 - 20:00', isToday: false },
    { day: 'רביעי', hours: '09:00 - 20:00', isToday: false },
    { day: 'חמישי', hours: '09:00 - 20:00', isToday: false },
    { day: 'שישי', hours: '09:00 - 14:00', isToday: false },
    { day: 'שבת', hours: 'סגור', isToday: false },
  ]);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Set today's day
    const today = new Date().getDay();
    setBusinessHours(prevHours => 
      prevHours.map((hour, index) => ({
        ...hour,
        isToday: index === today
      }))
    );
    
    // Animate when in view
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="location-section" dir="rtl" className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 text-right">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#588C7E]">המיקום שלנו</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            בואו לבקר אותנו במספרה ביתא - המקום המושלם לטיפוח השיער שלכם
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map and Address Section */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1)] bg-white relative"
          >
            <div className="h-[400px] relative overflow-hidden">
              <iframe
                title="מפת המיקום של מספרה ביתא"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0456263892117!2d34.7818!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA1JzA3LjEiTiAzNMKwNDYnNTQuNSJF!5e0!3m2!1sen!2sil!4v1623152433986!5m2!1sen!2sil"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="p-6 backdrop-blur-sm bg-white/80 border border-white/20 relative -mt-20 mx-4 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-[#588C7E] p-3 rounded-full text-white shadow-lg">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">מספרה ביתא</h3>
                  <p className="text-gray-600 mb-4">רחוב דיזנגוף 123, תל אביב</p>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <FaPhone size={16} />
                    <span>03-1234567</span>
                  </div>
                  <a 
                    href="https://goo.gl/maps/1234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#588C7E] text-white rounded-full hover:bg-[#4a7a6d] transition-all shadow-[0_5px_15px_rgba(88,140,126,0.4)] hover:shadow-[0_8px_20px_rgba(88,140,126,0.6)]"
                  >
                    <MdDirections size={20} />
                    <span>קבל הוראות הגעה</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hours and Directions Section */}
          <div className="grid grid-cols-1 gap-6">
            {/* Business Hours */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] bg-white/80 backdrop-blur-sm border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#FFEEAD] p-3 rounded-full text-[#588C7E] shadow-lg">
                  <FaClock size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">שעות פעילות</h3>
              </div>
              
              <div className="space-y-3">
                {businessHours.map((hour, index) => (
                  <motion.div
                    key={hour.day}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      hour.isToday 
                        ? 'bg-[#588C7E]/10 border-r-4 border-[#588C7E]' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className={`font-medium ${hour.isToday ? 'text-[#588C7E] font-bold' : 'text-gray-700'}`}>
                      {hour.day}
                      {hour.isToday && <span className="mr-2 text-sm bg-[#588C7E] text-white px-2 py-1 rounded-full">היום</span>}
                    </span>
                    <span className={`${hour.isToday ? 'text-[#588C7E] font-bold' : 'text-gray-600'}`}>
                      {hour.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Directions and Parking */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] bg-white/80 backdrop-blur-sm border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#FFEEAD] p-3 rounded-full text-[#588C7E] shadow-lg">
                  <FaParking size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">חניה והגעה</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">חניה</h4>
                  <p className="text-gray-600">
                    חניון ציבורי זמין במרחק של 50 מטר מהמספרה. בנוסף, ישנה חניה ברחוב עם תשלום בימים א'-ה' בין השעות 9:00-17:00.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">תחבורה ציבורית</h4>
                  <div className="flex items-start gap-3 mb-3">
                    <FaBus className="text-[#588C7E] mt-1" />
                    <p className="text-gray-600">
                      קווי אוטובוס 5, 18, 72 עוצרים במרחק הליכה קצר מהמספרה.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">הוראות הגעה</h4>
                  <p className="text-gray-600">
                    המספרה ממוקמת בקומה הראשונה של בניין המשרדים ברחוב דיזנגוף 123. הכניסה מצד ימין של הבניין, ליד בית הקפה.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Gallery */}
        <motion.div 
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <motion.div 
            variants={itemVariants}
            className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="חזית המספרה" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white p-4 font-medium">חזית המספרה</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="אזור ההמתנה" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white p-4 font-medium">אזור ההמתנה</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="עמדות הטיפול" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white p-4 font-medium">עמדות הטיפול</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;