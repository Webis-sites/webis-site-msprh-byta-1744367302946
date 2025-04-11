'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaServicestack, FaShoppingBag, FaUser, FaTag } from 'react-icons/fa';

// Define types for the Card component
interface CardProps {
  id: string;
  type: 'service' | 'product' | 'team' | 'promotion';
  image: string;
  title: string;
  description: string;
  price?: string;
  badge?: string;
  actionText?: string;
  onAction?: () => void;
  layout?: 'vertical' | 'horizontal';
}

const Card: React.FC<CardProps> = ({
  id,
  type,
  image,
  title,
  description,
  price,
  badge,
  actionText = 'הזמן עכשיו',
  onAction = () => {},
  layout = 'vertical',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get the appropriate icon based on card type
  const getIcon = () => {
    switch (type) {
      case 'service':
        return <FaServicestack className="ml-2" />;
      case 'product':
        return <FaShoppingBag className="ml-2" />;
      case 'team':
        return <FaUser className="ml-2" />;
      case 'promotion':
        return <FaTag className="ml-2" />;
      default:
        return <FaServicestack className="ml-2" />;
    }
  };

  // Card variants for animation
  const cardVariants = {
    initial: { 
      y: 0,
      boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)'
    },
    hover: { 
      y: -10,
      boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.9)'
    }
  };

  // Button variants for animation
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      id={id}
      dir="rtl"
      className={`
        relative overflow-hidden rounded-2xl
        ${layout === 'vertical' ? 'flex flex-col' : 'flex flex-col md:flex-row'}
        bg-white bg-opacity-70 backdrop-blur-md
        border border-white border-opacity-20
        transition-all duration-300
      `}
      style={{
        maxWidth: layout === 'vertical' ? '320px' : '100%',
        boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)'
      }}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Badge (if provided) */}
      {badge && (
        <div className="absolute top-3 right-3 z-10">
          <div className="px-3 py-1 text-sm font-bold text-white rounded-full" 
               style={{ backgroundColor: '#588C7E' }}>
            {badge}
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className={`relative ${layout === 'vertical' ? 'h-48 w-full' : 'h-full md:w-1/3'}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-2xl md:rounded-r-2xl md:rounded-tl-none"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
      </div>

      {/* Content Container */}
      <div className={`flex flex-col p-5 text-right ${layout === 'vertical' ? 'w-full' : 'md:w-2/3'}`}>
        <div className="flex items-center justify-end mb-2">
          {getIcon()}
          <h3 className="text-xl font-bold" style={{ color: '#588C7E' }}>{title}</h3>
        </div>
        
        <p className="mb-4 text-gray-700">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          {price && (
            <div className="text-lg font-bold" style={{ color: '#588C7E' }}>
              ₪{price}
            </div>
          )}
          
          <motion.button
            className="px-4 py-2 text-white rounded-full"
            style={{ 
              backgroundColor: '#588C7E',
              boxShadow: isHovered 
                ? '4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.9)' 
                : '2px 2px 5px rgba(0, 0, 0, 0.1), -2px -2px 5px rgba(255, 255, 255, 0.7)'
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={onAction}
          >
            {actionText}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Example usage component that demonstrates different card layouts and types
const CardExamples: React.FC = () => {
  return (
    <div dir="rtl" className="p-6 space-y-8">
      <h2 className="text-2xl font-bold text-right mb-6" style={{ color: '#588C7E' }}>השירותים שלנו</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service Card */}
        <Card
          id="haircut-service"
          type="service"
          image="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          title="תספורת מעוצבת"
          description="תספורת מקצועית המותאמת אישית לצורת הפנים ולסגנון האישי שלך."
          price="120"
          badge="פופולרי"
          actionText="קבע תור"
        />
        
        {/* Product Card */}
        <Card
          id="shampoo-product"
          type="product"
          image="https://images.unsplash.com/photo-1626766632648-f5e0c1e929f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          title="שמפו מקצועי"
          description="שמפו איכותי לשיער מבריק וחזק. מתאים לכל סוגי השיער."
          price="85"
          actionText="הוסף לסל"
        />
        
        {/* Team Member Card */}
        <Card
          id="stylist-team"
          type="team"
          image="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          title="מיכל - מעצבת שיער"
          description="מיכל היא מעצבת שיער בעלת ניסיון של 10 שנים, המתמחה בצבעי שיער ותספורות אופנתיות."
          actionText="הזמן תור עם מיכל"
        />
      </div>
      
      <h2 className="text-2xl font-bold text-right mt-10 mb-6" style={{ color: '#588C7E' }}>מבצעים מיוחדים</h2>
      
      {/* Horizontal Layout Card */}
      <Card
        id="special-promotion"
        type="promotion"
        layout="horizontal"
        image="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        title="חבילת טיפוח מלאה"
        description="חבילה מיוחדת הכוללת תספורת, צבע, טיפול קרטין ומוצרי טיפוח. מושלם לחידוש המראה שלך!"
        price="399"
        badge="חסכון של 20%"
        actionText="נצל את ההצעה"
      />
    </div>
  );
};

export default Card;