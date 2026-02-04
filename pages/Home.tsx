
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HomeProps {
  onPageChange: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const [typingText, setTypingText] = useState('');
  const phrases = [' That Actually Books Meetings', ' For B2B Companies', ' Powered by AI'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex <= currentPhrase.length) {
        setTypingText(currentPhrase.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex >= 0) {
        setTypingText(currentPhrase.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
              <span className="text-gradient">AI-Powered</span> B2B Lead Generation
              <span className="text-[#00A878] border-r-4 border-[#00A878] ml-2 animate-blink">{typingText}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              We help B2B companies in tech, SaaS, and professional services generate predictable pipeline growth using AI-driven outreach and qualification systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <i className="fas fa-calendar-check"></i>
                Request a Consultation
              </button>
              <button 
                onClick={() => onPageChange('services')}
                className="bg-white text-[#0A2463] border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-[#00A878] hover:text-[#00A878] transition-all flex items-center justify-center gap-2"
              >
                <i className="fas fa-play-circle"></i>
                How It Works
              </button>
            </div>
          </div>

          <div className="relative h-[400px] flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#00A878]/5 to-[#0A2463]/5 rounded-full blur-3xl"></div>
             <div className="relative w-72 h-72 bg-gradient-primary rounded-full flex items-center justify-center text-6xl text-white shadow-2xl animate-pulse-soft">
               <i className="fas fa-brain"></i>
               {/* Decorative Nodes */}
               <div className="absolute -top-10 -right-10 w-8 h-8 bg-[#00A878] rounded-full animate-float" style={{ animationDelay: '0.2s' }}></div>
               <div className="absolute -bottom-10 -left-10 w-12 h-12 bg-[#3E92CC] rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
               <div className="absolute top-1/2 -left-20 w-6 h-6 bg-[#00A878] rounded-full animate-float" style={{ animationDelay: '0.8s' }}></div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: '42%', t: 'Increase in qualified meetings', i: 'chart-line' },
            { n: '3.2x', t: 'Higher response rates', i: 'bolt' },
            { n: '67%', t: 'Lower cost per meeting', i: 'dollar-sign' },
            { n: '92%', t: 'Client retention rate', i: 'heart' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-white shadow-lg border border-slate-50 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-[#00A878]/10 rounded-full flex items-center justify-center text-2xl text-[#00A878] mx-auto mb-6">
                <i className={`fas fa-${stat.i}`}></i>
              </div>
              <h3 className="text-4xl font-extrabold text-[#0A2463] mb-2">{stat.n}</h3>
              <p className="text-slate-500 font-medium">{stat.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0A2463] mb-4">From Cold Outreach to <span className="text-gradient">Booked Calendar</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Our AI-powered process delivers qualified meetings for your sales team, 24/7</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: '01', t: 'AI-Powered Prospecting', p: 'Identify and enrich your ideal customer profile with precision targeting', i: 'search', tags: ['Clay', 'Apollo', 'Custom AI'] },
              { s: '02', t: 'Multi-Channel Outreach', p: 'Personalized sequences across email, LinkedIn, and strategic touchpoints', i: 'bullseye', tags: ['SmartLead', 'Expandi', 'AI Copy'] },
              { s: '03', t: 'AI Qualification & Booking', p: 'Conversational AI qualifies leads and books meetings directly into your calendar', i: 'robot', tags: ['Pointwise', 'AI Bots', '24/7'] },
              { s: '04', t: 'Pipeline Intelligence', p: 'Real-time dashboards and ROI tracking in your white-labeled CRM', i: 'chart-pie', tags: ['GHL', 'Dashboards', 'Analytics'] }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg">
                  {step.s}
                </div>
                <div className="bg-white p-10 rounded-2xl shadow-md group-hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#00A878]/10 rounded-xl flex items-center justify-center text-3xl text-[#00A878] mb-8 group-hover:scale-110 transition-transform">
                    <i className={`fas fa-${step.i}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2463] mb-4">{step.t}</h3>
                  <p className="text-slate-500 mb-8 flex-1">{step.p}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-[#0A2463] rounded-full text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-blink { animation: blink 1s infinite; }
      `}</style>
    </div>
  );
};

export default Home;
