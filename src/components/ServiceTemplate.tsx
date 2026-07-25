import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import JsonLd from './JsonLd';

const SITE_URL = 'https://www.jac-itfoundationrepair.com';

const BrandName = () => (
  <span className="inline-flex items-baseline font-normal tracking-normal lowercase">
    <span style={{ fontFamily: "'Birds of Paradise  Personal use', cursive" }} className="text-[1.5em] leading-none mr-0 capitalize">j</span>
    <span style={{ fontFamily: "'Ethnocentric Rg', sans-serif" }} className="text-[0.85em]">ac-it</span>
  </span>
);

const defaultFaqs = [
  {
    question: "What types of foundation repair do you specialize in?",
    answer: "We handle pier & beam repair, slab lifting, house leveling, foam injection, drainage solutions, and subfloor/beam repair slab repair, press piers-backed by 25+ years of experience."
  },
  {
    question: "How do I know if my home needs foundation repair?",
    answer: "Look for uneven floors, cracks in walls or ceilings, sticking doors/windows, or gaps between walls and floors. We offer free inspections to confirm."
  },
  {
    question: "Do you offer a free inspection or estimate?",
    answer: "Yes! We provide a thorough evaluation and a clear, no-obligation estimate for your repair project."
  },
  {
    question: "Are your repair methods safe and long-lasting?",
    answer: "Absolutely. We use proven techniques and precision equipment to ensure every repair is safe, reliable, and built to last."
  },
  {
    question: "Do you handle drainage and moisture issues?",
    answer: "Yes. We install solutions like French drains and vapor/moisture barriers to protect your home and prevent future foundation problems."
  },
  {
    question: "How can I schedule service or ask questions?",
    answer: "Call 1-877-65-JACIT or email james@jac-itfoundationrepair.com. Our team will answer questions and schedule your inspection promptly."
  }
];

interface ServiceTemplateProps {
  isLoading?: boolean;
  title: string;
  subtitle?: string;
  image: string;
  heroImage?: string;
  content: React.ReactNode;
  faqs?: { question: string, answer: string }[];
}

export default function ServiceTemplate({ isLoading, title, subtitle, image, heroImage, content, faqs }: ServiceTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const displayFaqs = faqs || defaultFaqs;
  const location = useLocation();
  const pageUrl = `${SITE_URL}${location.pathname}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "serviceType": title,
    "description": subtitle || `${title} services from Jac-It House Leveling & Foundation Repair`,
    "url": pageUrl,
    "areaServed": "Deep East Texas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Jac-It House Leveling & Foundation Repair",
      "telephone": "+1-877-655-2248",
      "url": SITE_URL
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <JsonLd id="service" data={serviceSchema} />
      <JsonLd id="service-faq" data={faqSchema} />
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-jac-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage || "/jacitgallery.jpeg"}
            alt={`${title} Background`}
            className="w-full h-full object-cover object-center grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-jac-charcoal/80 mix-blend-multiply"></div>
          {/* Subtle Green Overlay */}
          <div className="absolute inset-0 bg-jac-green/20 mix-blend-overlay"></div>

          {/* White Bottom Corner Design */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {/* Sub Layer 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 1.0 : 0.3 }}
              className="absolute inset-0 bg-white/20" style={{ clipPath: 'polygon(calc(100% - 38vw) 100%, 100% calc(100% - 38vw), 100% 100%)' }}
            ></motion.div>

            {/* Sub Layer 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 0.9 : 0.2 }}
              className="absolute inset-0 bg-white/40" style={{ clipPath: 'polygon(calc(100% - 34vw) 100%, 100% calc(100% - 34vw), 100% 100%)' }}
            ></motion.div>

            {/* Solid White Corner */}
            <motion.div 
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 0.8 : 0.1 }}
              className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(calc(100% - 30vw) 100%, 100% calc(100% - 30vw), 100% 100%)' }}
            ></motion.div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 text-left">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.8 : 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.9 : 0.2 }}
              className="text-xl md:text-2xl text-jac-lime font-bold uppercase tracking-widest max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>

      {/* Body Content (Split Layout) */}
      <section className="relative bg-white overflow-hidden py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-jac-charcoal mb-8">
              Expert <span className="text-jac-green">Service</span> Execution
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              {content}
            </div>
            
            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-stretch group relative overflow-hidden border border-jac-green text-jac-charcoal">
                <div className="absolute inset-0 bg-jac-green w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="group-hover:text-white px-8 py-4 font-bold tracking-wide text-sm flex items-center justify-center relative z-10 transition-colors duration-300 uppercase">
                  Schedule Free Inspection
                </div>
                <div className="border-l border-jac-green group-hover:border-transparent group-hover:text-white px-6 flex items-center justify-center relative z-10 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 w-full overflow-hidden rounded-sm group flex items-start justify-center lg:justify-end">
            <img 
              src={image} 
              alt={title} 
              className="w-full max-w-md lg:max-w-[90%] xl:max-w-[80%] h-auto object-contain object-top group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="bg-gray-50 py-20 md:py-32 border-t border-gray-200 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/[0.02] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-jac-charcoal mb-4">Answering Your Questions</h2>
            <div className="w-24 h-1 bg-jac-lime mx-auto"></div>
          </div>

          <div className="space-y-4">
            {displayFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border border-gray-200 bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-lg border-jac-green/50' : 'hover:border-gray-300'}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                  >
                    <span className={`font-subdisplay font-bold text-lg md:text-xl uppercase tracking-wide pr-8 transition-colors duration-300 ${isOpen ? 'text-jac-green' : 'text-jac-charcoal group-hover:text-jac-green'}`}>
                      {index + 1}. {faq.question}
                    </span>
                    <div className={`flex items-center justify-center shrink-0 w-8 h-8 rounded-full border transition-all duration-300 ${isOpen ? 'border-jac-green bg-jac-green text-white rotate-180' : 'border-gray-300 text-gray-500 group-hover:border-jac-green group-hover:text-jac-green'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 md:p-8 pt-0 text-gray-600 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-jac-charcoal py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-jac-green/10 via-jac-charcoal to-jac-charcoal"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-6xl text-white uppercase mb-4 tracking-tight">
            Level up your home—<br className="hidden md:block"/>Call <BrandName /> today!
          </h2>
          <div className="flex flex-col items-center gap-6 justify-center text-white mt-10">
            <div className="flex flex-col items-center gap-2">
              <a href="tel:18776552248" className="text-3xl md:text-5xl font-bold hover:text-jac-lime transition-colors tracking-wide flex items-center gap-4">
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-jac-lime" />
                1-877-65-JACIT
              </a>
              <a href="tel:14303526085" className="text-3xl md:text-5xl font-bold hover:text-jac-lime transition-colors tracking-wide flex items-center gap-4 mt-2">
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-jac-lime opacity-0 md:block hidden" />
                1-430-352-6085
              </a>
            </div>

            <div className="mt-6 inline-block">
              <Link to="/contact" className="flex items-stretch group relative overflow-hidden border border-jac-lime">
                <div className="absolute inset-0 bg-jac-lime w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="bg-black/30 group-hover:bg-transparent group-hover:text-jac-charcoal backdrop-blur-sm text-jac-lime px-6 sm:px-10 py-4 sm:py-5 font-bold tracking-wide text-sm sm:text-xl flex items-center justify-center border-r-0 relative z-10 transition-all duration-300 uppercase">
                  Schedule Free Inspection
                </div>
                <div className="bg-jac-lime/10 group-hover:bg-transparent border-l border-jac-lime/30 group-hover:border-jac-lime/0 px-4 sm:px-6 flex items-center justify-center relative z-10 transition-colors duration-300">
                  <ArrowRight className="w-6 h-6 text-jac-lime group-hover:text-jac-charcoal group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
