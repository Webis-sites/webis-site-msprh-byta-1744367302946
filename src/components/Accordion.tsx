'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenItems?: string[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenItems = [],
  className = '',
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(id);
    }
  };

  // Focus management for keyboard navigation
  useEffect(() => {
    const handleKeyNavigation = (e: KeyboardEvent) => {
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return;
      
      const headers = Object.values(itemRefs.current).filter(Boolean);
      const focusedElement = document.activeElement;
      const focusedIndex = headers.findIndex(header => header === focusedElement);
      
      if (focusedIndex === -1) return;
      
      e.preventDefault();
      
      let nextIndex;
      switch (e.key) {
        case 'ArrowDown':
          nextIndex = (focusedIndex + 1) % headers.length;
          break;
        case 'ArrowUp':
          nextIndex = (focusedIndex - 1 + headers.length) % headers.length;
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = headers.length - 1;
          break;
        default:
          return;
      }
      
      (headers[nextIndex] as HTMLDivElement).focus();
    };

    document.addEventListener('keydown', handleKeyNavigation);
    return () => {
      document.removeEventListener('keydown', handleKeyNavigation);
    };
  }, []);

  return (
    <div 
      id="salon-accordion" 
      dir="rtl" 
      className={`w-full max-w-3xl mx-auto ${className}`}
      role="region"
      aria-label="שאלות נפוצות"
    >
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        
        return (
          <div 
            key={item.id} 
            className="mb-4 overflow-hidden rounded-xl bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]"
          >
            <div
              ref={(el) => (itemRefs.current[item.id] = el)}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className={`flex justify-between items-center p-4 cursor-pointer text-right transition-all duration-300 ${
                isOpen 
                  ? 'bg-gradient-to-l from-[#588C7E] to-[#588C7E]/80 text-white shadow-inner' 
                  : 'bg-gradient-to-l from-[#FFEEAD]/30 to-white hover:from-[#FFEEAD]/50 shadow-[3px_3px_6px_0_rgba(0,0,0,0.1),-3px_-3px_6px_0_rgba(255,255,255,0.8)]'
              }`}
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  isOpen 
                    ? 'bg-white bg-opacity-20' 
                    : 'bg-[#588C7E] text-white'
                }`}
              >
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </motion.div>
            </div>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-content-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: 'auto', 
                    opacity: 1,
                    transition: { 
                      height: { duration: 0.3 },
                      opacity: { duration: 0.3, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: { 
                      height: { duration: 0.3 },
                      opacity: { duration: 0.2 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-4 text-right bg-gradient-to-br from-white/90 to-white/70">
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

// Example usage component
const AccordionExample: React.FC = () => {
  const faqItems = [
    {
      id: 'faq-1',
      title: 'מהן שעות הפעילות של המספרה?',
      content: 'המספרה פתוחה בימים א׳-ה׳ בין השעות 9:00-20:00, ביום ו׳ בין השעות 9:00-14:00, ובשבת המספרה סגורה.'
    },
    {
      id: 'faq-2',
      title: 'האם צריך לקבוע תור מראש?',
      content: 'כן, אנו ממליצים לקבוע תור מראש כדי להבטיח את זמינות הספר המועדף עליכם. ניתן לקבוע תור דרך האתר או בטלפון 03-1234567.'
    },
    {
      id: 'faq-3',
      title: 'האם אתם מציעים טיפולי צבע לשיער?',
      content: 'בהחלט! המספרה שלנו מתמחה במגוון טיפולי צבע לשיער, כולל צביעה מלאה, הבהרות, גוונים, ואומברה. הספרים שלנו מוסמכים ובעלי ניסיון רב בטכניקות צביעה מתקדמות.'
    },
    {
      id: 'faq-4',
      title: 'מה המדיניות לגבי ביטול תורים?',
      content: 'אנו מבקשים להודיע על ביטול תור לפחות 24 שעות מראש. ביטולים ברגע האחרון עלולים לגרור חיוב של 50% מעלות הטיפול המתוכנן.'
    },
    {
      id: 'faq-5',
      title: 'האם יש חנייה בקרבת המספרה?',
      content: 'כן, ישנו חניון ציבורי במרחק של 100 מטר מהמספרה. בנוסף, ישנה חנייה ברחוב ללא תשלום בשעות מסוימות.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#588C7E]/10 to-[#FFEEAD]/20 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#588C7E] mb-4">שאלות נפוצות</h2>
          <div className="flex justify-center mb-8">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="מספרה ביתא - אווירה מקצועית" 
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            כאן תוכלו למצוא תשובות לשאלות הנפוצות ביותר. אם לא מצאתם את התשובה שחיפשתם, אל תהססו ליצור איתנו קשר.
          </p>
        </div>
        
        <Accordion 
          items={faqItems} 
          allowMultiple={false} 
          defaultOpenItems={['faq-1']} 
        />
        
        <div className="mt-10 p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-xl border border-white border-opacity-30 shadow-lg text-center">
          <h3 className="text-xl font-semibold text-[#588C7E] mb-3">יש לכם שאלה נוספת?</h3>
          <p className="mb-4">צוות מספרה ביתא ישמח לענות על כל שאלה</p>
          <button className="px-6 py-2 bg-[#588C7E] text-white rounded-full shadow-[3px_3px_6px_0_rgba(0,0,0,0.1),-3px_-3px_6px_0_rgba(255,255,255,0.8)] hover:shadow-inner transition-all duration-300">
            צרו קשר
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccordionExample;