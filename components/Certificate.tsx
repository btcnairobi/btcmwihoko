import React from 'react';
import { Anchor, Award, CheckCircle, Printer } from 'lucide-react';
import { Button } from './ui/Button';

interface CertificateProps {
  courseTitle: string;
  chapterTitle: string;
  onClose: () => void;
}

export const Certificate: React.FC<CertificateProps> = ({ courseTitle, chapterTitle, onClose }) => {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4 animate-fade-in-up">
      <div className="bg-off-white text-deep-black p-1 md:p-2 rounded-lg shadow-2xl max-w-4xl w-full mx-auto relative overflow-hidden border-4 border-double border-prestige-gold">
        
        {/* Inner Border */}
        <div className="border-2 border-deep-black h-full w-full p-8 md:p-12 relative flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
                <Anchor size={400} />
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
            <div className="absolute top-8 right-8 hidden md:block">
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
                  <CheckCircle size={16} /> Get it Signed!
              </p>
              <p className="text-gray-400 text-sm">
                  We sign certificates physically every <strong>Friday at 4:21 PM</strong>. <br/>
                  Join us at <span className="text-white font-medium">El ROI Glimmers Pazuri Hub - Bitcoin Square</span>.
              </p>
          </div>

          <p className="text-gray-500 text-sm">
              Pro Tip: Take a screenshot and post it on <strong>Nostr</strong> to verify your proof of work!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" onClick={() => window.print()} className="!border-white !text-white hover:!bg-white hover:!text-deep-black">
                <Printer size={18} className="mr-2" /> Save / Print
            </Button>
            <Button variant="primary" onClick={onClose} className="!bg-prestige-gold !text-deep-black">
                Next Chapter
            </Button>
          </div>
      </div>
    </div>
  );
};