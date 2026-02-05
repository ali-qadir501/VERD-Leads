
import React from 'react';

const caseStudies = [
  {
    id: 'cs1',
    industry: 'SaaS Infrastructure',
    client: 'CloudScale AI',
    metrics: [
      { label: 'Meetings Booked', value: '42' },
      { label: 'Pipeline Generated', value: '$1.4M' },
      { label: 'CAC Reduction', value: '54%' }
    ],
    challenge: 'Manual SDR outreach was inconsistent and targeting was too broad, leading to a 0.5% response rate and high burn.',
    solution: 'Implemented "Waterfall Enrichment" in Clay to identify companies with specific cloud-spend signals, followed by AI-personalized copy based on recent funding news.',
    playbook: ['Waterfall Enrichment', 'Signal-Based Copy', 'Domain Warmup'],
    quote: "We went from guessing who to email to knowing exactly who needs our solution today.",
    author: "Sarah Chen, VP Sales"
  },
  {
    id: 'cs2',
    industry: 'Fintech Enterprise',
    client: 'PayNexus',
    metrics: [
      { label: 'Response Rate', value: '18.4%' },
      { label: 'Enterprise Demos', value: '29' },
      { label: 'ROI', value: '12x' }
    ],
    challenge: 'Targeting C-level executives at Tier 1 banks was yielding zero results through standard LinkedIn automation.',
    solution: 'A high-touch Multi-channel engine combining personalized Loom videos and LinkedIn Voice notes triggered by intent data.',
    playbook: ['Multi-Channel Engine', 'Loom Automation', 'Intent Monitoring'],
    quote: "VERDLeads managed to get us into rooms we couldn't crack for two years.",
    author: "James Miller, Director of Growth"
  }
];

const Impact: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-primary py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Our Impact</h1>
          <p className="text-xl opacity-90">Hard Data. Real Revenue. Zero Fluff.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {[
              { i: 'calendar-check', t: '1,500+', p: 'Meetings Booked' },
              { i: 'users', t: '75+', p: 'Clients Served' },
              { i: 'chart-bar', t: '$50M+', p: 'Pipeline Generated' },
              { i: 'clock', t: '12,000+', p: 'Hours Saved' }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-[#00A878]/10 rounded-2xl flex items-center justify-center text-3xl text-[#00A878] mx-auto mb-6 group-hover:bg-[#00A878] group-hover:text-white transition-all duration-300">
                  <i className={`fas fa-${stat.i}`}></i>
                </div>
                <h3 className="text-4xl font-extrabold text-[#0A2463] mb-2">{stat.t}</h3>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{stat.p}</p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-extrabold text-[#0A2463] text-center mb-16">Industry Case Studies</h2>
          
          <div className="space-y-20">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 shadow-xl">
                <div className="grid lg:grid-cols-12">
                  {/* Sidebar Info */}
                  <div className="lg:col-span-4 bg-[#0A2463] p-12 text-white">
                    <span className="inline-block px-4 py-1 bg-[#00A878] text-[10px] font-bold rounded-full uppercase tracking-widest mb-6">
                      {cs.industry}
                    </span>
                    <h3 className="text-3xl font-bold mb-8">{cs.client}</h3>
                    
                    <div className="space-y-10">
                      {cs.metrics.map(m => (
                        <div key={m.label}>
                          <div className="text-4xl font-extrabold text-[#00A878] mb-1">{m.value}</div>
                          <div className="text-sm text-slate-300 font-medium">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/10">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Playbook Used:</div>
                      <div className="flex flex-wrap gap-2">
                        {cs.playbook.map(p => (
                          <span key={p} className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-bold text-white">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="lg:col-span-8 p-12 bg-white">
                    <div className="space-y-12">
                      <div>
                        <h4 className="text-xs font-bold text-[#00A878] uppercase tracking-widest mb-4 flex items-center gap-2">
                          <i className="fas fa-exclamation-triangle"></i>
                          The Challenge
                        </h4>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                          {cs.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-[#0A2463] uppercase tracking-widest mb-4 flex items-center gap-2">
                          <i className="fas fa-magic"></i>
                          The VERD Solution
                        </h4>
                        <p className="text-lg text-slate-500 leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>

                      <div className="pt-10 border-t border-slate-100">
                        <blockquote className="italic text-2xl text-slate-400 mb-6 leading-relaxed">
                          "{cs.quote}"
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#00A878] rounded-full flex items-center justify-center text-white font-bold">
                            {cs.author.charAt(0)}
                          </div>
                          <div className="font-bold text-[#0A2463]">{cs.author}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Wall - Quick Wins */}
          <div className="mt-32">
            <h3 className="text-2xl font-bold text-[#0A2463] text-center mb-12">More Client Quick Wins</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { c: 'Fintech SaaS', r: '+12 demos / wk', p: 'Clay Enrichment' },
                { c: 'MarTech Agency', r: '$240k pipeline', p: 'Waterfall Leads' },
                { c: 'CyberSecurity', r: '14% Reply Rate', p: 'AI Personalization' },
                { c: 'HR Tech', r: '0% Email Bounce', p: 'Waterfalls' },
                { c: 'Logistics AI', r: '21 Meetings', p: 'SmartLead Outbound' },
                { c: 'DevOps Tool', r: '4x ROI', p: 'Signal Monitoring' }
              ].map((win, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
                  <div className="text-[#00A878] font-bold text-2xl mb-1">{win.r}</div>
                  <div className="text-[#0A2463] font-bold text-sm mb-4">{win.c}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">via {win.p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-slate-50 py-24 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Want results like these?</h2>
          <p className="text-slate-500 mb-10 text-lg leading-relaxed">We only take on 3 new clients per month to ensure absolute quality and focus. Secure your slot now.</p>
          <button className="bg-gradient-secondary text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-all">
            Apply for Strategy Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default Impact;
