import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../../components/PageSEO';
import JsonLd from '../../components/JsonLd';
import { locations } from '../../data/locations';

const SITE_URL = 'https://www.jac-itfoundationrepair.com';

const BrandName = () => (
  <span className="inline-flex items-baseline font-normal tracking-normal lowercase">
    <span style={{ fontFamily: "'Birds of Paradise  Personal use', cursive" }} className="text-[1.5em] leading-none mr-0 capitalize">j</span>
    <span style={{ fontFamily: "'Ethnocentric Rg', sans-serif" }} className="text-[0.85em]">ac-it</span>
  </span>
);

export default function LocationsHub({ isLoading }: { isLoading?: boolean }) {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Jac-It Foundation Repair Service Areas in Deep East Texas",
    "itemListElement": locations.map((location, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `Foundation Repair in ${location.city}, TX`,
      "url": `${SITE_URL}/locations/${location.slug}`
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Locations", "item": `${SITE_URL}/locations` }
    ]
  };

  return (
    <>
      <PageSEO
        title="Service Areas | Foundation Repair Across Deep East Texas | Jac-It"
        description="Jac-It House Leveling & Foundation Repair serves Tyler, Lufkin, Longview, Livingston, Henderson, Nacogdoches, and Huntsville, TX. Find your city for local foundation repair details and free inspections."
        path="/locations"
      />
      <JsonLd id="locations-list" data={itemListSchema} />
      <JsonLd id="locations-breadcrumb" data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-jac-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/jacitgallery.jpeg"
            alt="Foundation repair across Deep East Texas"
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
            Deep East Texas
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.8 : 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4"
          >
            Areas We Serve
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.9 : 0.2 }}
            className="text-lg md:text-2xl text-jac-lime font-bold uppercase tracking-widest max-w-3xl"
          >
            Foundation Repair & House Leveling Across East Texas
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-jac-charcoal mb-8">
              25+ Years, <span className="text-jac-green">One Region</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Jac-It House Leveling & Foundation Repair has worked in Deep East Texas for more than 25 years. That matters more than it might sound like it does: soil, rainfall, and terrain change noticeably from one county to the next here, and the same crack in the same brick wall can have a completely different cause in Livingston than it does in Tyler.
              </p>
              <p>
                Pick your city below for the specifics — what tends to move foundations there, which services we use most often, and the surrounding communities we cover. Every inspection and estimate is free, anywhere we work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Cards */}
      <section className="bg-gray-50 py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display font-black text-2xl md:text-4xl uppercase text-jac-charcoal mb-4">
              Choose Your City
            </h2>
            <div className="w-16 h-1 bg-jac-lime"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                to={`/locations/${location.slug}`}
                className="group bg-white border border-gray-200 hover:border-jac-green hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden bg-jac-charcoal shrink-0">
                  <img
                    src={location.heroImage}
                    alt={`Foundation repair in ${location.city}, TX`}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-jac-charcoal/40"></div>
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight mb-1">
                      {location.city}
                    </h3>
                    <span className="text-jac-lime text-xs font-bold uppercase tracking-widest">
                      {location.county}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{location.teaser}</p>

                  <div className="mt-auto">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Also serving
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-5">
                      {location.nearbyAreas.slice(0, 4).join(' · ')}
                      {location.nearbyAreas.length > 4 && ' · more'}
                    </p>

                    <span className="font-bold tracking-wide text-sm uppercase text-jac-charcoal group-hover:text-jac-green transition-colors flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
                      {location.city} Foundation Repair
                      <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-10 max-w-3xl leading-relaxed">
            Do not see your community listed? We cover the wider Deep East Texas region — give us a call at{' '}
            <a href="tel:18776552248" className="text-jac-green font-bold hover:underline">1-877-65-JACIT</a>{' '}
            and we will let you know right away whether we can get to you.
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-jac-charcoal py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-jac-green/10 via-jac-charcoal to-jac-charcoal"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-6xl text-white uppercase mb-4 tracking-tight">
            Level up your home—<br className="hidden md:block" />Call <BrandName /> today!
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
