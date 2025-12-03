import React from 'react';
import { Anchor, Award, CheckCircle, Share2 } from 'lucide-react';
import { Button } from './ui/Button';
import { QuestionCategory } from '../types';

interface CertificateProps {
  courseTitle: string;
  chapterTitle: string;
  onClose: () => void;
  persona?: QuestionCategory | null;
}

export const Certificate: React.FC<CertificateProps> = ({ courseTitle, chapterTitle, onClose, persona }) => {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  const handleShare = async () => {
    let tag = '';
    switch (persona) {
      case 'spender': tag = '#keepspedn'; break;
      case 'believer': tag = '#keepbilvn'; break;
      case 'noderunner': tag = '#keeprunn'; break;
      default: tag = '#bitcoin';
    }
    
    const text = `I just leveled up my Bitcoin knowledge! 🎓 #btcmwihoko ${tag}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Bitcoin Mwihoko Certificate',
          text: text,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(text);
      alert('Hashtags copied to clipboard! Open your social app to paste.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4 animate-fade-in-up">
      <div className="bg-off-white text-deep-black p-1 md:p-2 rounded-lg shadow-2xl max-w-4xl w-full mx-auto relative overflow-hidden border-4 border-double border-prestige-gold">
        
        {/* Inner Border */}
        <div className="border-2 border-deep-black h-full w-full p-8 md:p-12 relative flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            
            {/* Watermark: Anchor */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none z-0">
                <Anchor size={400} />
            </div>

            {/* Watermark: SAMPLE */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <span className="text-6xl md:text-9xl font-black text-red-600/10 -rotate-45 border-8 border-red-600/10 p-4 md:p-8 rounded-xl uppercase tracking-widest select-none">
                    Sample
                </span>
            </div>

            {/* Header */}
            <div className="mb-8 relative z-10">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-deep-black text-prestige-gold mb-4 shadow-lg">
                    <Award size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-widest mb-2 text-deep-black">Certificate</h1>
                <h2 className="text-xl font-serif italic text-deep-black/60">of Knowledge</h2>
            </div>

            {/* Content */}
            <div className="space-y-6 mb-10 relative z-10 max-w-2xl">
                <p className="text-lg text-gray-700 italic">This certifies that the student has successfully completed the module:</p>
                
                <div className="py-6 border-b-2 border-deep-black/10 border-t-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-deep-black mb-2">{chapterTitle}</h3>
                    <p className="text-prestige-gold font-bold uppercase tracking-wider text-sm">{courseTitle} Course</p>
                </div>

                <p className="text-sm text-gray-500 max-w-md mx-auto mt-4">
                    "Knowledge is the first step to sovereignty. By understanding sound money, you anchor your future."
                </p>

                <div className="flex flex-col md:flex-row justify-between items-end w-full pt-12 gap-8">
                    <div className="text-center w-full md:w-auto">
                        <div className="h-px w-40 bg-deep-black mb-2 mx-auto"></div>
                        <p className="text-xs uppercase font-bold text-gray-500">Date Completed</p>
                        <p className="font-serif font-bold text-deep-black">{currentDate}</p>
                    </div>
                    
                    {/* Official Stamp Area */}
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full border-4 border-prestige-gold opacity-30 absolute -top-4 -left-4 animate-pulse"></div>
                        <div className="text-center w-full md:w-auto relative z-10">
                            <div className="flex items-center justify-center mb-2">
                                <Anchor className="text-deep-black" size={32} />
                            </div>
                            <div className="h-px w-40 bg-deep-black mb-2 mx-auto"></div>
                            <p className="text-xs uppercase font-bold text-gray-500">Bitcoin Mwihoko</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Verification Badge */}
            <div className="absolute top-8 right-8 hidden md:block z-10">
                <div className="w-24 h-24 rounded-full bg-prestige-gold flex items-center justify-center text-deep-black font-bold shadow-lg transform rotate-12 border-4 border-white/20 text-xs text-center leading-tight">
                    VERIFIED<br/>STUDENT
                </div>
            </div>

        </div>
      </div>

      {/* Instructions & Actions */}
      <div className="mt-8 max-w-2xl text-center space-y-6">
          <div className="bg-white/10 p-4 rounded-xl border border-white/10">
              <p className="text-prestige-gold font-bold mb-1 flex items-center justify-center gap-2">
                  <CheckCircle size={16} /> Get the Real Deal!
              </p>
              <p className="text-gray-400 text-sm">
                  This is a digital sample. To get your <strong>Official Physical Certificate</strong> signed by the elders, join us at the next meetup.
              </p>
              <p className="text-white font-medium text-sm mt-2">
                  El ROI Glimmers Pazuri Hub - Bitcoin Square<br/>
                  <span className="text-bitcoin-yellow text-xs">Fridays @ 4:21 PM</span>
              </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" onClick={handleShare} className="!border-white !text-white hover:!bg-white hover:!text-deep-black">
                <Share2 size={18} className="mr-2" /> Share Achievement
            </Button>
            <Button variant="primary" onClick={onClose} className="!bg-prestige-gold !text-deep-black">
                Next Chapter
            </Button>
          </div>
      </div>
    </div>
  );
};