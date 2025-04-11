'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaScissors, FaAward, FaInstagram, FaFacebookF, FaCalendarAlt } from 'react-icons/fa';

interface Stylist {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  bio: string;
  expertise: string[];
  image: string;
  instagram?: string;
  facebook?: string;
}

const StylistsSection: React.FC = () => {
  const [stylists, setStylists] = useState<Stylist[]>([
    {
      id: 1,
      name: "נועה כהן",
      specialization: "מעצבת שיער בכירה",
      experience: 8,
      bio: "נועה היא מעצבת שיער מנוסה עם תשוקה לצבעי שיער ייחודיים וסגנונות חדשניים. היא מתמחה בטכניקות צביעה מתקדמות.",
      expertise: ["צבעי שיער", "תספורות קצרות", "סגנונות חדשניים"],
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      instagram: "noa_stylist",
      facebook: "noastylist"
    },
    {
      id: 2,
      name: "אלון לוי",
      specialization: "מומחה לשיער גברי",
      experience: 6,
      bio: "אלון מתמחה בעיצוב שיער לגברים, תספורות מודרניות וטיפוח זקן. הוא ידוע בדיוק ובתשומת לב לפרטים.",
      expertise: ["תספורות גבריות", "עיצוב זקן", "סגנונות קלאסיים"],
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      instagram: "alon_barber"
    },
    {
      id: 3,
      name: "מיכל אברהם",
      specialization: "מומחית לטיפולי שיער",
      experience: 10,
      bio: "מיכל היא מומחית לטיפולי שיער עם ניסיון של עשר שנים. היא מתמחה בשיקום שיער פגום ובטיפולים מתקדמים.",
      expertise: ["טיפולי קרטין", "החלקות שיער", "טיפולי שיקום"],
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      facebook: "michal_hair_treatments"
    },
    {
      id: 4,
      name: "דניאל כהן",
      specialization: "מעצב שיער אומנותי",
      experience: 7,
      bio: "דניאל הוא מעצב שיער אומנותי עם גישה ייחודית לעיצוב. הוא מתמחה בתסרוקות לאירועים מיוחדים ובסגנונות אוונגרד.",
      expertise: ["תסרוקות לאירועים", "סגנונות אוונגרד", "צביעה אומנותית"],
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      instagram: "daniel_art_stylist",
      facebook: "daniel_hair_art"
    }
  ]);

  const [visibleStylists, setVisibleStylists] = useState<Stylist[]>([]);

  useEffect(() => {
    setVisibleStylists(stylists);
  }, [stylists]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="stylists-section" className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-100 to-gray-200 dir-rtl" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-right text-gray-800">
            <span className="relative inline-block">
              הצוות המקצועי שלנו
              <span className="absolute bottom-0 right-0 w-full h-1 bg-[#588C7E] transform translate-y-2"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right">
            הכירו את הצוות המוביל של מספרה ביתא - מעצבי שיער מקצועיים עם ניסיון רב וידע מקיף בכל טרנדי השיער העדכניים ביותר
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {visibleStylists.map((stylist) => (
            <motion.div 
              key={stylist.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                {/* Neumorphic Card */}
                <div className="relative bg-gray-50 rounded-2xl p-6 shadow-[inset_0_0_10px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_0_15px_rgba(0,0,0,0.1)] transition-all duration-300">
                  {/* Glassmorphism overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg transition-all duration-500 z-10"></div>
                  
                  {/* Image container */}
                  <div className="relative mb-6 overflow-hidden rounded-xl h-72 shadow-md">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#588C7E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={stylist.image} 
                      alt={stylist.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Social media icons */}
                    <div className="absolute bottom-4 left-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                      {stylist.instagram && (
                        <a href={`https://instagram.com/${stylist.instagram}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-[#588C7E] hover:bg-[#588C7E] hover:text-white transition-all duration-300">
                          <FaInstagram size={18} />
                        </a>
                      )}
                      {stylist.facebook && (
                        <a href={`https://facebook.com/${stylist.facebook}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-[#588C7E] hover:bg-[#588C7E] hover:text-white transition-all duration-300">
                          <FaFacebookF size={18} />
                        </a>
                      )}
                      <a href="#booking" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-[#588C7E] hover:bg-[#588C7E] hover:text-white transition-all duration-300">
                        <FaCalendarAlt size={18} />
                      </a>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">{stylist.name}</h3>
                      <div className="flex items-center bg-[#FFEEAD]/30 px-3 py-1 rounded-full">
                        <FaScissors className="text-[#588C7E] ml-1" />
                        <span className="text-sm font-medium text-gray-700">{stylist.specialization}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <FaAward className="text-[#588C7E] ml-2" />
                      <span className="text-gray-600">ניסיון של {stylist.experience} שנים</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-right">{stylist.bio}</p>
                    
                    {/* Expertise tags */}
                    <div className="flex flex-wrap justify-end gap-2 mt-4">
                      {stylist.expertise.map((skill, index) => (
                        <span 
                          key={index} 
                          className="bg-[#588C7E]/10 text-[#588C7E] px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Book button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full py-3 px-6 bg-[#588C7E] text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-[#4a7a6e] transition-all duration-300 font-medium text-lg"
                    >
                      קביעת תור
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StylistsSection;