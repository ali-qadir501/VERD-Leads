
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-[#1A1A2E] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16">
        <div>
          <a href="#home" onClick={(e) => { e.preventDefault(); onPageChange('home'); }} className="flex items-center gap-2 text-3xl font-bold mb-6">
            <i className="fas fa-robot text-[#00A878]"></i>
            <span>VERD<span className="text-[#00A878]">Leads</span></span>
          </a>
          <p className="text-slate-400 leading-relaxed mb-6">
            AI-Powered B2B Lead Generation agency helping technology companies and professional service firms scale predictably.
          </p>
          <div className="flex gap-4">
            {['linkedin', 'twitter', 'facebook', 'instagram'].map(platform => (
              <a key={platform} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00A878] transition-all">
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#services" onClick={() => onPageChange('services')} className="hover:text-[#00A878] transition-colors">What We Do</a></li>
            <li><a href="#" className="hover:text-[#00A878] transition-colors">Our Packages</a></li>
            <li><a href="#impact" onClick={() => onPageChange('impact')} className="hover:text-[#00A878] transition-colors">Case Studies</a></li>
            <li><a href="#contact" onClick={() => onPageChange('contact')} className="hover:text-[#00A878] transition-colors">Get Started</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Resources</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-[#00A878] transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-[#00A878] transition-colors">Playbooks</a></li>
            <li><a href="#" className="hover:text-[#00A878] transition-colors">Webinars</a></li>
            <li><a href="#" className="hover:text-[#00A878] transition-colors">Tools</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#about" onClick={() => onPageChange('about')} className="hover:text-[#00A878] transition-colors">About Us</a></li>
            <li><a href="#leaders" onClick={() => onPageChange('leaders')} className="hover:text-[#00A878] transition-colors">Our Leaders</a></li>
            <li><a href="#" className="hover:text-[#00A878] transition-colors">Careers</a></li>
            <li><a href="#contact" onClick={() => onPageChange('contact')} className="hover:text-[#00A878] transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
        <p>&copy; 2024 VERDLeads. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
