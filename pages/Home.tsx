
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HomeProps {
  onPageChange: (page: Page) => void;
}

const testimonials = [
  {
    quote: "VERDLeads transformed our pipeline generation. We went from inconsistent manual outreach to a predictable stream of qualified enterprise meetings.",
    author: "Sarah Chen",
    role: "VP of Sales",
    company: "CloudScale AI",
    avatar: "SC",
    verified: true,
    result: "$1.2M Pipeline in 90 Days"
  },
  {
    quote: "The level of personalization their AI achieves is staggering. Our response rates jumped by 300% within the first two months of partnership.",
    author: "James Miller",
    role: "Director of Growth",
    company: "SaaSFlow",
    avatar: "JM",
    verified: true,
    result: "324% Increase in Demos"
  },
  {
    quote: "Finally, an agency that understands the technical nuances of B2B. They don't just send leads; they send high-intent future customers.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "Nexus Tech",
    avatar: "ER",
    verified: true,
    result: "67% Reduction in CAC"
  }
];

const partners = [
  "Microsoft for Startups", "Apollo.io Partner", "Clay Certified", "HubSpot Expert", "SmartLead Power User", "LinkedIn Sales Nav"
];

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const [typingText, setTypingText] = useState('');
  const phrases = [' That Actually Books Meetings', ' For B2B Companies', ' Powered by AI'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [counter, setCounter] = useState(51240500);
  const [imgError, setImgError] = useState(false);

  // Reference to the actual founder photo provided
  const ceoImagePath = "qadir-ali.jpg";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + Math.floor(Math.random() * 50));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00A878]/10 text-[#00A878] rounded-full text-xs font-bold uppercase tracking-widest animate-fade-in">
              <i className="fas fa-shield-halved"></i>
              No Long-Term Contracts. Pay for Performance.
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
              <span className="text-gradient">AI-Powered</span> B2B Lead Generation
              <span className="text-[#00A878] border-r-4 border-[#00A878] ml-2 animate-blink">{typingText}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              We build your high-performance outbound engine. You own the infrastructure. We drive the results.
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
                onClick={() => onPageChange('impact')}
                className="bg-white text-[#0A2463] border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-[#00A878] hover:text-[#00A878] transition-all flex items-center justify-center gap-2"
              >
                <i className="fas fa-chart-line"></i>
                View Case Studies
              </button>
            </div>
          </div>

          <div className="relative h-[600px] flex items-center justify-center">
             <div className="absolute w-[130%] h-[130%] bg-gradient-to-tr from-[#00A878]/15 via-transparent to-[#0A2463]/10 rounded-full blur-[140px] animate-pulse"></div>
             
             {/* Growth Orb Container */}
             <div className="relative w-80 h-80 bg-[#0A2463] rounded-full flex items-center justify-center shadow-[0_50px_100px_-20px_rgba(10,36,99,0.5),_0_0_80px_rgba(0,168,120,0.1)] animate-float overflow-visible group border-4 border-white/20">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none blur-sm"></div>

                {/* SVG Visualizations */}
                <svg className="w-full h-full p-16 relative z-10 overflow-visible" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 150 L60 120 L90 140 L130 80 L170 40" stroke="rgba(255,255,255,0.05)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path className="animate-draw-line" d="M30 150 L60 120 L90 140 L130 80 L170 40" stroke="url(#hero-gradient)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="400" strokeDashoffset="400" />
                  <circle cx="30" cy="150" r="6" fill="#00A878" className="animate-ping-slow" />
                  <circle cx="30" cy="150" r="4" fill="#00A878" />
                  <circle cx="170" cy="40" r="10" fill="#00A878" className="animate-pulse-soft opacity-30" />
                  <circle cx="170" cy="40" r="6" fill="#00A878" />
                  <circle r="4" fill="white" className="animate-tracer shadow-xl">
                    <animateMotion path="M30 150 L60 120 L90 140 L130 80 L170 40" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <defs>
                    <linearGradient id="hero-gradient" x1="30" y1="150" x2="170" y2="40" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00A878" />
                      <stop offset="1" stopColor="#3E92CC" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Elements */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center animate-bounce-slow border border-slate-50 overflow-hidden z-20 group-hover:scale-110 transition-transform duration-500">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#00A878]/10 to-transparent"></div>
                   <i className="fas fa-rocket text-[#00A878] text-5xl transform group-hover:rotate-12 transition-transform"></i>
                </div>
                
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#00A878] rounded-full shadow-2xl flex items-center justify-center animate-pulse-soft border-4 border-white z-20">
                   <i className="fas fa-bolt text-white text-4xl"></i>
                </div>

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#00A878]/90 backdrop-blur-md text-white px-10 py-3 rounded-full text-[12px] font-black uppercase tracking-[0.5em] shadow-2xl transform group-hover:scale-110 transition-transform border-2 border-white/50 z-30">
                   VERIFIED
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Partner Strip */}
      <div className="bg-white py-12 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Integration Ecosystem</p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {partners.map(p => (
              <div key={p} className="flex items-center gap-3 font-bold text-slate-600 text-sm whitespace-nowrap">
                <i className="fas fa-bolt text-[#00A878]"></i>
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-slate-50 rounded-[4rem] overflow-hidden grid md:grid-cols-12 items-center shadow-inner relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] opacity-50"></div>
              
              <div className="md:col-span-5 flex justify-center items-center p-12 md:p-16 relative z-10">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-[10px] border-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.25)] overflow-hidden relative group bg-slate-200">
                  {!imgError ? (
                    <img 
                      src={ceoImagePath} 
                      alt="Qadir Ali Founder" 
                      className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-[2000ms] ease-out contrast-[1.1] brightness-[1.02]" 
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-primary flex items-center justify-center text-white">
                      <div className="text-center">
                        <i className="fas fa-user-tie text-7xl opacity-50 mb-4 block"></i>
                        <p className="text-xs font-black uppercase tracking-widest">Founder Profile</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/40 via-transparent to-transparent opacity-60 mix-blend-multiply"></div>
                </div>
              </div>
              <div className="md:col-span-7 p-12 md:p-20 relative z-10">
                <div className="w-20 h-20 bg-[#00A878]/10 rounded-full flex items-center justify-center mb-10">
                  <i className="fas fa-quote-left text-3xl text-[#00A878]"></i>
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A2463] mb-12 leading-[1.2] tracking-tight">
                  "Most agencies hold your data hostage. We build your engine inside your own accounts because <span className="text-[#00A878]">infrastructure is an asset</span>, not a subscription."
                </h2>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-1.5 bg-gradient-secondary rounded-full"></div>
                  <div>
                    <p className="font-bold text-3xl text-[#0A2463] tracking-tight">Qadir Ali</p>
                    <p className="text-xs text-slate-500 font-black uppercase tracking-[0.3em] mt-1">Founder & CEO, VERDLeads</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* The VERD Advantage Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-[#0A2463] mb-4">The <span className="text-gradient">VERD</span> Advantage</h2>
            <p className="text-slate-500 text-lg">We don't just send leads. We architect growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: 'Infrastructure Ownership', p: 'We build inside YOUR accounts. If you leave, you keep the entire high-performance stack.', i: 'shield-check', color: 'bg-blue-600' },
              { t: 'Performance Guarantees', p: 'Zero-risk model. We only grow if you grow. No locked-in long-term contracts.', i: 'bolt', color: 'bg-[#00A878]' },
              { t: 'Technical Lead Enrichment', p: 'Proprietary waterfall enrichment using Clay, Apollo, and custom AI scrapers.', i: 'microchip', color: 'bg-indigo-600' },
              { t: 'Live Performance Hub', p: 'Access our custom dashboards to monitor real-time pipeline and ROI metrics.', i: 'gauge-high', color: 'bg-orange-600' }
            ].map((adv, idx) => (
              <div key={idx} className="group p-10 bg-slate-50 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
                <div className={`w-16 h-16 ${adv.color} rounded-2xl flex items-center justify-center text-2xl text-white mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  <i className={`fas fa-${adv.i}`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-4">{adv.t}</h3>
                <p className="text-slate-500 leading-relaxed text-sm opacity-80 group-hover:opacity-100 transition-opacity">{adv.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0A2463] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Verified <span className="text-[#00A878]">Outbound</span> Results</h2>
            <p className="text-slate-400 text-lg">Trusted by high-growth SaaS & Tech enterprises</p>
          </div>

          <div className="relative max-w-4xl mx-auto h-[450px] md:h-[400px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex flex-col items-center justify-center text-center ${
                  activeTestimonial === i 
                    ? 'opacity-100 scale-100 translate-x-0' 
                    : 'opacity-0 scale-90 translate-x-20 pointer-events-none'
                }`}
              >
                <div className="bg-[#00A878]/20 text-[#00A878] px-6 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-10 border border-[#00A878]/40">
                  <i className="fas fa-chart-line mr-2"></i>
                  {t.result}
                </div>
                <p className="text-2xl md:text-4xl font-medium text-slate-100 mb-10 leading-relaxed italic px-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                    {t.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-bold text-xl">{t.author}</h4>
                    <p className="text-slate-400 text-sm font-medium">{t.role} @ {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  activeTestimonial === i ? 'bg-[#00A878] w-12' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes draw-line { from { stroke-dashoffset: 400; } to { stroke-dashoffset: 0; } }
        .animate-draw-line { animation: draw-line 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        @keyframes tracer { 0% { opacity: 0; } 5% { opacity: 1; } 95% { opacity: 1; } 100% { opacity: 0; } }
        .animate-tracer { animation: tracer 4s linear infinite; }
        @keyframes spin-slow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        @keyframes spin-reverse { from { transform: translate(-50%, -50%) rotate(360deg); } to { transform: translate(-50%, -50%) rotate(0deg); } }
        .animate-spin-reverse { animation: spin-reverse 20s linear infinite; }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25px); } }
        .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
        @keyframes ping-slow { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(3); opacity: 0; } }
        .animate-ping-slow { animation: ping-slow 2.5s infinite; }
      `}</style>
    </div>
  );
};

export default Home;
