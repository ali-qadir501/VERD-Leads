
import React from 'react';
import { Logo } from './Logo';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#1A1A2E] z-[9999] flex flex-col items-center justify-center text-white">
      <div className="relative mb-12 flex items-center justify-center">
        {/* Pulsing ring around the logo */}
        <div className="absolute w-32 h-32 border-2 border-[#00A878]/30 rounded-full animate-ping"></div>
        <div className="absolute w-32 h-32 border border-[#00A878]/50 rounded-full animate-pulse"></div>
        
        <div className="relative animate-float">
          <Logo size={80} variant="icon" className="brightness-150" />
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-3 tracking-tighter">
          VERD<span className="text-[#00A878]">Leads</span>
        </h2>
        <div className="flex items-center justify-center gap-1">
          <div className="w-1.5 h-1.5 bg-[#00A878] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-1.5 h-1.5 bg-[#00A878] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1.5 h-1.5 bg-[#00A878] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <p className="text-slate-400 font-medium text-sm mt-4 uppercase tracking-[0.2em]">
          Initializing AI Pipeline
        </p>
      </div>
    </div>
  );
};
