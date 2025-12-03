import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { BookOpen, Zap, Users, Smartphone, GraduationCap, ArrowRight, Lock, Store } from 'lucide-react';
import { Page } from '../types';

interface EducationProps {
  onNavigate?: (page: Page) => void;
}

export const Education: React.FC<EducationProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
       {/* HERO */}
       <Section id="edu-hero" background="gold" className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center px-4">
             <div className="inline-flex items-center justify-center p-4 bg-deep-black rounded-full mb-8 shadow-2xl animate-fade-in-up">
               <GraduationCap className="text-prestige-gold w-8 h-8" />
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-deep-black mb-8 leading-tight">
               Bitcoin Education <br/> for <span className="text-white bg-deep-black px-4 transform -skew-x-6 inline-block">Everyone</span>
             </h1>
             <p className="text-xl md:text-2xl text-deep-black/70 leading-relaxed max-w-2xl mx-auto font-medium">
               Knowledge is the ultimate currency. We provide the tools and understanding you need to secure your financial future right here in Mwihoko.
             </p>
          </div>
       </Section>

       {/* BITCOIN BASICS */}
       <Section id="basics" background="light">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <h2 className="text-4xl font-bold text-deep-black">Why Bitcoin Matters</h2>
                 <p className="text-lg text-deep-black/80 font-medium leading-relaxed">
                   For centuries, money has been controlled by the few. Bitcoin changes that. It is money without masters—open, neutral, and borderless.
                 </p>
                 <ul className="space-y-4">
                    {[
                      { title: "Hard Money", desc: "Fixed supply of 21 million. No inflation. No printing." },
                      { title: "Censorship Resistant", desc: "No one can stop your transactions or freeze your funds." },
                      { title: "Self Custody", desc: "You are your own bank. You hold the keys." }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 transition-colors">
                         <div className="mt-1 w-6 h-6 rounded-full bg-deep-black flex items-center justify-center text-prestige-gold font-bold text-xs shrink-0">✓</div>
                         <div>
                            <h4 className="font-bold text-deep-black text-lg">{item.title}</h4>
                            <p className="text-deep-black/60 text-sm font-medium">{item.desc}</p>
                         </div>
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="relative order-first lg:order-last">
                 <div className="aspect-square bg-deep-black rounded-[3rem] p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
                    <BookOpen size={200} className="text-white/5 absolute -right-10 -bottom-10" />
                    <div className="text-center relative z-10">
                       <p className="text-prestige-gold font-serif text-3xl md:text-4xl italic mb-4 leading-relaxed">"Fix the money, <br/> fix the world."</p>
                    </div>
                 </div>
              </div>
           </div>
         </div>
       </Section>

       {/* LIGHTNING */}
       <Section id="lightning" background="black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <Zap className="w-16 h-16 text-prestige-gold mx-auto mb-6 animate-pulse" />
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Lightning Network</h2>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16 font-medium">
               Bitcoin isn't just for saving. With Lightning, it's for buying coffee, paying bills, and sending money instantly for near-zero fees.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Smartphone, title: "Instant", desc: "Settles in milliseconds. Faster than swiping a card." },
                  { icon: Store, title: "Micropayments", desc: "Send as little as 1 satoshi. Perfect for small tips." },
                  { icon: Lock, title: "Private", desc: "Secure and onion-routed. Your privacy matters." }
                ].map((feat, i) => (
                  <div key={i} className="bg-charcoal p-8 rounded-[2rem] border border-white/5 hover:bg-white hover:text-deep-black transition-all duration-300 group hover:-translate-y-2">
                     <feat.icon className="w-10 h-10 text-prestige-gold mb-4 group-hover:text-deep-black transition-colors" />
                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-deep-black">{feat.title}</h3>
                     <p className="text-gray-400 text-sm group-hover:text-deep-black/70">{feat.desc}</p>
                  </div>
                ))}
             </div>
          </div>
       </Section>

       {/* COURSES */}
       <Section id="courses" background="gold">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-deep-black/60 font-bold tracking-widest uppercase text-sm mb-3">Curriculum</h2>
                <h3 className="text-4xl font-bold text-deep-black">Choose Your Path</h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Beginner */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-deep-black/5 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                   <div className="bg-bitcoin-yellow w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                      <span className="text-2xl font-bold text-deep-black">1</span>
                   </div>
                   <h3 className="text-2xl font-bold text-deep-black mb-2">The Rabbit Hole</h3>
                   <span className="text-xs font-bold uppercase tracking-wider text-deep-black/50 mb-6">Beginner</span>
                   <ul className="space-y-3 mb-8 flex-grow">
                      <li className="flex items-center text-deep-black/80 text-sm font-medium"><ArrowRight size={12} className="mr-2"/> What is Money?</li>
                      <li className="flex items-center text-deep-black/80 text-sm font-medium"><ArrowRight size={12} className="mr-2"/> Fiat vs. Bitcoin</li>
                      <li className="flex items-center text-deep-black/80 text-sm font-medium"><ArrowRight size={12} className="mr-2"/> Installing a Wallet</li>
                   </ul>
                   <Button variant="outline" fullWidth>Start Here</Button>
                </div>

                {/* Intermediate */}
                <div className="bg-deep-black p-8 rounded-[2.5rem] shadow-2xl border border-deep-black/5 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden transform md:scale-105 z-10">
                   <div className="absolute top-0 right-0 bg-prestige-gold text-deep-black text-xs font-bold px-4 py-2 rounded-bl-2xl">POPULAR</div>
                   <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      <span className="text-2xl font-bold text-white">2</span>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Sovereignty</h3>
                   <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">Intermediate</span>
                   <ul className="space-y-3 mb-8 flex-grow">
                      <li className="flex items-center text-gray-300 text-sm font-medium"><ArrowRight size={12} className="mr-2 text-prestige-gold"/> Buying Non-KYC</li>
                      <li className="flex items-center text-gray-300 text-sm font-medium"><ArrowRight size={12} className="mr-2 text-prestige-gold"/> Hardware Wallets</li>
                      <li className="flex items-center text-gray-300 text-sm font-medium"><ArrowRight size={12} className="mr-2 text-prestige-gold"/> Seed Phrase Security</li>
                   </ul>
                   <Button variant="primary" fullWidth className="!bg-prestige-gold !text-deep-black hover:!bg-white">Join Class</Button>
                </div>

                 {/* Advanced */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-deep-black/5 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                   <div className="bg-bitcoin-yellow w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                      <span className="text-2xl font-bold text-deep-black">3</span>
                   </div>
                   <h3 className="text-2xl font-bold text-deep-black mb-2">Builder</h3>
                   <span className="text-xs font-bold uppercase tracking-wider text-deep-black/50 mb-6">Advanced</span>
                   <ul className="space-y-3 mb-8 flex-grow">
                      <li className="flex items-center text-deep-black/80 text-sm font-medium"><ArrowRight size={12} className="mr-2"/> Running a Node</li>
                      <li className="flex items-center text-deep-black/80 text-sm font-medium"><ArrowRight size={12} className="mr-2"/> Lightning Channels</li>
                      <li className="flex items-center text-deep-black/80 text-sm font-medium"><ArrowRight size={12} className="mr-2"/> Mining at Home</li>
                   </ul>
                   <Button variant="outline" fullWidth>Go Deep</Button>
                </div>
             </div>
          </div>
       </Section>

       {/* WORKSHOPS */}
       <Section id="workshops" background="light">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                   <div>
                       <h3 className="text-4xl font-bold text-deep-black">Community Workshops</h3>
                       <p className="text-deep-black/60 mt-2 font-medium">Education happens best when we gather.</p>
                   </div>
                   <Button variant="primary" className="mt-4 md:mt-0" onClick={() => onNavigate && onNavigate('events')}>See Schedule</Button>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {[
                       { title: "Youth Coding", icon: GraduationCap, desc: "Teaching the next generation about SHA-256 and sovereignty." },
                       { title: "Merchant Training", icon: Store, desc: "Helping shop owners accept Bitcoin and manage cash flow." },
                       { title: "Church & Family", icon: Users, desc: "Discussing the ethics of money and protecting family wealth." }
                   ].map((ws, i) => (
                       <div key={i} className="bg-white/40 p-8 rounded-[2rem] border border-deep-black/5 hover:bg-white transition-colors duration-300">
                           <ws.icon className="w-10 h-10 text-deep-black mb-4" />
                           <h4 className="text-xl font-bold text-deep-black mb-2">{ws.title}</h4>
                           <p className="text-deep-black/70 text-sm font-medium leading-relaxed">{ws.desc}</p>
                       </div>
                   ))}
               </div>
           </div>
       </Section>
       
       {/* TOOLKIT */}
        <Section id="toolkit" background="black">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold text-white mb-8">Mwihoko Toolkit</h3>
                <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                    Recommended tools for starting your journey. We only recommend open-source, non-custodial solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    {['Phoenix Wallet', 'Breez', 'Sparrow Wallet', 'Mempool.space', 'Bitcoin Whitepaper', 'Jameson Lopp'].map((tool, i) => (
                        <a key={i} href="#" className="bg-charcoal hover:bg-prestige-gold hover:text-deep-black text-gray-300 px-6 py-3 rounded-full border border-white/10 transition-colors font-medium flex items-center gap-2 group">
                           {i >= 4 ? <BookOpen size={16} className="group-hover:scale-110"/> : <Smartphone size={16} className="group-hover:scale-110"/>}
                           {tool}
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    </div>
  );
};