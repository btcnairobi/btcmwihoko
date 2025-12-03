import React from 'react';
import { Section } from './ui/Section';
import { 
  LayoutGrid, Scissors, Coffee, ShoppingBag, Car, 
  Briefcase, Store, Gamepad2, Dumbbell, GraduationCap,
  Home, Truck, HeartPulse, CheckCircle2, ArrowRight
} from 'lucide-react';
import { Button } from './ui/Button';
import { Page } from '../types';

interface BlogProps {
  onNavigate?: (page: Page) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
       {/* HERO */}
       <Section id="blog-hero" background="gold" className="pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center px-4">
             <div className="inline-flex items-center justify-center p-4 bg-deep-black rounded-full mb-8 shadow-2xl animate-fade-in-up">
               <LayoutGrid className="text-prestige-gold w-8 h-8" />
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-deep-black mb-6 leading-tight">
               The Bitcoin <br/> <span className="text-white bg-deep-black px-4 transform -skew-x-6 inline-block">Square Model</span>
             </h1>
             <p className="text-xl text-deep-black/70 font-medium tracking-wide uppercase">
               A Merchant Onboarding Framework
             </p>
             <div className="mt-4 flex justify-center items-center gap-2">
                <div className="h-px w-8 bg-deep-black/30"></div>
                <span className="text-sm font-bold text-deep-black/50">Created by Mutonga</span>
                <div className="h-px w-8 bg-deep-black/30"></div>
             </div>
          </div>
       </Section>

       {/* INTRODUCTION */}
       <Section id="model-intro" background="light">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <p className="text-2xl md:text-3xl text-deep-black leading-relaxed font-bold mb-10">
                  "Designed to scale Bitcoin acceptance by onboarding a chain of businesses within one major business square."
              </p>
              <div className="bg-white p-8 rounded-[2.5rem] border border-deep-black/5 text-left shadow-lg">
                  <h3 className="text-xl font-bold text-deep-black mb-6 uppercase tracking-widest border-b border-gray-100 pb-4">Purpose</h3>
                  <ul className="space-y-4">
                      {[
                          "Display a list of businesses that accept Bitcoin in the selected Square.",
                          "Help users navigate Bitcoin-friendly places.",
                          "Prepare merchant data for integration with BTCMaps.org.",
                          "Allow continuous addition of new merchant types."
                      ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4">
                              <CheckCircle2 className="text-green-600 w-6 h-6 shrink-0" />
                              <span className="text-deep-black/80 font-medium text-lg">{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>
           </div>
       </Section>

       {/* CATEGORIES GRID */}
       <Section id="categories" background="black">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                   <h2 className="text-white/60 font-bold tracking-widest uppercase text-sm mb-3">The Framework</h2>
                   <h3 className="text-4xl font-bold text-prestige-gold">Merchant Categories</h3>
                   <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                       Each square comprises diverse businesses, creating a complete circular economy within walking distance.
                   </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {[
                       { title: "Grooming & Care", icon: Scissors, items: ["Kinyozi (Barber Shop)", "Salon & Nails", "Spa Services"] },
                       { title: "Food & Drinks", icon: Coffee, items: ["Coffee Shops", "Bar & Restaurant", "Meat & Fish Spots", "Fast Foods"] },
                       { title: "Retail & Lifestyle", icon: ShoppingBag, items: ["Clothing Shops", "Artworks & Crafts", "Accessories", "Shoes & Sneakers"] },
                       { title: "Automotive", icon: Car, items: ["Carwash", "Mechanic / Garage", "Tyre Services", "Bike Repair"] },
                       { title: "Work & Innovation", icon: Briefcase, items: ["Coworking Space", "Community Space", "Business Hub", "Training Centre"] },
                       { title: "Convenience", icon: Store, items: ["Parking Services", "Printing & Cyber", "Repair Shops", "Mini-markets", "Pharmacies"] },
                       { title: "Entertainment", icon: Gamepad2, items: ["Gaming Lounges", "Movie Spots", "Recreational Centers"] },
                       { title: "Fitness & Wellness", icon: Dumbbell, items: ["Gyms", "Yoga Studios", "Sports Clubs"] },
                       { title: "Education", icon: GraduationCap, items: ["Tutoring Centres", "Academies", "Libraries"] },
                   ].map((cat, i) => (
                       <div key={i} className="bg-charcoal p-8 rounded-[2rem] border border-white/5 hover:bg-white hover:text-deep-black transition-all duration-300 group hover:-translate-y-2">
                           <div className="flex items-center gap-4 mb-6">
                               <div className="w-12 h-12 bg-deep-black rounded-2xl flex items-center justify-center text-prestige-gold group-hover:bg-prestige-gold group-hover:text-deep-black transition-colors">
                                   <cat.icon size={24} />
                               </div>
                               <h4 className="text-xl font-bold text-white group-hover:text-deep-black">{cat.title}</h4>
                           </div>
                           <ul className="space-y-2">
                               {cat.items.map((item, idx) => (
                                   <li key={idx} className="flex items-center text-gray-400 group-hover:text-deep-black/70 text-sm font-medium">
                                       <span className="w-1.5 h-1.5 rounded-full bg-prestige-gold mr-3"></span>
                                       {item}
                                   </li>
                               ))}
                           </ul>
                       </div>
                   ))}
               </div>
           </div>
       </Section>

       {/* EXTRAS */}
       <Section id="extras" background="gold">
           <div className="max-w-6xl mx-auto px-4">
               <h3 className="text-3xl font-bold text-deep-black mb-10 text-center">Essential Extras</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Homes & Rentals", icon: Home, desc: "Airbnbs, hostels, and rentals accepting BTC." },
                        { title: "Logistics", icon: Truck, desc: "Courier services, dispatch, and delivery." },
                        { title: "Health", icon: HeartPulse, desc: "Clinics, wellness centers, and emergency services." }
                    ].map((extra, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 bg-white/50 rounded-2xl border border-deep-black/5">
                            <extra.icon className="text-deep-black w-10 h-10 shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold text-deep-black">{extra.title}</h4>
                                <p className="text-deep-black/70 text-sm font-medium">{extra.desc}</p>
                            </div>
                        </div>
                    ))}
               </div>
               
               <div className="mt-16 text-center">
                   <p className="text-lg text-deep-black/80 mb-6 font-medium">
                       Do you operate a business in one of these categories?
                   </p>
                   <Button variant="primary" onClick={() => onNavigate && onNavigate('join')}>
                       Join a Square
                   </Button>
               </div>
           </div>
       </Section>
    </div>
  );
};