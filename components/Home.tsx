import React from 'react';
import { Hero } from './Hero';
import { Page } from '../types';
import { Section } from './ui/Section';
import { BookOpen, ShoppingBag, ArrowRight, Anchor, Users } from 'lucide-react';
import { Button } from './ui/Button';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      <Hero onNavigate={onNavigate} />

      {/* Concept / Explanation Section */}
      <Section id="concept" background="gold" className="border-t border-deep-black/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Anchor className="w-12 h-12 text-deep-black mx-auto mb-8 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-bold text-deep-black mb-8 leading-tight">
            What is a <span className="text-white bg-deep-black px-2 py-1 transform -skew-x-3 inline-block">Bitcoin Circular Economy?</span>
          </h2>
          <p className="text-xl md:text-2xl text-deep-black/70 leading-relaxed font-medium">
            It’s a local ecosystem where you can earn wages in Bitcoin, buy groceries with Bitcoin, and save in Bitcoin—without ever needing to convert back to fiat currency. 
            <br/><br/>
            In Mwihoko, we are closing the loop to protect our wealth and build a future that cannot be debased.
          </p>
        </div>
      </Section>

      {/* Pillars */}
      <Section id="pillars" background="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-deep-black/60 text-xs font-bold tracking-widest uppercase mb-2 block">Our Foundation</span>
                <h3 className="text-4xl font-bold text-deep-black">Our Pillars</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Education */}
                <div onClick={() => onNavigate('academy')} className="group p-8 rounded-[2rem] bg-deep-black text-prestige-gold shadow-xl hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2">
                    <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-prestige-gold mb-6 group-hover:bg-prestige-gold group-hover:text-deep-black transition-colors">
                        <BookOpen size={28} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Education</h4>
                    <p className="text-gray-400 mb-6">
                        Knowledge is the first step to sovereignty. We teach safety, self-custody, and sound money principles.
                    </p>
                    <div className="flex items-center text-prestige-gold text-sm font-bold">
                        Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                    </div>
                </div>

                {/* Adoption */}
                <div onClick={() => onNavigate('merchants')} className="group p-8 rounded-[2rem] bg-white text-deep-black shadow-xl hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2">
                    <div className="h-14 w-14 rounded-2xl bg-deep-black/5 flex items-center justify-center text-deep-black mb-6 group-hover:bg-deep-black group-hover:text-prestige-gold transition-colors">
                        <ShoppingBag size={28} />
                    </div>
                    <h4 className="text-2xl font-bold text-deep-black mb-4">Adoption</h4>
                    <p className="text-deep-black/70 mb-6">
                        Real-world usage. From buying milk to paying rent, we are onboarding local businesses every week.
                    </p>
                    <div className="flex items-center text-deep-black text-sm font-bold">
                        Find Merchants <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                    </div>
                </div>
            </div>
        </div>
      </Section>

      {/* Merchants Preview */}
      <Section id="merchants-preview" background="gold">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <span className="text-deep-black/60 text-xs font-bold tracking-widest uppercase mb-2 block">Economic Freedom</span>
                    <h3 className="text-4xl font-bold text-deep-black">Shop with Bitcoin</h3>
                </div>
                <Button variant="outline" className="mt-6 md:mt-0" onClick={() => onNavigate('merchants')}>View All Merchants</Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['The Coffee Spot', 'Mama Njuguna', 'Mwihoko Hardware', 'Tech Solutions'].map((name, i) => (
                    <div key={i} className="aspect-[4/3] rounded-2xl bg-white/30 border border-deep-black/5 flex flex-col items-center justify-center p-4 hover:bg-white/50 transition-colors shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-deep-black flex items-center justify-center text-prestige-gold font-bold mb-3">
                            {name.charAt(0)}
                        </div>
                        <span className="text-deep-black font-bold text-center">{name}</span>
                        <span className="text-xs text-deep-black/60 mt-1 font-medium">Accepts Lightning</span>
                    </div>
                ))}
            </div>
         </div>
      </Section>

      {/* Community Stories */}
      <Section id="stories" background="black">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-prestige-gold">
             <div className="text-center mb-16">
                 <h3 className="text-4xl font-bold mb-4">Community Voices</h3>
                 <p className="max-w-2xl mx-auto text-lg font-medium opacity-80 text-gray-400">
                     Hear from the people whose lives are changing through the power of sound money.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-charcoal p-8 rounded-[2rem] border border-white/5">
                    <div className="flex items-start gap-4">
                        <img src="https://picsum.photos/100/100?random=20" alt="User" className="w-16 h-16 rounded-full object-cover border-2 border-prestige-gold" />
                        <div>
                            <p className="text-xl font-bold italic mb-4 text-white">"Accepting Bitcoin has opened my shop to a global market. Transactions are instant and fees are basically zero."</p>
                            <div className="font-bold uppercase tracking-wide text-sm text-prestige-gold">- James K., Shop Owner</div>
                        </div>
                    </div>
                 </div>
                 <div className="bg-charcoal p-8 rounded-[2rem] border border-white/5">
                    <div className="flex items-start gap-4">
                        <img src="https://picsum.photos/100/100?random=21" alt="User" className="w-16 h-16 rounded-full object-cover border-2 border-prestige-gold" />
                        <div>
                            <p className="text-xl font-bold italic mb-4 text-white">"I used to worry about inflation eating my savings. Now I save in Bitcoin and I sleep peacefully."</p>
                            <div className="font-bold uppercase tracking-wide text-sm text-prestige-gold">- Mary W., Teacher</div>
                        </div>
                    </div>
                 </div>
             </div>

             <div className="mt-12 text-center">
                 <Button variant="primary" className="!bg-prestige-gold !text-deep-black hover:!bg-bitcoin-yellow" onClick={() => onNavigate('gallery')}>
                    Read More Stories
                 </Button>
             </div>
         </div>
      </Section>

      {/* Final CTA */}
      <Section id="cta" background="gold" className="py-32">
          <div className="max-w-4xl mx-auto text-center px-4">
              <Users className="w-16 h-16 text-deep-black mx-auto mb-6" />
              <h2 className="text-5xl md:text-6xl font-bold text-deep-black mb-8">Ready to Anchor Your Future?</h2>
              <p className="text-xl text-deep-black/70 mb-12 font-medium">
                  Whether you are a merchant, a builder, or just curious—there is a place for you in the Mwihoko family.
              </p>
              <Button variant="primary" className="scale-125 shadow-2xl" onClick={() => onNavigate('join')}>
                  Join the Movement
              </Button>
          </div>
      </Section>

    </div>
  );
};