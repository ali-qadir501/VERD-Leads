
import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#1A1A2E] z-[9999] flex flex-col items-center justify-center text-white">
      <div className="relative w-24 h-24 mb-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-5 h-5 bg-[#00A878] rounded-full animate-pulse-soft"
            style={{
              top: i === 0 ? '0' : i === 1 ? '15%' : i === 2 ? 'auto' : i === 3 ? 'auto' : 'auto',
              bottom: i === 2 ? '15%' : i === 3 ? '0' : i === 4 ? '15%' : 'auto',
              left: i === 0 ? '40%' : i === 1 ? 'auto' : i === 2 ? 'auto' : i === 3 ? '40%' : '15%',
              right: i === 1 ? '15%' : i === 2 ? '15%' : 'auto',
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
      <h2 className="text-4xl font-bold mb-2">VERD<span className="text-[#00A878]">Leads</span></h2>
      <p className="text-slate-400 font-medium">Initializing AI Systems...</p>
    </div>
  );
};
