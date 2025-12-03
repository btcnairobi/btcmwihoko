import React from 'react';
import { Anchor, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    // min-h calculation accounts for the sticky Navbar height (approx 5rem / 80px) to prevent scroll on load
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-prestige-gold">
      
      {/* Decorative Organic Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-bitcoin-yellow/20 rounded-full blur-[80px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-white/10 rounded-full blur-[60px]"></div>
      </div>

      {/* Large Decorative Anchor */}
      <div className="absolute right-[5%] bottom-[5%] opacity-[0.05] pointer-events-none">
        <Anchor size={600} strokeWidth={0.5} className="text-deep-black rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-deep-black/10 bg-deep-black/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-deep-black"></span>
          <span className="text-deep-black text-sm font-bold tracking-widest uppercase">Love. Strength. Hope.</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-deep-black mb-6 leading-tight tracking-tight">
          Anchored in <br />
          <span className="relative">
             Hope
             <svg className="absolute w-full h-3 -bottom-1 left-0 text-white" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 101.5 1.49997 197.5 3.99997" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-deep-black/80 text-lg md:text-xl mb-12 font-medium leading-relaxed">
          Bitcoin Mwihoko is a family. We are building a stable foundation filled with love, wealth, and new beginnings for our community.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="primary" className="group" onClick={() => onNavigate('about')}>
            Our Mission
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" onClick={() => onNavigate('join')}>
            Join Us
          </Button>
        </div>

        {/* Stats Strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Community', value: 'Unity' },
            { label: 'Foundation', value: 'Strong' },
            { label: 'Future', value: 'Bright' },
            { label: 'Bitcoin', value: 'Only' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-deep-black">{stat.value}</span>
              <span className="text-xs text-deep-black/60 uppercase tracking-widest mt-1 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};