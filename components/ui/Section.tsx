import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  background?: 'gold' | 'black' | 'light';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children,
  background = 'gold'
}) => {
  const bgClasses = {
    // Gold is now the main background
    gold: 'bg-prestige-gold text-deep-black',
    // Black is used for contrast sections (footer, special cards)
    black: 'bg-deep-black text-prestige-gold',
    // Light variant (Bitcoin Yellow)
    light: 'bg-bitcoin-yellow text-deep-black'
  };

  return (
    <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${bgClasses[background]} ${className}`}>
      {children}
    </section>
  );
};