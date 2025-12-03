import React, { useState } from 'react';
import { Section } from './ui/Section';
import { BookOpen, Store, Sun, Hammer, Bitcoin, Shield, Users, Zap, Globe, Monitor, Wrench, Heart, Coffee, Mic } from 'lucide-react';
import { ProgramItem, Page } from '../types';
import { DetailModal } from './ui/DetailModal';

// Mock Details Shared
const MOCK_DETAILS = {
  paragraphs: [
    "We provide essential knowledge to understand sound money principles. Education is the foundation of true sovereignty and financial freedom.",
    "Our sessions are designed to be simple, interactive, and practical. We focus on how to use tools safely and effectively in daily life.",
    "Join a network of like-minded individuals building a robust circular economy. Together we strengthen our community's future."
  ],
  images: [
    "https://picsum.photos/800/600?random=10",
    "https://picsum.photos/800/600?random=11",
    "https://picsum.photos/800/600?random=12"
  ],
  links: [
    { label: "Affiliate Link 1", url: "#" },
    { label: "Affiliate Link 2", url: "#" },
    { label: "Affiliate Link 3", url: "#" },
    { label: "Affiliate Link 4", url: "#" },
    { label: "Social Media", url: "#" },
    { label: "Resource Link", url: "#" },
    { label: "Partner Link", url: "#" },
    { label: "Support Link", url: "#" },
    { label: "Donate Link", url: "#" }
  ]
};

// Data Store for different pages
const DATA_STORE: Record<string, ProgramItem[]> = {
  academy: [
    { id: 'basics', title: 'Mwihoko Academy', description: 'Learning sound money basics safely.', icon: BookOpen, details: MOCK_DETAILS },
    { id: 'lightning', title: 'Lightning Network', description: 'Instant payments for daily use.', icon: Zap, details: MOCK_DETAILS },
    { id: 'savings', title: 'Savings Circles', description: 'Group saving for long term.', icon: Bitcoin, details: MOCK_DETAILS },
    { id: 'security', title: 'Self Custody', description: 'Holding your own keys securely.', icon: Shield, details: MOCK_DETAILS },
  ],
  merchants: [
    { id: 'local', title: 'Local Merchants', description: 'Shops accepting Bitcoin for goods.', icon: Store, details: MOCK_DETAILS },
    { id: 'global', title: 'Global Reach', description: 'Connecting Mwihoko to the world.', icon: Globe, details: MOCK_DETAILS },
    { id: 'tools', title: 'Business Tools', description: 'POS systems for every shop.', icon: Monitor, details: MOCK_DETAILS },
  ],
  mining: [
    { id: 'home_mining', title: 'Home Mining', description: 'Securing network from our homes.', icon: Hammer, details: MOCK_DETAILS },
    { id: 'node', title: 'Run a Node', description: 'Validating truth, trusting no one.', icon: Shield, details: MOCK_DETAILS },
    { id: 'energy', title: 'Energy Freedom', description: 'Using heat for dual purpose.', icon: Sun, details: MOCK_DETAILS },
  ],
  builders: [
    { id: 'tech', title: 'Tech Builders', description: 'Creating tools for our neighbors.', icon: Wrench, details: MOCK_DETAILS },
    { id: 'opensource', title: 'Open Source', description: 'Building free software for all.', icon: Monitor, details: MOCK_DETAILS },
    { id: 'repair', title: 'Repair Shop', description: 'Fixing hardware for the community.', icon: Hammer, details: MOCK_DETAILS },
  ],
  events: [
    { id: 'meetups', title: 'Sunday Meetups', description: 'Gathering to share and grow.', icon: Users, details: MOCK_DETAILS },
    { id: 'pizza', title: 'Pizza Day', description: 'Celebrating historic Bitcoin moments.', icon: Heart, details: MOCK_DETAILS },
    { id: 'workshops', title: 'Workshops', description: 'Hands-on technical training sessions.', icon: Mic, details: MOCK_DETAILS },
    { id: 'coffee', title: 'Bitcoin Coffee', description: 'Casual chats over good coffee.', icon: Coffee, details: MOCK_DETAILS },
  ]
};

interface GridPageProps {
  page: Page;
  title: string;
  subtitle: string;
}

export const GridPage: React.FC<GridPageProps> = ({ page, title, subtitle }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const items = DATA_STORE[page] || [];

  return (
    <>
      <Section id={page} background="gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
              <h2 className="text-deep-black/60 font-bold tracking-widest uppercase text-sm mb-3">{title}</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-deep-black">{subtitle}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((program) => (
              <button 
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className="group relative overflow-hidden p-8 bg-white border border-deep-black/5 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left w-full"
              >
                <div className="flex flex-col h-full">
                  <div className="h-12 w-12 bg-deep-black rounded-full flex items-center justify-center mb-6 text-prestige-gold group-hover:bg-prestige-gold group-hover:text-deep-black transition-colors duration-300">
                    <program.icon className="h-6 w-6" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-deep-black mb-2">{program.title}</h4>
                  <p className="text-deep-black/70 text-sm leading-relaxed line-clamp-3 font-medium">
                    {program.description}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center text-deep-black text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Launch Card
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Section>

      <DetailModal 
        isOpen={!!selectedProgram} 
        onClose={() => setSelectedProgram(null)} 
        item={selectedProgram} 
      />
    </>
  );
};