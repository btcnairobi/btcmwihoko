import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Mail, MapPin, Phone, Twitter, Instagram, Facebook, Anchor } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting Bitcoin Mwihoko.");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col bg-deep-black min-h-screen">
      {/* Hero Section */}
      <Section id="contact-hero" background="black" className="pt-32 pb-10">
         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                <Anchor size={400} className="text-prestige-gold rotate-12" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-prestige-gold mb-6">
               Contact <span className="text-white">BTC Mwihoko</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
               Questions? Ideas? Want to start accepting Bitcoin? <br/>
               We are here to help build the circular economy with you.
            </p>
         </div>
      </Section>

      {/* Main Content: Info & Form */}
      <Section id="contact-content" background="black" className="py-20 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               
               {/* Contact Information */}
               <div>
                  <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
                  <div className="space-y-8">
                     <div className="flex items-start">
                        <div className="w-12 h-12 rounded-2xl bg-charcoal flex items-center justify-center text-prestige-gold shrink-0 border border-white/10">
                           <MapPin size={24} />
                        </div>
                        <div className="ml-6">
                           <h4 className="text-xl font-bold text-white mb-1">Location</h4>
                           <p className="text-gray-400">Mwihoko Village, Kiambu County<br/>Kenya</p>
                        </div>
                     </div>
                     
                     <div className="flex items-start">
                        <div className="w-12 h-12 rounded-2xl bg-charcoal flex items-center justify-center text-prestige-gold shrink-0 border border-white/10">
                           <Mail size={24} />
                        </div>
                        <div className="ml-6">
                           <h4 className="text-xl font-bold text-white mb-1">Email</h4>
                           <a href="mailto:connect@btcmwihoko.com" className="text-gray-400 hover:text-prestige-gold transition-colors">connect@btcmwihoko.com</a>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <div className="w-12 h-12 rounded-2xl bg-charcoal flex items-center justify-center text-prestige-gold shrink-0 border border-white/10">
                           <Phone size={24} />
                        </div>
                        <div className="ml-6">
                           <h4 className="text-xl font-bold text-white mb-1">Phone</h4>
                           <p className="text-gray-400">+254 700 000 000</p>
                        </div>
                     </div>
                  </div>

                  <div className="mt-12">
                     <h4 className="text-lg font-bold text-white mb-6">Follow Us</h4>
                     <div className="flex gap-4">
                        {[Twitter, Instagram, Facebook].map((Icon, i) => (
                           <a key={i} href="#" className="w-12 h-12 rounded-full bg-charcoal border border-white/10 flex items-center justify-center text-gray-400 hover:bg-prestige-gold hover:text-deep-black transition-all hover:-translate-y-1">
                              <Icon size={20} />
                           </a>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Contact Form */}
               <div className="bg-charcoal p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div>
                        <label className="block text-sm font-bold text-prestige-gold uppercase tracking-wider mb-2">Name</label>
                        <input
                          type="text"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          className="w-full bg-deep-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-prestige-gold focus:ring-1 focus:ring-prestige-gold transition-all placeholder-gray-600"
                          placeholder="John Doe"
                          required
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-prestige-gold uppercase tracking-wider mb-2">Email</label>
                        <input
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          className="w-full bg-deep-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-prestige-gold focus:ring-1 focus:ring-prestige-gold transition-all placeholder-gray-600"
                          placeholder="john@example.com"
                          required
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-prestige-gold uppercase tracking-wider mb-2">Message</label>
                        <textarea
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({...formState, message: e.target.value})}
                          className="w-full bg-deep-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-prestige-gold focus:ring-1 focus:ring-prestige-gold transition-all placeholder-gray-600 resize-none"
                          placeholder="How can we help you?"
                          required
                        ></textarea>
                     </div>
                     <Button type="submit" fullWidth variant="primary" className="!bg-prestige-gold !text-deep-black hover:!bg-white mt-4">
                        Send Message
                     </Button>
                  </form>
               </div>

            </div>
         </div>
      </Section>
    </div>
  );
};