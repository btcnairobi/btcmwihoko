import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { ProgramItem } from '../../types';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ProgramItem | null;
}

export const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, item }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-deep-black/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-prestige-gold rounded-[3rem] shadow-2xl overflow-y-auto no-scrollbar flex flex-col">
        
        {/* Header Image Area (First Image) */}
        <div className="relative h-48 sm:h-64 w-full shrink-0">
          <img 
            src={item.details.images[0] || "https://picsum.photos/800/400?grayscale"} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-deep-black/50 hover:bg-deep-black p-2 rounded-full text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="absolute bottom-6 left-6 sm:left-10">
            <div className="bg-deep-black/80 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center gap-2 mb-2">
                <item.icon className="h-4 w-4 text-prestige-gold" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Details</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-none">{item.title}</h2>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-10 space-y-8 bg-white rounded-t-[3rem] -mt-6 relative min-h-0">
          
          {/* Paragraphs (Max 3) */}
          <div className="space-y-4 text-deep-black leading-relaxed text-lg font-medium">
            {item.details.paragraphs.slice(0, 3).map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Image Gallery (Remaining Images, Max 3 total shown including header) */}
          <div className="grid grid-cols-2 gap-4">
            {item.details.images.slice(1, 3).map((img, idx) => (
              <div key={idx} className="aspect-video rounded-2xl overflow-hidden border border-gray-200">
                <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* Links (Max 9) */}
          <div className="bg-deep-black rounded-[2rem] p-6 text-white">
            <h3 className="font-bold text-prestige-gold uppercase tracking-widest text-sm mb-4 border-b border-gray-800 pb-2">
              Resources & Links
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {item.details.links.slice(0, 9).map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-charcoal hover:bg-gray-700 px-4 py-3 rounded-xl transition-colors group"
                >
                  <span className="text-sm font-medium truncate mr-2">{link.label}</span>
                  <ExternalLink size={14} className="text-prestige-gold group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};