import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingContact() {
  const [formData, setFormData] = useState({ fname: '', lname: 'Floating', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
      setTimeout(() => { setIsOpen(false); setStatus('idle'); }, 2000);
      setFormData({ fname: '', lname: 'Floating', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 300px (approx hero section height on mobile)
      setIsScrolled(window.scrollY > 300);
      
      // Auto-close if open and scrolling back to top
      if (window.scrollY < 300 && isOpen) {
        setIsOpen(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end transition-all duration-300 ${isScrolled ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4 md:opacity-100 md:pointer-events-auto md:translate-y-0'}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-[350px] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 flex flex-col"
          >
            {/* Call Now Section */}
            <div className="bg-jac-charcoal p-6 text-center border-b-[4px] border-jac-lime">
              <h3 className="text-white font-display font-bold text-xl uppercase tracking-wide mb-2">Need Help Now?</h3>
              <div className="flex flex-col gap-2">
                <a href="tel:18776552248" className="inline-flex items-center justify-center gap-2 bg-jac-lime text-jac-charcoal px-6 py-3 rounded-full font-bold hover:bg-white transition-colors w-full">
                  <Phone className="w-5 h-5 fill-current" />
                  1-877-65-JACIT
                </a>
                <a href="tel:14303526085" className="inline-flex items-center justify-center gap-2 bg-jac-lime text-jac-charcoal px-6 py-3 rounded-full font-bold hover:bg-white transition-colors w-full">
                  <Phone className="w-5 h-5 fill-current" />
                  1-430-352-6085
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="p-6 bg-gray-50">
              <h4 className="font-bold text-jac-charcoal mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-jac-green" />
                Send a Quick Message
              </h4>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <input type="text" placeholder="Full Name *" name="fname" value={formData.fname} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green text-sm" required />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number *" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green text-sm" required />
                </div>
                <div>
                  <input type="email" placeholder="Email Address *" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green text-sm" required />
                </div>
                <div>
                  <select name="message" value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green text-sm bg-white" required >
                    <option value="" disabled>Select a Service *</option>
                    <option value="pier-and-beam">Pier & Beam Repair</option>
                    <option value="foundation-repair">Foundation Repair</option>
                    <option value="slab-repair">Slab Repair</option>
                    <option value="house-leveling">House Leveling</option>
                    <option value="press-piers">Press Piers</option>
                    <option value="foam-injection">Foam Injection</option>
                    <option value="drainage">Drainage Solutions</option>
                    <option value="root-barriers">Root Barriers</option>
                    <option value="commercial">Commercial Prep</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                                {status === 'success' && <div className="text-jac-green font-bold text-center text-xs">Sent successfully!</div>}
                {status === 'error' && <div className="text-red-500 font-bold text-center text-xs">Error sending message.</div>}
                <button type="submit" className="w-full bg-jac-green text-white font-bold py-2.5 rounded flex items-center justify-center gap-2 hover:bg-jac-charcoal transition-colors text-sm mt-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-jac-green text-white rounded-full flex items-center justify-center border border-white hover:bg-jac-charcoal transition-all duration-300 relative group"
        aria-label="Toggle contact widget"
      >
        <div className="absolute inset-0 bg-jac-lime rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></div>
        <div className="relative z-10 flex items-center justify-center group-hover:text-jac-charcoal">
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 fill-current" />}
        </div>
      </button>
    </div>
  );
}
