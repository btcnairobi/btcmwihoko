import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  background?: 'gold' | 'black';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children,
  background = 'black'
}) => {
  const bgClasses = {
    gold: 'bg-prestige-gold text-deep-black',
    black: 'bg-deep-black text-white'
  };

  return (
    <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${bgClasses[background]} ${className}`}>
      {children}
    </section>
  );
};