import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import JsonLd from './JsonLd';
import type { Location } from '../data/locations';

const SITE_URL = 'https://www.jac-itfoundationrepair.com';

const BrandName = () => (
  <span className="inline-flex items-baseline font-normal tracking-normal lowercase">
    <span style={{ fontFamily: "'Birds of Paradise  Personal use', cursive" }} className="text-[1.5em] leading-none mr-0 capitalize">j</span>
    <span style={{ fontFamily: "'Ethnocentric Rg', sans-serif" }} className="text-[0.85em]">ac-it</span>
  </span>
);

const services = [
  { name: 'Pier & Beam Repair', path: '/services/pier-and-beam' },
  { name: 'Foundation Repair', path: '/services/foundation-repair' },
  { name: 'House Leveling', path: '/services/house-leveling' },
  { name: 'Press Piers', path: '/services/press-piers' },
  { name: 'Slab Repair', path: '/services/slab-repair' },
  { name: 'Repair Methods', path: '/services/repair-methods' },
  { name: 'Foam Injection', path: '/services/foam-injection' },
  { name: 'Drainage Solutions', path: '/services/drainage-solutions' },
];

interface LocationTemplateProps extends Location {
  isLoading?: boolean;
}

export default function LocationTemplate({
  isLoading,
  city,
  county,
  subtitle,
  heroImage,
  image,
  intro,
  factors,
  nearbyAreas,
  faqs,
}: LocationTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const routerLocation = useLocation();
  const pageUrl = `${SITE_URL}${routerLocation.pathname}`;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Jac-It House Leveling & Foundation Repair - ${city}, TX`,
    "description": `Foundation repair, house leveling, and drainage solutions for homeowners in ${city}, Texas and throughout ${county}.`,
    "image": `${SITE_URL}/jacitlogohorizontal.png`,
    "url": pageUrl,
    "telephone": "+1-877-655-2248",
    "email": "james@jac-itfoundationrepair.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "City", "name": `${city}, TX` },
      { "@type": "AdministrativeArea", "name": `${county}, TX` },
      ...nearbyAreas.map((area) => ({ "@type": "Place", "name": `${area}, TX` }))
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "makesOffer": services.map((service) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": `${service.name} in ${city}, TX`,
        "url": `${SITE_URL}${service.path}`
      }
    })),
    "sameAs": ["https://www.facebook.com/profile.php?id=61582509133880"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": `${city}, TX`, "item": pageUrl }
    ]
  };

  return (
    <>
      <JsonLd id="location-business" data={localBusinessSchema} />
      <JsonLd id="location-faq" data={faqSchema} />
      <JsonLd id="location-breadcrumb" data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-jac-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={`Foundation repair in ${city}, Texas`}
            className="w-full h-full object-cover object-center grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-jac-charcoal/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-jac-green/20 mix-blend-overlay"></div>

          {/* White Bottom Corner Design */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 1.0 : 0.3 }}
              className="absolute inset-0 bg-white/20" style={{ clipPath: 'polygon(calc(100% - 38vw) 100%, 100% calc(100% - 38vw), 100% 100%)' }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 0.9 : 0.2 }}
              className="absolute inset-0 bg-white/40" style={{ clipPath: 'polygon(calc(100% - 34vw) 100%, 100% calc(100% - 34vw), 100% 100%)' }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 0.8 : 0.1 }}
              className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(calc(100% - 30vw) 100%, 100% calc(100% - 30vw), 100% 100%)' }}
            ></motion.div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 text-left">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.7 : 0.05 }}
            className="flex items-center gap-2 text-jac-lime font-bold uppercase tracking-widest text-xs sm:text-sm mb-4"
          >
            <MapPin className="w-4 h-4" />
            {county}, Texas
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.8 : 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4"
          >
            {city} Foundation Repair
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.9 : 0.2 }}
            className="text-lg md:text-2xl text-jac-lime font-bold uppercase tracking-widest max-w-3xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* Body Content (Split Layout) */}
      <section className="relative bg-white overflow-hidden py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-jac-charcoal mb-8">
              Serving <span className="text-jac-green">{city}</span> For 25+ Years
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              {intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-4">
              <Link to="/contact" className="inline-flex items-stretch group relative overflow-hidden border border-jac-green text-jac-charcoal">
                <div className="absolute inset-0 bg-jac-green w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="group-hover:text-white px-8 py-4 font-bold tracking-wide text-sm flex items-center justify-center relative z-10 transition-colors duration-300 uppercase whitespace-nowrap">
                  Free {city} Inspection
                </div>
                <div className="border-l border-jac-green group-hover:border-transparent group-hover:text-white px-6 flex items-center justify-center relative z-10 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <a href="tel:18776552248" className="inline-flex items-center justify-center gap-3 border border-jac-charcoal px-8 py-4 font-bold tracking-wide text-sm uppercase text-jac-charcoal hover:bg-jac-charcoal hover:text-white transition-colors duration-300 whitespace-nowrap">
                <Phone className="w-4 h-4 shrink-0" /> 1-877-65-JACIT
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 w-full overflow-hidden rounded-sm group flex items-start justify-center lg:justify-end">
            <img
              src={image}
              alt={`Foundation repair services in ${city}, TX`}
              className="w-full max-w-md lg:max-w-[90%] xl:max-w-[80%] h-auto object-contain object-top group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Local Conditions */}
      <section className="bg-jac-charcoal py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-jac-green/10 via-jac-charcoal to-jac-charcoal"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="mb-14 max-w-3xl">
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-white mb-4">
              What Moves Foundations <span className="text-jac-lime">In {city}</span>
            </h2>
            <div className="w-24 h-1 bg-jac-lime mb-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Local soil, water, and terrain decide how a foundation fails. Here is what we see most often on {city} properties — and what we do about it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {factors.map((factor, index) => (
              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 p-6 hover:border-jac-lime/50 hover:bg-white/[0.06] transition-all duration-300 flex flex-col"
              >
                <div className="w-10 h-10 border border-jac-lime/40 flex items-center justify-center mb-5 shrink-0">
                  <span className="font-subdisplay text-jac-lime text-lg">0{index + 1}</span>
                </div>
                <h3 className="font-subdisplay font-bold text-xl text-white uppercase tracking-wide mb-3">
                  {factor.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-jac-charcoal mb-4">
              Our Services In {city}
            </h2>
            <div className="w-24 h-1 bg-jac-lime mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="group border border-gray-200 p-6 flex items-center justify-between gap-4 hover:border-jac-green hover:shadow-lg transition-all duration-300"
              >
                <span className="font-subdisplay font-bold text-lg uppercase tracking-wide text-jac-charcoal group-hover:text-jac-green transition-colors">
                  {service.name}
                </span>
                <ArrowRight className="w-5 h-5 shrink-0 text-gray-300 group-hover:text-jac-green group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-gray-50 py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-display font-black text-2xl md:text-4xl uppercase text-jac-charcoal mb-4">
              Also Serving Near {city}
            </h2>
            <div className="w-16 h-1 bg-jac-lime"></div>
          </div>

          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-jac-charcoal"
              >
                <CheckCircle2 className="w-4 h-4 text-jac-green shrink-0" />
                {area}
              </span>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-8 max-w-3xl leading-relaxed">
            Do not see your community listed? We cover the wider Deep East Texas region — give us a call and we will let you know right away whether we can get to you.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/[0.02] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-jac-charcoal mb-4">
              {city} Foundation Repair FAQs
            </h2>
            <div className="w-24 h-1 bg-jac-lime mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
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
            {city} homeowners—<br className="hidden md:block" />Call <BrandName /> today!
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
