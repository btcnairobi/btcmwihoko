import React from 'react';
import { Twitter, Instagram, Facebook, ChevronUp, ChevronDown } from 'lucide-react';
import { Logo } from './ui/Logo';

interface FooterProps {
  isHome?: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Footer: React.FC<FooterProps> = ({ isHome = false, isOpen, setIsOpen }) => {
  const toggleFooter = () => setIsOpen(!isOpen);

  // Styling logic
  // On Homepage: Fixed at bottom, Gold Background, Black Text.
  // Not Homepage: Standard relative footer, Black Background, White Text.
  
  const baseClasses = isHome 
    ? `fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-in-out bg-prestige-gold text-deep-black border-t border-deep-black/10`
    : 'relative z-10 bg-deep-black text-white rounded-t-[3rem] mt-[-2rem]';

  const translateClass = isHome 
    ? (isOpen ? 'translate-y-0' : 'translate-y-[calc(100%-3rem)]') // 3rem is the visible "handle" height
    : 'translate-y-0';

  const shadowClass = isHome ? 'shadow-[0_-5px_30px_rgba(0,0,0,0.1)]' : '';

  return (
    <footer className={`${baseClasses} ${translateClass} ${shadowClass}`}>
      
      {/* Toggle Handle for Homepage */}
      {isHome && (
        <button 
          onClick={toggleFooter}
          className="absolute -top-0 left-0 w-full h-12 flex items-center justify-center cursor-pointer group focus:outline-none hover:bg-black/5 transition-colors"
          aria-label="Toggle Footer"
        >
          <div className="flex flex-col items-center">
             {/* Dynamic Arrow: If Open, arrow points Down (to close). If Closed, arrow points Up (to open). */}
             {isOpen 
                ? <ChevronDown size={24} className="text-deep-black animate-bounce" /> 
                : <ChevronUp size={24} className="text-deep-black animate-bounce" />
             }
          </div>
        </button>
      )}

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isHome ? 'pt-12 pb-10' : 'pt-20 pb-10'}`}>
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          
          <div className="mb-8 md:mb-0">
            <Logo variant={isHome ? 'dark' : 'light'} />
            <p className={`mt-4 text-sm max-w-xs ${isHome ? 'text-deep-black/70' : 'text-gray-500'}`}>
              Anchored in Mwihoko. Powered by Bitcoin.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${isHome ? 'bg-deep-black text-prestige-gold hover:bg-white hover:text-deep-black' : 'bg-charcoal text-gray-400 hover:bg-prestige-gold hover:text-deep-black'}`}>
                <Twitter size={18} />
            </a>
            <a href="#" className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${isHome ? 'bg-deep-black text-prestige-gold hover:bg-white hover:text-deep-black' : 'bg-charcoal text-gray-400 hover:bg-prestige-gold hover:text-deep-black'}`}>
                <Instagram size={18} />
            </a>
            <a href="#" className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${isHome ? 'bg-deep-black text-prestige-gold hover:bg-white hover:text-deep-black' : 'bg-charcoal text-gray-400 hover:bg-prestige-gold hover:text-deep-black'}`}>
                <Facebook size={18} />
            </a>
          </div>

        </div>

        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium ${isHome ? 'border-deep-black/10 text-deep-black/60' : 'border-gray-800 text-gray-600'}`}>
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Bitcoin Mwihoko.</p>
          <div className="flex items-center gap-2">
             <span>@btcmwihoko</span>
             <span className={`w-1 h-1 rounded-full ${isHome ? 'bg-deep-black/40' : 'bg-gray-600'}`}></span>
             <span>Made with Love</span>
          </div>
        </div>
      </div>
    </footer>
  );
};