import React from 'react';
import { Section } from './ui/Section';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: "David K.",
    role: "Merchant",
    quote: "Bitcoin gave my shop a new life and connected me to the world.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: '2',
    name: "Sarah M.",
    role: "Student",
    quote: "I finally feel like I have control over my own future.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: '3',
    name: "John O.",
    role: "Builder",
    quote: "The energy here is pure love. We build for each other.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const GalleryPage: React.FC = () => {
  return (
    <Section id="gallery" background="gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-deep-black/70 font-bold tracking-widest uppercase text-sm mb-3">Community</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-deep-black">Moments & Voices</h3>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-deep-black p-10 rounded-[3rem] border border-gray-800 relative shadow-xl hover:-translate-y-2 transition-transform">
              <Quote className="absolute top-8 right-8 h-8 w-8 text-charcoal" />
              <p className="text-gray-300 font-medium italic mb-8 relative z-10 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-charcoal overflow-hidden border-2 border-prestige-gold mr-4">
                  <img src={t.image} alt={t.name} className="h-full w-full object-cover grayscale" />
                </div>
                <div>
                  <h5 className="text-white font-bold">{t.name}</h5>
                  <span className="text-prestige-gold text-xs uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="text-center mb-10">
          <h4 className="text-2xl font-bold text-deep-black mb-2">Our Gallery</h4>
          <div className="w-16 h-1 bg-deep-black mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
             {[10, 11, 12, 13, 14, 15, 16, 17].map((num) => (
               <div key={num} className="aspect-square rounded-[2rem] overflow-hidden border-2 border-deep-black relative group shadow-lg">
                 <img src={`https://picsum.photos/600/600?random=${num}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" alt="Community" />
                 <div className="absolute inset-0 bg-prestige-gold/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
               </div>
             ))}
        </div>

      </div>
    </Section>
  );
};