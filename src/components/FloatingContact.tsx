import React, { useState } from 'react';
import { MessageSquare, Phone, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
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
              <a href="tel:18776552248" className="inline-flex items-center justify-center gap-2 bg-jac-lime text-jac-charcoal px-6 py-3 rounded-full font-bold hover:bg-white transition-colors w-full">
                <Phone className="w-5 h-5 fill-current" />
                1-877-65-JACIT
              </a>
            </div>

            {/* Quick Contact Form */}
            <div className="p-6 bg-gray-50">
              <h4 className="font-bold text-jac-charcoal mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-jac-green" />
                Send a Quick Message
              </h4>
              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); alert('Message sent successfully!'); }}>
                <div>
                  <input type="text" placeholder="Full Name *" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green text-sm" required />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number *" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green text-sm" required />
                </div>
                <div>
                  <input type="email" placeholder="Email Address *" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green text-sm" required />
                </div>
                <div>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green text-sm bg-white" required defaultValue="">
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
        className="w-14 h-14 bg-jac-green text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(33,52,35,0.4)] hover:bg-jac-charcoal transition-all duration-300 relative group"
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
