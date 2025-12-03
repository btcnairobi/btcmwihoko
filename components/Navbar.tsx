import React, { useState } from 'react';
import { 
  Menu, X, Home, Info, BookOpen, 
  Store, Hammer, Sun, Calendar, 
  Image, Mail 
} from 'lucide-react';
import { NavItem, Page } from '../types';
import { Logo } from './ui/Logo';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: Info },
  { id: 'academy', label: 'Academy', icon: BookOpen },
  { id: 'merchants', label: 'Merchants', icon: Store },
  { id: 'mining', label: 'Mining', icon: Hammer },
  { id: 'builders', label: 'Builders', icon: Sun },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'join', label: 'Join', icon: Mail },
];

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, isOpen, setIsOpen }) => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const handleNavClick = (page: Page) => {
    setActiveIcon(page);
    setTimeout(() => {
      setIsOpen(false);
      setActiveIcon(null);
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  return (
    <nav className="sticky top-0 z-50 bg-prestige-gold/95 backdrop-blur-sm border-b border-deep-black/5 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="focus:outline-none group">
            <Logo variant="dark" className="group-hover:opacity-80 transition-opacity" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-medium transition-all duration-200 ${currentPage === item.id ? 'text-deep-black font-bold scale-105 underline decoration-2 underline-offset-4' : 'text-deep-black/60 hover:text-deep-black'}`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('join')}
                className="bg-deep-black text-prestige-gold hover:bg-gray-900 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                Connect
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-full bg-deep-black text-prestige-gold hover:bg-gray-900 transition-all focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-prestige-gold border-t border-deep-black/5 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-8">
          <div className="grid grid-cols-3 gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-3xl transition-all duration-300 border ${
                  activeIcon === item.id || currentPage === item.id
                    ? 'bg-deep-black text-prestige-gold scale-95 border-deep-black' 
                    : 'bg-white/20 border-deep-black/5 text-deep-black hover:bg-deep-black hover:text-prestige-gold'
                }`}
              >
                <item.icon className={`h-6 w-6 mb-2 ${activeIcon === item.id ? 'animate-pulse' : ''}`} />
                <span className="text-[10px] uppercase tracking-wider font-bold">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};