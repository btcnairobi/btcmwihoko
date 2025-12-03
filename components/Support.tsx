import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Heart, BookOpen, Store, Zap, Copy, Check, Anchor, Smartphone, Bitcoin, Briefcase } from 'lucide-react';

export const Support: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const BTC_ADDRESS = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";
  const LN_ADDRESS = "donate@btcmwihoko.com";
  const MPESA_NUMBER = "522522 (Account: Donate)";

  return (
    <div className="flex flex-col">
       {/* HERO */}
       <Section id="support-hero" background="gold" className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
             <div className="inline-flex items-center justify-center p-4 bg-deep-black rounded-full mb-8 shadow-2xl animate-fade-in-up">
               <Heart className="text-prestige-gold w-8 h-8" fill="currentColor" />
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-deep-black mb-8 leading-tight">
               Support the <br/> <span className="text-white bg-deep-black px-4 transform -skew-x-6 inline-block">Circular Economy</span>
             </h1>
             <p className="text-xl md:text-2xl text-deep-black/70 leading-relaxed max-w-2xl mx-auto font-medium">
               Your contribution fuels education, merchant adoption, and youth employment in Mwihoko. Help us build a sovereign future.
             </p>
          </div>
       </Section>

       {/* IMPACT */}
       <Section id="impact" background="light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                 <h2 className="text-deep-black/60 font-bold tracking-widest uppercase text-sm mb-3">Where Funds Go</h2>
                 <h3 className="text-4xl font-bold text-deep-black">Direct Community Impact</h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                   { title: "Education", icon: BookOpen, desc: "Printing educational materials, hosting workshops, and providing resources for schools." },
                   { title: "Onboarding", icon: Store, desc: "Providing 'Orange Pill' kits for merchants, signage, and technical support for POS setups." },
                   { title: "Youth Jobs", icon: Briefcase, desc: "Paying young people in sats to perform community tasks, clean-ups, and training." }
                ].map((item, i) => (
                   <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-deep-black/5 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
                      <div className="w-16 h-16 bg-deep-black rounded-2xl flex items-center justify-center text-prestige-gold mb-6 shadow-lg">
                         <item.icon size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-deep-black mb-3">{item.title}</h4>
                      <p className="text-deep-black/70 font-medium leading-relaxed">{item.desc}</p>
                   </div>
                ))}
             </div>
          </div>
       </Section>

       {/* DONATION SECTION */}
       <Section id="donate" background="black" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* BITCOIN & LIGHTNING */}
                <div className="bg-charcoal p-8 md:p-10 rounded-[3rem] border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-bitcoin-yellow rounded-full text-deep-black">
                            <Bitcoin size={28} />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Bitcoin & Lightning</h3>
                    </div>

                    {/* QR Code Placeholder */}
                    <div className="bg-white p-4 rounded-3xl w-48 h-48 mx-auto mb-8 flex items-center justify-center">
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${BTC_ADDRESS}`} alt="Bitcoin QR" className="w-full h-full mix-blend-multiply opacity-90" />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Lightning Address</label>
                            <div className="flex items-center bg-deep-black rounded-xl p-4 border border-white/5">
                                <Zap size={20} className="text-bitcoin-yellow mr-3 shrink-0" />
                                <span className="text-white font-mono text-sm truncate flex-grow">{LN_ADDRESS}</span>
                                <button onClick={() => handleCopy(LN_ADDRESS, 'ln')} className="p-2 hover:text-prestige-gold text-gray-400 transition-colors">
                                    {copied === 'ln' ? <Check size={20} className="text-green-500"/> : <Copy size={20} />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">On-Chain Address</label>
                            <div className="flex items-center bg-deep-black rounded-xl p-4 border border-white/5">
                                <Bitcoin size={20} className="text-prestige-gold mr-3 shrink-0" />
                                <span className="text-white font-mono text-xs md:text-sm truncate flex-grow">{BTC_ADDRESS}</span>
                                <button onClick={() => handleCopy(BTC_ADDRESS, 'btc')} className="p-2 hover:text-prestige-gold text-gray-400 transition-colors">
                                    {copied === 'btc' ? <Check size={20} className="text-green-500"/> : <Copy size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MPESA & INFO */}
                <div className="flex flex-col justify-center">
                    <div className="bg-prestige-gold p-8 md:p-10 rounded-[3rem] shadow-xl text-deep-black mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-deep-black rounded-full text-prestige-gold">
                                <Smartphone size={28} />
                            </div>
                            <h3 className="text-2xl font-bold">Local Support (MPESA)</h3>
                        </div>
                        <p className="font-medium mb-6 text-deep-black/80">
                            For local supporters who want to chip in using mobile money. All fiat is converted to Bitcoin weekly.
                        </p>
                        <div className="bg-white/20 p-6 rounded-2xl border border-deep-black/5 flex items-center justify-between">
                            <span className="font-bold text-xl">{MPESA_NUMBER}</span>
                            <button onClick={() => handleCopy(MPESA_NUMBER, 'mpesa')} className="p-2 hover:scale-110 transition-transform bg-deep-black text-prestige-gold rounded-full">
                                {copied === 'mpesa' ? <Check size={16}/> : <Copy size={16} />}
                            </button>
                        </div>
                    </div>

                    <div className="bg-charcoal p-8 rounded-[3rem] border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-4">Why it matters</h3>
                        <p className="text-gray-400 leading-relaxed font-medium">
                            Mwihoko is a proof-of-concept. By supporting us, you are not just helping one village; you are proving that a circular Bitcoin economy is possible, sustainable, and scalable anywhere in the world.
                        </p>
                    </div>
                </div>

             </div>
          </div>
       </Section>

       {/* THANK YOU */}
       <Section id="thanks" background="gold" className="py-32">
          <div className="max-w-4xl mx-auto text-center px-4">
             <Anchor className="w-24 h-24 text-deep-black mx-auto mb-8 opacity-20" />
             <h2 className="text-4xl md:text-6xl font-bold text-deep-black mb-8">Thank You for Anchoring Us</h2>
             <p className="text-xl text-deep-black/70 font-medium">
                 Your support strengthens the chain.
             </p>
          </div>
       </Section>
    </div>
  );
};