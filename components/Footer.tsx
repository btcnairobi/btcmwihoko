import React from 'react';
import { Twitter, Instagram, Facebook, ChevronUp, ChevronDown, Anchor } from 'lucide-react';
import { Logo } from './ui/Logo';

interface FooterProps {
  isHome?: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Footer: React.FC<FooterProps> = ({ isHome = false, isOpen, setIsOpen }) => {
  const toggleFooter = () => setIsOpen(!isOpen);

  // Styling logic
  // On Homepage: Fixed at bottom, Black Background (blends with page), White Text.
  // Not Homepage: Standard relative footer.
  
  const baseClasses = isHome 
    ? `fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-in-out bg-charcoal text-white border-t border-white/5`
    : 'relative z-10 bg-charcoal text-white rounded-t-[3rem] mt-[-2rem]';

  const translateClass = isHome 
    ? (isOpen ? 'translate-y-0' : 'translate-y-[calc(100%-3rem)]') // 3rem is the visible "handle" height
    : 'translate-y-0';

  const shadowClass = isHome ? 'shadow-[0_-5px_30px_rgba(0,0,0,0.5)]' : '';

  return (
    <footer className={`${baseClasses} ${translateClass} ${shadowClass} overflow-hidden`}>
      
      {/* Anchor Watermark */}
      <div className="absolute -right-10 -bottom-10 text-deep-black pointer-events-none opacity-20">
          <Anchor size={300} strokeWidth={0.5} className="rotate-[-20deg]" />
      </div>

      {/* Toggle Handle for Homepage */}
      {isHome && (
        <button 
          onClick={toggleFooter}
          className="absolute -top-0 left-0 w-full h-12 flex items-center justify-center cursor-pointer group focus:outline-none hover:bg-white/5 transition-colors"
          aria-label="Toggle Footer"
        >
          <div className="flex flex-col items-center">
             {/* Dynamic Arrow */}
             {isOpen 
                ? <ChevronDown size={24} className="text-prestige-gold animate-bounce" /> 
                : <ChevronUp size={24} className="text-prestige-gold animate-bounce" />
             }
          </div>
        </button>
      )}

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isHome ? 'pt-12 pb-10' : 'pt-20 pb-10'}`}>
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          
          <div className="mb-8 md:mb-0">
            <Logo variant='light' />
            <p className="mt-4 text-sm max-w-xs text-gray-400">
              Anchored in Mwihoko. Powered by Bitcoin.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center transition-all bg-deep-black text-gray-400 hover:bg-prestige-gold hover:text-deep-black">
                <Twitter size={18} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center transition-all bg-deep-black text-gray-400 hover:bg-prestige-gold hover:text-deep-black">
                <Instagram size={18} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center transition-all bg-deep-black text-gray-400 hover:bg-prestige-gold hover:text-deep-black">
                <Facebook size={18} />
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-gray-500">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Bitcoin Mwihoko.</p>
          <div className="flex items-center gap-2">
             <span>@btcmwihoko</span>
             <span className="w-1 h-1 rounded-full bg-gray-600"></span>
             <span>Made with Love</span>
          </div>
        </div>
      </div>
    </footer>
  );
};