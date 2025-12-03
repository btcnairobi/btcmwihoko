import React from 'react';
import { Hero } from './Hero';
import { Page } from '../types';
import { Section } from './ui/Section';
import { BookOpen, ShoppingBag, Lightbulb, ArrowRight, Anchor, Star, Users } from 'lucide-react';
import { Button } from './ui/Button';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      <Hero onNavigate={onNavigate} />

      {/* Concept / Explanation Section */}
      <Section id="concept" background="black" className="border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Anchor className="w-12 h-12 text-prestige-gold mx-auto mb-8 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            What is a <span className="text-prestige-gold">Bitcoin Circular Economy?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            It’s a local ecosystem where you can earn wages in Bitcoin, buy groceries with Bitcoin, and save in Bitcoin—without ever needing to convert back to fiat currency. 
            <br/><br/>
            In Mwihoko, we are closing the loop to protect our wealth and build a future that cannot be debased.
          </p>
        </div>
      </Section>

      {/* Three Pillars */}
      <Section id="pillars" background="black" className="bg-charcoal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-prestige-gold text-xs font-bold tracking-widest uppercase mb-2 block">Our Foundation</span>
                <h3 className="text-4xl font-bold text-white">The Three Pillars</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Education */}
                <div onClick={() => onNavigate('academy')} className="group p-8 rounded-[2rem] bg-deep-black border border-white/5 hover:border-prestige-gold/30 transition-all cursor-pointer hover:-translate-y-2">
                    <div className="h-14 w-14 rounded-2xl bg-charcoal flex items-center justify-center text-prestige-gold mb-6 group-hover:bg-prestige-gold group-hover:text-deep-black transition-colors">
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
                <div onClick={() => onNavigate('merchants')} className="group p-8 rounded-[2rem] bg-deep-black border border-white/5 hover:border-prestige-gold/30 transition-all cursor-pointer hover:-translate-y-2">
                    <div className="h-14 w-14 rounded-2xl bg-charcoal flex items-center justify-center text-prestige-gold mb-6 group-hover:bg-prestige-gold group-hover:text-deep-black transition-colors">
                        <ShoppingBag size={28} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Adoption</h4>
                    <p className="text-gray-400 mb-6">
                        Real-world usage. From buying milk to paying rent, we are onboarding local businesses every week.
                    </p>
                    <div className="flex items-center text-prestige-gold text-sm font-bold">
                        Find Merchants <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                    </div>
                </div>

                {/* Innovation */}
                <div onClick={() => onNavigate('builders')} className="group p-8 rounded-[2rem] bg-deep-black border border-white/5 hover:border-prestige-gold/30 transition-all cursor-pointer hover:-translate-y-2">
                    <div className="h-14 w-14 rounded-2xl bg-charcoal flex items-center justify-center text-prestige-gold mb-6 group-hover:bg-prestige-gold group-hover:text-deep-black transition-colors">
                        <Lightbulb size={28} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Innovation</h4>
                    <p className="text-gray-400 mb-6">
                        Building the tools we need. Mining, nodes, and open-source software to secure the network.
                    </p>
                    <div className="flex items-center text-prestige-gold text-sm font-bold">
                        See Builders <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                    </div>
                </div>
            </div>
        </div>
      </Section>

      {/* Merchants Preview */}
      <Section id="merchants-preview" background="black">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <span className="text-bitcoin-yellow text-xs font-bold tracking-widest uppercase mb-2 block">Economic Freedom</span>
                    <h3 className="text-4xl font-bold text-white">Shop with Bitcoin</h3>
                </div>
                <Button variant="outline" className="mt-6 md:mt-0" onClick={() => onNavigate('merchants')}>View All Merchants</Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['The Coffee Spot', 'Mama Njuguna', 'Mwihoko Hardware', 'Tech Solutions'].map((name, i) => (
                    <div key={i} className="aspect-[4/3] rounded-2xl bg-charcoal border border-white/5 flex flex-col items-center justify-center p-4 hover:bg-charcoal/80 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-deep-black flex items-center justify-center text-white font-bold mb-3 border border-prestige-gold/20">
                            {name.charAt(0)}
                        </div>
                        <span className="text-white font-bold text-center">{name}</span>
                        <span className="text-xs text-bitcoin-yellow mt-1">Accepts Lightning</span>
                    </div>
                ))}
            </div>
         </div>
      </Section>

      {/* Community Stories */}
      <Section id="stories" background="gold" className="!bg-prestige-gold">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-deep-black">
             <div className="text-center mb-16">
                 <h3 className="text-4xl font-bold mb-4">Community Voices</h3>
                 <p className="max-w-2xl mx-auto text-lg font-medium opacity-80">
                     Hear from the people whose lives are changing through the power of sound money.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-deep-black/10">
                    <div className="flex items-start gap-4">
                        <img src="https://picsum.photos/100/100?random=20" alt="User" className="w-16 h-16 rounded-full object-cover border-2 border-deep-black" />
                        <div>
                            <p className="text-xl font-bold italic mb-4">"Accepting Bitcoin has opened my shop to a global market. Transactions are instant and fees are basically zero."</p>
                            <div className="font-bold uppercase tracking-wide text-sm">- James K., Shop Owner</div>
                        </div>
                    </div>
                 </div>
                 <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-deep-black/10">
                    <div className="flex items-start gap-4">
                        <img src="https://picsum.photos/100/100?random=21" alt="User" className="w-16 h-16 rounded-full object-cover border-2 border-deep-black" />
                        <div>
                            <p className="text-xl font-bold italic mb-4">"I used to worry about inflation eating my savings. Now I save in Bitcoin and I sleep peacefully."</p>
                            <div className="font-bold uppercase tracking-wide text-sm">- Mary W., Teacher</div>
                        </div>
                    </div>
                 </div>
             </div>

             <div className="mt-12 text-center">
                 <Button variant="primary" className="!bg-deep-black !text-prestige-gold hover:!bg-charcoal" onClick={() => onNavigate('gallery')}>
                    Read More Stories
                 </Button>
             </div>
         </div>
      </Section>

      {/* Final CTA */}
      <Section id="cta" background="black" className="py-32">
          <div className="max-w-4xl mx-auto text-center px-4">
              <Users className="w-16 h-16 text-prestige-gold mx-auto mb-6" />
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Anchor Your Future?</h2>
              <p className="text-xl text-gray-400 mb-12">
                  Whether you are a merchant, a builder, or just curious—there is a place for you in the Mwihoko family.
              </p>
              <Button variant="primary" className="scale-125" onClick={() => onNavigate('join')}>
                  Join the Movement
              </Button>
          </div>
      </Section>

    </div>
  );
};