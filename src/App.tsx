import React, { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import BiographyPage from './pages/BiographyPage/BiographyPage';
import StudioPage from './pages/StudioPage/StudioPage';
import CollaborativePage from './pages/CollaborativePage/CollaborativePage';
import PerformancePage from './pages/PerformancePage/PerformancePage';
import ContactPage from './pages/ContactPage/ContactPage';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const AmyMusicWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'biography':
        return <BiographyPage />;
      case 'studio':
        return <StudioPage setCurrentPage={setCurrentPage} />;
      case 'collaborative':
        return <CollaborativePage setCurrentPage={setCurrentPage} />;
      case 'performance':
        return <PerformancePage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default AmyMusicWebsite;