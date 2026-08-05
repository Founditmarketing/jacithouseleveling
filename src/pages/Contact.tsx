import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Menu,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  HardHat,
  Handshake,
  ShieldCheck,
  Construction,
  Hammer,
  House,
  Mountain,
  Wrench,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Maximize,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import PageSEO from '../components/PageSEO';

const NavLink = ({ children, href = "#" }: { children: React.ReactNode, href?: string }) => (
  <a href={href} className="text-sm font-bold tracking-wide uppercase hover:text-jac-green transition-colors flex items-center gap-1 group">
    {children}
  </a>
);

const BrandName = () => (
  <span className="inline-flex items-baseline font-normal tracking-normal lowercase">
    <span style={{ fontFamily: "'Birds of Paradise  Personal use', cursive" }} className="text-[1.5em] leading-none mr-0 capitalize">j</span>
    <span style={{ fontFamily: "'Ethnocentric Rg', sans-serif" }} className="text-[0.85em]">ac-it</span>
  </span>
);

const FooterBrandName = () => (
  <span className="inline-flex items-baseline font-normal tracking-normal lowercase">
    <span style={{ fontFamily: "'Birds of Paradise  Personal use', cursive" }} className="text-[1.5em] leading-none mr-0 capitalize">j</span>
    <span style={{ fontFamily: "'Ethnocentric Rg', sans-serif" }} className="text-[0.85em]">ac-it</span>
  </span>
);

export default function Contact({ isLoading }: { isLoading?: boolean }) {
  const [formData, setFormData] = useState({ fname: '', lname: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    try {
      const response = await fetch('https://www.founditos.com/api/contact-form/415c5511-d4c8-44cb-b6f8-0eda857da922', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.fname} ${formData.lname}`.trim(),
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send message');
      setStatus('success');
      setFormData({ fname: '', lname: '', email: '', phone: '', message: '' });
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message || 'An error occurred while sending your message. Please try again.');
    }
  };
  return (
    <>
      <PageSEO
        title="Contact Us | Jac-It House Leveling & Foundation Repair"
        description="Schedule a free foundation inspection with Jac-It House Leveling & Foundation Repair. Call 1-877-65-JACIT or reach out online."
        path="/contact"
      />
      {/* Contact Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-jac-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/jacitimage.jpg"
            alt="Contact Us background"
            className="w-full h-full object-cover object-center grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-jac-charcoal/80 mix-blend-multiply"></div>
          {/* Subtle Green Overlay */}
          <div className="absolute inset-0 bg-jac-green/20 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.8 : 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white uppercase tracking-tight mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.9 : 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium"
          >
            Reach out today for a free evaluation. Our experts are ready to secure your property's foundation with lasting results.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-jac-charcoal py-24 relative z-10">
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/10 -translate-x-1/2"></div>
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 relative">

          {/* Info & Map - Left Side */}
          <div className="flex flex-col gap-10 lg:pr-8">
            <div>
              <h2 className="font-display font-black text-4xl lg:text-5xl uppercase mb-6 text-white">Contact Us</h2>
              <div className="space-y-6 text-gray-300">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-jac-lime shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wide text-sm mb-1">Phone</h5>
                    <div className="flex flex-col gap-1">
                      <a href="tel:18776552248" className="text-xl font-medium hover:text-jac-lime transition-colors block">1-877-65-JACIT</a>
                      <a href="tel:14303526085" className="text-xl font-medium hover:text-jac-lime transition-colors block">1-430-352-6085</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-jac-lime shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wide text-sm mb-1">Email</h5>
                    <a href="mailto:james@jac-itfoundationrepair.com" className="text-lg hover:text-jac-lime transition-colors">james@jac-itfoundationrepair.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-jac-lime shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wide text-sm mb-2">East Texas Service Areas</h5>
                    <p className="leading-relaxed text-gray-400">
                      <Link to="/locations/livingston" className="hover:text-jac-lime transition-colors">Livingston</Link>,{' '}
                      <Link to="/locations/tyler" className="hover:text-jac-lime transition-colors">Tyler</Link>,{' '}
                      <Link to="/locations/lufkin" className="hover:text-jac-lime transition-colors">Lufkin</Link>,{' '}
                      <Link to="/locations/longview" className="hover:text-jac-lime transition-colors">Longview</Link>,{' '}
                      <Link to="/locations/henderson" className="hover:text-jac-lime transition-colors">Henderson</Link>,{' '}
                      <Link to="/locations/nacogdoches" className="hover:text-jac-lime transition-colors">Nacogdoches</Link>,{' '}
                      <Link to="/locations/huntsville" className="hover:text-jac-lime transition-colors">Huntsville</Link>, and surrounding Deep East Texas communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map with Service Radius & Pins */}
            <div className="h-[400px] w-full relative border border-white/10 overflow-hidden bg-gray-900 rounded-sm shadow-xl">
              {/* Map background */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1746200.7513280031!2d-96.11585642233777!3d31.621213388701955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863777a8dd824cfd%3A0xc665e77bba663249!2sEast%20Texas%2C%20TX!5e0!3m2!1sen!2sus!4v1715535560416!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0 pointer-events-none transition-all duration-500"
              ></iframe>
              
              {/* CSS Radius Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] aspect-square max-w-[450px] max-h-[450px] rounded-full border-[5px] border-jac-lime bg-jac-lime/20 pointer-events-none z-10 animate-pulse shadow-[0_0_40px_rgba(151,204,4,0.6)]"></div>

              {/* Decorative City Pins (Relative to center) */}
              {/* Tyler - North */}
              <div className="absolute top-[25%] left-[48%] z-20 flex flex-col items-center pointer-events-none -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white text-jac-charcoal text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap mb-0.5">Tyler</div>
                <div className="w-3 h-3 md:w-4 md:h-4 bg-jac-lime border-[2px] border-white rounded-full shadow-lg"></div>
              </div>
              
              {/* Longview - North East */}
              <div className="absolute top-[30%] left-[65%] z-20 flex flex-col items-center pointer-events-none -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white text-jac-charcoal text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap mb-0.5">Longview</div>
                <div className="w-3 h-3 md:w-4 md:h-4 bg-jac-lime border-[2px] border-white rounded-full shadow-lg"></div>
              </div>

              {/* Henderson - East */}
              <div className="absolute top-[42%] left-[60%] z-20 flex flex-col items-center pointer-events-none -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white text-jac-charcoal text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap mb-0.5">Henderson</div>
                <div className="w-3 h-3 md:w-4 md:h-4 bg-jac-lime border-[2px] border-white rounded-full shadow-lg"></div>
              </div>

              {/* Nacogdoches - South East */}
              <div className="absolute top-[55%] left-[62%] z-20 flex flex-col items-center pointer-events-none -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white text-jac-charcoal text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap mb-0.5">Nacogdoches</div>
                <div className="w-3 h-3 md:w-4 md:h-4 bg-jac-lime border-[2px] border-white rounded-full shadow-lg"></div>
              </div>

              {/* Lufkin - South */}
              <div className="absolute top-[68%] left-[55%] z-20 flex flex-col items-center pointer-events-none -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white text-jac-charcoal text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap mb-0.5">Lufkin</div>
                <div className="w-3 h-3 md:w-4 md:h-4 bg-jac-lime border-[2px] border-white rounded-full shadow-lg"></div>
              </div>

              {/* Livingston - Deep South */}
              <div className="absolute top-[82%] left-[45%] z-20 flex flex-col items-center pointer-events-none -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white text-jac-charcoal text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap mb-0.5">Livingston</div>
                <div className="w-3 h-3 md:w-4 md:h-4 bg-jac-lime border-[2px] border-white rounded-full shadow-lg"></div>
              </div>

              {/* Huntsville - South West */}
              <div className="absolute top-[75%] left-[30%] z-20 flex flex-col items-center pointer-events-none -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white text-jac-charcoal text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap mb-0.5">Huntsville</div>
                <div className="w-3 h-3 md:w-4 md:h-4 bg-jac-lime border-[2px] border-white rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Form - Right Side */}
          <div className="relative z-20 flex flex-col justify-center lg:pl-8">
            <h2 className="font-display font-black text-3xl text-white uppercase mb-8 relative z-10">Request an Estimate</h2>
            <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input type="text" id="fname" value={formData.fname} onChange={handleChange} placeholder=" " required className="peer w-full bg-white/5 border-2 border-white/10 focus:border-jac-lime focus:bg-white/10 rounded-none pt-6 pb-2 px-4 focus:outline-none transition-all duration-300 text-white font-bold" />
                  <label htmlFor="fname" className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-gray-400 transition-all duration-300 peer-focus:text-[10px] peer-focus:-translate-y-2 peer-focus:text-jac-lime peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-2 pointer-events-none">First Name *</label>
                </div>
                <div className="relative">
                  <input type="text" id="lname" value={formData.lname} onChange={handleChange} placeholder=" " required className="peer w-full bg-white/5 border-2 border-white/10 focus:border-jac-lime focus:bg-white/10 rounded-none pt-6 pb-2 px-4 focus:outline-none transition-all duration-300 text-white font-bold" />
                  <label htmlFor="lname" className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-gray-400 transition-all duration-300 peer-focus:text-[10px] peer-focus:-translate-y-2 peer-focus:text-jac-lime peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-2 pointer-events-none">Last Name *</label>
                </div>
              </div>
              <div className="relative">
                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder=" " required className="peer w-full bg-white/5 border-2 border-white/10 focus:border-jac-lime focus:bg-white/10 rounded-none pt-6 pb-2 px-4 focus:outline-none transition-all duration-300 text-white font-bold" />
                <label htmlFor="email" className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-gray-400 transition-all duration-300 peer-focus:text-[10px] peer-focus:-translate-y-2 peer-focus:text-jac-lime peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-2 pointer-events-none">Email Address *</label>
              </div>
              <div className="relative">
                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder=" " required className="peer w-full bg-white/5 border-2 border-white/10 focus:border-jac-lime focus:bg-white/10 rounded-none pt-6 pb-2 px-4 focus:outline-none transition-all duration-300 text-white font-bold" />
                <label htmlFor="phone" className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-gray-400 transition-all duration-300 peer-focus:text-[10px] peer-focus:-translate-y-2 peer-focus:text-jac-lime peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-2 pointer-events-none">Phone Number *</label>
              </div>
              <div className="relative">
                <textarea id="message" value={formData.message} onChange={handleChange} rows={4} placeholder=" " required className="peer w-full bg-white/5 border-2 border-white/10 focus:border-jac-lime focus:bg-white/10 rounded-none pt-6 pb-2 px-4 focus:outline-none transition-all duration-300 text-white font-bold resize-none"></textarea>
                <label htmlFor="message" className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-gray-400 transition-all duration-300 peer-focus:text-[10px] peer-focus:-translate-y-2 peer-focus:text-jac-lime peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-2 pointer-events-none">How can we help?</label>
              </div>
                            {status === 'success' && <div className="text-jac-lime font-bold text-center mt-4">Your message was sent successfully! We'll be in touch soon.</div>}
              {status === 'error' && <div className="text-red-500 font-bold text-center mt-4">{errorMessage}</div>}
              <button className="w-full flex items-stretch group relative overflow-hidden border border-jac-lime mt-6">
                <div className="absolute inset-0 bg-jac-lime w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="w-full text-jac-lime group-hover:text-jac-charcoal px-8 py-4 font-bold tracking-wide text-lg flex items-center justify-center relative z-10 transition-colors duration-300 uppercase">
                  {status === 'loading' ? 'Sending...' : 'Submit Request'}
                </div>
                <div className="border-l border-jac-lime/30 group-hover:border-transparent group-hover:text-jac-charcoal px-6 flex items-center justify-center relative z-10 transition-colors duration-300 text-jac-lime">
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </form>
          </div>

        </div>
      </section>

    </>
  );
}
