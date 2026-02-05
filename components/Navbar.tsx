
import React, { useState } from 'react';
import { Page } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links: { name: string; page: Page; isCTA?: boolean }[] = [
    { name: 'Home', page: 'home' },
    { name: 'Who We Are', page: 'about' },
    { name: 'What We Do', page: 'services' },
    { name: 'Our Impact', page: 'impact' },
    { name: 'Our Leaders', page: 'leaders' },
    { name: 'Get in Touch', page: 'contact', isCTA: true }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-[1000] shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); onPageChange('home'); }} 
          className="hover:opacity-80 transition-opacity"
        >
          <Logo size={36} />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.page}
              href={`#${link.page}`}
              onClick={(e) => { e.preventDefault(); onPageChange(link.page); }}
              className={`font-semibold transition-all ${
                link.isCTA 
                  ? 'bg-gradient-secondary text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:-translate-y-0.5'
                  : currentPage === link.page 
                    ? 'text-[#00A878] relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#00A878]'
                    : 'text-slate-600 hover:text-[#00A878]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-2xl text-[#0A2463]"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t p-4 flex flex-col gap-4 animate-slide-down">
          {links.map((link) => (
            <a
              key={link.page}
              href={`#${link.page}`}
              onClick={(e) => { e.preventDefault(); onPageChange(link.page); setIsMenuOpen(false); }}
              className={`font-semibold block py-2 ${
                link.isCTA 
                  ? 'bg-gradient-secondary text-white px-6 py-3 rounded-lg text-center'
                  : currentPage === link.page ? 'text-[#00A878]' : 'text-slate-600'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
