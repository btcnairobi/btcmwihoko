import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, CheckCircle, HelpCircle, X, Menu, ShoppingBag, Cpu, Heart, AlertCircle } from 'lucide-react';
import { QuestionCategory } from '../types';
import { COURSES } from '../data/courses';
import { Button } from './ui/Button';
import { Certificate } from './Certificate';

interface CoursePlayerProps {
  courseId: string;
  onExit: () => void;
}

// Persona Scores State
interface PersonaScores {
  spender: number;
  believer: number;
  noderunner: number;
}

type PlayerView = 'preface' | 'learning' | 'quiz' | 'certificate';

export const CoursePlayer: React.FC<CoursePlayerProps> = ({ courseId, onExit }) => {
  const course = COURSES[courseId];
  
  // Navigation State
  const [currentChapterIdx, setCurrentChapterIdx] = useState(0);
  const [currentTopicIdx, setCurrentTopicIdx] = useState(0);
  const [view, setView] = useState<PlayerView>('preface'); // Start with Preface

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizResult, setQuizResult] = useState<{score: number, passed: boolean} | null>(null);
  
  // Modals
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPersonaModal, setShowPersonaModal] = useState(false);
  const [detectedPersona, setDetectedPersona] = useState<QuestionCategory | null>(null);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Algorithm State: Track scores across the session
  const [personaScores, setPersonaScores] = useState<PersonaScores>({
      spender: 0,
      believer: 0,
      noderunner: 0
  });

  // Reset state when chapter changes, but NOT when moving between topic pages within a chapter
  useEffect(() => {
    // Only reset specifically when starting new chapter if needed, 
    // but standard navigation handles most resets.
  }, [currentChapterIdx]);

  if (!course) return <div className="text-white">Course not found</div>;

  const currentChapter = course.chapters[currentChapterIdx];
  const currentTopic = currentChapter.topics[currentTopicIdx];
  
  const isLastTopic = currentTopicIdx === currentChapter.topics.length - 1;
  const isLastChapter = currentChapterIdx === course.chapters.length - 1;

  // --- NAVIGATION HANDLERS ---

  const startCourse = () => {
      setView('learning');
  };

  const goToQuiz = () => {
      setView('quiz');
      setQuizAnswers([]);
      setQuizResult(null);
  };

  const nextAfterQuiz = () => {
      if (isLastTopic) {
          // Finished Chapter -> Go to Certificate
          setView('certificate');
      } else {
          // Next Topic -> Go to Learning View
          setCurrentTopicIdx(prev => prev + 1);
          setView('learning');
      }
      setShowSuccessModal(false);
  };

  const handleNextChapter = () => {
      if (!isLastChapter) {
          setCurrentChapterIdx(prev => prev + 1);
          setCurrentTopicIdx(0);
          setView('learning'); // Start next chapter
      } else {
          onExit(); // Finish Course
      }
  };

  const handleSidebarNav = (cIdx: number, tIdx: number) => {
      setCurrentChapterIdx(cIdx);
      setCurrentTopicIdx(tIdx);
      setView('learning');
      setQuizResult(null);
      setSidebarOpen(false); // Close sidebar on mobile
  };

  // --- QUIZ LOGIC ---

  const handleOptionSelect = (qIndex: number, optionIndex: number) => {
      if (quizResult) return; // Locked
      const newAnswers = [...quizAnswers];
      newAnswers[qIndex] = optionIndex;
      setQuizAnswers(newAnswers);
  };

  const submitQuiz = () => {
      let correct = 0;
      const currentScores = { ...personaScores };

      currentTopic.questions.forEach((q, i) => {
          if (quizAnswers[i] === q.correctAnswer) {
              correct++;
              currentScores[q.category] += 1;
          }
      });

      setPersonaScores(currentScores);

      const passed = correct === currentTopic.questions.length; 
      setQuizResult({ score: correct, passed });

      if (passed) {
          setShowSuccessModal(true);
      }
  };

  // --- PERSONA LOGIC ---

  const getDominantPersona = () => {
      const { spender, believer, noderunner } = personaScores;
      if (spender >= believer && spender >= noderunner) return 'spender';
      if (believer >= spender && believer >= noderunner) return 'believer';
      return 'noderunner';
  };

  const handleSuccessModalClose = () => {
      setShowSuccessModal(false);
      
      // If it was the last topic of the chapter, trigger Persona Reveal before certificate/next
      if (isLastTopic) {
          const persona = getDominantPersona();
          setDetectedPersona(persona);
          setTimeout(() => setShowPersonaModal(true), 300);
      } else {
          nextAfterQuiz();
      }
  };

  const handlePersonaClose = () => {
      setShowPersonaModal(false);
      nextAfterQuiz(); // Proceed to Certificate or Next
  };

  // --- RENDER HELPERS ---

  if (view === 'certificate') {
      return (
          <div className="fixed inset-0 z-50 bg-deep-black overflow-y-auto">
              <div className="max-w-7xl mx-auto px-4 py-8">
                  <div className="flex justify-between items-center mb-8">
                      <div onClick={() => setView('learning')} className="cursor-pointer flex items-center text-white/50 hover:text-white">
                          <ChevronLeft className="mr-2" /> Back to Review
                      </div>
                  </div>
                  <Certificate 
                      courseTitle={course.title} 
                      courseLevel={course.level}
                      chapterTitle={currentChapter.title} 
                      onClose={handleNextChapter}
                      persona={detectedPersona}
                      isLastChapter={isLastChapter}
                  />
              </div>
          </div>
      );
  }

  return (
    <div className="fixed inset-0 z-50 bg-charcoal text-white flex flex-col md:flex-row">
        
        {/* SUCCESS MODAL */}
        {showSuccessModal && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                <div className="bg-deep-black border-2 border-green-500 rounded-3xl p-8 max-w-sm w-full text-center relative shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-deep-black animate-bounce">
                        <CheckCircle size={40} strokeWidth={3} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Excellent!</h3>
                    <p className="text-gray-400 mb-8">Concept mastered.</p>
                    <Button variant="primary" className="!bg-green-500 !text-deep-black hover:!bg-white w-full" onClick={handleSuccessModalClose}>
                        Continue
                    </Button>
                </div>
            </div>
        )}

        {/* PERSONA MODAL */}
        {showPersonaModal && detectedPersona && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                <div className="bg-deep-black border-2 border-prestige-gold rounded-3xl p-8 max-w-md w-full text-center relative shadow-[0_0_50px_rgba(212,175,55,0.3)]">
                    <button onClick={() => setShowPersonaModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X size={24}/></button>
                    
                    <div className="w-24 h-24 bg-deep-black border-2 border-prestige-gold rounded-full flex items-center justify-center mx-auto mb-6 text-prestige-gold shadow-lg">
                        {detectedPersona === 'spender' && <ShoppingBag size={40} />}
                        {detectedPersona === 'believer' && <Heart size={40} />}
                        {detectedPersona === 'noderunner' && <Cpu size={40} />}
                    </div>
                    
                    <h4 className="text-prestige-gold font-bold uppercase tracking-widest text-sm mb-2">Archetype Detected</h4>
                    
                    {detectedPersona === 'spender' && (
                         <h3 className="text-3xl font-bold text-white mb-4">You are a Spedner!</h3>
                    )}
                    {detectedPersona === 'believer' && (
                        <h3 className="text-3xl font-bold text-white mb-4">You are a Bliver!</h3>
                    )}
                    {detectedPersona === 'noderunner' && (
                        <h3 className="text-3xl font-bold text-white mb-4">You are a Noderunner!</h3>
                    )}

                    <p className="text-gray-300 mb-6 leading-relaxed">
                        {detectedPersona === 'spender' && "You support the circular economy by spending your sats."}
                        {detectedPersona === 'believer' && "You believe in the mission and educate others."}
                        {detectedPersona === 'noderunner' && "You verify everything and secure the network."}
                    </p>

                    <Button variant="primary" className="w-full" onClick={handlePersonaClose}>
                        Claim Certificate
                    </Button>
                </div>
            </div>
        )}

        {/* --- MOBILE HEADER --- */}
        <div className="md:hidden h-16 bg-deep-black flex items-center justify-between px-4 border-b border-white/10 shrink-0">
             <div className="flex items-center gap-2">
                 <BookOpen size={20} className="text-prestige-gold" />
                 <span className="font-bold truncate max-w-[150px]">{course.title}</span>
             </div>
             <div className="flex items-center gap-4">
                 <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                     <Menu size={24} />
                 </button>
                 <button onClick={onExit}>
                     <X size={24} />
                 </button>
             </div>
        </div>

        {/* --- SIDEBAR --- */}
        <div className={`fixed inset-y-0 left-0 w-80 bg-deep-black border-r border-white/10 transform transition-transform duration-300 z-40 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:block`}>
            <div className="p-6 h-full overflow-y-auto flex flex-col">
                <div className="flex items-center justify-between mb-8 hidden md:flex">
                    <span className="text-xs font-bold uppercase tracking-widest text-prestige-gold">{course.level} Course</span>
                    <button onClick={onExit} className="text-white/50 hover:text-white"><X size={20} /></button>
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">{course.title}</h2>
                
                {/* Score Dashboard */}
                <div className="bg-white/5 p-4 rounded-xl mb-6 border border-white/5">
                    <p className="text-xs font-bold uppercase text-gray-500 mb-3">Stats</p>
                    <div className="flex justify-between text-xs text-gray-400">
                        <div className="flex flex-col items-center"><ShoppingBag size={14} className="mb-1 text-bitcoin-yellow" /><span>{personaScores.spender}</span></div>
                        <div className="flex flex-col items-center"><Heart size={14} className="mb-1 text-red-400" /><span>{personaScores.believer}</span></div>
                        <div className="flex flex-col items-center"><Cpu size={14} className="mb-1 text-blue-400" /><span>{personaScores.noderunner}</span></div>
                    </div>
                </div>

                <div className="space-y-4 flex-grow">
                    {course.chapters.map((chapter, cIdx) => (
                        <div key={chapter.id} className={`rounded-xl overflow-hidden transition-all ${cIdx === currentChapterIdx ? 'bg-white/10 border border-prestige-gold/50' : 'opacity-50'}`}>
                            <div className="p-4 bg-white/5">
                                <h4 className="font-bold text-sm text-white mb-1">Chapter {cIdx + 1}</h4>
                                <div className="text-xs text-gray-400">{chapter.title}</div>
                            </div>
                            {cIdx === currentChapterIdx && (
                                <div className="bg-deep-black/50 p-2">
                                    {chapter.topics.map((topic, tIdx) => (
                                        <div 
                                            key={topic.id}
                                            onClick={() => handleSidebarNav(cIdx, tIdx)}
                                            className={`p-3 rounded-lg text-sm cursor-pointer flex items-center gap-3 mb-1 ${tIdx === currentTopicIdx ? 'bg-prestige-gold text-deep-black font-bold' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            <div className={`w-2 h-2 rounded-full ${tIdx === currentTopicIdx ? 'bg-deep-black' : 'bg-gray-600'}`}></div>
                                            Topic {cIdx + 1}.{tIdx + 1}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-grow overflow-y-auto h-full relative" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)}>
            
            {/* 1. PREFACE VIEW */}
            {view === 'preface' && (
                <div className="flex flex-col items-center justify-center min-h-full p-8 text-center animate-fade-in-up">
                     <div className="w-24 h-24 bg-prestige-gold rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                         <BookOpen size={48} className="text-deep-black" />
                     </div>
                     <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">{course.title}</h1>
                     <p className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
                         {course.description}
                     </p>
                     <Button variant="primary" onClick={startCourse} className="scale-125">
                         Start Learning
                     </Button>
                </div>
            )}

            {/* 2. LEARNING (READING) VIEW */}
            {view === 'learning' && (
                <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 animate-fade-in">
                    <div className="mb-8 border-b border-white/10 pb-8">
                         <div className="flex items-center gap-2 text-prestige-gold text-sm font-bold uppercase tracking-wider mb-2">
                             <span>Chapter {currentChapterIdx + 1}</span>
                             <span className="text-gray-600">/</span>
                             <span>Topic {currentChapterIdx + 1}.{currentTopicIdx + 1}</span>
                         </div>
                         <h1 className="text-4xl md:text-5xl font-bold text-white">{currentTopic.title}</h1>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none mb-12">
                        {currentTopic.content.map((paragraph, i) => (
                            <p key={i} className="text-gray-300 leading-relaxed text-lg mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="flex justify-end">
                        <Button variant="primary" onClick={goToQuiz}>
                            Take Quiz <ChevronRight className="ml-2" />
                        </Button>
                    </div>
                </div>
            )}

            {/* 3. QUIZ VIEW */}
            {view === 'quiz' && (
                <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 animate-fade-in">
                    <div className="mb-8">
                        <button onClick={() => setView('learning')} className="text-gray-500 hover:text-white flex items-center gap-2 mb-6">
                            <ChevronLeft size={16} /> Back to Reading
                        </button>
                        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                            <HelpCircle className="text-bitcoin-yellow" /> 
                            Knowledge Check
                        </h2>
                    </div>

                    <div className="space-y-8 bg-white/5 p-8 rounded-[2rem] border border-white/5">
                         {currentTopic.questions.map((q, qIdx) => {
                             const userAnswer = quizAnswers[qIdx];
                             const isCorrect = userAnswer === q.correctAnswer;
                             const showResult = !!quizResult;

                             return (
                                <div key={q.id} className="border-b border-white/10 pb-8 last:border-0">
                                    <div className="flex items-start gap-3 mb-4">
                                        <span className="bg-deep-black text-prestige-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">
                                            {qIdx + 1}
                                        </span>
                                        <div className="flex-grow">
                                            <p className="font-bold text-white text-lg mb-4">{q.question}</p>
                                            
                                            {showResult && (
                                                <div className={`mb-4 flex items-center gap-2 text-sm font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                                                    {isCorrect ? <CheckCircle size={16}/> : <AlertCircle size={16}/>}
                                                    {isCorrect ? 'Correct' : 'Incorrect'}
                                                </div>
                                            )}

                                            <div className="space-y-2">
                                                {q.options.map((opt, oIdx) => {
                                                    let btnClass = "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10";
                                                    
                                                    if (!showResult && userAnswer === oIdx) {
                                                        btnClass = "bg-prestige-gold text-deep-black border-prestige-gold font-bold";
                                                    }
                                                    
                                                    if (showResult) {
                                                        if (oIdx === q.correctAnswer) {
                                                            btnClass = "bg-green-500/20 border-green-500 text-green-400 font-bold";
                                                        } else if (oIdx === userAnswer && !isCorrect) {
                                                            btnClass = "bg-red-500/20 border-red-500 text-red-400 font-bold opacity-50";
                                                        } else {
                                                            btnClass = "opacity-30 pointer-events-none";
                                                        }
                                                    }

                                                    return (
                                                        <button
                                                            key={oIdx}
                                                            onClick={() => handleOptionSelect(qIdx, oIdx)}
                                                            className={`w-full text-left p-4 rounded-xl border transition-all ${btnClass}`}
                                                            disabled={showResult}
                                                        >
                                                            {opt}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             );
                         })}

                         <div className="pt-4">
                             {!quizResult ? (
                                 <Button 
                                     onClick={submitQuiz} 
                                     fullWidth
                                     disabled={quizAnswers.length < currentTopic.questions.length}
                                     className={quizAnswers.length < currentTopic.questions.length ? 'opacity-50' : ''}
                                 >
                                     Check Answers
                                 </Button>
                             ) : (
                                 <div className="text-center">
                                     {!quizResult.passed && (
                                         <Button variant="outline" onClick={() => { setQuizResult(null); setQuizAnswers([]); }} className="!border-white !text-white hover:!bg-white hover:!text-deep-black">
                                             Try Again
                                         </Button>
                                     )}
                                 </div>
                             )}
                         </div>
                    </div>
                </div>
            )}
            
        </div>
    </div>
  );
};