import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Education } from './components/Education';
import { Merchants } from './components/Merchants';
import { GridPage } from './components/Programs';
import { Community } from './components/Community';
import { Contact } from './components/Contact';
import { Support } from './components/Support';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isFooterOpen, setIsFooterOpen] = useState(false);

  // Layout "Push" Logic
  const footerHeight = 400; // Approximate max height of footer content
  const mainStyle: React.CSSProperties = {
    transition: 'padding-bottom 0.5s ease-in-out',
    paddingBottom: (currentPage === 'home' && isFooterOpen) ? `${footerHeight}px` : '0px',
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'academy':
        return <Education onNavigate={setCurrentPage} />;
      case 'merchants':
        return <Merchants onNavigate={setCurrentPage} />;
      case 'blog':
        return <Blog onNavigate={setCurrentPage} />;
      case 'events':
        return <GridPage page="events" title="Gatherings" subtitle="Community Events" />;
      case 'gallery':
        return <Community onNavigate={setCurrentPage} />;
      case 'join':
        return <Contact />;
      case 'support':
        return <Support />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-deep-black text-white font-sans selection:bg-prestige-gold selection:text-deep-black flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        isOpen={isNavOpen}
        setIsOpen={setIsNavOpen}
      />
      
      <main className="flex-grow w-full" style={mainStyle}>
        {renderPage()}
      </main>

      <Footer 
        isHome={currentPage === 'home'} 
        isOpen={isFooterOpen}
        setIsOpen={setIsFooterOpen}
      />
    </div>
  );
};

export default App;