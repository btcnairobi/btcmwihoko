import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting Bitcoin Mwihoko.");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <Section id="join" background="gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h2 className="text-deep-black/70 font-bold tracking-widest uppercase text-sm mb-3">Join Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-deep-black">Drop Your Anchor</h3>
        </div>

        <div className="bg-deep-black rounded-[3rem] p-8 md:p-16 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">Become Family.</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              We are here to listen and grow together. Reach out to become part of our fortress of hope.
            </p>

            <div className="space-y-8">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-charcoal flex items-center justify-center text-prestige-gold mr-6">
                   <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Visit Us</h4>
                  <p className="text-gray-400">Mwihoko, Kenya</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-charcoal flex items-center justify-center text-prestige-gold mr-6">
                   <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-gray-400">connect@btcmwihoko.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-charcoal/50 p-8 rounded-[2rem] border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-deep-black border border-gray-700 rounded-full px-6 py-4 text-white focus:outline-none focus:border-prestige-gold transition-colors placeholder-gray-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-deep-black border border-gray-700 rounded-full px-6 py-4 text-white focus:outline-none focus:border-prestige-gold transition-colors placeholder-gray-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-deep-black border border-gray-700 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-prestige-gold transition-colors placeholder-gray-500"
                  placeholder="How can we help?"
                  required
                ></textarea>
              </div>
              <Button type="submit" fullWidth variant="secondary" className="!bg-prestige-gold !text-deep-black hover:!bg-white">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </Section>
  );
};