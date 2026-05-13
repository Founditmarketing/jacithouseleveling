import React, { useState, useEffect, useRef, useMemo } from 'react';
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
import LoadingScreen from './components/LoadingScreen';

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

const galleryItems = [
  { src: "/jacitgallery.jpeg", title: "Wall Lifting", desc: "Hydraulic lifting of exterior brick foundation." },
  { src: "/jacitgallery2.jpeg", title: "Exterior Excavation", desc: "Foundation excavation on residential structure." },
  { src: "/jacitgallery3.jpeg", title: "Interior Leveling", desc: "Completed interior with newly leveled floors." },
  { src: "/jacitgallery4.jpeg", title: "Concrete Supports", desc: "Deep concrete block installation for stability." },
  { src: "/jacitgallery5.png", title: "Subfloor Installation", desc: "Installing new structural subfloors." },
  { src: "/jacitgallery6.png", title: "Joist Replacement", desc: "Replacing damaged floor joists." },
  { src: "/jacitgallery7.png", title: "Framework Repair", desc: "Securing interior joist framework." },
];

const trustFactorsData = [
  {
    title: "Warranted Work",
    desc: "Long-term guarantees on our lifting services, providing you with lasting peace of mind for years to come.",
    icon: ShieldCheck,
    image: "/jacitgallery.jpeg"
  },
  {
    title: "Honest Service",
    desc: "Transparent pricing and clear communication from start to finish. Absolutely no hidden sales gimmicks.",
    icon: Handshake,
    image: "/jacitgallery2.jpeg"
  },
  {
    title: "Expert Crew",
    desc: "Our entire team is trained directly under founder James Wilson to ensure flawless execution on every job.",
    icon: HardHat,
    image: "/jacitgallery3.jpeg"
  },
  {
    title: "Reliable Results",
    desc: "We exclusively utilize structurally sound materials and engineering-approved methods for maximum stability.",
    icon: Construction,
    image: "/jacitgallery4.jpeg"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTrustIndex, setActiveTrustIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const shuffledGallery = useMemo(() => [...galleryItems].sort(() => Math.random() - 0.5), []);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.children[0]?.clientWidth || 450;
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft - (scrollAmount + 24),
        behavior: 'smooth'
      });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.children[0]?.clientWidth || 450;
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + (scrollAmount + 24),
        behavior: 'smooth'
      });
    }
  };

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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
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
          <div className="flex items-center relative z-20 h-10 w-28 sm:w-32 lg:w-40">
            <img src="/jacitlogohorizontalblack.png" alt="JAC-IT Foundation Repair" className={`absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 max-w-none object-contain drop-shadow-md pointer-events-auto transition-all duration-300 ${isScrolled ? 'w-32 sm:w-40 lg:w-48' : 'w-40 sm:w-48 lg:w-56'}`} />
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Gallery</NavLink>
            <NavLink href="#contact">Contact Us</NavLink>
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
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-black text-4xl text-white uppercase hover:text-jac-lime transition-colors">Home</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-black text-4xl text-white uppercase hover:text-jac-lime transition-colors">About Us</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-black text-4xl text-white uppercase hover:text-jac-lime transition-colors">Services</a>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-black text-4xl text-white uppercase hover:text-jac-lime transition-colors">Gallery</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-black text-4xl text-white uppercase hover:text-jac-lime transition-colors">Contact Us</a>
              
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

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-[80vh] flex items-center bg-jac-dark overflow-hidden pt-28 pb-12 md:pt-24 md:pb-16">
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
              className="absolute inset-0 bg-jac-green/10" style={{ clipPath: 'polygon(calc(100% - 60vw) 100%, 100% calc(100% - 60vw), 100% 100%)' }}
            ></motion.div>

            {/* Sub-layers container */}
            <div className="absolute inset-0">
              {/* Sub Layer 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 100, y: 100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="absolute inset-0 bg-jac-green/20" style={{ clipPath: 'polygon(calc(100% - 50vw) 100%, 100% calc(100% - 50vw), 100% 100%)' }}
              ></motion.div>

              {/* Sub Layer 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 100, y: 100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="absolute inset-0 bg-jac-green/40" style={{ clipPath: 'polygon(calc(100% - 40vw) 100%, 100% calc(100% - 40vw), 100% 100%)' }}
              ></motion.div>

              {/* Lowest Sub Layer 3 - Solid Jac Green (Corner) */}
              {/* Touches the bottom completely to match the sub-banner */}
              <div className="absolute inset-0 bg-jac-green" style={{ clipPath: 'polygon(calc(100% - 30vw) 100%, 100% calc(100% - 30vw), 100% 100%)' }}></div>
            </div>
          </div>
        </div>

        {/* BBB Logo Top Right */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="absolute top-20 md:top-32 right-2 md:right-12 z-20"
          >
            <img src="/bbblogo2.png" alt="BBB Accredited Business" className="h-16 sm:h-20 w-auto brightness-0 invert opacity-90 drop-shadow-md" />
          </motion.div>
        )}

        <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full mt-12 md:mt-0">
          {!isLoading && (
            <div className="max-w-3xl">

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight"
              >
                Built on Heritage and Excellence
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-medium"
              >
                Expert foundation repair and house leveling across Deep East Texas. Honest craftsmanship you can trust.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-2xl"
              >
                <a href="#projects" className="flex w-full sm:w-auto items-stretch group relative overflow-hidden border border-white">
                  <div className="absolute inset-0 bg-jac-lime w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                  <div className="flex-1 bg-black/30 group-hover:bg-transparent group-hover:text-jac-charcoal backdrop-blur-sm text-white px-6 py-4 font-bold tracking-wide text-sm flex items-center justify-center border-r-0 relative z-10 transition-all duration-300 whitespace-nowrap">
                    Explore Our Work
                  </div>
                  <div className="shrink-0 bg-black/30 group-hover:bg-transparent group-hover:text-jac-charcoal backdrop-blur-sm text-white px-4 py-4 flex items-center justify-center border-l border-white relative z-10 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </a>

                <a href="#careers" className="flex w-full sm:w-auto items-stretch group relative overflow-hidden border border-transparent hover:border-gray-200">
                  <div className="absolute inset-0 bg-jac-green w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                  <div className="flex-1 bg-white group-hover:bg-transparent group-hover:text-white text-jac-charcoal px-6 py-4 font-bold tracking-wide text-sm flex items-center justify-center relative z-10 transition-all duration-300 whitespace-nowrap">
                    Join The Team
                  </div>
                  <div className="shrink-0 bg-white group-hover:bg-transparent group-hover:text-white text-jac-charcoal px-4 py-4 flex items-center justify-center border-l border-gray-200 relative z-10 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </a>
              </motion.div>
            </div>
          )}
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
      <section className="bg-jac-green text-white pt-16 pb-16 relative z-30 -mt-1">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
            Licensed, Insured, Locally Owned &amp; Operated
          </h2>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-white/95">
              At Jac-It House Leveling & Foundation Repair, we take immense pride in serving our neighbors. As a fully licensed and insured, locally owned business, we treat every property like our own. Our deep East Texas roots mean you get honest assessments, dedicated craftsmanship, and a team that stands by its work long after the job is done.
            </p>
          </div>
        </div>
      </section>

      {/* About Jac-It Split */}
      <section id="about" className="relative bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0 relative z-10">
          {/* Left Image Side */}
          <div className="relative w-[calc(100%-20px)] mx-[10px] my-[10px] h-[250px] md:h-[400px] lg:h-[calc(100%-20px)] overflow-hidden z-10 lg:diagonal-overlay-left bg-gray-100">
            <img
              src="/jacitgallery2.jpeg"
              alt="James Wilson and Crew"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-jac-charcoal/20 mix-blend-overlay"></div>
          </div>

          {/* Right Text Space */}
          <div className="flex items-center px-8 lg:pl-16 lg:pr-12 py-12 lg:py-28 w-full justify-center lg:justify-start">
            <div className="max-w-xl">
              <h2 className="font-display font-black text-4xl uppercase tracking-wide mb-6 lg:mb-8 text-jac-charcoal">Expertise & Mission</h2>

              <div className="mb-6 lg:mb-8">
                <div className="flex gap-4 mb-3 lg:mb-4 items-start">
                  <div className="bg-jac-lime p-3 shrink-0">
                    <Construction className="w-6 h-6 lg:w-8 lg:h-8 text-jac-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-subdisplay font-bold text-xl lg:text-2xl uppercase tracking-wide">Experience</h3>
                    <p className="mt-1 lg:mt-2 text-sm lg:text-base text-gray-600 leading-relaxed">
                      With over 25 years of hands-on expertise, <BrandName /> House Leveling & Foundation Repair has successfully restored and secured foundations for homes and commercial properties across Deep East Texas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex gap-4 mb-3 lg:mb-4 items-start">
                  <div className="bg-jac-charcoal p-3 shrink-0">
                    <ShieldCheck className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-subdisplay font-bold text-xl lg:text-2xl uppercase tracking-wide">Mission</h3>
                    <p className="mt-1 lg:mt-2 text-sm lg:text-base text-gray-600 leading-relaxed">
                      To provide the structural integrity and peace of mind our neighbors deserve through unwavering honesty, meticulous craftsmanship, and reliable service that stands the test of time.
                    </p>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 font-sans mb-4 lg:mb-6 text-sm lg:text-base">
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

              <a href="#" className="inline-flex items-stretch group relative overflow-hidden border border-jac-green text-jac-charcoal mt-4">
                <div className="absolute inset-0 bg-jac-green w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="group-hover:text-white px-6 py-4 font-bold tracking-wide text-sm flex items-center justify-center relative z-10 transition-colors duration-300 uppercase">
                  Learn More About Us
                </div>
                <div className="border-l border-jac-green group-hover:border-transparent group-hover:text-white px-6 flex items-center justify-center relative z-10 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-black py-24 relative overflow-hidden">
        {/* Geometric Corner Overlays (Bottom Left) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute inset-0 bg-white/[0.02]" style={{ clipPath: 'polygon(0 100%, 0 calc(100% - 60vw), 60vw 100%)' }}></div>
          <div className="absolute inset-0 bg-white/[0.04]" style={{ clipPath: 'polygon(0 100%, 0 calc(100% - 50vw), 50vw 100%)' }}></div>
          <div className="absolute inset-0 bg-white/[0.06]" style={{ clipPath: 'polygon(0 100%, 0 calc(100% - 40vw), 40vw 100%)' }}></div>
          <div className="absolute inset-0 bg-white/[0.08]" style={{ clipPath: 'polygon(0 100%, 0 calc(100% - 30vw), 30vw 100%)' }}></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 mb-4 md:mb-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 md:mb-12 text-white">
            <div className="max-w-2xl">
              <h2 className="font-display font-black text-5xl uppercase md:whitespace-nowrap">What We Do</h2>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0 relative z-50">
              <button onClick={handleScrollLeft} className="w-12 h-12 border-2 border-white/20 flex items-center justify-center hover:bg-jac-lime hover:border-jac-lime hover:text-jac-charcoal transition-all z-50 relative pointer-events-auto cursor-pointer">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={handleScrollRight} className="w-12 h-12 border-2 border-white/20 flex items-center justify-center hover:bg-jac-lime hover:border-jac-lime hover:text-jac-charcoal transition-all z-50 relative pointer-events-auto cursor-pointer">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="w-full relative z-10" style={{ paddingLeft: 'max(1.5rem, calc((100vw - 1400px) / 2 + 1.5rem))' }}>
          <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-8 pr-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

            {/* Lead Block */}
            <div className="min-w-[85vw] md:min-w-[450px] bg-jac-lime p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group snap-center shadow-md">
              {/* Background Watermark */}
              <div className="absolute -bottom-16 -right-16 opacity-[0.05] group-hover:scale-110 group-hover:opacity-[0.08] group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                <ShieldCheck className="w-[400px] h-[400px] text-jac-charcoal" />
              </div>
              <div className="absolute right-8 top-8 bg-jac-charcoal text-jac-lime p-4 rounded-none shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="w-6 h-6" />
              </div>
              <h3 className="font-subdisplay font-bold text-5xl md:text-6xl leading-none text-jac-charcoal uppercase relative z-10">
                Why<br />Choose<br />Us
              </h3>
              <div className="w-12 h-[3px] bg-jac-charcoal mt-8 group-hover:w-full transition-all duration-500 relative z-10"></div>
              <p className="mt-6 font-medium text-jac-charcoal/80 text-lg relative z-10 max-w-xs">
                Precision engineering and honest pricing for all your foundation needs.
              </p>
            </div>

            {/* Service Block 01 */}
            <div className="min-w-[85vw] md:min-w-[450px] bg-white p-8 md:p-10 border border-gray-200/60 shadow-sm hover:shadow-2xl group relative overflow-hidden snap-center transition-all duration-500">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-gray-50 rounded-full z-0 group-hover:scale-[30] group-hover:bg-jac-charcoal transition-all duration-700 ease-in-out"></div>
              <div className="absolute top-6 right-8 font-display font-black text-6xl md:text-7xl text-gray-100 group-hover:text-white/5 transition-colors duration-500 z-0 select-none">01</div>
              <div className="relative z-10 flex flex-col h-full">
                <img src="/Concrete-Pillar.H03.2k.png" alt="Pier & Beam Repair" className="w-36 h-36 mb-6 object-contain drop-shadow-sm group-hover:-translate-y-2 group-hover:scale-105 transition-transform duration-500 relative z-10" />
                <div className="w-12 h-[3px] bg-jac-lime mb-5 group-hover:w-full transition-all duration-500 z-10"></div>
                <h4 className="font-subdisplay font-bold text-3xl uppercase mb-4 group-hover:text-white transition-colors duration-500 relative z-10">Pier & Beam Repair</h4>
                <p className="text-gray-600 group-hover:text-gray-300 text-base mb-8 leading-relaxed transition-colors duration-500 relative z-10 flex-grow">
                  Comprehensive adjustments and timber replacements to restore stability to older, elevated homes.
                </p>
                <a href="#" className="font-bold tracking-wide flex items-center gap-2 text-jac-charcoal group-hover:text-jac-lime transition-colors duration-500 relative z-10 mt-auto uppercase text-sm">
                  Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Service Block 02 */}
            <div className="min-w-[85vw] md:min-w-[450px] bg-white p-8 md:p-10 border border-gray-200/60 shadow-sm hover:shadow-2xl group relative overflow-hidden snap-center transition-all duration-500">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-gray-50 rounded-full z-0 group-hover:scale-[30] group-hover:bg-jac-charcoal transition-all duration-700 ease-in-out"></div>
              <div className="absolute top-6 right-8 font-display font-black text-6xl md:text-7xl text-gray-100 group-hover:text-white/5 transition-colors duration-500 z-0 select-none">02</div>
              <div className="relative z-10 flex flex-col h-full">
                <img src="/Broken-Wall-Panel.H03.2k.png" alt="Slab Repair" className="w-36 h-36 mb-6 object-contain drop-shadow-sm group-hover:-translate-y-2 group-hover:scale-105 transition-transform duration-500 relative z-10" />
                <div className="w-12 h-[3px] bg-jac-lime mb-5 group-hover:w-full transition-all duration-500 z-10"></div>
                <h4 className="font-subdisplay font-bold text-3xl uppercase mb-4 group-hover:text-white transition-colors duration-500 relative z-10">Slab Repair</h4>
                <p className="text-gray-600 group-hover:text-gray-300 text-base mb-8 leading-relaxed transition-colors duration-500 relative z-10 flex-grow">
                  Hydraulic pressing and steel/concrete pier installation to permanently level concrete slabs.
                </p>
                <a href="#" className="font-bold tracking-wide flex items-center gap-2 text-jac-charcoal group-hover:text-jac-lime transition-colors duration-500 relative z-10 mt-auto uppercase text-sm">
                  Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Service Block 03 */}
            <div className="min-w-[85vw] md:min-w-[450px] bg-white p-8 md:p-10 border border-gray-200/60 shadow-sm hover:shadow-2xl group relative overflow-hidden snap-center transition-all duration-500">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-gray-50 rounded-full z-0 group-hover:scale-[30] group-hover:bg-jac-charcoal transition-all duration-700 ease-in-out"></div>
              <div className="absolute top-6 right-8 font-display font-black text-6xl md:text-7xl text-gray-100 group-hover:text-white/5 transition-colors duration-500 z-0 select-none">03</div>
              <div className="relative z-10 flex flex-col h-full">
                <img src="/Sandblasting-Machine-Red.H03.2k.png" alt="Foam Injection" className="w-36 h-36 mb-6 object-contain drop-shadow-sm group-hover:-translate-y-2 group-hover:scale-105 transition-transform duration-500 relative z-10" />
                <div className="w-12 h-[3px] bg-jac-lime mb-5 group-hover:w-full transition-all duration-500 z-10"></div>
                <h4 className="font-subdisplay font-bold text-3xl uppercase mb-4 group-hover:text-white transition-colors duration-500 relative z-10">Foam Injection</h4>
                <p className="text-gray-600 group-hover:text-gray-300 text-base mb-8 leading-relaxed transition-colors duration-500 relative z-10 flex-grow">
                  Efficient polyurethane foam lifting to void-fill and stabilize sinking concrete driveways and patios.
                </p>
                <a href="#" className="font-bold tracking-wide flex items-center gap-2 text-jac-charcoal group-hover:text-jac-lime transition-colors duration-500 relative z-10 mt-auto uppercase text-sm">
                  Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Service Block 04 */}
            <div className="min-w-[85vw] md:min-w-[450px] bg-white p-8 md:p-10 border border-gray-200/60 shadow-sm hover:shadow-2xl group relative overflow-hidden snap-center transition-all duration-500">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-gray-50 rounded-full z-0 group-hover:scale-[30] group-hover:bg-jac-charcoal transition-all duration-700 ease-in-out"></div>
              <div className="absolute top-6 right-8 font-display font-black text-6xl md:text-7xl text-gray-100 group-hover:text-white/5 transition-colors duration-500 z-0 select-none">04</div>
              <div className="relative z-10 flex flex-col h-full">
                <img src="/Steel-Shower-Drain.H03.2k.png" alt="Drainage Solutions" className="w-36 h-36 mb-6 object-contain drop-shadow-sm group-hover:-translate-y-2 group-hover:scale-105 transition-transform duration-500 relative z-10" />
                <div className="w-12 h-[3px] bg-jac-lime mb-5 group-hover:w-full transition-all duration-500 z-10"></div>
                <h4 className="font-subdisplay font-bold text-3xl uppercase mb-4 group-hover:text-white transition-colors duration-500 relative z-10">Drainage Solutions</h4>
                <p className="text-gray-600 group-hover:text-gray-300 text-base mb-8 leading-relaxed transition-colors duration-500 relative z-10 flex-grow">
                  French drains and grading adjustments to divert water away from your foundation.
                </p>
                <a href="#" className="font-bold tracking-wide flex items-center gap-2 text-jac-charcoal group-hover:text-jac-lime transition-colors duration-500 relative z-10 mt-auto uppercase text-sm">
                  Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Service Block 05 */}
            <div className="min-w-[85vw] md:min-w-[450px] bg-white p-8 md:p-10 border border-gray-200/60 shadow-sm hover:shadow-2xl group relative overflow-hidden snap-center transition-all duration-500">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-gray-50 rounded-full z-0 group-hover:scale-[30] group-hover:bg-jac-charcoal transition-all duration-700 ease-in-out"></div>
              <div className="absolute top-6 right-8 font-display font-black text-6xl md:text-7xl text-gray-100 group-hover:text-white/5 transition-colors duration-500 z-0 select-none">05</div>
              <div className="relative z-10 flex flex-col h-full">
                <img src="/Construction-Foundation-Pit.H03.2k.png" alt="Root Barriers" className="w-36 h-36 mb-6 object-contain drop-shadow-sm group-hover:-translate-y-2 group-hover:scale-105 transition-transform duration-500 relative z-10" />
                <div className="w-12 h-[3px] bg-jac-lime mb-5 group-hover:w-full transition-all duration-500 z-10"></div>
                <h4 className="font-subdisplay font-bold text-3xl uppercase mb-4 group-hover:text-white transition-colors duration-500 relative z-10">Root Barriers</h4>
                <p className="text-gray-600 group-hover:text-gray-300 text-base mb-8 leading-relaxed transition-colors duration-500 relative z-10 flex-grow">
                  Preventative installations to stop invasive tree roots from compromising structural integrity.
                </p>
                <a href="#" className="font-bold tracking-wide flex items-center gap-2 text-jac-charcoal group-hover:text-jac-lime transition-colors duration-500 relative z-10 mt-auto uppercase text-sm">
                  Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Service Block 06 */}
            <div className="min-w-[85vw] md:min-w-[450px] bg-white p-8 md:p-10 border border-gray-200/60 shadow-sm hover:shadow-2xl group relative overflow-hidden snap-center transition-all duration-500">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-gray-50 rounded-full z-0 group-hover:scale-[30] group-hover:bg-jac-charcoal transition-all duration-700 ease-in-out"></div>
              <div className="absolute top-6 right-8 font-display font-black text-6xl md:text-7xl text-gray-100 group-hover:text-white/5 transition-colors duration-500 z-0 select-none">06</div>
              <div className="relative z-10 flex flex-col h-full">
                <img src="/Gear-Setting-Repair-Symbol.H03.2k.png" alt="Commercial Prep" className="w-36 h-36 mb-6 object-contain drop-shadow-sm group-hover:-translate-y-2 group-hover:scale-105 transition-transform duration-500 relative z-10" />
                <div className="w-12 h-[3px] bg-jac-lime mb-5 group-hover:w-full transition-all duration-500 z-10"></div>
                <h4 className="font-subdisplay font-bold text-3xl uppercase mb-4 group-hover:text-white transition-colors duration-500 relative z-10">Commercial Prep</h4>
                <p className="text-gray-600 group-hover:text-gray-300 text-base mb-8 leading-relaxed transition-colors duration-500 relative z-10 flex-grow">
                  Heavy-duty leveling solutions tailored for industrial and commercial structures in East Texas.
                </p>
                <a href="#" className="font-bold tracking-wide flex items-center gap-2 text-jac-charcoal group-hover:text-jac-lime transition-colors duration-500 relative z-10 mt-auto uppercase text-sm">
                  Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Service Block 07 */}
            <div className="min-w-[85vw] md:min-w-[450px] bg-white p-8 md:p-10 border border-gray-200/60 shadow-sm hover:shadow-2xl group relative overflow-hidden snap-center transition-all duration-500">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-gray-50 rounded-full z-0 group-hover:scale-[30] group-hover:bg-jac-charcoal transition-all duration-700 ease-in-out"></div>
              <div className="absolute top-6 right-8 font-display font-black text-6xl md:text-7xl text-gray-100 group-hover:text-white/5 transition-colors duration-500 z-0 select-none">07</div>
              <div className="relative z-10 flex flex-col h-full">
                <img src="/Survey-Automatic-Level-on-Tripod.H03.2k.png" alt="Free Evaluations" className="w-36 h-36 mb-6 object-contain drop-shadow-sm group-hover:-translate-y-2 group-hover:scale-105 transition-transform duration-500 relative z-10" />
                <div className="w-12 h-[3px] bg-jac-lime mb-5 group-hover:w-full transition-all duration-500 z-10"></div>
                <h4 className="font-subdisplay font-bold text-3xl uppercase mb-4 group-hover:text-white transition-colors duration-500 relative z-10">Free Evaluations</h4>
                <p className="text-gray-600 group-hover:text-gray-300 text-base mb-8 leading-relaxed transition-colors duration-500 relative z-10 flex-grow">
                  Comprehensive structural assessments from our seasoned experts at zero upfront cost.
                </p>
                <a href="#" className="font-bold tracking-wide flex items-center gap-2 text-jac-charcoal group-hover:text-jac-lime transition-colors duration-500 relative z-10 mt-auto uppercase text-sm">
                  Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white p-2 md:p-4 overflow-hidden">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {shuffledGallery.slice(0, 6).map((item, idx) => (
              <div key={idx} onClick={() => setLightboxIndex(idx)} className="group cursor-pointer relative overflow-hidden aspect-[4/3]">
                <img src={item.src} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {/* Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-jac-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize className="w-10 h-10 md:w-12 md:h-12 text-white scale-75 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Factors Split Section */}
      <section className="relative bg-gray-50 border-t border-gray-200">
        {/* Geometric Corner Overlays (Bottom Left) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-50">
          <div className="absolute inset-0 bg-black/[0.01]" style={{ clipPath: 'polygon(0 100%, 0 calc(100% - 60vw), 60vw 100%)' }}></div>
          <div className="absolute inset-0 bg-black/[0.02]" style={{ clipPath: 'polygon(0 100%, 0 calc(100% - 50vw), 50vw 100%)' }}></div>
          <div className="absolute inset-0 bg-black/[0.03]" style={{ clipPath: 'polygon(0 100%, 0 calc(100% - 40vw), 40vw 100%)' }}></div>
          <div className="absolute inset-0 bg-black/[0.04]" style={{ clipPath: 'polygon(0 100%, 0 calc(100% - 30vw), 30vw 100%)' }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 min-h-[600px] relative z-10">
          
          {/* Left Text Space */}
          <div className="flex items-center px-6 lg:px-12 py-12 lg:py-24 w-full justify-center order-1 lg:order-1">
            <div className="w-full max-w-lg lg:mx-auto">
              <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-wide mb-4 text-jac-charcoal break-words">Why Homeowners Trust <BrandName /></h2>
              <div className="flex flex-col gap-3">
                {trustFactorsData.map((factor, idx) => {
                  const isActive = activeTrustIndex === idx;
                  const Icon = factor.icon;

                  return (
                    <div 
                      key={idx} 
                      onClick={() => setActiveTrustIndex(idx)}
                      className={`group cursor-pointer transition-all duration-500 border border-transparent relative overflow-hidden p-5 ${isActive ? 'bg-jac-green shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] z-10 rounded-none' : 'bg-transparent border-l-[6px] hover:bg-white hover:border-gray-200 hover:border-l-gray-300 hover:shadow-lg hover:-translate-y-1 rounded-r-sm'}`}
                    >
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 transition-colors duration-300 relative ${isActive ? 'text-white/10' : 'text-gray-400 group-hover:text-gray-600'}`}>
                            <Icon className={`transition-all duration-500 ${isActive ? 'w-24 h-24 absolute -left-4 sm:-left-6' : 'w-8 h-8'}`} />
                          </div>
                          <h3 className={`font-subdisplay font-bold uppercase tracking-wide transition-colors ${isActive ? 'text-3xl text-white' : 'text-2xl text-gray-500 group-hover:text-jac-charcoal'}`}>
                            {factor.title}
                          </h3>
                        </div>
                        <div className={`flex items-center justify-center transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-gray-400'}`}>
                          <ChevronRight className={`transition-all duration-300 ${isActive ? 'rotate-90 w-8 h-8' : 'w-5 h-5'}`} />
                        </div>
                      </div>
                      
                      {/* Expanded Content */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out relative z-10 ${isActive ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                        <p className={`leading-relaxed ml-16 ${isActive ? 'text-base text-white/90' : 'text-sm text-gray-600'}`}>
                          {factor.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative w-[calc(100%-20px)] mx-[10px] my-[10px] h-[300px] sm:min-h-[250px] md:min-h-[400px] lg:h-[calc(100%-20px)] overflow-hidden z-10 lg:diagonal-overlay order-2 lg:order-2 ml-auto bg-gray-100">
            <motion.img
              key={activeTrustIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={trustFactorsData[activeTrustIndex].image}
              alt="Jac-It Trust Factors"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-jac-charcoal/20 mix-blend-overlay pointer-events-none"></div>
          </div>

        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="bg-jac-charcoal py-24 relative overflow-hidden">

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-6xl text-jac-lime uppercase mb-6 tracking-tight">
            Secure Your Home's Future Today!
          </h2>
          <div className="flex flex-col items-center gap-6 justify-center text-white">
            <div className="flex flex-col items-center gap-1">
              <a href="tel:18776552248" className="text-3xl md:text-5xl font-bold hover:text-white/80 tracking-wide">
                1-877-65-JACIT
              </a>
              <a href="tel:18776552248" className="text-lg md:text-xl text-gray-400 font-medium hover:text-white/80 tracking-wider">
                1-877-655-2248
              </a>
            </div>
            <a href="mailto:james@jac-itfoundationrepair.com" className="text-lg md:text-xl text-gray-400 hover:text-jac-lime font-medium">
              james@jac-itfoundationrepair.com
            </a>

            <div className="mt-8 inline-block">
              <a href="#contact" className="flex items-stretch group relative overflow-hidden border border-white">
                <div className="absolute inset-0 bg-jac-lime w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="bg-black/30 group-hover:bg-transparent group-hover:text-jac-charcoal backdrop-blur-sm text-white px-4 sm:px-8 py-4 sm:py-5 font-bold tracking-wide text-sm sm:text-lg flex items-center justify-center border-r-0 relative z-10 transition-all duration-300 uppercase">
                  Claim Your Free Evaluation
                </div>
                <div className="bg-white group-hover:bg-transparent border-l border-white/20 group-hover:border-jac-lime/0 px-4 sm:px-6 flex items-center justify-center relative z-10 transition-colors duration-300">
                  <ArrowRight className="w-6 h-6 text-jac-charcoal group-hover:text-jac-charcoal group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Differentiators */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Geometric Corner Overlays (Bottom Right) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute inset-0 bg-black/[0.01]" style={{ clipPath: 'polygon(calc(100% - 60vw) 100%, 100% calc(100% - 60vw), 100% 100%)' }}></div>
          <div className="absolute inset-0 bg-black/[0.02]" style={{ clipPath: 'polygon(calc(100% - 50vw) 100%, 100% calc(100% - 50vw), 100% 100%)' }}></div>
          <div className="absolute inset-0 bg-black/[0.03]" style={{ clipPath: 'polygon(calc(100% - 40vw) 100%, 100% calc(100% - 40vw), 100% 100%)' }}></div>
          <div className="absolute inset-0 bg-black/[0.04]" style={{ clipPath: 'polygon(calc(100% - 30vw) 100%, 100% calc(100% - 30vw), 100% 100%)' }}></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-jac-charcoal">The <BrandName /> Difference</h2>
          </div>

          <div className="relative mt-12">
            {/* The Horizontal Line Background */}
            <div className="hidden md:block absolute top-[72px] left-[15%] right-[15%] h-[2px] bg-jac-green/30 z-0 rounded-full"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              
              <div className="flex flex-col items-center text-center group bg-white border border-jac-green/30 p-8 pt-10 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden rounded-sm hover:-translate-y-2">
                {/* Decorative Corner Accents */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-transparent group-hover:border-jac-green max-md:border-jac-green group-hover:top-4 max-md:top-4 group-hover:left-4 max-md:left-4"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-transparent group-hover:border-jac-green max-md:border-jac-green group-hover:bottom-4 max-md:bottom-4 group-hover:right-4 max-md:right-4"></div>
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-jac-green/0 to-jac-lime/0 group-hover:from-jac-green/5 max-md:from-jac-green/5 group-hover:to-jac-lime/5 max-md:to-jac-lime/5 transition-all duration-500 z-0"></div>
                
                {/* Watermark Number */}
                <div className="absolute top-2 right-4 text-7xl font-display font-black text-gray-100 group-hover:text-jac-lime/20 max-md:text-jac-lime/20 transition-colors duration-500 select-none z-0">
                  01
                </div>
                <h4 className="font-subdisplay font-bold text-2xl uppercase mb-4 mt-6 text-jac-charcoal tracking-wide relative z-10 group-hover:text-jac-green max-md:text-jac-green transition-colors duration-300">No Cut Corners</h4>
                <p className="text-gray-600 leading-relaxed max-w-sm relative z-10">Unlike competitors who space piers too far apart to cut costs, we install structural supports at engineering-approved intervals, ensuring the repair outlasts your mortgage.</p>
              </div>

              <div className="flex flex-col items-center text-center group bg-white border border-jac-green/30 p-8 pt-10 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden rounded-sm hover:-translate-y-2">
                {/* Decorative Corner Accents */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-transparent group-hover:border-jac-green max-md:border-jac-green group-hover:top-4 max-md:top-4 group-hover:left-4 max-md:left-4"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-transparent group-hover:border-jac-green max-md:border-jac-green group-hover:bottom-4 max-md:bottom-4 group-hover:right-4 max-md:right-4"></div>
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-jac-green/0 to-jac-lime/0 group-hover:from-jac-green/5 max-md:from-jac-green/5 group-hover:to-jac-lime/5 max-md:to-jac-lime/5 transition-all duration-500 z-0"></div>

                {/* Watermark Number */}
                <div className="absolute top-2 right-4 text-7xl font-display font-black text-gray-100 group-hover:text-jac-lime/20 max-md:text-jac-lime/20 transition-colors duration-500 select-none z-0">
                  02
                </div>
                <h4 className="font-subdisplay font-bold text-2xl uppercase mb-4 mt-6 text-jac-charcoal tracking-wide relative z-10 group-hover:text-jac-green max-md:text-jac-green transition-colors duration-300">Heavy-Duty Materials</h4>
                <p className="text-gray-600 leading-relaxed max-w-sm relative z-10">We use commercial-grade concrete cylinders and steel shims exclusively. We never use subpar wood shims on slab foundations that will rot away in Texas humidity.</p>
              </div>

              <div className="flex flex-col items-center text-center group bg-white border border-jac-green/30 p-8 pt-10 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden rounded-sm hover:-translate-y-2">
                {/* Decorative Corner Accents */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-transparent group-hover:border-jac-green max-md:border-jac-green group-hover:top-4 max-md:top-4 group-hover:left-4 max-md:left-4"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-transparent group-hover:border-jac-green max-md:border-jac-green group-hover:bottom-4 max-md:bottom-4 group-hover:right-4 max-md:right-4"></div>
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-jac-green/0 to-jac-lime/0 group-hover:from-jac-green/5 max-md:from-jac-green/5 group-hover:to-jac-lime/5 max-md:to-jac-lime/5 transition-all duration-500 z-0"></div>

                {/* Watermark Number */}
                <div className="absolute top-2 right-4 text-7xl font-display font-black text-gray-100 group-hover:text-jac-lime/20 max-md:text-jac-lime/20 transition-colors duration-500 select-none z-0">
                  03
                </div>
                <h4 className="font-subdisplay font-bold text-2xl uppercase mb-4 mt-6 text-jac-charcoal tracking-wide relative z-10 group-hover:text-jac-green max-md:text-jac-green transition-colors duration-300">Owner On-Site</h4>
                <p className="text-gray-600 leading-relaxed max-w-sm relative z-10">James Wilson personally oversees crucial lifts. You aren't getting a franchise sub-contractor; you're getting the owner ensuring your home is handled perfectly.</p>
              </div>

            </div>
          </div>
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
                    <h5 className="font-bold text-white uppercase tracking-wide text-sm mb-1">Toll-Free</h5>
                    <a href="tel:18776552248" className="text-xl font-medium hover:text-jac-lime transition-colors">1-877-65-JACIT (1-877-655-2248)</a>
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
                    <p className="leading-relaxed text-gray-400">Livingston, Tyler, Lufkin, Longview, Henderson, Nacogdoches, Huntsville, and surrounding Deep East Texas communities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map with Service Radius */}
            <div className="h-64 relative border border-white/10 overflow-hidden bg-gray-900 rounded-sm shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1746200.7513280031!2d-96.11585642233777!3d31.621213388701955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863777a8dd824cfd%3A0xc665e77bba663249!2sEast%20Texas%2C%20TX!5e0!3m2!1sen!2sus!4v1715535560416!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0 grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
              {/* CSS Radius Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-[3px] border-jac-lime bg-jac-lime/10 pointer-events-none z-10 animate-pulse mix-blend-screen"></div>
            </div>
          </div>

          {/* Form - Right Side */}
          <div className="relative z-20 flex flex-col justify-center lg:pl-8">
            <h2 className="font-display font-black text-3xl text-white uppercase mb-8 relative z-10">Request an Estimate</h2>
            <form className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input type="text" id="fname" placeholder=" " className="peer w-full bg-white/5 border-2 border-white/10 focus:border-jac-lime focus:bg-white/10 rounded-none pt-6 pb-2 px-4 focus:outline-none transition-all duration-300 text-white font-bold" />
                  <label htmlFor="fname" className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-gray-400 transition-all duration-300 peer-focus:text-[10px] peer-focus:-translate-y-2 peer-focus:text-jac-lime peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-2 pointer-events-none">First Name *</label>
                </div>
                <div className="relative">
                  <input type="text" id="lname" placeholder=" " className="peer w-full bg-white/5 border-2 border-white/10 focus:border-jac-lime focus:bg-white/10 rounded-none pt-6 pb-2 px-4 focus:outline-none transition-all duration-300 text-white font-bold" />
                  <label htmlFor="lname" className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-gray-400 transition-all duration-300 peer-focus:text-[10px] peer-focus:-translate-y-2 peer-focus:text-jac-lime peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-2 pointer-events-none">Last Name *</label>
                </div>
              </div>
              <div className="relative">
                <input type="email" id="email" placeholder=" " className="peer w-full bg-white/5 border-2 border-white/10 focus:border-jac-lime focus:bg-white/10 rounded-none pt-6 pb-2 px-4 focus:outline-none transition-all duration-300 text-white font-bold" />
                <label htmlFor="email" className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-gray-400 transition-all duration-300 peer-focus:text-[10px] peer-focus:-translate-y-2 peer-focus:text-jac-lime peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-2 pointer-events-none">Email Address *</label>
              </div>
              <div className="relative">
                <input type="tel" id="phone" placeholder=" " className="peer w-full bg-white/5 border-2 border-white/10 focus:border-jac-lime focus:bg-white/10 rounded-none pt-6 pb-2 px-4 focus:outline-none transition-all duration-300 text-white font-bold" />
                <label htmlFor="phone" className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-gray-400 transition-all duration-300 peer-focus:text-[10px] peer-focus:-translate-y-2 peer-focus:text-jac-lime peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-2 pointer-events-none">Phone Number *</label>
              </div>
              <div className="relative">
                <textarea id="message" rows={4} placeholder=" " className="peer w-full bg-white/5 border-2 border-white/10 focus:border-jac-lime focus:bg-white/10 rounded-none pt-6 pb-2 px-4 focus:outline-none transition-all duration-300 text-white font-bold resize-none"></textarea>
                <label htmlFor="message" className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-gray-400 transition-all duration-300 peer-focus:text-[10px] peer-focus:-translate-y-2 peer-focus:text-jac-lime peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-2 pointer-events-none">How can we help?</label>
              </div>
              <button type="submit" className="w-full flex items-stretch group relative overflow-hidden border border-jac-lime mt-6">
                <div className="absolute inset-0 bg-jac-lime w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="w-full text-jac-lime group-hover:text-jac-charcoal px-8 py-4 font-bold tracking-wide text-lg flex items-center justify-center relative z-10 transition-colors duration-300 uppercase">
                  Submit Request
                </div>
                <div className="border-l border-jac-lime/30 group-hover:border-transparent group-hover:text-jac-charcoal px-6 flex items-center justify-center relative z-10 transition-colors duration-300 text-jac-lime">
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-jac-dark text-white pt-16 lg:pt-24 pb-8 border-t border-white/5 relative z-0 overflow-hidden">
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
              <li><a href="#" className="hover:text-jac-lime transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Featured Projects</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Resources / FAQ</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Safety Commitment</a></li>
            </ul>
          </div>

          <div className="lg:pl-8">
            <div className="mb-8">
              <h4 className="font-subdisplay font-bold text-lg uppercase tracking-wide mb-3">Locations Served</h4>
              <div className="w-8 h-[2px] bg-jac-lime"></div>
            </div>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><a href="#" className="hover:text-jac-lime transition-colors">Tyler</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Lufkin</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Longview</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Livingston</a></li>
              <li><a href="#" className="hover:text-jac-lime transition-colors">Henderson</a></li>
            </ul>
          </div>

          <div className="lg:pl-8">
            <div className="mb-8">
              <h4 className="font-subdisplay font-bold text-lg uppercase tracking-wide mb-3">Contact</h4>
              <div className="w-8 h-[2px] bg-jac-lime"></div>
            </div>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li>1-877-65-JACIT</li>
              <li>james@jac-itfoundationrepair.com</li>
              <li>Deep East Texas Region</li>
              <li>Mon-Fri: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>

        </div>

        <div className="max-w-[1400px] mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex gap-4">
            <span>&copy; 2026 <FooterBrandName /> House Leveling & Foundation Repair LLC - All rights reserved.</span>
            <a href="#" className="hover:text-white">Sitemap</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <div className="flex items-center gap-6">
            <span>Web Design + Digital Marketing by <FooterBrandName /></span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="border border-gray-700 p-2 hover:bg-white/5 transition-colors rounded-sm">
              <ChevronDown className="w-4 h-4 transform rotate-180" />
            </button>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer group/lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-jac-lime transition-colors z-50">
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-2 md:p-4 text-white/50 hover:text-white hover:scale-110 transition-all z-50 opacity-100 md:opacity-0 md:group-hover/lightbox:opacity-100"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev !== null && prev > 0 ? prev - 1 : shuffledGallery.length - 1); }}
          >
            <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
          </button>

          <img src={shuffledGallery[lightboxIndex].src} className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl" onClick={(e) => e.stopPropagation()} />

          <button 
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-2 md:p-4 text-white/50 hover:text-white hover:scale-110 transition-all z-50 opacity-100 md:opacity-0 md:group-hover/lightbox:opacity-100"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev !== null && prev < shuffledGallery.length - 1 ? prev + 1 : 0); }}
          >
            <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
          </button>
        </div>
      )}
    </div>
  );
}
