import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Quote, Users, Anchor, TrendingUp, Calendar, Heart, Camera, Briefcase, PiggyBank, Coffee } from 'lucide-react';
import { Page, TestimonialItem } from '../types';

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: "Kamau & Family",
    role: "Local Family",
    quote: "Saving in Bitcoin has given us peace of mind. We are no longer worried about rising prices eating our hard work.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: '2',
    name: "Grace W.",
    role: "Student",
    quote: "I learnt about Lightning at a meetup. Now I run a node and help my parents accept payments at their shop.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: '3',
    name: "Mr. Omondi",
    role: "Merchant",
    quote: "The community support is real. When I started accepting Bitcoin, the youth showed me how to use the wallet safely.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

interface CommunityProps {
  onNavigate?: (page: Page) => void;
}

export const Community: React.FC<CommunityProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <Section id="comm-hero" background="gold" className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="inline-flex items-center justify-center p-4 bg-deep-black rounded-full mb-8 shadow-2xl animate-fade-in-up">
             <Users className="text-prestige-gold w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-deep-black mb-8 leading-tight">
            A Community <br/> Anchored in <span className="text-white bg-deep-black px-4 transform -skew-x-6 inline-block">Bitcoin</span>
          </h1>
          <p className="text-xl md:text-2xl text-deep-black/70 leading-relaxed max-w-2xl mx-auto font-medium">
            Mwihoko is more than a location. It is a shared belief in a better future. We are builders, savers, merchants, and families growing together.
          </p>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials" background="black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white/60 font-bold tracking-widest uppercase text-sm mb-3">Voices</h2>
            <h3 className="text-4xl font-bold text-prestige-gold">Stories of Hope</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-charcoal p-10 rounded-[3rem] border border-white/5 relative shadow-xl hover:-translate-y-2 transition-transform group">
                <Quote className="absolute top-8 right-8 h-8 w-8 text-prestige-gold/20 group-hover:text-prestige-gold transition-colors" />
                <p className="text-gray-300 font-medium italic mb-8 relative z-10 leading-relaxed min-h-[80px]">"{t.quote}"</p>
                <div className="flex items-center">
                  <div className="h-14 w-14 rounded-full bg-deep-black overflow-hidden border-2 border-prestige-gold mr-4">
                    <img src={t.image} alt={t.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg">{t.name}</h5>
                    <span className="text-prestige-gold text-xs uppercase tracking-wider font-bold">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* GOALS */}
      <Section id="goals" background="light">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl font-bold text-deep-black mb-8">Our Common Goals</h2>
                  <p className="text-lg text-deep-black/70 mb-10 font-medium leading-relaxed">
                    We aren't just using Bitcoin; we are using it to solve real problems in our village. By closing the loop, we achieve financial independence.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex gap-6 items-start group">
                        <div className="w-16 h-16 rounded-[2rem] bg-deep-black flex items-center justify-center shrink-0 text-prestige-gold group-hover:scale-110 transition-transform">
                           <Briefcase size={28} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-deep-black mb-1">Employment</h4>
                           <p className="text-deep-black/60">Creating new jobs in tech, repair, and education for our youth.</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start group">
                        <div className="w-16 h-16 rounded-[2rem] bg-white flex items-center justify-center shrink-0 text-deep-black border border-deep-black/10 group-hover:bg-bitcoin-yellow transition-colors">
                           <PiggyBank size={28} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-deep-black mb-1">Savings</h4>
                           <p className="text-deep-black/60">Protecting family wealth from inflation with a hard asset.</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start group">
                        <div className="w-16 h-16 rounded-[2rem] bg-deep-black flex items-center justify-center shrink-0 text-prestige-gold group-hover:scale-110 transition-transform">
                           <TrendingUp size={28} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-deep-black mb-1">Economic Growth</h4>
                           <p className="text-deep-black/60">Keeping value within Mwihoko to upgrade our local infrastructure.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-4 translate-y-8">
                        <img src="https://picsum.photos/400/500?random=30" className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" alt="Community Goal 1" />
                        <img src="https://picsum.photos/400/400?random=31" className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" alt="Community Goal 2" />
                     </div>
                     <div className="space-y-4">
                        <img src="https://picsum.photos/400/400?random=32" className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" alt="Community Goal 3" />
                        <img src="https://picsum.photos/400/500?random=33" className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" alt="Community Goal 4" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* MEETUPS */}
      <Section id="meetups" background="black">
         <div className="max-w-5xl mx-auto px-4 text-center">
            <Calendar className="w-16 h-16 text-prestige-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Bitcoin Meetups & Hangouts</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
               We meet weekly to share knowledge, onboard new members, and enjoy good food paid for in sats.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
               <div className="bg-charcoal p-8 rounded-[2rem] border border-white/5 text-left flex items-start gap-6 hover:bg-white/5 transition-colors">
                  <Coffee className="w-10 h-10 text-prestige-gold shrink-0" />
                  <div>
                     <h4 className="text-xl font-bold text-white mb-1">Sunday Coffee</h4>
                     <p className="text-gray-400 text-sm mb-2">Every Sunday, 10:00 AM @ The Coffee Spot</p>
                     <p className="text-gray-500 text-xs">Casual conversations and wallet setup help.</p>
                  </div>
               </div>
               <div className="bg-charcoal p-8 rounded-[2rem] border border-white/5 text-left flex items-start gap-6 hover:bg-white/5 transition-colors">
                  <Users className="w-10 h-10 text-prestige-gold shrink-0" />
                  <div>
                     <h4 className="text-xl font-bold text-white mb-1">Monthly Town Hall</h4>
                     <p className="text-gray-400 text-sm mb-2">First Friday, 6:00 PM @ Community Hall</p>
                     <p className="text-gray-500 text-xs">Strategy, merchant onboarding updates, and workshops.</p>
                  </div>
               </div>
            </div>

            <Button variant="primary" className="!bg-prestige-gold !text-deep-black hover:!bg-white" onClick={() => onNavigate && onNavigate('events')}>
               View Full Calendar
            </Button>
         </div>
      </Section>

      {/* GALLERY GRID */}
      <Section id="gallery-grid" background="gold">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
               <Camera className="w-8 h-8 text-deep-black mx-auto mb-4" />
               <h3 className="text-3xl font-bold text-deep-black">Moments in Mwihoko</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {[10, 11, 12, 13, 14, 15, 16, 17].map((num) => (
                  <div key={num} className="aspect-square rounded-[2rem] overflow-hidden border-2 border-deep-black relative group shadow-lg cursor-pointer">
                    <img src={`https://picsum.photos/600/600?random=${num}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" alt="Community Moment" />
                    <div className="absolute inset-0 bg-deep-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                ))}
            </div>
         </div>
      </Section>

      {/* CTA */}
      <Section id="community-cta" background="black" className="py-24">
         <div className="max-w-4xl mx-auto text-center px-4">
             <Heart className="w-16 h-16 text-prestige-gold mx-auto mb-6 animate-pulse" />
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">You Are Welcome Here</h2>
             <p className="text-xl text-gray-400 mb-12 font-medium">
                Whether you have 0 sats or 10 BTC, you are part of the family. Come build with us.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button variant="primary" className="!bg-prestige-gold !text-deep-black hover:!bg-white" onClick={() => onNavigate && onNavigate('join')}>
                   Join the Community
                </Button>
             </div>
         </div>
      </Section>
    </div>
  );
};