import React from 'react';
import { Section } from './ui/Section';
import { Anchor, Shield, Heart, Users } from 'lucide-react';
import { ValueProp } from '../types';

const VALUES: ValueProp[] = [
  {
    title: "Strength",
    description: "Like an anchor, we provide a firm hold for our families.",
    icon: Anchor
  },
  {
    title: "Trust",
    description: "We rely on truth and mathematical certainty, not promises.",
    icon: Shield
  },
  {
    title: "Youth",
    description: "Guiding the next generation toward a life of sovereignty.",
    icon: Heart
  },
  {
    title: "Unity",
    description: "A community growing together, supporting one another daily.",
    icon: Users
  }
];

export const About: React.FC = () => {
  return (
    <Section id="about" background="black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center mb-16">
          <h2 className="text-prestige-gold font-bold tracking-widest uppercase text-sm mb-3">Who We Are</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">The Heart of Mwihoko</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg font-medium">
            <p>
              Bitcoin Mwihoko represents a beautiful new beginning. In a world of constant change, we have chosen to drop our anchor here.
            </p>
            <p>
              We believe that true love for a community means empowering it with tools that last. We are not just neighbors; we are a fortress of hope.
            </p>
            <p>
              Simplicity is our strength. We gather to learn, to share, and to build a future that is as solid as gold.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-charcoal relative group shadow-2xl">
              <img 
                src="https://picsum.photos/800/800?grayscale" 
                alt="Mwihoko Community" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-prestige-gold/10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>

        {/* Values Grid - Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-charcoal border border-white/5 rounded-[2.5rem] hover:-translate-y-2 transition-transform duration-300 shadow-xl"
            >
              <div className="h-12 w-12 bg-deep-black rounded-full flex items-center justify-center mb-6 text-prestige-gold">
                <value.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};