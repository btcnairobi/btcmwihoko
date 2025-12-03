import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ShoppingBag, MapPin, ArrowRight, Star, Heart, Store, Anchor, Zap } from 'lucide-react';
import { Page } from '../types';

// Merchant Data
const MERCHANTS = [
    { id: 1, name: "The Coffee Spot", category: "Food & Drink", location: "Station Road", rating: 4.8, image: "https://picsum.photos/400/300?random=102", description: "Best brew in town. 10% off for Lightning payments." },
    { id: 2, name: "Mama Njuguna's", category: "Groceries", location: "Main Market", rating: 4.9, image: "https://picsum.photos/400/300?random=101", description: "Fresh vegetables and fruits direct from the farm." },
    { id: 3, name: "Mwihoko Hardware", category: "Services", location: "Industrial Area", rating: 4.7, image: "https://picsum.photos/400/300?random=103", description: "Building materials and tools." },
    { id: 4, name: "Tech Solutions", category: "Electronics", location: "Plaza 1", rating: 5.0, image: "https://picsum.photos/400/300?random=104", description: "Phone repairs and accessories." },
    { id: 5, name: "City Barber", category: "Beauty", location: "Central", rating: 4.6, image: "https://picsum.photos/400/300?random=105", description: "Look sharp, pay smart." },
    { id: 6, name: "Green Leaf Chemist", category: "Health", location: "West Wing", rating: 4.9, image: "https://picsum.photos/400/300?random=106", description: "Medicine and wellness products." },
];

interface MerchantsProps {
  onNavigate?: (page: Page) => void;
}

export const Merchants: React.FC<MerchantsProps> = ({ onNavigate }) => {
    const [filter, setFilter] = useState('All');

    const filteredMerchants = filter === 'All' 
        ? MERCHANTS 
        : MERCHANTS.filter(m => m.category === filter);

    return (
        <div className="flex flex-col bg-deep-black min-h-screen">
            {/* HERO */}
            <Section id="spend-hero" background="black" className="pt-32 pb-20 relative overflow-hidden">
                {/* Background Anchor Watermark */}
                <div className="absolute right-[-10%] top-[20%] opacity-[0.05] pointer-events-none">
                    <Anchor size={600} className="text-prestige-gold rotate-12" strokeWidth={0.5} />
                </div>
                
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-3 border border-prestige-gold/30 rounded-full mb-8 backdrop-blur-sm bg-white/5 animate-fade-in-up">
                        <ShoppingBag className="text-prestige-gold w-6 h-6 mr-3" />
                        <span className="text-prestige-gold text-sm font-bold tracking-widest uppercase">Circular Economy</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-prestige-gold mb-6 leading-tight">
                        Spend Bitcoin <br/> in <span className="text-white">Mwihoko</span>
                    </h1>
                    
                    <p className="text-xl text-white max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                        Support local businesses that believe in sound money. 
                        Every satoshi spent here stays here, building a stronger community for all of us.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="primary" className="!bg-prestige-gold !text-deep-black hover:!bg-white" onClick={() => document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth'})}>
                            Find Places
                        </Button>
                        <Button variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-deep-black" onClick={() => onNavigate && onNavigate('join')}>
                           List My Business
                        </Button>
                    </div>
                </div>
            </Section>

            {/* DIRECTORY */}
            <Section id="directory" background="black" className="py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-white/60 font-bold tracking-widest uppercase text-sm mb-2">The Directory</h2>
                            <h3 className="text-4xl font-bold text-prestige-gold">Verified Merchants</h3>
                        </div>
                        
                        {/* Filters */}
                        <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            {['All', 'Food & Drink', 'Groceries', 'Services', 'Electronics', 'Health'].map((cat) => (
                                <button 
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                                        filter === cat 
                                        ? 'bg-prestige-gold text-deep-black' 
                                        : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredMerchants.map((merchant) => (
                            <div key={merchant.id} className="group bg-charcoal rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-prestige-gold/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
                                <div className="h-56 relative overflow-hidden">
                                    <img src={merchant.image} alt={merchant.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" />
                                    <div className="absolute top-4 right-4 bg-deep-black/80 backdrop-blur text-prestige-gold text-xs font-bold px-3 py-1 rounded-full flex items-center">
                                        <Star size={12} className="fill-current mr-1"/> {merchant.rating}
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-prestige-gold text-deep-black text-xs font-bold px-3 py-1 rounded-full">
                                        {merchant.category}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-2xl font-bold text-prestige-gold mb-2">{merchant.name}</h4>
                                    <div className="flex items-center text-gray-400 text-sm mb-4">
                                        <MapPin size={16} className="text-prestige-gold mr-2" />
                                        {merchant.location}
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                                        {merchant.description}
                                    </p>
                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <span className="text-bitcoin-yellow text-xs font-bold uppercase tracking-wider flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-bitcoin-yellow mr-2 animate-pulse"></span>
                                            Lightning Accepted
                                        </span>
                                        <button className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-prestige-gold hover:text-deep-black transition-colors">
                                            <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* MAP SECTION PLACEHOLDER */}
            <Section id="map" background="black" className="py-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-charcoal rounded-[3rem] border border-white/5 p-4 md:p-8 relative overflow-hidden">
                         <div className="absolute inset-0 bg-[url('https://picsum.photos/1200/600?grayscale&blur=2')] bg-cover opacity-20"></div>
                         <div className="relative z-10 text-center py-20">
                             <MapPin size={64} className="text-prestige-gold mx-auto mb-6" />
                             <h3 className="text-3xl font-bold text-white mb-4">Explore the Village</h3>
                             <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                                 Mwihoko is dense with Bitcoin-friendly spots. Check our interactive map to find the nearest merchant.
                             </p>
                             <Button variant="outline" className="!border-prestige-gold !text-prestige-gold hover:!bg-prestige-gold hover:!text-deep-black">
                                 Open Live Map
                             </Button>
                         </div>
                    </div>
                </div>
            </Section>

            {/* BENEFITS */}
            <Section id="benefits" background="black" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-prestige-gold mb-8">Why Spend Locally?</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-prestige-gold flex items-center justify-center text-deep-black shrink-0 font-bold text-xl">1</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Keep Value at Home</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            When you pay with Bitcoin, the value stays within our community loop, enriching your neighbors instead of foreign banks.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-prestige-gold shrink-0 font-bold text-xl">2</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Instant & Free</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Lightning transactions settle instantly with near-zero fees. No waiting, no 3% cut for the middleman.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-prestige-gold shrink-0 font-bold text-xl">3</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Privacy Preserved</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Your spending habits are your business. Cash-like privacy for the digital age.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-charcoal p-8 flex items-center justify-center relative">
                                <Anchor size={200} strokeWidth={0.5} className="text-prestige-gold opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                <div className="relative z-10 text-center">
                                    <div className="text-6xl font-bold text-white mb-2">100%</div>
                                    <div className="text-prestige-gold uppercase tracking-widest text-sm font-bold">Community Powered</div>
                                </div>
                                <div className="absolute top-10 right-10">
                                    <Zap size={32} className="text-bitcoin-yellow animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* STORIES */}
            <Section id="stories" background="black" className="py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                         <Heart className="w-12 h-12 text-prestige-gold mx-auto mb-6" />
                         <h2 className="text-4xl font-bold text-white mb-4">Stories from the Village</h2>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         {[
                             { name: "John", text: "I bought my entire week's groceries with sats. It feels amazing to bypass the banks." },
                             { name: "Sarah", text: "The discounts at The Coffee Spot for paying in BTC make it a no-brainer." },
                             { name: "Peter", text: "Mwihoko is showing the world what a circular economy looks like. Proud to be here." }
                         ].map((story, i) => (
                             <div key={i} className="bg-charcoal p-8 rounded-[2rem] border border-white/5 hover:bg-white/5 transition-colors">
                                 <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">"{story.text}"</p>
                                 <div className="flex items-center gap-3">
                                     <div className="w-10 h-10 rounded-full bg-prestige-gold flex items-center justify-center text-deep-black font-bold">
                                         {story.name[0]}
                                     </div>
                                     <span className="text-prestige-gold font-bold">{story.name}</span>
                                 </div>
                             </div>
                         ))}
                     </div>
                </div>
            </Section>

            {/* CTA */}
            <Section id="cta" background="black" className="py-32">
                <div className="max-w-4xl mx-auto text-center px-4 bg-gradient-to-b from-charcoal to-deep-black p-12 rounded-[3rem] border border-white/10 shadow-2xl">
                    <Store className="w-16 h-16 text-prestige-gold mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Own a Business?</h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
                        Join the directory. Start accepting sound money and attract a loyal customer base.
                    </p>
                    <Button variant="primary" className="!bg-prestige-gold !text-deep-black hover:!bg-white shadow-[0_0_20px_rgba(212,175,55,0.3)]" onClick={() => onNavigate && onNavigate('join')}>
                        Become a Verified Merchant
                    </Button>
                </div>
            </Section>
        </div>
    );
};