
import React from 'react';

const Impact: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-primary py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Our Impact</h1>
          <p className="text-xl opacity-90">Results That Matter for B2B Companies</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {[
              { i: 'calendar-check', t: '1,500+', p: 'Meetings Booked' },
              { i: 'users', t: '75+', p: 'Clients Served' },
              { i: 'chart-bar', t: '$50M+', p: 'Pipeline Generated' },
              { i: 'clock', t: '12,000+', p: 'Hours Saved' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#00A878]/10 rounded-full flex items-center justify-center text-3xl text-[#00A878] mx-auto mb-6">
                  <i className={`fas fa-${stat.i}`}></i>
                </div>
                <h3 className="text-4xl font-extrabold text-[#0A2463] mb-2">{stat.t}</h3>
                <p className="text-slate-500 font-medium">{stat.p}</p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-extrabold text-[#0A2463] text-center mb-16">Case Studies</h2>
          <div className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/3 bg-slate-50 p-12 flex flex-col items-center justify-center border-r">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-3xl text-white mb-6">
                  <i className="fas fa-cloud"></i>
                </div>
                <h4 className="font-bold text-xl text-[#0A2463]">SaaS Platform</h4>
                <p className="text-slate-400 text-sm">Series A • $5M ARR</p>
              </div>
              <div className="md:w-2/3 p-12">
                <div className="grid grid-cols-3 gap-8 mb-10">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-[#00A878]">37</div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Meetings</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-[#00A878]">$850K</div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Pipeline</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-[#00A878]">42%</div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Lower CAC</p>
                  </div>
                </div>
                <blockquote className="italic text-slate-600 border-l-4 border-[#00A878] pl-6 py-2 mb-4 leading-relaxed">
                  "VERDLeads transformed our pipeline generation. We went from inconsistent manual outreach to a predictable stream of qualified enterprise meetings. Their AI system feels like magic, but the results are very real."
                </blockquote>
                <cite className="font-bold text-[#0A2463] not-italic block">— Sarah Chen, VP Sales</cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
