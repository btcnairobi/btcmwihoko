import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { GridPage } from './components/Programs';
import { GalleryPage } from './components/Community';
import { Contact } from './components/Contact';
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
        return <About />;
      case 'academy':
        return <GridPage page="academy" title="Education" subtitle="Mwihoko Academy" />;
      case 'merchants':
        return <GridPage page="merchants" title="Economy" subtitle="Local Merchants" />;
      case 'mining':
        return <GridPage page="mining" title="Security" subtitle="Home Mining" />;
      case 'builders':
        return <GridPage page="builders" title="Innovation" subtitle="Tech Builders" />;
      case 'events':
        return <GridPage page="events" title="Gatherings" subtitle="Community Events" />;
      case 'gallery':
        return <GalleryPage />;
      case 'join':
        return <Contact />;
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