
import React, { useState } from 'react';
import { FormData as FormType } from '../types';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  companyType?: string;
  revenue?: string;
  challenges?: string;
}

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  
  const [formData, setFormData] = useState<Partial<FormType>>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    companyType: '',
    revenue: '',
    challenges: '',
    website: '',
    source: ''
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email?.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company?.trim()) newErrors.company = 'Company name is required';
    if (!formData.companyType) newErrors.companyType = 'Please select a company type';
    if (!formData.revenue) newErrors.revenue = 'Please select revenue range';
    if (!formData.challenges?.trim()) {
      newErrors.challenges = 'Please describe your challenges';
    } else if (formData.challenges.length < 10) {
      newErrors.challenges = 'Please provide a bit more detail (min 10 chars)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
    console.log('Validated Form Submitted:', formData);
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

  const InputField = ({ label, name, type = "text", placeholder = "", icon = "user", required = true }: any) => (
    <div className="space-y-1.5 flex-1">
      <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
        <i className={`fas fa-${icon} text-[#00A878] w-4`}></i>
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name as keyof FormType] || ''}
        onChange={handleInputChange}
        className={`w-full bg-slate-50 border-2 rounded-xl px-4 py-3 outline-none transition-all duration-300 ${
          errors[name as keyof FormErrors] 
            ? 'border-rose-400 focus:border-rose-500 bg-rose-50/30' 
            : 'border-slate-100 focus:border-[#00A878] focus:bg-white'
        }`}
      />
      {errors[name as keyof FormErrors] && (
        <p className="text-[11px] text-rose-500 font-medium italic animate-slide-down">
          {errors[name as keyof FormErrors]}
        </p>
      )}
    </div>
  );

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-primary py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Start Scaling</h1>
          <p className="text-xl opacity-90">Risk-Free Consultation. No Long-Term Commitments.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 relative">
            <div className="absolute -top-5 -right-5 bg-gradient-secondary text-white px-6 py-2 rounded-full font-bold shadow-lg transform rotate-3 text-sm">
              <i className="fas fa-medal mr-2"></i>
              Month-to-Month
            </div>
            
            <h2 className="text-3xl font-extrabold text-[#0A2463] mb-8">Request Your Blueprint</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <InputField label="First Name" name="firstName" icon="user" />
                <InputField label="Last Name" name="lastName" icon="user" />
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <InputField label="Email Address" name="email" type="email" icon="envelope" />
                <InputField label="Company Name" name="company" icon="building" />
              </div>

              <InputField label="Company Website" name="website" type="url" icon="globe" required={false} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <i className="fas fa-industry text-[#00A878] w-4"></i>
                    Company Type *
                  </label>
                  <select 
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border-2 rounded-xl px-4 py-3 outline-none transition-all duration-300 ${
                      errors.companyType ? 'border-rose-400' : 'border-slate-100 focus:border-[#00A878]'
                    }`}
                  >
                    <option value="">Select...</option>
                    <option value="SaaS/Tech">SaaS/Technology</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Agency">Agency</option>
                    <option value="Consulting">Consulting</option>
                  </select>
                  {errors.companyType && <p className="text-[11px] text-rose-500 italic">{errors.companyType}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <i className="fas fa-chart-line text-[#00A878] w-4"></i>
                    Monthly Revenue *
                  </label>
                  <select 
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border-2 rounded-xl px-4 py-3 outline-none transition-all duration-300 ${
                      errors.revenue ? 'border-rose-400' : 'border-slate-100 focus:border-[#00A878]'
                    }`}
                  >
                    <option value="">Select...</option>
                    <option value="<50k">Under $50K</option>
                    <option value="50-200k">$50K-$200K</option>
                    <option value="200k-1M">$200K-$1M</option>
                    <option value="1M+">$1M+</option>
                  </select>
                  {errors.revenue && <p className="text-[11px] text-rose-500 italic">{errors.revenue}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <i className="fas fa-exclamation-circle text-[#00A878] w-4"></i>
                  Lead Gen Challenges *
                </label>
                <textarea 
                  name="challenges"
                  rows={4} 
                  value={formData.challenges}
                  onChange={handleInputChange}
                  placeholder="Tell us about your current sales process and bottlenecks..."
                  className={`w-full bg-slate-50 border-2 rounded-xl px-4 py-3 outline-none transition-all duration-300 ${
                    errors.challenges ? 'border-rose-400' : 'border-slate-100 focus:border-[#00A878]'
                  }`}
                />
                {errors.challenges && <p className="text-[11px] text-rose-500 italic">{errors.challenges}</p>}
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold shadow-xl transition-all text-lg flex items-center justify-center gap-3 ${
                  loading 
                    ? 'bg-slate-400 cursor-not-allowed text-white' 
                    : 'bg-gradient-secondary text-white hover:scale-[1.02] hover:shadow-2xl active:scale-100'
                }`}
              >
                {loading ? (
                  <>
                    <i className="fas fa-circle-notch animate-spin"></i>
                    Processing...
                  </>
                ) : (
                  <>
                    Apply for a Strategy Session
                    <i className="fas fa-arrow-right text-sm"></i>
                  </>
                )}
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
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#00A878]/10 rounded-xl flex items-center justify-center text-xl text-[#00A878] group-hover:bg-[#00A878] group-hover:text-white transition-all duration-300">
                        <i className={`${info.isFab ? 'fab' : 'fas'} fa-${info.i}`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A2463] text-sm">{info.t}</h4>
                        <p className="text-slate-500 group-hover:text-[#00A878] transition-colors">{info.p}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-[#1A1A2E] p-10 rounded-3xl shadow-lg text-white">
               <h3 className="text-2xl font-bold mb-8">The VERD Guarantee</h3>
               <div className="space-y-8 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                  {[
                    { n: '1', t: 'Asset Ownership', p: 'We build your system inside your accounts. You own the assets forever.' },
                    { n: '2', t: 'No Risk Contracts', p: 'We work on performance. If we don\'t deliver, you don\'t pay.' },
                    { n: '3', t: 'Full Transparency', p: 'Live dashboard access with 100% visibility into every lead.' }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 relative z-10">
                      <div className="w-10 h-10 bg-[#00A878] rounded-full flex items-center justify-center font-bold text-white shadow-lg shrink-0">
                        {step.n}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{step.t}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{step.p}</p>
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
