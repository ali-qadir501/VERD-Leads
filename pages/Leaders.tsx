
import React from 'react';

const Leaders: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-primary py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Our Leaders</h1>
          <p className="text-xl opacity-90">The Team Behind VERDLeads</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                name: 'Alex Jordan', 
                role: 'Founder & CEO', 
                bio: '8+ years in B2B sales and marketing, with expertise in AI automation and lead generation strategy.',
                stats: ['4,500+ Agencies Mentored', 'Multi-Million $ Agency'],
                icon: 'user-tie'
              },
              { 
                name: 'Dr. Maya Chen', 
                role: 'Chief Technology Officer', 
                bio: '10+ years in AI/ML development, built custom AI solutions for Fortune 500 companies.',
                stats: ['AI/ML Specialist', 'PhD in Computer Science'],
                icon: 'code'
              },
              { 
                name: 'Michael Rodriguez', 
                role: 'Head of Client Strategy', 
                bio: '12+ years in B2B enterprise sales, managed $50M+ enterprise sales portfolios.',
                stats: ['Enterprise Sales Expert', 'Strategic Partnerships'],
                icon: 'chart-line'
              }
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-50 hover:shadow-2xl transition-all">
                <div className="h-48 bg-gradient-primary flex items-center justify-center">
                   <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl text-[#0A2463] shadow-inner">
                     <i className={`fas fa-${member.icon}`}></i>
                   </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0A2463] mb-1">{member.name}</h3>
                  <p className="text-[#00A878] font-bold mb-6 text-sm uppercase tracking-widest">{member.role}</p>
                  <p className="text-slate-500 mb-8 leading-relaxed">{member.bio}</p>
                  <div className="space-y-3">
                    {member.stats.map(s => (
                      <div key={s} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <i className="fas fa-check text-[#00A878] text-xs"></i>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaders;
