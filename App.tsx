
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { LoadingScreen } from './components/LoadingScreen';
import { AIAssistant } from './components/AIAssistant';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Impact from './pages/Impact';
import Leaders from './pages/Leaders';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Initial loading simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onPageChange={setCurrentPage} />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'impact': return <Impact />;
      case 'leaders': return <Leaders />;
      case 'contact': return <Contact />;
      default: return <Home onPageChange={setCurrentPage} />;
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-1 animate-fade-in">
        {renderPage()}
      </main>

      <Footer onPageChange={setCurrentPage} />
      <AIAssistant />
      
      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 w-12 h-12 bg-gradient-primary rounded-full text-white shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center z-[100]"
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slide-up { animation: slideUp 0.3s ease-out forwards; }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slide-down { animation: slideDown 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;
