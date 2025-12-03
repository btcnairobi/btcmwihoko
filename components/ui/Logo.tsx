import React from 'react';
import { Anchor, Bitcoin } from 'lucide-react';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const textColor = variant === 'dark' ? 'text-deep-black' : 'text-white';
  const iconColor = variant === 'dark' ? 'text-deep-black' : 'text-prestige-gold';
  
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative transform transition-transform duration-500 hover:rotate-6">
        <Anchor className={`h-8 w-8 ${iconColor}`} strokeWidth={2.5} />
        <div className="absolute -bottom-1 -right-1 bg-deep-black rounded-full p-[2px]">
            <Bitcoin className="h-3 w-3 text-prestige-gold" />
        </div>
      </div>
      <span className={`font-bold text-xl tracking-wide ${textColor}`}>
        Bitcoin Mwihoko
      </span>
    </div>
  );
};