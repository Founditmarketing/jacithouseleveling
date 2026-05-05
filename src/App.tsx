import React, { useState, useEffect, useRef } from 'react';
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
  Facebook
} from 'lucide-react';
import { motion } from 'motion/react';

const NavLink = ({ children, href = "#" }: { children: React.ReactNode, href?: string }) => (
  <a href={href} className="text-sm font-bold tracking-wide uppercase hover:text-jac-green transition-colors flex items-center gap-1 group">
    {children}
  </a>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-jac-charcoal text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase h-10 px-6 lg:px-12 flex justify-between items-center relative z-50">
        <div className="flex items-center gap-6">
          <a href="tel:18776552248" className="flex items-center gap-2 hover:text-jac-lime transition-colors">
            <Phone className="w-3 h-3 text-jac-lime" /> 1-877-655-2248
          </a>
          <a href="mailto:james@jac-itfoundationrepair.com" className="items-center gap-2 hover:text-jac-lime transition-colors hidden md:flex">
            <Mail className="w-3 h-3 text-jac-lime" /> james@jac-itfoundationrepair.com
          </a>
        </div>
        <div className="text-gray-300 hidden sm:block">
          Serving Deep East Texas for 25+ Years
        </div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'top-0 bg-white shadow-md py-2' : 'top-10 bg-white py-4'}`}>
        <div className="w-full px-6 lg:px-12 grid grid-cols-[auto_1fr_auto] items-center gap-8">

          {/* Logo */}
          <div className="flex items-center gap-2 relative z-20 h-10">
            <div className="w-28 lg:w-36"></div>
            <img src="/Jac-it-logo-transparent.png" alt="JAC-IT Foundation Repair" className="absolute top-[-18px] left-0 w-36 lg:w-44 max-w-none drop-shadow-md pointer-events-auto" />
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            <NavLink>About</NavLink>
            <NavLink>Services <ChevronDown className="w-3 h-3 opacity-50" /></NavLink>
            <NavLink>Locations <ChevronDown className="w-3 h-3 opacity-50" /></NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Careers</NavLink>
            <NavLink>Contact</NavLink>
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
            <a href="#portal" className="flex items-stretch text-jac-charcoal group relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
              <div className="absolute inset-0 bg-jac-green w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
              <div className="bg-jac-lime group-hover:bg-transparent px-6 py-3 font-bold tracking-wide text-sm flex items-center justify-center relative z-10 transition-colors duration-300">
                Employee Portal
              </div>
              <div className="bg-jac-lime group-hover:bg-transparent px-4 py-3 flex items-center justify-center border-l border-jac-charcoal/10 relative z-10 transition-colors duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>

          <button className="lg:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center bg-jac-dark overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/jacitimage.jpg"
            alt="Foundation lifting and excavation working site"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>

          {/* Complex Multi-Layered Geometric Overlays */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {/* Base Layer - Transparent Jac Green */}
            <motion.div 
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="absolute inset-0 bg-jac-green/30" style={{ clipPath: 'polygon(30% 100%, 100% 0%, 100% 100%)' }}
            ></motion.div>

            {/* Sub-layers container */}
            <div className="absolute inset-0">
              {/* Sub Layer 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 100, y: 100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="absolute inset-0 bg-jac-green/50" style={{ clipPath: 'polygon(38% 100%, 100% 15%, 100% 100%)' }}
              ></motion.div>

              {/* Sub Layer 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 100, y: 100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="absolute inset-0 bg-jac-green/70" style={{ clipPath: 'polygon(48% 100%, 100% 35%, 100% 100%)' }}
              ></motion.div>

              {/* Lowest Sub Layer 3 - Solid Jac Green (Corner) */}
              {/* Touches the bottom completely to match the sub-banner */}
              <div className="absolute inset-0 bg-jac-green" style={{ clipPath: 'polygon(60% 100%, 100% 55%, 100% 100%)' }}></div>
            </div>
          </div>
        </div>

        <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full mt-12 md:mt-0">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight"
            >
              Built on Heritage and Excellence
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-medium"
            >
              We provide premier foundation repair and house leveling services across Deep East Texas. Trust our experienced team to secure your home's structural integrity with honesty and craftsmanship.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-2xl"
            >
              <a href="#projects" className="flex items-stretch group relative overflow-hidden border border-white">
                <div className="absolute inset-0 bg-jac-lime w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="bg-black/30 group-hover:bg-transparent group-hover:text-jac-charcoal backdrop-blur-sm text-white px-6 py-4 font-bold tracking-wide text-sm flex items-center justify-center border-r-0 relative z-10 transition-all duration-300">
                  Explore Our Work
                </div>
                <div className="bg-black/30 group-hover:bg-transparent group-hover:text-jac-charcoal backdrop-blur-sm text-white px-4 py-4 flex items-center justify-center border-l border-white relative z-10 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>

              <a href="#careers" className="flex items-stretch group relative overflow-hidden border border-transparent hover:border-gray-200">
                <div className="absolute inset-0 bg-jac-green w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="bg-white group-hover:bg-transparent group-hover:text-white text-jac-charcoal px-6 py-4 font-bold tracking-wide text-sm flex items-center justify-center relative z-10 transition-all duration-300">
                  Join The Team
                </div>
                <div className="bg-white group-hover:bg-transparent group-hover:text-white text-jac-charcoal px-4 py-4 flex items-center justify-center border-l border-gray-200 relative z-10 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down placed at bottom right over geometric pattern */}
        <div className="absolute bottom-12 right-12 z-20 hidden md:flex flex-col items-center">
          <div className="mb-4 h-16 w-[2px] bg-white/20 relative overflow-hidden rounded-full">
            <motion.div 
              animate={{ y: [-32, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-8 bg-white rounded-full"
            />
          </div>
          <span className="text-white text-xs font-bold tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* Solid Text Sub-Banner matching Base Layer Color */}
      <section className="bg-jac-green text-white pt-16 pb-16 relative z-30">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">
            Family isn't just a word here.<br />It's who we are.
          </h2>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-white/95">
              When you join Cardinal Civil, you become part of something truly special. Walk into any of our locations and you'll hear the same sentiment: there's a unique spirit that sets us apart. We've built our reputation on two pillars: exceptional dedication to our work and genuine warmth in how we treat each other.
            </p>
          </div>
        </div>
      </section>

      {/* About Jac-It Split */}
      <section id="about" className="relative bg-white pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[600px] relative max-w-[1600px] mx-auto">
          {/* Left Image Side */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden lg:diagonal-overlay-left z-10 w-full">
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2500&auto=format&fit=crop"
              alt="James Wilson and Crew"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-jac-charcoal/20 mix-blend-overlay"></div>
          </div>

          {/* Right Text Space */}
          <div className="flex items-center px-6 lg:pl-16 lg:pr-12 py-16 lg:py-0 w-full">
            <div className="max-w-xl">
              <div className="mb-12">
                <div className="flex gap-4 mb-4 items-start">
                  <div className="bg-jac-lime p-3 shrink-0">
                    <Construction className="w-8 h-8 text-jac-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl uppercase tracking-wide">Experience</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      With over 25 years of hands-on expertise, Jac-It House Leveling & Foundation Repair has successfully restored and secured foundations for homes and commercial properties across Deep East Texas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex gap-4 mb-4 items-start">
                  <div className="bg-jac-charcoal p-3 shrink-0">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl uppercase tracking-wide">Mission</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      To provide the structural integrity and peace of mind our neighbors deserve through unwavering honesty, meticulous craftsmanship, and reliable service that stands the test of time.
                    </p>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 font-sans mb-8">
                <li className="flex gap-3">
                  <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-jac-green" /></div>
                  <div>
                    <strong>Craftsmanship:</strong> Detail-oriented restoration.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-jac-green" /></div>
                  <div>
                    <strong>Honesty:</strong> 25+ years of trusted experience.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-jac-green" /></div>
                  <div>
                    <strong>Reliable Service:</strong> Results you can depend on.
                  </div>
                </li>
              </ul>

              <a href="#" className="inline-flex items-center gap-2 font-bold text-jac-green hover:text-jac-charcoal uppercase tracking-wider text-sm group">
                Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-gray-50 py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="font-display font-black text-5xl uppercase">What We Do</h2>
            <div className="w-24 h-1 bg-jac-lime mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Lead Block */}
            <div className="bg-jac-lime p-8 flex flex-col justify-center diagonal-card relative overflow-hidden group">
              <div className="absolute right-4 top-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-4xl leading-none text-jac-charcoal uppercase">
                Why<br />Choose<br />Us
              </h3>
              <p className="mt-4 font-medium text-jac-charcoal/80">
                Precision engineering and honest pricing for all your foundation needs.
              </p>
            </div>

            {/* Service Block */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gray-50 rounded-tl-full -z-0"></div>
              <div className="relative z-10">
                <Mountain className="w-10 h-10 text-jac-green mb-6 stroke-[1.5]" />
                <h4 className="font-display font-bold text-xl uppercase mb-3">Pier & Beam Repair</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Comprehensive adjustments and timber replacements to restore stability to older, elevated homes.
                </p>
                <a href="#" className="font-bold text-sm tracking-wide flex items-center gap-2 group-hover:text-jac-green transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Service Block */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gray-50 rounded-tl-full -z-0"></div>
              <div className="relative z-10">
                <House className="w-10 h-10 text-jac-green mb-6 stroke-[1.5]" />
                <h4 className="font-display font-bold text-xl uppercase mb-3">Slab Repair</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Hydraulic pressing and steel/concrete pier installation to permanently level concrete slabs.
                </p>
                <a href="#" className="font-bold text-sm tracking-wide flex items-center gap-2 group-hover:text-jac-green transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Service Block */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gray-50 rounded-tl-full -z-0"></div>
              <div className="relative z-10">
                <Wrench className="w-10 h-10 text-jac-green mb-6 stroke-[1.5]" />
                <h4 className="font-display font-bold text-xl uppercase mb-3">Foam Injection</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Efficient polyurethane foam lifting to void-fill and stabilize sinking concrete driveways and patios.
                </p>
                <a href="#" className="font-bold text-sm tracking-wide flex items-center gap-2 group-hover:text-jac-green transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Service Block */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gray-50 rounded-tl-full -z-0"></div>
              <div className="relative z-10">
                <Hammer className="w-10 h-10 text-jac-green mb-6 stroke-[1.5]" />
                <h4 className="font-display font-bold text-xl uppercase mb-3">Drainage Solutions</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  French drains and grading adjustments to divert water away from your foundation.
                </p>
                <a href="#" className="font-bold text-sm tracking-wide flex items-center gap-2 group-hover:text-jac-green transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Service Block */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gray-50 rounded-tl-full -z-0"></div>
              <div className="relative z-10">
                <ShieldCheck className="w-10 h-10 text-jac-green mb-6 stroke-[1.5]" />
                <h4 className="font-display font-bold text-xl uppercase mb-3">Root Barriers</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Preventative installations to stop invasive tree roots from compromising structural integrity.
                </p>
                <a href="#" className="font-bold text-sm tracking-wide flex items-center gap-2 group-hover:text-jac-green transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Service Block */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gray-50 rounded-tl-full -z-0"></div>
              <div className="relative z-10">
                <HardHat className="w-10 h-10 text-jac-green mb-6 stroke-[1.5]" />
                <h4 className="font-display font-bold text-xl uppercase mb-3">Commercial Prep</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Heavy-duty leveling solutions tailored for industrial and commercial structures in East Texas.
                </p>
                <a href="#" className="font-bold text-sm tracking-wide flex items-center gap-2 group-hover:text-jac-green transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Service Block */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gray-50 rounded-tl-full -z-0"></div>
              <div className="relative z-10">
                <CheckCircle2 className="w-10 h-10 text-jac-green mb-6 stroke-[1.5]" />
                <h4 className="font-display font-bold text-xl uppercase mb-3">Free Evaluations</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Comprehensive structural assessments from our seasoned experts at zero upfront cost.
                </p>
                <a href="#" className="font-bold text-sm tracking-wide flex items-center gap-2 group-hover:text-jac-green transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="font-display font-black text-5xl uppercase mb-4">Featured <br />East Texas Projects</h2>
              <div className="w-24 h-1 bg-jac-green"></div>
            </div>
            <div className="flex gap-4 mt-8 md:mt-0">
              <button onClick={scrollLeft} className="w-12 h-12 border-2 border-gray-200 flex items-center justify-center hover:bg-jac-lime hover:border-jac-lime transition-all z-10">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={scrollRight} className="w-12 h-12 border-2 border-gray-200 flex items-center justify-center hover:bg-jac-lime hover:border-jac-lime transition-all z-10">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="w-full" style={{ paddingLeft: 'max(1.5rem, calc((100vw - 1400px) / 2 + 1.5rem))' }}>
          <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-12 pr-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

            {/* Project Card */}
            <div className="min-w-[85vw] md:min-w-[600px] bg-gray-100 flex flex-col snap-center group cursor-pointer relative overflow-hidden shadow-md">
              <div className="h-[350px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590496794008-383c8070b257?q=80&w=1000&auto=format&fit=crop" alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Dynamic shape across image */}
              <div className="absolute right-0 top-1/2 w-32 h-64 bg-jac-charcoal diagonal-overlay-left mix-blend-multiply opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="bg-jac-charcoal text-white p-8 flex justify-between items-end">
                <div>
                  <span className="text-jac-lime font-bold uppercase tracking-widest text-xs mb-2 block">Livingston Lake</span>
                  <h3 className="font-display font-bold text-3xl mb-1 uppercase">Lakeside Restoration</h3>
                  <p className="text-gray-400 max-w-md mt-2 text-sm leading-relaxed">Complete pier and beam leveling to correct massive soil shift under a waterfront property.</p>
                </div>
                <div className="mb-2">
                  <ArrowRight className="w-8 h-8 text-white group-hover:text-jac-lime transition-colors group-hover:translate-x-2" />
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div className="min-w-[85vw] md:min-w-[600px] bg-gray-100 flex flex-col snap-center group cursor-pointer relative overflow-hidden shadow-md">
              <div className="h-[350px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1621905252507-b08fb8ae2014?q=80&w=1000&auto=format&fit=crop" alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="bg-jac-charcoal text-white p-8 flex justify-between items-end">
                <div>
                  <span className="text-jac-lime font-bold uppercase tracking-widest text-xs mb-2 block">Tyler, TX</span>
                  <h3 className="font-display font-bold text-3xl mb-1 uppercase">Slab Leveling</h3>
                  <p className="text-gray-400 max-w-md mt-2 text-sm leading-relaxed">20-pier installation to stop diagonal cracking in a suburban brick home.</p>
                </div>
                <div className="mb-2">
                  <ArrowRight className="w-8 h-8 text-white group-hover:text-jac-lime transition-colors group-hover:translate-x-2" />
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div className="min-w-[85vw] md:min-w-[600px] bg-gray-100 flex flex-col snap-center group cursor-pointer relative overflow-hidden shadow-md">
              <div className="h-[350px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="bg-jac-charcoal text-white p-8 flex justify-between items-end">
                <div>
                  <span className="text-jac-lime font-bold uppercase tracking-widest text-xs mb-2 block">Henderson, TX</span>
                  <h3 className="font-display font-bold text-3xl mb-1 uppercase">Deep Piering</h3>
                  <p className="text-gray-400 max-w-md mt-2 text-sm leading-relaxed">Commercial excavation and steel pier insertion for a local business structure.</p>
                </div>
                <div className="mb-2">
                  <ArrowRight className="w-8 h-8 text-white group-hover:text-jac-lime transition-colors group-hover:translate-x-2" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Factors Icon List */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-center font-display font-bold text-3xl uppercase mb-16 tracking-wide">Why Homeowners Trust Jac-It</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-jac-green mb-4 stroke-[1.5]" />
              <h4 className="font-bold text-lg mb-2">Warranted Work</h4>
              <p className="text-gray-600 text-sm">Long-term guarantees on our lifting services.</p>
            </div>
            <div className="flex flex-col items-center">
              <Handshake className="w-12 h-12 text-jac-green mb-4 stroke-[1.5]" />
              <h4 className="font-bold text-lg mb-2">Honest Service</h4>
              <p className="text-gray-600 text-sm">Transparent pricing, no hidden sales gimmicks.</p>
            </div>
            <div className="flex flex-col items-center">
              <HardHat className="w-12 h-12 text-jac-green mb-4 stroke-[1.5]" />
              <h4 className="font-bold text-lg mb-2">Expert Crew</h4>
              <p className="text-gray-600 text-sm">Trained directly under founder James Wilson.</p>
            </div>
            <div className="flex flex-col items-center">
              <Construction className="w-12 h-12 text-jac-green mb-4 stroke-[1.5]" />
              <h4 className="font-bold text-lg mb-2">Reliable Results</h4>
              <p className="text-gray-600 text-sm">Using structurally sound materials and methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="bg-jac-charcoal py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-[40%] bg-jac-dark diagonal-overlay"></div>
        <div className="absolute left-0 top-0 h-full w-[20%] bg-jac-green opacity-10 diagonal-overlay-left"></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display font-black text-4xl md:text-6xl text-jac-lime uppercase mb-6 tracking-tight">
            Secure Your Home's Future Today!
          </h2>
          <div className="flex flex-col items-center gap-6 justify-center text-white">
            <a href="tel:18776552248" className="text-3xl md:text-5xl font-bold hover:text-white/80 tracking-wide">
              1-877-65-JACIT (1-877-655-2248)
            </a>
            <a href="mailto:james@jac-itfoundationrepair.com" className="text-lg md:text-xl text-gray-400 hover:text-jac-lime font-medium">
              james@jac-itfoundationrepair.com
            </a>

            <div className="mt-8">
              <a href="#contact" className="inline-block relative group overflow-hidden bg-jac-lime text-jac-charcoal font-bold uppercase tracking-wider text-lg transition-all transform -skew-x-12 border-2 border-jac-lime hover:border-white">
                <div className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="px-10 py-5 relative z-10">
                  <span className="block transform skew-x-12">Claim Your Free Evaluation</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Differentiators */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-black text-4xl mb-6 uppercase">The Jac-It Difference</h2>
              <div className="w-16 h-1 bg-jac-green mb-8"></div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-jac-charcoal text-white flex items-center justify-center shrink-0 font-display font-bold text-xl">01</div>
                  <div>
                    <h4 className="font-bold text-xl uppercase mb-2">No Cut Corners</h4>
                    <p className="text-gray-600 leading-relaxed">Unlike competitors who space piers too far apart to cut costs, we install structural supports at engineering-approved intervals, ensuring the repair outlasts your mortgage.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-jac-green text-white flex items-center justify-center shrink-0 font-display font-bold text-xl">02</div>
                  <div>
                    <h4 className="font-bold text-xl uppercase mb-2">Heavy-Duty Materials</h4>
                    <p className="text-gray-600 leading-relaxed">We use commercial-grade concrete cylinders and steel shims exclusively. We never use subpar wood shims on slab foundations that will rot away in Texas humidity.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-jac-lime text-jac-charcoal flex items-center justify-center shrink-0 font-display font-bold text-xl">03</div>
                  <div>
                    <h4 className="font-bold text-xl uppercase mb-2">Owner On-Site</h4>
                    <p className="text-gray-600 leading-relaxed">James Wilson personally oversees crucial lifts. You aren't getting a franchise sub-contractor; you're getting the owner ensuring your home is handled perfectly.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gray-100 p-4 border border-gray-200 diagonal-overlay relative z-10 box-border">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=1000&auto=format&fit=crop" alt="Structural details" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-jac-lime diagonal-overlay-left -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-24 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Form */}
          <div className="bg-white p-10 shadow-lg relative border-t-4 border-jac-green">
            <h2 className="font-display font-black text-3xl uppercase mb-8">Request an Estimate</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">First Name *</label>
                  <input type="text" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-jac-green transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Last Name *</label>
                  <input type="text" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-jac-green transition-colors bg-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email Address *</label>
                <input type="email" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-jac-green transition-colors bg-transparent" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Phone Number *</label>
                <input type="tel" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-jac-green transition-colors bg-transparent" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">How can we help?</label>
                <textarea rows={4} className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-jac-green transition-colors bg-transparent resize-none"></textarea>
              </div>
              <button type="submit" className="w-full relative group overflow-hidden bg-jac-charcoal text-white font-bold uppercase py-4 tracking-wider mt-4">
                <div className="absolute inset-0 bg-jac-green w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <span className="relative z-10 block w-full text-center">Submit Request</span>
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-display font-black text-3xl uppercase mb-6">Contact Us</h2>
              <div className="space-y-6 text-gray-700">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-jac-green shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-gray-900">Toll-Free</h5>
                    <a href="tel:18776552248" className="text-xl font-medium hover:text-jac-green">1-877-65-JACIT (1-877-655-2248)</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-jac-green shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-gray-900">Email</h5>
                    <a href="mailto:james@jac-itfoundationrepair.com" className="text-lg hover:text-jac-green">james@jac-itfoundationrepair.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-jac-green shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">East Texas Service Areas</h5>
                    <p className="leading-relaxed">Livingston, Tyler, Lufkin, Longview, Henderson, Nacogdoches, Huntsville, and surrounding Deep East Texas communities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Map Area */}
            <div className="h-64 bg-gray-300 relative border border-gray-400 overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <MapPin className="w-12 h-12 text-jac-charcoal drop-shadow-lg" />
                <span className="bg-white px-4 py-2 text-sm font-bold shadow-md mt-2 uppercase tracking-wide">Interactive Map Area</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-jac-dark text-white pt-20 pb-8 border-t-[16px] border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="col-span-1 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img src="/Jac-it-logo-transparent.png" alt="JAC-IT Foundation Repair" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Providing dependable foundation repair and house leveling services across Deep East Texas for over 25 years.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-jac-lime hover:text-jac-dark transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg uppercase tracking-wide mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><a href="#" className="hover:text-jac-lime transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Featured Projects</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Resources / FAQ</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Safety Commitment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg uppercase tracking-wide mb-6">Locations Served</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><a href="#" className="hover:text-jac-lime transition-colors">Tyler</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Lufkin</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Longview</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Livingston</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Henderson</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg uppercase tracking-wide mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li>1-877-65-JACIT</li>
              <li>james@jac-itfoundationrepair.com</li>
              <li>Deep East Texas Region</li>
              <li>Mon-Fri: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>

        </div>

        <div className="max-w-[1400px] mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex gap-4">
            <span>&copy; 2026 Jac-It House Leveling & Foundation Repair LLC - All rights reserved.</span>
            <a href="#" className="hover:text-white">Sitemap</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <div className="flex items-center gap-6">
            <span>Web Design + Digital Marketing by Jac-It</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="border border-gray-700 p-2 hover:bg-white/5 transition-colors">
              <ChevronDown className="w-4 h-4 transform rotate-180" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
