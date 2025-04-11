'use client';

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

// Define button variants, sizes and icon positions
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';
type IconPosition = 'left' | 'right';

// Button props interface
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactElement<IconType>;
  iconPosition?: IconPosition;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      icon,
      iconPosition = 'right', // Default to right for RTL
      fullWidth = false,
      className = '',
      children,
      disabled = false,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    // Base classes for all buttons
    const baseClasses = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center';
    
    // Size specific classes
    const sizeClasses = {
      small: 'text-sm py-1.5 px-3',
      medium: 'text-base py-2 px-4',
      large: 'text-lg py-3 px-6',
    };
    
    // Variant specific classes (including neumorphic and glassmorphism styles)
    const variantClasses = {
      primary: `bg-[#588C7E] text-white hover:bg-opacity-90 active:bg-opacity-100 
                focus:ring-[#588C7E] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)] 
                hover:shadow-[inset_0_-3px_6px_rgba(0,0,0,0.3)] 
                active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`,
                
      secondary: `bg-[#FFEEAD] text-[#588C7E] hover:bg-opacity-90 active:bg-opacity-100 
                  focus:ring-[#FFEEAD] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] 
                  hover:shadow-[inset_0_-3px_6px_rgba(0,0,0,0.15)] 
                  active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)]`,
                  
      outline: `bg-transparent border-2 border-[#588C7E] text-[#588C7E] 
                hover:bg-[#588C7E] hover:bg-opacity-10 focus:ring-[#588C7E]
                backdrop-filter backdrop-blur-sm bg-opacity-10
                shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.15)]`,
                
      text: `bg-transparent text-[#588C7E] hover:bg-[#588C7E] hover:bg-opacity-10 
             focus:ring-[#588C7E] focus:ring-offset-0 shadow-none`,
    };
    
    // Disabled state classes
    const disabledClasses = 'opacity-60 cursor-not-allowed pointer-events-none';
    
    // Full width class
    const widthClass = fullWidth ? 'w-full' : '';
    
    // Combine all classes
    const buttonClasses = `
      ${baseClasses}
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${disabled ? disabledClasses : ''}
      ${widthClass}
      ${className}
    `;

    // Animation variants
    const buttonAnimation = {
      rest: { scale: 1 },
      hover: { scale: 1.03 },
      tap: { scale: 0.98 },
    };

    return (
      <motion.button
        id="salon-button"
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={disabled}
        dir="rtl"
        initial="rest"
        whileHover={disabled ? "rest" : "hover"}
        whileTap={disabled ? "rest" : "tap"}
        variants={buttonAnimation}
        transition={{ duration: 0.2 }}
        aria-disabled={disabled}
        {...rest}
      >
        {/* Render icon based on position - note the order is reversed for RTL */}
        {icon && iconPosition === 'right' && (
          <span className="ml-2 rtl:ml-0 rtl:mr-2 order-1 rtl:order-2">{icon}</span>
        )}
        <span className={`order-2 rtl:order-1 ${icon ? 'mx-1' : ''}`}>{children}</span>
        {icon && iconPosition === 'left' && (
          <span className="mr-2 rtl:mr-0 rtl:ml-2 order-3 rtl:order-0">{icon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

// Example usage:
/*
import { FaScissors } from 'react-icons/fa';

// Primary button with right icon (appears on left in RTL)
<Button variant="primary" size="medium" icon={<FaScissors />} iconPosition="right">
  הזמן תור
</Button>

// Secondary button
<Button variant="secondary" size="large">
  צור קשר
</Button>

// Outline button with left icon (appears on right in RTL)
<Button variant="outline" icon={<FaScissors />} iconPosition="left">
  השירותים שלנו
</Button>

// Text button
<Button variant="text" size="small">
  קרא עוד
</Button>

// Disabled button
<Button variant="primary" disabled>
  לא זמין
</Button>

// Full width button
<Button variant="primary" fullWidth>
  הירשם לניוזלטר
</Button>
*/