
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'full' | 'icon';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 40, variant = 'full' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div 
        style={{ width: size, height: size }}
        className="relative flex items-center justify-center shrink-0"
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform hover:rotate-12 transition-transform duration-300">
          <path 
            d="M20 20L50 85L80 20" 
            stroke="url(#logo-gradient)" 
            strokeWidth="12" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M50 85L85 45" 
            stroke="#00A878" 
            strokeWidth="12" 
            strokeLinecap="round" 
            opacity="0.3"
          />
          <circle cx="50" cy="85" r="8" fill="#00A878" className="animate-pulse" />
          <defs>
            <linearGradient id="logo-gradient" x1="20" y1="20" x2="80" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0A2463" />
              <stop offset="1" stopColor="#00A878" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {variant === 'full' && (
        <span className="font-bold text-2xl tracking-tight text-[#0A2463]">
          VERD<span className="text-[#00A878]">Leads</span>
        </span>
      )}
    </div>
  );
};
