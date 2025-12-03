import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Lightbulb, Code, Hammer, Users, Cpu, Zap, Coins, Rocket } from 'lucide-react';
import { Page } from '../types';

interface InnovationProps {
  onNavigate?: (page: Page) => void;
}

export const Innovation: React.FC<InnovationProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col bg-deep-black min-h-screen">
       {/* HERO */}
       <Section id="innovation-hero" background="black" className="pt-32 pb-20 relative overflow-hidden">
          {/* Abstract Tech Background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
             <div className="absolute top-10 right-10 w-64 h-64 bg-prestige-gold rounded-full blur-[100px]"></div>
             <div className="absolute bottom-10 left-10 w-64 h-64 bg-bitcoin-yellow rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
             <div className="inline-flex items-center justify-center p-4 border border-prestige-gold/30 rounded-full mb-8 backdrop-blur-sm bg-white/5 animate-fade-in-up">
               <Lightbulb className="text-prestige-gold w-6 h-6 mr-3" />
               <span className="text-prestige-gold text-sm font-bold tracking-widest uppercase">Future Ready</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
               Innovating With <span className="text-prestige-gold">Bitcoin</span>
             </h1>
             <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium">
               From code to craft, Mwihoko is a laboratory for sound money. We aren't just adopting the standard; we are building on top of it.
             </p>
          </div>
       </Section>

       {/* LOCAL BUILDERS */}
       <Section id="builders" background="black" className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                 <h2 className="text-white/60 font-bold tracking-widest uppercase text-sm mb-3">Made in Mwihoko</h2>
                 <h3 className="text-4xl font-bold text-prestige-gold">Local Builders</h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 */}
                <div className="bg-charcoal p-8 rounded-[2.5rem] border border-white/5 hover:border-prestige-gold/30 transition-all duration-300 hover:-translate-y-2 group">
                   <div className="w-16 h-16 bg-deep-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-prestige-gold group-hover:text-deep-black transition-colors text-prestige-gold">
                      <Cpu size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-white mb-2">Mwihoko Node</h4>
                   <p className="text-gray-400 mb-6 leading-relaxed">
                      A community-run Lightning node ensuring our payments are routed locally and privately.
                   </p>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-bold text-gray-300 border border-white/5">Hardware</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-bold text-gray-300 border border-white/5">Lightning</span>
                   </div>
                </div>

                {/* Project 2 */}
                <div className="bg-charcoal p-8 rounded-[2.5rem] border border-white/5 hover:border-prestige-gold/30 transition-all duration-300 hover:-translate-y-2 group">
                   <div className="w-16 h-16 bg-deep-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-prestige-gold group-hover:text-deep-black transition-colors text-prestige-gold">
                      <Code size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-white mb-2">Sats POS</h4>
                   <p className="text-gray-400 mb-6 leading-relaxed">
                      Open-source Point of Sale software customized for our local kiosks and unreliable internet.
                   </p>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-bold text-gray-300 border border-white/5">Software</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-bold text-gray-300 border border-white/5">Mobile</span>
                   </div>
                </div>

                {/* Project 3 */}
                <div className="bg-charcoal p-8 rounded-[2.5rem] border border-white/5 hover:border-prestige-gold/30 transition-all duration-300 hover:-translate-y-2 group">
                   <div className="w-16 h-16 bg-deep-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-prestige-gold group-hover:text-deep-black transition-colors text-prestige-gold">
                      <Hammer size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-white mb-2">Miner Heat</h4>
                   <p className="text-gray-400 mb-6 leading-relaxed">
                      Repurposing heat from ASIC miners to dry grain and warm homes during the cold season.
                   </p>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-bold text-gray-300 border border-white/5">Energy</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-bold text-gray-300 border border-white/5">Agriculture</span>
                   </div>
                </div>
             </div>
          </div>
       </Section>

       {/* DEVELOPER SESSIONS */}
       <Section id="dev-sessions" background="gold">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                   <div className="bg-deep-black p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[50px] group-hover:bg-prestige-gold/20 transition-colors"></div>
                      <Code className="text-white w-12 h-12 mb-8" />
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Sunday Devs</h3>
                      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                         Every Sunday, we gather to review PRs, discuss BIPs, and help new developers set up their environments.
                      </p>
                      <ul className="space-y-4 mb-10">
                         <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-prestige-gold rounded-full mr-4"></span>
                            Introduction to Script
                         </li>
                         <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-prestige-gold rounded-full mr-4"></span>
                            Lightning App Development
                         </li>
                         <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-prestige-gold rounded-full mr-4"></span>
                            Nostr Relay Setup
                         </li>
                      </ul>
                      <Button variant="primary" className="!bg-prestige-gold !text-deep-black hover:!bg-white w-full md:w-auto">
                         Join Github Org
                      </Button>
                   </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-deep-black mb-6">Code is Speech. <br/>Code is Money.</h2>
                    <p className="text-xl text-deep-black/70 mb-8 font-medium">
                       We believe the next generation of financial engineers will come from places like Mwihoko. We are teaching our youth to read and write the language of value.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/50 p-6 rounded-2xl border border-deep-black/5">
                           <div className="text-4xl font-bold text-deep-black mb-1">20+</div>
                           <div className="text-sm font-bold uppercase tracking-wider text-deep-black/60">Active Devs</div>
                        </div>
                        <div className="bg-white/50 p-6 rounded-2xl border border-deep-black/5">
                           <div className="text-4xl font-bold text-deep-black mb-1">5</div>
                           <div className="text-sm font-bold uppercase tracking-wider text-deep-black/60">Open Projects</div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
       </Section>

       {/* SAVINGS GROUPS */}
       <Section id="savings" background="black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                 <Users className="w-16 h-16 text-prestige-gold mx-auto mb-6" />
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Bitcoin Chama</h2>
                 <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                    We are upgrading the traditional "Chama" (Savings Group). Instead of saving in fiat that loses value, we save in Bitcoin using Multi-Sig technology.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                    { title: "Trustless", icon: Coins, desc: "No single treasurer holds the funds. Multi-sig wallets mean we must agree to move money." },
                    { title: "Transparent", icon: Lightbulb, desc: "Everyone can verify the balance on-chain at any time. No more missing books." },
                    { title: "Growth", icon: Rocket, desc: "Our collective savings grow in purchasing power over time, protecting the group's effort." }
                 ].map((feat, i) => (
                    <div key={i} className="bg-charcoal p-8 rounded-[2rem] border border-white/5 hover:bg-white hover:text-deep-black transition-all duration-300 group">
                       <feat.icon className="w-12 h-12 text-prestige-gold mb-6 group-hover:text-deep-black transition-colors" />
                       <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-deep-black">{feat.title}</h4>
                       <p className="text-gray-400 group-hover:text-deep-black/70 leading-relaxed">
                          {feat.desc}
                       </p>
                    </div>
                 ))}
             </div>
          </div>
       </Section>

       {/* YOUTH & NEW PRODUCTS */}
       <Section id="youth-products" background="black" className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 
                 {/* Youth Earning */}
                 <div className="bg-gradient-to-br from-charcoal to-deep-black p-10 rounded-[3rem] border border-white/10 shadow-xl">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-bitcoin-yellow rounded-full text-deep-black">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Youth Tasks</h3>
                    </div>
                    <p className="text-gray-400 mb-8 text-lg">
                       Young people in Mwihoko are earning their first satoshis by completing tasks for the community.
                    </p>
                    <ul className="space-y-4 mb-8">
                       <li className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5">
                          <span className="text-white font-medium">Clean Market Stall</span>
                          <span className="text-bitcoin-yellow font-bold">2,000 sats</span>
                       </li>
                       <li className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5">
                          <span className="text-white font-medium">Deliver Water</span>
                          <span className="text-bitcoin-yellow font-bold">1,500 sats</span>
                       </li>
                       <li className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5">
                          <span className="text-white font-medium">Teach a Grandma Lightning</span>
                          <span className="text-bitcoin-yellow font-bold">5,000 sats</span>
                       </li>
                    </ul>
                 </div>

                 {/* New Products */}
                 <div className="bg-prestige-gold p-10 rounded-[3rem] shadow-xl text-deep-black">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-deep-black rounded-full text-prestige-gold">
                            <Rocket size={24} />
                        </div>
                        <h3 className="text-3xl font-bold">Innovation Lab</h3>
                    </div>
                    <p className="text-deep-black/80 mb-8 text-lg font-medium">
                       We are incubating new business ideas that leverage the lightning network.
                    </p>
                    <div className="space-y-4">
                       <div className="bg-white/40 p-6 rounded-2xl hover:bg-white transition-colors cursor-pointer">
                          <h4 className="font-bold text-xl mb-1">Bit-Boda</h4>
                          <p className="text-sm opacity-70">Ride-sharing service payable instantly via Lightning.</p>
                       </div>
                       <div className="bg-white/40 p-6 rounded-2xl hover:bg-white transition-colors cursor-pointer">
                          <h4 className="font-bold text-xl mb-1">Solar Mining Box</h4>
                          <p className="text-sm opacity-70">Off-grid mining units for rural electrification.</p>
                       </div>
                    </div>
                 </div>

             </div>
          </div>
       </Section>

       {/* CTA */}
       <Section id="build-cta" background="black" className="py-32">
          <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Build With Us</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                  Have an idea? Want to contribute code or skills? The Mwihoko Innovation Hub is open to everyone.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Button variant="primary" className="!bg-prestige-gold !text-deep-black hover:!bg-white" onClick={() => onNavigate && onNavigate('join')}>
                    Join the Lab
                 </Button>
                 <Button variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-deep-black" onClick={() => window.open('https://github.com', '_blank')}>
                    View GitHub
                 </Button>
              </div>
          </div>
       </Section>
    </div>
  );
};