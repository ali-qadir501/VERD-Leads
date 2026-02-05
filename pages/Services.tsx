
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-primary py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">The Outbound Machine</h1>
          <p className="text-xl opacity-90">We build the infrastructure you keep forever.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
          {[
            { 
              t: 'Waterfall Enrichment Playbook', 
              p: 'We use a proprietary "Waterfall" method in Clay. We check 5+ data sources (Apollo, Findymail, Hunter, Prospeo) to find the valid personal business email with 0% bounce rate. You only pay for valid data.',
              i: 'https://picsum.photos/600/400?tech=1',
              features: ['Multiple Data Provider Cascades', 'AI-Verified Deliverability', 'Real-time Signal Monitoring']
            },
            { 
              t: 'Your Tech, Our Management', 
              p: 'We set up your infrastructure in YOUR name. This means 10+ secondary domains, SmartLead accounts, and Clay workspaces that belong to your company. Even if we stop working together, you keep the engine.',
              i: 'https://picsum.photos/600/400?tech=2',
              features: ['Infrastructure Ownership', 'Domain Reputation Management', 'Fully Scalable Outbound Stack'],
              reverse: true
            },
            { 
              t: 'Hyper-Personalization at Scale', 
              p: 'Our AI doesn\'t just scrape names. It analyzes recent news, LinkedIn posts, and financial reports to write "First Lines" that sound like a human researched them for 30 minutes. 100% relevance, 0% fluff.',
              i: 'https://picsum.photos/600/400?tech=3',
              features: ['Signal-Based AI Writing', 'No "Generic" Templates', 'High-Response Copywriting']
            }
          ].map((s, idx) => (
            <div key={idx} className={`grid md:grid-cols-2 gap-20 items-center ${s.reverse ? 'md:flex-row-reverse' : ''}`}>
              <div className={s.reverse ? 'md:order-2' : ''}>
                <div className="w-12 h-12 bg-[#00A878]/10 text-[#00A878] rounded-xl flex items-center justify-center text-xl mb-6">
                  <i className="fas fa-microchip"></i>
                </div>
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
              <div className={`rounded-3xl overflow-hidden shadow-2xl ${s.reverse ? 'md:order-1' : ''} border-8 border-slate-50`}>
                <img src={s.i} alt={s.t} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blueprint CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #00A878 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-extrabold mb-8">Stop Renting Leads. <span className="text-[#00A878]">Start Building Assets.</span></h2>
          <p className="text-slate-400 mb-12 text-lg leading-relaxed">Most agencies hold your leads and systems hostage. We do the opposite. We build the most advanced B2B sales machine your company has ever seen, inside your own accounts.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#00A878] text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all">
              Claim Your Blueprint
            </button>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <i className="fas fa-lock text-[#00A878]"></i>
              No Long-Term Commitment
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
