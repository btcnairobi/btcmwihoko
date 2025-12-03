import React from 'react';
import { Anchor, ArrowRight, Bitcoin, CreditCard, Heart } from 'lucide-react';
import { Button } from './ui/Button';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-deep-black">
      
      {/* Decorative Organic Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-prestige-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-[30%] -right-[10%] w-[50%] h-[70%] bg-bitcoin-yellow/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] left-[20%] w-[30%] h-[30%] bg-energy-orange/5 rounded-full blur-[80px]"></div>
      </div>

      {/* Large Decorative Anchor */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Anchor size={800} strokeWidth={0.5} className="text-off-white rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-prestige-gold/30 bg-prestige-gold/10 mb-10 backdrop-blur-sm animate-fade-in-up">
          <Bitcoin className="w-4 h-4 text-prestige-gold" />
          <span className="text-prestige-gold text-xs font-bold tracking-[0.2em] uppercase">Circular Economy</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
          Building Mwihoko’s <br />
          <span className="text-transparent bg-clip-text bg-gradient-soft">
             Bitcoin Future
          </span>
        </h1>

        <div className="flex justify-center gap-4 md:gap-12 mb-12 text-gray-400 font-medium text-lg md:text-xl">
            <div className="flex items-center gap-2">
                <Bitcoin className="text-bitcoin-yellow" />
                <span>Earn</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-charcoal"></div>
            <div className="flex items-center gap-2">
                <CreditCard className="text-bitcoin-yellow" />
                <span>Spend</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-charcoal"></div>
            <div className="flex items-center gap-2">
                <Heart className="text-bitcoin-yellow" />
                <span>Live</span>
            </div>
        </div>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-12 leading-relaxed">
          We are creating a self-sustaining community where value stays local. 
          By adopting a sound money standard, we anchor our families in hope and financial sovereignty.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="primary" className="group min-w-[180px]" onClick={() => onNavigate('join')}>
            Join Movement
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" className="min-w-[180px]" onClick={() => onNavigate('merchants')}>
            Spend Bitcoin
          </Button>
        </div>

      </div>
    </section>
  );
};