
import React from 'react';

const Leaders: React.FC = () => {
  const leaders = [
    { 
      name: 'Qadir Ali', 
      role: 'Founder & CEO', 
      bio: 'A strategic visionary in B2B growth systems. Qadir specializes in building high-scale outbound infrastructure that merges technical AI automation with human-centric sales psychology.',
      stats: ['Infrastructure Expert', 'B2B Growth Strategist', 'AI Systems Architect'],
      image: 'qadir-ali.jpg',
      icon: 'user-tie'
    },
    { 
      name: 'Dr. Maya Chen', 
      role: 'Chief Technology Officer', 
      bio: '10+ years in AI/ML development, built custom AI solutions for Fortune 500 companies. Architect of the VERD Waterfall Enrichment engine.',
      stats: ['AI/ML Specialist', 'PhD in Computer Science', 'Data Privacy Expert'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      icon: 'code'
    },
    { 
      name: 'Michael Rodriguez', 
      role: 'Head of Client Strategy', 
      bio: '12+ years in B2B enterprise sales, managed $50M+ enterprise sales portfolios. Expert in high-ticket appointment setting and close-rate optimization.',
      stats: ['Enterprise Sales Expert', 'Strategic Partnerships', 'Pipeline Optimizer'],
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
      icon: 'chart-line'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-primary py-32 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #00A878 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl font-extrabold mb-6 tracking-tight">Meet the <span className="text-[#00A878]">Founders</span></h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed font-medium">
            The technical architects and strategic visionaries engineering the future of B2B outbound performance.
          </p>
        </div>
      </section>

      {/* Leaders Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {leaders.map((member, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-[0_40px_80px_-20px_rgba(10,36,99,0.2)] hover:-translate-y-4 transition-all duration-700 cursor-default"
              >
                <div className="h-72 bg-slate-50 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-b from-[#0A2463]/10 to-transparent"></div>
                   <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#00A878]/5 rounded-full blur-3xl group-hover:bg-[#00A878]/15 transition-colors duration-700"></div>
                   
                   <div className="relative z-10 w-52 h-52 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-slate-200">
                     <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top contrast-[1.05] group-hover:scale-110 transition-all duration-1000 ease-out" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement?.classList.add('bg-gradient-primary');
                        const icon = document.createElement('i');
                        icon.className = 'fas fa-user-tie text-white text-5xl opacity-40';
                        (e.target as HTMLImageElement).parentElement?.appendChild(icon);
                      }}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   </div>

                   {member.role.includes('Founder') && (
                     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#00A878] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl z-20 transform group-hover:scale-110 transition-transform">
                       Principal
                     </div>
                   )}
                </div>

                <div className="p-10 text-center">
                  <h3 className="text-3xl font-bold text-[#0A2463] mb-2 group-hover:text-[#00A878] transition-colors duration-500 tracking-tight">{member.name}</h3>
                  <p className="text-[#00A878] font-black mb-8 text-[11px] uppercase tracking-[0.2em]">{member.role}</p>
                  <div className="w-12 h-1 bg-slate-100 mx-auto mb-8 group-hover:w-24 group-hover:bg-[#00A878] transition-all duration-500"></div>
                  <p className="text-slate-500 mb-10 leading-relaxed text-sm italic px-4 font-medium opacity-80 group-hover:opacity-100">
                    "{member.bio}"
                  </p>
                  <div className="flex flex-col gap-3">
                    {member.stats.map(s => (
                      <div key={s} className="flex items-center justify-center gap-3 text-[10px] text-slate-600 font-black uppercase tracking-widest bg-slate-50 py-3 rounded-2xl border border-transparent group-hover:border-[#00A878]/10 group-hover:bg-white transition-all duration-500">
                        <i className="fas fa-check-double text-[#00A878]"></i>
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

      {/* Signature Section */}
      <section className="py-32 bg-[#0A2463] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00A878]/10 blur-[120px] rounded-full translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <i className="fas fa-quote-right text-8xl text-[#00A878]/10 mb-12"></i>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 leading-[1.2] italic tracking-tight">
            "At VERDLeads, we don't just provide leads; we build the <span className="text-[#00A878]">intellectual property</span> and technical assets that empower our clients to own their growth forever."
          </h2>
          
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-[5px] border-[#00A878]/40 p-1.5 mb-8 shadow-[0_0_50px_rgba(0,168,120,0.3)] hover:scale-110 transition-transform duration-700 bg-slate-800 flex items-center justify-center overflow-hidden">
              <img 
                src="qadir-ali.jpg" 
                alt="Qadir Ali Signature" 
                className="w-full h-full rounded-full object-cover object-top contrast-[1.05]" 
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement?.classList.add('bg-gradient-primary');
                }}
              />
              <i className="fas fa-user-tie text-white text-4xl opacity-20 absolute pointer-events-none"></i>
            </div>
            <div className="w-20 h-1 bg-gradient-secondary mb-6 rounded-full"></div>
            <p className="text-3xl font-extrabold text-white tracking-tighter">Qadir Ali</p>
            <p className="text-xs text-[#00A878] font-black uppercase tracking-[0.5em] mt-3">Founder & Principal</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaders;
