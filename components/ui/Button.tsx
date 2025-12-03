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
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-prestige-gold disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg tracking-wide";
  
  const variants = {
    // Primary: Deep Black on Gold Background (High Contrast)
    primary: "bg-deep-black text-prestige-gold hover:bg-gray-900 hover:shadow-xl border border-transparent",
    // Secondary: White (Clean look on yellow)
    secondary: "bg-white text-deep-black border border-white hover:bg-gray-100",
    // Outline: Black border, Black text
    outline: "bg-transparent text-deep-black border-2 border-deep-black hover:bg-deep-black hover:text-prestige-gold"
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