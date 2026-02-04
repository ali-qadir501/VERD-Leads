
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-primary py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">What We Do</h1>
          <p className="text-xl opacity-90">AI-Native Lead Generation for Modern B2B</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
          {[
            { 
              t: 'Precision Prospecting', 
              p: 'We don\'t just buy lists. We use advanced AI tools like Clay and specialized web scraping to identify companies showing real intent and enrichment data that helps us craft hyper-personalized messages.',
              i: 'https://picsum.photos/600/400?1',
              features: ['Intent-based Targeting', 'ICP Enrichment', 'Decision Maker Identification']
            },
            { 
              t: 'Multi-Channel Engines', 
              p: 'Our sequences aren\'t just emails. We orchestrate touchpoints across LinkedIn, cold email, and even physical mail when appropriate, ensuring your brand stays top-of-mind for key decision makers.',
              i: 'https://picsum.photos/600/400?2',
              features: ['Smart Email Deliverability', 'Automated LinkedIn Sequences', 'Coordinated Multi-touch Campaigns'],
              reverse: true
            },
            { 
              t: 'AI-Qualifying Concierge', 
              p: 'When a prospect responds, our AI qualification system takes over, answering basic questions and ensuring they meet your criteria before booking a time on your calendar.',
              i: 'https://picsum.photos/600/400?3',
              features: ['24/7 Response Time', 'Automated Qualification', 'Direct Calendar Booking']
            }
          ].map((s, idx) => (
            <div key={idx} className={`grid md:grid-cols-2 gap-20 items-center ${s.reverse ? 'md:flex-row-reverse' : ''}`}>
              <div className={s.reverse ? 'md:order-2' : ''}>
                <h2 className="text-4xl font-extrabold text-[#0A2463] mb-6">{s.t}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{s.p}</p>
                <ul className="space-y-4">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-3 font-semibold text-[#0A2463]">
                      <i className="fas fa-check-circle text-[#00A878]"></i>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-3xl overflow-hidden shadow-2xl ${s.reverse ? 'md:order-1' : ''}`}>
                <img src={s.i} alt={s.t} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8">Ready to see our AI in action?</h2>
          <p className="text-slate-600 mb-10 text-lg italic">"Our goal isn't just to automate your outreach, but to make it smarter and more human-centric at scale."</p>
          <button className="bg-gradient-secondary text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-all">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
