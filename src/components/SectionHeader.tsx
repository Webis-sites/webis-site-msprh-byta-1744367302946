'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaServicestack } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
  alignment?: 'right' | 'center' | 'left';
  titleColor?: string;
  subtitleColor?: string;
  showDecorations?: boolean;
  decorationType?: 'lines' | 'dots' | 'scissors';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  id = 'section-header',
  title,
  subtitle,
  alignment = 'right',
  titleColor = '#588C7E',
  subtitleColor = '#333333',
  showDecorations = true,
  decorationType = 'scissors',
  className = '',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const alignmentClasses = {
    right: 'text-right',
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  const decorationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.3
      }
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    },
  };

  const renderDecorations = () => {
    switch (decorationType) {
      case 'lines':
        return (
          <motion.div 
            className={`flex items-center justify-${alignment === 'center' ? 'center' : alignment} gap-4 my-3`}
            variants={decorationVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#588C7E]"></div>
            <div className="h-[2px] w-20 bg-[#588C7E]"></div>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#588C7E]"></div>
          </motion.div>
        );
      case 'dots':
        return (
          <motion.div 
            className={`flex items-center justify-${alignment === 'center' ? 'center' : alignment} gap-2 my-3`}
            variants={decorationVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="h-2 w-2 rounded-full bg-[#FFEEAD]"></div>
            <div className="h-3 w-3 rounded-full bg-[#588C7E]"></div>
            <div className="h-2 w-2 rounded-full bg-[#FFEEAD]"></div>
          </motion.div>
        );
      case 'scissors':
      default:
        return (
          <motion.div 
            className={`flex items-center justify-${alignment === 'center' ? 'center' : alignment} gap-3 my-3`}
            variants={decorationVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#588C7E]"></div>
            <FaServicestack className="text-[#588C7E] transform rotate-90" size={18} />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#588C7E]"></div>
          </motion.div>
        );
    }
  };

  return (
    <div 
      id={id}
      dir="rtl" 
      ref={ref} 
      className={`w-full my-8 ${className}`}
    >
      <div className={`max-w-4xl ${alignmentClasses[alignment]}`}>
        {showDecorations && alignment !== 'center' && decorationType !== 'scissors' && (
          <div className="mb-4">{renderDecorations()}</div>
        )}
        
        <motion.h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 ${alignmentClasses[alignment]}`}
          style={{ 
            color: titleColor,
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          }}
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {title}
        </motion.h2>
        
        {showDecorations && (alignment === 'center' || decorationType === 'scissors') && (
          <div>{renderDecorations()}</div>
        )}
        
        {subtitle && (
          <motion.p
            className={`text-base md:text-lg ${alignmentClasses[alignment]} mt-2`}
            style={{ color: subtitleColor }}
            variants={subtitleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {subtitle}
          </motion.p>
        )}
        
        {showDecorations && alignment !== 'center' && decorationType !== 'scissors' && (
          <div className="mt-4">{renderDecorations()}</div>
        )}
      </div>
    </div>
  );
};

// Example usage component
const SectionHeaderExample: React.FC = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Glass morphism container */}
        <div className="backdrop-blur-md bg-white/30 p-8 rounded-2xl border border-white/40 shadow-lg">
          <SectionHeader
            id="our-services"
            title="השירותים שלנו"
            subtitle="אנו מציעים מגוון רחב של טיפולי שיער ועיצוב לכל סוגי השיער והסגנונות"
            alignment="right"
            showDecorations={true}
            decorationType="scissors"
          />
          
          {/* Example content */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="p-6 bg-white/50 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.6)] transition-all duration-300 hover:shadow-[8px_8px_20px_rgba(0,0,0,0.07),-8px_-8px_20px_rgba(255,255,255,0.8)]">
              <h3 className="text-xl font-semibold text-[#588C7E] mb-3">תספורות</h3>
              <p className="text-gray-700">תספורות מקצועיות לנשים, גברים וילדים בכל הסגנונות</p>
            </div>
            
            <div className="p-6 bg-white/50 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.6)] transition-all duration-300 hover:shadow-[8px_8px_20px_rgba(0,0,0,0.07),-8px_-8px_20px_rgba(255,255,255,0.8)]">
              <h3 className="text-xl font-semibold text-[#588C7E] mb-3">צביעת שיער</h3>
              <p className="text-gray-700">צביעה מקצועית בכל הגוונים עם חומרים איכותיים</p>
            </div>
          </div>
        </div>
        
        {/* Another example with different alignment and decoration */}
        <div className="backdrop-blur-md bg-white/30 p-8 rounded-2xl border border-white/40 shadow-lg mt-12">
          <SectionHeader
            id="about-us"
            title="אודות המספרה"
            subtitle="מספרה ביתא - המקום שלך לחוויית עיצוב שיער מושלמת"
            alignment="center"
            showDecorations={true}
            decorationType="lines"
          />
          
          <div className="mt-8 text-center">
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="מספרה ביתא" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;