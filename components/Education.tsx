import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { BookOpen, Zap, Users, Smartphone, GraduationCap, ArrowRight, Lock, Store, PlayCircle } from 'lucide-react';
import { Page } from '../types';

interface EducationProps {
  onNavigate?: (page: Page) => void;
  onStartCourse?: (courseId: string) => void;
}

export const Education: React.FC<EducationProps> = ({ onNavigate, onStartCourse }) => {
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
                   <Button variant="outline" fullWidth onClick={() => onStartCourse && onStartCourse('beginner')}>
                       <PlayCircle size={18} className="mr-2" /> Start Course
                   </Button>
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
                   <Button variant="primary" fullWidth className="!bg-prestige-gold !text-deep-black hover:!bg-white" onClick={() => onStartCourse && onStartCourse('intermediate')}>
                      <PlayCircle size={18} className="mr-2" /> Start Course
                   </Button>
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
                   <Button variant="outline" fullWidth onClick={() => onStartCourse && onStartCourse('advanced')}>
                       <PlayCircle size={18} className="mr-2" /> Start Course
                   </Button>
                </div>
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