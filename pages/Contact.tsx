
import React, { useState } from 'react';
import { FormData } from '../types';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Partial<FormData>>({
    companyType: '',
    revenue: '',
    source: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form Submitted:', formData);
  };

  if (submitted) {
    return (
      <div className="py-32 bg-white text-center animate-fade-in">
        <div className="max-w-xl mx-auto px-4">
          <div className="w-24 h-24 bg-[#00A878]/10 text-[#00A878] rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-bounce">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2 className="text-4xl font-extrabold text-[#0A2463] mb-6">Request Received!</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Thank you for reaching out. Our AI system is analyzing your information and a team member will contact you within 24 hours to schedule your strategy session.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-[#00A878] font-bold underline hover:no-underline"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-primary py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-xl opacity-90">Start Scaling Your B2B Pipeline Today</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-extrabold text-[#0A2463] mb-8">Request a Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block"><i className="fas fa-user mr-2 text-[#00A878]"></i>First Name *</label>
                  <input required type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-[#00A878] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block"><i className="fas fa-user mr-2 text-[#00A878]"></i>Last Name *</label>
                  <input required type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-[#00A878] outline-none transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block"><i className="fas fa-envelope mr-2 text-[#00A878]"></i>Email *</label>
                  <input required type="email" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-[#00A878] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block"><i className="fas fa-building mr-2 text-[#00A878]"></i>Company Name *</label>
                  <input required type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-[#00A878] outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 block"><i className="fas fa-globe mr-2 text-[#00A878]"></i>Company Website</label>
                <input type="url" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-[#00A878] outline-none transition-colors" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block"><i className="fas fa-industry mr-2 text-[#00A878]"></i>Company Type *</label>
                  <select required className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-[#00A878] outline-none transition-colors">
                    <option value="">Select...</option>
                    <option value="SaaS/Tech">SaaS/Technology</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Agency">Agency</option>
                    <option value="Consulting">Consulting</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block"><i className="fas fa-chart-line mr-2 text-[#00A878]"></i>Monthly Revenue *</label>
                  <select required className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-[#00A878] outline-none transition-colors">
                    <option value="">Select...</option>
                    <option value="<50k">Under $50K</option>
                    <option value="50-200k">$50K-$200K</option>
                    <option value="200k-1M">$200K-$1M</option>
                    <option value="1M+">$1M+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 block"><i className="fas fa-exclamation-circle mr-2 text-[#00A878]"></i>Lead Gen Challenges *</label>
                <textarea required rows={4} className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-[#00A878] outline-none transition-colors"></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-secondary text-white py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-all text-lg">
                Submit Request
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
               <h3 className="text-2xl font-bold text-[#0A2463] mb-6">Contact Information</h3>
               <div className="space-y-6">
                  {[
                    { i: 'envelope', t: 'Email', p: 'hello@verdleads.com' },
                    { i: 'phone', t: 'Phone', p: '(555) 123-4567' },
                    { i: 'linkedin', t: 'LinkedIn', p: 'linkedin.com/company/verdleads', isFab: true }
                  ].map((info, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#00A878]/10 rounded-xl flex items-center justify-center text-xl text-[#00A878]">
                        <i className={`${info.isFab ? 'fab' : 'fas'} fa-${info.i}`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A2463] text-sm">{info.t}</h4>
                        <p className="text-slate-500">{info.p}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-[#1A1A2E] p-10 rounded-3xl shadow-lg text-white">
               <h3 className="text-2xl font-bold mb-8">What Happens Next</h3>
               <div className="space-y-8 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                  {[
                    { n: '1', t: 'Strategy Session', p: 'We\'ll contact you within 24 hours to schedule a discovery call' },
                    { n: '2', t: 'Deep Dive Analysis', p: 'We analyze your current process, ICP, and goals' },
                    { n: '3', t: 'Custom Proposal', p: 'We prepare a tailored proposal with clear projections' }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 relative z-10">
                      <div className="w-10 h-10 bg-[#00A878] rounded-full flex items-center justify-center font-bold text-white shadow-lg shrink-0">
                        {step.n}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{step.t}</h4>
                        <p className="text-slate-400 text-sm">{step.p}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
