import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-black disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg tracking-wide";
  
  const variants = {
    // Primary: Prestige Gold on Black (High Contrast for Dark Theme)
    primary: "bg-prestige-gold text-deep-black hover:bg-bitcoin-yellow hover:shadow-bitcoin-yellow/20 border border-transparent",
    // Secondary: Charcoal/Dark Grey
    secondary: "bg-charcoal text-white border border-gray-800 hover:bg-gray-800 hover:border-gray-700",
    // Outline: Gold border, Gold text
    outline: "bg-transparent text-prestige-gold border-2 border-prestige-gold hover:bg-prestige-gold hover:text-deep-black"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};