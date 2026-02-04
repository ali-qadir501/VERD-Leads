
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-primary py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Who We Are</h1>
          <p className="text-xl opacity-90">Mission-Driven B2B Growth Partners</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-[#0A2463] mb-8">Our Story</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded in 2024, VERDLeads emerged from a simple observation: while AI was revolutionizing marketing, most B2B companies were still using manual, inconsistent methods for lead generation.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We saw an opportunity to create the first AI-native B2B lead generation agency specifically designed for the unique sales cycles and decision-making processes of technology companies and professional service firms.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-[400px] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/800/600?grayscale" alt="Team Office" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="text-4xl font-extrabold text-[#00A878]">2024</div>
              <div className="text-slate-500 font-bold uppercase text-xs tracking-widest">Year Founded</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-[#0A2463] mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { i: 'brain', t: 'Intelligence Over Automation', p: 'We use AI to enhance human strategy, not replace it. Every campaign is built on deep understanding.' },
              { i: 'eye', t: 'Transparency in Results', p: 'No vanity metrics. We focus on qualified meetings booked, pipeline created, and revenue influenced.' },
              { i: 'handshake', t: 'Partnership Mindset', p: 'We\'re an extension of your team, not just another vendor. Your growth is our success metric.' },
              { i: 'rocket', t: 'Continuous Innovation', p: 'The AI landscape evolves daily. We stay ahead so you don\'t have to.' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
                <div className="w-12 h-12 bg-[#00A878]/10 rounded-xl flex items-center justify-center text-2xl text-[#00A878] mb-6">
                  <i className={`fas fa-${v.i}`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-4">{v.t}</h3>
                <p className="text-slate-500 leading-relaxed">{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
