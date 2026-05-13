import React, { useState, useEffect } from 'react';
import { Outlet, NavLink as RouterNavLink, Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Menu,
  Phone,
  Mail,
  Facebook,
  X,
  House,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ children, to = "#" }: { children: React.ReactNode, to?: string }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  if (to.startsWith('#')) {
    // If it's a hash link and we are not on home page, link back to home with hash
    const href = isHome ? to : `/${to}`;
    return (
      <a href={href} className="text-sm font-bold tracking-wide uppercase hover:text-jac-green transition-colors flex items-center gap-1 group">
        {children}
      </a>
    );
  }
  
  return (
    <RouterNavLink 
      to={to} 
      className={({ isActive }) => `text-sm font-bold tracking-wide uppercase hover:text-jac-green transition-colors flex items-center gap-1 group ${isActive ? 'text-jac-green' : ''}`}
    >
      {children}
    </RouterNavLink>
  );
};

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

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col">
      {/* Top Bar */}
      <div className="bg-jac-charcoal text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase h-10 px-6 lg:px-12 flex justify-between items-center relative z-50 shrink-0">
        <div className="flex items-center gap-6">
          <a href="tel:18776552248" className="flex items-center gap-2 hover:text-jac-lime transition-colors">
            <Phone className="w-3 h-3 text-jac-lime" /> 1-877-655-2248
          </a>
          <a href="mailto:james@jac-itfoundationrepair.com" className="items-center gap-2 hover:text-jac-lime transition-colors hidden md:flex">
            <Mail className="w-3 h-3 text-jac-lime" /> james@jac-itfoundationrepair.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-gray-300 hidden sm:block">
            Serving Deep East Texas for 25+ Years
          </div>
          <div className="flex items-center sm:hidden">
            <a href="https://www.facebook.com/profile.php?id=61582509133880" target="_blank" rel="noopener noreferrer" className="hover:text-jac-lime transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'top-0 bg-white shadow-md py-2' : 'top-10 bg-white py-4'}`}>
        <div className="w-full px-4 lg:px-12 grid grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-8">

          {/* Logo */}
          <Link to="/" className="flex items-center relative z-20 h-10 w-28 sm:w-32 lg:w-40">
            <img src="/jacitlogohorizontalblack.png" alt="JAC-IT Foundation Repair" className={`absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 max-w-none object-contain drop-shadow-md pointer-events-auto transition-all duration-300 ${isScrolled ? 'w-32 sm:w-40 lg:w-48' : 'w-40 sm:w-48 lg:w-56'}`} />
          </Link>

          {/* Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            
            {/* Desktop Services Dropdown */}
            <div className="relative group/nav py-4">
              <button className="text-sm font-bold tracking-wide uppercase group-hover/nav:text-jac-green transition-colors flex items-center gap-1">
                Services <ChevronDown className="w-4 h-4 group-hover/nav:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-[80%] left-0 pt-4 w-64 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 z-50">
                <div className="bg-white border-t-2 border-jac-green shadow-xl flex flex-col py-2">
                  <RouterNavLink to="/services/pier-and-beam" className="px-6 py-3 text-sm font-bold uppercase text-jac-charcoal hover:text-jac-green hover:bg-gray-50 transition-colors">Pier & Beam Repair</RouterNavLink>
                  <RouterNavLink to="/services/foundation-repair" className="px-6 py-3 text-sm font-bold uppercase text-jac-charcoal hover:text-jac-green hover:bg-gray-50 transition-colors">Foundation Repair</RouterNavLink>
                  <RouterNavLink to="/services/house-leveling" className="px-6 py-3 text-sm font-bold uppercase text-jac-charcoal hover:text-jac-green hover:bg-gray-50 transition-colors">House Leveling</RouterNavLink>
                  <RouterNavLink to="/services/press-piers" className="px-6 py-3 text-sm font-bold uppercase text-jac-charcoal hover:text-jac-green hover:bg-gray-50 transition-colors">Press Piers</RouterNavLink>
                  <RouterNavLink to="/services/slab-repair" className="px-6 py-3 text-sm font-bold uppercase text-jac-charcoal hover:text-jac-green hover:bg-gray-50 transition-colors">Slab Repair</RouterNavLink>
                  <RouterNavLink to="/services/repair-methods" className="px-6 py-3 text-sm font-bold uppercase text-jac-charcoal hover:text-jac-green hover:bg-gray-50 transition-colors">Repair Methods</RouterNavLink>
                  <RouterNavLink to="/services/foam-injection" className="px-6 py-3 text-sm font-bold uppercase text-jac-charcoal hover:text-jac-green hover:bg-gray-50 transition-colors">Foam Injection</RouterNavLink>
                  <RouterNavLink to="/services/drainage-solutions" className="px-6 py-3 text-sm font-bold uppercase text-jac-charcoal hover:text-jac-green hover:bg-gray-50 transition-colors">Drainage Solutions</RouterNavLink>
                </div>
              </div>
            </div>

            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61582509133880" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-jac-lime hover:border-jac-lime hover:text-jac-dark transition-all text-gray-500"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a href="tel:18776552248" className="flex items-stretch text-jac-charcoal group relative overflow-hidden border border-jac-charcoal">
              <div className="absolute inset-0 bg-jac-charcoal w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
              <div className="group-hover:text-white px-6 py-3 font-bold tracking-wide text-sm flex items-center justify-center relative z-10 transition-colors duration-300">
                Call Today
              </div>
              <div className="border-l border-jac-charcoal group-hover:border-transparent group-hover:text-white px-4 py-3 flex items-center justify-center relative z-10 transition-colors duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 -mr-2 justify-self-end ml-auto text-jac-charcoal hover:text-jac-lime transition-colors relative z-20">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Slide-Out Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-jac-charcoal flex flex-col items-center justify-center lg:hidden"
          >
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center bg-jac-charcoal border-b border-white/10 shadow-lg">
              <div className="flex items-center relative h-10 w-32">
                <img src="/jacitlogohorizontal.png" alt="JAC-IT Foundation Repair" className="absolute -left-2 top-1/2 -translate-y-1/2 w-40 object-contain drop-shadow-md" />
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center text-white hover:text-jac-lime transition-colors bg-white/5 rounded-full"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Geometric Background Accents */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-jac-lime/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-jac-lime/5 to-transparent"></div>
            </div>

            <nav className="flex flex-col items-center gap-8 text-center relative z-10 w-full px-6">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-black text-4xl text-white uppercase hover:text-jac-lime transition-colors">Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-black text-4xl text-white uppercase hover:text-jac-lime transition-colors">About Us</Link>
              
              <div className="flex flex-col items-center">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
                  className="font-display font-black text-4xl text-white uppercase hover:text-jac-lime transition-colors flex items-center justify-center gap-2"
                >
                  Services <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center gap-4 overflow-hidden pt-6"
                    >
                      <Link to="/services/pier-and-beam" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white/80 hover:text-jac-lime transition-colors uppercase font-bold tracking-wide">Pier & Beam Repair</Link>
                      <Link to="/services/foundation-repair" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white/80 hover:text-jac-lime transition-colors uppercase font-bold tracking-wide">Foundation Repair</Link>
                      <Link to="/services/house-leveling" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white/80 hover:text-jac-lime transition-colors uppercase font-bold tracking-wide">House Leveling</Link>
                      <Link to="/services/press-piers" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white/80 hover:text-jac-lime transition-colors uppercase font-bold tracking-wide">Press Piers</Link>
                      <Link to="/services/slab-repair" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white/80 hover:text-jac-lime transition-colors uppercase font-bold tracking-wide">Slab Repair</Link>
                      <Link to="/services/repair-methods" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white/80 hover:text-jac-lime transition-colors uppercase font-bold tracking-wide">Repair Methods</Link>
                      <Link to="/services/foam-injection" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white/80 hover:text-jac-lime transition-colors uppercase font-bold tracking-wide">Foam Injection</Link>
                      <Link to="/services/drainage-solutions" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white/80 hover:text-jac-lime transition-colors uppercase font-bold tracking-wide">Drainage Solutions</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-black text-4xl text-white uppercase hover:text-jac-lime transition-colors">Gallery</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-black text-4xl text-white uppercase hover:text-jac-lime transition-colors">Contact Us</Link>
              
              <div className="w-full max-w-sm border-t border-white/10 pt-8 mt-4 flex flex-col gap-6">
                <a href="tel:18776552248" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-stretch group relative overflow-hidden border border-jac-lime">
                  <div className="absolute inset-0 bg-jac-lime w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                  <div className="flex-1 bg-jac-charcoal group-hover:bg-transparent group-hover:text-jac-charcoal text-jac-lime px-6 py-4 font-bold tracking-wide text-lg flex items-center justify-center relative z-10 transition-colors duration-300 uppercase">
                    Call Today
                  </div>
                  <div className="shrink-0 bg-jac-lime/10 group-hover:bg-transparent border-l border-jac-lime/30 group-hover:border-jac-charcoal group-hover:text-jac-charcoal text-jac-lime px-4 py-4 flex items-center justify-center relative z-10 transition-colors duration-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </a>

                <div className="flex flex-col items-center gap-4 text-gray-300 mt-4">
                  <a href="tel:18776552248" className="flex items-center gap-2 text-xl font-medium text-white hover:text-jac-lime transition-colors">
                    <Phone className="w-5 h-5 text-jac-lime" /> 1-877-655-2248
                  </a>
                  <a href="mailto:james@jac-itfoundationrepair.com" className="text-sm font-medium hover:text-jac-lime transition-colors">
                    james@jac-itfoundationrepair.com
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-jac-dark text-white pt-16 lg:pt-24 pb-8 border-t border-white/5 relative z-0 overflow-hidden mt-auto">
        {/* Large Watermark Logo */}
        <div className="absolute -bottom-24 -right-24 opacity-[0.02] pointer-events-none">
          <House className="w-96 h-96 lg:w-[600px] lg:h-[600px] text-white" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 relative z-10">

          <div className="col-span-1 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img src="/Jac-it-logo-transparent.png" alt="JAC-IT Foundation Repair" className="h-20 w-auto drop-shadow-md" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Providing dependable foundation repair and house leveling services across Deep East Texas for over 25 years.</p>
            <div className="flex gap-4 items-center">
              <a href="https://www.facebook.com/profile.php?id=61582509133880" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-jac-lime hover:border-jac-lime hover:text-jac-charcoal transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <img src="/bbblogo2.png" alt="BBB Accredited Business" className="h-14 sm:h-16 w-auto brightness-0 invert opacity-90" />
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="mb-8">
              <h4 className="font-subdisplay font-bold text-lg uppercase tracking-wide mb-3">Company</h4>
              <div className="w-8 h-[2px] bg-jac-lime"></div>
            </div>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><Link to="/about" className="hover:text-jac-lime transition-colors">About Us</Link></li>
              <li><a href="/#services" className="hover:text-jac-lime transition-colors">Services</a></li>
              <li><Link to="/gallery" className="hover:text-jac-lime transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-jac-lime transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:pl-8">
            <div className="mb-8">
              <h4 className="font-subdisplay font-bold text-lg uppercase tracking-wide mb-3">Locations Served</h4>
              <div className="w-8 h-[2px] bg-jac-lime"></div>
            </div>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><span className="hover:text-jac-lime transition-colors cursor-default">Tyler</span></li>
              <li><span className="hover:text-jac-lime transition-colors cursor-default">Lufkin</span></li>
              <li><span className="hover:text-jac-lime transition-colors cursor-default">Longview</span></li>
              <li><span className="hover:text-jac-lime transition-colors cursor-default">Livingston</span></li>
              <li><span className="hover:text-jac-lime transition-colors cursor-default">Henderson</span></li>
            </ul>
          </div>

          <div className="lg:pl-8">
            <div className="mb-8">
              <h4 className="font-subdisplay font-bold text-lg uppercase tracking-wide mb-3">Contact</h4>
              <div className="w-8 h-[2px] bg-jac-lime"></div>
            </div>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><a href="tel:18776552248" className="hover:text-jac-lime transition-colors">1-877-65-JACIT</a></li>
              <li><a href="mailto:james@jac-itfoundationrepair.com" className="hover:text-jac-lime transition-colors">james@jac-itfoundationrepair.com</a></li>
              <li>Deep East Texas Region</li>
              <li>Mon-Fri: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>

        </div>

        <div className="max-w-[1400px] mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex gap-4">
            <span>&copy; 2026 <FooterBrandName /> House Leveling & Foundation Repair LLC - All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Web Design + Digital Marketing by <FooterBrandName /></span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="border border-gray-700 p-2 hover:bg-white/5 transition-colors rounded-sm">
              <ChevronDown className="w-4 h-4 transform rotate-180" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
