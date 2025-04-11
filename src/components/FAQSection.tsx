'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'אילו שירותים אתם מציעים במספרה?',
      answer: 'אנו מציעים מגוון רחב של שירותים כולל תספורות לנשים וגברים, צביעת שיער, החלקות, טיפולי שיער מיוחדים, עיצוב שיער לאירועים, ועוד. הצוות המקצועי שלנו מתמחה בכל סוגי השיער ויכול להתאים את השירות לצרכים האישיים שלך.'
    },
    {
      id: 'faq-2',
      question: 'איך אפשר לקבוע תור?',
      answer: 'ניתן לקבוע תור בכמה דרכים: דרך האתר שלנו, בטלפון 03-1234567, או באמצעות האפליקציה שלנו. אנו ממליצים לקבוע תור מראש כדי להבטיח את הזמן המועדף עליך, במיוחד בסופי שבוע ובתקופות עמוסות.'
    },
    {
      id: 'faq-3',
      question: 'מה מדיניות הביטולים שלכם?',
      answer: 'אנו מבקשים להודיע על ביטול לפחות 24 שעות מראש. ביטולים שמתבצעים פחות מ-24 שעות לפני התור עלולים לחייב בדמי ביטול של 50% מעלות השירות. אנו מבינים שדברים בלתי צפויים קורים, אז צרו איתנו קשר בהקדם האפשרי אם אינכם יכולים להגיע.'
    },
    {
      id: 'faq-4',
      question: 'כמה עולים השירותים שלכם?',
      answer: 'המחירים שלנו משתנים בהתאם לסוג השירות, אורך השיער, והמעצב/ת שבחרתם. תספורות מתחילות ב-120 ש"ח, צביעת שיער מ-250 ש"ח, והחלקות מ-400 ש"ח. אנו מציעים הערכת מחיר מדויקת יותר בזמן הייעוץ הראשוני לפני תחילת הטיפול.'
    },
    {
      id: 'faq-5',
      question: 'האם אתם מציעים ייעוץ לפני הטיפול?',
      answer: 'בהחלט! אנו מאמינים שייעוץ מקצועי הוא חלק חיוני מהשירות שלנו. המעצבים שלנו ישמחו לדון בציפיות שלך, להציע המלצות המתאימות לסוג השיער שלך, מבנה הפנים, וסגנון החיים שלך, ולענות על כל שאלה שיש לך לפני תחילת הטיפול.'
    },
    {
      id: 'faq-6',
      question: 'כמה זמן אורך כל טיפול?',
      answer: 'משך הטיפול תלוי בסוג השירות. תספורת רגילה אורכת בין 30-60 דקות, צביעת שיער בין שעה לשעתיים, והחלקות יכולות לקחת בין 2-4 שעות. אנו תמיד מעדכנים את הלקוחות לגבי הזמן המשוער בעת קביעת התור.'
    },
    {
      id: 'faq-7',
      question: 'האם יש צורך להגיע עם שיער נקי?',
      answer: 'לרוב הטיפולים, אין צורך להגיע עם שיער נקי מכיוון שאנו מציעים שירות שטיפה כחלק מהטיפול. עבור צביעת שיער, למעשה עדיף להגיע עם שיער שלא נשטף יום-יומיים, כיוון שהשמן הטבעי מגן על הקרקפת בזמן הצביעה. אם יש הנחיות מיוחדות לטיפול הספציפי שלך, נעדכן אותך בעת קביעת התור.'
    },
    {
      id: 'faq-8',
      question: 'האם אתם משתמשים במוצרים טבעיים/אורגניים?',
      answer: 'כן, אנו מציעים מגוון של מוצרים טבעיים ואורגניים לצד המותגים המובילים בתעשייה. אנו מבינים שלקוחות רבים מעדיפים אפשרויות ידידותיות יותר לסביבה ולעור, ונשמח להתאים את הטיפול לפי העדפותיך. ספר/י לנו על כל רגישות או העדפה שיש לך.'
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq-section" 
      dir="rtl" 
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-right mb-4 text-gray-800">
            שאלות נפוצות
          </h2>
          <div className="h-1 w-24 bg-[#588C7E] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-right">
            כל מה שרצית לדעת על השירותים שלנו במספרה ביתא
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#588C7E]/30 to-[#FFEEAD]/30 rounded-lg blur-lg"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div 
                  key={faq.id}
                  className="rounded-xl overflow-hidden"
                >
                  <div 
                    className={`
                      p-5 rounded-xl cursor-pointer transition-all duration-300
                      ${openId === faq.id 
                        ? 'bg-[#588C7E] text-white shadow-inner' 
                        : 'bg-white text-gray-800 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)]'}
                    `}
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={openId === faq.id}
                    aria-controls={`content-${faq.id}`}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: openId === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-1 rounded-full ${openId === faq.id ? 'bg-white/20' : 'bg-[#FFEEAD]/50'}`}
                      >
                        <IoIosArrowDown className={`text-xl ${openId === faq.id ? 'text-white' : 'text-[#588C7E]'}`} />
                      </motion.div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        id={`content-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-white/70 backdrop-blur-sm border border-[#FFEEAD]/30"
                      >
                        <div className="p-5 text-gray-700 text-right">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#FFEEAD]/30">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="מספרה ביתא - חוויית לקוח" 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div className="w-full md:w-2/3 text-right">
              <h3 className="text-2xl font-bold text-[#588C7E] mb-4">יש לך שאלה שלא מופיעה כאן?</h3>
              <p className="text-gray-700 mb-6">
                אנחנו כאן כדי לענות על כל שאלה. צרו איתנו קשר באחת מהדרכים הבאות ונשמח לעזור.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="font-semibold">טלפון:</span>
                  <a href="tel:03-1234567" className="hover:text-[#588C7E] transition-colors">03-1234567</a>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="font-semibold">אימייל:</span>
                  <a href="mailto:info@beta-salon.co.il" className="hover:text-[#588C7E] transition-colors">info@beta-salon.co.il</a>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="font-semibold">שעות פעילות:</span>
                  <span>א'-ה' 9:00-20:00, ו' 9:00-14:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;