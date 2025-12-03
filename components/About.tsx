import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Anchor, Shield, Heart, Users, TrendingUp, Zap, BookOpen } from 'lucide-react';
import { Page } from '../types';

interface AboutProps {
  onNavigate?: (page: Page) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
       {/* HERO */}
       <Section id="about-hero" background="gold" className="pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
            <div className="inline-flex items-center justify-center p-4 bg-deep-black rounded-full mb-8 shadow-2xl animate-fade-in-up">
               <Anchor className="text-prestige-gold w-8 h-8" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-deep-black mb-8 leading-tight tracking-tight">
              Anchoring Mwihoko <br/> in <span className="text-white bg-deep-black px-4 transform -skew-x-6 inline-block">Bitcoin</span>
            </h1>
            <p className="text-xl md:text-2xl text-deep-black/70 leading-relaxed max-w-2xl mx-auto font-medium">
              We are building a fortress of financial sovereignty. A community where hard work is stored in sound money, not melting fiat.
            </p>
          </div>
       </Section>

       {/* STORY & DEFINITION */}
       <Section id="story" background="light" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="relative order-2 lg:order-1">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-deep-black relative group shadow-2xl">
                     <img src="https://picsum.photos/800/1000?grayscale" alt="Mwihoko Community" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" />
                     <div className="absolute inset-0 bg-prestige-gold/20 mix-blend-overlay"></div>
                  </div>
                  {/* Floating card */}
                  <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-deep-black p-8 rounded-[2rem] shadow-2xl hidden md:block max-w-xs transform hover:scale-105 transition-transform duration-300">
                      <p className="text-prestige-gold font-serif italic text-lg leading-relaxed">"To build a future that lasts, we must build on rock, not sand."</p>
                  </div>
               </div>

               <div className="space-y-10 order-1 lg:order-2">
                  <div>
                    <span className="text-deep-black/60 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Story</span>
                    <h3 className="text-4xl md:text-5xl font-bold text-deep-black leading-tight">Why we chose the hardest money on Earth.</h3>
                  </div>
                  <div className="text-deep-black/80 text-lg space-y-6 leading-relaxed font-medium">
                    <p>
                      Mwihoko is a vibrant community full of energy and entrepreneurship. But for too long, the value created here has leaked away through inflation and broken financial systems.
                    </p>
                    <p>
                      We asked ourselves: <strong className="text-deep-black font-extrabold bg-white/50 px-1">What if the money we earned actually grew in purchasing power?</strong> What if we could trade freely with our neighbors without middlemen taking a cut?
                    </p>
                    <p>
                      Bitcoin is our answer. It is the anchor that holds our economic energy in place, allowing us to build generational wealth right here at home.
                    </p>
                  </div>
               </div>
            </div>
          </div>
       </Section>

       {/* VISION & MISSION */}
       <Section id="mission" background="gold">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto mb-20">
                <h3 className="text-3xl md:text-5xl font-bold text-deep-black mb-6">The Circular Vision</h3>
                <p className="text-deep-black/70 text-xl font-medium">
                  Our goal is simple: <span className="text-deep-black font-bold">A village where money stays in the community.</span> We are closing the loop to ensure prosperity is retained locally.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-[2px] bg-deep-black/10 z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 bg-white p-10 rounded-[2.5rem] shadow-xl text-center group hover:-translate-y-2 transition-transform duration-300 border border-deep-black/5">
                   <div className="w-20 h-20 mx-auto bg-deep-black rounded-[2rem] flex items-center justify-center text-prestige-gold mb-8 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-deep-black mb-4">1. Education</h4>
                   <p className="text-deep-black/60 leading-relaxed">
                     We start by teaching. Understanding <em>why</em> Bitcoin matters is more important than just having it.
                   </p>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 bg-deep-black p-10 rounded-[2.5rem] shadow-xl text-center group hover:-translate-y-2 transition-transform duration-300 border border-deep-black/5">
                   <div className="w-20 h-20 mx-auto bg-white/10 rounded-[2rem] flex items-center justify-center text-prestige-gold mb-8 group-hover:bg-prestige-gold group-hover:text-deep-black transition-colors duration-300">
                      <Zap size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-white mb-4">2. Adoption</h4>
                   <p className="text-gray-400 leading-relaxed">
                     Onboarding local merchants. When you can buy milk and hardware with sats, Bitcoin becomes real money.
                   </p>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 bg-white p-10 rounded-[2.5rem] shadow-xl text-center group hover:-translate-y-2 transition-transform duration-300 border border-deep-black/5">
                   <div className="w-20 h-20 mx-auto bg-deep-black rounded-[2rem] flex items-center justify-center text-prestige-gold mb-8 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-deep-black mb-4">3. Circulation</h4>
                   <p className="text-deep-black/60 leading-relaxed">
                     Earn in Bitcoin, Spend in Bitcoin. Closing the loop creates a self-sustaining economy.
                   </p>
                </div>
             </div>
          </div>
       </Section>

       {/* VALUES */}
       <Section id="values" background="black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Heart, title: 'Hope', desc: 'Believing in a better financial future.' },
                  { icon: Anchor, title: 'Strength', desc: 'Unshakeable money for uncertain times.' },
                  { icon: Shield, title: 'Freedom', desc: 'Sovereignty over our own labor.' },
                  { icon: Users, title: 'Community', desc: 'Growing together, never alone.' },
                ].map((val, i) => (
                  <div key={i} className="p-8 bg-charcoal rounded-[2.5rem] border border-white/5 hover:bg-white hover:text-deep-black transition-all duration-300 group">
                      <val.icon className="text-prestige-gold w-10 h-10 mb-6 group-hover:scale-110 transition-transform group-hover:text-deep-black" />
                      <h4 className="text-xl font-bold text-white group-hover:text-deep-black mb-3">{val.title}</h4>
                      <p className="text-gray-400 group-hover:text-deep-black/70 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                ))}
             </div>
          </div>
       </Section>

       {/* CTA */}
       <Section id="about-cta" background="gold" className="!py-32">
          <div className="max-w-4xl mx-auto text-center px-4">
             <h2 className="text-4xl md:text-6xl font-bold text-deep-black mb-8">Be Part of the Story</h2>
             <p className="text-deep-black/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
               The best way to understand the Bitcoin Circular Economy is to experience it.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
               {onNavigate && (
                 <>
                   <Button variant="primary" onClick={() => onNavigate('academy')}>
                      Start Learning
                   </Button>
                   <Button variant="outline" onClick={() => onNavigate('join')}>
                      Join Community
                   </Button>
                 </>
               )}
             </div>
          </div>
       </Section>
    </div>
  );
};